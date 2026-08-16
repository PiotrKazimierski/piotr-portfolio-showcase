import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/piotr.jpg.asset.json";
import resumePdf from "@/assets/resume.pdf.asset.json";
import { competencies, experience, profile, skills, stats } from "@/data/resume";

const title = "Piotr Kazimierski — Senior Salesforce Engineer & System Architect";
const description =
  "Portfolio of Piotr Kazimierski: Senior Salesforce Engineer, enterprise integration specialist and system architect working with Apex, LWC, Java microservices and AWS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://piotrkazimierski.pl/" }],
  }),
  component: Index,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#architecture", label: "Architecture" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: "https://piotrkazimierski.pl/",
  sameAs: profile.links.map((l) => l.href),
  address: { "@type": "PostalAddress", addressCountry: "PL" },
  knowsAbout: ["Salesforce", "Apex", "Lightning Web Components", "Java", "AWS", "TypeScript"],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm text-primary">
            pk<span className="text-muted-foreground">.dev</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={resumePdf.url}
            target="_blank"
            rel="noopener"
            className="rounded-md border border-primary/50 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Resume ↓
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="border-b border-border"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.6fr_1fr] md:items-center md:py-28">
            <div>
              <p className="mono-label">{profile.location} · Available for senior roles</p>
              <h1 className="mt-5 text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 font-mono text-base text-primary sm:text-lg">
                {profile.role} <span className="text-muted-foreground">/ {profile.tagline}</span>
              </p>
              <p className="mt-3 max-w-2xl text-sm text-accent">{profile.intro}</p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get in touch
                </a>
                <a
                  href="#experience"
                  className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  View experience
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
                {profile.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
            <div className="justify-self-center">
              <div className="panel overflow-hidden rounded-2xl p-2">
                <img
                  src={photo.url}
                  alt="Portrait of Piotr Kazimierski"
                  width={260}
                  height={260}
                  className="h-56 w-56 rounded-xl object-cover md:h-64 md:w-64"
                />
              </div>
              <div className="mt-4 space-y-1 text-center font-mono text-xs text-muted-foreground">
                {profile.certifications.map((c) => (
                  <p key={c}>✦ {c}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border px-6 md:grid-cols-4 md:px-0">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-6 py-8 text-center">
                <p className="font-mono text-2xl text-accent">{s.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="architecture" className="mx-auto max-w-5xl px-6 py-20">
          <p className="mono-label">01 / Architecture</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Architectural competencies</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {competencies.map((c) => (
              <div key={c.title} className="panel p-6">
                <h3 className="text-base font-semibold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-5xl border-t border-border px-6 py-20">
          <p className="mono-label">02 / Experience</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Where I've built things</h2>

          <div className="mt-12 space-y-6">
            {experience.map((job) => (
              <article key={job.company} className="panel p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role} <span className="text-primary">· {job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {job.intro}
                </p>
                {job.highlights.length > 0 && (
                  <ul className="mt-6 grid gap-4 md:grid-cols-2">
                    {job.highlights.map((h) => (
                      <li key={h.title} className="border-l-2 border-primary/40 pl-4">
                        <p className="text-sm font-medium">{h.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mono-label">03 / Toolbox</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Technologies I work with</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3 className="font-mono text-sm text-accent">{s.group}</h3>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        <span className="mr-2 text-primary">›</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <p className="mono-label">04 / Contact</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let's talk architecture</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to senior engineering and architecture work in the Salesforce and cloud space.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground transition-opacity hover:opacity-90"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="rounded-md border border-border px-5 py-2.5 transition-colors hover:bg-secondary"
              >
                {profile.phone}
              </a>
              <a
                href={resumePdf.url}
                target="_blank"
                rel="noopener"
                className="rounded-md border border-border px-5 py-2.5 transition-colors hover:bg-secondary"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · piotrkazimierski.pl
        </div>
      </footer>
    </div>
  );
}