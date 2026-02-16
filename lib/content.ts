export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const logos = [
  "Vercel",
  "GitHub",
  "Supabase",
  "Stripe",
  "AWS",
  "MongoDB",
  "Figma",
  "Notion",
  "Linear",
  "Jira",
  "Docker",
  "Postman",
];

export const features = [
  {
    title: "Kanban + Sprint workflow",
    description:
      "Plan backlog, scope a sprint, and move issues across a dev-friendly board without losing context.",
    icon: "kanban",
  },
  {
    title: "Time Tracking & Worklog",
    description:
      "Start/stop timer per task, auto-save timeSpent, and review daily or weekly totals in one place.",
    icon: "timer",
  },
  {
    title: "Smart Automation",
    description:
      "Overdue tasks are automatically marked high priority and turn red, with optional auto-notifications.",
    icon: "zap",
  },
  {
    title: "Global Search + Filtering",
    description:
      "Hit Ctrl+K to search tasks, projects, and users, then filter by status, priority, assignee, and labels.",
    icon: "search",
  },
  {
    title: "Live updates for teams",
    description:
      "Real-time collaboration-ready workflow so changes stay visible while your team ships.",
    icon: "users",
  },
  {
    title: "Dev-first conventions",
    description:
      "Issue templates, bug/feature/chore tags, and an integration-friendly model. GitHub integration coming soon.",
    icon: "code",
  },
];

export const workflowSteps = [
  {
    value: "plan",
    label: "Plan",
    title: "Step 1. Plan your sprint",
    text: "Pull from backlog, estimate scope, and assign issue types before writing code.",
    bullets: [
      "Backlog grooming with sprint buckets",
      "Issue templates for bug/feature/chore",
      "Priority and assignee visibility",
    ],
  },
  {
    value: "build",
    label: "Build",
    title: "Step 2. Build with momentum",
    text: "Ship through Kanban columns while teammates get live updates as work progresses.",
    bullets: [
      "Dev-focused Kanban statuses",
      "Live updates collaboration-ready",
      "Quick filters for blockers",
    ],
  },
  {
    value: "review",
    label: "Review",
    title: "Step 3. Review and improve",
    text: "Use worklogs and time totals to review throughput and tighten the next sprint.",
    bullets: [
      "Per-task start/stop timers",
      "Daily and weekly time totals",
      "Exportable worklog history",
    ],
  },
];

export const pricing = [
  {
    name: "Free",
    price: "$0",
    subtitle: "For solo devs getting organized",
    cta: "Start free",
    highlight: false,
    bullets: [
      "1 seat",
      "Kanban + sprint basics",
      "Ctrl+K command palette",
      "1 automation rule",
      "Weekly worklog view",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    subtitle: "Per user/month, billed monthly",
    cta: "Get Pro",
    highlight: true,
    bullets: [
      "Up to 10 seats",
      "Advanced filtering and saved views",
      "10 automation rules",
      "Worklog CSV exports",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: "$49",
    subtitle: "Per user/month, built for product teams",
    cta: "Contact sales",
    highlight: false,
    bullets: [
      "Unlimited seats",
      "Unlimited automation rules",
      "Shared dashboards",
      "Advanced permissions",
      "GitHub integration coming soon",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Zyplo feels like it was built by people who actually ship web apps. The Ctrl+K flow saves me minutes every hour.",
    name: "Maya Chen",
    role: "Frontend Lead, Buildlane",
    initials: "MC",
  },
  {
    quote:
      "Timers per task finally made sprint reviews objective. We stopped guessing and started planning from real numbers.",
    name: "Arjun Patel",
    role: "Engineering Manager, Nodeloop",
    initials: "AP",
  },
  {
    quote:
      "Automation for overdue issues is simple but powerful. Red high-priority cards made our standups much sharper.",
    name: "Jordan Lee",
    role: "Full-stack Developer, MergeKit",
    initials: "JL",
  },
];

export const faqs = [
  {
    q: "Is Zyplo only for web development teams?",
    a: "Zyplo is optimized for web developers, but any team that prefers sprint + Kanban workflows can use it.",
  },
  {
    q: "How does time tracking work?",
    a: "Every task has a start/stop timer. Zyplo stores timeSpent automatically and rolls it up into daily and weekly totals.",
  },
  {
    q: "What can I do with Ctrl+K?",
    a: "Search tasks, projects, and users instantly, then filter by status, priority, assignee, or labels without leaving your keyboard.",
  },
  {
    q: "Do you support GitHub integration?",
    a: "GitHub integration is on our roadmap and marked as coming soon. We are designing it around developer-friendly conventions.",
  },
  {
    q: "Do you offer a free plan?",
    a: "Yes. The Free tier gives you core Kanban/sprint tooling, command palette access, and basic automation.",
  },
];

export const heroValueProps = [
  "Plan sprints on Kanban without leaving dev workflow.",
  "Track time per task with live timer and weekly worklog totals.",
  "Auto-escalate overdue tasks to high priority and find anything with Ctrl+K.",
];

export const heroSidebarNav = [
  { key: "dashboard", label: "Dashboard", icon: "layout", active: false },
  { key: "projects", label: "Projects", icon: "folder", active: false },
  { key: "my-tasks", label: "My Tasks", icon: "check-square", active: false },
  { key: "sprint", label: "Sprint", icon: "kanban", active: true },
  { key: "worklog", label: "Worklog", icon: "clock", active: false },
  { key: "reports", label: "Reports", icon: "bar-chart", active: false },
  { key: "settings", label: "Settings", icon: "settings", active: false },
];

export const heroKanbanColumns = [
  {
    key: "backlog",
    title: "Backlog",
    count: 8,
    tasks: [
      {
        id: "T-102",
        title: "Implement OAuth callback guard",
        tag: "feature",
        priority: "Med",
        due: "Apr 12",
        overdue: false,
        estimate: "5h",
        assignee: "RV",
      },
      {
        id: "T-087",
        title: "Refactor sprint metrics API contract",
        tag: "chore",
        priority: "Low",
        due: "Apr 15",
        overdue: false,
        estimate: "2h",
        assignee: "TN",
      },
    ],
  },
  {
    key: "in-progress",
    title: "In Progress",
    count: 3,
    wip: "WIP 3/5",
    tasks: [
      {
        id: "T-041",
        title: "Fix login redirect bug",
        tag: "bug",
        priority: "High",
        due: "Overdue",
        overdue: true,
        estimate: "2h",
        assignee: "RF",
      },
      {
        id: "T-119",
        title: "Command palette project scope filter",
        tag: "feature",
        priority: "Med",
        due: "Apr 11",
        overdue: false,
        estimate: "4h",
        assignee: "MC",
      },
    ],
  },
  {
    key: "review",
    title: "Review",
    count: 2,
    tasks: [
      {
        id: "T-054",
        title: "Optimize board hydration path",
        tag: "chore",
        priority: "Med",
        due: "Apr 10",
        overdue: false,
        estimate: "3h",
        assignee: "JL",
      },
    ],
  },
  {
    key: "done",
    title: "Done",
    count: 5,
    tasks: [
      {
        id: "T-029",
        title: "Weekly worklog export CSV",
        tag: "feature",
        priority: "Low",
        due: "Apr 08",
        overdue: false,
        estimate: "1h",
        assignee: "AP",
      },
    ],
  },
];

export const heroSelectedTask = {
  title: "Fix login redirect bug",
  status: "In Progress",
  priority: "High",
  assignee: "Tanvir",
  labels: ["bug", "auth", "frontend"],
  due: "Apr 09, 2026",
  description:
    "Users occasionally get routed to /dashboard before auth state finalizes. Reproducible on slow network and fresh sessions.",
  checklist: [
    "Reproduce with throttled network profile",
    "Patch redirect guard and auth readiness check",
    "Add regression test for returnUrl handling",
  ],
};

export const heroWorklogEntries = [
  { date: "Apr 09", duration: "25m", note: "Reproduced race condition on callback route" },
  { date: "Apr 09", duration: "40m", note: "Added guard for stale session token" },
  { date: "Apr 10", duration: "35m", note: "Wrote regression coverage for redirect flow" },
];

export const heroWeeklyBars = [
  { day: "Mon", minutes: 65 },
  { day: "Tue", minutes: 85 },
  { day: "Wed", minutes: 45 },
  { day: "Thu", minutes: 120 },
  { day: "Fri", minutes: 75 },
];

export const heroActivity = [
  "Rifat moved task to Review",
  "Automation bumped priority to High",
  "Added label: bug",
  "Logged 25m work session",
  "Assigned to Tanvir",
];

export const heroCommandPaletteGroups = [
  {
    title: "Tasks",
    items: ["Fix login redirect bug", "Command palette project scope filter"],
  },
  {
    title: "Projects",
    items: ["Zyplo Core", "DaoScroll"],
  },
  {
    title: "Commands",
    items: ["Create task", "Start timer", "Open sprint settings"],
  },
];

export const workflowStepsData = [
  {
    id: "plan",
    label: "Plan",
    title: "Align scope before code",
    text: "Build sprint scope from backlog with labels, estimates, and owners visible before kickoff.",
    bullets: ["Backlog triage", "Sprint chips", "Issue templates"],
    panel: {
      heading: "Sprint Planning",
      items: ["auth", "payments", "bugs", "qa"],
    },
  },
  {
    id: "build",
    label: "Build",
    title: "Ship through focused flow",
    text: "Move tasks across Kanban with live updates and no standup guesswork.",
    bullets: ["WIP awareness", "Live updates", "Priority surfacing"],
    panel: {
      heading: "In Progress Lane",
      items: ["Fix OAuth callback", "Edge cache invalidation", "Command filter logic"],
    },
  },
  {
    id: "ship",
    label: "Ship",
    title: "Review with confidence",
    text: "Close sprint loops with checklist status, deployment readiness, and clean handoff.",
    bullets: ["QA checklist", "Release notes", "Deploy ready"],
    panel: {
      heading: "Release Review",
      items: ["Tests passing", "No blockers", "Deploy ready"],
    },
  },
];

export const timeTrackingData = {
  currentTask: "Fix login redirect bug",
  running: "01:24:39",
  weeklyTotal: "24h 35m",
  trend: "+11%",
  bars: [48, 72, 55, 84, 63, 32, 58],
  entries: [
    { task: "Fix login redirect bug", duration: "25m", when: "Today 10:32" },
    { task: "Refactor auth middleware", duration: "42m", when: "Today 09:08" },
    { task: "Sprint planning notes", duration: "17m", when: "Yesterday" },
  ],
};

export const commandPaletteData = {
  prompts: ["Search tasks...", "Open project...", "Run command..."],
  groups: [
    {
      title: "Tasks",
      items: ["Fix login redirect bug", "Update sprint burndown widget", "Patch stale cache issue"],
    },
    {
      title: "Projects",
      items: ["Zyplo Core", "Marketing Site", "Developer Docs"],
    },
    {
      title: "Commands",
      items: ["Create task", "Start timer", "Go to sprint board"],
    },
  ],
  preview: {
    title: "Fix login redirect bug",
    meta: "bug • high priority • assignee: Tanvir",
    text: "Redirect race appears on cold sessions. Guard with auth-ready state before route push.",
  },
};

export const testimonialStats = [
  { label: "Less context switching", value: "-31%" },
  { label: "Faster standups", value: "2.4x" },
  { label: "Clear ownership", value: "99%" },
];

export const testimonialsRailData = [
  {
    name: "Rifat Hasan",
    role: "Tech Lead, Byteforge",
    initials: "RH",
    quote: "Our sprint board finally mirrors how frontend work actually moves. Ctrl+K is the killer feature.",
    featured: true,
  },
  {
    name: "Tanvir Ahmed",
    role: "Senior Engineer, OpsGrid",
    initials: "TA",
    quote: "The worklog totals made retro decisions objective instead of opinion-driven.",
    featured: false,
  },
  {
    name: "Maya Chen",
    role: "Frontend Lead, Buildlane",
    initials: "MC",
    quote: "Automation escalating overdue issues removed half our follow-up noise.",
    featured: false,
  },
  {
    name: "Arjun Patel",
    role: "EM, Nodeloop",
    initials: "AP",
    quote: "The UI is lightweight, keyboard-first, and doesn’t fight developers.",
    featured: false,
  },
];

export const automationRulesData = {
  rule:
    "IF Due date < Today AND Status != Done -> THEN set Priority = High, Label = Overdue, Notify assignee",
  before: {
    title: "Fix login redirect bug",
    priority: "Medium",
    label: "bug",
    due: "Overdue by 2 days",
  },
  after: {
    title: "Fix login redirect bug",
    priority: "High",
    label: "overdue",
    due: "Overdue by 2 days",
  },
  notes: [
    "Priority bumped automatically",
    "Card color updated to red",
    "Assignee notified in-app",
  ],
};
