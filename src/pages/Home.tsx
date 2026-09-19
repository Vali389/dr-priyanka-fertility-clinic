import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  Flower2,
  HeartHandshake,
  Microscope,
  Quote,
  ShieldCheck,
  Award,
  Sparkles,
  Star,
  ChevronDown,
  Stethoscope,
  Heart,
  Activity,
  Video,
  FileText,
  Home as HomeIcon,
  Shield,
  Play,
  Instagram,
  Phone,
  MapPin,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

import drPriyanka from "@/assets/dr-priyanka.png";
import fertilityLab from "@/assets/fertility-lab.jpg";
import pregnancyCare from "@/assets/pregnancy-care.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import consultation from "@/assets/consultation.jpg";
import contactHeroBg from "@/assets/contact-hero-bg.jpg";
import servicesHeroBg from "@/assets/services-hero-bg.jpg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import { AppointmentBand, IconCard, SectionHeading } from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

// Screenshot 1: 4-Pillar Feature Bar items
const fourPillars = [
  {
    icon: <Baby className="h-5 w-5 text-rose" />,
    title: "FERTILITY CARE",
    desc: "Personalized fertility evaluation and advanced treatments",
  },
  {
    icon: <HeartHandshake className="h-5 w-5 text-rose" />,
    title: "PREGNANCY CARE",
    desc: "Comprehensive antenatal and high-risk pregnancy care",
  },
  {
    icon: <Flower2 className="h-5 w-5 text-rose" />,
    title: "WOMEN'S HEALTH",
    desc: "Advanced gynecology for long-term wellbeing",
  },
  {
    icon: <Heart className="h-5 w-5 text-rose" />,
    title: "PATIENT FIRST",
    desc: "Care built around your comfort, clarity and trust",
  },
];

// Screenshot 2: Everything Around Your Treatment (6 cards)
const supportServices = [
  {
    icon: <Microscope className="h-5 w-5 text-rose" />,
    title: "Laboratory & Home Sample Collection",
    desc: "Convenient, NABL-partnered diagnostics with 24/7 home sample collection.",
  },
  {
    icon: <Video className="h-5 w-5 text-rose" />,
    title: "Video Consultation",
    desc: "Fertility, gynecology and obstetric consults from the comfort of home.",
  },
  {
    icon: <FileText className="h-5 w-5 text-rose" />,
    title: "Second Opinion",
    desc: "Expert review and honest advice for complex fertility and gynec conditions.",
  },
  {
    icon: <HomeIcon className="h-5 w-5 text-rose" />,
    title: "Home Care Services",
    desc: "Professional medical care and follow-up support delivered to your home.",
  },
  {
    icon: <Activity className="h-5 w-5 text-rose" />,
    title: "Pharmacy & Home Delivery",
    desc: "Essential medications and fertility injections delivered to your door.",
  },
  {
    icon: <Shield className="h-5 w-5 text-rose" />,
    title: "Vaccinations & Screening",
    desc: "HPV, pregnancy vaccinations, pap smear and preventive health screening.",
  },
];

// Interactive Clinical Process Steps with deep-dive info
const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    badge: "Listen & Understand",
    desc: "Unhurried 1-on-1 review of your history, lifestyle, and parenthood goals.",
    details: "A dedicated 45-minute consultation to review your cycle history, previous reports, and emotional wellbeing without rushed judgments.",
    highlights: ["Detailed medical & reproductive review", "Zero pressure or unnecessary testing", "Customized investigative roadmap"],
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    step: "02",
    title: "Targeted Diagnostics",
    badge: "Evidence-Based",
    desc: "High-resolution ultrasound & calibrated hormonal panels—only what is necessary.",
    details: "State-of-the-art 3D pelvic ultrasound, AMH reserve analysis, and partner semen parameters assessed in calibrated environments.",
    highlights: ["High-resolution follicular & pelvic scans", "NABL-accredited hormone assays", "Transparent report explanations"],
    icon: <Activity className="h-5 w-5" />,
  },
  {
    step: "03",
    title: "Stepwise Strategy",
    badge: "Personalized Protocol",
    desc: "Simplest effective treatment path, from timed ovulation to IUI or advanced IVF.",
    details: "We believe in starting with the gentlest effective path first. Advanced ART (IVF/ICSI) is planned only when clinically necessary.",
    highlights: ["Conservative options evaluated first", "Transparent costs & cycle timelines", "Tailored medication protocols"],
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    step: "04",
    title: "Continuous Support",
    badge: "Doctor-Led Care",
    desc: "Direct guidance and personal care through every scan, trigger, and milestone.",
    details: "Direct communication with Dr. Priyanka Singh. Every ultrasound and procedure is personally performed and monitored by the doctor.",
    highlights: ["Doctor performs all key scans & procedures", "Direct WhatsApp & call assistance", "Compassionate emotional reassurance"],
    icon: <HeartHandshake className="h-5 w-5" />,
  },
];

const statsRow = [
  { value: "10+", label: "Years Experience", icon: <Award className="h-5 w-5" /> },
  { value: "5,000+", label: "Patients Supported", icon: <Users className="h-5 w-5" /> },
  { value: "98%", label: "Patient Satisfaction", icon: <Star className="h-5 w-5" /> },
  { value: "3", label: "Core Specialities", icon: <Zap className="h-5 w-5" /> },
];

// What Dr. Priyanka Singh does in clinic
const drPriyankaPracticeAreas = [
  {
    id: "fertility",
    title: "Fertility & Infertility Diagnosis",
    desc: "Unhurried evaluation of ovulatory cycles, AMH reserve, hormonal balance, tubal patency, and semen analysis with transparent explanations.",
    highlights: ["Couple-based comprehensive assessment", "Zero unnecessary tests or premature IVF recommendations", "Stepwise individualized roadmap"],
    icon: <Microscope className="h-5 w-5" />,
    badge: "Fertility Focus",
  },
  {
    id: "scans",
    title: "Doctor-Led 3D Ultrasound & Follicular Scans",
    desc: "Dr. Priyanka personally performs all pelvic ultrasounds, follicular tracking, and uterine scans, providing real-time explanations.",
    highlights: ["In-clinic 3D pelvic ultrasound", "Accurate ovulation timing for natural or IUI cycles", "Same-day discussion of scan findings"],
    icon: <Activity className="h-5 w-5" />,
    badge: "Precision Scans",
  },
  {
    id: "art",
    title: "IUI, IVF & ICSI Assisted Conception",
    desc: "Personalized ovarian stimulation protocols, high-precision Intrauterine Insemination (IUI), and blastocyst culture IVF/ICSI.",
    highlights: ["Tailored stimulation according to AMH and age", "Strict ICMR-compliant laboratory standards", "Gentle daycare embryo transfer"],
    icon: <Baby className="h-5 w-5" />,
    badge: "Advanced ART",
  },
  {
    id: "pregnancy",
    title: "High-Risk Pregnancy & Antenatal Care",
    desc: "Dedicated clinical oversight for expectant mothers with gestational diabetes, hypertension, twin pregnancies, or history of recurrent losses.",
    highlights: ["Serial fetal growth & Doppler monitoring", "Proactive maternal blood sugar & BP management", "Safe delivery planning & postpartum care"],
    icon: <HeartHandshake className="h-5 w-5" />,
    badge: "Obstetrics Care",
  },
  {
    id: "endoscopy",
    title: "Gynecological Laparoscopy & Hysteroscopy",
    desc: "Minimally invasive endoscopy for ovarian cysts, PCOS ovarian drilling, endometriosis treatment, polyps, and uterine septum correction.",
    highlights: ["Daycare minimally invasive procedures", "Rapid recovery with minimal discomfort", "Preservation of ovarian reserve"],
    icon: <ShieldCheck className="h-5 w-5" />,
    badge: "Endoscopy",
  },
];

// Clinic Environment Spaces where Dr. Priyanka performs care
const clinicSpaces = [
  {
    id: "consultation",
    title: "Doctor's Private Consultation Suite",
    subtitle: "Calm, Sound-Insulated Sanctuary",
    image: consultation,
    desc: "Where Dr. Priyanka spends 45 minutes listening to your medical history, reviewing lab reports, and drawing out clear treatment timelines in complete privacy.",
    specs: ["Sound-insulated for 100% confidentiality", "Dedicated partner & spouse counseling space", "Warm, non-intimidating ambiance"],
  },
  {
    id: "ultrasound",
    title: "3D Pelvic & Fetal Ultrasound Suite",
    subtitle: "Real-Time Doctor-Operated Scans",
    image: pregnancyCare,
    desc: "Equipped with high-resolution 3D Doppler imaging. Dr. Priyanka personally conducts all follicular tracking and early pregnancy scans right here.",
    specs: ["High-resolution 3D follicle & uterine imaging", "Instant doctor review—no waiting for lab reports", "Gentle, comfortable examination suite"],
  },
  {
    id: "lab",
    title: "Advanced ART & Embryology Lab",
    subtitle: "ICMR & ART Compliant Cleanrooms",
    image: servicesHeroBg,
    desc: "State-of-the-art cleanroom environment with benchtop incubators and Computer-Assisted Semen Analysis (CASA) for optimal embryo development.",
    specs: ["ISO Class cleanroom air filtration", "Benchtop incubators mimicking natural conditions", "Strict witness systems for sample safety"],
  },
  {
    id: "lounge",
    title: "Patient Welcome & Recovery Lounge",
    subtitle: "Peaceful, Stress-Free Atmosphere",
    image: contactHeroBg,
    desc: "Designed with soothing tones, comfortable armchairs, and zero crowded waiting lines to ensure peace of mind before and after every appointment.",
    specs: ["Unhurried, scheduled appointments", "Private daycare recovery bays", "Friendly patient care coordinators"],
  },
];

// Educational Video Reels by Dr. Priyanka Singh from @radiancespecialityclinics
const drPriyankaReels = [
  {
    title: "When Should You Consider IUI vs IVF?",
    topic: "Fertility Decision",
    duration: "1:15",
    caption: "Dr. Priyanka Singh explains the clinical differences between IUI and IVF, and why jumping directly to IVF is often unnecessary.",
    image: drPriyanka,
    views: "14.2K",
  },
  {
    title: "PCOS & Pregnancy: Can You Conceive Naturally?",
    topic: "PCOS Guidance",
    duration: "0:58",
    caption: "Understanding insulin resistance, restoring regular ovulation, and why over 70% of women with PCOS achieve healthy pregnancies.",
    image: drPriyanka,
    views: "21.5K",
  },
  {
    title: "What Happens During a Follicular Scan?",
    topic: "Ultrasound Insights",
    duration: "1:32",
    caption: "Dr. Priyanka walks you through how follicular growth is tracked on ultrasound to pinpoint the exact fertile window for conception.",
    image: aboutHeroBg,
    views: "11.8K",
  },
  {
    title: "High-Risk Pregnancy: 5 Warning Signs to Watch",
    topic: "Pregnancy Care",
    duration: "1:20",
    caption: "Essential guidance for expectant mothers on monitoring blood pressure, sudden swelling, and fetal movements in every trimester.",
    image: drPriyanka,
    views: "16.4K",
  },
  {
    title: "Does Low AMH Mean You Can't Get Pregnant?",
    topic: "Hormone Myths",
    duration: "1:05",
    caption: "Dr. Priyanka dispels the common fear around low AMH levels and clarifies what AMH really indicates about your fertility.",
    image: drPriyanka,
    views: "24.7K",
  },
  {
    title: "Inside Radiance Clinics: Our Care Philosophy",
    topic: "Clinic Walkthrough",
    duration: "1:45",
    caption: "Take a personal walkthrough of Radiance Speciality Clinics in Bachupally and see how we prioritize patient comfort and dignity.",
    image: aboutHeroBg,
    views: "18.3K",
  },
];


// Clinical Treatments by Dr. Priyanka (Interactive hover animation & gradient)
const clinicalSpecialties = [
  {
    icon: <Microscope className="h-5 w-5" />,
    title: "IVF & ICSI Planning",
    desc: "Personalized ovarian stimulation, blastocyst culture, and gentle embryo transfer protocols tailored to your ovarian reserve.",
    tag: "Fertility",
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Ovulation Induction & IUI",
    desc: "High-resolution follicular tracking with timed ovulation triggers and precision intrauterine insemination (IUI).",
    tag: "Fertility",
  },
  {
    icon: <Baby className="h-5 w-5" />,
    title: "High-Risk Pregnancy Care",
    desc: "Close antenatal monitoring for gestational diabetes, preeclampsia, twin pregnancies, and previous surgical deliveries.",
    tag: "Obstetrics",
  },
  {
    icon: <Flower2 className="h-5 w-5" />,
    title: "PCOS & Metabolic Health",
    desc: "Addressing root-cause insulin resistance, restoring regular ovulatory cycles, and managing hormonal acne and hair thinning.",
    tag: "Gynecology",
  },
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Gynecological Endoscopy",
    desc: "Minimally invasive diagnostic & operative laparoscopy and hysteroscopy for fibroids, polyps, ovarian cysts, and uterine septum.",
    tag: "Surgery",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Recurrent Pregnancy Loss",
    desc: "Targeted investigations for multiple miscarriages, including thrombophilia screenings, immunological evaluation, and luteal support.",
    tag: "Specialized",
  },
];

const care = [
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Fertility & IVF",
    text: "Thoughtful evaluation and treatment from ovulation support and IUI to advanced IVF, ICSI, and fertility preservation.",
  },
  {
    icon: <Baby className="h-6 w-6" />,
    title: "Pregnancy Care",
    text: "Close antenatal support, high-risk pregnancy monitoring, and a personalized delivery plan built around you.",
  },
  {
    icon: <Flower2 className="h-6 w-6" />,
    title: "Women's Health",
    text: "Clear answers and lasting support for PCOS, endometriosis, fibroids, menstrual irregularities, and hormonal concerns.",
  },
];

const faqs = [
  {
    q: "When should a couple consider consulting a fertility specialist?",
    a: "If you have been trying to conceive for 12 months (or 6 months if the female partner is 35 or older) without success, or if you have known irregular menstrual cycles, PCOS, or endometriosis, an early evaluation helps find clear answers sooner.",
  },
  {
    q: "Do all fertility patients need IVF treatment?",
    a: "No, absolutely not. More than 60% of couples achieve conception through simpler interventions such as ovulation induction, lifestyle adjustments, timed intercourse, or Intrauterine Insemination (IUI). IVF is recommended only when simpler approaches are insufficient.",
  },
  {
    q: "Can women with PCOS conceive naturally?",
    a: "Yes. With tailored ovulation induction, balanced nutrition, insulin resistance management, and cycle tracking, many women with PCOS conceive naturally or with minimal medical assistance.",
  },
  {
    q: "What should we bring for our first appointment with Dr. Priyanka?",
    a: "Please bring any previous ultrasound reports, blood tests (AMH, thyroid, prolactin, etc.), semen analysis reports, and a note of your last menstrual period dates and any medications you are taking.",
  },
  {
    q: "Are online video consultations available for patients living outside Hyderabad?",
    a: "Yes. Dr. Priyanka conducts secure video consultations for outstation patients for report reviews, second opinions, and preliminary guidance before planning an in-clinic visit.",
  },
];

const testimonials = [
  {
    category: "Fertility & IUI",
    quote: "Parenthood after 6 years of waiting",
    text: "Dr. Priyanka's calm advice and stepwise IUI approach worked when other clinics immediately pushed for expensive procedures. We are now blessed with our baby boy.",
    author: "Ananya & Rohit S.",
    location: "Nizampet, Hyderabad",
    tag: "Verified Patient",
  },
  {
    category: "High-Risk Pregnancy",
    quote: "She kept us calm through twins pregnancy",
    text: "Managing gestational diabetes and a twin pregnancy felt overwhelming until we met Dr. Priyanka. Her availability and reassuring guidance made all the difference.",
    author: "Kavitha & Suresh R.",
    location: "Bachupally, Hyderabad",
    tag: "Verified Patient",
  },
  {
    category: "PCOS & Hormones",
    quote: "Finally understood my root cause",
    text: "Instead of just prescribing birth control pills, Dr. Priyanka explained the metabolic causes of my PCOS. My cycles are regular for the first time in 4 years.",
    author: "Sneha M.",
    location: "Miyapur, Hyderabad",
    tag: "Verified Patient",
  },
  {
    category: "IVF & ICSI",
    quote: "Transparent, ethical, zero false promises",
    text: "Pure scientific clarity and gentle encouragement. Dr. Priyanka explained our embryo quality honestly and guided our IVF cycle to a joyful positive outcome.",
    author: "Dr. Harini & Vikram P.",
    location: "Kukatpally, Hyderabad",
    tag: "Verified Patient",
  },
  {
    category: "Obstetrics & Delivery",
    quote: "Empowering natural birth experience",
    text: "From my first trimester nausea to my normal delivery at 39 weeks, Dr. Priyanka was a pillar of support. Her soothing bedside manner is unmatched.",
    author: "Divya & Karthik V.",
    location: "Pragathi Nagar, Hyderabad",
    tag: "Verified Patient",
  },
  {
    category: "Gynecology & Wellness",
    quote: "Unhurried, truly private consultations",
    text: "Never felt rushed or dismissed. Dr. Priyanka listened to every single concern and designed a clear treatment plan for my severe endometriosis pain.",
    author: "Pooja T.",
    location: "Hyderabad",
    tag: "Verified Patient",
  },
];

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);
  const [activeEnvTab, setActiveEnvTab] = useState<number>(0);
  const [activePracticeArea, setActivePracticeArea] = useState<number>(0);

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="animate-rise">
            <p className="eyebrow flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-rose" />
              <span>Compassionate Care · Confident Journeys</span>
            </p>
            <h1 className="mt-5 font-display text-5xl leading-tight font-semibold text-wine sm:text-6xl">
              Expert care for every stage of{" "}
              <span className="text-rose italic">womanhood.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Dr. Priyanka Singh brings advanced fertility, pregnancy, and gynecology care together
              with honest guidance, modern science, and individual attention.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-soft">
                <Link to="/contact">
                  Book an appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-foreground/75">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-rose" />
                Evidence-led clinical protocols
              </span>
              <span className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-rose" />
                Patient-first gentle support
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-rose" />
                10+ Years Experience
              </span>
            </div>
          </div>

          <div className="relative animate-soft-fade">
            <div className="absolute inset-10 rounded-full bg-rose-soft/70 blur-3xl" />
            <img
              src={drPriyanka}
              alt="Dr. Priyanka Singh - Fertility & Women's Health Specialist"
              className="relative mx-auto aspect-4/5 w-full max-w-md rounded-2xl object-cover object-top shadow-glow-soft border border-white/60 bg-white"
            />
          </div>
        </div>
      </section>

      {/* 2. ATTACHED SECTION 1: 4-Pillar Feature Bar (from Screenshot 1) */}
      <section className="border-y border-border/70 bg-[#fff5f7] py-6">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-pink-200/80">
            {fourPillars.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 px-3 lg:px-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-pink-100">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Clinical Practice: Comprehensive Treatments by Dr. Priyanka (With Hover Gradient & Animation!) */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Clinical Practice"
            title="Comprehensive Treatments by Dr. Priyanka"
            text="From initial diagnostics to advanced reproductive procedures, all care is personally performed and managed by Dr. Priyanka Singh."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalSpecialties.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 60}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all duration-400 ease-out hover:-translate-y-2 hover:border-pink-300 hover:bg-gradient-to-br hover:from-white hover:via-[#fff0f4] hover:to-[#fde4ec] hover:shadow-glow-soft flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-rose transition-all duration-300 group-hover:scale-110 group-hover:bg-rose group-hover:text-white group-hover:shadow-md">
                        {item.icon}
                      </span>
                      <span className="rounded-full bg-pink-50 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-[#9d174d] border border-pink-200 group-hover:bg-pink-100/80 transition-colors">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-wine group-hover:text-rose transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground group-hover:text-[#6e1e35] transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 group-hover:border-pink-200/80 transition-colors">
                    <Link
                      to="/services"
                      className="inline-flex items-center text-xs font-semibold text-rose group-hover:text-wine transition-colors"
                    >
                      <span>Explore this treatment</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ATTACHED SECTION 2: Everything Around Your Treatment (from Screenshot 2) */}
      <section className="py-20 bg-blush/40 border-y border-border/70">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-wine">
              Everything Around Your Treatment
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Diagnostics, pharmacy, home care and video consultation — so that treatment fits around your life, not the other way round.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((service, idx) => (
              <Reveal key={service.title} delay={idx * 70}>
                <div className="h-full rounded-2xl border border-pink-100/90 bg-white p-7 shadow-sm hover:shadow-card-soft hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-rose">
                      {service.icon}
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-wine leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Specialized Care 3-Cards */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Specialized care"
            title="One doctor, complete women’s healthcare"
            text="From planning a family to pregnancy and lifelong gynecological wellbeing, care stays coordinated and personal."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {care.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <IconCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Fertility Journey Section */}
      <section className="bg-blush py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <img
              src={fertilityLab}
              alt="Modern fertility laboratory"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-glow-soft"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">A clearer fertility journey</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-wine">
              Answers before assumptions
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Every fertility plan starts with both partners, a detailed review, and only the
              investigations that truly matter. Treatment progresses from the simplest effective option.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Complete couple fertility evaluation & semen analysis",
                "Ovulation induction, follicular monitoring, and IUI",
                "Advanced IVF, ICSI, and blastocyst culture planning",
                "Recurrent pregnancy loss & implantation failure care",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="h-5 w-5 text-rose shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link to="/services">
                View fertility services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 7. DR. PRIYANKA SINGH'S CLINICAL PRACTICE & ENVIRONMENT (Split Screen) */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Clinical Practice & Environment"
            title="Hands-On Expertise in a Calm, Modern Setting"
            text="Dr. Priyanka Singh personally oversees every critical phase of your care—from 1-on-1 consultations and ultrasound scans to assisted reproduction procedures."
          />

          {/* Split Screen: Left (What Dr. Priyanka Does) | Right (Clinical Environment Showcase) */}
          <div className="mt-14 grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: What Doctor Does (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-rose">
                  What Dr. Priyanka Personally Conducts
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-wine">
                  Comprehensive Clinical Services
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Unlike large commercial chains where patients are passed between duty doctors, Dr. Priyanka Singh conducts your evaluations and scans personally.
                </p>
              </div>

              <div className="space-y-3">
                {drPriyankaPracticeAreas.map((area, idx) => {
                  const isSelected = activePracticeArea === idx;
                  return (
                    <div
                      key={area.id}
                      onClick={() => setActivePracticeArea(idx)}
                      className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${
                        isSelected
                          ? "border-rose bg-gradient-to-r from-white via-[#fff1f4] to-[#fce7f3]/50 shadow-glow-soft ring-1 ring-rose/30"
                          : "border-border bg-card hover:border-pink-200 hover:shadow-card-soft"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                              isSelected
                                ? "bg-rose text-white shadow-sm"
                                : "bg-blush text-rose"
                            }`}
                          >
                            {area.icon}
                          </div>
                          <div>
                            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-rose">
                              {area.badge}
                            </span>
                            <h4 className="font-display text-base font-bold text-wine">
                              {area.title}
                            </h4>
                          </div>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-rose transition-transform duration-300 ${
                            isSelected ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {isSelected && (
                        <div className="mt-4 pt-3 border-t border-pink-200/60 text-xs leading-relaxed text-muted-foreground animate-fadeIn">
                          <p className="text-foreground/90">{area.desc}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {area.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-medium text-wine border border-pink-200/80 shadow-2xs"
                              >
                                <CheckCircle2 className="h-3 w-3 text-rose shrink-0" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Button asChild size="lg" className="rounded-full shadow-soft">
                  <Link to="/contact">
                    Book In-Clinic Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href="tel:+917995574432"
                  className="text-xs font-semibold text-rose hover:underline"
                >
                  Direct Call: +91 79955 74432
                </a>
              </div>
            </div>

            {/* Right Column: Clinical Environment Showcase (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl border border-pink-200/80 bg-white p-6 shadow-card-soft space-y-5">
              <div>
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-rose">
                  Clinic Environment &amp; Facilities
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-wine">
                  {clinicSpaces[activeEnvTab].title}
                </h3>
                <p className="text-xs text-rose font-medium mt-0.5">
                  {clinicSpaces[activeEnvTab].subtitle}
                </p>
              </div>

              {/* Space Selector Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {clinicSpaces.map((space, idx) => (
                  <button
                    key={space.id}
                    type="button"
                    onClick={() => setActiveEnvTab(idx)}
                    className={`rounded-xl px-3 py-2 text-[0.72rem] font-bold transition-all text-left ${
                      activeEnvTab === idx
                        ? "bg-rose text-white shadow-sm"
                        : "bg-blush/60 text-wine hover:bg-blush"
                    }`}
                  >
                    {space.title.split(" ")[0]} {space.title.split(" ")[1]}
                  </button>
                ))}
              </div>

              {/* Active Space Image with Badge */}
              <div className="relative overflow-hidden rounded-2xl aspect-4/3 shadow-inner">
                <img
                  src={clinicSpaces[activeEnvTab].image}
                  alt={clinicSpaces[activeEnvTab].title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[0.68rem] font-bold text-wine shadow-sm">
                  {clinicSpaces[activeEnvTab].specs[0]}
                </span>
              </div>

              {/* Active Space Details */}
              <p className="text-xs leading-relaxed text-muted-foreground">
                {clinicSpaces[activeEnvTab].desc}
              </p>

              <div className="space-y-2 border-t border-border/60 pt-3 text-xs">
                {clinicSpaces[activeEnvTab].specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-rose shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM REELS & PATIENT EDUCATION (@radiancespecialityclinics) */}
      <section className="py-20 bg-gradient-to-b from-[#fff8fa] to-background border-t border-border/80">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow flex items-center gap-1.5">
                <Instagram className="h-4 w-4 text-rose" />
                <span>@radiancespecialityclinics</span>
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-wine">
                Watch Dr. Priyanka Singh on Instagram
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
                Clear medical answers, myth-busting, and clinical guidance directly from Dr. Priyanka Singh on our official Instagram channel.
              </p>
            </div>

            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-95 shadow-md text-xs font-semibold shrink-0"
            >
              <a
                href="https://www.instagram.com/radiancespecialityclinics/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="mr-1.5 h-4 w-4 text-white" />
                Follow @radiancespecialityclinics
              </a>
            </Button>
          </div>

          {/* 6 Video Reel Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {drPriyankaReels.map((reel, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/radiancespecialityclinics/"
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-2xl border border-pink-200/80 bg-card shadow-card-soft hover:shadow-glow-soft hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Reel Video Thumbnail with Play Button Overlay */}
                <div className="relative aspect-[4/5] overflow-hidden bg-pink-50">
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[0.65rem] font-bold text-white flex items-center gap-1">
                      <Instagram className="h-3 w-3 text-rose-soft" />
                      Reel
                    </span>
                    <span className="rounded-full bg-rose px-2.5 py-0.5 text-[0.65rem] font-bold text-white">
                      {reel.topic}
                    </span>
                  </div>

                  {/* Center Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-wine shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose group-hover:text-white">
                      <Play className="h-5 w-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Duration & Views */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[0.68rem] text-white/90 font-medium">
                    <span>⏱ {reel.duration}</span>
                    <span>👁 {reel.views} views</span>
                  </div>
                </div>

                {/* Reel Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-wine group-hover:text-rose transition-colors leading-snug">
                      {reel.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {reel.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                    <span className="text-[0.7rem] font-semibold text-wine">
                      Dr. Priyanka Singh
                    </span>
                    <span className="text-[0.7rem] font-bold text-rose flex items-center gap-1 group-hover:underline">
                      Watch Reel ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Meet Doctor Section */}
      <section className="py-20 bg-blush/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Meet your doctor</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-wine">
              Expertise with empathy
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Dr. Priyanka Singh is trained in reproductive medicine, obstetrics, gynecology, and
              endoscopy. Her approach is simple: listen carefully, explain clearly, and create a
              plan you can trust without unnecessary tests or procedures.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6 text-center">
              <div>
                <b className="font-display text-3xl text-primary">10+</b>
                <span className="block text-xs text-muted-foreground mt-1">Years Experience</span>
              </div>
              <div>
                <b className="font-display text-3xl text-primary">5,000+</b>
                <span className="block text-xs text-muted-foreground mt-1">Patients Supported</span>
              </div>
              <div>
                <b className="font-display text-3xl text-primary">3</b>
                <span className="block text-xs text-muted-foreground mt-1">Core Specialities</span>
              </div>
            </div>
            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link to="/about">
                Meet Dr. Priyanka
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={clinicInterior}
              alt="Dr. Priyanka Singh Fertility & Women's Health Clinic Interior"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-glow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* 9. Quote Banner */}
      <section className="relative overflow-hidden py-20">
        <img
          src={pregnancyCare}
          alt="Pregnancy care"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine/75 via-wine/55 to-wine/75" />
        <Reveal className="relative mx-auto max-w-4xl px-5 text-center text-primary-foreground">
          <Quote className="mx-auto h-9 w-9 opacity-70" />
          <h2 className="mt-6 font-display text-4xl font-semibold">
            Care that feels calm, clear, and truly personal.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/75">
            You deserve time to ask questions, understand your options, and make confident
            decisions about your body and family.
          </p>
        </Reveal>
      </section>

      {/* 10. Interactive FAQ Accordion */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-5">
          <SectionHeading
            eyebrow="Common Questions"
            title="Answers to questions patients ask often"
            text="Clear information to help you feel informed and reassured before your visit."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-semibold text-wine hover:text-rose transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-rose shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground border-t border-border/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. OUR CLINICAL PROCESS: Interactive, Highly Attractive Step-by-Step Care Journey */}
      <section className="py-20 bg-gradient-to-b from-[#fff8fa] via-[#fdf2f4] to-[#fff8fa] border-t border-border/80 relative overflow-hidden">
        {/* Subtle background glow accents */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-rose/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow flex items-center justify-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-rose" />
              <span>Our Clinical Process</span>
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-wine">
              Your Step-by-Step Care Journey
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Click any step below to explore what happens at each stage of your treatment with Dr. Priyanka Singh.
            </p>
          </div>

          {/* 4 Interactive Process Cards with Directional Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 items-stretch">
            {processSteps.map((step, idx) => {
              const isActive = activeProcessStep === idx;
              return (
                <div key={step.step} className="relative flex flex-col">
                  <button
                    type="button"
                    onClick={() => setActiveProcessStep(idx)}
                    className={`w-full text-left h-full rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between border ${
                      isActive
                        ? "border-rose bg-gradient-to-b from-white via-[#fff0f4] to-[#fce7f3]/60 shadow-glow-soft ring-2 ring-rose/30 -translate-y-1.5"
                        : "border-pink-200/80 bg-white hover:border-pink-300 hover:shadow-card-soft hover:-translate-y-0.5"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                            isActive
                              ? "bg-rose text-white shadow-sm"
                              : "bg-blush text-wine"
                          }`}
                        >
                          {step.step}
                        </span>
                        <span
                          className={`text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full transition-colors ${
                            isActive
                              ? "bg-rose/15 text-wine font-bold"
                              : "bg-pink-100/60 text-rose"
                          }`}
                        >
                          {step.badge}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-2.5">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                            isActive
                              ? "bg-rose text-white shadow-sm"
                              : "bg-blush text-rose"
                          }`}
                        >
                          {step.icon}
                        </div>
                        <h3 className="font-display text-base font-bold text-wine">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-[0.7rem]">
                      <span className={`font-semibold ${isActive ? "text-rose" : "text-muted-foreground"}`}>
                        {isActive ? "● Currently Viewing" : "Click to view details"}
                      </span>
                      <ArrowRight className={`h-3.5 w-3.5 transition-transform ${isActive ? "text-rose translate-x-1" : "text-muted-foreground/60"}`} />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Dynamic Interactive Deep-Dive Details Panel */}
          <div className="mt-8 rounded-2xl border border-pink-200/90 bg-white/95 p-6 sm:p-8 shadow-card-soft transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-rose text-white px-2.5 py-0.5 text-xs font-bold">
                    Step {processSteps[activeProcessStep].step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose">
                    {processSteps[activeProcessStep].badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-wine">
                  {processSteps[activeProcessStep].title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {processSteps[activeProcessStep].details}
                </p>

                {/* Key Highlights */}
                <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
                  {processSteps[activeProcessStep].highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full bg-blush/80 px-3 py-1 text-xs font-medium text-wine border border-pink-200/60"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-rose shrink-0" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0">
                <Button asChild className="rounded-full shadow-soft">
                  <Link to="/contact">
                    Book Consultation
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={activeProcessStep === 0}
                    onClick={() => setActiveProcessStep((prev) => Math.max(0, prev - 1))}
                    className="flex-1 rounded-full text-xs"
                  >
                    ← Previous
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={activeProcessStep === processSteps.length - 1}
                    onClick={() => setActiveProcessStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                    className="flex-1 rounded-full text-xs text-rose border-rose/30 hover:bg-rose/5"
                  >
                    Next Step →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. AUTOSCROLL PATIENT STORIES MARQUEE (Placed right before final appointment band!) */}
      <section className="overflow-hidden py-20 bg-blush/30">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Heartwarming Journeys"
            title="Stories of hope &amp; new beginnings"
            text="Real experiences from couples and mothers who entrusted their fertility and pregnancy care to Dr. Priyanka Singh."
          />
        </div>

        <div className="mt-12 relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-blush/30 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-blush/30 to-transparent" />

          <div className="flex w-max gap-6 animate-marquee py-3 px-6 hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <article
                key={idx}
                className="w-80 sm:w-96 shrink-0 rounded-2xl border border-pink-200/90 bg-gradient-to-br from-[#fff0f5] via-[#fce7f3] to-[#fbcfe8]/70 p-6 shadow-card-soft transition-all duration-300 hover:shadow-glow-soft hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-pink-200/70 pb-3">
                    <span className="rounded-full bg-pink-100/90 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-[#9d174d] border border-pink-300/50">
                      {t.category}
                    </span>
                    <div className="flex items-center gap-1 text-rose">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#e11d48] text-[#e11d48]" />
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-wine leading-snug">
                    “{t.quote}”
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-[#701a35]">
                    {t.text}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-pink-200/70 pt-3">
                  <div>
                    <p className="text-xs font-bold text-wine">{t.author}</p>
                    <p className="text-[0.68rem] text-rose">{t.location}</p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-pink-100 px-2 py-0.5 text-[0.65rem] font-medium text-[#9d174d] border border-pink-300/50">
                    <CheckCircle2 className="h-3 w-3 text-[#e11d48]" />
                    {t.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Hover over any story to pause and read.{" "}
            <Link to="/contact" className="font-semibold text-rose hover:underline">
              Schedule your confidential consultation →
            </Link>
          </p>
        </div>
      </section>

      {/* 13. Appointment Band */}
      <AppointmentBand />
    </main>
  );
}
