export interface ScreenHotspot {
  n: number
  x: number
  y: number
  element: string
  does: string
  why: string
  evidence: string[]
}

export interface ScreenData {
  id: string
  name: string
  platform: "Desktop" | "Mobile" | "Tablet" | "Universal"
  priority: "P0" | "P1" | "P2"
  status: "Approved" | "Review" | "Draft"
  flow: string
  summary: string
  userGoal: string
  image: string
  alt: string
  states: {
    key: string
    label: string
    image: string
  }[]
  hotspots: ScreenHotspot[]
  entry: string[]
  exit: string[]
  primaryAction: string
  secondaryActions: string[]
  responsive: string
  accessibility: string[]
  analytics: { event: string; trigger: string }[]
  beforeAfter?: {
    beforeMetric: string
    afterMetric: string
    metricDelta: string
    explanation: string
  }
  notes?: string
}

export const screensData: ScreenData[] = [
  {
    id: "D01",
    name: "General Analytics",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "Executive Traffic & Conversion Audit",
    summary:
      "Centralized traffic monitoring, acquisition source tracking, and regional conversion attribution for SaaS growth leads.",
    userGoal:
      "I want to audit cross-channel traffic spikes and regional conversion velocity so that I can reallocate advertising spend before morning standups.",
    image: "/images/General_Analytics.png",
    alt: "General Analytics dashboard displaying Weekly Sales, New Users, Item Orders, and Website Visits charts",
    states: [
      { key: "default", label: "Default (Light)", image: "/images/General_Analytics.png" },
      { key: "dark", label: "Dark Elevation", image: "/images/[DARK] General_Analytics.png" },
      { key: "layout", label: "Wireframe / Layout", image: "/images/[LAYOUT] General_Analytics.png" },
      { key: "mobile", label: "Mobile Adaptive", image: "/images/[MOBILE] General_Analytics.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 23,
        y: 15,
        element: "Weekly Sales KPI Card",
        does: "Displays real-time revenue velocity with integrated mini-sparkline and period delta.",
        why: "78% of executives requested an immediate financial heartbeat in the upper-left scanning anchor.",
        evidence: ["R01", "R05"],
      },
      {
        n: 2,
        x: 48,
        y: 15,
        element: "New Users Influx Card",
        does: "Quantifies user onboarding velocity with week-over-week comparative percentage badge.",
        why: "Growth directors prioritize user acquisition over total active count for marketing sprint cadence.",
        evidence: ["R02"],
      },
      {
        n: 3,
        x: 35,
        y: 38,
        element: "Current Visits Donut / Radar",
        does: "Plots international geographic attribution across America, Europe, Asia, and Africa.",
        why: "Replaces 12-row nested geographic tables with instant visual polar distribution.",
        evidence: ["R03"],
      },
      {
        n: 4,
        x: 75,
        y: 38,
        element: "Website Visits Multi-Series Bar",
        does: "Compares team desktop versus mobile traffic across monthly cohorts with interactive hover tooltips.",
        why: "Cross-functional teams need direct viewport parity comparison without switching views.",
        evidence: ["R04"],
      },
      {
        n: 5,
        x: 38,
        y: 72,
        element: "Conversion Rates Horizontal Bar",
        does: "Shows touchpoint conversion rates from first click to paid subscription.",
        why: "Highlights drop-offs between organic social and paid search immediately.",
        evidence: ["R06"],
      },
    ],
    entry: ["Global Nav → Dashboard → Analytics", "Direct URL /dashboard/analytics", "⌘K Quick Switcher"],
    exit: ["Campaign Detail Drawer", "Raw Telemetry Export Dialog", "Regional Filter Drilldown"],
    primaryAction: "Filter by Date Range & Channel",
    secondaryActions: ["Export CSV", "Switch to Dark Mode", "Toggle Chart Series"],
    responsive:
      "At <1024px, the 4-column metric cards stack into a 2x2 grid. At <768px, charts stack vertically with sticky horizontal scroll on data tables.",
    accessibility: [
      "All chart colors satisfy WCAG 2.2 AA (contrast > 4.5:1 against card background)",
      "Screen-reader accessible semantic HTML table fallback available via 'View Data'",
      "Keyboard tab order strictly traverses KPI cards → Visits chart → Conversion bars",
    ],
    analytics: [
      { event: "analytics_range_changed", trigger: "User selects new date range preset" },
      { event: "channel_drilldown_opened", trigger: "User clicks on Conversion bar row" },
    ],
    beforeAfter: {
      beforeMetric: "74s",
      afterMetric: "41s",
      metricDelta: "-44.6% Time on Task",
      explanation:
        "Consolidating 4 disconnected tabular reports into 4 anchor KPI sparkline cards reduced executive status audit time from 74 seconds to 41 seconds.",
    },
    notes:
      "Original 2021 release featured Public Sans typography. The OKLCH palette keeps the vivid emerald (#00AB55) primary indicator intact across all modes.",
  },
  {
    id: "D02",
    name: "General App",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "SaaS Command & Installed Extension Oversight",
    summary:
      "Application operations cockpit providing featured extension discovery, active seat utilization gauges, and monthly storage cost breakdown.",
    userGoal:
      "I want to monitor team extension usage and disk quota consumption so that I can optimize subscription tier licenses before monthly renewals.",
    image: "/images/General_App.png",
    alt: "General App dashboard showing Featured App hero banner, Active Users donut, and Installed App grid",
    states: [
      { key: "default", label: "Default (Light)", image: "/images/General_App.png" },
      { key: "dark", label: "Dark Elevation", image: "/images/[DARK] General_App.png" },
      { key: "layout", label: "Wireframe / Layout", image: "/images/[LAYOUT] General_App.png" },
      { key: "mobile", label: "Mobile Adaptive", image: "/images/[MOBILE] General_App.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 35,
        y: 20,
        element: "Featured App Hero Carousel",
        does: "Cycles through promoted SaaS integrations with direct Launch / Configure CTA buttons.",
        why: "Boosted integration discoverability by 64% during initial cohort release.",
        evidence: ["R01", "R08"],
      },
      {
        n: 2,
        x: 75,
        y: 20,
        element: "Active Installed Donut Gauge",
        does: "Visualizes active seat utilization vs purchased enterprise seat quota.",
        why: "IT managers need early threshold alerts before exceeding contract tier allocations.",
        evidence: ["R02"],
      },
      {
        n: 3,
        x: 32,
        y: 52,
        element: "Installed Applications Grid",
        does: "Displays quick-access cards for connected tools (Slack, Jira, GitHub) with live sync badges.",
        why: "Centralizes disconnected extension configurations in one spatial dashboard.",
        evidence: ["R03"],
      },
      {
        n: 4,
        x: 72,
        y: 52,
        element: "Storage Usage & Invoice Log",
        does: "Shows monthly server storage utilization ring and downloadable PDF invoice history.",
        why: "Combines technical capacity monitoring with financial accounting transparency.",
        evidence: ["R05"],
      },
    ],
    entry: ["Sidebar → App", "Command Palette ⌘K → App Cockpit"],
    exit: ["App Marketplace Settings", "Invoice Download", "Integration OAuth Flow"],
    primaryAction: "Manage Installed Integrations",
    secondaryActions: ["Filter by Category", "View Storage Analytics", "Download Invoices"],
    responsive:
      "Featured hero adapts from side-by-side artwork layout to stacked text banner on mobile screens. Installed app cards stack to 1 column.",
    accessibility: [
      "Carousel buttons contain aria-label='Previous Slide' and aria-label='Next Slide'",
      "Radial gauges include text equivalent percentage labels inside center aperture",
      "Touch targets on app cards exceed 48x48px",
    ],
    analytics: [
      { event: "app_carousel_clicked", trigger: "User interacts with featured application banner" },
      { event: "invoice_downloaded", trigger: "User triggers PDF invoice export" },
    ],
    notes:
      "First designed in 2021 as a unified multi-tenant dashboard archetype for modern cloud back-offices.",
  },
  {
    id: "D03",
    name: "General Banking",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "Treasury Management & Instant Fund Transfer",
    summary:
      "Enterprise cash-flow management cockpit featuring dual-currency credit cards, interactive quick-transfer slider, and expense category radar.",
    userGoal:
      "I want to quickly verify liquidity across USD/EUR accounts and execute a vendor transfer without navigating through a 5-step banking modal.",
    image: "/images/General_Banking.png",
    alt: "General Banking dashboard showing Dual Balance Visa cards, Quick Transfer slider, and Balance History chart",
    states: [
      { key: "default", label: "Default (Light)", image: "/images/General_Banking.png" },
      { key: "dark", label: "Dark Elevation", image: "/images/[DARK] General_Banking.png" },
      { key: "layout", label: "Wireframe / Layout", image: "/images/[LAYOUT] General_Banking.png" },
      { key: "mobile", label: "Mobile Adaptive", image: "/images/[MOBILE] General_Banking.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 25,
        y: 22,
        element: "Dual-Currency Balance Cards",
        does: "Renders Visa virtual/physical card silhouettes with masked account number and instant copy button.",
        why: "Finance managers juggle cross-border operations and need distinct spatial currency separation.",
        evidence: ["R01", "R03"],
      },
      {
        n: 2,
        x: 68,
        y: 22,
        element: "Quick Transfer Interactive Slider & Avatar Row",
        does: "Selects favorite contact avatars and dials exact transfer amount via tactile range slider.",
        why: "Pritam's iconic 2021 interaction pattern, slashing transfer completion from 48s down to 12s.",
        evidence: ["R03", "R08"],
      },
      {
        n: 3,
        x: 32,
        y: 56,
        element: "Balance History Area Trend",
        does: "Visualizes monthly liquid asset curves with inflection points and inflow/outflow toggles.",
        why: "Enables CFOs to detect liquidity dips before committing to scheduled vendor disbursements.",
        evidence: ["R02"],
      },
      {
        n: 4,
        x: 72,
        y: 56,
        element: "Expenses Categories Polar Area",
        does: "Categorizes operational overhead across payroll, cloud infrastructure, marketing, and legal.",
        why: "Visual radius immediately flags disproportionate expenditure compared to tabular budgets.",
        evidence: ["R04"],
      },
    ],
    entry: ["Sidebar → Banking", "Quick Shortcut 'B'", "Invoice Wire Notification"],
    exit: ["Wire Confirmation Modal", "Statement Export Dialog", "Card Freeze Toggle"],
    primaryAction: "Send Instant Wire Transfer",
    secondaryActions: ["Toggle Currency Card", "Filter Expense Period", "Add Beneficiary"],
    responsive:
      "Credit card container converts into a swipeable carousel on mobile. Quick transfer slider remains locked above fold with numeric keypad trigger.",
    accessibility: [
      "Range slider includes role='slider', aria-valuemin, aria-valuemax, and aria-valuenow",
      "Masked account numbers provide audio-assist readback toggle",
      "High color contrast between card text and gradient background",
    ],
    analytics: [
      { event: "banking_transfer_completed", trigger: "User completes quick transfer slider drag" },
      { event: "currency_card_toggled", trigger: "User switches active card view" },
    ],
    beforeAfter: {
      beforeMetric: "61%",
      afterMetric: "88%",
      metricDelta: "+27% Transfer Completion Rate",
      explanation:
        "Replacing a legacy 5-step wire modal with the unified Quick Transfer slider and recipient avatar bar boosted task completion from 61% to 88%.",
    },
    notes:
      "Recognized in 2021 design awards for pioneer implementation of tactile range sliders in enterprise fintech dashboards.",
  },
  {
    id: "D04",
    name: "General Booking",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "Hospitality Reservation & Review Moderation",
    summary:
      "Hospitality inventory and guest operations center with real-time occupancy gauges, check-in velocity monitors, and inline customer review moderation.",
    userGoal:
      "I want to track tonight's arrival schedule and moderate flagged guest feedback without leaving the front-desk operational overview.",
    image: "/images/General_Booking.png",
    alt: "General Booking dashboard displaying Total Booking gauges, Booked Room status, Reservation table, and Customer Reviews queue",
    states: [
      { key: "default", label: "Default (Light)", image: "/images/General_Booking.png" },
      { key: "dark", label: "Dark Elevation", image: "/images/[DARK] General_Booking.png" },
      { key: "layout", label: "Wireframe / Layout", image: "/images/[LAYOUT] General_Booking.png" },
      { key: "mobile", label: "Mobile Adaptive", image: "/images/[MOBILE] General_Booking.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 25,
        y: 16,
        element: "Total Booking Capacity Gauge",
        does: "Shows reserved room count versus maximum facility limit with sold-out threshold marker.",
        why: "Front-desk leads prevent overbooking during high-traffic holiday surges.",
        evidence: ["R01"],
      },
      {
        n: 2,
        x: 65,
        y: 28,
        element: "Booked Room Status Multi-Color Bar",
        does: "Visualizes breakdown of Pending, Checked-in, and Cancelled rooms.",
        why: "Cleaning and maintenance staff prioritize room turnover based on checkout velocity.",
        evidence: ["R02"],
      },
      {
        n: 3,
        x: 30,
        y: 58,
        element: "Reservation Customer List Table",
        does: "Inline guest search with avatar thumbnails, room category, check-in timestamp, and status chips.",
        why: "Eliminates navigating to separate guest dossiers for everyday front-desk lookups.",
        evidence: ["R04"],
      },
      {
        n: 4,
        x: 75,
        y: 58,
        element: "Customer Reviews Moderation Queue",
        does: "Allows front-desk managers to approve, reply to, or escalate customer feedback directly.",
        why: "Reduces response latency on negative reviews from 6 hours to under 15 minutes.",
        evidence: ["R07"],
      },
    ],
    entry: ["Sidebar → Booking", "Front Desk Terminal Launch"],
    exit: ["Guest Check-in Flow", "Room Inventory Settings", "Review Detail Modal"],
    primaryAction: "Check-in Guest & Assign Key",
    secondaryActions: ["Filter by Date Presets", "Moderate Reviews", "Export Occupancy Report"],
    responsive:
      "Customer list table transitions to swipeable card stack on mobile viewports. Reviews queue collapses into modal drawer.",
    accessibility: [
      "Status chips (Checked-In, Pending, Cancelled) use distinct shape glyphs alongside color",
      "Table rows support keyboard arrow navigation (up/down/enter)",
      "Review moderation buttons feature explicit aria labels",
    ],
    analytics: [
      { event: "booking_checkin_triggered", trigger: "User marks guest as Checked In" },
      { event: "review_moderated", trigger: "User approves or rejects review" },
    ],
    beforeAfter: {
      beforeMetric: "6.8 clicks",
      afterMetric: "2.1 clicks",
      metricDelta: "-69% Interaction Effort",
      explanation:
        "Introducing unified quick date-range chips and embedded review moderation eliminated 4.7 unnecessary navigation hops per reservation lookup.",
    },
    notes:
      "Created to support luxury boutique hotels, co-living spaces, and asset leasing enterprises.",
  },
  {
    id: "D05",
    name: "General E-Commerce",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "Merchant Order Fulfillment & Inventory Velocity",
    summary:
      "Multi-channel merchant intelligence platform featuring revenue profit margins, buyer gender demographics, best-seller leaderboards, and order queues.",
    userGoal:
      "I want to identify best-selling SKUs and fulfill high-priority orders before afternoon shipping deadlines.",
    image: "/images/General_Ecommerce.png",
    alt: "General E-Commerce dashboard showing Sales Profit area chart, Sale by Gender donut, and Best Seller Products list",
    states: [
      { key: "default", label: "Default (Light)", image: "/images/General_Ecommerce.png" },
      { key: "dark", label: "Dark Elevation", image: "/images/[DARK] General_Ecommerce.png" },
      { key: "layout", label: "Wireframe / Layout", image: "/images/[LAYOUT] General_Ecommerce.png" },
      { key: "mobile", label: "Mobile Adaptive", image: "/images/[MOBILE] General_Ecommerce.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 24,
        y: 24,
        element: "Sales Profit Multi-Area Chart",
        does: "Compares gross product sales against net profit margin across weekly cycles.",
        why: "Merchants need immediate clarity on unit margins after accounting for paid acquisition costs.",
        evidence: ["R01"],
      },
      {
        n: 2,
        x: 68,
        y: 24,
        element: "Sale by Gender Radial Donut",
        does: "Displays customer demographic distribution with total purchase count.",
        why: "Guides rapid promotional rotation and ad creative segmentation.",
        evidence: ["R03"],
      },
      {
        n: 3,
        x: 32,
        y: 65,
        element: "Best Seller Products Leaderboard",
        does: "Ranks top-performing items with thumbnail, category, revenue generated, and remaining inventory.",
        why: "Prevents stockouts by highlighting fast-depleting high-margin inventory items.",
        evidence: ["R05"],
      },
      {
        n: 4,
        x: 75,
        y: 65,
        element: "Latest Orders Fulfillment Table",
        does: "Real-time dispatch log showing customer info, payment type, shipping stage, and quick print invoice action.",
        why: "Speeds up warehouse dispatch operations during peak promotional sales periods.",
        evidence: ["R02"],
      },
    ],
    entry: ["Sidebar → E-Commerce", "Shopify/WooCommerce Webhook Hook", "⌘K → Orders"],
    exit: ["Order Fulfillment Drawer", "SKU Stock Editor", "Shipping Manifest Export"],
    primaryAction: "Dispatch & Fulfill Selected Orders",
    secondaryActions: ["Filter by Payment Status", "Export Daily Sales CSV", "Update Inventory Cap"],
    responsive:
      "Best-seller table prioritizes thumbnail, name, and revenue on mobile; hides category and sku to preserve readability without side-scroll.",
    accessibility: [
      "Product thumbnails include descriptive alt text derived from product titles",
      "Order status badges (Paid, Pending, Refunded) follow 4.5:1 contrast standards",
      "Print invoice button provides explicit screen-reader explanation",
    ],
    analytics: [
      { event: "ecommerce_order_fulfilled", trigger: "Merchant marks order dispatched" },
      { event: "sku_stock_clicked", trigger: "Merchant clicks low stock warning badge" },
    ],
    notes:
      "Tailored for Shopify Plus merchants, direct-to-consumer apparel brands, and omnichannel marketplaces.",
  },
  {
    id: "D06",
    name: "General File Manager",
    platform: "Desktop",
    priority: "P0",
    status: "Approved",
    flow: "Unified Cloud Asset Storage & Collaboration",
    summary:
      "Multi-provider enterprise asset bridge unifying Dropbox, Google Drive, OneDrive, and local storage into a structured spatial file directory.",
    userGoal:
      "I want to locate design deliverables across multiple cloud providers and monitor storage limits from a single interface.",
    image: "/images/General_File.png",
    alt: "General File Manager dashboard showing Storage Breakdown ring, Cloud Providers cards, and Folder Grid",
    states: [
      { key: "default", label: "Default (Light)", image: "/images/General_File.png" },
      { key: "dark", label: "Dark Elevation", image: "/images/[DARK] General_File.png" },
      { key: "mobile", label: "Mobile Adaptive", image: "/images/[MOBILE] General_File.png" },
    ],
    hotspots: [
      {
        n: 1,
        x: 22,
        y: 18,
        element: "Storage Consumption Radial Ring",
        does: "Segments disk usage across Images, Documents, Media, and Archives with available GB readout.",
        why: "Provides IT administrators with an early warning system before quota overage charges occur.",
        evidence: ["R01"],
      },
      {
        n: 2,
        x: 58,
        y: 18,
        element: "Unified Cloud Provider Hub",
        does: "One-click switching between Dropbox, Google Drive, OneDrive, and local file storage buckets.",
        why: "Solves enterprise file fragmentation where teams work across disparate cloud vendor drives.",
        evidence: ["R03"],
      },
      {
        n: 3,
        x: 35,
        y: 48,
        element: "Folder Hierarchy Spatial Grid",
        does: "Visual folder directory with file count, folder size, and shared member avatars.",
        why: "Improves spatial orientation compared to traditional collapsed tree-view menus.",
        evidence: ["R02"],
      },
      {
        n: 4,
        x: 35,
        y: 80,
        element: "Recent Files & Activity Datatable",
        does: "Chronological asset table with file extension icons, modified dates, and quick share actions.",
        why: "Enables collaborators to retrieve morning revisions within 2 seconds of landing.",
        evidence: ["R04"],
      },
    ],
    entry: ["Sidebar → File Manager", "Cloud Sync Tray Notification"],
    exit: ["File Preview Modal", "Folder Share Permissions Dialog", "Cloud Storage Upgrade"],
    primaryAction: "Upload File or Create Folder",
    secondaryActions: ["Search Across Cloud Drives", "Filter by File Type", "Batch Download"],
    responsive:
      "Folder cards collapse to 2 columns on tablet and 1 column on mobile. Datatable preserves filename and quick action menu on smallest viewports.",
    accessibility: [
      "File types indicated by both iconography and explicit screen-reader text (.pdf, .png, .mp4)",
      "Drag and drop upload zones provide keyboard alternative via standard file input button",
      "Share avatars include member name in title attribute and aria-label",
    ],
    analytics: [
      { event: "file_uploaded", trigger: "User completes file drag-drop or file picker upload" },
      { event: "cloud_provider_switched", trigger: "User toggles between Google Drive and Dropbox" },
    ],
    notes:
      "Pioneered spatial folder card layouts for enterprise cloud storage interfaces in the 2021 release.",
  },
]
