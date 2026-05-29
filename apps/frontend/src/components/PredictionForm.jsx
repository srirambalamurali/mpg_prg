import { motion } from 'framer-motion';
import { FiCpu, FiRefreshCcw, FiSend } from 'react-icons/fi';

import { brandOptions, originOptions } from '@/assets/constants';

const inputFields = [
  { name: 'cylinders', label: 'Cylinders', type: 'number', min: 1, step: 1 },
  { name: 'displacement', label: 'Displacement', type: 'number', min: 0, step: 0.1 },
  { name: 'horsepower', label: 'Horsepower', type: 'number', min: 0, step: 0.1 },
  { name: 'weight', label: 'Weight', type: 'number', min: 0, step: 0.1 },
  { name: 'acceleration', label: 'Acceleration', type: 'number', min: 0, step: 0.1 },
  { name: 'model_year', label: 'Model Year', type: 'number', min: 0, step: 1 },
];

export const PredictionForm = ({ formValues, onChange, onSubmit, onReset, isSubmitting, isReady, errorMessage }) => (
  <section id="prediction-form" className="mt-12 scroll-mt-10 lg:mt-16">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.55 }}
      className="glass-panel rounded-[2rem] p-5 md:p-8"
    >
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="label-chip">Prediction Console</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Enter vehicle specifications</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            The model uses the eight features below to infer fuel efficiency from the trained pipeline.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-electric-400/15 bg-electric-400/10 px-4 py-2 text-sm text-electric-100">
          <FiCpu />
          Live ML Inference
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {inputFields.map((field) => (
            <label key={field.name} className="space-y-2">
              <span className="text-sm font-medium text-slate-300">{field.label}</span>
              <input
                className="input-shell"
                type={field.type}
                min={field.min}
                step={field.step}
                value={formValues[field.name]}
                onChange={(event) => onChange(field.name, event.target.value === '' ? '' : Number(event.target.value))}
                required
              />
            </label>
          ))}

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-300">Origin</span>
            <select
              className="input-shell"
              value={formValues.origin}
              onChange={(event) => onChange('origin', Number(event.target.value))}
              required
            >
              {originOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-midnight-950">
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-300">Brand</span>
            <select
              className="input-shell"
              value={formValues.brand}
              onChange={(event) => onChange('brand', event.target.value)}
              required
            >
              {brandOptions.map((brand) => (
                <option key={brand} value={brand} className="bg-midnight-950">
                  {brand.replace('-', ' ')}
                </option>
              ))}
            </select>
          </label>
        </div>

        {errorMessage ? (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {errorMessage}
          </div>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="submit" className="button-primary disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting || !isReady}>
            {isSubmitting ? (
              <>
                <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
                Predicting...
              </>
            ) : (
              <>
                <FiSend />
                Predict MPG
              </>
            )}
          </button>
          <button type="button" className="button-secondary" onClick={onReset} disabled={isSubmitting}>
            <FiRefreshCcw />
            Reset Form
          </button>
        </div>
      </form>
    </motion.div>
  </section>
);
