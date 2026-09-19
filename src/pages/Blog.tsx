import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

import { blogPosts } from "@/data/blogs";
import clinicInterior from "@/assets/clinic-interior.jpg";
import {
  AppointmentBand,
  PageHero,
  SectionHeading,
} from "@/components/PageSections";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Patient Health Journal"
        title="Clear medical answers for informed choices."
        text="Doctor-led reading on fertility, pregnancy, and women’s health—written to help you understand your body, treatments, and what comes next."
        image={clinicInterior}
        imageAlt="Peaceful women's health clinic"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Latest insights"
            title="Read at your own pace"
            text="Practical, evidence-led medical guidance to help you prepare for conversations with your doctor."
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {blogPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all duration-300 hover:shadow-glow-soft hover:-translate-y-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="overflow-hidden">
                      <Link to={`/blog/${p.slug}`}>
                        <img
                          src={p.image}
                          alt={p.title}
                          className="aspect-16/9 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase text-rose">
                        <BookOpen className="h-4 w-4" />
                        <span>{p.category}</span>
                        <span className="flex items-center gap-1 text-muted-foreground lowercase">
                          <Clock className="h-3.5 w-3.5" />
                          {p.readTime}
                        </span>
                      </div>
                      <Link to={`/blog/${p.slug}`}>
                        <h2 className="mt-4 font-display text-2xl font-semibold text-wine group-hover:text-rose transition-colors leading-snug">
                          {p.title}
                        </h2>
                      </Link>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {p.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-border/60">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {p.date}
                    </span>
                    <Button asChild variant="link" className="px-0 font-semibold text-rose hover:text-wine">
                      <Link to={`/blog/${p.slug}`}>
                        Read full article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AppointmentBand
        title="Have a specific question about your health?"
        text="In-clinic consultations at Bachupally and online video consultations are available for personalized guidance based on your history."
      />
    </main>
  );
}
