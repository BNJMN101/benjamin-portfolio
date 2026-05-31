'use client'

import emailjs from '@emailjs/browser'
import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
  Twitter,
  MessageCircle
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Errors = { name?: string; email?: string; message?: string }

const socials = [
  { label: 'GitHub', href: 'https://github.com/BNJMN101', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamin-akinjiyan-16a649374/', icon: Linkedin },
  { label: 'Twitter / X', href: 'https://x.com/BNJMNX999', icon: Twitter },
  { label: 'Email', href: 'mailto:benjaminxdev@gmail.com', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/2347025302446', icon: MessageCircle },
]

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function validate() {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Enter a valid email address'
    if (values.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
  e.preventDefault()
  if (!validate()) return

  setStatus('loading')

  try {
    await emailjs.send(
      'service_k98k52z',
      'template_f4k2wsc',
      {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      },
      'tjdnnW1zsvjlP1ocI'
    )

    setStatus('success')
    setValues({ name: '', email: '', message: '' })

    setTimeout(() => setStatus('idle'), 4000)
  } catch (err) {
    console.error(err)
    setStatus('idle')
  }
}

  const fieldClass =
    'w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60'

  return (
    <section id="contact" className="relative mx-auto max-w-[1400px] px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-3xl glass p-8">
            <div>
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                I&apos;m currently available for freelance work and full-time
                opportunities. Let&apos;s create something exceptional together.
              </p>
            </div>
            <ul className="mt-8 flex flex-col gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <s.icon className="h-4 w-4" />
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl glass p-8"
          >
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={values.name}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, name: e.target.value }))
                  }
                  className={fieldClass}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={values.email}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, email: e.target.value }))
                  }
                  className={fieldClass}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={values.message}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, message: e.target.value }))
                  }
                  className={`${fieldClass} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent disabled:opacity-80 purple-glow"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === 'loading' ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" /> Message sent
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
