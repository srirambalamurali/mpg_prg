from __future__ import annotations

import logging
from functools import lru_cache
from pathlib import Path

import pandas as pd
from joblib import load

from ..config.settings import get_settings
from ..schemas.prediction import MPGPredictionRequest
from ..utils.normalization import efficiency_category, normalize_brand

logger = logging.getLogger(__name__)

_BRAND_ALIASES: dict[str, list[str]] = {
    "chevrolet": ["brand_chevrolet", "brand_chevy", "brand_chevroelt"],
    "mercedes-benz": ["brand_mercedes-benz", "brand_mercedes"],
    "mazda": ["brand_mazda", "brand_maxda"],
    "toyota": ["brand_toyota", "brand_toyouta"],
    "volkswagen": ["brand_volkswagen", "brand_vw", "brand_vokswagen"],
}


class ModelNotReadyError(RuntimeError):
    pass


class MPGModelService:
    def __init__(self, model_path: Path):
        self.model_path = model_path

    def load_model(self):
        if not self.model_path.exists():
            raise FileNotFoundError(f"Model artifact not found at {self.model_path}")

        logger.info("Loading model artifact from %s", self.model_path)
        return load(self.model_path)

    def _build_feature_frame(self, payload: MPGPredictionRequest, model) -> pd.DataFrame:
        feature_names = list(getattr(model, "feature_names_in_", []))
        if not feature_names:
            return pd.DataFrame(
                [
                    {
                        "cylinders": payload.cylinders,
                        "displacement": payload.displacement,
                        "horsepower": payload.horsepower,
                        "weight": payload.weight,
                        "acceleration": payload.acceleration,
                        "model_year": payload.model_year,
                        "origin": payload.origin,
                        "brand": normalize_brand(payload.brand),
                    }
                ]
            )

        feature_row = {column: 0 for column in feature_names}
        raw_brand = normalize_brand(payload.brand)

        for column, value in {
            "cylinders": payload.cylinders,
            "displacement": payload.displacement,
            "horsepower": payload.horsepower,
            "weight": payload.weight,
            "acceleration": payload.acceleration,
            "model_year": payload.model_year,
        }.items():
            if column in feature_row:
                feature_row[column] = value

        for candidate in _BRAND_ALIASES.get(raw_brand, [f"brand_{raw_brand}"]):
            if candidate in feature_row:
                feature_row[candidate] = 1
                break

        if payload.origin == 2 and "origin_2" in feature_row:
            feature_row["origin_2"] = 1
        elif payload.origin == 3 and "origin_3" in feature_row:
            feature_row["origin_3"] = 1

        return pd.DataFrame([feature_row], columns=feature_names)

    def predict(self, payload: MPGPredictionRequest) -> dict[str, float | str]:
        model = self.load_model()
        feature_frame = self._build_feature_frame(payload, model)
        predicted_mpg = float(model.predict(feature_frame)[0])
        rounded_prediction = round(predicted_mpg, 2)

        return {
            "predicted_mpg": rounded_prediction,
            "efficiency_category": efficiency_category(rounded_prediction),
        }


@lru_cache(maxsize=1)
def get_model_service() -> MPGModelService:
    settings = get_settings()
    return MPGModelService(settings.model_path)
