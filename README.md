# Auto MPG Monorepo

This repository is now organized as a single clean monorepo with one frontend and one backend.

## Structure

```text
root/
├── apps/
│   ├── frontend/
│   └── backend/
├── ml/
├── docs/
├── package.json
├── turbo.json
├── pnpm-workspace.yaml
├── vercel.json
└── README.md
```

## Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: FastAPI + Pydantic + Uvicorn
- Monorepo: TurboRepo + pnpm workspace
- Deployment: Vercel

## What Changed

- The canonical frontend now lives in [apps/frontend](apps/frontend).
- The canonical backend now lives in [apps/backend](apps/backend).
- The trained model artifact now lives in [ml/models/final_pipeline.pkl](ml/models/final_pipeline.pkl).
- ML source assets live under [ml](ml).

## Local Development

Install dependencies from the repository root:

```powershell
pnpm install
python -m pip install -r apps/backend/requirements.txt
```

Run both apps together:

```powershell
pnpm dev
```

Run the frontend only:

```powershell
pnpm dev:frontend
```

Run the backend only:

```powershell
pnpm dev:backend
```

## API

- `GET /api/health`
- `POST /api/predict`

Example payload:

```json
{
  "cylinders": 4,
  "displacement": 140,
  "horsepower": 90,
  "weight": 2400,
  "acceleration": 15,
  "model_year": 82,
  "origin": 1,
  "brand": "toyota"
}
```

## Environment Variables

- Frontend local development: `VITE_API_URL=http://127.0.0.1:8000/api`
- Frontend Vercel deployment: `VITE_API_URL=/api`
- Backend model path override: `MODEL_PATH=ml/models/final_pipeline.pkl`
- Backend CORS override: `CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173`

## Deployment

The root [vercel.json](vercel.json) is configured for a single Vercel deployment:

- `/api/*` routes to [apps/backend/index.py](apps/backend/index.py)
- the frontend builds from [apps/frontend/package.json](apps/frontend/package.json)
- the SPA fallback serves [apps/frontend/dist/index.html](apps/frontend/dist/index.html)

After updating deployment config, push a new commit to `main` so Vercel creates a fresh production deployment for the project domain.

If you deploy the frontend and backend separately, keep the same API contract and point `VITE_API_URL` at the backend deployment.

## Notes

- The backend still exposes health and prediction endpoints independently.
- The frontend still uses Vite proxying to `http://127.0.0.1:8000` during local development.
- The `docs/` folder contains run instructions and project notes.
