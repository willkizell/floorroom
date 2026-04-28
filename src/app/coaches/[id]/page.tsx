import { PublicNav } from '@/components/shared/PublicNav'
import { MOCK_COACHES, MOCK_PACKAGES, EVENT_LABELS } from '@/lib/mock-data'
import Link from 'next/link'

export default async function CoachProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const coach = MOCK_COACHES.find(c => c.id === id) ?? MOCK_COACHES[0]
  const packages = MOCK_PACKAGES.filter(p => p.coachId === coach.id)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <PublicNav />

      <div className="pt-[76px] max-w-5xl mx-auto px-5 py-8">
        <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
          {/* Main content */}
          <div>
            {/* Hero */}
            <div className="flex gap-5 mb-6">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="avatar"
                width={80}
                height={80}
                style={{ width: 80, height: 80 }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-[26px]">{coach.name}</h1>
                  {coach.verificationStatus === 'verified' && (
                    <span className="badge badge-blue">Verified</span>
                  )}
                </div>
                <div className="text-[15px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{coach.location}</div>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{coach.rating.toFixed(1)}</span> ({coach.reviewCount} reviews)
                  </span>
                  <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{coach.activeAthletes}</span> active athletes
                  </span>
                  <span className={`badge ${coach.isOpen ? 'badge-green' : 'badge-amber'}`}>
                    {coach.isOpen ? 'Accepting athletes' : 'Waitlist only'}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{coach.headline}</p>

            {/* Specialties */}
            <div className="mb-6">
              <h3 className="mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {coach.specialties.map(s => (
                  <span key={s} className="badge badge-blue">{EVENT_LABELS[s]}</span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h3 className="mb-2">About</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{coach.bio}</p>
            </div>

            {/* Credentials */}
            <div className="mb-6">
              <h3 className="mb-3">Credentials</h3>
              <div className="card">
                <div className="mb-2 font-medium text-[14px]">{coach.currentRole}</div>
                <ul className="space-y-1">
                  {coach.pastExperience.map(e => (
                    <li key={e} className="text-[14px] flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--blue)' }}>—</span>
                      {e}
                    </li>
                  ))}
                </ul>
                {coach.achievements.length > 0 && (
                  <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div className="font-medium text-[14px] mb-1">Notable achievements</div>
                    <ul className="space-y-1">
                      {coach.achievements.map(a => (
                        <li key={a} className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Policies */}
            <div className="mb-6">
              <h3 className="mb-3">Coaching policies</h3>
              <div className="card">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-[12px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Response time</div>
                    <div className="font-medium text-[14px]">{coach.estimatedResponseTime}</div>
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Video turnaround</div>
                    <div className="font-medium text-[14px]">{coach.videoTurnaround}</div>
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Intake mode</div>
                    <div className="font-medium text-[14px]">{coach.intakeMode === 'instant' ? 'Instant join' : 'Application required'}</div>
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Capacity</div>
                    <div className="font-medium text-[14px]">{coach.activeAthletes} / {coach.maxAthletes} athletes</div>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{coach.policies}</p>
              </div>
            </div>

            {/* Intake questions */}
            {coach.intakeMode === 'application' && coach.intakeQuestions && (
              <div className="mb-6">
                <h3 className="mb-3">Application questions</h3>
                <div className="card">
                  <ol className="space-y-3">
                    {coach.intakeQuestions.map((q, i) => (
                      <li key={i} className="text-[14px] flex gap-3" style={{ color: 'var(--text-secondary)' }}>
                        <span className="font-semibold shrink-0" style={{ color: 'var(--text-muted)' }}>{i + 1}.</span>
                        {q}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / sticky pricing */}
          <div className="md:sticky md:top-[80px]">
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3>Packages</h3>
              </div>
              <div>
                {packages.length === 0 ? (
                  <div className="p-4 text-[14px]" style={{ color: 'var(--text-secondary)' }}>No packages listed. Contact coach directly.</div>
                ) : (
                  packages.map((pkg, i) => (
                    <div
                      key={pkg.id}
                      className="p-4"
                      style={{ borderBottom: i < packages.length - 1 ? '1px solid var(--border)' : undefined }}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="font-semibold text-[14px]">{pkg.name}</div>
                        <div className="text-[14px] font-bold shrink-0">
                          ${pkg.price}
                          <span className="text-[12px] font-normal" style={{ color: 'var(--text-muted)' }}>
                            {pkg.billingCadence === 'monthly' ? '/mo' : pkg.billingCadence === 'weekly' ? '/wk' : ''}
                          </span>
                        </div>
                      </div>
                      <p className="text-[13px] mb-2" style={{ color: 'var(--text-secondary)' }}>{pkg.description}</p>
                      <ul className="space-y-0.5">
                        {pkg.includes.map(item => (
                          <li key={item} className="text-[12px] flex gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                            <span style={{ color: 'var(--green)' }}>+</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
              <div className="p-4 border-t" style={{ borderColor: 'var(--border)' }}>
                {coach.intakeMode === 'instant' ? (
                  <Link href="/onboarding/athlete" className="btn-primary w-full text-center block">
                    Join now
                  </Link>
                ) : (
                  <Link href="/onboarding/athlete" className="btn-primary w-full text-center block">
                    Apply to work with {coach.name.split(' ')[0]}
                  </Link>
                )}
                <div className="text-[12px] text-center mt-2" style={{ color: 'var(--text-muted)' }}>
                  {coach.intakeMode === 'application' ? 'Application reviewed within 48 hours' : 'Access starts immediately after payment'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
