import { useEffect, useState } from "react";
import { TPosition } from "src/features/canvas/components/Dot";

export function usePointerPosition() {
  const [position, setPosition] = useState<TPosition>({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e: { clientX: number; clientY: number }) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);
  return position;
}
