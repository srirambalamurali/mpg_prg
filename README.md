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

- Frontend: `VITE_API_URL=https://<backend-deployment>/api`
- Backend: `MODEL_PATH=apps/backend/models/final_pipeline.pkl`

## Deployment

1. Deploy the backend from `apps/backend`.
2. Deploy the frontend from `apps/frontend`.
3. Set the frontend `VITE_API_URL` to the backend deployment URL with the `/api` suffix.
4. Keep the shared root `vercel.json` if you want a combined single-project deployment path.

## Notes

- The frontend keeps the existing UI layout and motion design.
- The backend keeps the same inference behavior and validation rules.
- `ml/` contains notebooks, datasets, and experiment artifacts only.
- `model_year`

Categorical:

- `origin`
- `brand`
