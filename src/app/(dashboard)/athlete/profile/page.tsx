import { MOCK_ATHLETES, EVENT_LABELS, LEVEL_LABELS } from '@/lib/mock-data'

const athlete = MOCK_ATHLETES[0]

export default function AthleteProfilePage() {
  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Profile</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          Your public athlete profile and visibility settings
        </p>
      </div>

      {/* Profile image */}
      <div className="card mb-5">
        <h3 className="mb-4">Profile photo</h3>
        <div className="flex items-center gap-4">
          <img src={athlete.avatar} alt="" className="avatar" width={72} height={72} style={{ width: 72, height: 72 }} />
          <div>
            <button className="btn-secondary btn-sm">Upload photo</button>
            <div className="text-[12px] mt-1.5" style={{ color: 'var(--text-muted)' }}>Square crop recommended, JPG or PNG</div>
          </div>
        </div>
      </div>

      {/* Basic info */}
      <div className="card mb-5">
        <h3 className="mb-4">Basic information</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[13px] font-medium mb-1">Name</label>
            <input defaultValue={athlete.name} className="w-full" />
          </div>
          <div>
            <label className="block text-[13px] font-medium mb-1">Location</label>
            <input defaultValue={athlete.location} className="w-full" />
          </div>
          <div>
            <label className="block text-[13px] font-medium mb-1">School / Club</label>
            <input defaultValue={athlete.schoolOrClub} className="w-full" />
          </div>
          <div>
            <label className="block text-[13px] font-medium mb-1">Level</label>
            <select className="w-full">
              {Object.entries(LEVEL_LABELS).map(([k, v]) => (
                <option key={k} value={k} selected={k === athlete.level}>{v}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Athletic profile */}
      <div className="card mb-5">
        <h3 className="mb-4">Athletic profile</h3>
        <div className="mb-3">
          <label className="block text-[13px] font-medium mb-2">Primary event</label>
          <div className="flex flex-wrap gap-2">
            {(['shot_put', 'discus', 'hammer', 'javelin'] as const).map(event => (
              <button
                key={event}
                className={`chip ${athlete.primaryEvent === event ? 'active' : ''}`}
              >
                {EVENT_LABELS[event]}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-[13px] font-medium mb-2">Secondary events</label>
          <div className="flex flex-wrap gap-2">
            {(['shot_put', 'discus', 'hammer', 'javelin'] as const).map(event => (
              <button
                key={event}
                className={`chip ${athlete.secondaryEvents.includes(event) ? 'active' : ''}`}
              >
                {EVENT_LABELS[event]}
              </button>
            ))}
          </div>
        </div>

        <div className="divider" />

        <div className="text-[13px] font-semibold mb-3">Personal records</div>
        <div className="space-y-2">
          {Object.entries(athlete.prs).map(([event, pr]) => (
            <div key={event} className="flex items-center gap-3">
              <div className="w-24 text-[13px]" style={{ color: 'var(--text-secondary)' }}>{EVENT_LABELS[event]}</div>
              <input defaultValue={pr} className="w-32" style={{ height: 36 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="card mb-5">
        <h3 className="mb-3">Bio</h3>
        <textarea defaultValue={athlete.bio} rows={4} className="w-full" style={{ resize: 'vertical' }} />
      </div>

      {/* Visibility */}
      <div className="card mb-6">
        <h3 className="mb-4">Privacy and visibility</h3>
        <div className="space-y-3">
          {[
            { key: 'publicProfile', label: 'Public profile', desc: 'Allow coaches to find and view your profile' },
            { key: 'showPRs', label: 'Show PRs', desc: 'Display personal records on your public profile' },
            { key: 'showVideos', label: 'Show videos', desc: 'Allow coaches to preview your submitted videos' },
          ].map(setting => (
            <div key={setting.key} className="flex items-center justify-between">
              <div>
                <div className="font-medium text-[14px]">{setting.label}</div>
                <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{setting.desc}</div>
              </div>
              <div
                className="w-10 h-6 rounded-full relative cursor-pointer transition-colors"
                style={{ background: athlete.visibilitySettings[setting.key as keyof typeof athlete.visibilitySettings] ? 'var(--blue)' : 'var(--bg-tertiary)' }}
              >
                <div
                  className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
                  style={{ transform: athlete.visibilitySettings[setting.key as keyof typeof athlete.visibilitySettings] ? 'translateX(18px)' : 'translateX(2px)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-primary">Save profile</button>
    </div>
  )
}
