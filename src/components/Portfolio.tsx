import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Github, Linkedin, Mail, ArrowRight, ArrowUpRight, ArrowDown,
  Code2, Database, Layout, Server, Wrench, Trophy, GraduationCap,
  Briefcase, Award, Send, Terminal as TerminalIcon, ChevronRight,
  Sparkles, Star, MapPin, Download,
} from "lucide-react";

/* ============ Palette ============ */
const C = {
  ink: "#0D0D0D",
  paper: "#F5F1E8",
  plum: "#3D1B4E",
  tomato: "#E94F37",
  mustard: "#F6BE00",
  mint: "#7BC4A4",
};

/* ============ Scroll progress ============ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[80] h-[3px] origin-left"
      style={{ scaleX, background: C.tomato }}
    />
  );
}

/* ============ Nav ============ */
const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
];

function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-[70] bg-[color:var(--color-paper)]/85 backdrop-blur border-b border-black/10"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden">
            <span className="absolute inset-0 bg-[color:var(--color-tomato)]" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
            <span className="absolute inset-0 bg-[color:var(--color-mustard)]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
          </span>
          <span className="font-display text-sm tracking-tight">SRI MANIKANDAN S.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm font-semibold hover:text-[color:var(--color-tomato)] transition-colors">
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-[color:var(--color-mint)] px-5 py-2 text-sm font-bold text-[color:var(--color-ink)] border-2 border-[color:var(--color-ink)] shadow-[4px_4px_0_0_var(--color-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)]"
          >
            Contact me
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

/* ============ Animated shape composition (hero right) ============ */
function GeometricComposition() {
  return (
    <div className="relative aspect-square w-full max-w-[600px]">
      {/* Big red triangle center */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewBox="0 0 100 100"
        className="absolute left-[8%] top-[18%] h-[62%] w-[62%]"
      >
        <motion.polygon
          points="0,100 100,100 100,0"
          fill={C.tomato}
          animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      </motion.svg>

      {/* Yellow triangle top-left */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="absolute left-0 top-[6%] h-[26%] w-[26%] animate-float-y"
        style={{ background: C.mustard, clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* Purple circle top-center */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 180, damping: 14 }}
        className="absolute left-[38%] top-0 h-[15%] w-[15%] rounded-full"
        style={{ background: C.plum }}
      />

      {/* Yellow triangle top-right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        className="absolute right-[16%] top-[6%] h-[18%] w-[18%]"
        style={{ background: C.mustard, clipPath: "polygon(100% 0, 100% 100%, 0 50%)" }}
      />

      {/* Plum square top-right corner */}
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute right-0 top-0 h-[14%] w-[14%] animate-wiggle"
        style={{ background: C.plum }}
      />

      {/* Tomato right corner triangle */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="absolute right-0 top-[16%] h-[14%] w-[14%]"
        style={{ background: C.tomato, clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
      />

      {/* White circle inside triangle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
        className="absolute left-[52%] top-[40%] h-[16%] w-[16%] rounded-full bg-[color:var(--color-paper)]"
      />

      {/* Plum square mid-right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute right-[16%] top-[36%] h-[13%] w-[13%] animate-float-y"
        style={{ background: C.plum, animationDelay: "-1s" }}
      />

      {/* Tomato square right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05 }}
        className="absolute right-0 top-[36%] h-[13%] w-[13%]"
        style={{ background: C.tomato }}
      />

      {/* Yellow square bottom-left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="absolute left-[12%] bottom-[6%] h-[24%] w-[24%] animate-float-y"
        style={{ background: C.mustard, animationDelay: "-2s" }}
      />

      {/* Plum square inside yellow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, type: "spring" }}
        className="absolute left-[19%] bottom-[13%] h-[9%] w-[9%]"
        style={{ background: C.plum }}
      />

      {/* Purple half-circle bottom-mid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute left-[46%] bottom-[6%] h-[20%] w-[10%] animate-float-x"
        style={{ background: C.plum, borderTopRightRadius: "999px", borderBottomRightRadius: "999px" }}
      />

      {/* Tomato half-circle bottom-mid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25 }}
        className="absolute left-[56%] bottom-[6%] h-[20%] w-[10%]"
        style={{ background: C.tomato, borderTopRightRadius: "999px", borderBottomRightRadius: "999px" }}
      />

      {/* Purple triangle bottom-right */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.35, duration: 0.6 }}
        className="absolute right-[8%] bottom-0 h-[20%] w-[20%] animate-wiggle"
        style={{ background: C.plum, clipPath: "polygon(50% 0, 100% 100%, 0 100%)", animationDelay: "-1.5s" }}
      />

      {/* Spinning star accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-[2%] top-[52%] animate-spin-slow"
      >
        <Star className="h-8 w-8 fill-[color:var(--color-ink)] text-[color:var(--color-ink)]" />
      </motion.div>
    </div>
  );
}

/* ============ Hero ============ */
function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
        <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.05 }}
  className="mb-6 flex flex-wrap items-center gap-4"
>
  <div className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 shrink-0 overflow-hidden border-2 border-[color:var(--color-ink)] shadow-[4px_4px_0_0_var(--color-ink)]">
    <img
      src=".output/public/mani.png"
      alt="Sri Manikandan"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="inline-flex items-center gap-2 border-2 border-[color:var(--color-ink)] bg-white px-3 py-1 text-xs font-mono uppercase tracking-widest shadow-[3px_3px_0_0_var(--color-ink)]">
    <span className="h-2 w-2 rounded-full bg-[color:var(--color-mint)] animate-pulse" />
    Software Engineer · Available
  </div>
</motion.div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[color:var(--color-ink)]">
            {["Innovation", "through", "design."].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {word === "design." ? (
                  <>
                    <span className="relative inline-block">
                      design
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                        className="absolute left-0 bottom-1 h-[10px] w-full origin-left"
                        style={{ background: C.mustard, zIndex: -1 }}
                      />
                    </span>
                    <span style={{ color: C.tomato }}>.</span>
                  </>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 max-w-md font-mono text-sm leading-relaxed text-[color:var(--color-ink)]/75"
          >
            I'm <b>Sri Manikandan</b> — I shape and build digital products with the
            MERN stack and Java, bringing wonderful experiences to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 border-2 border-[color:var(--color-ink)] bg-[color:var(--color-mint)] px-4 py-3 shadow-[5px_5px_0_0_var(--color-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--color-ink)]"
            >
              <ArrowDown className="h-5 w-5" />
            </a>
            <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-ink)]/60">
              Scroll to see the work
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex items-center gap-3"
          >
            {[
              { icon: Github, href: " https://github.com/SRIMANIKANDAN123" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sri-manikandan-s-915345282?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { icon: Mail, href: "mailto:srimanikandan1605@gmail.com" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                whileHover={{ y: -3, rotate: -6 }}
                className="grid h-10 w-10 place-items-center border-2 border-[color:var(--color-ink)] bg-white transition-colors hover:bg-[color:var(--color-mustard)]"
              >
                <s.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <GeometricComposition />
        </div>
      </div>
    </section>
  );
}

/* ============ Marquee band ============ */
function Marquee() {
  const items = ["React", "JavaScript", "Node.js", "MongoDB", "Java",  "Express", "MySQL"];
  return (
    <div className="relative overflow-hidden border-y-2 border-[color:var(--color-ink)] bg-[color:var(--color-mustard)] py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="mx-8 font-display text-2xl tracking-tight uppercase inline-flex items-center gap-8">
            {it}
            <Star className="h-5 w-5 fill-[color:var(--color-ink)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ Purple band ============ */
function PurpleBand() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-plum)] px-6 py-20 text-[color:var(--color-paper)]">
   
      {/* <div className="absolute left-0 top-6 h-16 w-16 bg-[color:var(--color-plum)] border-2 border-[color:var(--color-tomato)]" />
      <div className="absolute left-8 top-24 h-16 w-16 bg-[color:var(--color-tomato)]" />
     

       <div className="absolute right-0 bottom-32 h-16 w-16 bg-[color:var(--color-mustard)]" /> 
       <div className="absolute right-12 bottom-42 h-16 w-16 bg-[color:var(--color-mint)]" /> */}
  <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-[2%] top-[52%] animate-spin-slow"
      >
        <Star className="h-8 w-8 fill-[color:var(--color-ink)] text-[color:var(--color-ink)]" />
      </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute left-[2%] top-[52%] animate-spin-slow"
      >
        <Star className="h-8 w-8 fill-[color:var(--color-ink)] text-[color:var(--color-ink)]" />
      </motion.div>

      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm leading-relaxed md:text-base"
        >
          My work can be as simple as building a landing page or as complex as
          engineering an end-to-end product — MERN stack, clean
          architecture, and a relentless obsession for detail.
        </motion.p>
      </div>
    </section>
  );
}

/* ============ Section title ============ */
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12 flex flex-col gap-3"
    >
      <div className="inline-flex items-center gap-3">
        <span className="h-3 w-3 bg-[color:var(--color-tomato)]" />
        <span className="font-mono text-xs uppercase tracking-widest">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl md:text-6xl tracking-tight">{title}</h2>
    </motion.div>
  );
}

/* ============ About ============ */
function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionTitle eyebrow="About" title="Hi, I make things that work — and delight." />
        <div className="space-y-6 text-lg leading-relaxed text-[color:var(--color-ink)]/80">
          <p>
            I'm a Software Engineer who thinks like a designer. I build full-stack
            web experiences with <b>React, Node, Express, MongoDB</b> and
            <b> Java</b>, and I care as much about the pixel as the payload.
          </p>
          <p>
            From data-heavy dashboards to marketing sites with attitude, I ship
            polished, performant products that feel great to use.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {["MERN", "Java", "Java Scrip","BootStrap","MySQL"].map((t) => (
              <span key={t} className="border-2 border-[color:var(--color-ink)] bg-white px-3 py-1 text-xs font-mono uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Skills ============ */
function Skills() {
  const groups = [
    { icon: Layout, title: "Frontend", tint: C.tomato, items: ["React", "JavaScrip", "BootStrap"] },
    { icon: Server, title: "Backend", tint: C.plum, items: ["Node.js", "Express"] },
    { icon: Database, title: "Databases", tint: C.mustard, items: ["MongoDB", "MySQL"] },
    { icon: Wrench, title: "Tools", tint: C.mint, items: ["Git","GitHub","Vite", "Figma", "Postman"] },
  ];
  return (
    <section id="skills" className="px-6 py-24 bg-white border-y-2 border-[color:var(--color-ink)]">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Skills" title="The toolbox." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative border-2 border-[color:var(--color-ink)] bg-[color:var(--color-paper)] p-6 shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center border-2 border-[color:var(--color-ink)]" style={{ background: g.tint }}>
                <g.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-2xl">{g.title}</div>
              <ul className="mt-3 space-y-1 font-mono text-sm">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-[color:var(--color-ink)]" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Projects ============ */
function Projects() {
  const projects = [
    { title: "Instagram Clone", tag: "MERN STACK", desc: "Real-time collaborative task board with drag-and-drop, activity feed and dark mode.", color: C.tomato },
   { title: "SIH PROJECT", tag: "MERN STACK", desc: "Frontend web application built with the MERN stack for Smart India Hackathon 2025 (Team INNOVIT1856).", color: C.mustard },
    { title: "Portfolio CMS", tag: "Fullstack", desc: "Headless CMS built in  React for managing creative portfolios.", color: C.mint },
    
  ];
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Selected work" title="Recent projects." />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative block border-2 border-[color:var(--color-ink)] bg-white shadow-[8px_8px_0_0_var(--color-ink)] transition-shadow hover:shadow-[12px_12px_0_0_var(--color-ink)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-[color:var(--color-ink)]" style={{ background: p.color }}>
                {/* decorative shapes */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[color:var(--color-paper)]/40" />
                <div className="absolute right-10 bottom-6 h-10 w-10 bg-[color:var(--color-ink)]" />
                <div className="absolute left-6 bottom-6 h-12 w-12" style={{ background: C.plum, clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
                <div className="absolute inset-0 grid place-items-center font-display text-5xl tracking-tight text-[color:var(--color-ink)]">
                  {p.title}
                </div>
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-ink)]/60">{p.tag}</div>
                  <div className="font-display text-2xl">{p.title}</div>
                  <p className="mt-2 max-w-md text-sm text-[color:var(--color-ink)]/70">{p.desc}</p>
                </div>
                <div className="grid h-12 w-12 place-items-center border-2 border-[color:var(--color-ink)] bg-[color:var(--color-mustard)] transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Experience / Timeline ============ */
function Experience() {
  const items = [
    
    { icon: Briefcase, when: "2025 — 2026", title: "Full Stack Intern", where: "Tech Studio", desc: "Shipped internal tools with React, Node and MongoDB.", color: C.mustard },
    { icon: GraduationCap, when: "2023 — 2027", title: "B.Tech Information Technology", where: "Sri Sairam Institute Of Technology", desc: "Focus on data structures, Data Base and Management System, OS.", color: C.mint },
  ];
  return (
    <section id="experience" className="px-6 py-24 bg-white border-y-2 border-[color:var(--color-ink)]">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Journey" title="Experience." />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-2 border-[color:var(--color-ink)] bg-[color:var(--color-paper)] p-6 shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <div className="mb-4 inline-grid h-12 w-12 place-items-center border-2 border-[color:var(--color-ink)]" style={{ background: it.color }}>
                <it.icon className="h-5 w-5" />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest">{it.when}</div>
              <div className="font-display text-2xl mt-1">{it.title}</div>
              <div className="text-sm text-[color:var(--color-ink)]/60">{it.where}</div>
              <p className="mt-3 text-sm text-[color:var(--color-ink)]/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Stats ============ */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}
/* ============ Achievements ============ */
function Achievements() {
  const items = [
    {
      icon: Trophy,
       image: ".output/public/SIH.jpeg",
      title: "SIH 2025 — 1st Prize, All India",
      meta: "Team INNOVIT1856",
      desc: "Won the Smart India Hackathon 2025 at the All India level with a cash prize of ₹1,50,000.",
      color: C.tomato,
    },
    {
      icon: Award,
       image: ".output/public/NPTEL_D.jpeg",
      title: "NPTEL Discipline Star",
      meta: "Jan — Apr 2026",
      desc: "Recognized by NPTEL/IIT Madras for consistent, disciplined performance across courses.",
      color: C.mustard,
    },
    {
      icon: Award,
       image: ".output/public/NPTEL_M.jpeg",
      title: "NPTEL Motivated Learner",
      meta: "Jul — Dec 2025",
      desc: "Recognized for completing 8+ NPTEL courses with strong scores across four semesters.",
      color: C.mint,
    },
    {
      icon: Briefcase,
       image: ".output/public/Internship.png",
      title: "Internship — Gateway Software Solution",
      meta: "1 Month",
      desc: "Completed a one-month internship, gaining hands-on industry development experience.",
      color: C.plum,
      dark: true,
    },
    {
      icon: Sparkles,
       image: ".output/public/MIME.png",
      title: "Event Coordinator — Mime & Prime",
      meta: "Infinitrix 2025, Maths Club, Sri Sairam IT",
      desc: "Coordinated the Mime & Prime event on International Mathematics Day (14.03.2025).",
      color: C.tomato,
    },
    {
      icon: Star,
       image: ".output/public/IEEE.png",
      title: "IEEE CIS Society Member",
      meta: "Sri Sairam Institute of Technology",
      desc: "Active member of the IEEE Computational Intelligence Society; co-coordinated several technical events.",
      color: C.mustard,
    },
  ];
  return (
    <section id="achievements" className="px-6 py-24 bg-white border-y-2 border-[color:var(--color-ink)]">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Recognition" title="Achievements." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.08 }}
  whileHover={{ y: -6 }}
  className="flex flex-col items-center text-center border-2 border-[color:var(--color-ink)] bg-[color:var(--color-paper)] p-8 shadow-[6px_6px_0_0_var(--color-ink)]"
>
<div className="mb-5 inline-grid h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 place-items-center overflow-hidden border-2 border-[color:var(--color-ink)]" style={{ background: it.color }}>
  {it.image ? (
    <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
  ) : (
    <it.icon className="h-16 w-16 sm:h-20 sm:w-20" />
  )}
</div>
  <div className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-ink)]/60">{it.meta}</div>
  <div className="font-display text-2xl mt-2 leading-snug">{it.title}</div>
  <p className="mt-3 text-base text-[color:var(--color-ink)]/80">{it.desc}</p>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Projects", value: 3, suffix: "+", bg: C.tomato },
    { label: "LeetCode", value: 150, suffix: "+", bg: C.mint },
    { label: "Certs", value: 8, suffix: "", bg: C.plum, dark: true },
  ];
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border-2 border-[color:var(--color-ink)] p-6 shadow-[6px_6px_0_0_var(--color-ink)]"
            style={{ background: s.bg, color: s.dark ? C.paper : C.ink }}
          >
            <div className="font-display text-5xl md:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============ Contact ============ */
function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-3"
        >
          <span className="h-3 w-3 bg-[color:var(--color-mint)]" />
          <span className="font-mono text-xs uppercase tracking-widest">Contact</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl tracking-tight"
        >
          Let's build <span style={{ color: C.mustard }}>something</span> together.
        </motion.h2>
        <p className="mt-6 font-mono text-sm text-[color:var(--color-paper)]/70">
          Available full-time roles. Reply within 24h.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 border-2 border-[color:var(--color-paper)] bg-[color:var(--color-mint)] px-6 py-3 font-bold text-[color:var(--color-ink)] shadow-[5px_5px_0_0_var(--color-paper)] transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" /> srimanikandan1605o@gmail.com
          </a>
          <a
            href="/SriManiKandan.pdf"
            className="inline-flex items-center gap-3 border-2 border-[color:var(--color-paper)] px-6 py-3 font-bold hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-ink)] transition-colors"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ Footer ============ */
function Footer() {
  return (
    <footer className="border-t-2 border-[color:var(--color-paper)]/20 bg-[color:var(--color-ink)] px-6 py-8 text-[color:var(--color-paper)]/70">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <span>© {new Date().getFullYear()} Sri Manikandan · Built with obsession</span>
        <div className="flex items-center gap-4">
          <a href=" https://github.com/SRIMANIKANDAN123" className="hover:text-[color:var(--color-mustard)]">GitHub</a>
          <a href="https://www.linkedin.com/in/sri-manikandan-s-915345282?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-[color:var(--color-mustard)]">LinkedIn</a>
          <a href="mailto:srimanikandan1605@gmail.com" className="hover:text-[color:var(--color-mustard)]">Email</a>
        </div>
      </div>
    </footer>
  );
}

/* ============ Loading ============ */
function LoadingScreen({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] grid place-items-center bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
        >
          <motion.div
            className="font-display text-6xl md:text-8xl"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            SM<span style={{ color: C.tomato }}>.</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============ Root ============ */
export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="relative min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <LoadingScreen done={loaded} />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <PurpleBand />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
