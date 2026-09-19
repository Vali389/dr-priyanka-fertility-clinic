import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  BookOpen,
  Share2,
  CheckCircle2,
  HelpCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { blogPosts } from "@/data/blogs";
import drPriyanka from "@/assets/dr-priyanka.png";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-wine">Article not found</h1>
        <p className="mt-3 text-muted-foreground">The requested article could not be located.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Health Journal
          </Link>
        </Button>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-background">
      {/* Top Breadcrumb & Article Header */}
      <section className="bg-blush/60 border-b border-border/70 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose hover:text-wine transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Health Journal
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="rounded-full bg-pink-100 px-3 py-1 text-[#9d174d] border border-pink-300/50">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl sm:text-5xl font-bold leading-tight text-wine">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {post.summary}
          </p>

          {/* Author Badge */}
          <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
            <img
              src={drPriyanka}
              alt="Dr. Priyanka Singh"
              className="h-14 w-14 rounded-full object-cover border-2 border-rose/30 shadow-sm bg-white"
            />
            <div>
              <p className="text-sm font-bold text-foreground">Dr. Priyanka Singh</p>
              <p className="text-xs text-rose font-medium">
                MBBS, DGO, DNB (OBG) · Fellowship in Reproductive Medicine (IVF)
              </p>
              <p className="text-[0.68rem] text-muted-foreground">
                Senior Consultant, Radiance Speciality Clinics, Bachupally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image & Body */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div className="overflow-hidden rounded-2xl shadow-glow-soft border border-border">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-16/9 w-full object-cover"
            />
          </div>

          {/* Article Main Text */}
          <div className="mt-12 space-y-10 text-foreground/90">
            {/* Lead Intro */}
            <p className="text-lg leading-relaxed text-muted-foreground font-medium border-l-4 border-rose pl-5 italic">
              {post.content.intro}
            </p>

            {/* Sections */}
            {post.content.sections.map((sec, i) => (
              <div key={i} className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-wine">
                  {sec.heading}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {sec.body}
                </p>

                {sec.bullets && (
                  <ul className="mt-4 space-y-2.5 rounded-xl bg-blush/40 p-5 border border-border/70">
                    {sec.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 text-rose shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Clinical Takeaway Box */}
            <div className="rounded-2xl border border-pink-200 bg-gradient-to-br from-[#fff0f5] via-[#fce7f3] to-[#fbcfe8]/60 p-7 sm:p-9 shadow-card-soft">
              <span className="eyebrow flex items-center gap-2 text-rose">
                <ShieldCheck className="h-4 w-4" />
                <span>Dr. Priyanka&apos;s Clinical Takeaway</span>
              </span>
              <p className="mt-3 font-display text-lg font-semibold text-wine leading-relaxed">
                &ldquo;{post.content.clinicalTakeaway}&rdquo;
              </p>
            </div>

            {/* Topic Specific FAQs */}
            {post.content.faqs && post.content.faqs.length > 0 && (
              <div className="mt-12 border-t border-border/70 pt-10">
                <h3 className="font-display text-2xl font-bold text-wine flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-rose" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="mt-6 space-y-4">
                  {post.content.faqs.map((faq, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <h4 className="font-semibold text-sm text-foreground">{faq.q}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-Article Doctor Appointment Banner */}
            <div className="rounded-2xl bg-wine-gradient p-8 text-primary-foreground shadow-glow-soft flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
              <div>
                <h3 className="font-display text-2xl font-bold">Have personal questions?</h3>
                <p className="mt-2 text-sm text-primary-foreground/80 max-w-md">
                  Schedule an in-clinic or video consultation with Dr. Priyanka Singh for personalized medical guidance.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full bg-white text-wine hover:bg-white/90 shrink-0 font-semibold shadow-soft">
                <a
                  href={`https://wa.me/917995574432?text=${encodeURIComponent(
                    `Hello Dr. Priyanka's Clinic, I was reading your article on "${post.title}" and would like to book a consultation.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="mr-2 h-4 w-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-20 border-t border-border/80 pt-12">
            <h3 className="font-display text-2xl font-bold text-wine">Related Reading</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 shadow-card-soft hover:shadow-glow-soft transition-all duration-300"
                >
                  <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-rose">
                    {r.category}
                  </span>
                  <h4 className="mt-2 font-display text-lg font-semibold text-wine group-hover:text-rose transition-colors">
                    {r.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                    {r.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold text-rose group-hover:translate-x-1 transition-transform">
                    Read article <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
