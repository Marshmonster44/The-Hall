export type Faction = "celt" | "north";

export type MoveId = "cut" | "thrust" | "bind" | "cover" | "feint" | "charge";

export type Champion = {
  id: string;
  name: string;
  people: string;
  faction: Faction;
  era: string;
  height: string;
  weight: string;
  heightIn: number;
  weightLb: number;
  weapon: string;
  armor: string;
  mass: number;
  reach: number;
  plate: number;
  skill: number;
  fury: number;
  portrait: string;
  about: string;
  scary: string;
  favors: MoveId[];
};

export const MOVES: Record<
  MoveId,
  { name: string; hint: string }
> = {
  cut: { name: "Cut", hint: "Long edge. Wants reach and a clean line." },
  thrust: { name: "Thrust", hint: "Point work. Finds the gaps in mail." },
  bind: { name: "Bind", hint: "Take their blade. A trained duelist’s trick." },
  cover: { name: "Cover", hint: "Board up. Soak the blow, lose the tempo." },
  feint: { name: "Feint", hint: "Sell a line. Punish a committed strike." },
  charge: { name: "Charge", hint: "Mass and fury. Ugly if they sidestep." },
};

export const CHAMPIONS: Champion[] = [
  {
    id: "viridomarus",
    name: "Viridomarus",
    people: "Insubres",
    faction: "celt",
    era: "222 BC",
    height: "6′4″",
    weight: "232 lb",
    heightIn: 76,
    weightLb: 232,
    weapon: "Long La Tène slashing sword",
    armor: "Mail, helm, long shield",
    mass: 72,
    reach: 86,
    plate: 70,
    skill: 88,
    fury: 64,
    portrait: "/champions/viridomarus.jpg",
    about:
      "King of the Insubres. Rode out in gold and challenged the Roman consul Marcellus to single combat — and got it. That is a man who trained for the duel, not the scrum.",
    scary:
      "He wanted the fight in the open. Reach, a long edge, and the habit of killing named men.",
    favors: ["cut", "bind", "feint"],
  },
  {
    id: "konkolitanos",
    name: "Konkolitanos",
    people: "Gaesatae",
    faction: "celt",
    era: "225 BC",
    height: "6′5″",
    weight: "238 lb",
    heightIn: 77,
    weightLb: 238,
    weapon: "Longsword, javelins",
    armor: "Gold torc. Skin. A vow.",
    mass: 74,
    reach: 84,
    plate: 18,
    skill: 80,
    fury: 92,
    portrait: "/champions/konkolitanos.jpg",
    about:
      "Gaesatae king who fought the Romans at Telamon. His people went into battle naked by vow — terror as armor. Polybius says the sight of them stopped men cold.",
    scary:
      "No mail to hide in. A huge, fast cutter who has already decided he is dead or famous.",
    favors: ["cut", "charge", "feint"],
  },
  {
    id: "viriathus",
    name: "Viriathus",
    people: "Lusitani",
    faction: "celt",
    era: "147–139 BC",
    height: "5′10″",
    weight: "178 lb",
    heightIn: 70,
    weightLb: 178,
    weapon: "Falcata and spear",
    armor: "Light: hide, small shield",
    mass: 52,
    reach: 68,
    plate: 40,
    skill: 96,
    fury: 70,
    portrait: "/champions/viriathus.jpg",
    about:
      "Shepherd who became the terror of Rome in Iberia. Not the largest man in this hall — the one who never offered a fair fight he could make unfair. Years of ambush, then a knife in the dark from his own.",
    scary:
      "He will not stand where you want him. Highest duelist craft in the roster, lowest mass.",
    favors: ["feint", "thrust", "bind"],
  },
  {
    id: "boduognatus",
    name: "Boduognatus",
    people: "Nervii",
    faction: "celt",
    era: "57 BC",
    height: "6′3″",
    weight: "224 lb",
    heightIn: 75,
    weightLb: 224,
    weapon: "Heavy spear, longsword",
    armor: "Shield-wall kit, mail",
    mass: 70,
    reach: 78,
    plate: 66,
    skill: 74,
    fury: 86,
    portrait: "/champions/boduognatus.jpg",
    about:
      "Led the Nervii at the Sabis. Caesar’s line nearly broke. Belgic, tall, used to crashing a shield into a man and finishing him on the ground.",
    scary:
      "A charge with weight behind it, not a palaestra bout. He wants you on your back.",
    favors: ["charge", "cover", "cut"],
  },
  {
    id: "teutobod",
    name: "Teutobod",
    people: "Cimbri",
    faction: "north",
    era: "101 BC",
    height: "6′7″",
    weight: "278 lb",
    heightIn: 79,
    weightLb: 278,
    weapon: "Heavy framea and longsword",
    armor: "Cimbrian war-kit: mail, bossed shield, helm",
    mass: 96,
    reach: 90,
    plate: 78,
    skill: 70,
    fury: 80,
    portrait: "/champions/teutobod.jpg",
    about:
      "King of the Cimbri. The migration that wrecked Roman armies for a decade. Taken alive at Aquae Sextiae — the sources linger on his size. This is the heavily armed northern champion, not a forest raider.",
    scary:
      "Mass, reach, and a shield you cannot walk through. The largest body in the hall.",
    favors: ["charge", "cut", "cover"],
  },
  {
    id: "chnodomar",
    name: "Chnodomar",
    people: "Alamanni",
    faction: "north",
    era: "AD 357",
    height: "6′6″",
    weight: "266 lb",
    heightIn: 78,
    weightLb: 266,
    weapon: "Long spear, spatha",
    armor: "Mail, helm, tall shield",
    mass: 90,
    reach: 88,
    plate: 74,
    skill: 72,
    fury: 78,
    portrait: "/champions/chnodomar.jpg",
    about:
      "Alemannic king at Strasbourg. Ammianus says he towered over his own giants. Fought from a horse until it was killed under him, then on foot among the press — and still had to be dragged out of a bog.",
    scary:
      "A head taller than the line. If he gets his weight on you, the fight is over.",
    favors: ["charge", "thrust", "cover"],
  },
  {
    id: "gunnar",
    name: "Gunnar of Hlíðarendi",
    people: "Icelanders",
    faction: "north",
    era: "c. AD 990",
    height: "6′1″",
    weight: "198 lb",
    heightIn: 73,
    weightLb: 198,
    weapon: "Atgeir and sword",
    armor: "Mail, round shield",
    mass: 62,
    reach: 80,
    plate: 68,
    skill: 98,
    fury: 60,
    portrait: "/champions/gunnar.jpg",
    about:
      "The holmgang man of Njáls saga. So fair he was almost a problem, so dangerous with the atgeir that named fighters would not stand on the island with him. Historically rooted, saga-polished — the trained duelist of the north.",
    scary:
      "He has done this on a cloak in the dirt, with rules, and he does not miss.",
    favors: ["bind", "thrust", "feint"],
  },
  {
    id: "egill",
    name: "Egill Skallagrímsson",
    people: "Icelanders",
    faction: "north",
    era: "c. AD 930–990",
    height: "6′0″",
    weight: "218 lb",
    heightIn: 72,
    weightLb: 218,
    weapon: "Axe and sword",
    armor: "Mail, when he bothers",
    mass: 76,
    reach: 70,
    plate: 58,
    skill: 82,
    fury: 97,
    portrait: "/champions/egill.jpg",
    about:
      "Poet, killer, ugly as a troll and twice as hard to put down. Real man, saga life. Holmgangs, family wars, a skull they say was thick enough to turn a blow. Fury over form.",
    scary:
      "He will take a wound to give a worse one. The fight does not end when a sane man would stop.",
    favors: ["cut", "charge", "feint"],
  },
];

export function championById(id: string) {
  return CHAMPIONS.find((c) => c.id === id);
}
