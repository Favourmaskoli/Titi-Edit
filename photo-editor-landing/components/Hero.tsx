// "use client";
// import { useEffect, useRef } from "react";

// export default function Hero() {
//   const heroRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const el = heroRef.current;
//     if (!el) return;
//     setTimeout(() => el.classList.add("loaded"), 100);
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
//       id="home"
//     >
//       {/* Layered background */}
//       <div className="absolute inset-0">
//         {/* Gradient mesh */}
//         <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-moss/30 to-charcoal" />
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-warm/10 to-transparent" />
//         {/* Grid lines */}
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px),
//                               linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)`,
//             backgroundSize: "80px 80px",
//           }}
//         />
//         {/* Diagonal accent */}
//         <div
//           className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-warm/40 to-transparent"
//           style={{ left: "60%" }}
//         />
//       </div>

//       {/* Floating decorative text */}
//       <div className="absolute bottom-12 left-6 md:left-12 font-mono text-xs tracking-[0.4em] text-warm/40 uppercase rotate-90 origin-bottom-left">
//         Photography · Retouching · Editing
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left: Text */}
//         <div className="space-y-8">
//           <div
//             className="opacity-0 translate-y-8 transition-all duration-700 delay-200"
//             style={{ animation: "fadeUp 0.8s ease 0.2s forwards" }}
//           >
//             <p className="font-mono text-xs tracking-[0.35em] text-warm uppercase mb-4">
//               Visual Artistry
//             </p>
//             <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-none text-ivory">
//               Where Images
//               <br />
//               <span className="italic text-warm">Come Alive</span>
//             </h1>
//           </div>

//           <p
//             className="font-body text-ivory/60 text-lg leading-relaxed max-w-md opacity-0"
//             style={{ animation: "fadeUp 0.8s ease 0.45s forwards" }}
//           >
//             Premium photo retouching that transforms ordinary captures into
//             extraordinary visual stories. Every pixel crafted with intention.
//           </p>

//           <div
//             className="flex flex-col sm:flex-row gap-4 opacity-0"
//             style={{ animation: "fadeUp 0.8s ease 0.65s forwards" }}
//           >
//             <a
//               href="#work"
//               className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-warm text-charcoal font-body text-sm tracking-widest uppercase hover:bg-blush transition-colors duration-300 group"
//             >
//               View Portfolio
//               <span className="group-hover:translate-x-1 transition-transform duration-300">
//                 →
//               </span>
//             </a>
//             <a
//               href="#contact"
//               className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ivory/30 text-ivory font-body text-sm tracking-widest uppercase hover:border-warm hover:text-warm transition-colors duration-300"
//             >
//               Start a Project
//             </a>
//           </div>

//           {/* Stats */}
//           <div
//             className="flex gap-10 pt-4 opacity-0"
//             style={{ animation: "fadeUp 0.8s ease 0.85s forwards" }}
//           >
//             {[
//               { num: "500+", label: "Projects Done" },
//               { num: "98%", label: "Happy Clients" },
//               { num: "5★", label: "Rated" },
//             ].map(({ num, label }) => (
//               <div key={label}>
//                 <p className="font-display text-3xl font-light text-warm">
//                   {num}
//                 </p>
//                 <p className="font-mono text-xs tracking-widest text-ivory/40 uppercase mt-0.5">
//                   {label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: Decorative image frame */}
//         <div
//           className="relative opacity-0"
//           style={{ animation: "fadeIn 1.2s ease 0.5s forwards" }}
//         >
//           <div className="relative aspect-[4/5] max-w-sm mx-auto">
//             {/* Offset frame */}
//             <div className="absolute -top-4 -right-4 w-full h-full border border-warm/30" />
//             <div className="absolute -bottom-4 -left-4 w-full h-full border border-moss/40" />

//             {/* Main frame with placeholder */}
//             <div className="relative w-full h-full bg-gradient-to-br from-moss/40 via-charcoal to-moss/20 overflow-hidden">
//               {/* Simulated before/after preview */}
//               <div className="absolute inset-0 flex">
//                 <div className="w-1/2 bg-gradient-to-br from-blush/20 to-warm/10 flex items-end p-4">
//                   <span className="font-mono text-xs text-ivory/50 uppercase tracking-widest">
//                     Before
//                   </span>
//                 </div>
//                 <div className="w-px bg-white/60" />
//                 <div className="w-1/2 bg-gradient-to-br from-moss/30 to-charcoal flex items-end p-4 justify-end">
//                   <span className="font-mono text-xs text-warm uppercase tracking-widest">
//                     After
//                   </span>
//                 </div>
//               </div>
//               {/* Centered icon */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-16 h-16 rounded-full border-2 border-warm/40 flex items-center justify-center">
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="rgba(201,169,110,0.7)"
//                     strokeWidth="1.5"
//                   >
//                     <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
//                     <polyline points="10 17 15 12 10 7" />
//                     <line x1="15" y1="12" x2="3" y2="12" />
//                   </svg>
//                 </div>
//               </div>
//               {/* Floating label */}
//               <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1.5">
//                 <span className="font-mono text-xs text-warm tracking-widest uppercase">
//                   Tity's Edit
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
//         style={{ animation: "fadeIn 1s ease 1.2s forwards" }}
//       >
//         <span className="font-mono text-xs text-ivory/30 tracking-[0.3em] uppercase">
//           Scroll
//         </span>
//         <div className="w-px h-12 bg-gradient-to-b from-ivory/30 to-transparent animate-float" />
//       </div>
//     </section>
//   );
// }

"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
      style={{ background: "var(--color-deep)" }}
    >
      {/* Purple gradient mesh background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(107,63,160,0.5) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(61,31,94,0.6) 0%, transparent 60%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(196,168,224,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(196,168,224,0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Vertical glow line */}
      <div
        className="absolute top-0 bottom-0 opacity-20"
        style={{
          left: "60%",
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, var(--color-lilac), transparent)",
        }}
      />

      {/* Vertical label */}
      <div
        className="absolute bottom-12 left-6 md:left-12"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.4em",
          color: "rgba(196,168,224,0.4)",
          textTransform: "uppercase",
          transform: "rotate(90deg)",
          transformOrigin: "bottom left",
        }}
      >
        Photography · Retouching · Editing
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8">
          <div
            style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                color: "var(--color-lilac)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Visual Artistry
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem,8vw,5rem)",
                fontWeight: 300,
                lineHeight: 1,
                color: "var(--color-ivory)",
              }}
            >
              Where Images
              <br />
              <span
                style={{ fontStyle: "italic", color: "var(--color-lilac)" }}
              >
                Come Alive
              </span>
            </h1>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(237,224,250,0.6)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "400px",
              animation: "fadeUp 0.8s ease 0.45s forwards",
              opacity: 0,
            }}
          >
            Premium photo retouching that transforms ordinary captures into
            extraordinary visual stories. Every pixel crafted with intention.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: "fadeUp 0.8s ease 0.65s forwards", opacity: 0 }}
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 transition-all duration-300"
              style={{
                padding: "16px 32px",
                background: "var(--color-purple)",
                color: "var(--color-ivory)",
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 0 32px rgba(107,63,160,0.4)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-lilac)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-purple)")
              }
            >
              View Portfolio →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 transition-all duration-300"
              style={{
                padding: "16px 32px",
                border: "1px solid rgba(196,168,224,0.35)",
                color: "var(--color-lavender)",
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-lilac)";
                e.currentTarget.style.color = "var(--color-lilac)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(196,168,224,0.35)";
                e.currentTarget.style.color = "var(--color-lavender)";
              }}
            >
              Start a Project
            </a>
          </div>

          <div
            className="flex gap-10 pt-4"
            style={{ animation: "fadeUp 0.8s ease 0.85s forwards", opacity: 0 }}
          >
            {[
              { num: "500+", label: "Projects Done" },
              { num: "98%", label: "Happy Clients" },
              { num: "5★", label: "Rated" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.875rem",
                    fontWeight: 300,
                    color: "var(--color-lilac)",
                  }}
                >
                  {num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "rgba(237,224,250,0.4)",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: decorative frame */}
        <div
          className="relative"
          style={{ animation: "fadeIn 1.2s ease 0.5s forwards", opacity: 0 }}
        >
          <div
            className="relative mx-auto"
            style={{ maxWidth: "320px", aspectRatio: "4/5" }}
          >
            <div
              className="absolute"
              style={{
                top: "-12px",
                right: "-12px",
                left: 0,
                bottom: "12px",
                border: "1px solid rgba(196,168,224,0.25)",
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: "-12px",
                left: "-12px",
                top: 0,
                right: 0,
                border: "1px solid rgba(107,63,160,0.35)",
              }}
            />
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(61,31,94,0.8), var(--color-deep), rgba(107,63,160,0.3))",
              }}
            >
              <div className="absolute inset-0 flex">
                <div
                  className="flex-1 flex items-end p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(196,168,224,0.15), rgba(107,63,160,0.05))",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "rgba(237,224,250,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                    }}
                  >
                    Before
                  </span>
                </div>
                <div
                  style={{ width: "1px", background: "rgba(196,168,224,0.5)" }}
                />
                <div
                  className="flex-1 flex items-end justify-end p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(107,63,160,0.2), var(--color-deep))",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-lilac)",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                    }}
                  >
                    After
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    border: "2px solid rgba(196,168,224,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(107,63,160,0.2)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(196,168,224,0.8)"
                    strokeWidth="1.5"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                </div>
              </div>
              <div
                className="absolute top-4 left-4"
                style={{
                  background: "rgba(26,16,32,0.85)",
                  backdropFilter: "blur(4px)",
                  padding: "6px 12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--color-lilac)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Tity's Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute flex flex-col items-center gap-2"
        style={{
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "fadeIn 1s ease 1.2s forwards",
          opacity: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "rgba(196,168,224,0.3)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background:
              "linear-gradient(to bottom, rgba(196,168,224,0.4), transparent)",
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
