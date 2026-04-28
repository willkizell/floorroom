import { MOCK_COACHES, MOCK_PACKAGES } from '@/lib/mock-data'
import { CoachCard } from '@/components/coach/CoachCard'

export default function DiscoverCoachesPage() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Discover coaches</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          Browse throws coaches available on FloorRoom
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_COACHES.map(coach => (
          <CoachCard
            key={coach.id}
            coach={coach}
            packages={MOCK_PACKAGES.filter(p => p.coachId === coach.id)}
          />
        ))}
      </div>
    </div>
  )
}
