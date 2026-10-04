export interface ColorToken {
  name: string
  hex: string
  rgb: string
  contrastOnWhite: string
  contrastOnDark: string
  usage: string
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

export interface TypoToken {
  name: string
  category: 'Headline' | 'Text' | 'Component'
  typeface: string
  weight: string
  numericWeight: number
  size: string
  mobileSize?: string
  case: string
  letterSpacing: string
  lineHeight: string
  mobileLineHeight?: string
  cssClass: string
  specimen: string
  usage: string
}

export const typographyScale: TypoToken[] = [
  {
    name: 'H1',
    category: 'Headline',
    typeface: 'Public Sans',
    weight: 'ExtraBold (800)',
    numericWeight: 800,
    size: '64px',
    mobileSize: '40px',
    case: 'Sentence',
    letterSpacing: '-0.02em',
    lineHeight: '80px',
    mobileLineHeight: '50px',
    cssClass: '.figma-h3',
    specimen: 'Almost before we kne...',
    usage: 'Hero page titles, major document headers, primary portal intros',
  },
  {
    name: 'H2',
    category: 'Headline',
    typeface: 'Public Sans',
    weight: 'ExtraBold (800)',
    numericWeight: 800,
    size: '48px',
    mobileSize: '32px',
    case: 'Sentence',
    letterSpacing: '-0.015em',
    lineHeight: '64px',
    mobileLineHeight: '42px',
    cssClass: '.figma-h2',
    specimen: 'Almost before we knew it, we...',
    usage: 'Primary section titles, artifact headers, core dashboard module titles',
  },
  {
    name: 'H3',
    category: 'Headline',
    typeface: 'Public Sans',
    weight: 'Bold (700)',
    numericWeight: 700,
    size: '32px',
    mobileSize: '24px',
    case: 'Sentence',
    letterSpacing: '-0.01em',
    lineHeight: '48px',
    mobileLineHeight: '36px',
    cssClass: '.figma-h3',
    specimen: 'Almost before we knew it, we had left the grou...',
    usage: 'Sub-section titles, major card group headings, modal headers',
  },
  {
    name: 'H4',
    category: 'Headline',
    typeface: 'Public Sans',
    weight: 'Bold (700)',
    numericWeight: 700,
    size: '24px',
    mobileSize: '20px',
    case: 'Sentence',
    letterSpacing: '0px',
    lineHeight: '36px',
    mobileLineHeight: '30px',
    cssClass: '.figma-h4',
    specimen: 'Almost before we knew it, we had left the ground.',
    usage: 'Card titles, dialog headers, section subheaders',
  },
  {
    name: 'H5',
    category: 'Headline',
    typeface: 'Public Sans',
    weight: 'Bold (700)',
    numericWeight: 700,
    size: '20px',
    mobileSize: '18px',
    case: 'Sentence',
    letterSpacing: '0px',
    lineHeight: '30px',
    mobileLineHeight: '27px',
    cssClass: '.figma-h5',
    specimen: 'Almost before we knew it, we had left the ground.',
    usage: 'Widget titles, table group headers, drawer headers',
  },
  {
    name: 'H6',
    category: 'Headline',
    typeface: 'Public Sans',
    weight: 'Bold (700)',
    numericWeight: 700,
    size: '18px',
    mobileSize: '17px',
    case: 'Sentence',
    letterSpacing: '0px',
    lineHeight: '28px',
    mobileLineHeight: '26px',
    cssClass: '.figma-h6',
    specimen: 'Almost before we knew it, we had left the ground.',
    usage: 'Small widget headers, KPI card titles, popover titles',
  },
  {
    name: 'SUBTITLE1',
    category: 'Text',
    typeface: 'Public Sans',
    weight: 'SemiBold (600)',
    numericWeight: 600,
    size: '16px',
    mobileSize: '16px',
    case: 'Sentence',
    letterSpacing: '0px',
    lineHeight: '24px',
    mobileLineHeight: '24px',
    cssClass: '.figma-subtitle1',
    specimen: 'Almost before we knew it, we had left the ground.',
    usage: 'Lead paragraphs, prominent subtitles, card intro descriptions',
  },
  {
    name: 'SUBTITLE2',
    category: 'Text',
    typeface: 'Public Sans',
    weight: 'SemiBold (600)',
    numericWeight: 600,
    size: '14px',
    mobileSize: '14px',
    case: 'Sentence',
    letterSpacing: '0px',
    lineHeight: '22px',
    mobileLineHeight: '22px',
    cssClass: '.figma-subtitle2',
    specimen: 'Almost before we knew it, we had left the ground.',
    usage: 'Secondary subtitles, form section labels, badge lead copy',
  },
  {
    name: 'body1',
    category: 'Text',
    typeface: 'Public Sans',
    weight: 'Regular (400)',
    numericWeight: 400,
    size: '16px',
    mobileSize: '16px',
    case: 'Sentence',
    letterSpacing: '0px',
    lineHeight: '24px',
    mobileLineHeight: '24px',
    cssClass: '.figma-body1',
    specimen: 'Almost before we knew it, we had left the ground.',
    usage: 'Standard long-form prose, UX case study narratives, documentation body',
  },
  {
    name: 'body2',
    category: 'Text',
    typeface: 'Public Sans',
    weight: 'Regular (400)',
    numericWeight: 400,
    size: '14px',
    mobileSize: '14px',
    case: 'Sentence',
    letterSpacing: '0px',
    lineHeight: '22px',
    mobileLineHeight: '22px',
    cssClass: '.figma-body2',
    specimen: 'Almost before we knew it, we had left the ground.',
    usage: 'Dense table cells, list items, card details, form helper text',
  },
  {
    name: 'CAPTION',
    category: 'Text',
    typeface: 'Public Sans',
    weight: 'Regular (400)',
    numericWeight: 400,
    size: '12px',
    mobileSize: '12px',
    case: 'Sentence',
    letterSpacing: '0px',
    lineHeight: '18px',
    mobileLineHeight: '18px',
    cssClass: '.figma-caption',
    specimen: 'Almost before we knew it, we had left the ground.',
    usage: 'Diagram captions, metadata tags, chart axis labels, footnote notices',
  },
  {
    name: 'OVERLINE',
    category: 'Text',
    typeface: 'Public Sans',
    weight: 'Bold (700)',
    numericWeight: 700,
    size: '12px',
    mobileSize: '12px',
    case: 'All caps',
    letterSpacing: '1px',
    lineHeight: '18px',
    mobileLineHeight: '18px',
    cssClass: '.figma-overline',
    specimen: 'ALMOST BEFORE WE KNEW IT, WE HAD LEFT THE GROUND.',
    usage: 'Category super-labels, metadata pills, section index markers',
  },
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


