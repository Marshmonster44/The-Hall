let ctx: AudioContext | null = null;

function ac() {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export function unlockAudio() {
  ac();
}

function blip(freq: number, dur: number, type: OscillatorType, gain: number, at = 0) {
  const c = ac();
  if (!c) return;
  const t = c.currentTime + at;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.45), t + dur);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g);
  g.connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}

export function playHit(heavy: boolean) {
  blip(heavy ? 90 : 140, heavy ? 0.28 : 0.16, "square", heavy ? 0.09 : 0.06);
  blip(heavy ? 220 : 340, 0.08, "sawtooth", 0.04, 0.01);
}

export function playClash() {
  blip(180, 0.12, "square", 0.05);
  blip(420, 0.07, "triangle", 0.03, 0.02);
}

export function playWin() {
  blip(196, 0.18, "triangle", 0.05);
  blip(247, 0.22, "triangle", 0.05, 0.12);
  blip(330, 0.3, "triangle", 0.06, 0.24);
}

export function playLoss() {
  blip(140, 0.35, "sine", 0.06);
  blip(90, 0.45, "sine", 0.05, 0.08);
}
