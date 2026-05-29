from pydantic import BaseModel, ConfigDict, Field


class MPGPredictionRequest(BaseModel):
    model_config = ConfigDict(protected_namespaces=())

    cylinders: int = Field(..., ge=1, le=12)
    displacement: float = Field(..., ge=0)
    horsepower: float = Field(..., ge=0)
    weight: float = Field(..., ge=0)
    acceleration: float = Field(..., ge=0)
    model_year: int = Field(..., ge=0, le=99)
    origin: int = Field(..., ge=1, le=3)
    brand: str = Field(..., min_length=1, max_length=80)


class MPGPredictionResponse(BaseModel):
    model_config = ConfigDict(protected_namespaces=())

    predicted_mpg: float
    efficiency_category: str
