import type {
  GuideItem,
  PortalConfig,
  Service,
  UsefulLink,
} from '../types'

/**
 * Portal copy and branding — edit here to customize the homepage.
 */
export const portalConfig: PortalConfig = {
  brandName: 'Seaside Investments',
  title: 'Seaside Digital Workspace',
  subtitle:
    'One place to access the systems used to manage Seaside operations.',
  welcomeMessage: 'Welcome. Select a system below to get started.',
  footerText: 'Seaside Investments — Internal Use Only',
}

/**
 * Primary services displayed as large cards.
 * Replace `url` values with your organization’s actual destinations.
 */
export const primaryServices: Service[] = [
  {
    id: 'google-drive',
    name: 'Google Drive',
    category: 'Documents',
    description:
      'Access company, entity, legal, tax, insurance, and shared documentation.',
    url: 'https://drive.google.com',
    icon: 'drive',
    buttonLabel: 'Open Google Drive',
    frequentlyUsed: true,
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'AI Knowledge',
    description:
      'Ask questions and get help with writing, analysis, and document work.',
    url: 'https://claude.ai',
    icon: 'claude',
    buttonLabel: 'Open Claude',
  },
  {
    id: 'asana',
    name: 'Asana',
    category: 'Tasks & Obligations',
    description:
      'Track deadlines, recurring obligations, renewals, tax work, and follow-ups.',
    url: 'https://app.asana.com',
    icon: 'asana',
    buttonLabel: 'Open Asana',
    frequentlyUsed: true,
  },
  {
    id: 'gmail',
    name: 'Gmail',
    category: 'Email',
    description: 'Access your Seaside corporate email.',
    url: 'https://mail.google.com',
    icon: 'gmail',
    buttonLabel: 'Open Gmail',
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    category: 'Calendar',
    description:
      'View meetings, deadlines, reminders, and important dates.',
    url: 'https://calendar.google.com',
    icon: 'calendar',
    buttonLabel: 'Open Calendar',
  },
  {
    id: '1password',
    name: '1Password',
    category: 'Passwords & Secure Information',
    description:
      'Access credentials, banking login information, recovery information, and secure notes.',
    url: 'https://my.1password.com',
    icon: 'onepassword',
    buttonLabel: 'Open 1Password',
    frequentlyUsed: true,
  },
]

/**
 * Restricted / less frequently used links.
 * Replace URLs with your internal destinations when ready.
 */
export const adminServices: Service[] = [
  {
    id: 'workspace-admin',
    name: 'Google Workspace Admin',
    category: 'Administration',
    description:
      'Administrative access for authorized Seaside administrators.',
    url: 'https://admin.google.com',
    icon: 'admin',
    buttonLabel: 'Open Admin Console',
    restricted: true,
    restrictedTooltip: 'Only authorized Seaside administrators should use this console.',
    accent: 'muted',
  },
  {
    id: 'emergency-continuity',
    name: 'Emergency Continuity',
    category: 'Continuity',
    description:
      'Access emergency continuity instructions and recovery guidance.',
    url: '#emergency-continuity',
    icon: 'emergency',
    buttonLabel: 'View Emergency Guidance',
    restricted: true,
    restrictedTooltip:
      'Use this resource if primary systems are unavailable or during a continuity event.',
    accent: 'emergency',
  },
]

/**
 * Quick-guide mappings for nontechnical users.
 * `serviceId` should match an id in primaryServices or adminServices.
 */
export const quickGuide: GuideItem[] = [
  {
    question: 'Need a document?',
    answer: 'Google Drive',
    serviceId: 'google-drive',
  },
  {
    question: 'Need to ask a question about documents?',
    answer: 'Claude',
    serviceId: 'claude',
  },
  {
    question: 'Need to track a deadline or task?',
    answer: 'Asana',
    serviceId: 'asana',
  },
  {
    question: 'Need a password or secure account detail?',
    answer: '1Password',
    serviceId: '1password',
  },
  {
    question: 'Need email?',
    answer: 'Gmail',
    serviceId: 'gmail',
  },
  {
    question: 'Need a meeting or deadline calendar?',
    answer: 'Google Calendar',
    serviceId: 'google-calendar',
  },
]

/**
 * Optional useful links — replace placeholder URLs as needed.
 */
export const usefulLinks: UsefulLink[] = [
  {
    id: 'advisors',
    name: 'Advisors',
    description: 'Key advisory contacts and firm references.',
    url: '#advisors',
  },
  {
    id: 'key-contacts',
    name: 'Key Contacts',
    description: 'Internal and external contact directory.',
    url: '#key-contacts',
  },
  {
    id: 'company-reference',
    name: 'Company Reference Guide',
    description: 'Entity overview and operating reference.',
    url: '#company-reference',
  },
  {
    id: 'onboarding',
    name: 'Onboarding Guide',
    description: 'Getting started with Seaside systems.',
    url: '#onboarding',
  },
]
