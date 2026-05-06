// "use client";
// import { useState, useEffect, useRef } from "react";

// export default function ContactSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//     photos: "",
//   });
//   const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
//     "idle",
//   );

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

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("sending");
//     // Simulate submission — replace with actual API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setStatus("sent");
//     setFormData({ name: "", email: "", service: "", message: "", photos: "" });
//   };

//   const inputClass =
//     "w-full bg-transparent border-b border-charcoal/20 py-3 font-body text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-warm transition-colors duration-300 text-sm";

//   return (
//     <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-ivory">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-16 items-start">
//           {/* Left info */}
//           <div className="space-y-10 reveal">
//             <div>
//               <p className="font-mono text-xs tracking-[0.35em] text-warm uppercase mb-3">
//                 — Let's Connect
//               </p>
//               <h2 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight">
//                 Start Your
//                 <br />
//                 <span className="italic text-moss">Project</span>
//               </h2>
//             </div>

//             <p className="font-body text-charcoal/50 leading-relaxed max-w-sm">
//               Ready to transform your images? Fill in the form and I'll get back
//               to you within 24 hours with a quote and timeline.
//             </p>

//             {/* Contact info */}
//             <div className="space-y-5">
//               {[
//                 {
//                   icon: (
//                     <svg
//                       width="18"
//                       height="18"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.63 12 19.79 19.79 0 0 1 1.52 3.4 2 2 0 0 1 3.48 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14.09 15.9l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                     </svg>
//                   ),
//                   label: "WhatsApp",
//                   value: "+234 810 000 0000",
//                   href: "https://wa.me/2348100000000",
//                 },
//                 {
//                   icon: (
//                     <svg
//                       width="18"
//                       height="18"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <rect x="2" y="4" width="20" height="16" rx="2" />
//                       <path d="M2 8l10 6 10-6" />
//                     </svg>
//                   ),
//                   label: "Email",
//                   value: "titys.edit@gmail.com",
//                   href: "mailto:titys.edit@gmail.com",
//                 },
//                 {
//                   icon: (
//                     <svg
//                       width="18"
//                       height="18"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                       <circle cx="12" cy="12" r="4" />
//                       <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
//                     </svg>
//                   ),
//                   label: "Instagram",
//                   value: "@titys.edit",
//                   href: "https://instagram.com/titys.edit",
//                 },
//               ].map(({ icon, label, value, href }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-4 group"
//                 >
//                   <div className="w-10 h-10 border border-charcoal/15 flex items-center justify-center text-charcoal/40 group-hover:border-warm group-hover:text-warm transition-colors duration-300">
//                     {icon}
//                   </div>
//                   <div>
//                     <p className="font-mono text-xs text-charcoal/30 tracking-widest uppercase">
//                       {label}
//                     </p>
//                     <p className="font-body text-sm text-charcoal/70 group-hover:text-warm transition-colors duration-300">
//                       {value}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Turnaround note */}
//             <div className="border-l-2 border-warm pl-5">
//               <p className="font-body text-sm text-charcoal/60 leading-relaxed">
//                 <span className="text-charcoal font-medium">
//                   Average turnaround:
//                 </span>{" "}
//                 24–48 hours for standard edits. Rush delivery available for
//                 urgent projects.
//               </p>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div className="reveal">
//             {status === "sent" ? (
//               <div className="text-center py-20">
//                 <div className="w-16 h-16 border-2 border-warm rounded-full flex items-center justify-center mx-auto mb-6">
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#C9A96E"
//                     strokeWidth="2"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                 </div>
//                 <h3 className="font-display text-3xl font-light text-charcoal mb-3">
//                   Message Sent!
//                 </h3>
//                 <p className="font-body text-charcoal/50 text-sm">
//                   I'll get back to you within 24 hours.
//                 </p>
//                 <button
//                   onClick={() => setStatus("idle")}
//                   className="mt-8 font-mono text-xs text-warm tracking-widest uppercase hover:underline"
//                 >
//                   Send Another
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div>
//                     <label className="font-mono text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="Your name"
//                       className={inputClass}
//                     />
//                   </div>
//                   <div>
//                     <label className="font-mono text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       placeholder="you@email.com"
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="font-mono text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
//                     Service Needed *
//                   </label>
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                     className={`${inputClass} cursor-pointer`}
//                   >
//                     <option value="" disabled>
//                       Select a service
//                     </option>
//                     <option value="portrait">Portrait Retouching</option>
//                     <option value="colorgrade">Color Grading</option>
//                     <option value="product">Product Photography Edit</option>
//                     <option value="wedding">Wedding & Events</option>
//                     <option value="background">Background Editing</option>
//                     <option value="restoration">Photo Restoration</option>
//                     <option value="other">Other / Custom</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="font-mono text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
//                     Number of Photos
//                   </label>
//                   <input
//                     type="text"
//                     name="photos"
//                     value={formData.photos}
//                     onChange={handleChange}
//                     placeholder="e.g. 10 photos"
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="font-mono text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
//                     Project Details *
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     placeholder="Tell me about your project, style preferences, deadline..."
//                     className={`${inputClass} resize-none`}
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={status === "sending"}
//                   className="w-full py-4 bg-charcoal text-ivory font-body text-sm tracking-widest uppercase hover:bg-warm transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//                 >
//                   {status === "sending" ? (
//                     <>
//                       <svg
//                         className="animate-spin"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                       >
//                         <path
//                           d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           strokeOpacity="0.25"
//                         />
//                         <path d="M21 12a9 9 0 01-9-9" />
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <span>→</span>
//                     </>
//                   )}
//                 </button>

//                 <p className="font-mono text-xs text-charcoal/30 text-center tracking-widest">
//                   Or reach me directly on WhatsApp for faster responses
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    photos: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", service: "", message: "", photos: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    borderBottom: "1px solid rgba(107,63,160,0.2)",
    padding: "12px 0",
    fontFamily: "var(--font-body)",
    color: "var(--color-deep)",
    fontSize: "0.875rem",
    outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "rgba(107,63,160,0.6)",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "var(--color-ivory)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-10 reveal">
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
                — Let&apos;s Connect
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem,5vw,3.75rem)",
                  fontWeight: 300,
                  color: "var(--color-deep)",
                  lineHeight: 1.1,
                }}
              >
                Start Your
                <br />
                <span
                  style={{ fontStyle: "italic", color: "var(--color-purple)" }}
                >
                  Project
                </span>
              </h2>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(26,16,32,0.5)",
                lineHeight: 1.8,
                maxWidth: "340px",
              }}
            >
              Ready to transform your images? Fill in the form and I&apos;ll get
              back to you within 24 hours.
            </p>
            <div className="space-y-5">
              {[
                {
                  label: "WhatsApp",
                  value: "+234 702 625 7423",
                  href: "https://wa.me/2347026257423",
                },
                {
                  label: "Email",
                  value: "titys.edit@gmail.com",
                  href: "mailto:titysedit@gmail.com",
                },
                {
                  label: "Instagram",
                  value: "@titys.edit",
                  href: "https://instagram.com/titysedit",
                },
              ].map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="flex items-center justify-center transition-all duration-300"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid rgba(107,63,160,0.2)",
                      color: "rgba(107,63,160,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-purple)";
                      e.currentTarget.style.color = "var(--color-purple)";
                      e.currentTarget.style.background =
                        "rgba(107,63,160,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(107,63,160,0.2)";
                      e.currentTarget.style.color = "rgba(107,63,160,0.5)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span style={{ fontSize: "0.875rem" }}>→</span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: "rgba(26,16,32,0.3)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "rgba(26,16,32,0.7)",
                        marginTop: "2px",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div
              style={{
                borderLeft: "2px solid var(--color-lilac)",
                paddingLeft: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "rgba(26,16,32,0.6)",
                  lineHeight: 1.7,
                }}
              >
                <span style={{ color: "var(--color-deep)", fontWeight: 500 }}>
                  Average turnaround:
                </span>{" "}
                24–48 hours for standard edits. Rush delivery available.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="reveal">
            {status === "sent" ? (
              <div className="text-center py-20">
                <div
                  className="flex items-center justify-center mx-auto mb-6"
                  style={{
                    width: "64px",
                    height: "64px",
                    border: "2px solid var(--color-purple)",
                    borderRadius: "50%",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-purple)"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.875rem",
                    fontWeight: 300,
                    color: "var(--color-deep)",
                    marginBottom: "12px",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(26,16,32,0.5)",
                    fontSize: "0.875rem",
                  }}
                >
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "32px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--color-purple)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Service Needed *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="portrait">Portrait Retouching</option>
                    <option value="colorgrade">Color Grading</option>
                    <option value="product">Product Photography Edit</option>
                    <option value="wedding">Wedding & Events</option>
                    <option value="background">Background Editing</option>
                    <option value="restoration">Photo Restoration</option>
                    <option value="other">Other / Custom</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Number of Photos</label>
                  <input
                    type="text"
                    name="photos"
                    value={formData.photos}
                    onChange={handleChange}
                    placeholder="e.g. 10 photos"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project, style preferences, deadline..."
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 transition-all duration-300"
                  style={{
                    padding: "16px",
                    background:
                      status === "sending"
                        ? "rgba(107,63,160,0.5)"
                        : "var(--color-purple)",
                    color: "var(--color-ivory)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending")
                      e.currentTarget.style.background = "var(--color-lilac)";
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "sending")
                      e.currentTarget.style.background = "var(--color-purple)";
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>
                <p
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "rgba(107,63,160,0.4)",
                    letterSpacing: "0.2em",
                  }}
                >
                  Or reach me directly on WhatsApp for faster responses
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
