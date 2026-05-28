from __future__ import annotations

import re


def normalize_brand(value: str) -> str:
    normalized = value.strip().lower()
    normalized = re.sub(r"\s+", "_", normalized)
    normalized = re.sub(r"[^a-z0-9_\-]", "", normalized)
    return normalized


def efficiency_category(predicted_mpg: float) -> str:
    if predicted_mpg < 20:
        return "Low Efficiency"
    if predicted_mpg < 30:
        return "Moderate Efficiency"
    return "High Efficiency"
