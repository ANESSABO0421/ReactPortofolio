import React, { memo } from "react";
import LazyImage from "../components/LazyImage";

const highlights = [
  "1 year building scalable REST APIs, ERP platforms, and AI-integrated tools across web and mobile.",
  "Comfortable across the full stack — Node.js backends, React frontends, React Native mobile, and cloud deployments.",
  "Experienced with real-time systems, JWT auth, RBAC, MongoDB aggregation, and third-party API integrations.",
];

const timeline = [
  { period: "Nov 2025 – Apr 2026", title: "MERN Stack Developer, Necttos OPC Pvt. Ltd." },
  { period: "May 2025 – Nov 2025", title: "MERN Stack Developer Intern, Softroniics" },
  { period: "2022 – 2025", title: "B.Sc. Computer Science, GEMS Arts & Science College" },
];

const About = () => {
  return (
    <section className="portfolio-section section-anchor-offset">
      <div className="portfolio-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="surface-card parallax-medium rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8">
          <p className="section-kicker">About</p>
          <h2 className="section-title text-[clamp(3rem,7vw,5.8rem)]">The Journey So Far</h2>
          <p className="section-lead mt-5">
            MERN Stack Developer with a year of hands-on experience delivering features across
            ERP systems, real-time platforms, and AI-powered tools — from API design to
            production deployment.
          </p>
          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-[var(--line)] bg-[rgba(18,25,34,0.72)] px-4 py-4 text-[var(--muted)] sm:rounded-[1.5rem] sm:px-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 xl:grid-cols-[0.86fr_1.14fr]">
            <div className="surface-card parallax-fast overflow-hidden rounded-[1.5rem] p-3 sm:rounded-[2rem] sm:p-4">
              <div className="relative h-full min-h-[280px] overflow-hidden rounded-[1.25rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(18,25,34,0.94),rgba(8,12,18,0.92))] sm:min-h-[320px] sm:rounded-[1.55rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,166,217,0.22),transparent_52%)]" />
                <LazyImage
                  src="/anees.webp"
                  alt="Anees Aboobacker portrait"
                  className="h-full w-full object-cover object-top scale-[1.04]"
                  wrapperClassName="h-full w-full"
                  sizes="(max-width: 1280px) 100vw, 40vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="muted-label mb-2">Portrait</p>
                  <p className="heading-display text-4xl leading-none text-[var(--text)]">
                    Anees
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card parallax-medium rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8">
              <p className="muted-label mb-3">Profile</p>
              <h3 className="heading-display text-4xl leading-none sm:text-6xl">
                MERN Stack
                <br />
                Developer
              </h3>
              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                I&apos;m Anees Aboobacker, a MERN stack developer from Malappuram, Kerala. I build
                REST APIs, real-time systems, and full-stack web and mobile applications — with
                a focus on clean architecture, performance, and shipping production-ready code.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.title} className="metric-card parallax-slow">
                <p className="muted-label mb-3">{item.period}</p>
                <p className="text-base font-bold leading-6 text-[var(--text)]">{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);