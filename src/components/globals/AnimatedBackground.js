"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    // Scroll-based animation variables
    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Add scroll listener for dynamic background
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScrollProgress = Math.min(scrollTop / docHeight, 1);
    };

    window.addEventListener("scroll", handleScroll);

    const stars = [];
    const numStars = 40; // Reduced from 60

    // Create stars
    for (let i = 0; i < numStars; i++) {
      // Keep stars away from center (logo area)
      let x, y;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const centerRadius = 200; // Keep stars away from center 200px radius

      do {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      } while (
        Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) < centerRadius
      );

      stars.push({
        x: x,
        y: y,
        size: Math.random() * 1.5 + 0.4, // Smaller stars (0.3 to 1.8)
        speed: Math.random() * 0.15 + 0.02, // Much slower movement (0.02 to 0.17)
        opacity: Math.random() * 0.4 + 0.3, // Lower opacity (0.1 to 0.5)
        twinkle: Math.random() * 0.005 + 0.002, // Very subtle twinkling
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth scroll progress interpolation
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.05;

      // Dynamic circle properties based on scroll
      const circleSize = 0.5 + scrollProgress * 0.5; // Start at 50% (original size), grow to 100%
      const circleX = canvas.width / 2 + scrollProgress * canvas.width * 0.02; // Start centered, move very minimally right
      const circleY = canvas.height / 2 + scrollProgress * canvas.height * 0.1; // Start centered, move slightly down

      // Dynamic colors based on scroll - more subtle with red tint
      const centerColor = `hsl(${220 + scrollProgress * 25}, ${
        20 + scrollProgress * 8
      }%, ${15 + scrollProgress * 5}%)`;
      const edgeColor = `hsl(${200 + scrollProgress * 20}, ${
        18 + scrollProgress * 7
      }%, ${8 + scrollProgress * 4}%)`;

      // Create dynamic gradient background
      const gradient = ctx.createRadialGradient(
        circleX,
        circleY,
        0,
        circleX,
        circleY,
        Math.max(canvas.width, canvas.height) * circleSize
      );
      gradient.addColorStop(0, centerColor);
      gradient.addColorStop(0.4, centerColor);
      gradient.addColorStop(0.7, edgeColor);
      gradient.addColorStop(1, "#0B0F1A");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star, index) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        // Very subtle twinkling effect
        star.opacity += star.twinkle;
        if (star.opacity > 0.5 || star.opacity < 0.1) {
          star.twinkle = -star.twinkle;
        }

        // Much more subtle star color
        ctx.fillStyle = `rgba(245, 197, 66, ${star.opacity * 0.3})`; // Reduced to 30% of original
        ctx.fill();

        // Move stars very slowly
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          // When respawning, keep away from center
          const currentCenterX = canvas.width / 2;
          const currentCenterY = canvas.height / 2;
          const currentCenterRadius = 200; // Keep stars away from center 200px radius
          do {
            star.x = Math.random() * canvas.width;
          } while (
            Math.sqrt(
              (star.x - currentCenterX) ** 2 + (star.y - currentCenterY) ** 2
            ) < currentCenterRadius
          );
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "#0B0F1A" }}
    />
  );
}
