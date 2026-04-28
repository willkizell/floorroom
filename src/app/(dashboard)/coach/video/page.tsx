import { MOCK_VIDEOS, MOCK_ATHLETES, EVENT_LABELS } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import { timeAgo } from '@/lib/utils'

export default function VideoReviewPage() {
  const pending = MOCK_VIDEOS.filter(v => v.status === 'pending_review')
  const reviewed = MOCK_VIDEOS.filter(v => v.status === 'reviewed')
  const selected = pending[0] ?? reviewed[0]
  const selectedAthlete = MOCK_ATHLETES.find(a => a.id === selected?.athleteId)

  return (
    <div className="h-full flex" style={{ height: 'calc(100vh - 0px)' }}>
      {/* Queue sidebar */}
      <div className="w-[280px] shrink-0 border-r flex flex-col" style={{ borderColor: 'var(--border)' }}>
        <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-[16px]">Video review</h2>
          <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{pending.length} pending</div>
        </div>

        <div className="overflow-y-auto flex-1">
          {pending.length > 0 && (
            <div>
              <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
                Awaiting review
              </div>
              {pending.map(v => {
                const athlete = MOCK_ATHLETES.find(a => a.id === v.athleteId)
                return (
                  <div
                    key={v.id}
                    className="p-3 border-b cursor-pointer"
                    style={{ borderColor: 'var(--border)', background: v.id === selected?.id ? 'var(--blue-light)' : undefined }}
                  >
                    <img src={v.thumbnailUrl} alt="" className="w-full h-28 object-cover rounded mb-2" style={{ borderRadius: 'var(--radius-sm)' }} />
                    <div className="font-medium text-[13px] truncate">{v.title}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar src={athlete?.avatar} name={athlete?.name ?? 'A'} size={18} />
                      <span className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{athlete?.name}</span>
                    </div>
                    <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{EVENT_LABELS[v.event]} · {timeAgo(v.uploadedAt)}</div>
                  </div>
                )
              })}
            </div>
          )}

          {reviewed.length > 0 && (
            <div>
              <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
                Reviewed
              </div>
              {reviewed.map(v => {
                const athlete = MOCK_ATHLETES.find(a => a.id === v.athleteId)
                return (
                  <div key={v.id} className="p-3 border-b cursor-pointer" style={{ borderColor: 'var(--border)' }}>
                    <img src={v.thumbnailUrl} alt="" className="w-full h-28 object-cover rounded mb-2" style={{ borderRadius: 'var(--radius-sm)' }} />
                    <div className="font-medium text-[13px] truncate">{v.title}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar src={athlete?.avatar} name={athlete?.name ?? 'A'} size={18} />
                      <span className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{athlete?.name}</span>
                    </div>
                    <span className="badge badge-green text-[11px]">Reviewed</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main review pane */}
      {selected ? (
        <div className="flex-1 overflow-y-auto">
          {/* Video */}
          <div style={{ background: '#111', aspectRatio: '16/9', position: 'relative' }}>
            <img src={selected.thumbnailUrl} alt="" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.9)' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 4l12 6-12 6V4z" fill="#0F172A"/>
                </svg>
              </button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-2 flex items-center gap-3"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
            >
              <div className="h-1 flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }}>
                <div className="h-full w-[30%] rounded-full" style={{ background: 'white' }} />
              </div>
              <span className="text-white text-[13px]">0:45 / 1:32</span>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-start gap-4 mb-5">
              <Avatar src={selectedAthlete?.avatar} name={selectedAthlete?.name ?? 'A'} size={40} />
              <div>
                <div className="font-semibold text-[16px]">{selected.title}</div>
                <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                  {selectedAthlete?.name} · {EVENT_LABELS[selected.event]} · {timeAgo(selected.uploadedAt)}
                </div>
              </div>
            </div>

            {selected.feedback ? (
              <div>
                <h3 className="mb-3">Feedback sent</h3>
                <div className="card mb-4">
                  <p className="text-[14px] leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{selected.feedback.text}</p>
                  <div className="divider" />
                  <div className="mb-3">
                    <div className="text-[13px] font-semibold mb-2">Key points</div>
                    <ul className="space-y-1">
                      {selected.feedback.keyPoints.map((pt, i) => (
                        <li key={i} className="text-[13px] flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--blue)' }}>—</span> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {selected.feedback.drills && (
                    <div>
                      <div className="text-[13px] font-semibold mb-2">Prescribed drills</div>
                      <ul className="space-y-1">
                        {selected.feedback.drills.map((d, i) => (
                          <li key={i} className="text-[13px] flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--green)' }}>+</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="mb-3">Send feedback</h3>
                <textarea
                  placeholder="Write your technical feedback here. Be specific — reference positions, timing cues, and corrections."
                  rows={5}
                  className="w-full mb-3"
                  style={{ borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', padding: '12px', fontSize: '14px', resize: 'vertical' }}
                />
                <div className="mb-3">
                  <div className="text-[13px] font-medium mb-2">Key points (one per line)</div>
                  <textarea
                    placeholder="Left side breaks too early&#10;Release angle looks correct&#10;..."
                    rows={3}
                    style={{ borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', padding: '12px', fontSize: '14px', width: '100%', resize: 'vertical' }}
                  />
                </div>
                <div className="mb-4">
                  <div className="text-[13px] font-medium mb-2">Drill recommendations</div>
                  <textarea
                    placeholder="Left-arm-pinned standing throws x 5&#10;..."
                    rows={2}
                    style={{ borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', padding: '12px', fontSize: '14px', width: '100%', resize: 'vertical' }}
                  />
                </div>
                <button className="btn-primary">Send feedback to athlete</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="font-semibold text-[17px] mb-1">No videos in queue</div>
            <div className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>When athletes upload videos, they will appear here.</div>
          </div>
        </div>
      )}
    </div>
  )
}
