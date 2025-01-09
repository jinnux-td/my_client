export type TPosition = {
  x: number;
  y: number;
};

export function Dot({
  position,
  opacity,
}: {
  position: TPosition;
  opacity: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
}
