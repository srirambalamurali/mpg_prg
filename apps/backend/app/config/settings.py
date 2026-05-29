from functools import lru_cache
from pathlib import Path
import os

from pydantic import BaseModel, ConfigDict, Field


def _default_model_path() -> Path:
    configured_path = os.getenv("MODEL_PATH")
    if configured_path:
        return Path(configured_path)
    return Path(__file__).resolve().parents[4] / "ml" / "models" / "final_pipeline.pkl"


def _default_cors_origins() -> list[str]:
    configured_origins = os.getenv("CORS_ORIGINS", "*")
    origins = [origin.strip() for origin in configured_origins.split(",") if origin.strip()]
    return origins or ["*"]


class Settings(BaseModel):
    model_config = ConfigDict(protected_namespaces=())

    app_name: str = "Auto MPG AI"
    api_prefix: str = "/api"
    model_path: Path = Field(default_factory=_default_model_path)
    cors_origins: list[str] = Field(default_factory=_default_cors_origins)
    log_level: str = Field(default_factory=lambda: os.getenv("LOG_LEVEL", "INFO"))


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()
