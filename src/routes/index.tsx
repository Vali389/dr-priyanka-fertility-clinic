import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Baby, CheckCircle2, Flower2, HeartHandshake, Microscope, Quote, ShieldCheck } from "lucide-react";

import drPriyanka from "@/assets/dr-priyanka.png.asset.json";
import fertilityLab from "@/assets/fertility-lab.jpg";
import pregnancyCare from "@/assets/pregnancy-care.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { AppointmentBand, IconCard, SectionHeading } from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dr. Priyanka Singh | Fertility & Women's Health Specialist" },
    { name: "description", content: "Compassionate fertility, pregnancy and gynecology care with Dr. Priyanka Singh in Bachupally, Hyderabad." },
    { property: "og:title", content: "Dr. Priyanka Singh | Fertility & Women's Health" },
    { property: "og:description", content: "Personalized, evidence-led care for every stage of womanhood." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }), component: HomePage,
});

const care = [
  { icon: <Microscope />, title: "Fertility Care", text: "Thoughtful evaluation and treatment from ovulation support and IUI to IVF and ICSI." },
  { icon: <Baby />, title: "Pregnancy Care", text: "Close antenatal support, high-risk monitoring and a delivery plan built around you." },
  { icon: <Flower2 />, title: "Women's Health", text: "Clear answers and lasting support for PCOS, endometriosis, fibroids and hormonal concerns." },
];

function HomePage() {
  return <main>
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="animate-rise">
          <p className="eyebrow">Compassionate care · Confident journeys</p>
          <h1 className="mt-5 font-display text-5xl leading-tight font-semibold text-wine sm:text-6xl">Expert care for every stage of <span className="text-rose">womanhood.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">Dr. Priyanka Singh brings advanced fertility, pregnancy and gynecology care together with honest guidance and individual attention.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-full"><Link to="/contact">Book an appointment<ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/services">Explore services</Link></Button></div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-foreground/75"><span className="flex gap-2"><ShieldCheck className="h-4 w-4 text-rose" />Evidence-led care</span><span className="flex gap-2"><HeartHandshake className="h-4 w-4 text-rose" />Patient-first support</span></div>
        </div>
        <div className="relative animate-soft-fade"><div className="absolute inset-10 rounded-full bg-rose-soft/70 blur-3xl" /><img src={drPriyanka.url} alt="Dr. Priyanka Singh" className="relative mx-auto aspect-4/5 w-full max-w-md rounded-lg object-cover object-top shadow-glow-soft" /></div>
      </div>
    </section>

    <section className="py-20"><div className="mx-auto max-w-7xl px-5"><SectionHeading eyebrow="Specialized care" title="One doctor, complete women’s healthcare" text="From planning a family to pregnancy and lifelong gynecological wellbeing, care stays coordinated and personal." /><div className="mt-12 grid gap-6 md:grid-cols-3">{care.map((item, i) => <Reveal key={item.title} delay={i*100}><IconCard {...item} /></Reveal>)}</div></div></section>

    <section className="bg-blush py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2"><Reveal><img src={fertilityLab} alt="Modern fertility laboratory" className="aspect-4/3 w-full rounded-lg object-cover shadow-glow-soft" /></Reveal><Reveal delay={120}><p className="eyebrow">A clearer fertility journey</p><h2 className="mt-4 font-display text-4xl font-semibold text-wine">Answers before assumptions</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Every fertility plan starts with both partners, a detailed review and only the investigations that matter. Treatment progresses from the simplest effective option.</p><ul className="mt-6 space-y-3">{["Complete couple evaluation", "Ovulation induction and IUI", "IVF and ICSI planning", "Recurrent pregnancy loss care"].map(x=><li key={x} className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-rose" />{x}</li>)}</ul><Button asChild variant="outline" className="mt-8 rounded-full"><Link to="/services">View fertility services<ArrowRight /></Link></Button></Reveal></div></section>

    <section className="py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2"><Reveal><p className="eyebrow">Meet your doctor</p><h2 className="mt-4 font-display text-4xl font-semibold text-wine">Expertise with empathy</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Dr. Priyanka is trained in reproductive medicine, obstetrics, gynecology and endoscopy. Her approach is simple: listen carefully, explain clearly and create a plan you can trust.</p><div className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6 text-center"><div><b className="font-display text-3xl text-primary">10+</b><span className="block text-xs text-muted-foreground">Years</span></div><div><b className="font-display text-3xl text-primary">5000+</b><span className="block text-xs text-muted-foreground">Patients</span></div><div><b className="font-display text-3xl text-primary">3</b><span className="block text-xs text-muted-foreground">Care areas</span></div></div><Button asChild variant="outline" className="mt-8 rounded-full"><Link to="/about">Meet Dr. Priyanka<ArrowRight /></Link></Button></Reveal><Reveal delay={120}><img src={clinicInterior} alt="Radiance Speciality Clinics interior" className="aspect-4/3 w-full rounded-lg object-cover shadow-glow-soft" /></Reveal></div></section>

    <section className="relative overflow-hidden py-20"><img src={pregnancyCare} alt="Pregnancy care" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-wine/85" /><Reveal className="relative mx-auto max-w-4xl px-5 text-center text-primary-foreground"><Quote className="mx-auto h-9 w-9 opacity-70" /><h2 className="mt-6 font-display text-4xl font-semibold">Care that feels calm, clear and truly personal.</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/75">You deserve time to ask questions, understand your options and make confident decisions about your body and family.</p></Reveal></section>
    <AppointmentBand />
  </main>;
}