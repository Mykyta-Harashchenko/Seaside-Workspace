export type ServiceIconId =
  | 'drive'
  | 'gemini'
  | 'asana'
  | 'gmail'
  | 'calendar'
  | 'onepassword'
  | 'admin'
  | 'emergency'
  | 'link'

export interface Service {
  id: string
  name: string
  category: string
  description: string
  url: string
  icon: ServiceIconId
  buttonLabel: string
  frequentlyUsed?: boolean
  restricted?: boolean
  restrictedTooltip?: string
  accent?: 'default' | 'muted' | 'emergency'
}

export interface GuideItem {
  question: string
  answer: string
  serviceId: string
}

export interface UsefulLink {
  id: string
  name: string
  description: string
  url: string
}

export interface PortalConfig {
  brandName: string
  title: string
  subtitle: string
  welcomeMessage: string
  footerText: string
}
