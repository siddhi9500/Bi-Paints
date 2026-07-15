"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  if (submitted) {
    return (
      <div className="rounded-[10px] bg-cream p-8 text-center">
        <p className="text-body text-heading font-medium">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-small font-medium text-ink">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            className="px-4 py-2.5 text-body bg-white border border-black/15 rounded-[10px] outline-none focus:border-primary transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-small font-medium text-ink">E-mail</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="you@company.com"
            className="px-4 py-2.5 text-body bg-white border border-black/15 rounded-[10px] outline-none focus:border-primary transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-small font-medium text-ink">Phone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          placeholder="Your phone number"
          className="px-4 py-2.5 text-body bg-white border border-black/15 rounded-[10px] outline-none focus:border-primary transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-small font-medium text-ink">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Tell us what you're looking for"
          className="px-4 py-2.5 text-body bg-white border border-black/15 rounded-[10px] outline-none focus:border-primary transition-colors duration-200 resize-none"
        />
      </div>

      <Button type="submit" size="sm" className="self-start">
        Send Message
      </Button>
    </form>
  );
}
