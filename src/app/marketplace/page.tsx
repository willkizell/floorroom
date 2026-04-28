'use client'
import { useState } from 'react'
import { PublicNav } from '@/components/shared/PublicNav'
import { CoachCard } from '@/components/coach/CoachCard'
import { MOCK_COACHES, MOCK_PACKAGES } from '@/lib/mock-data'
import type { ThrowEvent } from '@/lib/types'

const EVENTS: { value: ThrowEvent | 'all'; label: string }[] = [
  { value: 'all', label: 'All events' },
  { value: 'shot_put', label: 'Shot Put' },
  { value: 'discus', label: 'Discus' },
  { value: 'hammer', label: 'Hammer' },
  { value: 'javelin', label: 'Javelin' },
]

const INTAKE_OPTIONS = [
  { value: 'all', label: 'Any intake' },
  { value: 'instant', label: 'Instant join' },
  { value: 'application', label: 'Application only' },
]

export default function MarketplacePage() {
  const [eventFilter, setEventFilter] = useState<string>('all')
  const [intakeFilter, setIntakeFilter] = useState<string>('all')
  const [query, setQuery] = useState('')

  const filtered = MOCK_COACHES.filter(coach => {
    if (eventFilter !== 'all' && !coach.specialties.includes(eventFilter as ThrowEvent)) return false
    if (intakeFilter !== 'all' && coach.intakeMode !== intakeFilter) return false
    if (query && !coach.name.toLowerCase().includes(query.toLowerCase()) && !coach.headline.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <PublicNav />

      <div className="pt-[76px]">
        {/* Filter bar */}
        <div
          className="sticky top-[60px] z-30 border-b px-5 py-3"
          style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}
        >
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px] max-w-[280px]">
              <input
                type="text"
                placeholder="Search coaches..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full h-10 pl-9 pr-3 text-[14px]"
                style={{ borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: 'var(--text-muted)' }}>
                <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {EVENTS.map(e => (
                <button
                  key={e.value}
                  onClick={() => setEventFilter(e.value)}
                  className={`chip ${eventFilter === e.value ? 'active' : ''}`}
                >
                  {e.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {INTAKE_OPTIONS.map(o => (
                <button
                  key={o.value}
                  onClick={() => setIntakeFilter(o.value)}
                  className={`chip ${intakeFilter === o.value ? 'active' : ''}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-5xl mx-auto px-5 py-8">
          <div className="text-[13px] mb-5" style={{ color: 'var(--text-muted)' }}>
            {filtered.length} coach{filtered.length !== 1 ? 'es' : ''} available
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <div className="font-semibold text-[17px] mb-1">No coaches match your filters</div>
              <div className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Try adjusting your event or intake mode filter.</div>
              <button onClick={() => { setEventFilter('all'); setIntakeFilter('all'); setQuery('') }} className="btn-secondary btn-sm mt-4">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(coach => (
                <CoachCard
                  key={coach.id}
                  coach={coach}
                  packages={MOCK_PACKAGES.filter(p => p.coachId === coach.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
