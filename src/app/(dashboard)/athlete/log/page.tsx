'use client'
import { useState } from 'react'

export default function LogSessionPage() {
  const [readiness, setReadiness] = useState(8)
  const [soreness, setSoreness] = useState(3)

  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Log session</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>Monday, April 22 — Speed-strength, Shot</p>
      </div>

      {/* Readiness / soreness */}
      <div className="card mb-5">
        <h3 className="mb-4">How are you feeling?</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[14px] font-medium">Readiness</label>
              <span className="font-bold text-[18px]" style={{ color: 'var(--blue)' }}>{readiness}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={readiness}
              onChange={e => setReadiness(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: 'var(--blue)' }}
            />
            <div className="flex justify-between text-[12px] mt-1" style={{ color: 'var(--text-muted)' }}>
              <span>Not ready</span><span>Peak</span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[14px] font-medium">Soreness</label>
              <span className="font-bold text-[18px]" style={{ color: soreness > 6 ? 'var(--red)' : 'var(--text-primary)' }}>{soreness}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={soreness}
              onChange={e => setSoreness(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: soreness > 6 ? 'var(--red)' : 'var(--blue)' }}
            />
            <div className="flex justify-between text-[12px] mt-1" style={{ color: 'var(--text-muted)' }}>
              <span>None</span><span>Significant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Throws */}
      <div className="card mb-5">
        <h3 className="mb-4">Throws</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div key={n} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
                {n}
              </div>
              <input
                type="text"
                placeholder="Distance (e.g. 15.80m)"
                className="flex-1 h-10 text-[14px]"
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
              <input
                type="text"
                placeholder="Notes"
                className="w-32 h-10 text-[13px]"
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
            </div>
          ))}
          <button className="btn-secondary btn-sm">Add throw</button>
        </div>
      </div>

      {/* Lifts */}
      <div className="card mb-5">
        <h3 className="mb-4">Lifts</h3>
        <div className="space-y-3">
          {[
            { name: 'Back squat', placeholder: 'e.g. 4×4 @ 200lbs' },
            { name: 'Romanian deadlift', placeholder: 'e.g. 3×5 @ 170lbs' },
            { name: 'Box jump', placeholder: 'e.g. 4×3' },
          ].map(lift => (
            <div key={lift.name} className="flex items-center gap-3">
              <div className="w-40 text-[14px] font-medium shrink-0">{lift.name}</div>
              <input
                type="text"
                placeholder={lift.placeholder}
                className="flex-1 h-10 text-[14px]"
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Notes and video */}
      <div className="card mb-6">
        <h3 className="mb-4">Notes and media</h3>
        <textarea
          placeholder="Any notes for your coach — what felt good, what was off, what you were working on..."
          rows={3}
          className="w-full mb-3"
          style={{ resize: 'vertical' }}
        />
        <div
          className="border-dashed border-2 rounded-lg p-6 text-center cursor-pointer"
          style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
        >
          <div className="text-[14px] font-medium mb-1">Attach video</div>
          <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Drag and drop or click to select — MP4, MOV, up to 500MB</div>
        </div>
      </div>

      <button className="btn-primary">Save session log</button>
    </div>
  )
}
