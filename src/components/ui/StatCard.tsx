interface StatCardProps {
  label: string
  value: string | number
  sub?: string
  trend?: 'up' | 'down' | 'neutral'
}

export function StatCard({ label, value, sub, trend }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {sub && (
        <div className="text-[13px] mt-1" style={{ color: trend === 'up' ? 'var(--green)' : trend === 'down' ? 'var(--red)' : 'var(--text-muted)' }}>
          {sub}
        </div>
      )}
    </div>
  )
}
