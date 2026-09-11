export function parallaxOffset(scrollY: number, strength = 0.12): number { return Math.round(scrollY * strength); }
