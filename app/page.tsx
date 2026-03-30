import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/keithsacenti/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.987V9h3.102v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.554 13.019H3.783V9h3.108v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ksacenti22",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const strengths = [
  "Quantitative Analysis & Big Data",
  "Competitive Analysis",
  "Process Analysis & Design",
  "Technical Control Analysis",
  "Secure Cloud Architecture",
  "Technical Documentation",
];

const experience = [
  {
    company: "OutSystems",
    location: "Boston, MA",
    role: "Lead Product Manager, Cloud Security & Compliance",
    period: "June 2023 – Present",
    description:
      "As the world's leading low-code application development platform, OutSystems lets you ship modern, secure applications faster. I own the definition and market development of our next gen platform's (ODC) security, including innovation, monetization, and global governmental offerings.",
    bullets: [
      "Attain and maintain global compliance controls to expand OutSystems global governmental growth including US FedRAMP, UK Cyber Essentials, Spain ENS, HIPAA, PCI, TISAX, and more.",
      "Launched ODC's premium security offering, 'Sentry', realizing a 26% ARR increase over projections.",
      "Develop strategic partnerships to expand monetization with emerging technology, including DAST implementation, malware scanning, and intrusion detection.",
      "Define data privacy and availability standards for the ODC platform and customer applications.",
    ],
  },
  {
    company: "Acquia",
    location: "Boston, MA",
    role: "Senior Product Manager, Security & Compliance",
    period: "April 2022 – May 2023",
    subRole: "Product Manager, Security & Compliance · 2020 – April 2022",
    description:
      "Acquia is the foremost Drupal host and developer tools provider, helping Fortune 100 companies build exceptional digital experiences. I planned and operationalized security objectives across Acquia's PaaS and CRM tools.",
    bullets: [
      "Documented, roadmapped, and prioritized security objectives across Acquia's PaaS and CRM offerings, reducing FedRAMP and PCI customer churn to 1.3% in 2022.",
      "Spearheaded mitigation of end-of-life software within the Acquia code base, resulting in zero EoL audit findings.",
      "Architected organizational communication and accountability to support dev team security ownership.",
    ],
  },
  {
    company: "StudentUniverse",
    location: "Waltham, MA",
    role: "Product Manager, Non-Air Products",
    period: "2019 – 2020",
    description:
      "StudentUniverse partners with 100+ international airlines to provide youth travelers the best prices to explore the world. I led product management, design and analytics for all non-flight products.",
    bullets: [
      "Increased per-invoice revenue 280% by optimizing pricing for non-air products including seat choices, rental car sales, and flight insurance.",
      "Released 2–5 quarterly products, leveraging 3rd party partnerships and optimized product packaging.",
      "Created a pricing analysis framework, leading to a 66% increase in seat revenue.",
    ],
  },
  {
    company: "OV Loop",
    location: "Danvers, MA",
    role: "Product Manager, CRM Platforms",
    period: "2017 – 2019",
    description:
      "OV Loop is a fintech startup enabling clients to boost revenue by combining one-tap payments and a virtual marketplace. I led development of OV Loop's CRM software.",
    bullets: [
      "Defined strategic product roadmap and value proposition by analyzing 27 competitive platforms and 50+ local businesses, bringing an email marketing platform to beta phase.",
    ],
  },
  {
    company: "Hotel Asset Value Enhancement (hotelAVE)",
    location: "National",
    role: "Management Consultant",
    period: "2016 – 2017",
    description:
      "hotelAVE executed 20-week, on-site consulting projects for leading lodging brands. I collaborated with line-level employees and area leaders to identify opportunities, install objectives, and sustain results.",
    bullets: [
      "Analyzed opportunity in P&L statements with revenue exceeding $45M, delivering a 3× ROI.",
      "Led projects to restructure fine dining service, resulting in a 38% increase in appetizer and dessert sales.",
    ],
  },
  {
    company: "J. Alexander's Restaurants",
    location: "Nashville, TN",
    role: "Senior Sous Chef",
    period: "2014 – 2016",
    description:
      "With a core philosophy of providing guests a delightful dining experience, I led a team of 60+ to create scratch cuisine, thoughtful service, and genuine interaction.",
    bullets: [
      "Reduced kitchen labor to 34% and food loss to 2.7% in a newly opened kitchen.",
    ],
  },
];

const education = [
  {
    school: "University of Massachusetts – Isenberg School of Management",
    location: "Amherst, MA",
    degree: "B.S. Hospitality & Tourism Management",
    period: "2010 – 2014",
    bullets: ["Student Judiciary Committee, Delta Upsilon Fraternity, Teaching Assistant, Peer Mentor"],
  },
];

const volunteering = [
  {
    org: "Young Alumni Council – UMass Hospitality Dept",
    location: "Boston, MA",
    role: "President",
    period: "2017 – Present",
    bullets: [
      "Lead events, outreach and mentorship for 1,500+ young alumni in Boston and New York City.",
      "Drive community engagement with a 68% YoY attendance increase.",
    ],
  },
  {
    org: "Alumni Leadership Board – UMass Hospitality Dept",
    location: "Boston, MA",
    role: "Board Member",
    period: "2019 – Present",
    bullets: [
      "Lead student-facing activities including classroom visits, experiential learning, and student mentoring programs.",
    ],
  },
];

const awards = [
  {
    org: "University of Massachusetts, Hospitality Dept",
    location: "Boston, MA",
    title: "Outstanding Young Alumni",
    year: "2022",
    bullet: "Awarded for incorporating the Young Alumni Council as a subgroup of the Hospitality Alumni Leadership Board, including authoring bylaws.",
  },
  {
    org: "Boy Scouts of America",
    location: "Springfield, MA",
    title: "Eagle Scout",
    year: "2010",
  },
];

const skills = [
  { name: "Excel", level: "Expert" },
  { name: "SQL", level: "Fluent" },
  { name: "Tableau", level: "Fluent" },
  { name: "Agile", level: "Fluent" },
  { name: "Linux", level: "Fundamental" },
];

const interests = ["Motorcycle Touring (ride around the world — 36% complete)", "Indoor Rock Climbing"];

const fascinates = [
  "Cloud security & wearable tech",
  "Telling stories through data",
  "Organizational behavior research",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-royal-50 via-white to-slate-50">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-royal-200/30 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-royal-100/40 rounded-full blur-3xl pointer-events-none animate-float [animation-delay:2s]" />

        <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-royal-200 shadow-xl bg-royal-100 flex items-center justify-center">
              <Image
                src="/headshot.jpg"
                alt="Keith Sacenti"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="text-center md:text-left animate-fade-up">
            <p className="text-royal-500 font-semibold text-sm tracking-widest uppercase mb-2">
              Product · Security · Builder
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Keith Sacenti
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-4">
              Life is about iteration. I've pivoted my career twice — from culinary arts to management
              consulting, then to software development. Each shift reflects my excitement to learn and evolve.
            </p>
            <p className="text-slate-500 leading-relaxed max-w-xl mb-4">
              While I still love experimenting with new recipes, I now spend my free time improving
              self-built applications and spending time outdoors with my family. As we iterate, we find
              new passions that build on the same core values.
            </p>

            {/* What fascinates */}
            <div className="mb-7">
              <p className="text-slate-700 font-medium mb-2">What fascinates me:</p>
              <ul className="space-y-1">
                {fascinates.map((f) => (
                  <li key={f} className="text-slate-500 text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-royal-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social + Download */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-royal-200 text-royal-600 text-sm font-medium hover:bg-royal-50 hover:border-royal-400 transition-all"
                >
                  {icon}
                  {label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-600 text-white text-sm font-medium hover:bg-royal-700 transition-all shadow-md hover:shadow-royal-200"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-royal-300 animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </section>

      {/* ── STRENGTHS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="reveal text-2xl font-bold text-royal-700 mb-10">Core Strengths</h2>
          <div className="reveal-stagger grid grid-cols-2 md:grid-cols-3 gap-4">
            {strengths.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 p-4 rounded-xl border border-royal-100 bg-royal-50/50 hover:border-royal-300 hover:bg-royal-50 transition-all group"
              >
                <span className="w-2 h-2 rounded-full bg-royal-400 group-hover:scale-125 transition-transform flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="reveal text-2xl font-bold text-royal-700 mb-12">Experience</h2>
          <div className="relative space-y-12 pl-6 border-l-2 border-royal-100">
            {experience.map((job, i) => (
              <div key={i} className="reveal relative">
                {/* Timeline dot */}
                <span className="absolute -left-[1.6rem] top-1.5 w-4 h-4 rounded-full bg-royal-400 border-2 border-white shadow" />

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-royal-100 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{job.company}</h3>
                    <span className="text-sm text-slate-400 whitespace-nowrap">{job.location}</span>
                  </div>
                  <p className="text-royal-600 font-semibold text-sm mb-0.5">{job.role}</p>
                  {job.subRole && (
                    <p className="text-slate-400 text-xs mb-0.5 italic">{job.subRole}</p>
                  )}
                  <p className="text-slate-400 text-xs mb-3">{job.period}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-royal-300 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="reveal text-2xl font-bold text-royal-700 mb-10">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="reveal bg-royal-50 border border-royal-100 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-1">
                <h3 className="font-bold text-slate-900">{edu.school}</h3>
                <span className="text-sm text-slate-400">{edu.location}</span>
              </div>
              <p className="text-royal-600 font-semibold text-sm">{edu.degree}</p>
              <p className="text-slate-400 text-xs mb-3">{edu.period}</p>
              {edu.bullets.map((b, bi) => (
                <p key={bi} className="text-sm text-slate-600 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-royal-300 flex-shrink-0" />
                  {b}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── VOLUNTEERING ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="reveal text-2xl font-bold text-royal-700 mb-10">Volunteerism</h2>
          <div className="space-y-6">
            {volunteering.map((v, i) => (
              <div key={i} className="reveal bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold text-slate-900">{v.org}</h3>
                  <span className="text-sm text-slate-400">{v.location}</span>
                </div>
                <p className="text-royal-600 font-semibold text-sm">{v.role}</p>
                <p className="text-slate-400 text-xs mb-3">{v.period}</p>
                <ul className="space-y-2">
                  {v.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-royal-300 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="reveal text-2xl font-bold text-royal-700 mb-10">Awards</h2>
          <div className="reveal-stagger grid md:grid-cols-2 gap-6">
            {awards.map((a, i) => (
              <div key={i} className="bg-royal-50 border border-royal-100 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-900">{a.title}</h3>
                  <span className="text-sm text-slate-400">{a.year}</span>
                </div>
                <p className="text-royal-600 text-sm font-medium mb-1">{a.org}</p>
                <p className="text-slate-400 text-xs mb-3">{a.location}</p>
                {a.bullet && <p className="text-sm text-slate-600">{a.bullet}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS & INTERESTS ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="reveal">
            <h2 className="text-2xl font-bold text-royal-700 mb-8">Technical Skills</h2>
            <div className="space-y-4">
              {skills.map(({ name, level }) => (
                <div key={name} className="flex items-center justify-between bg-white rounded-xl px-5 py-3 border border-slate-100 shadow-sm">
                  <span className="font-medium text-slate-800">{name}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    level === "Expert" ? "bg-royal-100 text-royal-700" :
                    level === "Fluent" ? "bg-green-50 text-green-700" :
                    "bg-slate-100 text-slate-600"
                  }`}>{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="reveal">
            <h2 className="text-2xl font-bold text-royal-700 mb-8">Interests</h2>
            <div className="space-y-3">
              {interests.map((interest) => (
                <div key={interest} className="flex items-start gap-3 bg-white rounded-xl px-5 py-3 border border-slate-100 shadow-sm">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-royal-400 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-white">
        <div className="reveal max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 bg-royal-600 rounded-3xl p-10 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's connect</h3>
            <p className="text-royal-200 text-sm">Find me on LinkedIn or explore my projects on GitHub.</p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-royal-700 text-sm font-semibold hover:bg-royal-50 transition-all shadow"
              >
                {icon}
                {label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
