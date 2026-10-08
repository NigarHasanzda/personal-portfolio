"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARSET =
  " .'`^\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

const REVEAL_RADIUS = 62;
const REVEAL_FEATHER = 68;
const POINTER_LERP = 0.09;
const OPACITY_LERP = 0.09;

type HeroDitherFieldProps = {
  src: string;
  alt: string;
};

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
) {
  const imgRatio = img.width / img.height;
  const canvasRatio = width / height;
  let sx = 0;
  let sy = 0;
  let sw = img.width;
  let sh = img.height;

  if (imgRatio > canvasRatio) {
    sh = img.height;
    sw = sh * canvasRatio;
    sx = (img.width - sw) / 2;
  } else {
    sw = img.width;
    sh = sw / canvasRatio;
    sy = (img.height - sh) / 2;
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
}

function setupCanvasSize(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  dpr: number,
) {
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext("2d");
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

function cellSizeFor(width: number) {
  if (width >= 1280) return 7;
  if (width >= 768) return 6;
  return 5;
}

export default function HeroDitherField({ src, alt }: HeroDitherFieldProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ditherRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const targetRef = useRef<PointerState>({ x: 0, y: 0, active: false });
  const smoothRef = useRef({ x: 0, y: 0, opacity: 0 });
  const rafRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  const paintDither = useCallback(() => {
    const canvas = ditherRef.current;
    const img = imageRef.current;
    if (!canvas || !img) return;

    const { width, height, dpr } = sizeRef.current;
    const ctx = setupCanvasSize(canvas, width, height, dpr);
    if (!ctx) return;

    const cell = cellSizeFor(width);
    const cols = Math.ceil(width / cell);
    const rows = Math.ceil(height / cell);
    const sample = document.createElement("canvas");
    sample.width = cols;
    sample.height = rows;
    const sampleCtx = sample.getContext("2d");
    if (!sampleCtx) return;

    drawCover(sampleCtx, img, cols, rows);
    const { data } = sampleCtx.getImageData(0, 0, cols, rows);

    ctx.fillStyle = "#0c0806";
    ctx.fillRect(0, 0, width, height);
    ctx.font = `${cell}px ui-monospace, monospace`;
    ctx.textBaseline = "top";

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const index = (row * cols + col) * 4;
        const lum =
          (0.2126 * data[index] +
            0.7152 * data[index + 1] +
            0.0722 * data[index + 2]) /
          255;
        const char = CHARSET[Math.floor(lum * (CHARSET.length - 1))];
        if (char === " ") continue;

        const alpha = 0.28 + lum * 0.62;
        ctx.fillStyle = `rgba(232, 176, 112, ${alpha})`;
        ctx.fillText(char, col * cell, row * cell);
      }
    }
  }, []);

  const paintReveal = useCallback(() => {
    const canvas = revealRef.current;
    const img = imageRef.current;
    if (!canvas || !img) return;

    const { width, height } = sizeRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const smooth = smoothRef.current;
    ctx.clearRect(0, 0, width, height);

    if (smooth.opacity < 0.015) return;

    drawCover(ctx, img, width, height);

    const outer = REVEAL_RADIUS + REVEAL_FEATHER;
    const gradient = ctx.createRadialGradient(
      smooth.x,
      smooth.y,
      REVEAL_RADIUS * 0.12,
      smooth.x,
      smooth.y,
      outer,
    );

    const peak = Math.min(1, smooth.opacity);
    gradient.addColorStop(0, `rgba(0, 0, 0, ${peak})`);
    gradient.addColorStop(0.42, `rgba(0, 0, 0, ${peak * 0.92})`);
    gradient.addColorStop(0.72, `rgba(0, 0, 0, ${peak * 0.35})`);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.globalCompositeOperation = "destination-in";
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";
  }, []);

  const tick = useCallback(() => {
    const target = targetRef.current;
    const smooth = smoothRef.current;

    smooth.x += (target.x - smooth.x) * POINTER_LERP;
    smooth.y += (target.y - smooth.y) * POINTER_LERP;

    const targetOpacity = target.active ? 1 : 0;
    smooth.opacity += (targetOpacity - smooth.opacity) * OPACITY_LERP;

    paintReveal();

    const drifting =
      Math.hypot(target.x - smooth.x, target.y - smooth.y) > 0.35 ||
      Math.abs(targetOpacity - smooth.opacity) > 0.012;

    if (drifting || target.active || smooth.opacity > 0.02) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      rafRef.current = null;
    }
  }, [paintReveal]);

  const startAnimation = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const revealCanvas = revealRef.current;
    if (!wrap || !revealCanvas) return;

    const width = wrap.clientWidth;
    const height = wrap.clientHeight;
    if (width === 0 || height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    sizeRef.current = { width, height, dpr };

    setupCanvasSize(revealCanvas, width, height, dpr);
    paintDither();
    paintReveal();
  }, [paintDither, paintReveal]);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.decoding = "async";
    img.onload = () => {
      imageRef.current = img;
      setReady(true);
      measure();
    };
  }, [src, measure]);

  useEffect(() => {
    if (!ready) return;
    measure();

    const wrap = wrapRef.current;
    if (!wrap) return;

    const observer = new ResizeObserver(() => measure());
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [ready, measure]);

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const setTargetFromEvent = (clientX: number, clientY: number) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;

    targetRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
      active: true,
    };
    startAnimation();
  };

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 z-0"
      onPointerMove={(event) => setTargetFromEvent(event.clientX, event.clientY)}
      onPointerEnter={(event) => setTargetFromEvent(event.clientX, event.clientY)}
      onPointerLeave={() => {
        targetRef.current.active = false;
        startAnimation();
      }}
      role="img"
      aria-label={alt}
    >
      <canvas ref={ditherRef} className="absolute inset-0 block h-full w-full" />
      <canvas
        ref={revealRef}
        className="pointer-events-none absolute inset-0 block h-full w-full"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.65) 0 2px, transparent 2px 4px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 42%, transparent 35%, rgba(12, 8, 6, 0.55) 100%)",
        }}
      />
    </div>
  );
}
