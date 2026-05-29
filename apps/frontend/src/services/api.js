import { httpClient } from './httpClient';

export const predictMpg = async (payload) => {
  const response = await httpClient.post('/predict', payload);
  return response.data;
};

export const fetchHealth = async () => {
  const response = await httpClient.get('/health');
  return response.data;
};
