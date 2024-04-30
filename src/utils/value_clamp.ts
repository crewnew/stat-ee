export function clamp(value: number, max: number): number {
        return Math.min(value, max);
}

export function clampBetween(value: number, min: number, max: number): number {
        return Math.min(max, Math.max(min, value));
}
