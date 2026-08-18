/**
 * Content for the /dev route (recruiter-facing developer page).
 * Mirrors the CV, which is sent on request rather than hosted — keep the two in
 * sync. Separate from `projects.ts` so the creative portfolio and the developer
 * page can describe the same work in different voices.
 */

export const profile = {
  name: "Weronika Kmieć",
  role: "Frontend Developer — React / Next.js / TypeScript",
  location: "Warsaw, Poland",
  availability: "Available immediately — B2B or UoP",
  email: "wercche@gmail.com",
  github: "https://github.com/Kmetho",
  linkedin: "https://www.linkedin.com/in/wercche/",
  cvNote: "Full CV available on request",
  siteUrl: "https://wercche.xyz/dev",
} as const;

export const summary = [
  "Frontend developer with 3 years of experience building and shipping production web applications in React, Next.js and TypeScript.",
  "I work from Figma through to production: turning designs into responsive, cross-browser interfaces and wiring them to authentication, PostgreSQL databases and third-party APIs.",
  "I also study Media Arts at the Academy of Fine Arts in Warsaw, which is where the other half of this site comes from.",
];

export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SQL", "GLSL"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "React Three Fiber",
    ],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vercel", "Figma", "UX/UI design"],
  },
];

export interface DevProject {
  title: string;
  year: string;
  /** One sentence: what it does for a user. */
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: {
    src: string;
    /** Intrinsic dimensions — passed to next/image to prevent layout shift. */
    width: number;
    height: number;
    /** Describes the project, not the file. */
    alt: string;
  };
}

export const devProjects: DevProject[] = [
  {
    title: "Briefed",
    year: "2026",
    description:
      "A SaaS tool that turns a client's scattered brief into a structured PDF document, with accounts, file uploads and saved projects.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Clerk",
      "UploadThing",
      "jsPDF",
    ],
    liveUrl: "https://briefedapp.vercel.app",
    githubUrl: "https://github.com/Kmetho/briefed-shadcn",
    image: {
      src: "/thumbnails/briefed-thumb.png",
      width: 1376,
      height: 768,
      alt: "The Briefed dashboard, listing saved client briefs with their status and deadlines.",
    },
  },
  {
    title: "Paulina Rams — portfolio",
    year: "2023, rebuilt 2026",
    description:
      "A portfolio site for a graphic designer, in continuous use since 2023 and rebuilt in Astro so her work loads faster and is findable in search.",
    stack: ["Astro", "TypeScript", "Three.js", "GLSL"],
    liveUrl: "https://paulinarams.com/",
    githubUrl: "https://github.com/Kmetho/paulina-update",
    image: {
      src: "/thumbnails/paulina-thumb.jpg",
      width: 1920,
      height: 1080,
      alt: "Homepage of Paulina Rams' portfolio, with a full-width project image and type-led navigation.",
    },
  },
  {
    title: "wercche.xyz",
    year: "2026",
    description:
      "My own portfolio — this site — where the creative work sits alongside this page for developer roles.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://wercche.xyz/",
    githubUrl: "https://github.com/Kmetho/my-portfolio-website",
    image: {
      src: "/thumbnails/webfolio-thumb.png",
      width: 2720,
      height: 1568,
      alt: "The wercche.xyz homepage, with large display type over a grid of project thumbnails.",
    },
  },
  {
    title: "Synth Kit",
    year: "2025",
    description:
      "A browser instrument — click or tap the crystals in a 3D scene and each one triggers real-time Web Audio synthesis.",
    stack: ["Next.js", "TypeScript", "Three.js", "Web Audio API"],
    liveUrl: "https://wercche.xyz/work/synth-kit",
    githubUrl: "https://github.com/Kmetho/my-portfolio-website",
    image: {
      src: "/thumbnails/synth-kit-thumb.jpg",
      width: 1280,
      height: 784,
      alt: "The Synth Kit scene, with translucent 3D crystals arranged on a reflective surface.",
    },
  },
];

export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  note?: string;
}

export const experience: ExperienceEntry[] = [
  {
    period: "2023 — now",
    role: "Freelance Frontend Developer",
    org: "Warsaw",
    note: "Client sites and web applications delivered end to end: translating Figma designs into responsive, cross-browser interfaces, integrating authentication, PostgreSQL databases and upload providers, and scoping and estimating work directly with non-technical clients.",
  },
  {
    period: "2019 — Feb 2026",
    role: "Hospitality & client services",
    org: "Gdańsk and Warsaw",
    note: "Seven years across bar, sommelier and management roles in high-pressure venues; also ran social media and visual content for Rausz, Warsaw.",
  },
  {
    period: "2025 — now",
    role: "BA, Media Arts",
    org: "Academy of Fine Arts, Warsaw",
    note: "Audiovisuals, digital and analogue media, 3D, VR/AR, interactive installations, creative coding.",
  },
];

export const languages = [
  "Polish — native",
  "English — fluent (C1)",
  "French — basic",
];
