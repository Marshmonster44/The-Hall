import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WORKS, type Work } from "@/data/works";
import { cn } from "@/lib/utils";
import { Stage } from "./stage";

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [full, setFull] = useState(false);
  const work = WORKS[index];

  const go = useCallback((next: number) => {
    setIndex((next + WORKS.length) % WORKS.length);
  }, []);

  const exitFull = useCallback(() => {
    setFull(false);
    const doc = document as Document & { webkitExitFullscreen?: () => Promise<void> | void };
    const exit = doc.exitFullscreen?.bind(doc) ?? doc.webkitExitFullscreen?.bind(doc);
    if (document.fullscreenElement || (doc as { webkitFullscreenElement?: Element }).webkitFullscreenElement) {
      void Promise.resolve(exit?.()).catch(() => {});
    }
  }, []);

  const toggleFull = useCallback(() => {
    setFull((on) => {
      const next = !on;
      if (next) {
        const el = document.documentElement as HTMLElement & {
          webkitRequestFullscreen?: () => Promise<void> | void;
        };
        const req = el.requestFullscreen?.bind(el) ?? el.webkitRequestFullscreen?.bind(el);
        void Promise.resolve(req?.()).catch(() => {});
      } else {
        const doc = document as Document & { webkitExitFullscreen?: () => Promise<void> | void };
        const exit = doc.exitFullscreen?.bind(doc) ?? doc.webkitExitFullscreen?.bind(doc);
        void Promise.resolve(exit?.()).catch(() => {});
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
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
  }, [go, index, full, exitFull]);

  useEffect(() => {
    const nativeOn = { current: false };
    const sync = () => {
      const doc = document as Document & { webkitFullscreenElement?: Element | null };
      const native = Boolean(doc.fullscreenElement || doc.webkitFullscreenElement);
      if (native) nativeOn.current = true;
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

  useEffect(() => {
    WORKS.forEach((w) => {
      const img = new Image();
      img.src = w.image;
    });
  }, []);

  return (
    <div
      className={cn(
        "grid min-w-0 overflow-x-hidden bg-bg text-fg",
        full
          ? "fixed inset-0 z-50 h-dvh grid-rows-[minmax(0,1fr)]"
          : "h-dvh grid-rows-[auto_minmax(0,1fr)_auto]",
      )}
    >
      <header
        className={cn(
          "flex items-center justify-between gap-4 px-4 py-2 sm:px-6",
          full && "hidden",
        )}
      >
        <div className="min-w-0">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-subtle">
            The Hall
          </p>
          <h1 className="mt-0.5 truncate font-display text-xl font-medium leading-tight tracking-tight text-fg sm:text-2xl">
            {work.title}
          </h1>
        </div>
        <p className="shrink-0 font-sans text-xs tabular-nums text-muted">
          {String(index + 1).padStart(2, "0")}
          <span className="text-subtle"> / {String(WORKS.length).padStart(2, "0")}</span>
        </p>
      </header>

      <div className="relative h-full min-h-0 overflow-hidden">
        <NavButton
          side="left"
          label="Previous work"
          onClick={() => go(index - 1)}
        />
        <Stage
          src={work.image}
          alt={`${work.title} by ${work.maker}`}
          full={full}
          onToggleFull={toggleFull}
        />
        <NavButton
          side="right"
          label="Next work"
          onClick={() => go(index + 1)}
        />
        <Caption work={work} />
      </div>

      <Filmstrip index={index} onSelect={setIndex} onStep={go} hidden={full} />
    </div>
  );
}

function Filmstrip({
  index,
  onSelect,
  onStep,
  hidden,
}: {
  index: number;
  onSelect: (i: number) => void;
  onStep: (next: number) => void;
  hidden?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const el = itemRefs.current[index];
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  return (
    <nav
      aria-label="Works"
      className={cn(
        "min-w-0 overflow-x-hidden border-t border-line",
        hidden && "hidden",
      )}
    >
      <div className="flex min-w-0 items-center gap-1 px-2 py-2 sm:gap-2 sm:px-4">
        <button
          type="button"
          aria-label="Previous work"
          onClick={() => onStep(index - 1)}
          className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors duration-150 hover:bg-raised hover:text-accent sm:size-10"
        >
          <ChevronLeft className="size-5" strokeWidth={1.5} />
        </button>

        <div
          ref={scrollerRef}
          className="filmstrip min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth"
        >
          <ul className="flex w-max gap-2 px-1 sm:gap-2.5">
            {WORKS.map((item, i) => (
              <li
                key={item.id}
                ref={(node) => {
                  itemRefs.current[i] = node;
                }}
                className="w-24 shrink-0 snap-start sm:w-32"
              >
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "group flex w-full flex-col overflow-hidden rounded-md border bg-surface text-left transition-colors duration-150",
                    i === index
                      ? "border-accent/70"
                      : "border-line hover:border-muted/50",
                  )}
                >
                  <div className="h-16 overflow-hidden bg-raised sm:h-24">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover object-top opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </div>
                  <span className="truncate px-2 py-1 font-sans text-xs text-muted">
                    {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          aria-label="Next work"
          onClick={() => onStep(index + 1)}
          className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors duration-150 hover:bg-raised hover:text-accent sm:size-10"
        >
          <ChevronRight className="size-5" strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}

function NavButton({
  side,
  label,
  onClick,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-surface/80 text-fg shadow-soft backdrop-blur-sm sm:flex",
        "transition-colors duration-150 hover:bg-raised hover:text-accent",
        side === "left" ? "left-3" : "right-3",
      )}
    >
      <Icon className="size-6" strokeWidth={1.5} />
    </button>
  );
}

function Caption({ work }: { work: Work }) {
  return (
    <section className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-bg from-25% via-bg/80 to-transparent px-4 pb-3 pt-16 sm:px-6 sm:pb-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-0.5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <p className="font-display text-base italic leading-snug text-fg sm:text-lg">
            {work.maker}
          </p>
          <p className="mt-0.5 font-sans text-xs text-muted sm:text-sm">
            {work.years}
            <span className="text-subtle"> · </span>
            {work.medium}
          </p>
          <p className="font-sans text-xs text-subtle sm:text-sm">{work.place}</p>
        </div>
        <p className="hidden max-w-md font-sans text-sm leading-relaxed text-muted sm:block">
          {work.note}
        </p>
      </div>
    </section>
  );
}
