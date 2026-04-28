import Link from 'next/link'
import { PublicNav } from '@/components/shared/PublicNav'
import { CoachCard } from '@/components/coach/CoachCard'
import { MOCK_COACHES, MOCK_PACKAGES } from '@/lib/mock-data'

export default function LandingPage() {
  const featuredCoaches = MOCK_COACHES.slice(0, 3)

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>
      <PublicNav />

      {/* Hero */}
      <section className="pt-[120px] pb-[80px] px-5 max-w-5xl mx-auto">
        <div className="max-w-[680px]">
          <div className="badge badge-blue mb-5">Now in beta</div>
          <h1 className="text-[40px] md:text-[52px] font-bold tracking-tight leading-[1.1] mb-6">
            The operating system for serious throws coaching.
          </h1>
          <p className="text-[17px] leading-relaxed max-w-[520px] mb-8" style={{ color: 'var(--text-secondary)' }}>
            FloorRoom connects elite throws coaches with athletes who are ready to work. Structured programming, video review, and a professional coaching workspace — all in one platform.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/marketplace" className="btn-primary">Browse coaches</Link>
            <Link href="/onboarding/coach" className="btn-secondary">Become a coach</Link>
          </div>
          <div className="flex items-center gap-6 mt-8">
            {[
              { value: '120+', label: 'Coaches' },
              { value: '1,400+', label: 'Athletes' },
              { value: '4', label: 'Events covered' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-bold text-[22px] tracking-tight">{stat.value}</div>
                <div className="text-[13px]" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--blue)' }}>For athletes</div>
              <h2 className="mb-5">Find a coach who knows your event.</h2>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Build your profile', desc: 'Add your PRs, event history, goals, and training videos. Your profile is your application.' },
                  { step: '02', title: 'Browse and compare', desc: 'Filter coaches by event, price, availability, and intake mode. Read their policies and watch their athletes.' },
                  { step: '03', title: 'Select a package', desc: 'Apply or join instantly depending on the coach. Programming starts the next week.' },
                  { step: '04', title: 'Work with your coach', desc: 'Upload videos, receive structured feedback, follow your weekly plan, track your PRs.' },
                ].map(item => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-[13px] font-semibold shrink-0 w-7 pt-0.5" style={{ color: 'var(--text-muted)' }}>{item.step}</div>
                    <div>
                      <div className="font-semibold text-[15px] mb-0.5">{item.title}</div>
                      <div className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[12px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--blue)' }}>For coaches</div>
              <h2 className="mb-5">Run your coaching business on one platform.</h2>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Set up your profile and offers', desc: 'Define your packages, set your capacity, and choose whether athletes apply or join instantly.' },
                  { step: '02', title: 'Manage your roster', desc: 'See all your athletes in one place. Assign programs, review videos, and track progress.' },
                  { step: '03', title: 'Deliver coaching at scale', desc: 'Structured program builder, video review queue, and messaging — everything you need to coach remotely.' },
                  { step: '04', title: 'Get paid reliably', desc: 'Automated billing, payout tracking, and athlete subscription management handled for you.' },
                ].map(item => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-[13px] font-semibold shrink-0 w-7 pt-0.5" style={{ color: 'var(--text-muted)' }}>{item.step}</div>
                    <div>
                      <div className="font-semibold text-[15px] mb-0.5">{item.title}</div>
                      <div className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach showcase */}
      <section className="py-16 px-5 border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--blue)' }}>Marketplace</div>
              <h2>Coaches on FloorRoom</h2>
            </div>
            <Link href="/marketplace" className="btn-secondary btn-sm">View all coaches</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredCoaches.map(coach => (
              <CoachCard
                key={coach.id}
                coach={coach}
                packages={MOCK_PACKAGES.filter(p => p.coachId === coach.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Platform features */}
      <section className="py-16 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[12px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--blue)' }}>Platform</div>
          <h2 className="mb-10 max-w-md">Built for the specifics of throws coaching.</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { title: 'Video review queue', desc: 'Coaches see a clean queue of athlete submissions. Frame-level annotations and written feedback — structured, not scattered.' },
              { title: 'Periodized program builder', desc: 'Build week-by-week training plans with event-specific exercise libraries. Assign plans to individual athletes or groups.' },
              { title: 'Event-specific profiles', desc: 'Athletes track PRs per event. Shot put, discus, hammer, javelin — each with the right fields for throws performance.' },
              { title: 'Application or instant join', desc: 'Coaches choose how they take on athletes. Define intake questions, review applications, or open the door to instant sign-up.' },
              { title: 'Structured messaging', desc: 'Communication that stays on-topic. Not a chat app — a workspace. Pinned notes, shared files, and clear coach-athlete context.' },
              { title: 'Coach billing and payouts', desc: 'Define packages with monthly, weekly, or one-time pricing. Athlete billing is handled automatically.' },
            ].map(f => (
              <div key={f.title} className="flex gap-4">
                <div className="w-px rounded-full shrink-0" style={{ background: 'var(--border-strong)' }} />
                <div>
                  <div className="font-semibold text-[15px] mb-1">{f.title}</div>
                  <div className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-16 px-5 border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[12px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--blue)' }}>Pricing for coaches</div>
          <h2 className="mb-2">Start free. Keep 92% of what you earn.</h2>
          <p className="text-[15px] mb-8" style={{ color: 'var(--text-secondary)' }}>
            FloorRoom charges an 8% platform fee on athlete payments. No monthly subscription. No seat fees.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
            {[
              { name: 'Starter', price: 'Free', desc: 'Up to 5 athletes. Full feature access. 8% transaction fee.' },
              { name: 'Professional', price: '$49/mo', desc: 'Unlimited athletes. Priority support. 6% transaction fee.', featured: true },
              { name: 'Elite', price: '$129/mo', desc: 'White-label profile option. 4% transaction fee. Early features.' },
            ].map(tier => (
              <div
                key={tier.name}
                className="card"
                style={{
                  border: tier.featured ? '2px solid var(--blue)' : '1px solid var(--border)',
                  background: tier.featured ? 'var(--blue-light)' : 'var(--bg)',
                }}
              >
                <div className="font-semibold text-[14px] mb-1">{tier.name}</div>
                <div className="font-bold text-[24px] tracking-tight mb-3">{tier.price}</div>
                <div className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{tier.desc}</div>
                {tier.featured && (
                  <div className="mt-4">
                    <Link href="/onboarding/coach" className="btn-primary btn-sm w-full text-center block">Get started</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-5 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="font-bold text-[16px] mb-1">FloorRoom</div>
            <div className="text-[13px]" style={{ color: 'var(--text-muted)' }}>The throws coaching marketplace.</div>
          </div>
          <div className="flex flex-wrap gap-8 text-[14px]">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-[13px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Product</div>
              <Link href="/marketplace" style={{ color: 'var(--text-secondary)' }}>Marketplace</Link>
              <Link href="/onboarding/coach" style={{ color: 'var(--text-secondary)' }}>For coaches</Link>
              <Link href="/onboarding/athlete" style={{ color: 'var(--text-secondary)' }}>For athletes</Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-[13px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Account</div>
              <Link href="/sign-in" style={{ color: 'var(--text-secondary)' }}>Sign in</Link>
              <Link href="/onboarding/athlete" style={{ color: 'var(--text-secondary)' }}>Create account</Link>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t text-[13px]" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
          2024 FloorRoom. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
