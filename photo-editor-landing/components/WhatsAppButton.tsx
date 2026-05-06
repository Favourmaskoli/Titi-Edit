// "use client";
// import { useState, useEffect } from "react";

// export default function WhatsAppButton() {
//   const [visible, setVisible] = useState(false);
//   const [pulse, setPulse] = useState(false);

//   useEffect(() => {
//     const showTimer = setTimeout(() => setVisible(true), 2000);
//     const pulseInterval = setInterval(() => {
//       setPulse(true);
//       setTimeout(() => setPulse(false), 1500);
//     }, 4000);
//     return () => {
//       clearTimeout(showTimer);
//       clearInterval(pulseInterval);
//     };
//   }, []);

//   const whatsappNumber = "2347026257423";
//   const message = encodeURIComponent(
//     "Hi Tity! 👋 I came across your portfolio and I'm interested in your photo editing services. Can we discuss a project?",
//   );

//   return (
//     <div
//       className="fixed z-50 flex items-end gap-3 transition-all duration-500"
//       style={{
//         bottom: "24px",
//         right: "24px",
//         transform: visible ? "translateY(0)" : "translateY(64px)",
//         opacity: visible ? 1 : 0,
//       }}
//     >
//       {/* Tooltip */}
//       <div
//         className="mb-2 relative transition-all duration-300"
//         style={{
//           background: "var(--color-charcoal)",
//           padding: "10px 16px",
//           boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
//           opacity: pulse ? 1 : 0,
//           transform: pulse ? "translateX(0)" : "translateX(16px)",
//           pointerEvents: pulse ? "auto" : "none",
//           whiteSpace: "nowrap",
//         }}
//       >
//         <span
//           style={{
//             fontFamily: "var(--font-display)",
//             fontStyle: "italic",
//             color: "var(--color-warm)",
//           }}
//         >
//           Chat with Tity
//         </span>
//         <span
//           style={{
//             fontFamily: "var(--font-body)",
//             fontSize: "0.875rem",
//             color: "rgba(250,247,242,0.6)",
//           }}
//         >
//           {" "}
//           — I&apos;m online!
//         </span>
//         <span
//           className="absolute"
//           style={{
//             right: "-8px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             borderLeft: "8px solid var(--color-charcoal)",
//             borderTop: "4px solid transparent",
//             borderBottom: "4px solid transparent",
//           }}
//         />
//       </div>

//       {/* Button */}
//       <a
//         href={`https://wa.me/${whatsappNumber}?text=${message}`}
//         target="_blank"
//         rel="noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="relative group"
//       >
//         {pulse && (
//           <span
//             className="absolute inset-0 rounded-full animate-ping"
//             style={{ background: "rgba(37,211,102,0.4)" }}
//           />
//         )}
//         <span
//           className="absolute inset-0 rounded-full"
//           style={{
//             background: "rgba(37,211,102,0.2)",
//             transform: "scale(1.1)",
//           }}
//         />
//         <div
//           className="relative flex items-center justify-center rounded-full transition-all duration-300"
//           style={{
//             width: "56px",
//             height: "56px",
//             background: "#25D366",
//             boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "scale(1.1)";
//             e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,211,102,0.4)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.3)";
//           }}
//         >
//           <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//           </svg>
//         </div>
//       </a>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2000);
    const pulseInterval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1500);
    }, 4000);
    return () => {
      clearTimeout(showTimer);
      clearInterval(pulseInterval);
    };
  }, []);

  const whatsappNumber = "2348100000000";
  const message = encodeURIComponent(
    "Hi Tity! 👋 I came across your portfolio and I'm interested in your photo editing services. Can we discuss a project?",
  );

  return (
    <div
      className="fixed z-50 flex items-end gap-3 transition-all duration-500"
      style={{
        bottom: "24px",
        right: "24px",
        transform: visible ? "translateY(0)" : "translateY(64px)",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Tooltip */}
      <div
        className="mb-2 relative transition-all duration-300"
        style={{
          background: "var(--color-plum)",
          padding: "10px 16px",
          boxShadow: "0 8px 30px rgba(61,31,94,0.4)",
          opacity: pulse ? 1 : 0,
          transform: pulse ? "translateX(0)" : "translateX(16px)",
          pointerEvents: pulse ? "auto" : "none",
          whiteSpace: "nowrap",
          border: "1px solid rgba(196,168,224,0.15)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            color: "var(--color-lilac)",
          }}
        >
          Chat with Tity
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "rgba(237,224,250,0.6)",
          }}
        >
          {" "}
          — I&apos;m online!
        </span>
        <span
          className="absolute"
          style={{
            right: "-8px",
            top: "50%",
            transform: "translateY(-50%)",
            borderLeft: "8px solid var(--color-plum)",
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
          }}
        />
      </div>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative"
      >
        {pulse && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: "rgba(37,211,102,0.4)" }}
          />
        )}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(37,211,102,0.15)",
            transform: "scale(1.15)",
          }}
        />
        <div
          className="relative flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            width: "56px",
            height: "56px",
            background: "#25D366",
            boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 8px 32px rgba(37,211,102,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 24px rgba(37,211,102,0.35)";
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
