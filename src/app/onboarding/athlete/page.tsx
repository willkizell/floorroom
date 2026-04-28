'use client'
import { useState } from 'react'
import Link from 'next/link'

const STEPS = ['Account', 'Athletic profile', 'Goals', 'Media', 'Preview']

export default function AthleteOnboardingPage() {
  const [step, setStep] = useState(0)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="border-b px-5 h-[60px] flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
        <Link href="/" className="font-bold text-[16px]">FloorRoom</Link>
        <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Athlete setup</div>
      </div>

      <div className="max-w-2xl mx-auto px-5 py-10">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold cursor-pointer"
                  style={{
                    background: i <= step ? 'var(--blue)' : 'var(--bg-tertiary)',
                    color: i <= step ? 'white' : 'var(--text-muted)',
                  }}
                  onClick={() => setStep(i)}
                >
                  {i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="h-px w-6" style={{ background: i < step ? 'var(--blue)' : 'var(--border)' }} />
                )}
              </div>
            ))}
          </div>
          <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Step {step + 1} of {STEPS.length} — {STEPS[step]}</div>
        </div>

        {step === 0 && (
          <div>
            <h1 className="text-[26px] mb-2">Create your athlete account</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>Start your profile. Coaches will see this when you apply.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-medium mb-1">First name</label>
                  <input placeholder="Tyler" className="w-full" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium mb-1">Last name</label>
                  <input placeholder="Rhodes" className="w-full" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Email</label>
                <input type="email" placeholder="tyler@example.com" className="w-full" />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Password</label>
                <input type="password" placeholder="Min. 8 characters" className="w-full" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-medium mb-1">Age</label>
                  <input type="number" placeholder="22" className="w-full" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium mb-1">Location</label>
                  <input placeholder="Columbus, OH" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h1 className="text-[26px] mb-2">Athletic profile</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>This is how coaches assess your current level.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium mb-2">Primary event</label>
                <div className="flex flex-wrap gap-2">
                  {['Shot Put', 'Discus', 'Hammer', 'Javelin'].map(event => (
                    <button key={event} className={`chip ${event === 'Shot Put' ? 'active' : ''}`}>{event}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-2">Secondary events</label>
                <div className="flex flex-wrap gap-2">
                  {['Shot Put', 'Discus', 'Hammer', 'Javelin'].map(event => (
                    <button key={event} className={`chip ${event === 'Discus' ? 'active' : ''}`}>{event}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-2">Personal records</label>
                <div className="space-y-2">
                  {['Shot Put (PR)', 'Discus (PR)'].map(field => (
                    <div key={field} className="flex items-center gap-3">
                      <div className="w-32 text-[13px] shrink-0">{field}</div>
                      <input placeholder="e.g. 16.24m" className="flex-1" style={{ height: 40 }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-medium mb-1">Current level</label>
                  <select className="w-full">
                    <option>Youth</option>
                    <option>High School</option>
                    <option selected>Collegiate</option>
                    <option>Post-Collegiate</option>
                    <option>Professional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium mb-1">Training age (years)</label>
                  <input type="number" defaultValue="5" className="w-full" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">School / Club</label>
                <input placeholder="Ohio State University" className="w-full" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-[26px] mb-2">Goals and coaching needs</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>Help coaches understand what you are looking for.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium mb-2">Coaching preference</label>
                <div className="flex flex-wrap gap-2">
                  {['Full coaching', 'Programming only', 'Video critique', 'Lifting support'].map(pref => (
                    <button key={pref} className={`chip ${pref === 'Full coaching' ? 'active' : ''}`}>{pref}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Budget range</label>
                <select className="w-full">
                  <option>Under $100/month</option>
                  <option>$100-200/month</option>
                  <option selected>$200-350/month</option>
                  <option>$350-500/month</option>
                  <option>$500+/month</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Season goals</label>
                <textarea
                  placeholder="Qualify for NCAA Championships. Break 17m in shot put by end of outdoor season."
                  rows={3}
                  className="w-full"
                  style={{ resize: 'vertical' }}
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Current issues or pain points</label>
                <textarea
                  placeholder="What technical issues are you struggling with? What has not worked in previous coaching?"
                  rows={3}
                  className="w-full"
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="text-[26px] mb-2">Media and profile styling</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>Add a bio and throw videos. Coaches want to see you in action.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium mb-1">Short bio</label>
                <textarea placeholder="Current NCAA D1 athlete. Work with remote coach for technical development outside of practice." rows={3} className="w-full" style={{ resize: 'vertical' }} />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Profile photo</label>
                <div
                  className="border-dashed border-2 p-6 text-center cursor-pointer rounded-lg"
                  style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                >
                  <div className="text-[14px] font-medium mb-1">Upload profile photo</div>
                  <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>JPG or PNG, square crop recommended</div>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Throwing videos <span style={{ color: 'var(--text-muted)' }}>— optional, strongly recommended</span></label>
                <div
                  className="border-dashed border-2 p-6 text-center cursor-pointer rounded-lg"
                  style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                >
                  <div className="text-[14px] font-medium mb-1">Upload videos</div>
                  <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>MP4 or MOV, max 500MB each. Coaches review these when considering your application.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h1 className="text-[26px] mb-2">Your profile is ready</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>
              Head to the marketplace to find a coach, or go to your dashboard.
            </p>
            <div className="card mb-6">
              <div className="flex gap-4 mb-3">
                <div className="w-14 h-14 rounded-full bg-[var(--bg-tertiary)]" />
                <div>
                  <div className="font-semibold text-[16px]">Tyler Rhodes</div>
                  <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Columbus, OH · Shot Put, Discus</div>
                  <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>PR: 16.24m · Collegiate</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/marketplace" className="btn-primary">Browse coaches</Link>
              <Link href="/athlete" className="btn-secondary">Go to my dashboard</Link>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-8">
          <button
            className="btn-secondary btn-sm"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            style={{ opacity: step === 0 ? 0.5 : 1 }}
          >
            Back
          </button>
          {step < STEPS.length - 1 && (
            <button
              className="btn-primary btn-sm"
              onClick={() => setStep(Math.min(STEPS.length - 1, step + 1))}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
