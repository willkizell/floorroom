import { MOCK_THREADS, MOCK_COACHES } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import { timeAgo } from '@/lib/utils'

const selectedThread = MOCK_THREADS[0]
const mockMessages = [
  { id: '1', senderId: 'athlete-1', text: 'Hey coach, I uploaded the shot put video from today\'s session. Take a look when you get a chance.', sentAt: '2024-04-22T08:30:00Z' },
  { id: '2', senderId: 'coach-1', text: 'Got it. Will review tonight. How did the session feel overall? Any soreness from Monday?', sentAt: '2024-04-22T08:55:00Z' },
  { id: '3', senderId: 'athlete-1', text: 'Session felt solid. Left knee was a bit stiff at the start but loosened up by the third set. Finish position felt more controlled.', sentAt: '2024-04-22T09:00:00Z' },
  { id: '4', senderId: 'coach-1', text: 'Check the session notes for Friday — I updated the implements. Use the 6.25kg for the first 4, then move to competition weight for the last 4.', sentAt: '2024-04-22T09:12:00Z' },
]

export default function AthleteMessagesPage() {
  const coach = MOCK_COACHES.find(c => c.id === selectedThread.coachId)

  return (
    <div className="flex flex-col h-full" style={{ height: '100vh' }}>
      <div className="p-4 border-b flex items-center gap-3" style={{ borderColor: 'var(--border)' }}>
        {coach && <Avatar src={coach.avatar} name={coach.name} size={36} />}
        <div>
          <div className="font-semibold text-[15px]">{coach?.name}</div>
          <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>Full Remote Coaching</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mockMessages.map(msg => {
          const isAthlete = msg.senderId === 'athlete-1'
          return (
            <div key={msg.id} className={`flex ${isAthlete ? 'justify-end' : 'justify-start'}`}>
              {!isAthlete && coach && <Avatar src={coach.avatar} name={coach.name} size={32} className="mr-2 shrink-0" />}
              <div
                className="max-w-[75%] px-4 py-2.5 rounded-[12px] text-[14px] leading-relaxed"
                style={{
                  background: isAthlete ? 'var(--blue)' : 'var(--bg-secondary)',
                  color: isAthlete ? 'white' : 'var(--text-primary)',
                  border: isAthlete ? 'none' : '1px solid var(--border)',
                }}
              >
                {msg.text}
                <div className="text-[11px] mt-1 opacity-60">{timeAgo(msg.sentAt)}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-4 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Message your coach..."
            className="flex-1"
            style={{ height: 44, borderRadius: 'var(--radius-sm)' }}
          />
          <button className="btn-primary btn-sm px-5">Send</button>
        </div>
      </div>
    </div>
  )
}
