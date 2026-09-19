import type { Champion, MoveId } from "@/data/champions";

export type FighterState = {
  hp: number;
  maxHp: number;
  stamina: number;
  initiative: number;
};

export type Exchange = {
  beat: number;
  youMove: MoveId;
  foeMove: MoveId;
  youDmg: number;
  foeDmg: number;
  line: string;
  crit: boolean;
};

export type DuelResult = "you" | "foe" | "draw";

const COMMITTED: MoveId[] = ["cut", "thrust", "charge"];

function clamp(n: number, a = 0, b = 100) {
  return Math.max(a, Math.min(b, n));
}

export function startFighter(c: Champion): FighterState {
  const maxHp = Math.round(88 + c.mass * 0.35 + c.plate * 0.12);
  return { hp: maxHp, maxHp, stamina: 100, initiative: 0 };
}

function pickAi(c: Champion, youMove: MoveId, rng: () => number): MoveId {
  const bag: MoveId[] = [...c.favors, ...c.favors, "cover", "cut"];
  if (youMove === "charge") bag.push("cover", "feint", "feint");
  if (youMove === "feint") bag.push("cover", "bind");
  if (c.fury > 85) bag.push("charge", "cut");
  if (c.skill > 90) bag.push("bind", "feint", "thrust");
  return bag[Math.floor(rng() * bag.length)] ?? "cut";
}

function power(c: Champion, move: MoveId, stam: number, init: number) {
  const tired = stam < 25 ? 0.78 : stam < 50 ? 0.9 : 1;
  const initBonus = 1 + init * 0.08;
  const base =
    move === "cut"
      ? c.skill * 0.45 + c.reach * 0.35 + c.mass * 0.15
      : move === "thrust"
        ? c.skill * 0.5 + c.reach * 0.25 + (100 - c.plate) * 0.05
        : move === "bind"
          ? c.skill * 0.7 + c.reach * 0.15
          : move === "cover"
            ? c.plate * 0.4 + c.mass * 0.2
            : move === "feint"
              ? c.skill * 0.65 + c.fury * 0.15
              : c.mass * 0.5 + c.fury * 0.35 + c.reach * 0.1;
  return base * tired * initBonus;
}

function armorSoak(defender: Champion, move: MoveId) {
  if (move === "thrust") return defender.plate * 0.28;
  if (move === "cut") return defender.plate * 0.42;
  if (move === "charge") return defender.plate * 0.32;
  if (move === "bind") return defender.plate * 0.15;
  if (move === "feint") return defender.plate * 0.2;
  return defender.plate * 0.5;
}

function strikeLine(
  attacker: Champion,
  defender: Champion,
  move: MoveId,
  dmg: number,
  crit: boolean,
) {
  const hit = dmg <= 0;
  if (hit) {
    if (move === "cover") return `${attacker.name} covers and takes nothing worth naming.`;
    if (move === "feint") return `${defender.name} does not buy the feint.`;
    if (move === "charge") return `${defender.name} is not there when the charge lands.`;
    return `${defender.name} turns ${attacker.name}'s ${move}.`;
  }
  const bite = crit ? " — a telling blow" : "";
  if (move === "cut")
    return `${attacker.name} lays the long edge in${bite}.`;
  if (move === "thrust")
    return `${attacker.name} puts the point through the gap${bite}.`;
  if (move === "bind")
    return `${attacker.name} takes the blade and steps in${bite}.`;
  if (move === "charge")
    return `${attacker.name} runs him down with weight${bite}.`;
  if (move === "feint")
    return `${attacker.name} sells the line and hits the other${bite}.`;
  return `${attacker.name} boards up.`;
}

export function resolveExchange(opts: {
  you: Champion;
  foe: Champion;
  youState: FighterState;
  foeState: FighterState;
  youMove: MoveId;
  beat: number;
  rng?: () => number;
}): {
  youState: FighterState;
  foeState: FighterState;
  exchange: Exchange;
  foeMove: MoveId;
} {
  const rng = opts.rng ?? Math.random;
  const foeMove = pickAi(opts.foe, opts.youMove, rng);
  const ys = { ...opts.youState };
  const fs = { ...opts.foeState };

  const cost: Record<MoveId, number> = {
    cut: 12,
    thrust: 10,
    bind: 14,
    cover: 8,
    feint: 11,
    charge: 22,
  };
  ys.stamina = clamp(ys.stamina - cost[opts.youMove]);
  fs.stamina = clamp(fs.stamina - cost[foeMove]);

  let youMult = 1;
  let foeMult = 1;
  let youInit = 0;
  let foeInit = 0;
  let crit = false;

  const youCommit = COMMITTED.includes(opts.youMove);
  const foeCommit = COMMITTED.includes(foeMove);

  if (opts.youMove === "feint" && foeCommit) {
    youMult *= 1.55;
    foeMult *= 0.45;
    crit = true;
  }
  if (foeMove === "feint" && youCommit) {
    foeMult *= 1.55;
    youMult *= 0.45;
    crit = true;
  }
  if (opts.youMove === "feint" && !foeCommit) youMult *= 0.55;
  if (foeMove === "feint" && !youCommit) foeMult *= 0.55;

  if (opts.youMove === "bind" && foeCommit) {
    youMult *= 1.25;
    youInit = 1;
    foeMult *= 0.7;
  }
  if (foeMove === "bind" && youCommit) {
    foeMult *= 1.25;
    foeInit = 1;
    youMult *= 0.7;
  }

  if (opts.youMove === "cover") {
    foeMult *= 0.38;
    youMult *= 0.35;
    ys.stamina = clamp(ys.stamina + 6);
  }
  if (foeMove === "cover") {
    youMult *= 0.38;
    foeMult *= 0.35;
    fs.stamina = clamp(fs.stamina + 6);
  }

  if (opts.youMove === "charge" && foeMove === "feint") youMult *= 0.4;
  if (foeMove === "charge" && opts.youMove === "feint") foeMult *= 0.4;
  if (opts.youMove === "charge" && foeMove === "cover") youMult *= 0.7;
  if (foeMove === "charge" && opts.youMove === "cover") foeMult *= 0.7;

  const jitter = () => 0.86 + rng() * 0.28;

  const youRaw =
    (power(opts.you, opts.youMove, ys.stamina, ys.initiative) * youMult * jitter() -
      armorSoak(opts.foe, opts.youMove) * 0.45) /
    6.2;
  const foeRaw =
    (power(opts.foe, foeMove, fs.stamina, fs.initiative) * foeMult * jitter() -
      armorSoak(opts.you, foeMove) * 0.45) /
    6.2;

  const youDmg = opts.youMove === "cover" ? 0 : Math.max(0, Math.round(youRaw));
  const foeDmg = foeMove === "cover" ? 0 : Math.max(0, Math.round(foeRaw));

  fs.hp = clamp(fs.hp - youDmg, 0, fs.maxHp);
  ys.hp = clamp(ys.hp - foeDmg, 0, ys.maxHp);
  ys.initiative = youInit;
  fs.initiative = foeInit;

  const yourLine = strikeLine(opts.you, opts.foe, opts.youMove, youDmg, crit && youDmg > foeDmg);
  const theirLine = strikeLine(opts.foe, opts.you, foeMove, foeDmg, crit && foeDmg > youDmg);
  const line =
    youDmg === 0 && foeDmg === 0
      ? "Iron on iron. Dust. Nothing given."
      : `${yourLine} ${theirLine}`;

  return {
    youState: ys,
    foeState: fs,
    foeMove,
    exchange: {
      beat: opts.beat,
      youMove: opts.youMove,
      foeMove,
      youDmg,
      foeDmg,
      line,
      crit,
    },
  };
}

export function winnerOf(
  you: FighterState,
  foe: FighterState,
  beat: number,
  maxBeats: number,
): DuelResult | null {
  if (you.hp <= 0 && foe.hp <= 0) return "draw";
  if (foe.hp <= 0) return "you";
  if (you.hp <= 0) return "foe";
  if (beat >= maxBeats) {
    if (you.hp === foe.hp) return "draw";
    return you.hp > foe.hp ? "you" : "foe";
  }
  return null;
}

export const MAX_BEATS = 7;
