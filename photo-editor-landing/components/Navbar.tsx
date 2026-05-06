// "use client";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { label: "Work", href: "#work" },
//     { label: "Services", href: "#services" },
//     { label: "About", href: "#about" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav
//       className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
//       style={{
//         background: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
//         backdropFilter: scrolled ? "blur(4px)" : "none",
//         boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
//         padding: scrolled ? "12px 0" : "24px 0",
//       }}
//     >
//       <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo */}
//         <a href="#" className="flex items-center gap-2">
//           <span
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "1.5rem",
//               fontWeight: 300,
//               letterSpacing: "0.05em",
//               // color: "var(--color-charcoal)",
//               color: "var(--color-warm)",
//             }}
//           >
//             tity
//             <span style={{ color: "var(--color-warm)", fontStyle: "italic" }}>
//               's
//             </span>
//           </span>
//           <span
//             style={{
//               fontFamily: "var(--font-mono)",
//               fontSize: "0.65rem",
//               letterSpacing: "0.25em",
//               color: "var(--color-moss)",
//               textTransform: "uppercase",
//               marginTop: "4px",
//             }}
//           >
//             edit
//           </span>
//         </a>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="relative group"
//                 style={{
//                   fontFamily: "var(--font-body)",
//                   fontSize: "0.75rem",
//                   letterSpacing: "0.2em",
//                   textTransform: "uppercase",
//                   color: "rgba(26,26,24,0.7)",
//                   textDecoration: "none",
//                   transition: "color 0.3s",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.color = "var(--color-warm)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.color = "rgba(26,26,24,0.7)")
//                 }
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* CTA */}
//         <a
//           href="#contact"
//           className="hidden md:inline-flex items-center gap-2 transition-colors duration-300"
//           style={{
//             padding: "10px 20px",
//             background: "var(--color-charcoal)",
//             color: "var(--color-ivory)",
//             fontFamily: "var(--font-body)",
//             fontSize: "0.75rem",
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//             textDecoration: "none",
//           }}
//           onMouseEnter={(e) =>
//             (e.currentTarget.style.background = "var(--color-warm)")
//           }
//           onMouseLeave={(e) =>
//             (e.currentTarget.style.background = "var(--color-charcoal)")
//           }
//         >
//           Book Now
//         </a>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden flex flex-col gap-1.5 p-1"
//           aria-label="Menu"
//         >
//           <span
//             className="block w-6 transition-all duration-300"
//             style={{
//               height: "1px",
//               background: "var(--color-charcoal)",
//               transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
//             }}
//           />
//           <span
//             className="block w-6 transition-all duration-300"
//             style={{
//               height: "1px",
//               background: "var(--color-charcoal)",
//               opacity: menuOpen ? 0 : 1,
//             }}
//           />
//           <span
//             className="block w-6 transition-all duration-300"
//             style={{
//               height: "1px",
//               background: "var(--color-charcoal)",
//               transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
//             }}
//           />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className="md:hidden overflow-hidden transition-all duration-500"
//         style={{
//           maxHeight: menuOpen ? "320px" : "0",
//           opacity: menuOpen ? 1 : 0,
//         }}
//       >
//         <div
//           className="px-6 py-4 flex flex-col gap-4"
//           style={{
//             background: "rgba(250,247,242,0.98)",
//             borderTop: "1px solid var(--color-blush)",
//           }}
//         >
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               style={{
//                 fontFamily: "var(--font-body)",
//                 fontSize: "0.75rem",
//                 letterSpacing: "0.2em",
//                 textTransform: "uppercase",
//                 color: "rgba(26,26,24,0.7)",
//                 textDecoration: "none",
//                 padding: "4px 0",
//               }}
//             >
//               {link.label}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             onClick={() => setMenuOpen(false)}
//             style={{
//               marginTop: "8px",
//               padding: "10px 20px",
//               background: "var(--color-charcoal)",
//               color: "var(--color-ivory)",
//               fontFamily: "var(--font-body)",
//               fontSize: "0.75rem",
//               letterSpacing: "0.2em",
//               textTransform: "uppercase",
//               textAlign: "center",
//               textDecoration: "none",
//             }}
//           >
//             Book Now
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,248,252,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(196,168,224,0.2)" : "none",
        padding: scrolled ? "12px 0" : "24px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: scrolled ? "var(--color-deep)" : "var(--color-ivory)",
            }}
          >
            tity
            <span style={{ color: "var(--color-lilac)", fontStyle: "italic" }}>
              's
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: scrolled ? "var(--color-violet)" : "rgba(196,168,224,0.7)",
              textTransform: "uppercase",
              marginTop: "4px",
            }}
          >
            edit
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: scrolled
                    ? "rgba(26,16,32,0.6)"
                    : "rgba(237,224,250,0.75)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-lilac)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled
                    ? "rgba(26,16,32,0.6)"
                    : "rgba(237,224,250,0.75)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 transition-all duration-300"
          style={{
            padding: "10px 20px",
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
          Book Now
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 transition-all duration-300"
              style={{
                height: "1px",
                background: scrolled
                  ? "var(--color-deep)"
                  : "var(--color-lavender)",
                transform:
                  i === 0 && menuOpen
                    ? "rotate(45deg) translateY(8px)"
                    : i === 2 && menuOpen
                      ? "rotate(-45deg) translateY(-8px)"
                      : "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? "320px" : "0",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          className="px-6 py-4 flex flex-col gap-4"
          style={{
            background: "rgba(250,248,252,0.98)",
            borderTop: "1px solid rgba(196,168,224,0.2)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(26,16,32,0.6)",
                textDecoration: "none",
                padding: "4px 0",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "8px",
              padding: "10px 20px",
              background: "var(--color-purple)",
              color: "var(--color-ivory)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
