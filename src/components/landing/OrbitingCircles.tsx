import type { ReactNode } from "react";

type OrbitingCirclesProps = {
  children: ReactNode;
  /** orbit radius in px */
  radius?: number;
  /** seconds for a full revolution */
  duration?: number;
  /** negative delay offsets the starting angle */
  delay?: number;
  reverse?: boolean;
  iconSize?: number;
  className?: string;
};

export function OrbitingCircles({
  children,
  radius = 120,
  duration = 20,
  delay = 0,
  reverse = false,
  iconSize = 44,
  className = "",
}: OrbitingCirclesProps) {
  return (
    <div
      className={`orbit pointer-events-none absolute left-1/2 top-1/2 flex items-center justify-center ${className}`}
      style={{
        width: iconSize,
        height: iconSize,
        marginLeft: -iconSize / 2,
        marginTop: -iconSize / 2,
        ["--orbit-radius" as string]: `${radius}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      <div
        className="orbit-counter flex h-full w-full items-center justify-center"
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          animationDirection: reverse ? "normal" : "reverse",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function OrbitPath({ radius }: { radius: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-dashed border-foreground/15"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    />
  );
}
