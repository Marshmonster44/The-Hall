import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Minimize2, c as ChevronLeft, i as Minus, n as RotateCcw, o as Maximize2, r as Plus, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D_flGBR0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WORKS = [
	{
		id: "david",
		title: "David",
		maker: "Michelangelo Buonarroti",
		years: "1501–1504",
		place: "Galleria dell’Accademia, Florence",
		medium: "Carrara marble · 5.17 m",
		note: "The long, tensed youth — weight on one leg, stone still in the sling. The original, not the piazza copy.",
		image: "/works/david.jpg"
	},
	{
		id: "discobolus",
		title: "Discobolus",
		maker: "Roman copy after Myron",
		years: "c. 460–450 BC (original) · this marble c. 140 AD",
		place: "Palazzo Massimo alle Terme, Rome",
		medium: "Marble after a lost bronze",
		note: "The Lancellotti copy — the discus at the top of the wind-up, every muscle in the turn.",
		image: "/works/discobolus.jpg"
	},
	{
		id: "diadumenos",
		title: "Diadumenos",
		maker: "Marble copy after Polykleitos",
		years: "c. 430 BC (original) · this marble c. 100 BC",
		place: "National Archaeological Museum, Athens",
		medium: "Island marble · 1.95 m",
		note: "The victor tying the fillet. Found on Delos. The Canon in a quieter key than the Doryphoros.",
		image: "/works/diadumenos.jpg"
	},
	{
		id: "boxer",
		title: "Boxer at Rest",
		maker: "Hellenistic bronze, perhaps Apollonius",
		years: "c. 330–50 BC",
		place: "Palazzo Massimo alle Terme, Rome",
		medium: "Bronze with copper inlays",
		note: "Cauliflower ears, a nose broken more than once, copper blood on the cuts. A used man, not an ideal.",
		image: "/works/boxer.jpg"
	},
	{
		id: "greek-officer",
		title: "Macedonian Hypaspist",
		maker: "Reconstruction illustration",
		years: "type of the late 4th century BC",
		place: "Alexander’s army in the East",
		medium: "Painted reconstruction",
		note: "Not a polis hoplite. Phrygian helm, muscled thorax, aspis, and a single greave — the shield-bearer who walked beside the king in Asia.",
		image: "/works/greek-officer.jpg"
	},
	{
		id: "companion",
		title: "Companion Cavalry",
		maker: "Reconstruction illustration",
		years: "type of the late 4th century BC",
		place: "The hetairoi — Alexander’s horse",
		medium: "Painted reconstruction",
		note: "Boeotian helm, the long xyston, leopard skin on the horse. The Companion who rode in the wedge that broke the Persian line.",
		image: "/works/companion.jpg"
	},
	{
		id: "hypaspist",
		title: "Royal Hypaspist",
		maker: "Reconstruction illustration",
		years: "type of the late 4th century BC",
		place: "The agema — the king’s shield-bearers",
		medium: "Painted reconstruction",
		note: "Phrygian helm, linothorax, both greaves. On the aspis: Alexander as Zeus-Ammon. The infantry that stood nearest the king.",
		image: "/works/hypaspist.jpg"
	},
	{
		id: "gallic-noble",
		title: "Gallic Noble",
		maker: "Costume plate, Vinkhuijzen collection",
		years: "c. 1910",
		place: "New York Public Library",
		medium: "Colored illustration · after a medal",
		note: "A Gallic champion as the 19th century drew him: winged helmet, torque, mail, long sword and oval shield.",
		image: "/works/gallic-noble.jpg"
	},
	{
		id: "latene-celt",
		title: "La Tène Celt",
		maker: "Reconstruction",
		years: "type of c. 400–50 BC",
		place: "The La Tène world — from the Marne to the Danube",
		medium: "Digital reconstruction",
		note: "No mail, no helm. Patterned trousers, oval thureos, spear and a short sword. The Celt as the Greeks first saw him — a self-portrait in the kit.",
		image: "/works/latene-celt.jpg"
	},
	{
		id: "vercingetorix",
		title: "Vercingetorix",
		maker: "Chromolithograph costume plate",
		years: "19th century",
		place: "The Arverni — king of the Gallic coalition",
		medium: "Colored lithograph",
		note: "The man who unified Gaul against Caesar. Winged helm, gold, the long sword — as the 19th century drew the last king of the Gauls.",
		image: "/works/vercingetorix.jpg"
	},
	{
		id: "viridomarus",
		title: "Viridomarus",
		maker: "Digital reconstruction",
		years: "killed 222 BC",
		place: "The Insubres — Clastidium",
		medium: "Painted reconstruction",
		note: "King of the Insubres. Mail, gold helm, the long sword. Marcellus took the spolia opima from him — the last Roman to strip a king in single combat.",
		image: "/works/viridomarus.jpg"
	},
	{
		id: "galatian",
		title: "Galatian Mercenary",
		maker: "Reconstruction illustration",
		years: "type of c. 250–150 BC",
		place: "The East — Ptolemaic and Seleucid hire",
		medium: "Painted reconstruction",
		note: "Lime-washed hair, mail, torc, and the oval thureos. The Celt as the Hellenistic kings hired him — paid to fight other men’s wars.",
		image: "/works/galatian.jpg"
	},
	{
		id: "late-galatian",
		title: "Late Galatian Mercenary",
		maker: "Reconstruction illustration",
		years: "type of c. 150–50 BC",
		place: "The East — a generation in Hellenistic pay",
		medium: "Painted reconstruction",
		note: "Thureos still Celtic. The rest has gone Greek: masked bronze helm, greaves, Medusa on the board, a short sword. The Celt after fifty years of kings’ silver.",
		image: "/works/late-galatian.jpg"
	},
	{
		id: "germanic",
		title: "Germanic Noble",
		maker: "Osmar Schindler",
		years: "1902",
		place: "Private collection",
		medium: "Oil illustration · 99 × 79 cm",
		note: "A young Germanic champion, almost unarmored, holding a captured Roman helmet. Not a statue — a painted type of the man who broke a legion.",
		image: "/works/germanic.jpg"
	},
	{
		id: "cimbrian",
		title: "Cimbri",
		maker: "Reconstruction illustration",
		years: "type of the late 2nd century BC",
		place: "The North — before Vercellae",
		medium: "Painted reconstruction",
		note: "Foot and horse. Hexagonal shields, a stag on the board, the long spear. The people who broke Roman armies until Marius held the Raudine Plain.",
		image: "/works/cimbrian.jpg"
	},
	{
		id: "boiorix",
		title: "Boiorix",
		maker: "Nineteenth-century engraving",
		years: "killed 101 BC",
		place: "King of the Cimbri — Arausio to Vercellae",
		medium: "Wood engraving",
		note: "The plate: Cimbri packed on a shore, a warship still out, two chiefs on horseback — one with the axe raised. Later artists landed them from the sea. They walked, from Jutland. Boiorix is the king who broke Rome at Arausio and died in the front rank at Vercellae.",
		image: "/works/boiorix.jpg"
	},
	{
		id: "dying-gaul",
		title: "The Dying Gaul",
		maker: "Roman copy after a Pergamene bronze",
		years: "c. 230–220 BC (original)",
		place: "Capitoline Museums, Rome",
		medium: "Marble",
		note: "A Celtic warrior collapsing on his shield — torque at the neck, the body still working after the wound.",
		image: "/works/dying-gaul.jpg"
	},
	{
		id: "perseus",
		title: "Perseus with the Head of Medusa",
		maker: "Benvenuto Cellini",
		years: "1545–1554",
		place: "Loggia dei Lanzi, Florence",
		medium: "Bronze",
		note: "The cut just finished: harpe in one hand, the head in the other, her body under his feet.",
		image: "/works/perseus.jpg"
	},
	{
		id: "arminius",
		title: "Arminius",
		maker: "Johannes Gehrts",
		years: "1884",
		place: "The Cherusci — after the forest",
		medium: "Oil on canvas",
		note: "Arminius and Thusnelda. Scale, gold, the sword still in the fist. The man who broke three legions, painted as a husband.",
		image: "/works/arminius.jpg"
	},
	{
		id: "teutoburg",
		title: "The Battle of the Teutoburg Forest",
		maker: "Otto Albert Koch",
		years: "1909",
		place: "The saltus Teutoburgiensis — Arminius against Varus",
		medium: "Oil on canvas",
		note: "AD 9. Three legions in the trees. Arminius on the white horse, the Cherusci in the crush, an eagle already on the ground.",
		image: "/works/teutoburg.jpg"
	},
	{
		id: "maroboduus",
		title: "Maroboduus",
		maker: "Reconstruction illustration",
		years: "king c. 9 BC–AD 19",
		place: "The Marcomanni — Bohemia",
		medium: "Painted reconstruction",
		note: "Mail, spear, the oval shield. Raised in Rome, then king of a people he drilled like a legion. Arminius asked him to join after the forest. He said no.",
		image: "/works/maroboduus.jpg"
	},
	{
		id: "fritigern",
		title: "Fritigern",
		maker: "Reconstruction illustration",
		years: "Adrianople, AD 378",
		place: "The Thervingi — the Gothic wagon-people",
		medium: "Painted reconstruction",
		note: "Mail, spangenhelm, the oval shield. The wagons in the valley are his. He broke Valens at Adrianople — an emperor dead in the grass, the East never the same.",
		image: "/works/fritigern.jpg"
	},
	{
		id: "alaric",
		title: "Alaric I",
		maker: "Allan Stewart",
		years: "1915 · the man 395–410",
		place: "Athens — then Rome",
		medium: "Colour lithograph · Hutchinson’s History of the Nations",
		note: "Alaric riding into Athens, 395. Gold helm, red cloak, the Goths in a Greek street. Fifteen years later he sacked Rome.",
		image: "/works/alaric.jpg"
	},
	{
		id: "clovis",
		title: "Clovis I",
		maker: "François-Louis Dejuinne",
		years: "1837 · the man c. 466–511",
		place: "Château de Versailles — the Franks",
		medium: "Oil on canvas",
		note: "Crown, scepter, the sword in the left hand. The Salian who took Gaul and took the baptism — the first king of the Franks as later France wanted him painted.",
		image: "/works/clovis.jpg"
	},
	{
		id: "alexander",
		title: "Alexander Fighting Darius",
		maker: "Roman mosaic after a Hellenistic painting",
		years: "c. 100 BC (mosaic) · after c. 310 BC",
		place: "House of the Faun, Pompeii · Naples Archaeological Museum",
		medium: "Opus vermiculatum · 5.82 × 3.13 m",
		note: "The Battle of Issus. Alexander on the left, bareheaded, driving at Darius in the chariot as the Persian line breaks.",
		image: "/works/alexander-mosaic.jpg"
	},
	{
		id: "cimbri",
		title: "The Battle of Vercellae",
		maker: "Reconstruction illustration",
		years: "101 BC",
		place: "The Raudine Plain — Marius against the Cimbri",
		medium: "Painted reconstruction",
		note: "The last field of the Cimbrian War. Red cloaks and pila in the line; Cimbri and horse hitting the front. Marius holds.",
		image: "/works/cimbri.jpg"
	},
	{
		id: "alesia",
		title: "The Battle of Alesia",
		maker: "Reconstruction illustration",
		years: "52 BC",
		place: "Mont Auxois — Caesar’s double wall",
		medium: "Painted reconstruction",
		note: "The relief hits the palisade. Carnyx up, oval shields in the crush, the tower already taking arrows. Vercingetorix’s last throw against the circumvallation.",
		image: "/works/alesia.jpg"
	},
	{
		id: "gaugamela",
		title: "The Battle of Gaugamela",
		maker: "Reconstruction illustration",
		years: "331 BC",
		place: "The plain of Gaugamela — Alexander against Darius",
		medium: "Painted reconstruction",
		note: "Companion cavalry hitting the Persian front. Lances down, leopard skins on the horses, the sarissas still a forest behind.",
		image: "/works/gaugamela.jpg"
	},
	{
		id: "plataea",
		title: "The Battle of Plataea",
		maker: "Reconstruction illustration",
		years: "479 BC",
		place: "The Asopus plain — the Greek allied line",
		medium: "Painted reconstruction",
		note: "Spartans in the bronze wall, aspides locked, closing on the Persians. The fight that ended Xerxes’ invasion.",
		image: "/works/plataea.jpg"
	},
	{
		id: "heraclea",
		title: "The Battle of Heraclea",
		maker: "Dudley Heath",
		years: "280 BC",
		place: "Lucania — Pyrrhus against Rome",
		medium: "Colour plate",
		note: "Pyrrhus on the white horse, gold and a red cloak, driving into the Roman horse. His first field in Italy — a win that already cost too much.",
		image: "/works/heraclea.jpg"
	},
	{
		id: "alexander-king",
		title: "Alexander",
		maker: "Detail of the Alexander Mosaic",
		years: "c. 100 BC (mosaic) · after c. 310 BC",
		place: "Naples Archaeological Museum",
		medium: "Opus vermiculatum · face of the king",
		note: "The same Issus mosaic, cropped to the man. Bareheaded, anastole hair, driving in.",
		image: "/works/alexander-king.jpg"
	},
	{
		id: "lysimachus",
		title: "Lysimachus",
		maker: "Portrait bust, Hellenistic type",
		years: "3rd–1st century BC",
		place: "King of Thrace — bodyguard of Alexander",
		medium: "Terracotta · bust",
		note: "Lysimachus. Thrown to a lion, they said, he tore out its tongue. Later he took Thrace.",
		image: "/works/lysimachus.jpg"
	},
	{
		id: "pyrrhus",
		title: "Pyrrhus",
		maker: "Roman copy after a 3rd-century BC original",
		years: "c. 295–272 BC (the man)",
		place: "Ny Carlsberg Glyptotek, Copenhagen",
		medium: "Marble · helmeted bust",
		note: "The Epirote who beat the Romans and learned what a Pyrrhic victory cost. Helmet still on. The face they put on the king.",
		image: "/works/pyrrhus.jpg"
	},
	{
		id: "ptolemy",
		title: "Ptolemy",
		maker: "Hellenistic portrait, perhaps from Egypt",
		years: "3rd century BC",
		place: "Louvre, Paris · Ma 849",
		medium: "Marble bust",
		note: "Ptolemy I Soter — somatophylax, then pharaoh. The face they struck on the gold of Egypt.",
		image: "/works/ptolemy.jpg"
	},
	{
		id: "seleucus",
		title: "Seleucus",
		maker: "Bronze portrait, Hellenistic type",
		years: "3rd–1st century BC",
		place: "Naples Archaeological Museum",
		medium: "Bronze · bust",
		note: "Seleucus I Nicator. The general who took the East — the face of the man who kept Alexander’s Asian empire.",
		image: "/works/seleucus.jpg"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var MIN = 1;
var MAX = 4.5;
var STEP = .28;
function Stage({ src, alt, full = false, onToggleFull }) {
	const frameRef = (0, import_react.useRef)(null);
	const scaleRef = (0, import_react.useRef)(1);
	const [scale, setScale] = (0, import_react.useState)(1);
	const [tx, setTx] = (0, import_react.useState)(0);
	const [ty, setTy] = (0, import_react.useState)(0);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const drag = (0, import_react.useRef)(null);
	const pointers = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const pinch = (0, import_react.useRef)(null);
	const reset = (0, import_react.useCallback)(() => {
		scaleRef.current = 1;
		setScale(1);
		setTx(0);
		setTy(0);
	}, []);
	(0, import_react.useEffect)(() => {
		reset();
	}, [src, reset]);
	const zoomAt = (0, import_react.useCallback)((next, cx, cy) => {
		const prev = scaleRef.current;
		const clamped = Math.min(MAX, Math.max(MIN, next));
		scaleRef.current = clamped;
		if (clamped === 1) {
			setScale(1);
			setTx(0);
			setTy(0);
			return;
		}
		const frame = frameRef.current;
		if (frame && cx != null && cy != null && prev > 0) {
			const rect = frame.getBoundingClientRect();
			const px = cx - rect.left - rect.width / 2;
			const py = cy - rect.top - rect.height / 2;
			const ratio = clamped / prev;
			setTx((t) => (t - px) * ratio + px);
			setTy((t) => (t - py) * ratio + py);
		}
		setScale(clamped);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = frameRef.current;
		if (!el) return;
		const onWheel = (e) => {
			e.preventDefault();
			const dir = e.deltaY > 0 ? -.28 : STEP;
			zoomAt(scaleRef.current + dir, e.clientX, e.clientY);
		};
		el.addEventListener("wheel", onWheel, { passive: false });
		return () => el.removeEventListener("wheel", onWheel);
	}, [zoomAt]);
	const onPointerDown = (e) => {
		e.currentTarget.setPointerCapture(e.pointerId);
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (pointers.current.size === 2) {
			const pts = [...pointers.current.values()];
			const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
			pinch.current = {
				dist,
				scale: scaleRef.current
			};
			drag.current = null;
			setBusy(true);
			return;
		}
		if (scaleRef.current > 1) {
			drag.current = {
				x: e.clientX,
				y: e.clientY,
				tx,
				ty
			};
			setBusy(true);
		}
	};
	const onPointerMove = (e) => {
		if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (pinch.current && pointers.current.size === 2) {
			const pts = [...pointers.current.values()];
			const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
			zoomAt(pinch.current.scale * (dist / pinch.current.dist));
			return;
		}
		if (!drag.current) return;
		setTx(drag.current.tx + (e.clientX - drag.current.x));
		setTy(drag.current.ty + (e.clientY - drag.current.y));
	};
	const onPointerUp = (e) => {
		pointers.current.delete(e.pointerId);
		if (pointers.current.size < 2) pinch.current = null;
		drag.current = null;
		setBusy(false);
	};
	const onDoubleClick = (e) => {
		if (scaleRef.current > 1.05) reset();
		else zoomAt(2.4, e.clientX, e.clientY);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full min-h-0 w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: frameRef,
			className: cn("absolute inset-0 touch-none overflow-hidden bg-bg", scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"),
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel: onPointerUp,
			onDoubleClick,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				draggable: false,
				className: "pointer-events-none absolute inset-0 select-none",
				style: {
					width: "100%",
					height: "100%",
					maxWidth: "none",
					maxHeight: "none",
					objectFit: "contain",
					objectPosition: "center",
					transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
					transformOrigin: "center center",
					transition: busy ? "none" : "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)"
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute right-3 top-3 flex gap-1.5 sm:right-5 sm:top-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomButton, {
					label: "Zoom out",
					onClick: () => zoomAt(scaleRef.current - STEP),
					disabled: scale <= MIN,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
						className: "size-4",
						strokeWidth: 1.75
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomButton, {
					label: "Zoom in",
					onClick: () => zoomAt(scaleRef.current + STEP),
					disabled: scale >= MAX,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "size-4",
						strokeWidth: 1.75
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomButton, {
					label: "Reset view",
					onClick: reset,
					disabled: scale === 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
						className: "size-4",
						strokeWidth: 1.75
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomButton, {
					label: full ? "Exit fullscreen" : "Enter fullscreen",
					onClick: () => onToggleFull?.(),
					pressed: full,
					className: "hidden sm:flex",
					children: full ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, {
						className: "size-4",
						strokeWidth: 1.75
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {
						className: "size-4",
						strokeWidth: 1.75
					})
				})
			]
		})]
	});
}
function ZoomButton({ children, label, onClick, disabled, pressed, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		"aria-pressed": pressed,
		disabled,
		onClick,
		className: cn("pointer-events-auto flex size-11 items-center justify-center rounded-md border border-line bg-surface/90 text-fg shadow-soft backdrop-blur-sm", "transition-colors duration-150 hover:bg-raised hover:text-accent", "disabled:cursor-default disabled:opacity-35", className),
		children
	});
}
function Gallery() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [full, setFull] = (0, import_react.useState)(false);
	const work = WORKS[index];
	const go = (0, import_react.useCallback)((next) => {
		setIndex((next + WORKS.length) % WORKS.length);
	}, []);
	const exitFull = (0, import_react.useCallback)(() => {
		setFull(false);
		const doc = document;
		const exit = doc.exitFullscreen?.bind(doc) ?? doc.webkitExitFullscreen?.bind(doc);
		if (document.fullscreenElement || doc.webkitFullscreenElement) Promise.resolve(exit?.()).catch(() => {});
	}, []);
	const toggleFull = (0, import_react.useCallback)(() => {
		setFull((on) => {
			const next = !on;
			if (next) {
				const el = document.documentElement;
				const req = el.requestFullscreen?.bind(el) ?? el.webkitRequestFullscreen?.bind(el);
				Promise.resolve(req?.()).catch(() => {});
			} else {
				const doc = document;
				const exit = doc.exitFullscreen?.bind(doc) ?? doc.webkitExitFullscreen?.bind(doc);
				Promise.resolve(exit?.()).catch(() => {});
			}
			return next;
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape" && full) {
				e.preventDefault();
				exitFull();
				return;
			}
			if (e.key === "ArrowRight") go(index + 1);
			if (e.key === "ArrowLeft") go(index - 1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		index,
		full,
		exitFull
	]);
	(0, import_react.useEffect)(() => {
		const nativeOn = { current: false };
		const sync = () => {
			const doc = document;
			if (Boolean(doc.fullscreenElement || doc.webkitFullscreenElement)) nativeOn.current = true;
			else if (nativeOn.current) {
				nativeOn.current = false;
				setFull(false);
			}
		};
		document.addEventListener("fullscreenchange", sync);
		document.addEventListener("webkitfullscreenchange", sync);
		return () => {
			document.removeEventListener("fullscreenchange", sync);
			document.removeEventListener("webkitfullscreenchange", sync);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		WORKS.forEach((w) => {
			const img = new Image();
			img.src = w.image;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid min-w-0 overflow-x-hidden bg-bg text-fg", full ? "fixed inset-0 z-50 h-dvh grid-rows-[minmax(0,1fr)]" : "h-dvh grid-rows-[auto_minmax(0,1fr)_auto]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: cn("flex items-center justify-between gap-4 px-4 py-2 sm:px-6", full && "hidden"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium uppercase tracking-[0.22em] text-subtle",
						children: "The Hall"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-0.5 truncate font-display text-xl font-medium leading-tight tracking-tight text-fg sm:text-2xl",
						children: work.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "shrink-0 font-sans text-xs tabular-nums text-muted",
					children: [String(index + 1).padStart(2, "0"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [" / ", String(WORKS.length).padStart(2, "0")]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-full min-h-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
						side: "left",
						label: "Previous work",
						onClick: () => go(index - 1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {
						src: work.image,
						alt: `${work.title} by ${work.maker}`,
						full,
						onToggleFull: toggleFull
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
						side: "right",
						label: "Next work",
						onClick: () => go(index + 1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { work })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filmstrip, {
				index,
				onSelect: setIndex,
				onStep: go,
				hidden: full
			})
		]
	});
}
function Filmstrip({ index, onSelect, onStep, hidden }) {
	const scrollerRef = (0, import_react.useRef)(null);
	const itemRefs = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const el = itemRefs.current[index];
		if (!el) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		el.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			inline: "center",
			block: "nearest"
		});
	}, [index]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Works",
		className: cn("min-w-0 overflow-x-hidden border-t border-line", hidden && "hidden"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-1 px-2 py-2 sm:gap-2 sm:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Previous work",
					onClick: () => onStep(index - 1),
					className: "flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors duration-150 hover:bg-raised hover:text-accent sm:size-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-5",
						strokeWidth: 1.5
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scrollerRef,
					className: "filmstrip min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex w-max gap-2 px-1 sm:gap-2.5",
						children: WORKS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							ref: (node) => {
								itemRefs.current[i] = node;
							},
							className: "w-24 shrink-0 snap-start sm:w-32",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onSelect(i),
								"aria-current": i === index ? "true" : void 0,
								className: cn("group flex w-full flex-col overflow-hidden rounded-md border bg-surface text-left transition-colors duration-150", i === index ? "border-accent/70" : "border-line hover:border-muted/50"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-16 overflow-hidden bg-raised sm:h-24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: "",
										className: "h-full w-full object-cover object-top opacity-90 transition-opacity duration-200 group-hover:opacity-100"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate px-2 py-1 font-sans text-xs text-muted",
									children: item.title
								})]
							})
						}, item.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next work",
					onClick: () => onStep(index + 1),
					className: "flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors duration-150 hover:bg-raised hover:text-accent sm:size-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "size-5",
						strokeWidth: 1.5
					})
				})
			]
		})
	});
}
function NavButton({ side, label, onClick }) {
	const Icon = side === "left" ? ChevronLeft : ChevronRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: cn("absolute top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-surface/80 text-fg shadow-soft backdrop-blur-sm sm:flex", "transition-colors duration-150 hover:bg-raised hover:text-accent", side === "left" ? "left-3" : "right-3"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-6",
			strokeWidth: 1.5
		})
	});
}
function Caption({ work }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-bg from-25% via-bg/80 to-transparent px-4 pb-3 pt-16 sm:px-6 sm:pb-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-4xl flex-col gap-0.5 sm:flex-row sm:items-end sm:justify-between sm:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base italic leading-snug text-fg sm:text-lg",
						children: work.maker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 font-sans text-xs text-muted sm:text-sm",
						children: [
							work.years,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle",
								children: " · "
							}),
							work.medium
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs text-subtle sm:text-sm",
						children: work.place
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden max-w-md font-sans text-sm leading-relaxed text-muted sm:block",
				children: work.note
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {});
}
//#endregion
export { Home as component };
