"use client";
import { useEffect, useRef } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const portfolioItems = [
  {
    id: 1,
    title: "Portrait Retouch",
    category: "Portrait",
    beforeSrc:
      "https://github.com/Favourmaskoli/Titi-Edit/blob/main/portrait_before.png?raw=true",
    afterSrc:
      "https://github.com/Favourmaskoli/Titi-Edit/blob/main/portrait_after.png?raw=true",
  },
  {
    id: 2,
    title: "Landscape Color Grade",
    category: "Color Grading",
    beforeSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80&sat=-90",
    afterSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Product Enhancement",
    category: "Product",
    beforeSrc:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80&sat=-70",
    afterSrc:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Fashion Edit",
    category: "Fashion",
    beforeSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80&sat=-80",
    afterSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Wedding Moments",
    category: "Wedding",
    beforeSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80&sat=-60",
    afterSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Street Photography",
    category: "Urban",
    beforeSrc:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=80&sat=-100",
    afterSrc:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=80",
  },
];

export default function WorkSection() {
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
      id="work"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "var(--color-ivory)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.35em",
                color: "var(--color-violet)",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              — Portfolio
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem,6vw,3.75rem)",
                fontWeight: 300,
                color: "var(--color-deep)",
                lineHeight: 1.1,
              }}
            >
              Selected
              <br />
              <span
                style={{ fontStyle: "italic", color: "var(--color-purple)" }}
              >
                Works
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(26,16,32,0.5)",
              maxWidth: "280px",
              lineHeight: 1.7,
              fontSize: "0.875rem",
            }}
          >
            Drag the slider on each image to reveal the transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger">
          {portfolioItems.map((item) => (
            <div key={item.id} className="reveal">
              <BeforeAfterSlider
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
                category={item.category}
                title={item.title}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(26,16,32,0.5)",
              fontSize: "0.875rem",
              marginBottom: "24px",
            }}
          >
            Want to see more? Let&apos;s discuss your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 transition-all duration-300"
            style={{
              padding: "16px 32px",
              border: "2px solid var(--color-purple)",
              color: "var(--color-purple)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-purple)";
              e.currentTarget.style.color = "var(--color-ivory)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-purple)";
            }}
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
