// "use client";
// import { useState, useRef, useCallback, useEffect } from "react";

// interface BeforeAfterProps {
//   beforeSrc: string;
//   afterSrc: string;
//   beforeAlt?: string;
//   afterAlt?: string;
//   category?: string;
//   title?: string;
// }

// export default function BeforeAfterSlider({
//   beforeSrc,
//   afterSrc,
//   beforeAlt = "Before editing",
//   afterAlt = "After editing",
//   category = "Retouch",
//   title = "Photo Edit",
// }: BeforeAfterProps) {
//   const [sliderPos, setSliderPos] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const updateSlider = useCallback((clientX: number) => {
//     const container = containerRef.current;
//     if (!container) return;
//     const rect = container.getBoundingClientRect();
//     const x = clientX - rect.left;
//     const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98);
//     setSliderPos(pct);
//   }, []);

//   const handleMouseMove = useCallback(
//     (e: MouseEvent) => {
//       if (!isDragging) return;
//       updateSlider(e.clientX);
//     },
//     [isDragging, updateSlider],
//   );

//   const handleTouchMove = useCallback(
//     (e: TouchEvent) => {
//       if (!isDragging) return;
//       e.preventDefault();
//       updateSlider(e.touches[0].clientX);
//     },
//     [isDragging, updateSlider],
//   );

//   useEffect(() => {
//     if (isDragging) {
//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("mouseup", () => setIsDragging(false));
//       window.addEventListener("touchmove", handleTouchMove, { passive: false });
//       window.addEventListener("touchend", () => setIsDragging(false));
//     }
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", () => setIsDragging(false));
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", () => setIsDragging(false));
//     };
//   }, [isDragging, handleMouseMove, handleTouchMove]);

//   return (
//     <div className="group relative overflow-hidden bg-charcoal">
//       {/* Category tag */}
//       <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
//         <span className="bg-charcoal/80 backdrop-blur-sm px-3 py-1 font-mono text-xs text-warm tracking-widest uppercase">
//           {category}
//         </span>
//       </div>

//       {/* Before/After labels */}
//       <div className="absolute top-4 right-4 z-20 font-mono text-xs tracking-widest uppercase">
//         <span
//           className="transition-opacity duration-300"
//           style={{ opacity: sliderPos > 50 ? 0.8 : 0.4 }}
//         >
//           <span className="text-ivory/60">Before</span>
//         </span>
//         <span className="text-warm/40 mx-2">/</span>
//         <span
//           className="transition-opacity duration-300"
//           style={{ opacity: sliderPos < 50 ? 0.8 : 0.4 }}
//         >
//           <span className="text-warm">After</span>
//         </span>
//       </div>

//       {/* Image container */}
//       <div
//         ref={containerRef}
//         className="relative aspect-[4/3] cursor-col-resize select-none"
//         onMouseDown={(e) => {
//           e.preventDefault();
//           setIsDragging(true);
//           updateSlider(e.clientX);
//         }}
//         onTouchStart={(e) => {
//           setIsDragging(true);
//           updateSlider(e.touches[0].clientX);
//         }}
//         onMouseMove={(e) => {
//           if (!isDragging) return;
//           updateSlider(e.clientX);
//         }}
//       >
//         {/* After image (full) */}
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src={afterSrc}
//           alt={afterAlt}
//           className="absolute inset-0 w-full h-full object-cover"
//           draggable={false}
//         />

//         {/* Before image (clipped) */}
//         <div
//           className="absolute inset-0 overflow-hidden"
//           style={{ width: `${sliderPos}%` }}
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src={beforeSrc}
//             alt={beforeAlt}
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{ width: `${10000 / sliderPos}%`, maxWidth: "none" }}
//             draggable={false}
//           />
//         </div>

//         {/* Slider line */}
//         <div
//           className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
//           style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
//         >
//           <div className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />

//           {/* Handle circle */}
//           <div
//             className={`relative w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-200 ${
//               isDragging ? "scale-110" : "scale-100"
//             }`}
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path
//                 d="M5 4L1 8L5 12"
//                 stroke="#1A1A18"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M11 4L15 8L11 12"
//                 stroke="#1A1A18"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Bottom info */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4 pt-8 flex items-end justify-between">
//         <p className="font-display text-lg font-light text-ivory">{title}</p>
//         <span className="font-mono text-xs text-ivory/40 tracking-widest">
//           Drag to compare
//         </span>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  category?: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  category = "Retouch",
  title = "Photo Edit",
}: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setSliderPos(
      Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98),
    );
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) updateSlider(e.clientX);
    },
    [isDragging, updateSlider],
  );
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        updateSlider(e.touches[0].clientX);
      }
    },
    [isDragging, updateSlider],
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "var(--color-deep)" }}
    >
      <div className="absolute top-4 left-4 z-20">
        <span
          style={{
            background: "rgba(26,16,32,0.85)",
            backdropFilter: "blur(4px)",
            padding: "4px 12px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--color-lilac)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {category}
        </span>
      </div>
      <div
        className="absolute top-4 right-4 z-20"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            opacity: sliderPos > 50 ? 0.8 : 0.4,
            color: "rgba(237,224,250,0.8)",
            transition: "opacity 0.3s",
          }}
        >
          Before
        </span>
        <span style={{ color: "rgba(196,168,224,0.4)", margin: "0 8px" }}>
          /
        </span>
        <span
          style={{
            opacity: sliderPos < 50 ? 0.8 : 0.4,
            color: "var(--color-lilac)",
            transition: "opacity 0.3s",
          }}
        >
          After
        </span>
      </div>

      <div
        ref={containerRef}
        className="relative select-none"
        style={{ aspectRatio: "4/3", cursor: "col-resize" }}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
          updateSlider(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          updateSlider(e.touches[0].clientX);
        }}
        onMouseMove={(e) => {
          if (isDragging) updateSlider(e.clientX);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${10000 / sliderPos}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>
        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div
            className="absolute top-0 bottom-0"
            style={{
              width: "2px",
              background: "rgba(196,168,224,0.9)",
              boxShadow: "0 0 8px rgba(107,63,160,0.6)",
            }}
          />
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "white",
              boxShadow: "0 4px 20px rgba(107,63,160,0.4)",
              transform: isDragging ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M5 4L1 8L5 12"
                stroke="var(--color-purple)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 4L15 8L11 12"
                stroke="var(--color-purple)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 pt-8"
        style={{
          background:
            "linear-gradient(to top, rgba(26,16,32,0.9), transparent)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.125rem",
            fontWeight: 300,
            color: "var(--color-ivory)",
          }}
        >
          {title}
        </p>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "rgba(196,168,224,0.4)",
            letterSpacing: "0.2em",
          }}
        >
          Drag to compare
        </span>
      </div>
    </div>
  );
}
