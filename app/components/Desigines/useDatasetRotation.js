import { useEffect, useState } from "react";

export default function useDatasetRotation(
  datasets,
  interval = 6000
) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % datasets.length);
    }, interval);

    return () => clearInterval(id);
  }, [datasets, interval]);

  return {
    text: datasets[index],
    index,
  };
}