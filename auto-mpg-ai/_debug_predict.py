import traceback
from time import perf_counter

from apps.backend.app.schemas.prediction import MPGPredictionRequest
from apps.backend.app.services.model_service import get_model_service

payload = MPGPredictionRequest(
    cylinders=4,
    displacement=140,
    horsepower=90,
    weight=2400,
    acceleration=15,
    model_year=82,
    origin=2,
    brand='toyota',
)

service = get_model_service()
print(service.model_path, flush=True)

model = service.load_model()
print(getattr(model, 'feature_names_in_', None), flush=True)

started = perf_counter()
try:
    result = service.predict(payload)
    print(f"ok in {perf_counter() - started:.2f}s", flush=True)
    print(result, flush=True)
except Exception:
    print(f"failed in {perf_counter() - started:.2f}s", flush=True)
    traceback.print_exc()
