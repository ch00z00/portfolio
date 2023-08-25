import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface WaterTextureProps {
  src: string;
  children: React.ReactNode;
}

interface Point {
  x: number;
  y: number;
  age: number;
  force: number;
  vx: number;
  vy: number;
}

const WaterTexture: React.FC<WaterTextureProps> = ({ src, children }) => {
  const size = 64;
  const radius = size * 0.1;
  let width = size;
  let height = size;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const lastRef = useRef<Point | null>(null); // Store the last point

  const maxAge = 64;

  const textureRef = useRef<THREE.Texture | null>(null); // Reference to the THREE.Texture

  // Initialize the texture using the canvas
  const initTexture = () => {
    if (canvasRef.current) {
      textureRef.current = new THREE.Texture(canvasRef.current);
    }
  };

  const easeOutSine = (t: number, b: number, c: number, d: number): number => {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  };

  const easeOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d;
    return -c * t * (t - 2) + b;
  };

  const calculateForceAndVelocity = (last: Point | null, point: Point) => {
    let force = 0;
    let vx = 0;
    let vy = 0;
    if (last) {
      const relativeX = point.x - last.x;
      const relativeY = point.y - last.y;
      const distanceSquared = relativeX * relativeX + relativeY * relativeY;
      const distance = Math.sqrt(distanceSquared);
      vx = relativeX / distance;
      vy = relativeY / distance;
      force = Math.min(distanceSquared * 10000, 1);
    }
    return { force, vx, vy };
  };

  const addPoint = (point: Point) => {
    const { force, vx, vy } = calculateForceAndVelocity(lastRef.current, point);
    lastRef.current = { ...point }; // Store the current point as the last point
    pointsRef.current.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  };

  const clear = (ctx: CanvasRenderingContext2D | null) => {
    if (ctx) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
    }
  };

  const drawPoint = (point: Point) => {
    // Convert normalized position into canvas coordinates
    let pos = {
      x: point.x * width,
      y: point.y * height,
    };

    let intensity = 1.0;
    if (point.age < maxAge * 0.3) {
      intensity = easeOutSine(point.age / (maxAge * 0.3), 0, 1, 1);
    } else {
      intensity = easeOutQuad(
        1 - (point.age - maxAge * 0.3) / (maxAge * 0.7),
        0,
        1,
        1
      );
    }
    intensity *= point.force;

    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      // RG = Unit vector
      let red = ((point.vx + 1) / 2) * 255;
      let green = ((point.vy + 1) / 2) * 255;
      // B = Intensity
      let blue = intensity * 255;
      let color = `${red}, ${green}, ${blue}`;

      let offset = size * 5;
      ctx.shadowOffsetX = offset;
      ctx.shadowOffsetY = offset;
      ctx.shadowBlur = radius * 1;
      ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;

      ctx.beginPath();
      ctx.fillStyle = "rgba(255,0,0,1)";
      ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawDistortedImage = (ctx: CanvasRenderingContext2D) => {
    // Implement water-like distortion effect on the image here
  };

  useEffect(() => {
    initTexture();
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    let ctx: CanvasRenderingContext2D | null = null;

    const update = () => {
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        clear(ctx);

        const points = pointsRef.current;
        points.forEach((point, i) => {
          let slowAsOlder = 1 - point.age / maxAge;
          let force = point.force * (1 / maxAge) * slowAsOlder;
          point.x += point.vx * force;
          point.y += point.vy * force;
          point.age += 1;
          if (point.age > maxAge) {
            points.splice(i, 1);
          }
        });

        if (ctx) {
          drawDistortedImage(ctx); // Apply the distortion effect
        }

        requestAnimationFrame(update);
      }
      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    };

    update();

    return () => {
      // Cleanup logic here if needed
    };
  }, [width, height]);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="absolute left-0 top-0" />
      {children}
    </div>
  );
};

export default WaterTexture;
