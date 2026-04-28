import { MOCK_THREADS, MOCK_ATHLETES } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import { timeAgo } from '@/lib/utils'

const selectedThread = MOCK_THREADS[0]
const mockMessages = [
  { id: '1', senderId: 'athlete-1', text: 'Hey coach, I uploaded the shot put video from today\'s session. Take a look when you get a chance.', sentAt: '2024-04-22T08:30:00Z' },
  { id: '2', senderId: 'coach-1', text: 'Got it. Will review tonight. How did the session feel overall? Any soreness from Monday?', sentAt: '2024-04-22T08:55:00Z' },
  { id: '3', senderId: 'athlete-1', text: 'Session felt solid. Left knee was a bit stiff at the start but loosened up by the third set. Finish position felt more controlled.', sentAt: '2024-04-22T09:00:00Z' },
  { id: '4', senderId: 'coach-1', text: 'Check the session notes for Friday — I updated the implements. Use the 6.25kg for the first 4, then move to competition weight for the last 4.', sentAt: '2024-04-22T09:12:00Z' },
]

export default function MessagesPage() {
  return (
    <div className="flex h-full" style={{ height: '100vh' }}>
      {/* Thread list */}
      <div className="w-[260px] shrink-0 border-r flex flex-col" style={{ borderColor: 'var(--border)' }}>
        <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-[16px]">Messages</h2>
        </div>
        <div className="overflow-y-auto flex-1">
          {MOCK_THREADS.map(thread => {
            const athlete = MOCK_ATHLETES.find(a => a.id === thread.athleteId)
            const isSelected = thread.id === selectedThread.id
            return (
              <div
                key={thread.id}
                className="p-3 border-b cursor-pointer"
                style={{
                  borderColor: 'var(--border)',
                  background: isSelected ? 'var(--blue-light)' : undefined,
                }}
              >
                <div className="flex items-start gap-3">
                  <Avatar src={athlete?.avatar} name={athlete?.name ?? 'A'} size={36} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-[14px]">{athlete?.name}</div>
                      {thread.unreadCount > 0 && (
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style={{ background: 'var(--blue)' }}>
                          {thread.unreadCount}
                        </span>
                      )}
                    </div>
                    <div className="text-[12px] mt-0.5 truncate" style={{ color: 'var(--text-secondary)' }}>
                      {thread.lastMessage.text}
                    </div>
                    <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{timeAgo(thread.updatedAt)}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Thread header */}
        <div className="p-4 border-b flex items-center gap-3" style={{ borderColor: 'var(--border)' }}>
          {(() => {
            const athlete = MOCK_ATHLETES.find(a => a.id === selectedThread.athleteId)
            return (
              <>
                <Avatar src={athlete?.avatar} name={athlete?.name ?? 'A'} size={36} />
                <div>
                  <div className="font-semibold text-[15px]">{athlete?.name}</div>
                  <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>Full Remote Coaching</div>
                </div>
              </>
            )
          })()}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map(msg => {
            const isCoach = msg.senderId === 'coach-1'
            return (
              <div key={msg.id} className={`flex ${isCoach ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[75%] px-4 py-2.5 rounded-[12px] text-[14px] leading-relaxed"
                  style={{
                    background: isCoach ? 'var(--blue)' : 'var(--bg-secondary)',
                    color: isCoach ? 'white' : 'var(--text-primary)',
                    border: isCoach ? 'none' : '1px solid var(--border)',
                  }}
                >
                  {msg.text}
                  <div className="text-[11px] mt-1 opacity-60">{timeAgo(msg.sentAt)}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Input */}
        <div className="p-4 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Message your athlete..."
              className="flex-1"
              style={{ height: 44, borderRadius: 'var(--radius-sm)' }}
            />
            <button className="btn-primary btn-sm px-5">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
