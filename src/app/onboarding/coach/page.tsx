'use client'
import { useState } from 'react'
import Link from 'next/link'

const STEPS = [
  'Account',
  'About',
  'Services',
  'Intake mode',
  'Capacity',
  'Preview',
]

export default function CoachOnboardingPage() {
  const [step, setStep] = useState(0)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Header */}
      <div className="border-b px-5 h-[60px] flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
        <Link href="/" className="font-bold text-[16px]">FloorRoom</Link>
        <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Coach setup</div>
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
                  <div className="h-px flex-1 w-6" style={{ background: i < step ? 'var(--blue)' : 'var(--border)' }} />
                )}
              </div>
            ))}
          </div>
          <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Step {step + 1} of {STEPS.length} — {STEPS[step]}</div>
        </div>

        {/* Step content */}
        {step === 0 && (
          <div>
            <h1 className="text-[26px] mb-2">Create your coach account</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>
              Tell us the basics. You can edit everything later.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-medium mb-1">First name</label>
                  <input placeholder="Marcus" className="w-full" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium mb-1">Last name</label>
                  <input placeholder="Eaton" className="w-full" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Email</label>
                <input type="email" placeholder="coach@example.com" className="w-full" />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Password</label>
                <input type="password" placeholder="Min. 8 characters" className="w-full" />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Coach type</label>
                <select className="w-full">
                  <option>Independent / Private coach</option>
                  <option>Club coach</option>
                  <option>High school coach</option>
                  <option>Collegiate coach</option>
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Location</label>
                <input placeholder="Austin, TX" className="w-full" />
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h1 className="text-[26px] mb-2">About you and your credibility</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>
              Athletes will read this before applying. Be specific.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium mb-1">Headline <span style={{ color: 'var(--text-muted)' }}>— one sentence</span></label>
                <input placeholder="Former NCAA D1 discus thrower. Coaching rotational throws at the collegiate level." className="w-full" />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Bio</label>
                <textarea placeholder="Tell athletes who you are, how you coach, and what to expect from working with you." rows={5} className="w-full" style={{ resize: 'vertical' }} />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-2">Specialties</label>
                <div className="flex flex-wrap gap-2">
                  {['Shot Put', 'Discus', 'Hammer', 'Javelin'].map(event => (
                    <button key={event} className="chip">{event}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Current role</label>
                <input placeholder="Club Throws Coach, Austin Track Club" className="w-full" />
              </div>
              <div>
                <label className="block text-[13px] font-medium mb-1">Past experience <span style={{ color: 'var(--text-muted)' }}>— one per line</span></label>
                <textarea placeholder="USATF Level 2 Certified&#10;Former D1 All-American, discus&#10;8 years coaching at the collegiate level" rows={3} className="w-full" style={{ resize: 'vertical' }} />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-[26px] mb-2">Define your coaching packages</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>
              Add as many packages as you want. Athletes will choose one when applying or joining.
            </p>

            {/* Example package form */}
            <div className="card mb-4">
              <div className="font-semibold text-[15px] mb-3">Package 1</div>
              <div className="space-y-3">
                <div>
                  <label className="block text-[13px] font-medium mb-1">Package name</label>
                  <input defaultValue="Full Remote Coaching" className="w-full" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium mb-1">Description</label>
                  <textarea rows={2} defaultValue="Complete coaching relationship. Weekly programming, video review, and messaging access." className="w-full" style={{ resize: 'none' }} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[13px] font-medium mb-1">Price</label>
                    <input type="number" defaultValue="285" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium mb-1">Billing cadence</label>
                    <select className="w-full">
                      <option>Monthly</option>
                      <option>Weekly</option>
                      <option>One-time</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[13px] font-medium mb-1">Video reviews/mo</label>
                    <input type="number" defaultValue="4" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium mb-1">Athlete cap</label>
                    <input type="number" placeholder="No limit" className="w-full" />
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-secondary btn-sm">Add another package</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="text-[26px] mb-2">Athlete intake mode</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>
              How should athletes join your roster?
            </p>
            <div className="space-y-3 mb-6">
              {[
                { value: 'instant', label: 'Instant join', desc: 'Athletes can pay and start immediately. No review required.' },
                { value: 'application', label: 'Application required', desc: 'Athletes submit answers to your intake questions. You review and decide.' },
              ].map(option => (
                <div
                  key={option.value}
                  className="card cursor-pointer"
                  style={{ border: option.value === 'application' ? '2px solid var(--blue)' : '1px solid var(--border)' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0"
                      style={{ borderColor: option.value === 'application' ? 'var(--blue)' : 'var(--border)' }}
                    >
                      {option.value === 'application' && <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--blue)' }} />}
                    </div>
                    <div>
                      <div className="font-semibold text-[15px]">{option.label}</div>
                      <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{option.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <label className="block text-[13px] font-medium mb-2">Intake questions <span style={{ color: 'var(--text-muted)' }}>— one per line</span></label>
              <textarea
                defaultValue="What are your current personal records for your primary events?&#10;What are your goals for the next 12 months?&#10;Describe your current training setup."
                rows={5}
                className="w-full"
                style={{ resize: 'vertical' }}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h1 className="text-[26px] mb-2">Capacity and policies</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>
              Set your limits and expectations upfront.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-medium mb-1">Maximum athletes</label>
                  <input type="number" defaultValue="12" className="w-full" />
                </div>
              </div>
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
              <div>
                <label className="block text-[13px] font-medium mb-1">General coaching policy</label>
                <textarea
                  placeholder="Monthly rolling commitment. I assess mechanics and training history in the first month before setting full programming..."
                  rows={4}
                  className="w-full"
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h1 className="text-[26px] mb-2">Preview your listing</h1>
            <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>
              This is how athletes will see you on the marketplace.
            </p>
            <div className="card mb-6">
              <div className="flex gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[var(--bg-tertiary)]" />
                <div>
                  <div className="font-semibold text-[16px]">Your Name</div>
                  <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Your Location</div>
                </div>
              </div>
              <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                Your headline will appear here.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="badge badge-blue">Shot Put</span>
                <span className="badge badge-blue">Discus</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="btn-primary"
                onClick={() => window.location.href = '/coach'}
              >
                Publish profile and go to dashboard
              </button>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            className="btn-secondary btn-sm"
            onClick={() => setStep(Math.max(0, step - 1))}
            style={{ opacity: step === 0 ? 0.5 : 1 }}
            disabled={step === 0}
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
