'use client'

import { motion } from 'framer-motion'
import {
  Award,
  BookOpen,
  Boxes,
  GitFork,
  Github,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={cn(
        'group relative overflow-hidden rounded-3xl glass p-6 transition-shadow duration-300 hover:purple-glow',
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  )
}

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
]

const contributions = Array.from({ length: 91 }, (_, i) => {
  const seed = (i * 73 + 13) % 100
  const level = seed > 82 ? 3 : seed > 60 ? 2 : seed > 35 ? 1 : 0
  return level
})

const levelClass = [
  'bg-white/[0.06]',
  'bg-primary/25',
  'bg-primary/60',
  'bg-primary',
]

export function BentoGrid() {
  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="About Me"
        title="Building, learning, improving"
        description="A snapshot of my journey as a full-stack developer and problem solver."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]"
      >
        {/* About Me */}
        <Card className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="h-5 w-5" />
          </span>

          <h3 className="text-xl font-semibold">Who I Am</h3>

          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            I’m a self-driven full-stack developer focused on building fast,
            clean, and scalable web apps. I enjoy turning ideas into real
            products — from UI design to backend logic — and I care a lot about
            performance and user experience.
          </p>

          <p className="mt-auto pt-6 text-sm text-muted-foreground">
            Based in Lagos, Nigeria · Open to remote opportunities
          </p>
        </Card>

        {/* Experience */}
        <Card>
          <span className="text-4xl font-semibold text-gradient">1+</span>
          <p className="mt-2 text-sm text-muted-foreground">
            Year of consistent coding
          </p>
        </Card>

        {/* Projects */}
        <Card>
          <span className="text-4xl font-semibold text-gradient">15+</span>
          <p className="mt-2 text-sm text-muted-foreground">
            Personal & practice projects
          </p>
        </Card>

        {/* Tech Stack */}
        <Card className="sm:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <Boxes className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium">Tech Stack</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </Card>

        {/* GitHub Activity */}
        <Card className="sm:col-span-2 lg:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <Github className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium">Coding Consistency</h3>
          </div>

          <div className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1.5">
            {contributions.map((lvl, i) => (
              <span
                key={i}
                className={cn('aspect-square w-full rounded-[3px]', levelClass[lvl])}
              />
            ))}
          </div>

          <p className="mt-auto pt-4 text-xs text-muted-foreground">
            Building consistency, not just intensity.
          </p>
        </Card>

        {/* Learning */}
        <Card>
          <div className="mb-3 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium">Currently Learning</h3>
          </div>

          <ul className="mt-1 flex flex-col gap-2 text-sm text-muted-foreground">
            <li>Advanced React patterns</li>
            <li>Backend architecture</li>
            <li>System design basics</li>
          </ul>
        </Card>

        {/* Focus */}
        <Card>
          <div className="mb-3 flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium">Focus</h3>
          </div>

          <ul className="mt-1 flex flex-col gap-2 text-sm text-muted-foreground">
            <li>Clean UI systems</li>
            <li>Full-stack mastery</li>
            <li>Problem solving</li>
          </ul>
        </Card>

        {/* Open Source / Growth */}
        <Card className="sm:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <GitFork className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium">Growth Mindset</h3>
          </div>

          <div className="flex items-end gap-6">
            <div>
              <span className="text-3xl font-semibold text-gradient">∞</span>
              <p className="text-xs text-muted-foreground">Learning mindset</p>
            </div>

            <div>
              <span className="text-3xl font-semibold text-gradient">Daily</span>
              <p className="text-xs text-muted-foreground">Consistency</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}