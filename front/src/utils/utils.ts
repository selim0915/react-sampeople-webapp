export const pad = (n: number) => String(n).padStart(2, '0');
export const timeFormatter = (t: number) => `${pad(Math.floor(t / 60))}:${pad(t % 60)}`;
