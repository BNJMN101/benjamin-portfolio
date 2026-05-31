'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { staggerContainer, staggerItem } from './reveal'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Project Collaborator',
    avatar: '/avatars/person-1.png',
    text: 'Delivered clean UI components quickly and was easy to work with. Took feedback well and iterated without friction.',
  },
  {
    name: 'Marcus Webb',
    role: 'Design Partner',
    avatar: '/avatars/person-2.png',
    text: 'Consistent attention to detail in layout and responsiveness. The final implementation matched the designs closely across all screen sizes.',
  },
  {
    name: 'Daniel Park',
    role: 'Client (Freelance Project)',
    avatar: '/avatars/person-3.png',
    text: 'Turned a rough concept into a working prototype faster than expected. Communication was clear throughout the process.',
  },
]

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Testimonials"
        title="Kind words from collaborators"
        description="People I've had the privilege of building alongside."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.figure
            key={t.name}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative flex flex-col rounded-3xl glass p-6 transition-shadow duration-300 hover:purple-glow"
          >
            <Quote className="h-7 w-7 text-primary/40" />
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
              {t.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Image
                src={t.avatar || '/placeholder.svg'}
                alt={t.name}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
