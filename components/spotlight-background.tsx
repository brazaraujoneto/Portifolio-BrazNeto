"use client";

import { useEffect, useState } from "react";

export function SpotlightBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main spotlight that follows mouse */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, var(--spotlight-color) 0%, transparent 70%)",
        }}
      />
      
      {/* Fixed top-center spotlight */}
      <div
        className="absolute w-[1200px] h-[600px]"
        style={{
          left: "50%",
          top: "0",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at center top, var(--spotlight-color) 0%, transparent 60%)",
        }}
      />
      
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
