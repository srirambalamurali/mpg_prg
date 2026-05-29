import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';

import { initialFormState } from '@/assets/constants';
import { predictMpg } from '@/services/api';

const requiredFields = ['cylinders', 'displacement', 'horsepower', 'weight', 'acceleration', 'model_year', 'origin', 'brand'];

const hasValidationErrors = (values) =>
  requiredFields.some((field) => values[field] === '' || values[field] === null || values[field] === undefined);

export const useMpgPrediction = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [prediction, setPrediction] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateField = (field, value) => {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormValues(initialFormState);
    setPrediction(null);
    setErrorMessage('');
  };

  const submitPrediction = async (event) => {
    event.preventDefault();

    if (hasValidationErrors(formValues)) {
      const message = 'Please complete every vehicle input before predicting.';
      setErrorMessage(message);
      toast.error(message);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await predictMpg(formValues);
      setPrediction(response);
      toast.success(`Predicted MPG: ${response.predicted_mpg}`);
    } catch (requestError) {
      const message = requestError?.response?.data?.detail || 'Prediction failed. Please try again.';
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isReady = useMemo(() => !isSubmitting && !hasValidationErrors(formValues), [formValues, isSubmitting]);

  return {
    formValues,
    prediction,
    isSubmitting,
    errorMessage,
    isReady,
    updateField,
    submitPrediction,
    resetForm,
  };
};
