import { portalConfig } from '../config/services'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-6 pb-2 text-center">
      <p className="text-sm tracking-wide text-[var(--muted)]">
        {portalConfig.footerText}
      </p>
    </footer>
  )
}
