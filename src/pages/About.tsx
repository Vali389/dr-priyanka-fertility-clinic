import {
  Award,
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  Stethoscope,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import drPriyanka from "@/assets/dr-priyanka.png";
import consultation from "@/assets/consultation.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import {
  AppointmentBand,
  IconCard,
  PageHero,
  SectionHeading,
} from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";

export function AboutPage() {
  const values = [
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Listen first",
      text: "Your symptoms, priorities, family background, and personal concerns shape every conversation.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Explain clearly",
      text: "Choices, diagnostics, timelines, and realistic expectations are discussed in transparent, simple language.",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Treat thoughtfully",
      text: "Every treatment plan is evidence-led, stepwise, and tailored to your individual reproductive health.",
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="About Dr. Priyanka Singh"
        title="Medicine with expertise. Care with empathy."
        text="A dedicated fertility specialist, obstetrician, and gynecologist committed to making complex reproductive health decisions feel clearer, calmer, and less overwhelming."
        image={aboutHeroBg}
        imageAlt="Dr. Priyanka Singh Fertility & Women's Health Clinic consultation suite"
      />

      {/* Story & Background */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <img
              src={drPriyanka}
              alt="Portrait of Dr. Priyanka Singh"
              className="aspect-4/5 w-full rounded-2xl object-cover object-top shadow-glow-soft border border-white/60 bg-white"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Her clinical story</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-wine">
              Committed to every woman’s journey
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Dr. Priyanka Singh combines rigorous clinical training with a deeply patient-centered
              philosophy. Having guided hundreds of couples through infertility evaluations, assisted
              reproduction (IUI, IVF, ICSI), and high-risk pregnancies, she ensures that care remains
              transparent and supportive at every juncture.
            </p>
            <div className="mt-7 space-y-3">
              {[
                "MBBS, DGO, DNB — Obstetrics & Gynecology",
                "Fellowship in Reproductive Medicine (IVF / ICSI)",
                "Advanced training in Gynecological Endoscopy & Laparoscopy",
                "10+ years clinical experience across top tertiary fertility centres",
                "Active member of ISAR (Indian Society for Assisted Reproduction) & FOGSI",
              ].map((x) => (
                <p key={x} className="flex items-center gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="h-5 w-5 text-rose shrink-0" />
                  <span>{x}</span>
                </p>
              ))}
            </div>
            <div className="mt-8 flex gap-8 border-t border-border pt-6">
              <div>
                <b className="font-display text-3xl text-primary">10+</b>
                <span className="block text-xs text-muted-foreground mt-1">Years of care</span>
              </div>
              <div>
                <b className="font-display text-3xl text-primary">5,000+</b>
                <span className="block text-xs text-muted-foreground mt-1">Patients supported</span>
              </div>
              <div>
                <b className="font-display text-3xl text-primary">95%+</b>
                <span className="block text-xs text-muted-foreground mt-1">Patient satisfaction</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Care Philosophy */}
      <section className="bg-blush py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Care philosophy"
            title="What patients can always expect"
            text="Medical guidance rooted in honesty, scientific precision, and genuine compassion."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <IconCard {...v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic & Environment */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={clinicInterior}
                alt="Welcoming clinic interior"
                className="aspect-3/4 w-full rounded-2xl object-cover shadow-card-soft"
              />
              <img
                src={consultation}
                alt="Private consultation room"
                className="mt-10 aspect-3/4 w-full rounded-2xl object-cover shadow-card-soft"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Award className="h-8 w-8 text-rose" />
            <h2 className="mt-5 font-display text-4xl font-semibold text-wine">
              A clinical space designed around comfort &amp; trust
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Consultations are unhurried, private, and thoroughly focused. At Radiance Speciality
              Clinics in Bachupally, ultrasound imaging, blood diagnostics, ovulation tracking,
              and fertility planning are integrated under one roof so you spend less time navigating
              logistics and more time receiving focused care.
            </p>
            <div className="mt-6 space-y-3 text-sm text-foreground/80">
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-rose" /> Complete privacy and confidential records
              </p>
              <p className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-rose" /> Thorough explanations of all lab reports &amp; scans
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AppointmentBand />
    </main>
  );
}
