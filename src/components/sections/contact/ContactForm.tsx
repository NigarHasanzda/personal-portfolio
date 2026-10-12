"use client";

import { useState } from "react";
import { profile } from "@/config/profile";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio — mesaj${name ? ` (${name})` : ""}`,
    );
    const body = encodeURIComponent(
      `Ad: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${profile.identity.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-lg border border-[#e8b070]/25 bg-[#0c0806] px-4 py-3 font-mono text-sm text-[#f0c88a] placeholder:text-[#e8b070]/35 outline-none transition focus:border-[#e8b070]/50 focus:ring-1 focus:ring-[#e8b070]/25";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="contact-name"
          className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#e8b070]/55"
        >
          Ad
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${inputClass} mt-2`}
          placeholder="Adınız"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#e8b070]/55"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputClass} mt-2`}
          placeholder="siz@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#e8b070]/55"
        >
          Mesaj
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} mt-2 resize-y min-h-[120px]`}
          placeholder="Layihəniz haqqında qısaca..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg border border-[#e8b070]/40 bg-[#e8b070]/10 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffe4b8] transition hover:border-[#e8b070]/60 hover:bg-[#e8b070]/15 sm:w-auto"
      >
        Email ilə göndər ↗
      </button>
    </form>
  );
}
