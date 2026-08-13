import type { ServiceIconId } from '../types'

interface IconProps {
  id: ServiceIconId
  className?: string
}

export function ServiceIcon({ id, className = 'h-6 w-6' }: IconProps) {
  const props = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  switch (id) {
    case 'drive':
      return (
        <svg {...props}>
          <path d="M9.5 4.5 3 15.5h6.2L15.7 4.5H9.5Z" />
          <path d="M14.3 4.5 21 15.5h-6.2L8.1 4.5h6.2Z" />
          <path d="M3 15.5h18L16.5 20H7.5L3 15.5Z" />
        </svg>
      )
    case 'gemini':
      return (
        <svg {...props}>
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <path d="M6.5 6.5 17.5 17.5" />
          <path d="M17.5 6.5 6.5 17.5" />
          <circle cx="12" cy="12" r="2.25" />
        </svg>
      )
    case 'asana':
      return (
        <svg {...props}>
          <circle cx="12" cy="6.5" r="2.5" />
          <circle cx="7" cy="16" r="2.5" />
          <circle cx="17" cy="16" r="2.5" />
        </svg>
      )
    case 'gmail':
      return (
        <svg {...props}>
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...props}>
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 10h17" />
          <path d="M8 3.5v3" />
          <path d="M16 3.5v3" />
          <path d="M8 14h2" />
          <path d="M12 14h2" />
        </svg>
      )
    case 'onepassword':
      return (
        <svg {...props}>
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
          <circle cx="12" cy="15" r="1.25" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'admin':
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 19.5c1.8-3.2 4.2-4.8 7-4.8s5.2 1.6 7 4.8" />
          <path d="M17.5 5.5 19 4l1.5 1.5L19 7z" />
        </svg>
      )
    case 'emergency':
      return (
        <svg {...props}>
          <path d="M12 3.5 20 19.5H4L12 3.5Z" />
          <path d="M12 10v4" />
          <circle cx="12" cy="16.5" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'link':
    default:
      return (
        <svg {...props}>
          <path d="M9.5 14.5a4 4 0 0 1 0-5.7l1.8-1.8a4 4 0 1 1 5.7 5.7l-.9.9" />
          <path d="M14.5 9.5a4 4 0 0 1 0 5.7l-1.8 1.8a4 4 0 1 1-5.7-5.7l.9-.9" />
        </svg>
      )
  }
}

export function ExternalLinkIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}
