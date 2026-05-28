from fastapi import APIRouter, HTTPException, status

from ..schemas.prediction import MPGPredictionRequest, MPGPredictionResponse
from ..services.model_service import get_model_service

router = APIRouter(tags=["prediction"])


@router.post("/predict", response_model=MPGPredictionResponse)
def predict_mpg(payload: MPGPredictionRequest):
    try:
        prediction = get_model_service().predict(payload)
        return MPGPredictionResponse(**prediction)
    except FileNotFoundError as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=str(exc),
        ) from exc
    except Exception as exc:  # pragma: no cover - safety net for production runtime
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Prediction request failed.",
        ) from exc
