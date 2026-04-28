export default function ProgramBuilderPage() {
  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const sessionTypes: Record<string, { label: string; color: string }> = {
    throws: { label: 'Throws', color: 'var(--blue)' },
    lifting: { label: 'Lifting', color: 'var(--amber)' },
    conditioning: { label: 'Conditioning', color: 'var(--green)' },
    rest: { label: 'Rest', color: 'var(--text-muted)' },
  }

  const mockGrid: Record<string, string> = {
    'Week 1-Mon': 'throws',
    'Week 1-Tue': 'lifting',
    'Week 1-Wed': 'throws',
    'Week 1-Thu': 'lifting',
    'Week 1-Fri': 'throws',
    'Week 1-Sat': 'conditioning',
    'Week 1-Sun': 'rest',
    'Week 2-Mon': 'throws',
    'Week 2-Wed': 'throws',
    'Week 2-Fri': 'lifting',
  }

  return (
    <div className="flex h-full" style={{ height: '100vh' }}>
      {/* Template library sidebar */}
      <div className="w-[220px] shrink-0 border-r flex flex-col" style={{ borderColor: 'var(--border)' }}>
        <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h3 className="text-[15px]">Templates</h3>
        </div>
        <div className="p-3 space-y-2 overflow-y-auto">
          {[
            'Speed-strength block',
            'Competition prep',
            'Base volume block',
            'Peaking week',
            'Recovery week',
            'Off-season hypertrophy',
          ].map(t => (
            <div key={t} className="p-2.5 rounded cursor-pointer text-[13px] font-medium border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Main editor */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Editor header */}
        <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
          <div>
            <input
              defaultValue="New program"
              className="text-[18px] font-semibold border-none outline-none bg-transparent"
              style={{ color: 'var(--text-primary)' }}
            />
            <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>4-week block · Shot put / Discus · Collegiate</div>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary btn-sm">Save draft</button>
            <button className="btn-primary btn-sm">Assign to athletes</button>
          </div>
        </div>

        {/* Week tabs */}
        <div className="flex border-b overflow-x-auto" style={{ borderColor: 'var(--border)' }}>
          {weeks.map((w, i) => (
            <button
              key={w}
              className="px-5 py-3 text-[14px] font-medium shrink-0 border-b-2"
              style={{
                borderColor: i === 0 ? 'var(--blue)' : 'transparent',
                color: i === 0 ? 'var(--blue)' : 'var(--text-secondary)',
              }}
            >
              {w}
            </button>
          ))}
          <button className="px-5 py-3 text-[14px]" style={{ color: 'var(--text-muted)' }}>+ Week</button>
        </div>

        {/* Day grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {days.map(day => (
              <div key={day} className="text-center text-[12px] font-semibold uppercase tracking-wide pb-2" style={{ color: 'var(--text-muted)' }}>
                {day}
              </div>
            ))}
            {days.map(day => {
              const key = `Week 1-${day.slice(0, 3)}`
              const type = mockGrid[key]
              const sessionInfo = type ? sessionTypes[type] : null
              return (
                <div
                  key={day}
                  className="rounded-lg border cursor-pointer min-h-[120px] p-2.5 transition-all"
                  style={{
                    borderColor: sessionInfo ? sessionInfo.color : 'var(--border)',
                    background: sessionInfo ? `${sessionInfo.color}10` : 'var(--bg-secondary)',
                  }}
                >
                  {sessionInfo ? (
                    <div>
                      <div className="text-[12px] font-semibold mb-1" style={{ color: sessionInfo.color }}>{sessionInfo.label}</div>
                      {type === 'throws' && (
                        <div className="space-y-1">
                          <div className="text-[11px] p-1 rounded" style={{ background: 'var(--bg)', color: 'var(--text-secondary)' }}>Standing throws — 5kg × 4×3</div>
                          <div className="text-[11px] p-1 rounded" style={{ background: 'var(--bg)', color: 'var(--text-secondary)' }}>Full approach × 6</div>
                        </div>
                      )}
                      {type === 'lifting' && (
                        <div className="space-y-1">
                          <div className="text-[11px] p-1 rounded" style={{ background: 'var(--bg)', color: 'var(--text-secondary)' }}>Squat 4×4 @ 80%</div>
                          <div className="text-[11px] p-1 rounded" style={{ background: 'var(--bg)', color: 'var(--text-secondary)' }}>RDL 3×5</div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full opacity-40">
                      <span className="text-[11px]">Empty</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
