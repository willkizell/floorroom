interface EmptyStateProps {
  title: string
  description: string
  action?: { label: string; onClick?: () => void; href?: string }
  icon?: React.ReactNode
}

export function EmptyState({ title, description, action, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      {icon && (
        <div className="mb-4 text-[var(--text-muted)]">{icon}</div>
      )}
      <div className="font-semibold text-[var(--text-primary)] text-[17px] mb-1">{title}</div>
      <div className="text-[var(--text-secondary)] text-[14px] max-w-xs">{description}</div>
      {action && (
        <div className="mt-5">
          {action.href ? (
            <a href={action.href} className="btn-primary btn-sm">{action.label}</a>
          ) : (
            <button onClick={action.onClick} className="btn-primary btn-sm">{action.label}</button>
          )}
        </div>
      )}
    </div>
  )
}
