"use client";
import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";

interface MouseImageTrailProps {
  children: React.ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}

export default function MouseImage() {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/images/dashboard/Img1.jpg",
        "/images/dashboard/Img2.jpg",
        "/images/dashboard/Img3.jpg",
        "/images/dashboard/Img4.jpg",
        "/images/dashboard/Img5.jpg",
        "/images/dashboard/Img6.jpg",
        "/images/dashboard/Img7.jpg",
        "/images/dashboard/Img8.jpg",
        "/images/dashboard/Img9.jpg",
        "/images/dashboard/Img10.jpg",
        "/images/dashboard/Img11.jpg",
        "/images/dashboard/Img12.jpg",
        "/images/dashboard/Img13.jpg",
        "/images/dashboard/Img14.jpg",
        "/images/dashboard/Img15.jpg",
      ]}
    >
      <section className="flex h-screen w-full place-content-center bg-red-400">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
          <FiMousePointer />
          <span>Hover me</span>
        </p>
      </section>
    </MouseImageTrail>
  );
}

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}: MouseImageTrailProps) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector<HTMLImageElement>(selector);

    if (el) {
      el.style.top = `${lastRenderPosition.current.y}px`;
      el.style.left = `${lastRenderPosition.current.x}px`;
      el.style.zIndex = imageRenderCount.current.toString();

      const rotation = Math.random() * rotationRange;

      animate(
        selector,
        {
          opacity: [0, 1],
          transform: [
            `translate(-50%, -25%) scale(0.5) ${
              imageIndex % 2
                ? `rotate(${rotation}deg)`
                : `rotate(-${rotation}deg)`
            }`,
            `translate(-50%, -50%) scale(1) ${
              imageIndex % 2
                ? `rotate(-${rotation}deg)`
                : `rotate(${rotation}deg)`
            }`,
          ],
        },
        { type: "spring", damping: 15, stiffness: 200 }
      );

      animate(
        selector,
        {
          opacity: [1, 0],
        },
        { ease: "linear", duration: 0.5, delay: 5 }
      );

      imageRenderCount.current = imageRenderCount.current + 1;
    }
  };
  return (
    <div
      ref={scope}
      className="relative overflow-hidden bg-purple-400"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <Image
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          width={200}
      height={200}
      alt={`Mouse move image ${index}`}
      key={index}
      data-mouse-move-index={index}
    />
  ))}
</div>
);
};