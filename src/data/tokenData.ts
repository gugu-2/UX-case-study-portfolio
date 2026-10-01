export interface ColorToken {
  name: string
  hex: string
  rgb: string
  contrastOnWhite: string
  contrastOnDark: string
  usage: string
}

export interface TypoToken {
  name: string
  typeface: string
  weight: string
  size: string
  case: string
  letterSpacing: string
  lineHeight?: string
  usage?: string
}

export const colorPalette: { category: string; tokens: ColorToken[] }[] = [
  {
    category: 'Brand Primary (Emerald Vitality)',
    tokens: [
      { name: 'primary.lighter', hex: '#C8FACD', rgb: '200, 250, 205', contrastOnWhite: '1.2:1', contrastOnDark: '14.1:1', usage: 'Soft badge backgrounds, hero highlight fills' },
      { name: 'primary.light', hex: '#5BE584', rgb: '91, 229, 132', contrastOnWhite: '1.7:1', contrastOnDark: '10.5:1', usage: 'Hover highlights, secondary chart splines' },
      { name: 'primary.main', hex: '#00AB55', rgb: '0, 171, 85', contrastOnWhite: '3.1:1', contrastOnDark: '7.8:1', usage: 'Primary CTAs, active nav pills, key progress tracks' },
      { name: 'primary.dark', hex: '#007B55', rgb: '0, 123, 85', contrastOnWhite: '4.6:1', contrastOnDark: '5.2:1', usage: 'High-contrast text on light buttons, pressed states' },
      { name: 'primary.darker', hex: '#005249', rgb: '0, 82, 73', contrastOnWhite: '7.4:1', contrastOnDark: '3.2:1', usage: 'Dark borders, deep active icons' },
    ],
  },
  {
    category: 'Neutral & Surface Elevations (Light Theme)',
    tokens: [
      { name: 'bg.default', hex: '#F4F6F8', rgb: '244, 246, 248', contrastOnWhite: '1.1:1', contrastOnDark: '16.5:1', usage: 'Canvas body background, subtle card dividers' },
      { name: 'bg.paper', hex: '#FFFFFF', rgb: '255, 255, 255', contrastOnWhite: '1.0:1', contrastOnDark: '18.1:1', usage: 'Card surfaces, dropdown containers, modals' },
      { name: 'text.primary', hex: '#212B36', rgb: '33, 43, 54', contrastOnWhite: '13.4:1', contrastOnDark: '1.4:1', usage: 'Primary headings, bold metric values, table titles' },
      { name: 'text.secondary', hex: '#637381', rgb: '99, 115, 129', contrastOnWhite: '4.8:1', contrastOnDark: '3.8:1', usage: 'Muted subtitles, table column headers, helper labels' },
      { name: 'border.divider', hex: '#919EAB', rgb: '145, 158, 171', contrastOnWhite: '2.5:1', contrastOnDark: '7.2:1', usage: '1px container borders at 16% opacity' },
    ],
  },
  {
    category: 'Luminous Slate Elevations (Dark Theme)',
    tokens: [
      { name: 'dark.bg.default', hex: '#161C24', rgb: '22, 28, 36', contrastOnWhite: '15.5:1', contrastOnDark: '1.0:1', usage: 'Dark mode page canvas background' },
      { name: 'dark.bg.paper', hex: '#212B36', rgb: '33, 43, 54', contrastOnWhite: '13.4:1', contrastOnDark: '1.2:1', usage: 'Elevated dark cards, header bars, table rows' },
      { name: 'dark.bg.elevated', hex: '#334155', rgb: '51, 65, 85', contrastOnWhite: '9.8:1', contrastOnDark: '1.9:1', usage: 'Floating popovers, modals, tooltips' },
      { name: 'dark.text.primary', hex: '#FFFFFF', rgb: '255, 255, 255', contrastOnWhite: '1.0:1', contrastOnDark: '15.2:1', usage: 'Primary typography in dark mode' },
      { name: 'dark.text.secondary', hex: '#919EAB', rgb: '145, 158, 171', contrastOnWhite: '2.5:1', contrastOnDark: '7.2:1', usage: 'Secondary descriptive text in dark mode' },
    ],
  },
  {
    category: 'Semantic System Alerts',
    tokens: [
      { name: 'info.main', hex: '#1890FF', rgb: '24, 144, 255', contrastOnWhite: '3.5:1', contrastOnDark: '6.2:1', usage: 'Informational toasts, system announcements' },
      { name: 'success.main', hex: '#54D62C', rgb: '84, 214, 44', contrastOnWhite: '2.1:1', contrastOnDark: '9.5:1', usage: 'Paid invoices, completed transactions' },
      { name: 'warning.main', hex: '#FFC107', rgb: '255, 193, 7', contrastOnWhite: '1.4:1', contrastOnDark: '12.8:1', usage: 'Pending reviews, quota threshold warnings' },
      { name: 'error.main', hex: '#FF4842', rgb: '255, 72, 66', contrastOnWhite: '3.6:1', contrastOnDark: '5.8:1', usage: 'Failed transfers, overdue invoices, destructive CTAs' },
    ],
  },
]

export const typographyScale: TypoToken[] = [
  { name: 'H1', typeface: 'Roboto', weight: 'Light (300)', size: '96px', case: 'Sentence', letterSpacing: '-1.5', lineHeight: '112px', usage: 'Hero greetings, major milestone titles' },
  { name: 'H2', typeface: 'Roboto', weight: 'Light (300)', size: '60px', case: 'Sentence', letterSpacing: '-0.5', lineHeight: '72px', usage: 'Hero module titles, primary section headers' },
  { name: 'H3', typeface: 'Roboto', weight: 'Regular (400)', size: '48px', case: 'Sentence', letterSpacing: '0', lineHeight: '56px', usage: 'Major dashboard card headers, analytics titles' },
  { name: 'H4', typeface: 'Roboto', weight: 'Regular (400)', size: '34px', case: 'Sentence', letterSpacing: '0.25', lineHeight: '42px', usage: 'Sub-section titles, dialog hero headers' },
  { name: 'H5', typeface: 'Roboto', weight: 'Regular (400)', size: '24px', case: 'Sentence', letterSpacing: '0', lineHeight: '32px', usage: 'Widget titles, modal card titles, table headers' },
  { name: 'H6', typeface: 'Roboto', weight: 'Medium (500)', size: '20px', case: 'Sentence', letterSpacing: '0.15', lineHeight: '28px', usage: 'Sub-widget titles, drawer headers, KPI titles' },
  { name: 'Subtitle 1', typeface: 'Roboto', weight: 'Regular (400)', size: '16px', case: 'Sentence', letterSpacing: '0.15', lineHeight: '24px', usage: 'Card subtitles, prominent body lead copy' },
  { name: 'Subtitle 2', typeface: 'Roboto', weight: 'Medium (500)', size: '14px', case: 'Sentence', letterSpacing: '0.1', lineHeight: '22px', usage: 'Secondary subtitles, form section subtitles' },
  { name: 'Body 1', typeface: 'Roboto', weight: 'Regular (400)', size: '16px', case: 'Sentence', letterSpacing: '0.5', lineHeight: '24px', usage: 'Standard long-form reading, documentation paragraphs' },
  { name: 'Body 2', typeface: 'Roboto', weight: 'Regular (400)', size: '14px', case: 'Sentence', letterSpacing: '0.25', lineHeight: '22px', usage: 'Dense dashboard body, table cells, lists' },
  { name: 'BUTTON', typeface: 'Roboto', weight: 'Medium (500)', size: '14px', case: 'All caps', letterSpacing: '1.25', lineHeight: '20px', usage: 'Primary and secondary CTA button text' },
  { name: 'Caption', typeface: 'Roboto', weight: 'Regular (400)', size: '12px', case: 'Sentence', letterSpacing: '0.4', lineHeight: '18px', usage: 'Axis timestamps, helper notes, status tags' },
  { name: 'OVERLINE', typeface: 'Roboto', weight: 'Regular (400)', size: '10px', case: 'All caps', letterSpacing: '1.5', lineHeight: '16px', usage: 'Category super-headings, metadata overlines' },
]

export const spatialCadence = [
  { token: 'space-4', px: '4px', usage: 'Micro spacing between icon and badge label text' },
  { token: 'space-8', px: '8px', usage: 'Inner form padding, table vertical cell padding' },
  { token: 'space-12', px: '12px', usage: 'Gap between chips, tight button padding' },
  { token: 'space-16', px: '16px', usage: 'Internal card element spacing, avatar gaps' },
  { token: 'space-24', px: '24px', usage: 'Standard dashboard card inner padding across all 6 modules' },
  { token: 'space-32', px: '32px', usage: 'Vertical spacing between major dashboard grid rows' },
  { token: 'space-48', px: '48px', usage: 'Section padding on expanded desktop layouts' },
  { token: 'space-64', px: '64px', usage: 'Page margin bounds on ultrawide viewports' },
]
