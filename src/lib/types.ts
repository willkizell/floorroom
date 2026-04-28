export type UserRole = 'coach' | 'athlete' | 'admin'

export interface User {
  id: string
  email: string
  role: UserRole
  name: string
  avatar?: string
  createdAt: string
}

export interface CoachProfile {
  id: string
  userId: string
  name: string
  avatar: string
  headline: string
  bio: string
  location: string
  specialties: ThrowEvent[]
  currentRole: string
  pastExperience: string[]
  achievements: string[]
  socialLinks: { platform: string; url: string }[]
  packages: CoachPackage[]
  intakeMode: 'instant' | 'application'
  intakeQuestions?: string[]
  maxAthletes: number
  activeAthletes: number
  isOpen: boolean
  estimatedResponseTime: string
  videoTurnaround: string
  policies: string
  rating: number
  reviewCount: number
  verificationStatus: 'verified' | 'pending' | 'unverified'
  createdAt: string
}

export type ThrowEvent = 'shot_put' | 'discus' | 'hammer' | 'javelin'

export interface CoachPackage {
  id: string
  coachId: string
  name: string
  description: string
  price: number
  billingCadence: 'monthly' | 'weekly' | 'one_time'
  includes: string[]
  videoReviewsPerMonth: number
  messagingAccess: boolean
  programUpdates: boolean
  hourlyRate?: number
  athleteCap?: number
  isVisible: boolean
}

export interface AthleteProfile {
  id: string
  userId: string
  name: string
  avatar: string
  age: number
  location: string
  primaryEvent: ThrowEvent
  secondaryEvents: ThrowEvent[]
  prs: Record<string, string>
  level: 'youth' | 'high_school' | 'collegiate' | 'post_collegiate' | 'professional'
  schoolOrClub: string
  height?: string
  weight?: string
  trainingAge: number
  goals: string
  coachingPreferences: string[]
  budget: string
  bio: string
  videos: VideoSubmission[]
  currentCoachId?: string
  currentPackageId?: string
  visibilitySettings: {
    publicProfile: boolean
    showPRs: boolean
    showVideos: boolean
  }
  createdAt: string
}

export interface Application {
  id: string
  athleteId: string
  athlete: AthleteProfile
  coachId: string
  packageId: string
  answers: Record<string, string>
  status: 'pending' | 'accepted' | 'declined'
  submittedAt: string
  reviewedAt?: string
}

export interface Subscription {
  id: string
  athleteId: string
  coachId: string
  packageId: string
  status: 'active' | 'paused' | 'cancelled'
  startDate: string
  renewalDate: string
  amount: number
  billingCadence: 'monthly' | 'weekly' | 'one_time'
}

export interface TrainingProgram {
  id: string
  coachId: string
  name: string
  description: string
  targetEvent: ThrowEvent[]
  level: string
  weeks: TrainingWeek[]
  isTemplate: boolean
  assignedAthletes: string[]
  createdAt: string
}

export interface TrainingWeek {
  weekNumber: number
  theme: string
  sessions: TrainingSession[]
  notes?: string
}

export interface TrainingSession {
  id: string
  day: string
  title: string
  type: 'throws' | 'lifting' | 'conditioning' | 'rest' | 'competition'
  exercises: Exercise[]
  notes?: string
  duration?: number
  completedAt?: string
  athleteNotes?: string
  readiness?: number
  soreness?: number
}

export interface Exercise {
  name: string
  sets?: number
  reps?: string
  weight?: string
  distance?: string
  notes?: string
}

export interface VideoSubmission {
  id: string
  athleteId: string
  coachId?: string
  title: string
  event: ThrowEvent
  thumbnailUrl: string
  videoUrl: string
  uploadedAt: string
  status: 'pending_review' | 'reviewed' | 'no_feedback'
  feedback?: CoachFeedback
  sessionId?: string
}

export interface CoachFeedback {
  id: string
  coachId: string
  text: string
  keyPoints: string[]
  drills?: string[]
  sentAt: string
}

export interface MessageThread {
  id: string
  participants: string[]
  coachId: string
  athleteId: string
  lastMessage: Message
  unreadCount: number
  updatedAt: string
}

export interface Message {
  id: string
  threadId: string
  senderId: string
  text: string
  attachments?: string[]
  sentAt: string
  readAt?: string
}

export interface BillingSummary {
  coachId: string
  monthlyRecurring: number
  activeSubscriptions: number
  pendingPayouts: number
  totalEarnings: number
  platformFeePercent: number
  nextPayoutDate: string
  recentTransactions: Transaction[]
}

export interface Transaction {
  id: string
  athleteName: string
  amount: number
  type: 'payment' | 'payout' | 'refund'
  date: string
  status: 'completed' | 'pending' | 'failed'
}
