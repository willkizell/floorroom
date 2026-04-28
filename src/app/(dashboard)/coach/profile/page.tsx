import { MOCK_COACHES, EVENT_LABELS } from '@/lib/mock-data'

const coach = MOCK_COACHES[0]

export default function CoachProfileEditPage() {
  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Marketplace profile</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          This is how athletes see you on the FloorRoom marketplace.
        </p>
      </div>

      {/* Status */}
      <div className="card mb-5 flex items-center justify-between">
        <div>
          <div className="font-semibold text-[15px]">Profile status</div>
          <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
            Your profile is live and accepting athletes.
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge badge-green">Open</span>
          <button className="btn-secondary btn-sm">Pause intake</button>
        </div>
      </div>

      {/* Profile image */}
      <div className="card mb-5">
        <h3 className="mb-4">Profile image</h3>
        <div className="flex items-center gap-4">
          <img src={coach.avatar} alt="" className="avatar" width={72} height={72} style={{ width: 72, height: 72 }} />
          <div>
            <button className="btn-secondary btn-sm">Upload new photo</button>
            <div className="text-[12px] mt-1.5" style={{ color: 'var(--text-muted)' }}>JPG or PNG. Max 4MB. Square crop recommended.</div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="card mb-5">
        <h3 className="mb-4">About</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-[13px] font-medium mb-1">Headline</label>
            <input defaultValue={coach.headline} className="w-full" />
          </div>
          <div>
            <label className="block text-[13px] font-medium mb-1">Bio</label>
            <textarea defaultValue={coach.bio} rows={5} className="w-full" style={{ resize: 'vertical' }} />
          </div>
          <div>
            <label className="block text-[13px] font-medium mb-1">Location</label>
            <input defaultValue={coach.location} className="w-full" style={{ maxWidth: 280 }} />
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="card mb-5">
        <h3 className="mb-4">Specialties</h3>
        <div className="flex flex-wrap gap-2">
          {(['shot_put', 'discus', 'hammer', 'javelin'] as const).map(event => (
            <button
              key={event}
              className={`chip ${coach.specialties.includes(event) ? 'active' : ''}`}
            >
              {EVENT_LABELS[event]}
            </button>
          ))}
        </div>
      </div>

      {/* Response time */}
      <div className="card mb-5">
        <h3 className="mb-4">Expectations</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[13px] font-medium mb-1">Response time</label>
            <select className="w-full">
              <option>Within 24 hours</option>
              <option>Within 48 hours</option>
              <option>2-3 business days</option>
            </select>
          </div>
          <div>
            <label className="block text-[13px] font-medium mb-1">Video turnaround</label>
            <select className="w-full">
              <option>24-48 hours</option>
              <option>48-72 hours</option>
              <option>Within 1 week</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="btn-primary">Save changes</button>
        <button className="btn-secondary">Preview public profile</button>
      </div>
    </div>
  )
}
