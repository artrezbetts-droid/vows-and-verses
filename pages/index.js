import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Heart, Wand2, Star, Quote, ShieldCheck, Clock, ArrowRight, PlayCircle } from 'lucide-react';

const GPT_LINK = "https://chatgpt.com/g/g-68ba379c921c819197665d3d081c6d4f-vows-and-verses";

const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>{children}</section>
);

const Feature = ({ icon: Icon, title, children }) => (
  <div className="border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
    <div className="p-6 border-b border-slate-200/60">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
    <div className="p-6 text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

const Tick = ({ children }) => (
  <div className="flex items-start gap-3">
    <Check className="mt-1 h-5 w-5" />
    <p className="text-slate-700">{children}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <img src="/logo.png" alt="Vows & Verses Logo" className="h-8 w-8 object-contain" />
            Vows & Verses
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={GPT_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">
              Try the GPT <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-pink-100 to-indigo-100 blur-3xl" />
          <div className="absolute -bottom-24 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-100 to-pink-100 blur-3xl" />
        </div>
        <Section className="py-16 sm:py-24 text-center">
          <img src="/wedding-hero.jpg" alt="Wedding couple holding hands" className="mx-auto rounded-3xl shadow-md mb-8 max-h-96 object-cover" />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            Craft heartfelt vows & speeches in minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Vows & Verses is a custom AI writing assistant that transforms your memories into polished vows, toasts, and speeches—personal, elegant, and truly you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href={GPT_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-black text-white hover:opacity-90">
              <Wand2 className="h-5 w-5" /> Start Writing Now
            </a>
            <a href="#how" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
              <PlayCircle className="h-5 w-5" /> See how it works
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-600">
            {["Wedding vows","Best man & maid of honor","Parent & friend toasts","Anniversaries & proposals"].map((text) => (
              <div key={text} className="px-3 py-2 rounded-xl border border-slate-200 bg-white/60 backdrop-blur">
                {text}
              </div>
            ))}
          </div>
        </Section>
      </header>

      {/* TRUST */}
      <Section className="py-10">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="h-5 w-5" /> Private by design
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Clock className="h-5 w-5" /> 5–10 minute drafts
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Star className="h-5 w-5" /> Polished & professional tone
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="py-8 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need for a perfect speech</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Guided prompts, tone controls, and tailored templates to suit your role and relationship.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={Sparkles} title="Guided storytelling">
            Answer a few thoughtful questions and watch your story become a compelling draft with a strong beginning, heartfelt middle, and memorable closing.
          </Feature>
          <Feature icon={Heart} title="Tone you can dial in">
            Choose romantic, funny, spiritual, elegant, or keep it casual—your voice stays authentic, not robotic.
          </Feature>
          <Feature icon={Wand2} title="Instant polishing">
            Built-in editor for length, flow, and clarity—tighten jokes, smooth transitions, and fix grammar in one click.
          </Feature>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="py-8 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How it works</h2>
            <div className="mt-6 space-y-4">
              <Tick>Open <a href={GPT_LINK} target="_blank" rel="noopener noreferrer" className="underline">Vows & Verses</a> and select your occasion (vows, toast, speech).</Tick>
              <Tick>Answer a few prompts about your relationship, memories, and tone.</Tick>
              <Tick>Generate your first draft in minutes—then refine with one-click edits.</Tick>
              <Tick>Export your final version to PDF or keep it in your notes.</Tick>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={GPT_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">
                Start free <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#templates" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-slate-300 hover:bg-slate-50">
                View templates
              </a>
            </div>
          </div>
          <div className="border border-slate-200/60 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">What you’ll get</h3>
            <div className="space-y-3 mt-4 text-slate-700">
              <Tick>A heartfelt, original draft tailored to your story</Tick>
              <Tick>Concise versions for 60–90 second toasts</Tick>
              <Tick>Optional scripture, poetry, or quotes</Tick>
              <Tick>Editing passes for tone, length, and clarity</Tick>
            </div>
          </div>
        </div>
      </Section>

      {/* STOCK WEDDING IMAGES SECTION */}
      <Section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Celebrate Every Moment</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A glimpse of the emotions and memories we help you put into words.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <img src="/wedding-1.jpg" alt="Bride and groom smiling" className="rounded-2xl shadow-md object-cover h-64 w-full" />
          <img src="/wedding-2.jpg" alt="Wedding rings on book" className="rounded-2xl shadow-md object-cover h-64 w-full" />
          <img src="/wedding-3.jpg" alt="Best man giving speech" className="rounded-2xl shadow-md object-cover h-64 w-full" />
        </div>
      </Section>

      {/* TEMPLATES */}
      <Section id="templates" className="py-8 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Included templates</h2>
          <p className="mt-3 text-slate-600">Jump-start your writing with structures that work.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Classic Wedding Vows", points: ["Promise-focused structure","Balance of romance & sincerity","Optional faith elements"] },
            { title: "Best Man / Maid of Honor", points: ["Light humor + warmth","1–3 stories that land","Memorable closing toast"] },
            { title: "Parent & Friend Toasts", points: ["60–120 second versions","Gentle, inclusive tone","Optional spiritual notes"] },
          ].map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200/60">
              <div className="p-6 border-b border-slate-200/60">
                <h3 className="text-xl font-semibold">{t.title}</h3>
              </div>
              <div className="p-6 space-y-2 text-slate-700">
                {t.points.map((p) => <Tick key={p}>{p}</Tick>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-8 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Kind words</h2>
          <p className="mt-3 text-slate-600">Real reactions from first-draft users</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "I had tears reading the first draft. It sounded exactly like me.", name: "Alex R." },
            { quote: "The tone sliders are clutch—landed the perfect balance of funny and sweet.", name: "Morgan T." },
            { quote: "Turned scattered notes into a polished toast in 10 minutes.", name: "Priya K." },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200/60 p-6">
              <Quote className="h-6 w-6 opacity-60" />
              <p className="mt-4 text-slate-800">{t.quote}</p>
              <p className="mt-3 text-sm text-slate-500">{t.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" className="py-8 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade if you want advanced editing or premium templates.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <div className="rounded-2xl border-2 border-transparent hover:border-slate-200 transition">
            <div className="p-6 border-b border-slate-200/60">
              <h3 className="text-xl font-semibold">Free</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-3xl font-bold">$0</div>
              <div className="space-y-2">
                <Tick>Core prompts & guidance</Tick>
                <Tick>1 draft per occasion</Tick>
                <Tick>Basic edits</Tick>
              </div>
              <a href={GPT_LINK} target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Start free</a>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-indigo-200 shadow-sm">
            <div className="p-6 border-b border-slate-200/60 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Plus</h3>
              <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">Popular</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-3xl font-bold">$9<span className="text-base font-semibold">/occasion</span></div>
              <div className="space-y-2">
                <Tick>Unlimited rewrites</Tick>
                <Tick>Premium templates</Tick>
                <Tick>Quick tone presets</Tick>
              </div>
              <a href={GPT_LINK} target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Upgrade</a>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-transparent hover:border-slate-200 transition">
            <div className="p-6 border-b border-slate-200/60">
              <h3 className="text-xl font-semibold">Pro</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-3xl font-bold">$29<span className="text-base font-semibold">/month</span></div>
              <div className="space-y-2">
                <Tick>All Plus features</Tick>
                <Tick>Brand-safe editing for pros</Tick>
                <Tick>Priority support</Tick>
              </div>
              <a href={GPT_LINK} target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Go Pro</a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-8 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
        </div>
        <div className="w-full max-w-3xl mx-auto space-y-3">
          <details className="border rounded-xl p-4">
            <summary className="font-medium cursor-pointer">Do I need a ChatGPT subscription?</summary>
            <p className="mt-2 text-slate-600">You can use the free version to generate drafts. For advanced editing tools, Plus is recommended.</p>
          </details>
          <details className="border rounded-xl p-4">
            <summary className="font-medium cursor-pointer">Is my information private?</summary>
            <p className="mt-2 text-slate-600">Yes—your inputs are used only to generate your draft and aren’t shared publicly. Avoid sensitive data.</p>
          </details>
          <details className="border rounded-xl p-4">
            <summary className="font-medium cursor-pointer">Can I change the tone after generating?</summary>
            <p className="mt-2 text-slate-600">Absolutely. Use one-click tone refinements (romantic, funny, spiritual, elegant, and more) or ask for specific edits.</p>
          </details>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to write something unforgettable?</h3>
          <p className="mt-3 text-slate-600">In a few minutes you’ll have a heartfelt, polished draft you’re proud to say out loud.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={GPT_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-black text-white hover:opacity-90">
              Open Vows & Verses <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border border-slate-300 hover:bg-slate-50">
              Explore features
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/60 py-10">
        <Section className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Vows & Verses
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </div>
          <p>© {new Date().getFullYear()} Vows & Verses. All rights reserved.</p>
        </Section>
      </footer>
    </div>
  );
}