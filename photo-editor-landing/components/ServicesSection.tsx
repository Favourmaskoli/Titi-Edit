// "use client";
// import { useEffect, useRef } from "react";

// const services = [
//   {
//     number: "01",
//     title: "Portrait Retouching",
//     description:
//       "Skin smoothing, blemish removal, eye enhancement, and natural beauty amplification that preserves authenticity.",
//     tags: ["Skin", "Eyes", "Hair"],
//   },
//   {
//     number: "02",
//     title: "Color Grading",
//     description:
//       "Cinematic color transformations that set the mood and visual tone of your images, from warm film looks to cool editorial tones.",
//     tags: ["Film", "Cinematic", "Mood"],
//   },
//   {
//     number: "03",
//     title: "Product Photography",
//     description:
//       "Background removal, shadow creation, color correction and detail enhancement to make your products shine.",
//     tags: ["eCommerce", "Catalog", "Brand"],
//   },
//   {
//     number: "04",
//     title: "Wedding & Events",
//     description:
//       "Preserving the magic of your special moments with thoughtful retouching that keeps emotions raw and real.",
//     tags: ["Wedding", "Events", "Family"],
//   },
//   {
//     number: "05",
//     title: "Background Editing",
//     description:
//       "Seamless background removal, replacement and manipulation — from studio-clean to custom environments.",
//     tags: ["Removal", "Replace", "Composite"],
//   },
//   {
//     number: "06",
//     title: "Photo Restoration",
//     description:
//       "Breathe new life into old, damaged, or faded photographs with careful digital restoration techniques.",
//     tags: ["Old Photos", "Damage", "Colorize"],
//   },
// ];

// export default function ServicesSection() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("visible");
//         });
//       },
//       { threshold: 0.1 },
//     );
//     const reveals = sectionRef.current?.querySelectorAll(".reveal");
//     reveals?.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="services"
//       ref={sectionRef}
//       className="py-24 md:py-32 bg-charcoal"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="mb-16 reveal">
//           <p className="font-mono text-xs tracking-[0.35em] text-warm uppercase mb-3">
//             — What I Do
//           </p>
//           <h2 className="font-display text-5xl md:text-6xl font-light text-ivory leading-tight">
//             Services &
//             <br />
//             <span className="italic text-warm">Specialties</span>
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10 stagger">
//           {services.map((service) => (
//             <div
//               key={service.number}
//               className="reveal bg-charcoal p-8 hover:bg-moss/20 transition-colors duration-500 group cursor-default"
//             >
//               <div className="flex items-start justify-between mb-6">
//                 <span className="font-mono text-xs text-warm/50 tracking-widest">
//                   {service.number}
//                 </span>
//                 <div className="w-6 h-6 border border-ivory/20 rounded-full flex items-center justify-center group-hover:border-warm/50 transition-colors duration-300">
//                   <span className="text-ivory/30 group-hover:text-warm text-xs transition-colors duration-300">
//                     +
//                   </span>
//                 </div>
//               </div>

//               <h3 className="font-display text-2xl font-light text-ivory mb-3 group-hover:text-warm transition-colors duration-300">
//                 {service.title}
//               </h3>

//               <p className="font-body text-ivory/40 text-sm leading-relaxed mb-6">
//                 {service.description}
//               </p>

//               <div className="flex gap-2 flex-wrap">
//                 {service.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-2.5 py-1 border border-ivory/15 font-mono text-xs text-ivory/40 tracking-widest uppercase group-hover:border-warm/30 group-hover:text-warm/60 transition-colors duration-300"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pricing note */}
//         <div className="mt-12 p-6 border border-warm/20 bg-warm/5 reveal flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div>
//             <p className="font-display text-xl text-ivory font-light">
//               Every project is unique.
//             </p>
//             <p className="font-body text-ivory/50 text-sm mt-1">
//               Pricing starts from ₦5,000 per photo. Volume discounts available.
//             </p>
//           </div>
//           <a
//             href="#contact"
//             className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 bg-warm text-charcoal font-body text-sm tracking-widest uppercase hover:bg-blush transition-colors duration-300 shrink-0"
//           >
//             Get a Quote
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    title: "Portrait Retouching",
    description:
      "Skin smoothing, blemish removal, eye enhancement, and natural beauty amplification that preserves authenticity.",
    tags: ["Skin", "Eyes", "Hair"],
  },
  {
    number: "02",
    title: "Color Grading",
    description:
      "Cinematic color transformations that set the mood and visual tone — from warm film looks to cool editorial tones.",
    tags: ["Film", "Cinematic", "Mood"],
  },
  {
    number: "03",
    title: "Product Photography",
    description:
      "Background removal, shadow creation, color correction and detail enhancement to make your products shine.",
    tags: ["eCommerce", "Catalog", "Brand"],
  },
  {
    number: "04",
    title: "Wedding & Events",
    description:
      "Preserving the magic of your special moments with thoughtful retouching that keeps emotions raw and real.",
    tags: ["Wedding", "Events", "Family"],
  },
  {
    number: "05",
    title: "Background Editing",
    description:
      "Seamless background removal, replacement and manipulation — from studio-clean to custom environments.",
    tags: ["Removal", "Replace", "Composite"],
  },
  {
    number: "06",
    title: "Photo Restoration",
    description:
      "Breathe new life into old, damaged, or faded photographs with careful digital restoration techniques.",
    tags: ["Old Photos", "Damage", "Colorize"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "var(--color-deep)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              color: "var(--color-lilac)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            — What I Do
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem,6vw,3.75rem)",
              fontWeight: 300,
              color: "var(--color-ivory)",
              lineHeight: 1.1,
            }}
          >
            Services &<br />
            <span style={{ fontStyle: "italic", color: "var(--color-lilac)" }}>
              Specialties
            </span>
          </h2>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 stagger"
          style={{
            gap: "1px",
            background: "rgba(196,168,224,0.1)",
            border: "1px solid rgba(196,168,224,0.1)",
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.number} {...s} />
          ))}
        </div>

        <div
          className="mt-12 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 reveal"
          style={{
            border: "1px solid rgba(196,168,224,0.2)",
            background: "rgba(107,63,160,0.08)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                color: "var(--color-ivory)",
                fontWeight: 300,
              }}
            >
              Every project is unique.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(196,168,224,0.6)",
                fontSize: "0.875rem",
                marginTop: "4px",
              }}
            >
              Pricing starts from ₦5,000 per photo. Volume discounts available.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap inline-flex items-center gap-2 transition-all duration-300 shrink-0"
            style={{
              padding: "12px 24px",
              background: "var(--color-purple)",
              color: "var(--color-ivory)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--color-lilac)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--color-purple)")
            }
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  number,
  title,
  description,
  tags,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div
      className="reveal p-8 transition-colors duration-500 cursor-default"
      style={{ background: "var(--color-deep)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(107,63,160,0.15)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "var(--color-deep)")
      }
    >
      <div className="flex items-start justify-between mb-6">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "rgba(196,168,224,0.4)",
            letterSpacing: "0.2em",
          }}
        >
          {number}
        </span>
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(196,168,224,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "rgba(196,168,224,0.3)", fontSize: "0.75rem" }}>
            +
          </span>
        </div>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          fontWeight: 300,
          color: "var(--color-lavender)",
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          color: "rgba(196,168,224,0.45)",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          marginBottom: "24px",
        }}
      >
        {description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "4px 10px",
              border: "1px solid rgba(196,168,224,0.15)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "rgba(196,168,224,0.4)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
