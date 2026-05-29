# Auto MPG Monorepo

Auto MPG Monorepo is a full-stack machine learning application for predicting vehicle fuel efficiency from automobile specifications.

The repo is organized as a professional monorepo with one React + Vite frontend, one FastAPI backend, and one active scikit-learn pipeline artifact.

## What Lives Where

```text
auto-mpg-monorepo/
├── apps/
│   ├── frontend/
│   └── backend/
├── ml/
├── docs/
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── vercel.json
└── README.md
```

The active model artifact is stored at [apps/backend/models/final_pipeline.pkl](apps/backend/models/final_pipeline.pkl).

## Stack

- Frontend: React, Vite, Tailwind CSS, Axios, Framer Motion, React Icons, React Hot Toast
- Backend: FastAPI, Pydantic, Uvicorn, Joblib, Pandas, NumPy, scikit-learn
- Deployment: Vercel

## Local Development

Install dependencies from the repository root:

```bash
npm install
pip install -r apps/backend/requirements.txt
```

Run both apps together:

```bash
npm run dev
```

Frontend only:

```bash
npm run frontend
```

Backend only:

```bash
npm run backend
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

- Single Vercel deployment: `VITE_API_URL=/api`
- Separate frontend/backend deployments: `VITE_API_URL=https://<backend-deployment>/api`
- Backend: `MODEL_PATH=apps/backend/models/final_pipeline.pkl`

## Deployment

1. For one monorepo deployment, import the repo root in Vercel and keep the root `vercel.json`.
2. That config routes `/api/*` to `apps/backend/index.py` and serves the frontend build from `apps/frontend`.
3. For that single-project setup, set `VITE_API_URL=/api`.
4. If you prefer separate Vercel projects, deploy `apps/frontend` and `apps/backend` independently and point the frontend at the backend deployment URL.

## Notes

- The frontend keeps the existing UI layout and motion design.
- The backend keeps the same inference behavior and validation rules.
- `ml/` contains notebooks, datasets, and experiment artifacts only.
- `model_year`

Categorical:

- `origin`
- `brand`
