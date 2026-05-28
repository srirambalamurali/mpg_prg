import { httpClient } from './httpClient';

export const predictMpg = async (payload) => {
  const response = await httpClient.post('/api/predict', payload);
  return response.data;
};

export const fetchHealth = async () => {
  const response = await httpClient.get('/api/health');
  return response.data;
};
