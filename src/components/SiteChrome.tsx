import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  Stethoscope,
  CheckCircle2,
  ArrowUp,
} from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top Banner Announcement */}
      <div className="bg-wine-gradient px-4 py-2 text-center text-xs font-medium text-primary-foreground shadow-sm">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-rose-soft" />
          <span>In-clinic &amp; Video consultations available</span>
          <span className="hidden sm:inline">·</span>
          <a
            href="tel:+917995574432"
            className="font-semibold underline-offset-4 hover:underline"
          >
            Call +91 79955 74432
          </a>
        </span>
      </div>

      {/* Main Header with Clean Logo */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5">
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <img
              src="/logo.svg"
              alt="Dr. Priyanka Singh - Fertility, Obstetrics & Gynecology"
              className="h-11 sm:h-12 w-auto max-h-12 object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary font-semibold" : "text-foreground/75"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Button asChild className="hidden rounded-full shadow-soft sm:inline-flex">
            <Link to="/contact">
              <CalendarDays className="mr-2 h-4 w-4" />
              Book Appointment
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav
          aria-label="Mobile navigation"
          className="flex justify-center gap-6 overflow-x-auto border-t border-border/60 px-4 py-2.5 md:hidden"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `shrink-0 text-xs font-semibold transition-colors ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Floating Action Buttons: WhatsApp & Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-primary shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blush hover:text-wine focus:outline-none focus:ring-2 focus:ring-rose/30"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating WhatsApp Button with Exact Official Symbol */}
        <a
          href="https://wa.me/917995574432?text=Hello%20Dr.%20Priyanka%20Singh%27s%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-glow-soft focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label="Chat with Dr. Priyanka Clinic on WhatsApp"
        >
          <WhatsAppIcon className="h-6 w-6 text-white" />
          <span className="text-sm font-semibold tracking-wide hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      {/* Redesigned Footer */}
      <footer className="relative overflow-hidden bg-wine-gradient text-primary-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-wine/30 blur-3xl" />

        {/* Trust & Clinical Highlights Strip */}
        <div className="border-b border-white/10 bg-black/10 py-7">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Award className="h-5 w-5 text-rose-soft" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">10+ Years</p>
                <p className="text-xs text-primary-foreground/70">Clinical Excellence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Heart className="h-5 w-5 text-rose-soft fill-rose-soft/30" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">5,000+ Families</p>
                <p className="text-xs text-primary-foreground/70">Carefully Supported</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5 text-rose-soft" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Evidence-Led</p>
                <p className="text-xs text-primary-foreground/70">Transparent Care</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Stethoscope className="h-5 w-5 text-rose-soft" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">IVF Fellowship</p>
                <p className="text-xs text-primary-foreground/70">Reproductive Specialist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="mx-auto max-w-7xl px-5 py-14 lg:py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Doctor Profile */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Heart className="h-5 w-5 text-rose-soft fill-rose-soft" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-none text-white">
                    Dr. Priyanka Singh
                  </h3>
                  <p className="text-xs text-primary-foreground/75 mt-1">
                    MBBS, DGO, DNB (OBG)
                  </p>
                </div>
              </div>
              <p className="text-xs font-medium text-rose-soft">
                Fellowship in Reproductive Medicine (IVF)
              </p>
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                Dedicated to compassionate, transparent fertility, pregnancy, and women’s healthcare.
                Practicing at Radiance Speciality Clinics with modern diagnostic and treatment facilities.
              </p>
              <div className="pt-2">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-rose-soft border border-white/15">
                  Radiance Speciality Clinics
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-soft">
                Quick Navigation
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-2 transition-colors hover:text-white hover:translate-x-1 duration-200"
                    >
                      <span className="h-1 w-1 rounded-full bg-rose-soft" />
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 transition-colors hover:text-white hover:translate-x-1 duration-200"
                  >
                    <span className="h-1 w-1 rounded-full bg-rose-soft" />
                    Book an Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Clinical Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-soft">
                Clinical Care
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                  <span>Fertility &amp; IVF / ICSI Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                  <span>Ovulation Induction &amp; IUI</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                  <span>High-Risk Pregnancy Care</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                  <span>PCOS &amp; Hormonal Balance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                  <span>Laparoscopy &amp; Hysteroscopy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-soft shrink-0" />
                  <span>Recurrent Loss Support</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Timings */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-soft">
                Clinic &amp; Timings
              </h4>
              <div className="space-y-3 text-sm text-primary-foreground/85">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-rose-soft" />
                  <div>
                    <p className="font-semibold text-white">Radiance Speciality Clinics</p>
                    <p className="text-xs text-primary-foreground/75 leading-relaxed">
                      Bachupally X Road, Bachupally, Hyderabad, Telangana 500090
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-rose-soft" />
                  <a
                    href="tel:+917995574432"
                    className="font-semibold text-white hover:text-rose-soft transition-colors"
                  >
                    +91 79955 74432
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-rose-soft" />
                  <a
                    href="https://wa.me/917995574432"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    WhatsApp: +91 79955 74432
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-rose-soft" />
                  <div>
                    <p className="font-medium text-white text-xs">Mon – Sat: 9:00 AM – 9:00 PM</p>
                    <p className="text-xs text-primary-foreground/65">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                <Button
                  asChild
                  size="sm"
                  variant="secondary"
                  className="rounded-full text-xs font-semibold shadow-sm"
                >
                  <a href="tel:+917995574432">Call Clinic</a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] text-xs font-semibold"
                >
                  <a href="https://wa.me/917995574432" target="_blank" rel="noreferrer">
                    <WhatsAppIcon className="mr-1.5 h-3.5 w-3.5 text-white" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-xs text-primary-foreground/75 sm:flex-row">
            <div>
              <p>
                © {new Date().getFullYear()} Dr. Priyanka Singh. All rights reserved. Radiance Speciality Clinics.
              </p>
              <p className="mt-1 text-[0.72rem] text-primary-foreground/70">
                Website Developed by{" "}
                <a
                  href="tel:9014084396"
                  className="font-semibold text-rose-soft hover:underline"
                >
                  Babu Website
                </a>{" "}
                —{" "}
                <a href="tel:9014084396" className="text-white hover:underline font-medium">
                  9014084396
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact &amp; Location
              </Link>
              <a
                href="https://wa.me/917995574432"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-rose-soft"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-rose-soft" />
                <span>+91 79955 74432</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}