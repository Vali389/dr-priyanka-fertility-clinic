import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, CheckCircle2, Sparkles, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate min-h-[34rem] overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[0.98] contrast-[1.02]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-wine/75 via-wine/40 to-black/20" />
      <div className="mx-auto flex min-h-[34rem] max-w-7xl items-center px-5 py-20">
        <div className="max-w-2xl animate-rise text-white drop-shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-soft">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-tight font-semibold sm:text-6xl text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/90">
            {text}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-white text-wine font-semibold hover:bg-white/90 shadow-lg"
          >
            <Link to="/contact">
              <CalendarDays className="mr-2 h-4 w-4 text-wine" />
              Book a consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight font-semibold text-wine">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
      ) : null}
    </Reveal>
  );
}

export function AppointmentBand({
  title = "Ready to take the next step?",
  text = "Meet Dr. Priyanka for a calm, clear conversation about your health and treatment options.",
}: {
  title?: string;
  text?: string;
}) {
  const isDefaultTitle = title === "Ready to take the next step?";

  return (
    <section className="px-5 py-20">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#4a0e24] via-[#651534] to-[#881d45] p-8 sm:p-12 lg:p-14 text-white shadow-2xl">
        {/* Soft Ambient Glow Elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-rose/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#f43f5e]/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-rose-soft backdrop-blur-md border border-white/20 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-rose-soft" />
              <span>Compassionate Care · Confident Journeys</span>
            </span>

            {isDefaultTitle ? (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to take the next step?
                <span className="block text-rose-soft mt-1.5 font-serif italic text-2xl sm:text-3xl lg:text-4xl font-normal">
                  Care that begins with listening.
                </span>
              </h2>
            ) : (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {title}
              </h2>
            )}

            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/85">
              {text}
            </p>

            {/* Trust Highlights */}
            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 text-xs text-white/90">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                Unhurried 45-Min Consultation
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                100% Confidential &amp; Private
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                In-Clinic &amp; Video Options
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-wine hover:bg-white/90 font-semibold shadow-lg text-sm px-6 h-12"
            >
              <Link to="/contact">
                <CalendarDays className="mr-2 h-4 w-4 text-wine" />
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4 text-wine" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] font-semibold shadow-lg text-sm px-6 h-12"
            >
              <a
                href="https://wa.me/917995574432?text=Hello%20Dr.%20Priyanka%20Singh%27s%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="mr-2 h-4 w-4 text-white" />
                WhatsApp Us
              </a>
            </Button>

            <div className="pt-1 text-center lg:text-right">
              <a
                href="tel:+917995574432"
                className="text-xs text-rose-soft/90 hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="h-3 w-3" />
                <span>Call Clinic: +91 79955 74432</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function IconCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="lift h-full rounded-lg border border-border bg-card p-7 shadow-card-soft">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-rose">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-wine">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}