import type { Metadata } from "next";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import {
  profile,
  summary,
  stack,
  devProjects,
  experience,
  languages,
} from "@/data/dev";

export const metadata: Metadata = {
  title: "Weronika Kmieć — Frontend Developer (React / Next.js / TypeScript)",
  description:
    "Frontend developer in Warsaw, Poland, with 3 years of experience shipping production web applications in React, Next.js, TypeScript and Tailwind CSS, backed by Node.js, PostgreSQL and Supabase. Selected work and contact.",
  alternates: {
    canonical: "https://wercche.xyz/dev",
  },
  robots: "index, follow",
  openGraph: {
    title: "Weronika Kmieć — Frontend Developer (React / Next.js / TypeScript)",
    description:
      "Frontend developer in Warsaw, Poland, shipping production web applications in React, Next.js and TypeScript.",
    type: "profile",
    url: "https://wercche.xyz/dev",
    siteName: "wercche",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weronika Kmieć — Frontend Developer (React / Next.js / TypeScript)",
    description:
      "Frontend developer in Warsaw, Poland, shipping production web applications in React, Next.js and TypeScript.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Frontend Developer",
  description:
    "Frontend developer with 3 years of experience building and shipping production web applications in React, Next.js and TypeScript.",
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warsaw",
    addressCountry: "PL",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Academy of Fine Arts in Warsaw",
  },
  knowsLanguage: ["pl", "en", "fr"],
  knowsAbout: stack.flatMap((group) => group.items),
  sameAs: [profile.github, profile.linkedin],
};

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const label = "text-[11px] font-bold uppercase tracking-widest text-foreground";

const linkSm = `text-[11px] font-bold uppercase tracking-widest text-foreground transition-opacity hover:opacity-60 motion-reduce:transition-none ${focus}`;

const linkMd = `text-sm font-bold uppercase tracking-widest text-foreground transition-opacity hover:opacity-60 motion-reduce:transition-none ${focus}`;

const container = "mx-auto max-w-5xl px-[clamp(1rem,4vw,4rem)]";

const railGrid = "grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6";

function Arrow() {
  return <span aria-hidden="true">&ensp;&rarr;</span>;
}

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  const headingId = `section-${num}`;
  return (
    <section
      aria-labelledby={headingId}
      className={`${container} grid items-start gap-4 border-t border-border py-12 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-12 md:py-16`}
    >
      <h2 id={headingId} className={`flex items-baseline gap-2 ${label}`}>
        <span aria-hidden="true" className="tabular-nums">
          {num}
        </span>
        <span>{title}</span>
      </h2>
      <div>{children}</div>
    </section>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {items.map((item) => (
        <li key={item} className="text-sm text-foreground">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function DevPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:tracking-widest focus:text-background focus:uppercase`}
      >
        Skip to content
      </a>

      <main id="main">
        <header className={`${container} pt-24 pb-12 md:pt-32 md:pb-16`}>
          <div className="flex items-start justify-between gap-6">
            <h1 className="text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>
            <div className="shrink-0 pt-1">
              <ThemeToggle />
            </div>
          </div>

          <p className="mt-5 max-w-[32ch] text-lg leading-relaxed text-foreground md:text-xl">
            {profile.role}
          </p>

          <p className={`mt-4 ${label}`}>
            {profile.location} &nbsp;·&nbsp; {profile.availability}
          </p>

          <nav
            aria-label="Primary"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className={`rounded-full bg-signal px-5 py-2.5 text-sm font-bold tracking-widest text-[#040404] uppercase transition-transform hover:scale-[1.03] motion-reduce:transition-none ${focus}`}
            >
              Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-b border-foreground pb-0.5 ${linkMd}`}
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-b border-foreground pb-0.5 ${linkMd}`}
            >
              LinkedIn
            </a>
          </nav>

          <p className="mt-8 text-base leading-relaxed text-foreground/70">
            {profile.cvNote}
          </p>
        </header>

        <Section num="01" title="Summary">
          <div className="max-w-[70ch] space-y-4 text-lg leading-relaxed text-foreground md:text-xl">
            {summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section num="02" title="Tech stack">
          <div className="space-y-6">
            {stack.map((group) => (
              <div key={group.label} className={railGrid}>
                <h3 className={`pt-0.5 ${label}`}>{group.label}</h3>
                <TagList items={group.items} />
              </div>
            ))}
          </div>
        </Section>

        <Section num="03" title="Selected work">
          <ol className="divide-y divide-border">
            {devProjects.map((project) => (
              <li
                key={project.title}
                className="-mx-4 grid gap-5 rounded-2xl p-8 transition-colors  hover:bg-foreground/4 focus-within:bg-foreground/4 motion-reduce:transition-none sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-border bg-background">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 640px) 224px, 100vw"
                    quality={70}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <p className={label}>{project.year}</p>

                  <h3 className="mt-3 text-2xl leading-[1.05] tracking-tight text-foreground md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {project.stack.map((tag) => (
                      <li
                        key={tag}
                        className="text-[11px] font-medium text-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center border-b border-foreground pb-0.5 ${linkMd}`}
                      >
                        Live site
                        <Arrow />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkMd}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section num="04" title="Experience">
          <ul className="space-y-8">
            {experience.map((entry) => (
              <li key={entry.role} className={railGrid}>
                <p className={`pt-0.5 tabular-nums ${label}`}>{entry.period}</p>
                <div>
                  <p className="text-base text-foreground">
                    <span className="font-bold">{entry.role}</span>
                    <span className="text-foreground/70"> — {entry.org}</span>
                  </p>
                  {entry.note && (
                    <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-foreground/70">
                      {entry.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className={`mt-10 border-t border-border pt-8 ${railGrid}`}>
            <h3 className={`pt-0.5 ${label}`}>Languages</h3>
            <TagList items={languages} />
          </div>
        </Section>

        <Section num="05" title="Contact">
          <a
            href={`mailto:${profile.email}`}
            className={`inline-block border-b border-foreground pb-1 text-2xl leading-tight tracking-tight break-all text-foreground transition-opacity hover:opacity-60 motion-reduce:transition-none md:text-4xl ${focus}`}
          >
            {profile.email}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkMd}
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkMd}
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-base leading-relaxed text-foreground/70">
            {profile.cvNote}
          </p>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div
          className={`${container} flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-10`}
        >
          <a href="/" className={linkSm}>
            I also make art on the internet
            <Arrow />
          </a>
          <span className="text-[11px] font-bold tracking-widest text-foreground/60 uppercase">
            {profile.name} — {profile.location}
          </span>
        </div>
      </footer>
    </div>
  );
}
