import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, Minus, Plus, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const MIN = 1;
const MAX = 4.5;
const STEP = 0.28;

type StageProps = {
  src: string;
  alt: string;
  full?: boolean;
  onToggleFull?: () => void;
};

export function Stage({ src, alt, full = false, onToggleFull }: StageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [busy, setBusy] = useState(false);
  const drag = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinch = useRef<{ dist: number; scale: number } | null>(null);

  const reset = useCallback(() => {
    scaleRef.current = 1;
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  useEffect(() => {
    reset();
  }, [src, reset]);

  const zoomAt = useCallback((next: number, cx?: number, cy?: number) => {
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

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dir = e.deltaY > 0 ? -STEP : STEP;
      zoomAt(scaleRef.current + dir, e.clientX, e.clientY);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomAt]);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      const pts = [...pointers.current.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      pinch.current = { dist, scale: scaleRef.current };
      drag.current = null;
      setBusy(true);
      return;
    }
    if (scaleRef.current > 1) {
      drag.current = { x: e.clientX, y: e.clientY, tx, ty };
      setBusy(true);
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (pointers.current.has(e.pointerId)) {
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }
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

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    drag.current = null;
    setBusy(false);
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    if (scaleRef.current > 1.05) reset();
    else zoomAt(2.4, e.clientX, e.clientY);
  };

  return (
    <div className="relative h-full min-h-0 w-full">
      <div
        ref={frameRef}
        className={cn(
          "absolute inset-0 touch-none overflow-hidden bg-bg",
          scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in",
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="pointer-events-none absolute inset-0 select-none"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
            objectFit: "contain",
            objectPosition: "center",
            transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
            transformOrigin: "center center",
            transition: busy ? "none" : "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute right-3 top-3 flex gap-1.5 sm:right-5 sm:top-5">
        <ZoomButton
          label="Zoom out"
          onClick={() => zoomAt(scaleRef.current - STEP)}
          disabled={scale <= MIN}
        >
          <Minus className="size-4" strokeWidth={1.75} />
        </ZoomButton>
        <ZoomButton
          label="Zoom in"
          onClick={() => zoomAt(scaleRef.current + STEP)}
          disabled={scale >= MAX}
        >
          <Plus className="size-4" strokeWidth={1.75} />
        </ZoomButton>
        <ZoomButton label="Reset view" onClick={reset} disabled={scale === 1}>
          <RotateCcw className="size-4" strokeWidth={1.75} />
        </ZoomButton>
        <ZoomButton
          label={full ? "Exit fullscreen" : "Enter fullscreen"}
          onClick={() => onToggleFull?.()}
          pressed={full}
          className="hidden sm:flex"
        >
          {full ? (
            <Minimize2 className="size-4" strokeWidth={1.75} />
          ) : (
            <Maximize2 className="size-4" strokeWidth={1.75} />
          )}
        </ZoomButton>
      </div>
    </div>
  );
}

function ZoomButton({
  children,
  label,
  onClick,
  disabled,
  pressed,
  className,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  pressed?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "pointer-events-auto flex size-11 items-center justify-center rounded-md border border-line bg-surface/90 text-fg shadow-soft backdrop-blur-sm",
        "transition-colors duration-150 hover:bg-raised hover:text-accent",
        "disabled:cursor-default disabled:opacity-35",
        className,
      )}
    >
      {children}
    </button>
  );
}
