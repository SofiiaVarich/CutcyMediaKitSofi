export function animateCounter(element: HTMLElement, end: number, duration = 900): void {
  const start = performance.now();
  const tick = (now: number) => { const progress = Math.min((now - start) / duration, 1); element.textContent = Math.round(progress * end).toString(); if (progress < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
