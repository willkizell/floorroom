import { MOCK_PROGRAMS, MOCK_ATHLETES, EVENT_LABELS } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import Link from 'next/link'

export default function ProgramsPage() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px]">Programs</h1>
          <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
            Manage training plans and templates
          </p>
        </div>
        <Link href="/coach/programs/builder" className="btn-primary btn-sm">
          New program
        </Link>
      </div>

      <div className="space-y-4">
        {MOCK_PROGRAMS.map(prog => {
          const assignedAthletes = prog.assignedAthletes.map(id => MOCK_ATHLETES.find(a => a.id === id)).filter(Boolean)
          return (
            <div key={prog.id} className="card">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="font-semibold text-[16px]">{prog.name}</div>
                  <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {prog.weeks.length} week block · {prog.level}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="btn-secondary btn-sm">Edit</button>
                  <button className="btn-secondary btn-sm">Assign</button>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {prog.targetEvent.map(e => (
                  <span key={e} className="badge badge-blue">{EVENT_LABELS[e]}</span>
                ))}
              </div>

              <p className="text-[14px] mb-3" style={{ color: 'var(--text-secondary)' }}>{prog.description}</p>

              <div className="border-t pt-3" style={{ borderColor: 'var(--border)' }}>
                <div className="text-[12px] font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Assigned athletes</div>
                <div className="flex items-center gap-2">
                  {assignedAthletes.map(athlete => athlete && (
                    <div key={athlete.id} className="flex items-center gap-1.5">
                      <Avatar src={athlete.avatar} name={athlete.name} size={24} />
                      <span className="text-[13px]">{athlete.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
