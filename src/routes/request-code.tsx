import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/request-code")({ component: RequestCodePage });

function RequestCodePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", request: "" });
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = `PDF code request%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ARequest: ${form.request}`;
    window.open(`https://wa.me/237654979797?text=${text}`, "_blank", "noopener,noreferrer");
  };
  return <PageShell><section className="mx-auto max-w-xl px-4 py-12 sm:px-6"><h1 className="font-display text-3xl font-bold text-foreground">Request a download code</h1><p className="mt-3 text-sm text-muted-foreground">Complete this form. Your request will open a WhatsApp message to +237 654 979 797 for sending.</p><form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6">{(["name", "email", "phone"] as const).map((field) => <label key={field} className="block text-sm font-medium capitalize text-foreground">{field}<input required value={form[field]} onChange={(event) => setForm({ ...form, [field]: event.target.value })} className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2" /></label>)}<label className="block text-sm font-medium text-foreground">What do you need?<textarea required value={form.request} onChange={(event) => setForm({ ...form, request: event.target.value })} className="mt-1 min-h-32 w-full rounded-xl border border-input bg-background px-3 py-2" /></label><button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Open WhatsApp request</button></form></section></PageShell>;
}
