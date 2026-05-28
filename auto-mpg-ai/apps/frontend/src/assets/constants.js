export const initialFormState = {
  cylinders: 4,
  displacement: 140,
  horsepower: 90,
  weight: 2400,
  acceleration: 15,
  model_year: 82,
  origin: 1,
  brand: 'toyota',
};

export const originOptions = [
  { label: 'United States', value: 1 },
  { label: 'Europe', value: 2 },
  { label: 'Japan', value: 3 },
];

export const brandOptions = [
  'audi',
  'bmw',
  'buick',
  'cadillac',
  'chevrolet',
  'datsun',
  'ford',
  'honda',
  'mazda',
  'mercedes-benz',
  'mercury',
  'nissan',
  'oldsmobile',
  'opel',
  'peugeot',
  'plymouth',
  'pontiac',
  'renault',
  'saab',
  'subaru',
  'toyota',
  'volkswagen',
  'volvo',
  'vw',
].sort();

export const featureCards = [
  {
    title: 'Random Forest Regressor',
    description: 'Robust tree ensemble tuned for nonlinear MPG behavior and real-world feature interactions.',
  },
  {
    title: 'Hyperparameter Tuned',
    description: 'Optimized configuration designed to improve generalization and prediction stability.',
  },
  {
    title: 'Feature Engineering',
    description: 'Cleansed numeric and categorical vehicle inputs shaped for strong model performance.',
  },
  {
    title: 'Pipeline Automation',
    description: 'Preprocessing and inference are packaged into one deployable pipeline artifact.',
  },
  {
    title: 'FastAPI Backend',
    description: 'Validated JSON API with health checks, logging, and serverless-friendly structure.',
  },
  {
    title: 'Vite Frontend',
    description: 'Fast static frontend with a premium dashboard feel and responsive motion design.',
  },
];
