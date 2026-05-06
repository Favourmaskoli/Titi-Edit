// "use client";
// import { useState, useEffect, useRef } from "react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Amara O.",
//     role: "Wedding Photographer",
//     content:
//       "Tity transformed my wedding photos into absolute masterpieces. The skin retouching was so natural — clients couldn't stop raving about how beautiful they looked.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Chidi N.",
//     role: "E-commerce Brand",
//     content:
//       "Fast turnaround, incredible attention to detail. Our product photos look 10x better. Sales literally went up after we updated our store with Tity's edits.",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Funmi A.",
//     role: "Fashion Blogger",
//     content:
//       "I've worked with many editors, but Tity's color grading is on another level. She understands aesthetic deeply. My Instagram engagement has never been higher.",
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: "Seun K.",
//     role: "Portrait Client",
//     content:
//       "She brought out the best version of me in my headshots. Professional, fast, and genuinely talented. Highly recommend for anyone wanting top-tier results.",
//     rating: 5,
//   },
// ];

// export default function TestimonialsSection() {
//   const [active, setActive] = useState(0);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach(
//           (e) => e.isIntersecting && e.target.classList.add("visible"),
//         ),
//       { threshold: 0.1 },
//     );
//     sectionRef.current
//       ?.querySelectorAll(".reveal")
//       .forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 md:py-32 bg-moss overflow-hidden relative"
//     >
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-moss via-moss to-charcoal/50" />
//         <div
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `repeating-linear-gradient(45deg, rgba(201,169,110,0.5) 0, rgba(201,169,110,0.5) 1px, transparent 0, transparent 50%)`,
//             backgroundSize: "20px 20px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16 reveal">
//           <p className="font-mono text-xs tracking-[0.35em] text-warm/70 uppercase mb-3">
//             — Kind Words
//           </p>
//           <h2 className="font-display text-5xl font-light text-ivory">
//             Client <span className="italic text-warm">Love</span>
//           </h2>
//         </div>

//         {/* Testimonial carousel */}
//         <div className="relative min-h-[280px] reveal">
//           {testimonials.map((t, i) => (
//             <div
//               key={t.id}
//               className={`absolute inset-0 transition-all duration-700 ${
//                 i === active
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4 pointer-events-none"
//               }`}
//             >
//               {/* Stars */}
//               <div className="flex justify-center gap-1 mb-6">
//                 {Array.from({ length: t.rating }).map((_, si) => (
//                   <svg
//                     key={si}
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="#C9A96E"
//                   >
//                     <path d="M8 1L9.8 6H15L10.6 9.3L12.4 14.3L8 11L3.6 14.3L5.4 9.3L1 6H6.2L8 1Z" />
//                   </svg>
//                 ))}
//               </div>

//               {/* Quote */}
//               <blockquote className="text-center font-display text-2xl md:text-3xl font-light text-ivory/90 leading-relaxed mb-8 italic">
//                 "{t.content}"
//               </blockquote>

//               {/* Attribution */}
//               <div className="text-center">
//                 <p className="font-body text-warm font-medium">{t.name}</p>
//                 <p className="font-mono text-xs text-ivory/40 tracking-widest uppercase mt-1">
//                   {t.role}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-3 mt-8 reveal">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               className={`transition-all duration-300 rounded-full ${
//                 i === active
//                   ? "w-8 h-2 bg-warm"
//                   : "w-2 h-2 bg-ivory/20 hover:bg-ivory/40"
//               }`}
//               aria-label={`Go to testimonial ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Amara O.",
    role: "Wedding Photographer",
    rating: 5,
    content:
      "Tity transformed my wedding photos into absolute masterpieces. The skin retouching was so natural — clients couldn't stop raving about how beautiful they looked.",
  },
  {
    id: 2,
    name: "Chidi N.",
    role: "E-commerce Brand",
    rating: 5,
    content:
      "Fast turnaround, incredible attention to detail. Our product photos look 10x better. Sales literally went up after we updated our store with Tity's edits.",
  },
  {
    id: 3,
    name: "Funmi A.",
    role: "Fashion Blogger",
    rating: 5,
    content:
      "I've worked with many editors, but Tity's color grading is on another level. She understands aesthetic deeply. My Instagram engagement has never been higher.",
  },
  {
    id: 4,
    name: "Seun K.",
    role: "Portrait Client",
    rating: 5,
    content:
      "She brought out the best version of me in my headshots. Professional, fast, and genuinely talented. Highly recommend for anyone wanting top-tier results.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--color-plum)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(107,63,160,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(196,168,224,0.6) 0, rgba(196,168,224,0.6) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              color: "rgba(196,168,224,0.6)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            — Kind Words
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem,6vw,3.75rem)",
              fontWeight: 300,
              color: "var(--color-ivory)",
            }}
          >
            Client{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-lilac)" }}>
              Love
            </span>
          </h2>
        </div>

        <div className="relative reveal" style={{ minHeight: "280px" }}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="absolute inset-0 transition-all duration-700"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(16px)",
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg
                    key={si}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="var(--color-lilac)"
                  >
                    <path d="M8 1L9.8 6H15L10.6 9.3L12.4 14.3L8 11L3.6 14.3L5.4 9.3L1 6H6.2L8 1Z" />
                  </svg>
                ))}
              </div>
              <blockquote
                className="text-center"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.25rem,3vw,1.875rem)",
                  fontWeight: 300,
                  color: "rgba(237,224,250,0.9)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  marginBottom: "32px",
                }}
              >
                &ldquo;{t.content}&rdquo;
              </blockquote>
              <div className="text-center">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-lilac)",
                    fontWeight: 500,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "rgba(196,168,224,0.4)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8 reveal">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "32px" : "8px",
                height: "8px",
                background:
                  i === active ? "var(--color-lilac)" : "rgba(196,168,224,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
