import { MOCK_ATHLETES, EVENT_LABELS } from '@/lib/mock-data'

const athlete = MOCK_ATHLETES[0]

export default function AthleteProgressPage() {
  const prHistory = [
    { date: 'Jan 2024', value: '15.40m', meet: 'Indoor opener' },
    { date: 'Feb 2024', value: '15.60m', meet: 'Indoor conference' },
    { date: 'Mar 2024', value: '15.80m', meet: 'Indoor nationals' },
    { date: 'Apr 2024', value: '16.24m', meet: 'Outdoor opener (PR)' },
  ]

  const weeklyCompletions = [85, 90, 75, 100, 95, 80, 88]

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Progress</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          PR timeline, consistency, and coach feedback history
        </p>
      </div>

      {/* PRs */}
      <div className="card mb-6">
        <h3 className="mb-4">Personal records</h3>
        <div className="flex flex-wrap gap-4 mb-5">
          {Object.entries(athlete.prs).map(([event, pr]) => (
            <div key={event} className="text-center">
              <div className="text-[13px] mb-1" style={{ color: 'var(--text-muted)' }}>{EVENT_LABELS[event]}</div>
              <div className="font-bold text-[24px] tracking-tight">{pr}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PR Timeline */}
      <div className="card mb-6">
        <h3 className="mb-4">Shot put — PR progression</h3>
        <div className="relative">
          {/* Simple timeline */}
          <div className="space-y-3">
            {prHistory.map((entry, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-20 text-[13px] shrink-0" style={{ color: 'var(--text-muted)' }}>{entry.date}</div>
                <div className="flex-1 flex items-center gap-3">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${(parseFloat(entry.value) / 16.5) * 100}%`,
                      background: i === prHistory.length - 1 ? 'var(--blue)' : 'var(--bg-tertiary)',
                      minWidth: '40px',
                    }}
                  />
                  <div className="text-[14px] font-semibold shrink-0">{entry.value}</div>
                  <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{entry.meet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Completion chart */}
      <div className="card mb-6">
        <h3 className="mb-4">Session completion — last 7 weeks</h3>
        <div className="flex items-end gap-2 h-28">
          {weeklyCompletions.map((pct, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="text-[11px] font-medium" style={{ color: 'var(--text-secondary)' }}>{pct}%</div>
              <div
                className="w-full rounded-t"
                style={{
                  height: `${pct}%`,
                  background: pct >= 90 ? 'var(--green)' : pct >= 75 ? 'var(--blue)' : 'var(--amber)',
                  borderRadius: '4px 4px 0 0',
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3 text-[12px]">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded" style={{ background: 'var(--green)' }} /><span style={{ color: 'var(--text-secondary)' }}>Great (90%+)</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded" style={{ background: 'var(--blue)' }} /><span style={{ color: 'var(--text-secondary)' }}>Good (75-89%)</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded" style={{ background: 'var(--amber)' }} /><span style={{ color: 'var(--text-secondary)' }}>Below target</span></div>
        </div>
      </div>

      {/* Goals */}
      <div className="card">
        <h3 className="mb-3">Current goals</h3>
        <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{athlete.goals}</p>
      </div>
    </div>
  )
}
