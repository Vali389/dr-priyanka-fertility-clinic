import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  Video,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import clinicInterior from "@/assets/clinic-interior.jpg";
import consultation from "@/assets/consultation.jpg";
import contactHeroBg from "@/assets/contact-hero-bg.jpg";
import { IconCard, PageHero, SectionHeading } from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Fertility & IVF Planning",
    consultationType: "In-Clinic Visit (Bachupally)",
    preferredDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappMessage = `*Appointment Request - Dr. Priyanka Singh Clinic*
----------------------------------
*Patient Name:* ${formData.name || "Not specified"}
*Phone:* ${formData.phone || "Not specified"}
*Consultation Mode:* ${formData.consultationType}
*Service Required:* ${formData.service}
*Preferred Date/Time:* ${formData.preferredDate || "Flexible"}
*Notes / Symptoms:* ${formData.message || "None"}
----------------------------------
_Sent from Clinic Website_`;

    const whatsappUrl = `https://wa.me/917995574432?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact & Appointments"
        title="Your next step starts with an unhurried conversation."
        text="Choose an in-clinic appointment in Bachupally, Hyderabad, or a secure video consultation from home. Our team will assist you in finding a convenient slot."
        image={contactHeroBg}
        imageAlt="Dr. Priyanka Singh Fertility Clinic warm reception and patient welcome lounge"
      />

      {/* 3 Contact Mode Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Get in touch"
            title="Choose the appointment mode that suits you best"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <IconCard
                icon={<Phone className="h-6 w-6" />}
                title="Call the clinic"
                text="Speak with our patient coordinator at +91 79955 74432 to book or reschedule your visit."
              />
            </Reveal>
            <Reveal delay={100}>
              <IconCard
                icon={<WhatsAppIcon className="h-6 w-6 text-[#25D366]" />}
                title="WhatsApp support"
                text="Message us for consultation availability, fee details, location maps, and scan queries."
              />
            </Reveal>
            <Reveal delay={200}>
              <IconCard
                icon={<Video className="h-6 w-6" />}
                title="Video consultation"
                text="Ideal for second opinions, lab report discussions, and follow-ups for outstation patients."
              />
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full shadow-soft">
              <a href="tel:+917995574432">
                <Phone className="mr-2 h-4 w-4" />
                Call +91 79955 74432
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-soft"
            >
              <a
                href="https://wa.me/917995574432?text=Hello%20Dr.%20Priyanka%20Singh%27s%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5 text-white" />
                Direct WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Booking Form & Google Maps SIDE BY SIDE */}
      <section className="bg-blush py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Easy Booking & Directions"
            title="Book Online & Find Our Clinic"
            text="Submit your details below to confirm instantly via WhatsApp, or locate our clinic on Google Maps."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
            {/* Left: Booking Form */}
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-card-soft">
              <span className="eyebrow flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>Instant WhatsApp Appointment Booking</span>
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-wine">
                Consultation Request Form
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Enter your details. Clicking &ldquo;Confirm on WhatsApp&rdquo; will open WhatsApp with your pre-formatted appointment request.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm transition-colors focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm transition-colors focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm transition-colors focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
                    >
                      <option value="Fertility & IVF Planning">Fertility &amp; IVF / ICSI Planning</option>
                      <option value="Ovulation & IUI Consultation">Ovulation Induction &amp; IUI</option>
                      <option value="Pregnancy & Antenatal Care">Pregnancy &amp; Antenatal Checkup</option>
                      <option value="High-Risk Pregnancy Consultation">High-Risk Pregnancy Consultation</option>
                      <option value="PCOS & Hormonal Treatment">PCOS &amp; Hormonal Balance</option>
                      <option value="Gynecological Endoscopy / Surgery">Gynecological Laparoscopy / Surgery</option>
                      <option value="General Gynecology Consultation">General Women&apos;s Health Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                      Consultation Mode
                    </label>
                    <select
                      value={formData.consultationType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          consultationType: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm transition-colors focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
                    >
                      <option value="In-Clinic Visit (Bachupally)">In-Clinic Visit (Bachupally X Road)</option>
                      <option value="Video Consultation (Online)">Video Consultation (Online)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                    Preferred Date &amp; Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tomorrow afternoon around 4:00 PM"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDate: e.target.value })
                    }
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm transition-colors focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                    Notes / Symptoms (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe what you would like to discuss..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm transition-colors focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] text-sm font-semibold shadow-soft"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5 text-white" />
                    Confirm &amp; Send via WhatsApp
                  </Button>
                </div>

                {submitted && (
                  <div className="mt-3 rounded-xl bg-emerald-50 p-3 text-center text-xs text-emerald-800 border border-emerald-200">
                    Opening WhatsApp... If it didn&apos;t open automatically,{" "}
                    <a
                      href={`https://wa.me/917995574432?text=${encodeURIComponent(
                        `Hello Dr. Priyanka Singh's Clinic, I would like to book an appointment for ${formData.name}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold underline"
                    >
                      click here to open WhatsApp
                    </a>.
                  </div>
                )}
              </form>
            </div>

            {/* Right: Embedded Google Maps & Clinic Info */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-border shadow-card-soft h-[320px]">
                <iframe
                  title="Radiance Speciality Clinics Bachupally Location Map"
                  src="https://maps.google.com/maps?q=Radiance+Speciality+Clinics+Bachupally+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "320px", border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-2xl bg-card p-6 border border-border shadow-card-soft space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-rose shrink-0 mt-0.5" />
                  <div>
                    <b className="text-foreground text-sm">Radiance Speciality Clinics</b>
                    <p className="mt-1 text-muted-foreground leading-relaxed">
                      Bachupally X Road, Bachupally, Hyderabad, Telangana 500090
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-rose shrink-0" />
                  <p className="text-muted-foreground">
                    <b className="text-foreground">Timings:</b> Mon – Sat: 9:00 AM – 9:00 PM | Sun by Appt.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Button asChild variant="outline" size="sm" className="rounded-full text-xs">
                    <a
                      href="https://maps.google.com/?q=Radiance+Speciality+Clinics+Bachupally+Hyderabad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button asChild size="sm" className="rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] text-xs">
                    <a
                      href="https://wa.me/917995574432"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon className="mr-1.5 h-3.5 w-3.5 text-white" />
                      WhatsApp Location
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
