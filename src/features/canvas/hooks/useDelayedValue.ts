import { useEffect, useState } from "react";
import { TPosition } from "src/features/canvas/components/Dot";

export function useDelayedValue(
  position: TPosition,
  delayMilliseconds: number,
) {
  const [delayedValue, setDelayedValue] = useState(position);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(position);
    }, delayMilliseconds);
  }, [position, delayMilliseconds]);

  return delayedValue;
}
