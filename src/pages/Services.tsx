import {
  Baby,
  CheckCircle2,
  Flower2,
  HeartPulse,
  Microscope,
  Shield,
  Video,
  Check,
  HelpCircle,
  Clock,
  Sparkles,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesHeroBg from "@/assets/services-hero-bg.jpg";
import fertilityLab from "@/assets/fertility-lab.jpg";
import pregnancyCare from "@/assets/pregnancy-care.jpg";
import consultation from "@/assets/consultation.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import {
  AppointmentBand,
  IconCard,
  PageHero,
  SectionHeading,
} from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";

const groups = [
  {
    image: fertilityLab,
    label: "Fertility & Reproductive Medicine",
    title: "A considered, stepwise path to parenthood",
    text: "Start with a complete evaluation of both partners, then move through treatment at a pace that fits your diagnosis and personal comfort.",
    items: [
      "Complete couple fertility evaluation & semen analysis",
      "Ovulation induction & timed intercourse monitoring",
      "Intrauterine Insemination (IUI)",
      "In Vitro Fertilization (IVF) & ICSI guidance",
      "Recurrent pregnancy loss & implantation failure care",
      "Egg freezing & fertility preservation options",
    ],
  },
  {
    image: pregnancyCare,
    label: "Pregnancy & Obstetrics",
    title: "Confident, continuous care through every trimester",
    text: "One connected plan from pre-conception through delivery and postnatal recovery, including attentive high-risk monitoring.",
    items: [
      "Pre-conception counseling and early viability scans",
      "Antenatal checkups, anomaly scans, and genetic screenings",
      "High-risk pregnancy management (Gestational Diabetes, Hypertension)",
      "Multiple gestation (twins) specialized monitoring",
      "Normal delivery and planned Caesarean birth care",
      "Postnatal recovery, emotional wellbeing, and lactation support",
    ],
  },
  {
    image: consultation,
    label: "Gynecology & Women’s Wellness",
    title: "Long-term health, not just temporary symptom relief",
    text: "Understand the root cause of symptoms and build a sustainable plan combining lifestyle, medical, and surgical care when needed.",
    items: [
      "PCOS & PCOD metabolic and menstrual management",
      "Endometriosis, adenomyosis, and chronic pelvic pain",
      "Uterine fibroids and ovarian cysts treatment",
      "Irregular, heavy, or painful periods evaluation",
      "Adolescent gynecology and perimenopause transition support",
      "Minimally invasive diagnostic laparoscopy and hysteroscopy",
    ],
  },
];

const comparisonTable = [
  {
    feature: "Primary Indication",
    iui: "Mild male factor, unexplained infertility, cervical factor",
    ivf: "Tubal blockage, severe endometriosis, failed IUI cycles",
    icsi: "Very low sperm count/motility, previous fertilization failure",
  },
  {
    feature: "Procedure Complexity",
    iui: "Simple, outpatient, natural or mild stimulation",
    ivf: "Ovarian stimulation, egg retrieval & lab fertilization",
    icsi: "Single sperm injected directly into each mature egg",
  },
  {
    feature: "Invasiveness",
    iui: "Non-invasive (similar to a routine Pap smear)",
    ivf: "Minor daycare procedure under mild sedation",
    icsi: "Same daycare procedure as IVF with specialized micro-tooling",
  },
  {
    feature: "Best Suited For",
    iui: "Younger couples, open fallopian tubes, good sperm count",
    ivf: "Couples needing maximum embryo selection and blastocyst transfer",
    icsi: "Severe male factor or advanced maternal age",
  },
];

const diagnostics = [
  {
    title: "Advanced 3D Pelvic Ultrasound",
    desc: "Detailed evaluation of uterine anatomy, endometrial thickness, and antral follicle count (AFC) in real time.",
  },
  {
    title: "Comprehensive Hormonal Profiling",
    desc: "Precise measurement of AMH (ovarian reserve), FSH, LH, Estradiol, Prolactin, and Thyroid profiles.",
  },
  {
    title: "Computer-Assisted Semen Analysis (CASA)",
    desc: "Accurate computer-guided evaluation of sperm count, motility, vitality, and strict Kruger morphology.",
  },
  {
    title: "Tubal Patency Testing (HSG / HyCoSy)",
    desc: "Gentle assessment of fallopian tube openness to determine whether natural conception or IUI is suitable.",
  },
];

export function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Clinical Services"
        title="Complete care, thoughtfully connected."
        text="Specialist support across fertility, pregnancy, and women’s health, with transparent choices and medical guidance at every step."
        image={servicesHeroBg}
        imageAlt="Advanced reproductive laboratory and fertility clinic"
      />

      {/* 3 Core Pillar Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Our clinical expertise"
            title="Care designed for every life stage"
            text="Each treatment plan is built around your individual biology—never a standard one-size-fits-all protocol."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Microscope className="h-6 w-6" />,
                title: "Fertility & IVF",
                text: "Stepwise evaluation, IUI, IVF, ICSI, and fertility preservation guidance.",
              },
              {
                icon: <Baby className="h-6 w-6" />,
                title: "Pregnancy & Birth",
                text: "Antenatal care, high-risk pregnancy monitoring, delivery, and postnatal support.",
              },
              {
                icon: <Flower2 className="h-6 w-6" />,
                title: "Gynecology & PCOS",
                text: "PCOS, endometriosis, menstrual disorders, and minimally invasive endoscopy.",
              },
            ].map((x, i) => (
              <Reveal key={x.title} delay={i * 100}>
                <IconCard {...x} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Groups */}
      {groups.map((g, i) => (
        <section
          key={g.label}
          className={i % 2 === 1 ? "bg-blush py-20" : "py-20"}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={g.image}
                alt={g.label}
                className="aspect-4/3 w-full rounded-2xl object-cover shadow-glow-soft"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">{g.label}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-wine">
                {g.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {g.text}
              </p>
              <ul className="mt-7 grid gap-3">
                {g.items.map((x) => (
                  <li
                    key={x}
                    className="flex items-center gap-3 text-sm text-foreground/85"
                  >
                    <CheckCircle2 className="h-5 w-5 text-rose shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      {/* NEW SECTION: Treatment Comparison Table (IUI vs IVF vs ICSI) */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Treatment Clarity"
            title="Understanding Your Fertility Options"
            text="Every option has specific medical indications. Here is how IUI, IVF, and ICSI compare."
          />

          <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-card-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-wine text-white">
                <tr>
                  <th className="p-5 font-semibold">Aspect</th>
                  <th className="p-5 font-semibold">IUI (Intrauterine Insemination)</th>
                  <th className="p-5 font-semibold">IVF (In Vitro Fertilization)</th>
                  <th className="p-5 font-semibold">ICSI (Intracytoplasmic Sperm Injection)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-blush/30" : ""}>
                    <td className="p-5 font-semibold text-wine whitespace-nowrap">{row.feature}</td>
                    <td className="p-5 text-muted-foreground leading-relaxed">{row.iui}</td>
                    <td className="p-5 text-muted-foreground leading-relaxed">{row.ivf}</td>
                    <td className="p-5 text-muted-foreground leading-relaxed">{row.icsi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Diagnostic & Investigation Suite */}
      <section className="bg-blush py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Precision Diagnostics"
            title="Comprehensive Investigation Suite"
            text="Accurate diagnosis is the cornerstone of successful treatment. We conduct thorough, calibrated evaluations."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diagnostics.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft hover:shadow-glow-soft transition-all duration-300">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-rose font-bold text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-wine">
                    {d.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Consultation Support */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Beyond the consultation"
            title="Comprehensive support around your treatment"
            text="Designed to make your appointments efficient, transparent, and stress-free."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Video className="h-6 w-6" />,
                title: "Video consultations",
                text: "Easy report reviews, second opinions, and follow-ups from the comfort of home.",
              },
              {
                icon: <HeartPulse className="h-6 w-6" />,
                title: "Coordinated diagnostics",
                text: "Timely ultrasound scans, hormonal assays, and semen tests scheduled smoothly.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Preventive screenings",
                text: "Pap smears, HPV screening, breast examinations, and cervical cancer vaccinations.",
              },
            ].map((x, i) => (
              <Reveal key={x.title} delay={i * 100}>
                <IconCard {...x} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AppointmentBand
        title="Not sure which care option you need?"
        text="Book an initial consultation. Dr. Priyanka will listen, review your clinical history, and guide you directly to the right next step."
      />
    </main>
  );
}
