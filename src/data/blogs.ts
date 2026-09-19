import fertilityLab from "@/assets/fertility-lab.jpg";
import pregnancyCare from "@/assets/pregnancy-care.jpg";
import consultation from "@/assets/consultation.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bullets?: string[];
    }[];
    clinicalTakeaway: string;
    faqs: {
      q: string;
      a: string;
    }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "when-to-consult-fertility-specialist",
    category: "Fertility & IVF",
    title: "When should you consult a fertility specialist?",
    summary:
      "Understand age timelines, warning signs, ovulation symptoms, and what to expect from a calm, stepwise first assessment.",
    readTime: "4 min read",
    date: "September 2026",
    image: fertilityLab,
    content: {
      intro:
        "The decision to consult a fertility specialist often comes after months of private worry, tracking apps, and mixed advice from family and internet searches. Knowing when to take the first step can save emotional energy and preserve precious reproductive time.",
      sections: [
        {
          heading: "1. The General Rule of Thumb: Age and Timing",
          body: "For couples where the female partner is under 35 years of age, medical guidelines recommend consulting a specialist after 12 months of regular, unprotected intercourse without conceiving. However, if the female partner is 35 or older, that evaluation window narrows to 6 months.",
          bullets: [
            "Under 35 years: Seek evaluation after 12 months of trying.",
            "35 to 39 years: Seek evaluation after 6 months of trying.",
            "40 years and older: Immediate evaluation is recommended to understand ovarian reserve.",
          ],
        },
        {
          heading: "2. Warning Signs That Warrant Earlier Consultation",
          body: "You do not need to wait a full year if there are existing red flags in either partner's medical history. Timely investigations prevent months of unnecessary anxiety.",
          bullets: [
            "Irregular, very light, or absent menstrual cycles (suggesting irregular ovulation or PCOS).",
            "Severe pelvic pain, painful periods, or pain during intercourse (potential signs of endometriosis).",
            "History of pelvic inflammatory disease (PID), past abdominal surgeries, or ectopic pregnancy.",
            "Known male factors: previous testicular injury, mumps orchitis, or difficulties with ejaculation.",
          ],
        },
        {
          heading: "3. What to Expect During Your First Visit",
          body: "A common fear among couples is that walking into a fertility clinic means you will be rushed into IVF. At our clinic, that is never the case. The first visit is dedicated to listening, reviewing both partners' medical records, and scheduling only foundational tests (pelvic ultrasound, hormonal evaluation, and semen analysis). Over 60% of couples conceive with simpler interventions.",
        },
      ],
      clinicalTakeaway:
        "Fertility evaluation is not an admission of failure; it is simply a diagnostic step to understand your biology. The earlier you know your numbers, the more choices you have.",
      faqs: [
        {
          q: "Should both husband and wife attend the first consultation?",
          a: "Yes, strongly recommended. Conception involves both partners equally, and male factor issues account for roughly 40-50% of all fertility difficulties.",
        },
        {
          q: "Will we need to do all tests on day one?",
          a: "No. Only preliminary blood work or pelvic ultrasound depending on the day of your cycle. We plan tests systematically.",
        },
      ],
    },
  },
  {
    slug: "first-trimester-calm-guide",
    category: "Pregnancy Care",
    title: "A calm, step-by-step guide to your first trimester",
    summary:
      "The essential scans, nutrition guidelines, blood tests, and everyday bodily changes that matter in the first 12 weeks.",
    readTime: "5 min read",
    date: "August 2026",
    image: pregnancyCare,
    content: {
      intro:
        "Seeing that positive pregnancy test brings an overwhelming rush of joy and questions. The first 12 weeks are a time of rapid embryonic development and hormonal adjustments for your body.",
      sections: [
        {
          heading: "1. The Essential First-Trimester Milestones",
          body: "During the first trimester, medical care centers on confirming intrauterine viability, establishing your accurate due date, and screening for maternal wellbeing.",
          bullets: [
            "Viability & Dating Ultrasound (6–8 weeks): Confirms the gestational sac inside the uterus and detects the fetal heartbeat.",
            "Baseline Maternal Blood Tests: Blood group, Rh factor, Complete Blood Count, Thyroid profile, Blood sugar, and infection screenings.",
            "NT Scan & Dual Marker (11–13.6 weeks): Non-invasive screening evaluating chromosomal conditions such as Down syndrome.",
          ],
        },
        {
          heading: "2. Managing Morning Sickness and Fatigue",
          body: "Nausea and exhaustion are completely natural responses to soaring hCG and progesterone levels. Small, frequent meals rich in complex carbohydrates and staying hydrated with small sips of water or electrolyte fluids help ease symptoms significantly.",
        },
        {
          heading: "3. Medications and Supplements",
          body: "Folic acid (5mg daily) is essential before and throughout the first trimester to support neural tube development. Always consult your obstetrician before taking any over-the-counter painkillers or herbal supplements.",
        },
      ],
      clinicalTakeaway:
        "Every pregnancy progresses at its own pace. Trust your body, attend your scheduled scans, and reach out to your care team whenever you feel uncertain.",
      faqs: [
        {
          q: "Is light spotting normal in the first trimester?",
          a: "Light brownish spotting or implantation spotting can happen, but you should always inform your obstetrician immediately to rule out subchorionic hematoma or ectopic pregnancy.",
        },
        {
          q: "Can I travel during the first 12 weeks?",
          a: "Routine travel is generally safe unless you have a history of recurrent miscarriage, bleeding, or have been advised bed rest by your doctor.",
        },
      ],
    },
  },
  {
    slug: "pcos-care-beyond-prescription",
    category: "PCOS & Hormones",
    title: "PCOS care beyond just hormonal prescriptions",
    summary:
      "How sleep, metabolic nutrition, insulin resistance, and thoughtful medical care work together over time.",
    readTime: "6 min read",
    date: "July 2026",
    image: consultation,
    content: {
      intro:
        "Polycystic Ovary Syndrome (PCOS) affects 1 in 5 Indian women of reproductive age. For too long, the standard advice has simply been 'take this pill and lose weight.' In reality, PCOS is a metabolic and endocrine condition that requires understanding, not shame.",
      sections: [
        {
          heading: "1. Unpacking the Root Cause: Insulin Resistance",
          body: "In up to 70% of women with PCOS, the body's cells become resistant to insulin, prompting the pancreas to produce higher levels of insulin. Elevated insulin stimulates the ovaries to produce excess androgens (male hormones), which inhibits regular ovulation.",
          bullets: [
            "Insulin spikes lead to facial hair growth, acne, and central weight gain.",
            "Irregular ovulation leads to missed or delayed periods.",
            "Blood sugar crashes cause intense sugar and carbohydrate cravings.",
          ],
        },
        {
          heading: "2. Sustainable Nutrition Over Extreme Diets",
          body: "Crash diets worsen cortisol (stress hormone) levels and trigger further hormonal dysregulation. Instead, prioritize balanced meals with protein, healthy fats, fiber, and low glycemic-index carbohydrates.",
        },
        {
          heading: "3. Clinical Options for Fertility and Cycle Regulation",
          body: "When pregnancy is the goal, simple oral ovulation medications like Letrozole or Clomiphene, combined with inositol supplementation and follicular monitoring, achieve excellent conception rates without aggressive interventions.",
        },
      ],
      clinicalTakeaway:
        "PCOS is manageable. With tailored hormonal balancing and consistent metabolic care, you can have regular cycles, glowing skin, and a healthy pregnancy.",
      faqs: [
        {
          q: "Does PCOS mean I will never get pregnant?",
          a: "No. PCOS is an ovulatory disorder, not permanent sterility. Once ovulation is restored through lifestyle or gentle medication, your chances of conceiving are very high.",
        },
        {
          q: "Are cysts in PCOS dangerous?",
          a: "The 'cysts' in PCOS are actually small, harmless immature follicles that stopped growing before ovulation. They are not tumors or cancer.",
        },
      ],
    },
  },
  {
    slug: "preparing-gynecology-visit",
    category: "Women's Health",
    title: "Preparing for your gynecology visit in Hyderabad",
    summary:
      "What to note down about your cycles, what medical history to bring, and the questions worth asking your doctor.",
    readTime: "4 min read",
    date: "June 2026",
    image: clinicInterior,
    content: {
      intro:
        "Visiting a gynecologist can feel daunting, especially if it is your first time or if you have been dealing with sensitive symptoms. Preparing a few key details in advance ensures your consultation is relaxed, comprehensive, and productive.",
      sections: [
        {
          heading: "1. Track Your Menstrual Cycle Dates",
          body: "Note down the first day of your last 3 to 6 menstrual periods, the number of days of bleeding, flow heaviness (number of pads changed per day), and whether you experience spotting between periods.",
        },
        {
          heading: "2. Gather Past Medical Records",
          body: "Bring all previous pelvic ultrasound reports, blood tests (thyroid, hemoglobin, sugar), Pap smear results, and a list of any vitamins, supplements, or prescription medicines you are currently taking.",
        },
        {
          heading: "3. Write Down Your Questions",
          body: "It is easy to forget important questions once you sit down in the doctor's office. Writing down 3 to 4 top priorities helps your doctor address what matters most to your daily comfort.",
        },
      ],
      clinicalTakeaway:
        "Your consultation is your safe, confidential space. No question is too small or embarrassing to ask your doctor.",
      faqs: [
        {
          q: "Can I see a gynecologist while on my period?",
          a: "Yes. Unless you are specifically scheduled for a Pap smear, period bleeding does not prevent a thorough consultation and assessment.",
        },
        {
          q: "Is everything I discuss confidential?",
          a: "Yes. All clinical discussions and medical records are strictly confidential and protected by medical ethics.",
        },
      ],
    },
  },
];
