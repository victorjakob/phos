import React from "react";

export default function FlowerOfLife({
  layers = 2,
  radius = 60,
  stroke = "currentColor",
  strokeWidth = 1.5,
  opacity = 0.9,
  className = "",
}) {
  // Hex/triangular lattice where nearest neighbor distance = radius
  const a = radius; // lattice spacing
  const sqrt3 = Math.sqrt(3);

  // Generate axial hex coordinates within 'layers'
  const coords = [];
  for (let q = -layers; q <= layers; q++) {
    for (let r = -layers; r <= layers; r++) {
      const s = -q - r;
      if (Math.max(Math.abs(q), Math.abs(r), Math.abs(s)) <= layers) {
        // axial -> pixel (pointy-top hex) with spacing 'a'
        const x = a * (q + r / 2);
        const y = a * (r * (sqrt3 / 2));
        coords.push({ x, y });
      }
    }
  }

  // Add center at (0,0)
  coords.push({ x: 0, y: 0 });

  // Find bounds for viewBox
  const xs = coords.map((p) => p.x);
  const ys = coords.map((p) => p.y);
  const pad = radius + strokeWidth * 2;
  const minX = Math.min(...xs) - pad;
  const maxX = Math.max(...xs) + pad;
  const minY = Math.min(...ys) - pad;
  const maxY = Math.max(...ys) + pad;
  const vbW = maxX - minX;
  const vbH = maxY - minY;

  return (
    <svg
      viewBox={`${minX} ${minY} ${vbW} ${vbH}`}
      className={className}
      aria-label="Flower of Life sacred geometry"
      role="img"
    >
      <g
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        opacity={opacity}
      >
        {coords.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={radius} />
        ))}
      </g>
    </svg>
  );
}
