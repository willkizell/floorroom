import { MOCK_VIDEOS, EVENT_LABELS } from '@/lib/mock-data'
import { timeAgo } from '@/lib/utils'

const athleteVideos = MOCK_VIDEOS.filter(v => v.athleteId === 'athlete-1')

export default function AthleteVideoPage() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px]">Video</h1>
          <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
            Your video submissions and coach feedback
          </p>
        </div>
        <button className="btn-primary btn-sm">Upload video</button>
      </div>

      {/* Upload zone */}
      <div
        className="border-2 border-dashed rounded-xl p-8 text-center mb-8 cursor-pointer transition-all"
        style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius-lg)' }}
      >
        <div className="font-semibold text-[15px] mb-1">Drop a video here</div>
        <div className="text-[14px] mb-3" style={{ color: 'var(--text-secondary)' }}>Or click to select a file. MP4 or MOV, max 500MB.</div>
        <button className="btn-secondary btn-sm">Browse files</button>
      </div>

      {/* Video list */}
      <h3 className="mb-4">Submitted videos</h3>
      <div className="space-y-4">
        {athleteVideos.map(v => (
          <div key={v.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="flex gap-4 p-4">
              <div className="relative w-32 h-20 shrink-0 rounded overflow-hidden" style={{ borderRadius: 'var(--radius-sm)' }}>
                <img src={v.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                    <path d="M6 4l12 6-12 6V4z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-[15px]">{v.title}</div>
                    <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {EVENT_LABELS[v.event]} · {timeAgo(v.uploadedAt)}
                    </div>
                  </div>
                  <span className={`badge shrink-0 ${v.status === 'reviewed' ? 'badge-green' : 'badge-amber'}`}>
                    {v.status === 'reviewed' ? 'Feedback received' : 'Awaiting review'}
                  </span>
                </div>
              </div>
            </div>

            {v.feedback && (
              <div className="border-t p-4" style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}>
                <div className="text-[13px] font-semibold mb-2">Coach feedback</div>
                <p className="text-[14px] leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{v.feedback.text}</p>
                <div className="space-y-1">
                  {v.feedback.keyPoints.map((pt, i) => (
                    <div key={i} className="text-[13px] flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--blue)' }}>—</span> {pt}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
