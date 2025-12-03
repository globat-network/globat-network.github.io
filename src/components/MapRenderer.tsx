"use client";

import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { geoData, numData } from "@/data/geo";

type MapProps = {
  counts: { [country: string]: number };
};

function getName(code: string): string {
  return numData.find((item) => item.code === code)?.name || "";
}

export default function MapRenderer({ counts }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. State to store the container's dimensions
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 400, // You can set a default height or calculate it
  });

  // 3. This useEffect hook will run once to set up the observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a ResizeObserver to watch for size changes
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        // Update the dimensions state
        setDimensions({ width, height });
      }
    });

    observer.observe(container);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array means this runs once on mount


  const projection = d3
    .geoMercator()
    .fitSize([dimensions.width, dimensions.height], geoData);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = geoData.features
    .filter((shape) => shape.id !== "ATA")
    .map((shape) => {
      const name = getName(shape.id);
      const regionData = counts[name];

      const className = regionData > 0 ? "fill-white" : "fill-neutral-500";

      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          className={className}
          fillOpacity={1}
        />
      );
    });

  if (!dimensions.width) {
    return (
      <div ref={containerRef} style={{ width: "100%", height: "600px" }} />
    );
  }

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="stroke-neutral-500"
      >
        {allSvgPaths}
      </svg>
    </div>
  );
}
