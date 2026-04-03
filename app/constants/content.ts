import {
  TargetIcon,
  EyeIcon,
  MedalIcon,
  UsersIcon,
  MegaphoneIcon,
  StarIcon,
  CodeIcon,
  ArrowsClockwiseIcon,
  GlobeIcon,
  GraduationCapIcon,
  BabyIcon,
  HeartIcon,
  BuildingsIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  StrategyIcon,
  FlowArrowIcon,
  FileTextIcon,
  GearIcon,
  RobotIcon,
  TrendUpIcon,
  ShieldIcon,
  BriefcaseIcon,
  MagnifyingGlassIcon,
  ArrowsLeftRightIcon,
  BookOpenIcon,
  FacebookLogoIcon,
  TwitterLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

// ─── Hero Slider ─────────────────────────────────────────────────────────────

export const heroSlides = [
  {
    id: 1,
    category: "STARTUP CONSULTING",
    title: "Transform your startup with structured business systems",
    description:
      "Our startup consulting services provide comprehensive business systems development, from company policies and procedures to business process management. Build the foundation for sustainable growth without founder dependency.",
    tab: "Startup Consulting",
    image:
      "https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRU8lMjBsZWFkZXJzaGlwJTIwZnV0dXJlJTIwc3RyYXRlZ3klMjB2aXNpb258ZW58MXx8fHwxNzcyMzM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    category: "BUSINESS PROCESS MANAGEMENT",
    title: "Systemize operations with proven business processes and procedures",
    description:
      "Implement comprehensive business process management systems with documented company policies and procedures. Eliminate operational bottlenecks and create scalable workflows that drive efficiency and growth.",
    tab: "Process Management",
    image:
      "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    category: "CORPORATE TRAINING",
    title: "Elevate workforce performance through strategic corporate training",
    description:
      "Our corporate training programs empower teams with the skills to execute business systems effectively. From startup consulting to established enterprises, we build capabilities that sustain growth and operational excellence.",
    tab: "Corporate Training",
    image:
      "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export const heroTabs = heroSlides.map((s) => s.tab);

// ─── Navbar ──────────────────────────────────────────────────────────────────

export const navItems = [
  {
    label: "Insights",
    section: "insights",
    children: [
    ],
  },
  {
    label: "Services",
    section: "services",
    children: [
      { label: "Strategic Planning", sub: "Strategy development & scaling" },
      { label: "Governance & Structure", sub: "Organizational design & frameworks" },
      { label: "Policies & Procedures", sub: "SOPs & compliance frameworks" },
      { label: "Process Optimization", sub: "Efficiency & workflow design" },
      { label: "System Automation", sub: "Digital transformation & ERP" },
      { label: "Performance Management", sub: "KPIs & accountability systems" },
      { label: "Risk Management", sub: "Internal controls & compliance" },
      { label: "Departmental Systems", sub: "Function-specific operational excellence" },
      { label: "Gap Analysis", sub: "Organizational diagnostics & assessment" },
      { label: "Change Management", sub: "Execution & implementation support" },
      { label: "Knowledge Systems", sub: "Corporate documentation & wikis" },
      { label: "Global Delegations", sub: "International business exposure", upcoming: true },
      { label: "Junior CEO Program", sub: "Youth leadership development", upcoming: true },
      { label: "Women CEO Programs", sub: "Women entrepreneurship", upcoming: true },
    ],
  },
  {
    label: "Industries",
    section: "industries",
    children: [
      { label: "Government & Public Sector", sub: "Policy and strategy" },
      { label: "Entrepreneurship & SMEs", sub: "Growth and operations" },
      { label: "Technology & Digital", sub: "IT and innovation" },
      { label: "Financial Services", sub: "Advisory and risk" },
      { label: "Education & Training", sub: "Leadership programs" },
      { label: "Global Business", sub: "International markets" },
    ],
  },
  {
    label: "Careers",
    section: "careers",
    children: [
      { label: "Open Positions", sub: "Join our growing team" },
      { label: "Life At Canbiz", sub: "Culture and values" },
      { label: "Graduate Programs", sub: "Start your career" },
      { label: "Internships", sub: "Hands-on experience" },
    ],
  },
  {
    label: "About Us",
    section: "about",
    children: [
      { label: "Our Story", sub: "A decade of impact" },
      { label: "Mission & Vision", sub: "Purpose-driven advisory" },
      { label: "Employee Training", sub: "Cultivating leadership from within" },
    ],
  },
];

// ─── Advisory Philosophy ──────────────────────────────────────────────────────

export const advisorySection = {
  eyebrow: "Our Advisory Philosophy",
  heading: "Transforming organizations through strategic clarity and structured excellence.",
  body: "At Canbiz Consultancy, we specialize in strategic planning, organizational governance, and full-scale business process optimization. We believe the true foundation of a successful organization is a robust structural framework—not just physical expansion. Our approach combines rigorous strategic roadmapping with documented policies and procedures, creating operational ecosystems that eliminate inefficiency and drive sustainable performance. Through systematic digital transformation and performance management, we build capability-driven organizations that empower your business to function, adapt, and scale smoothly on its own.",
  image:
    "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjM1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Canbiz Consultancy",
  imageEyebrow: "Canbiz Consultancy",
  imageCaption: "Supporting organizations in building practical, scalable business systems.",
};

export const advisoryPillars = [
  {
    icon: LightbulbIcon,
    value: "Strategic Clarity",
    label: "Aligning vision with market opportunity through clear, actionable strategy and scalable business model optimization.",
  },
  {
    icon: ShieldCheckIcon,
    value: "Structured Governance",
    label: "Designing high-performance organizations with rigorous internal controls and clear accountability frameworks.",
  },
  {
    icon: ChartBarIcon,
    value: "Operational Excellence",
    label: "Streamlining business processes and automating workflows to drive maximum efficiency and measurable outcomes.",
  },
];

// ─── Services Section ─────────────────────────────────────────────────────────

export const servicesSection = {
  eyebrow: "Our Core Services",
  headingPlain: "Business Systems &",
  headingGold: "Corporate Solutions",
  subtext: "Specialized business systems, corporate training, and operational frameworks for sustainable growth.",
  ctaPrimary: "Explore All Services",
  ctaSecondary: "Request a Consultation",
};

export const services = [
  {
    id: 1,
    slug: "strategic-planning-strategy-optimization",
    icon: StrategyIcon,
    title: "Strategic Planning & Strategy Optimization",
    shortTitle: "Strategic Planning",
    description:
      "We help organizations align their vision with market opportunities by developing clear, actionable strategies that drive growth and competitive advantage.",
  },
  {
    id: 2,
    slug: "organizational-structure-governance-consulting",
    icon: BuildingsIcon,
    title: "Organizational Structure & Governance Consulting",
    shortTitle: "Governance & Structure",
    description:
      "We design structured organizations with clear roles, responsibilities, and governance systems to ensure effective decision-making and accountability.",
  },
  {
    id: 3,
    slug: "policies-procedures-development",
    icon: FileTextIcon,
    title: "Policies & Procedures Development",
    shortTitle: "Policies & Procedures",
    description:
      "We develop comprehensive policy frameworks and procedures that standardize operations and ensure compliance across all departments.",
  },
  {
    id: 4,
    slug: "business-process-design-optimization",
    icon: GearIcon,
    title: "Business Process Design & Optimization",
    shortTitle: "Process Optimization",
    description:
      "We streamline and redesign business processes to improve efficiency, reduce redundancy, and enhance operational performance.",
  },
  {
    id: 5,
    slug: "system-automation-digital-transformation",
    icon: RobotIcon,
    title: "System Automation & Digital Transformation",
    shortTitle: "System Automation",
    description:
      "We support organizations in transitioning from manual operations to automated, technology-driven systems.",
  },
  {
    id: 6,
    slug: "performance-management-systems",
    icon: ChartBarIcon,
    title: "Performance Management Systems",
    shortTitle: "Performance Management",
    description:
      "We establish measurable performance frameworks that enable organizations to track, evaluate, and improve productivity.",
  },
  {
    id: 7,
    slug: "internal-control-risk-management",
    icon: ShieldCheckIcon,
    title: "Internal Control & Risk Management",
    shortTitle: "Risk Management",
    description:
      "We design robust control systems to safeguard assets, ensure compliance, and minimize business risks.",
  },
  {
    id: 8,
    slug: "departmental-system-development",
    icon: BriefcaseIcon,
    title: "Departmental System Development",
    shortTitle: "Departmental Systems",
    description:
      "We build structured systems for each business function to ensure consistency, efficiency, and clarity.",
  },
  {
    id: 9,
    slug: "organizational-gap-analysis-business-diagnostics",
    icon: MagnifyingGlassIcon,
    title: "Organizational Gap Analysis & Business Diagnostics",
    shortTitle: "Gap Analysis",
    description:
      "We conduct in-depth assessments to identify inefficiencies, structural weaknesses, and opportunities for improvement.",
  },
  {
    id: 10,
    slug: "change-management-implementation-support",
    icon: ArrowsClockwiseIcon,
    title: "Change Management & Implementation Support",
    shortTitle: "Change Management",
    description:
      "We ensure smooth execution of new strategies and systems through structured change management and team alignment.",
  },
  {
    id: 11,
    slug: "corporate-documentation-knowledge-systems",
    icon: BookOpenIcon,
    title: "Corporate Documentation & Knowledge Systems",
    shortTitle: "Knowledge Systems",
    description:
      "We create structured documentation systems that enhance clarity, consistency, and long-term organizational knowledge.",
  },
  {
    id: 12,
    slug: "global-business-delegations",
    icon: GlobeIcon,
    title: "International Entrepreneur Exposure & Business Delegations",
    shortTitle: "Global Business Delegations",
    description:
      "Curated international business trips, market exposure visits, networking forums, and global partnership facilitation for entrepreneurs.",
    isUpcoming: true,
  },
  {
    id: 13,
    slug: "junior-ceo-program",
    icon: BabyIcon,
    title: "Junior CEO Leadership Development Program",
    shortTitle: "Junior CEO Program",
    description:
      "Structured leadership and business exposure program for children of business owners, including mentorship, internships, and entrepreneurial skill development.",
    isUpcoming: true,
  },
  {
    id: 14,
    slug: "women-leadership-programs",
    icon: HeartIcon,
    title: "She Entrepreneurship & Women CEO Leadership Programs",
    shortTitle: "Women Leadership Programs",
    description:
      "Specialized leadership, business development, and capacity-building programs designed to empower women entrepreneurs and senior executives.",
    isUpcoming: true,
  },
];

// ─── Service Detail Pages ─────────────────────────────────────────────────────

export const serviceDetails: Record<string, {
  hero: string;
  heroAlt: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  painPoints: { title: string; description: string }[];
  deliverables: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  outcomes: { metric: string; description: string }[];
  targetAudience: { title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  cta: string;
}> = {
  "strategic-planning-strategy-optimization": {
    "hero": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHBsYW5uaW5nfGVufDF8fHx8MTc3MjQwNjQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Strategic Planning & Strategy Optimization",
    "eyebrow": "Strategy & Growth",
    "headline": "Aligning vision with market opportunity.",
    "subheadline": "We help organizations develop clear, actionable strategies that drive competitive advantage and sustainable growth in complex environments.",
    "painPoints": [
      {
        "title": "Lack of Strategic Focus",
        "description": "Organizational efforts are fragmented due to a lack of clear direction and prioritized objectives."
      },
      {
        "title": "Market Misalignment",
        "description": "Products or services are out of sync with current market demands and competitive dynamics."
      },
      {
        "title": "Growth Stagnation",
        "description": "The business has hit a ceiling and lacks a clear roadmap for scaling or entering new markets."
      },
      {
        "title": "Inefficient Business Model",
        "description": "The current core revenue drivers are no longer sustainable or optimized for maximum value capture."
      }
    ],
    "deliverables": [
      {
        "title": "Business Strategy Development",
        "description": "Comprehensive long-term roadmaps defining your unique value proposition and path to market leadership."
      },
      {
        "title": "Market Alignment & Positioning",
        "description": "Data-driven assessments to ensure your offerings meet specific market needs better than competitors."
      },
      {
        "title": "Business Model Optimization",
        "description": "Restructuring revenue streams and cost structures to maximize profitability and scalability."
      },
      {
        "title": "Go-To-Market Strategy",
        "description": "Operational playbooks for successfully launching new products or entering new geographic territories."
      },
      {
        "title": "Strategic Roadmap Development",
        "description": "Phased implementation plans that translate high-level vision into specific, trackable milestones."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Discovery & Research",
        "description": "Deep-dive into your current operations, market positioning, and executive aspirations."
      },
      {
        "step": "02",
        "title": "Strategy Architecture",
        "description": "Designing the core strategic pillars and business model innovations required for growth."
      },
      {
        "step": "03",
        "title": "Roadmap Engineering",
        "description": "Translating strategy into a phased execution plan with clear ownership and KPIs."
      },
      {
        "step": "04",
        "title": "Implementation Support",
        "description": "Staying embedded with your team to ensure strategic initiatives are actually realized."
      }
    ],
    "outcomes": [
      {
        "metric": "25%+",
        "description": "Revenue Growth"
      },
      {
        "metric": "15%",
        "description": "Market Share Gain"
      },
      {
        "metric": "100%",
        "description": "Strategic Alignment"
      },
      {
        "metric": "3x",
        "description": "Valuation Increase"
      }
    ],
    "targetAudience": [
      {
        "title": "Established Enterprises",
        "description": "Companies seeking to pivot or refresh their strategy in the face of market disruption."
      },
      {
        "title": "Scaling Startups",
        "description": "High-growth ventures needing structured strategy to manage rapid expansion without chaos."
      },
      {
        "title": "Private Equity Firms",
        "description": "Investors needing to define clear value-creation plans for their portfolio acquisitions."
      }
    ],
    "whyUs": [
      {
        "title": "Execution Focused",
        "description": "We don't deliver 'shelf-ware'; we build strategies that are functionally implementable by your team."
      },
      {
        "title": "Data-Driven Insights",
        "description": "Our recommendations are backed by rigorous market analytics, not just high-level theory."
      },
      {
        "title": "Long-Term Partners",
        "description": "We view strategy as an ongoing evolution, not a one-time event."
      }
    ],
    "cta": "Accelerate Your Strategy"
  },
  "organizational-structure-governance-consulting": {
    "hero": "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc3MjQwNjQwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Organizational Structure & Governance",
    "eyebrow": "Governance & Accountability",
    "headline": "Designing organizations for decisive action.",
    "subheadline": "We build structured organizations with clear roles, responsibilities, and governance systems to ensure effective decision-making.",
    "painPoints": [
      {
        "title": "Role Ambiguity",
        "description": "Employees are unclear on where their responsibilities end and others begin, leading to duplicated efforts or gaps."
      },
      {
        "title": "Decision Bottlenecks",
        "description": "Critical decisions are delayed because the path of authority is unclear or overly centralized."
      },
      {
        "title": "Lack of Accountability",
        "description": "A lack of formal structure makes it difficult to hold individuals or departments accountable for outcomes."
      },
      {
        "title": "Communication Silos",
        "description": "Fragmented structures hinder the flow of information across the organization, eroding efficiency."
      }
    ],
    "deliverables": [
      {
        "title": "Organizational Structure Design",
        "description": "Creating functional, divisional, or matrix architectures optimized for your specific business goals."
      },
      {
        "title": "Governance Frameworks",
        "description": "Establishing the 'rules of the game' for how the organization is controlled and directed."
      },
      {
        "title": "Delegation of Authority (DOA)",
        "description": "Defining clear levels of spending and decision-making power across the hierarchy."
      },
      {
        "title": "Job Descriptions & Role Mapping",
        "description": "Detailed documentation of every position's purpose, responsibilities, and success metrics."
      },
      {
        "title": "Board & Executive Governance",
        "description": "Specialized systems for high-level oversight and executive-team accountability."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Structural Audit",
        "description": "Analyzing your current reporting lines and decision-making rituals to identify friction."
      },
      {
        "step": "02",
        "title": "Architecture Blueprinting",
        "description": "Designing a new organizational model that reflects your strategic priorities and scale."
      },
      {
        "step": "03",
        "title": "Governance Codification",
        "description": "Developing the manuals, DOA matrices, and protocols that bring the structure to life."
      },
      {
        "step": "04",
        "title": "Transition Coaching",
        "description": "Guiding leaders through the behavioral shift required to operate within the new framework."
      }
    ],
    "outcomes": [
      {
        "metric": "Zero",
        "description": "Overlap Conflict"
      },
      {
        "metric": "50%",
        "description": "Decision Speed-up"
      },
      {
        "metric": "100%",
        "description": "Role Clarity"
      },
      {
        "metric": "95%",
        "description": "Board Assurance"
      }
    ],
    "targetAudience": [
      {
        "title": "Family Businesses",
        "description": "Firms transitioning from founder-led management to professional governance."
      },
      {
        "title": "Expanding Groups",
        "description": "Companies struggling to manage multiple subsidiaries or geographic locations."
      },
      {
        "title": "Mergers & Acquisitions",
        "description": "Teams needing to integrate two distinct structures into one cohesive organization."
      }
    ],
    "whyUs": [
      {
        "title": "Practical Discipline",
        "description": "We don't create bureaucracy; we design structures that facilitate commercial velocity."
      },
      {
        "title": "Conflict Mitigation",
        "description": "Our designs proactively address potential role overlaps and power struggles."
      },
      {
        "title": "Scalable Logic",
        "description": "We build structures that can double in size without needing to be re-engineered."
      }
    ],
    "cta": "Structure For Success"
  },
  "policies-procedures-development": {
    "hero": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudHMlMjBvZmZpY2V8ZW58MXx8fHwxNzc2NDA2MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Policies & Procedures Development",
    "eyebrow": "Standardization & Compliance",
    "headline": "Standardizing excellence across the enterprise.",
    "subheadline": "We develop comprehensive policy frameworks and procedures that standardize operations and ensure compliance across all departments.",
    "painPoints": [
      {
        "title": "Inconsistent Quality",
        "description": "Output depends on which employee is performing the task, leading to unpredictable results."
      },
      {
        "title": "Compliance Risk",
        "description": "The absence of documented procedures leaves the organization exposed to regulatory and legal liability."
      },
      {
        "title": "Onboarding Lag",
        "description": "New employees take too long to reach full productivity due to a lack of instructional resources."
      },
      {
        "title": "Operational Chaos",
        "description": "Employees are constantly asking 'how do I do this?', resulting in massive time waste for management."
      }
    ],
    "deliverables": [
      {
        "title": "Corporate & Departmental Policies",
        "description": "Clear guidelines defining behavioral and operational boundaries for the entire organization."
      },
      {
        "title": "Standard Operating Procedures (SOPs)",
        "description": "Granular, step-by-step guides for executing core business tasks with absolute consistency."
      },
      {
        "title": "Compliance & Control Policies",
        "description": "Internal frameworks designed to safeguard assets and ensure adherence to local laws."
      },
      {
        "title": "Employee Handbooks",
        "description": "Accessible culture and rule summaries that set clear expectations from day one."
      },
      {
        "title": "Governance Manuals",
        "description": "High-level documentation for executive and board-level operational standards."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Baseline Audit",
        "description": "Identifying gaps in your current documentation and benchmarking against industry standards."
      },
      {
        "step": "02",
        "title": "Expert Extraction",
        "description": "Interviewing your specialists to capture 'tribal knowledge' and convert it into formal SOPs."
      },
      {
        "step": "03",
        "title": "Documentation Build",
        "description": "Authoring professional, clear, and legally-informed policy and procedure manuals."
      },
      {
        "step": "04",
        "title": "Rollout & Adoption",
        "description": "Training your team on the new standards and establishing a culture of procedural adherence."
      }
    ],
    "outcomes": [
      {
        "metric": "80%",
        "description": "Faster Onboarding"
      },
      {
        "metric": "Zero",
        "description": "Compliance Fines"
      },
      {
        "metric": "100%",
        "description": "Process Continuity"
      },
      {
        "metric": "40%",
        "description": "Admin Time Saved"
      }
    ],
    "targetAudience": [
      {
        "title": "High-Growth Startups",
        "description": "Firms needing to move beyond founder-led 'improvisation' to professional standards."
      },
      {
        "title": "Industrial Entities",
        "description": "Companies where procedural errors lead to safety risks or massive financial loss."
      },
      {
        "title": "Regulated Firms",
        "description": "Organizations requiring airtight documentation to maintain licenses and pass audits."
      }
    ],
    "whyUs": [
      {
        "title": "Radical Clarity",
        "description": "We write documents that employees actually understand and use, not just dense legal jargon."
      },
      {
        "title": "Holistic Integration",
        "description": "We ensure policies in one department don't conflict with procedures in another."
      },
      {
        "title": "Future-Ready",
        "description": "We build documentation systems that are easy to update as your business evolves."
      }
    ],
    "cta": "Standardize Your Success"
  },
  "business-process-design-optimization": {
    "hero": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3Nlc3xlbnwxfHx8fDE3NzY0MDYzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Business Process Design & Optimization",
    "eyebrow": "Efficiency & Excellence",
    "headline": "Engineering friction out of your business.",
    "subheadline": "We streamline and redesign business processes to improve efficiency, reduce redundancy, and enhance operational performance.",
    "painPoints": [
      {
        "title": "Operational Bloat",
        "description": "Workflows have historical 'residue'—unnecessary steps that add cost without adding any value."
      },
      {
        "title": "Cross-Dept Friction",
        "description": "Handoffs between departments are disjointed, leading to delays and communication breakdowns."
      },
      {
        "title": "Margin Erosion",
        "description": "Inefficient processes are quietly eating your profits through rework, errors, and wasted labor."
      },
      {
        "title": "System Fragility",
        "description": "Workflows are not resilient; a single unexpected event can cause the entire operation to stall."
      }
    ],
    "deliverables": [
      {
        "title": "Process Mapping & Documentation",
        "description": "Visualizing exactly how work flows through your company to identify every bottleneck."
      },
      {
        "title": "Process Re-Engineering",
        "description": "Radically redesigning workflows to prioritize speed, quality, and minimum human effort."
      },
      {
        "title": "Workflow Standardization",
        "description": "Creating uniform methods for execution to ensure predictable results every time."
      },
      {
        "title": "Cross-Department Integration",
        "description": "Ensuring seamless 'handoff' logic between sales, ops, finance, and support."
      },
      {
        "title": "Operational Efficiency Audits",
        "description": "Rigorous data assessments to measure the ROI of your current operational routines."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Value-Stream Analysis",
        "description": "Auditing your current processes to differentiate between value-adding work and waste."
      },
      {
        "step": "02",
        "title": "Bottleneck Identification",
        "description": "Locating the exact points where your operational velocity is being constrained."
      },
      {
        "step": "03",
        "title": "Process Re-Design",
        "description": "Architecting an optimized, 'lean' process that delivers superior results with less effort."
      },
      {
        "step": "04",
        "title": "Pilot & Refinement",
        "description": "Testing the new workflow in a controlled environment before full enterprise-wide rollout."
      }
    ],
    "outcomes": [
      {
        "metric": "30%+",
        "description": "Efficiency Gain"
      },
      {
        "metric": "-45%",
        "description": "Cycle Time"
      },
      {
        "metric": "Zero",
        "description": "Redundancy"
      },
      {
        "metric": "20%",
        "description": "Margin Increase"
      }
    ],
    "targetAudience": [
      {
        "title": "Operational Leaders",
        "description": "COOs and Ops Directors tasked with cutting costs and improving delivery speeds."
      },
      {
        "title": "Service Agencies",
        "description": "Firms looking to productize their offerings through highly standardized delivery loops."
      },
      {
        "title": "Manufacturing Groups",
        "description": "Organizations where tiny process variances lead to massive downstream costs."
      }
    ],
    "whyUs": [
      {
        "title": "Lean Methodology",
        "description": "We apply world-class lean principles to the unique context of your specific industry."
      },
      {
        "title": "Technology Balanced",
        "description": "We don't just suggest 'more software'; we fix the process first so technology actually works."
      },
      {
        "title": "Results Driven",
        "description": "Our work is measured by hard metrics like cycle time, defect rates, and gross margin."
      }
    ],
    "cta": "Optimize Your Flow"
  },
  "system-automation-digital-transformation": {
    "hero": "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI0MDY0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "System Automation & Digital Transformation",
    "eyebrow": "Digital Transformation",
    "headline": "Harnessing technology to exponentially amplify effort.",
    "subheadline": "We support organizations in transitioning from manual operations to automated, technology-driven systems for maximum scalability.",
    "painPoints": [
      {
        "title": "Manual Inefficiency",
        "description": "Teams are bogged down by repetitive, error-prone manual tasks that could be easily automated."
      },
      {
        "title": "Data Fragmentation",
        "description": "Critical business information is scattered across spreadsheets and disconnected legacy tools."
      },
      {
        "title": "Lack of Real-Time Visibility",
        "description": "Leadership cannot see the pulse of the business because data synthesis takes days or weeks."
      },
      {
        "title": "Incompatible Systems",
        "description": "Existing software tools don't talk to each other, necessitating manual data re-entry."
      }
    ],
    "deliverables": [
      {
        "title": "ERP & CRM Implementation Advisory",
        "description": "Guidance on selecting and deploying foundational enterprise software that fits your budget."
      },
      {
        "title": "Workflow Automation",
        "description": "Eliminating manual steps in your sales, HR, or finance cycles through intelligent digital triggers."
      },
      {
        "title": "Document Management Systems (DMS)",
        "description": "Transitioning to a paperless environment with centralized, searchable intellectual property."
      },
      {
        "title": "HRMS & Accounting Integration",
        "description": "Connecting your people and money data to ensure seamless cross-functional reporting."
      },
      {
        "title": "End-to-End Digital Transformation",
        "description": "A comprehensive roadmap to modernize every digital touchpoint of your organization."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Tech Stack Audit",
        "description": "Auditing your current digital assets and identifying costly redundancies or capability gaps."
      },
      {
        "step": "02",
        "title": "Automation Roadmap",
        "description": "Prioritizing automation projects based on their potential to free up team capacity and ROI."
      },
      {
        "step": "03",
        "title": "Solution Engineering",
        "description": "Designing the architecture and selecting the specific tools needed for your transformation."
      },
      {
        "step": "04",
        "title": "Deployment & Adoption",
        "description": "Managing the technical rollout and training your team to ensure the new tools are actually used."
      }
    ],
    "outcomes": [
      {
        "metric": "60%+",
        "description": "Manual Tasks Cut"
      },
      {
        "metric": "100%",
        "description": "Data Accuracy"
      },
      {
        "metric": "Instant",
        "description": "Reporting Speed"
      },
      {
        "metric": "3x",
        "description": "Software R.O.I."
      }
    ],
    "targetAudience": [
      {
        "title": "CIOs & IT Managers",
        "description": "Tech leaders looking to modernize infrastructure without breaking core business continuity."
      },
      {
        "title": "Rapidly Growing Firms",
        "description": "Companies that have outgrown spreadsheets and require enterprise-grade automation."
      },
      {
        "title": "Paper-Heavy Businesses",
        "description": "Traditional organizations looking to digitize their archives and workflows."
      }
    ],
    "whyUs": [
      {
        "title": "Vendor Agnostic",
        "description": "We don't sell software; we recommend the exact tools that are right for your specific needs."
      },
      {
        "title": "Adoption Focus",
        "description": "We know tech is useless if people don't use it; we prioritize UX and change management."
      },
      {
        "title": "Business First",
        "description": "We let your business objectives drive the technology, not the other way around."
      }
    ],
    "cta": "Automate Your Success"
  },
  "performance-management-systems": {
    "hero": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjQwNjQxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Performance Management Systems",
    "eyebrow": "Growth & Accountability",
    "headline": "Measurable clarity for every contributor.",
    "subheadline": "We establish measurable performance frameworks that enable organizations to track, evaluate, and improve productivity.",
    "painPoints": [
      {
        "title": "Strategic Disconnect",
        "description": "Employees don't understand how their daily efforts contribute to the company's annual goals."
      },
      {
        "title": "Subjective Appraisals",
        "description": "Performance reviews are based on personal feelings rather than objective, data-backed results."
      },
      {
        "title": "Lack of Accountability",
        "description": "Without clear metrics, it's impossible to distinguish between high performers and those needing support."
      },
      {
        "title": "Metric Overload",
        "description": "Leadership is tracking 50+ numbers but has no idea which ones actually drive the business."
      }
    ],
    "deliverables": [
      {
        "title": "KPI Development",
        "description": "Defining the Key Performance Indicators that truly reflect departmental and individual success."
      },
      {
        "title": "Balanced Scorecard Implementation",
        "description": "Creating holistic views of performance across finance, customers, and operations."
      },
      {
        "title": "Performance Monitoring Systems",
        "description": "Setting up the digital dashboards and routines required for real-time visibility."
      },
      {
        "title": "Employee Appraisal Systems",
        "description": "Structuring fair, transparent, and motivating review cycles for the whole workforce."
      },
      {
        "title": "Departmental Target Setting",
        "description": "Cascading high-level board objectives into specific, achievable goals for every team."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Objective Distillation",
        "description": "Working with leadership to clarify exactly what 'winning' looks like for the organization."
      },
      {
        "step": "02",
        "title": "Metric Engineering",
        "description": "Selecting the 'Vital Few' leading indicators that predict future success and ignore vanity data."
      },
      {
        "step": "03",
        "title": "Cadence Design",
        "description": "Establishing the daily, weekly, and monthly rituals required to review and act on performance data."
      },
      {
        "step": "04",
        "title": "Coaching & Enablement",
        "description": "Training managers on how to use performance data for constructive feedback and professional growth."
      }
    ],
    "outcomes": [
      {
        "metric": "100%",
        "description": "Strategic Alignment"
      },
      {
        "metric": "25%+",
        "description": "Productivity Increase"
      },
      {
        "metric": "Zero",
        "description": "Appraisal Bias"
      },
      {
        "metric": "High",
        "description": "Meritocratic Culture"
      }
    ],
    "targetAudience": [
      {
        "title": "Executive Boards",
        "description": "Leaders needing a clear, unfiltered view of how the organization is actually performing."
      },
      {
        "title": "HR Directors",
        "description": "Professionals tasked with building a merit-based culture and improving talent retention."
      },
      {
        "title": "Regional Managers",
        "description": "Leaders managing multiple sites who need standardized performance data to compare results."
      }
    ],
    "whyUs": [
      {
        "title": "Leading Indicators",
        "description": "We focus on the inputs that generate results, not just looking in the rearview mirror at profit."
      },
      {
        "title": "Radical Simplicity",
        "description": "We strip away the noise, focusing on the 3-5 metrics that truly move the needle for each role."
      },
      {
        "title": "Behavioral Alignment",
        "description": "We ensure your metrics incentivize the right behaviors, not just gaming the system."
      }
    ],
    "cta": "Drive Better Results"
  },
  "internal-control-risk-management": {
    "hero": "https://images.unsplash.com/photo-1454165833767-027ffea9e772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNrJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NzI0MDY0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Internal Control & Risk Management",
    "eyebrow": "Compliance & Security",
    "headline": "Safeguarding your hard-earned progress.",
    "subheadline": "We design robust control systems to safeguard assets, ensure compliance, and minimize business risks.",
    "painPoints": [
      {
        "title": "Financial Leakage",
        "description": "Ineffective internal controls are leading to unchecked spending or potential cases of fraud."
      },
      {
        "title": "Regulatory Exposure",
        "description": "The organization is not fully compliant with local regulations, risking heavy fines or license loss."
      },
      {
        "title": "Operational Vulnerability",
        "description": "A lack of risk assessment means the company is unprepared for black-swan events or market shocks."
      },
      {
        "title": "Lack of Oversight",
        "description": "Management has no formal reporting or check-points to ensure that delegated tasks are handled properly."
      }
    ],
    "deliverables": [
      {
        "title": "Internal Control System Design",
        "description": "Developing the checks and balances required to ensure operational integrity and honesty."
      },
      {
        "title": "Risk Management Frameworks",
        "description": "A structured method for identifying, scoring, and mitigating various business threats."
      },
      {
        "title": "Financial Controls",
        "description": "Airtight systems for budgeting, spending approvals, and financial reporting verification."
      },
      {
        "title": "Compliance Monitoring",
        "description": "Regular audit cadences to ensure the organization stays on the right side of the law."
      },
      {
        "title": "Fraud Prevention Programs",
        "description": "Specific procedural barriers and whistleblower systems to protect against internal malpractice."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Risk Assessment Audit",
        "description": "A comprehensive sweep of your organization to find hidden vulnerabilities and weak control points."
      },
      {
        "step": "02",
        "title": "Control Architecture",
        "description": "Designing customized internal controls that provide security without paralyzing the business."
      },
      {
        "step": "03",
        "title": "Policy Integration",
        "description": "Codifying the new controls into formal manuals and employee training programs."
      },
      {
        "step": "04",
        "title": "Continuous Assurance",
        "description": "Setting up internal audit cycles to ensure the controls are being followed and remain effective."
      }
    ],
    "outcomes": [
      {
        "metric": "100%",
        "description": "Compliance Score"
      },
      {
        "metric": "Zero",
        "description": "Unchecked Leaks"
      },
      {
        "metric": "Total",
        "description": "Asset Protection"
      },
      {
        "metric": "Peace",
        "description": "of Mind"
      }
    ],
    "targetAudience": [
      {
        "title": "Audit Committees",
        "description": "Boards requiring independent assurance that executive management is safeguarding assets."
      },
      {
        "title": "Growing Enterprises",
        "description": "Firms scaling rapidly that need to formalize their internal safeguards against increased complexity."
      },
      {
        "title": "Heavily Regulated Sectors",
        "description": "Businesses in finance, healthcare, or logistics where compliance is non-negotiable."
      }
    ],
    "whyUs": [
      {
        "title": "Commercial Pragmatism",
        "description": "We don't design red tape. We build controls that protect without slowing down your operations."
      },
      {
        "title": "Anticipatory Focus",
        "description": "We look for future threats (IT, ESG, Regulatory) rather than just looking at past audit failures."
      },
      {
        "title": "Holistic Visibility",
        "description": "We view risk across the entire organization, from the board room to the warehouse floor."
      }
    ],
    "cta": "Fortify Your Operations"
  },
  "departmental-system-development": {
    "hero": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjQwNjQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Departmental System Development",
    "eyebrow": "Integrated Operations",
    "headline": "Specialized excellence for every functional area.",
    "subheadline": "We build structured systems for each business function to ensure consistency, efficiency, and clarity across the enterprise.",
    "painPoints": [
      {
        "title": "Functional Imbalance",
        "description": "One department is highly efficient while others are struggling, leading to organizational friction."
      },
      {
        "title": "Siloed Operations",
        "description": "Each department uses different 'unwritten' rules, making cross-functional projects difficult."
      },
      {
        "title": "Lack of Specialization",
        "description": "Critical functions like HR or Finance are being run with generic methods rather than expert playbooks."
      },
      {
        "title": "Scalability Walls",
        "description": "A specific department cannot handle the increased volume that the rest of the company is generating."
      }
    ],
    "deliverables": [
      {
        "title": "HR & Workforce Systems",
        "description": "End-to-end frameworks for recruiting, managing, and developing human capital."
      },
      {
        "title": "Finance & Accounting Systems",
        "description": "Structured models for cash flow, budgeting, and automated financial reporting."
      },
      {
        "title": "Sales & Marketing Systems",
        "description": "Pipeline management logic, CRM protocols, and metric-driven marketing workflows."
      },
      {
        "title": "Procurement & Ops Systems",
        "description": "Uniform standards for vendor selection, inventory control, and service delivery."
      },
      {
        "title": "Customer Experience Systems",
        "description": "Repeatable frameworks for managing the entire client success journey."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Functional Diagnostic",
        "description": "Auditing a specific department's current talent, tools, and processes compared to global best-practices."
      },
      {
        "step": "02",
        "title": "System Assembly",
        "description": "Designing the specialized forms, software logic, and SOPs required to professionalize the function."
      },
      {
        "step": "03",
        "title": "Horizontal Integration",
        "description": "Ensuring the new departmental system 'speaks' to the rest of the organization's workflows."
      },
      {
        "step": "04",
        "title": "Capability Transfer",
        "description": "Training the departmental team on how to own and evolve their new specialized system."
      }
    ],
    "outcomes": [
      {
        "metric": "40%+",
        "description": "Dept Speed-up"
      },
      {
        "metric": "80%",
        "description": "Error Reduction"
      },
      {
        "metric": "100%",
        "description": "System Ownership"
      },
      {
        "metric": "Unified",
        "description": "Org Flow"
      }
    ],
    "targetAudience": [
      {
        "title": "Founders & CEOs",
        "description": "Leaders realizing that they can no longer oversee every detail and need professionalized departments."
      },
      {
        "title": "Department Heads",
        "description": "Leaders newly appointed to modernize a legacy function within a larger organization."
      },
      {
        "title": "Private Equity Firms",
        "description": "Investors looking to rapidly upgrade the functional capabilities of a portfolio company."
      }
    ],
    "whyUs": [
      {
        "title": "Domain Experts",
        "description": "We don't use generalists. Your finance system is built by a finance expert, your HR by an HR expert."
      },
      {
        "title": "Integration Logic",
        "description": "We ensure departments work together as a single machine, not as competing silos."
      },
      {
        "title": "Future-Proof Design",
        "description": "We build departmental systems intended to handle 3-5x your current volume."
      }
    ],
    "cta": "Professionalize Your Departments"
  },
  "organizational-gap-analysis-business-diagnostics": {
    "hero": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzfGVufDF8fHx8MTc3MjQwNjQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Organizational Gap Analysis",
    "eyebrow": "Business Intelligence",
    "headline": "Diagnosing the root causes of stagnation.",
    "subheadline": "We conduct in-depth assessments to identify inefficiencies, structural weaknesses, and opportunities for improvement.",
    "painPoints": [
      {
        "title": "Unexplained Stagnation",
        "description": "Despite effort and investment, the business has stopped growing and the reasons are unclear."
      },
      {
        "title": "High Operational Costs",
        "description": "Expenses are out of line with industry benchmarks, but it's hard to pinpoint exactly where the waste is."
      },
      {
        "title": "Cultural Friction",
        "description": "Teams are disconnected and morale is low, impacting productivity and client service."
      },
      {
        "title": "System Inefficiency",
        "description": "Existing workflows feel slow and outdated, but the organization is unsure how to modernize them."
      }
    ],
    "deliverables": [
      {
        "title": "Organizational Diagnostic Studies",
        "description": "A 360-degree audit of your people, process, and technology to find hidden flaws."
      },
      {
        "title": "Process & System Gap Analysis",
        "description": "Identifying exactly where your current operations fall short of your strategic goals."
      },
      {
        "title": "Role Conflict Identification",
        "description": "Finding overlaps or gaps in responsibility that are causing friction and delay."
      },
      {
        "title": "Structural Weakness Assessment",
        "description": "Measuring the resilience and scalability of your current organizational architecture."
      },
      {
        "title": "Improvement Roadmaps",
        "description": "A prioritized list of tactical and strategic moves to bridge the identified gaps."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Data Gathering",
        "description": "Extracting quantitative metrics and conducting qualitative interviews across all levels."
      },
      {
        "step": "02",
        "title": "Analysis & Insight",
        "description": "Pattern matching your data against industry best-practices to find performance variances."
      },
      {
        "step": "03",
        "title": "Root-Cause Discovery",
        "description": "Stripping away symptoms to find the underlying structural or behavioral issues."
      },
      {
        "step": "04",
        "title": "Synthesis & Reporting",
        "description": "Delivering a clear, objective assessment with immediate 'quick-win' recommendations."
      }
    ],
    "outcomes": [
      {
        "metric": "Total",
        "description": "Objective Clarity"
      },
      {
        "metric": "15%+",
        "description": "Margin Found"
      },
      {
        "metric": "100%",
        "description": "Friction Found"
      },
      {
        "metric": "Clear",
        "description": "Future Path"
      }
    ],
    "targetAudience": [
      {
        "title": "Incoming Executives",
        "description": "New CEOs or COOs needing an objective 'lay of the land' before making major changes."
      },
      {
        "title": "Stalled Enterprises",
        "description": "Companies that have hit a performance plateau and can't empirically explain why."
      },
      {
        "title": "Pre-Digital Firms",
        "description": "Organizations needing to map their process flaws before automating them into new software."
      }
    ],
    "whyUs": [
      {
        "title": "Uncompromising Objectivity",
        "description": "We deliver the unfiltered truth to leadership, untainted by internal office politics."
      },
      {
        "title": "Holistic Vision",
        "description": "We see how a problem in finance might actually be rooted in a structural flaw in HR."
      },
      {
        "title": "Action Bias",
        "description": "We don't deliver academic reports; we deliver prioritized lists of things you can fix tomorrow."
      }
    ],
    "cta": "Diagnose Your Business"
  },
  "change-management-implementation-support": {
    "hero": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjaGFuZ2V8ZW58MXx8fHwxNzc2MzM3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Change Management & Implementation Support",
    "eyebrow": "Transformation & Culture",
    "headline": "Managing the human side of execution.",
    "subheadline": "We ensure smooth execution of new strategies and systems through structured change management and team alignment.",
    "painPoints": [
      {
        "title": "Implementation Failure",
        "description": "Expensive new strategies or systems are launched but never actually adopted by the workforce."
      },
      {
        "title": "Team Resistance",
        "description": "Employees are pushing back against new ways of working, leading to delays and lower morale."
      },
      {
        "title": "Leadership Misalignment",
        "description": "Different leaders are sending conflicting signals, causing confusion and apathy among staff."
      },
      {
        "title": "Culture Clash",
        "description": "The current organizational culture is actively working against the proposed strategic shifts."
      }
    ],
    "deliverables": [
      {
        "title": "Change Management Strategy",
        "description": "A comprehensive plan to navigate the emotional and practical transition of a transformation."
      },
      {
        "title": "Leadership Alignment Programs",
        "description": "Coaching and workshops to ensure the executive team presents a unified front."
      },
      {
        "title": "Staff Training & Enablement",
        "description": "Hands-on upskilling to ensure every employee feels capable of operating in the new reality."
      },
      {
        "title": "Implementation Roadmaps",
        "description": "Practical, phased schedules that balance speed with the organization's capacity for change."
      },
      {
        "title": "Transformation Support",
        "description": "Embedded consultants to monitor adoption and pivot the strategy as needed."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Readiness Audit",
        "description": "Assessing if your organization possesses the emotional and time bandwidth to handle a major shift."
      },
      {
        "step": "02",
        "title": "Coalition Building",
        "description": "Recruiting and training influential internal champions to drive the change from the ground up."
      },
      {
        "step": "03",
        "title": "Strategic Communication",
        "description": "Drafting and deploying the 'why' behind the change to win hearts and minds across the firm."
      },
      {
        "step": "04",
        "title": "Institutionalization",
        "description": "Establishing the feedback loops and reward systems needed to make the change permanent."
      }
    ],
    "outcomes": [
      {
        "metric": "90%+",
        "description": "Adoption Rate"
      },
      {
        "metric": "Zero",
        "description": "Strategic Rollback"
      },
      {
        "metric": "High",
        "description": "Team Morale"
      },
      {
        "metric": "100%",
        "description": "Project Success"
      }
    ],
    "targetAudience": [
      {
        "title": "CEO & Board Members",
        "description": "Leaders pushing through a highly disruptive shift in strategy or organizational model."
      },
      {
        "title": "Integration Managers",
        "description": "PMOs responsible for merging companies or launching major cross-functional systems."
      },
      {
        "title": "HR Business Partners",
        "description": "People leaders managing the human impact of rapid scaling or restructuring."
      }
    ],
    "whyUs": [
      {
        "title": "Psychology Based",
        "description": "We understand that resistance is a human survival mechanism; we design our change plans to neutralize it."
      },
      {
        "title": "Proactive Defense",
        "description": "We identify and engage key internal influencers long before the change is officially 'launched'."
      },
      {
        "title": "Results Obsessed",
        "description": "We don't measure success by workshops held, but by the actual behavioral shift of the workforce."
      }
    ],
    "cta": "Manage Your Transformation"
  },
  "corporate-documentation-knowledge-systems": {
    "hero": "https://images.unsplash.com/photo-1517842645767-c639042777db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlcyUyMGJvb2t8ZW58MXx8fHwxNzcyNDA2NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Corporate Documentation & Knowledge Systems",
    "eyebrow": "Knowledge Management",
    "headline": "Securing your intellectual capital.",
    "subheadline": "We create structured documentation systems that enhance clarity, consistency, and long-term organizational knowledge.",
    "painPoints": [
      {
        "title": "Knowledge Evaporation",
        "description": "When key staff leave the company, their critical 'know-how' leaves with them, creating massive risk."
      },
      {
        "title": "Duplicate Inquiries",
        "description": "Management spends hours answering the same fundamental procedural questions over and over again."
      },
      {
        "title": "Version Chaos",
        "description": "Employees are using outdated or conflicting documents found on various local drives or chat threads."
      },
      {
        "title": "Instructional Gaps",
        "description": "Critical tasks go unperformed or are done incorrectly because no one 'wrote down the right way'."
      }
    ],
    "deliverables": [
      {
        "title": "Policy & SOP Manuals",
        "description": "Formalizing your company's core guidelines and procedures into professional, searchable volumes."
      },
      {
        "title": "Process Documentation",
        "description": "Visual and written records of every critical workflow across the enterprise."
      },
      {
        "title": "Corporate Knowledge Base",
        "description": "Centralized digital 'wikis' or portals designed for skill-based internal training."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Information Audit",
        "description": "Locating where your business's critical knowledge currently resides—in drives, minds, or emails."
      },
      {
        "step": "02",
        "title": "Extraction & Authoring",
        "description": "Interviewing top performers to convert their 'expert intuition' into explicit, written logic."
      },
      {
        "step": "03",
        "title": "Architecture Build",
        "description": "Designing the digital structure for your knowledge base so information is found in seconds."
      },
      {
        "step": "04",
        "title": "Maintenance Protocol",
        "description": "Establishing the rules for who is responsible for updating the knowledge base as your business evolves."
      }
    ],
    "outcomes": [
      {
        "metric": "10k+",
        "description": "Assets Codified"
      },
      {
        "metric": "100%",
        "description": "IP Security"
      },
      {
        "metric": "-75%",
        "description": "Search Time"
      },
      {
        "metric": "Total",
        "description": "Org. Clarity"
      }
    ],
    "targetAudience": [
      {
        "title": "Scaling Founders",
        "description": "Leaders needing to rapidly decouple critical training from their own personal calendar."
      },
      {
        "title": "Hybrid/Remote Teams",
        "description": "Organizations that can't rely on 'tap-on-the-shoulder' knowledge sharing in a physical office."
      },
      {
        "title": "Succession Planners",
        "description": "Firms preparing for leadership transitions that require institutional knowledge to remain stable."
      }
    ],
    "whyUs": [
      {
        "title": "Linguistic Precision",
        "description": "We write documents that are impossible to misunderstand, focused on high-speed execution."
      },
      {
        "title": "Structural Logic",
        "description": "We don't just write; we architect information systems that are intuitive for the human brain."
      },
      {
        "title": "Continuity Mindset",
        "description": "We view documentation as a survival tool, ensuring your business's 'brain' stays inside the building."
      }
    ],
    "cta": "Secure Your Knowledge"
  },
  "global-business-delegations": {
    "hero": "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Global Business Delegation",
    "eyebrow": "Global Reach",
    "headline": "Unlocking borderless commercial advantage.",
    "subheadline": "Curated international trade missions giving GCC decision-makers elite access to global markets, technologies, and partnerships.",
    "painPoints": [
      {
        "title": "Market Saturation",
        "description": "Intense local competition necessitates geographical expansion, but foreign market entry seems impenetrable."
      },
      {
        "title": "Innovation Isolation",
        "description": "Firms remain insulated from the cutting-edge technological models disrupting their industries abroad."
      },
      {
        "title": "Partnership Barriers",
        "description": "Attempts to source international vendors fail due to a lack of pre-vetted, elite introductions."
      },
      {
        "title": "Cultural Blindness",
        "description": "Entering new markets blindly results in costly missteps rooted in misunderstanding business etiquette."
      }
    ],
    "deliverables": [
      {
        "title": "Curated Sector Missions",
        "description": "Hyper-focused travel itineraries concentrating exclusively on a specific global industry hub."
      },
      {
        "title": "B2B Matchmaking",
        "description": "Facilitated, private meetings with thoroughly vetted potential partners and government officials."
      },
      {
        "title": "Market Intel Briefings",
        "description": "Pre-mission dossiers detailing regulatory landscapes, tax implications, and competitive dynamics."
      },
      {
        "title": "Post-Mission Facilitation",
        "description": "Dedicated consulting support to draft MOUs and capitalize on the relationships forged."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Objective Alignment",
        "description": "We profile your specific intent—seeking tech transfer, export lanes, or strategic investment."
      },
      {
        "step": "02",
        "title": "Network Activation",
        "description": "We leverage our global contacts to secure audiences normally inaccessible to standard outreach."
      },
      {
        "step": "03",
        "title": "Immersive Execution",
        "description": "We handle the logistical and strategic burden on-ground, freeing you to focus entirely on negotiation."
      },
      {
        "step": "04",
        "title": "Strategic Follow-Through",
        "description": "We maintain momentum post-return, ensuring handshakes translate into signed commercial agreements."
      }
    ],
    "outcomes": [
      {
        "metric": "30+",
        "description": "Countries Covered"
      },
      {
        "metric": "200+",
        "description": "Global Partnerships"
      },
      {
        "metric": "120+",
        "description": "MOUs Signed"
      },
      {
        "metric": "Elite",
        "description": "Network Access"
      }
    ],
    "targetAudience": [
      {
        "title": "Visionary Entrepreneurs",
        "description": "Founders seeking to import disruptive models or export their unique services globally."
      },
      {
        "title": "Government Chambers",
        "description": "Public entities looking to foster bilateral trade and empower local SME sectors."
      },
      {
        "title": "Corporate Executives",
        "description": "Leaders tasked with rapidly establishing foreign subsidiary operations or joint ventures."
      }
    ],
    "whyUs": [
      {
        "title": "Bespoke Curation",
        "description": "We eschew generic 'tourist' trips in favor of surgically targeted, high-stakes commercial encounters."
      },
      {
        "title": "Geopolitical Acumen",
        "description": "We expertly navigate the complex intersection of global trade policy and private enterprise."
      },
      {
        "title": "Active Advocacy",
        "description": "We don't just introduce you; we advise you during the conversation to maximize strategic leverage."
      }
    ],
    "cta": "Expand Your Network"
  },
  "junior-ceo-program": {
    "hero": "https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NzI0MDY0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Young Leadership Program",
    "eyebrow": "Future Leaders",
    "headline": "Securing generational business success.",
    "subheadline": "A premier leadership incubator instilling essential acumen and strategic thinking into the successors of elite family enterprises.",
    "painPoints": [
      {
        "title": "Succession Risk",
        "description": "Founders fear passing a complex empire to a successor lacking pragmatic operational grit."
      },
      {
        "title": "Entitlement Paradox",
        "description": "Heirs possess vast resources but naturally lack foundational understanding of value creation constraints."
      },
      {
        "title": "Communication Gaps",
        "description": "Generational disconnects prevent the smooth transfer of vision, ethics, and leadership philosophy."
      },
      {
        "title": "Sheltered Perspectives",
        "description": "Future leaders lack exposure to the brutal realities of open market competition and management."
      }
    ],
    "deliverables": [
      {
        "title": "Business Mechanics Modules",
        "description": "Age-appropriate but rigorous training in financial literacy, macro-economics, and P&L logic."
      },
      {
        "title": "Leadership Simulations",
        "description": "Controlled pressure environments where students must make difficult ethical and strategic choices."
      },
      {
        "title": "Mentorship Pairing",
        "description": "Direct coaching from seasoned, non-family executives to provide strictly objective guidance."
      },
      {
        "title": "Venture Blueprints",
        "description": "A capstone project requiring the student to pitch, budget, and defend a comprehensive business plan."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Aptitude Profiling",
        "description": "We assess the young leader's inclinations, isolating innate strengths and identifying deep knowledge gaps."
      },
      {
        "step": "02",
        "title": "Immersive Bootcamps",
        "description": "Intensive cohort sessions replacing dry academic theory with highly dynamic business games."
      },
      {
        "step": "03",
        "title": "Corporate Residencies",
        "description": "Guided observation within real, functioning businesses to witness high-level management action."
      },
      {
        "step": "04",
        "title": "Capstone Defense",
        "description": "Students present venture thesis to a panel of actual investors, learning defense and composure."
      }
    ],
    "outcomes": [
      {
        "metric": "150+",
        "description": "Alumni Network"
      },
      {
        "metric": "100%",
        "description": "Confidence Gain"
      },
      {
        "metric": "15+",
        "description": "Ventures Launched"
      },
      {
        "metric": "Unified",
        "description": "Succession"
      }
    ],
    "targetAudience": [
      {
        "title": "Family Business Owners",
        "description": "Founders actively concerned about the functional competency of the incoming generation."
      },
      {
        "title": "Wealth Management Firms",
        "description": "Advisors offering exclusive capacity-building value to their Ultra-High-Net-Worth clients."
      },
      {
        "title": "Driven Young Adults",
        "description": "Ambitious individuals seeking a massive, unvarnished acceleration in their foundational business intelligence."
      }
    ],
    "whyUs": [
      {
        "title": "Rigorous Neutrality",
        "description": "We provide the strict, objective feedback that parents are structurally unable to give."
      },
      {
        "title": "Real-World Stakes",
        "description": "We do not coddle; we expose students to the actual pressure, math, and psychology of corporate life."
      },
      {
        "title": "Legacy Focus",
        "description": "Our curriculum emphasizes deep ethical responsibility and wealth stewardship, not just aggressive profit."
      }
    ],
    "cta": "Develop Your Successor"
  },
  "women-leadership-programs": {
    "hero": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzcyMzQ4NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Women Leadership",
    "eyebrow": "Inclusion & Empowerment",
    "headline": "Unlocking apex executive female potential.",
    "subheadline": "Strategic capacity-building designed to elevate female entrepreneurs and leaders into positions of unassailable corporate authority.",
    "painPoints": [
      {
        "title": "The Glass Ceiling",
        "description": "Highly capable female executives remain stalled in mid-management, unable to penetrate the boardroom."
      },
      {
        "title": "Network Deficits",
        "description": "Lack of access to the informal, high-level advocacy networks that traditionally distribute power."
      },
      {
        "title": "Negotiation Asymmetry",
        "description": "Systemic hurdles result in female founders securing significantly less venture capital and favorable terms."
      },
      {
        "title": "Imposter Dynamics",
        "description": "A severe lack of representative role models creates psychological friction when attempting strategic leaps."
      }
    ],
    "deliverables": [
      {
        "title": "Board Readiness Protocols",
        "description": "Training strictly focused on corporate governance, fiduciary duties, and stakeholder management."
      },
      {
        "title": "Strategic Negotiation",
        "description": "Tactical frameworks for capturing value in complex commercial funding and salary negotiations."
      },
      {
        "title": "Executive Presence",
        "description": "Mastering the fundamental psychology of authority, vocal resonance, and room command."
      },
      {
        "title": "The She-Entrepreneur Network",
        "description": "Continuous access to an elite coalition of female founders, allocators, and political leaders."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Barrier Identification",
        "description": "We dissect the specific internal and external structural hurdles preventing the candidate's ascension."
      },
      {
        "step": "02",
        "title": "Hard Skill Injection",
        "description": "We augment intuition with the hard financial and operational models required for C-suite credibility."
      },
      {
        "step": "03",
        "title": "Sponsorship Cultivation",
        "description": "We shift focus from mentorship to sponsorship—acquiring advocates who spend political capital."
      },
      {
        "step": "04",
        "title": "Visibility Strategy",
        "description": "We construct personal positioning strategies to ensure their achievements become undeniably visible."
      }
    ],
    "outcomes": [
      {
        "metric": "600+",
        "description": "Leaders Empowered"
      },
      {
        "metric": "45+",
        "description": "Board Placements"
      },
      {
        "metric": "+50%",
        "description": "SME Revenue Growth"
      },
      {
        "metric": "Elite",
        "description": "Peer Coalition"
      }
    ],
    "targetAudience": [
      {
        "title": "Female Founders",
        "description": "Entrepreneurs needing the strategic toolkit to negotiate venture funding and scale."
      },
      {
        "title": "High-Potential Corporates",
        "description": "Mid-to-senior female executives explicitly identified for C-suite succession."
      },
      {
        "title": "Forward-Thinking HR",
        "description": "Organizations actively looking to systematically correct gender disparity at the executive apex."
      }
    ],
    "whyUs": [
      {
        "title": "Beyond Soft Skills",
        "description": "We don't limit discussion to confidence; we teach P&L management, governance, and hardcore strategy."
      },
      {
        "title": "Regional Nuance",
        "description": "Our curriculum is highly calibrated to the unique legislative and cultural realities of the GCC market."
      },
      {
        "title": "Powerful Alumni",
        "description": "Graduating the program grafts you into one of the most powerful, active female networks in the region."
      }
    ],
    "cta": "Elevate Your Trajectory"
  }
};

// ─── Confidence Section ───────────────────────────────────────────────────────

export const confidenceSection = {
  image:
    "https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Strategic advisory with confidence",
  imageTag: "Management Consulting",
  eyebrow: "Strategy & Performance",
  heading: "Confidence to reimagine. Capability to realize.",
  body: "We combine deep sector expertise with world-class advisory capabilities to help business leaders navigate complexity, accelerate performance, and achieve transformational outcomes across every dimension of their enterprise.",
  ctaLabel: "Explore Consulting Services",
  points: [
    "Strategic advisory and business growth frameworks",
    "Leadership development and organizational performance",
    "Sales effectiveness and operational excellence",
  ],
};

// ─── Shape Future Section ─────────────────────────────────────────────────────

export const shapeFutureSection = {
  eyebrow: "Personal Branding",
  heading: "Will you shape your narrative, or let others define it?",
  body: "In today's hyper-connected world, your personal brand is your most powerful business asset. We help executives and entrepreneurs build an authentic, compelling presence that commands authority and opens doors.",
  image:
    "https://images.unsplash.com/photo-1733231291455-3c4de1c24e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwbWFya2V0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjMzNzE2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Personal branding and marketing",
  imageTag: "Executive Personal Branding",
};

// ─── Industries Section ───────────────────────────────────────────────────────

export const industriesSection = {
  eyebrow: "Industries We Serve",
  headingPlain: "Sectors we",
  headingGold: "transform",
  subtext:
    "Our multi-sector expertise ensures tailored solutions that address the unique challenges and opportunities of each industry we serve.",
  ctaLabel: "Explore this sector",
};

export const industries = [
  {
    id: 1,
    slug: "government-public-sector",
    icon: BuildingsIcon,
    name: "Government & Public Sector",
    shortTitle: "Government",
    description:
      "Strategic advisory, financial management, and policy consulting for government ministries, authorities, and semi-government organizations seeking to optimize performance and public value delivery.",
    image:
      "https://images.unsplash.com/photo-1768399808130-abac2a8442e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcHVibGljJTIwc2VjdG9yJTIwcG9saWN5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcyMzM3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "20+",
    statLabel: "Government clients served",
    tags: ["Policy Planning", "Financial Advisory", "Strategic Management"],
  },
  {
    id: 2,
    slug: "entrepreneurship-smes",
    icon: LightbulbIcon,
    name: "Entrepreneurship & SMEs",
    shortTitle: "Entrepreneurship",
    description:
      "Comprehensive growth strategies, mentorship, and capability-building services for startups and small-to-medium enterprises navigating market entry, scaling, and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1629124096116-48743a0cea58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyMzM3MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "500+",
    statLabel: "Entrepreneurs empowered",
    tags: ["Business Growth", "Startup Advisory", "Operational Excellence"],
  },
  {
    id: 3,
    slug: "technology-digital-innovation",
    icon: CodeIcon,
    name: "Technology & Digital Innovation",
    shortTitle: "Technology",
    description:
      "End-to-end digital transformation, software development, IT maintenance, and technology strategy for organizations adapting to the demands of a digitally-driven economy.",
    image:
      "https://images.unsplash.com/photo-1760346546767-95b89356a6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "150+",
    statLabel: "Digital projects delivered",
    tags: ["Software Development", "Digital Strategy", "IT Maintenance"],
  },
  {
    id: 4,
    slug: "financial-services",
    icon: ChartBarIcon,
    name: "Financial Services",
    shortTitle: "Financial Services",
    description:
      "Expert financial advisory, performance management, and consulting services for financial institutions, investment firms, and corporate finance teams across the region.",
    image:
      "https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "35+",
    statLabel: "Financial institutions advised",
    tags: ["Investment Advisory", "Risk Management", "Corporate Finance"],
  },
  {
    id: 5,
    slug: "education-training-leadership",
    icon: GraduationCapIcon,
    name: "Education, Training & Leadership",
    shortTitle: "Education",
    description:
      "Transformational learning programs — from Executive MBAs and Junior CEO development to Women Leadership programs — building the next generation of capable leaders.",
    image:
      "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNQkElMjBleGVjdXRpdmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzIzMzcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "1,200+",
    statLabel: "Leaders trained annually",
    tags: ["Executive MBA", "Junior CEO Program", "Women Leadership"],
  },
  {
    id: 6,
    slug: "global-business-international-markets",
    icon: GlobeIcon,
    name: "Global Business & International Markets",
    shortTitle: "Global Business",
    description:
      "Curated international business delegations, cross-border market entry strategies, and global networking programs facilitating partnerships across continents.",
    image:
      "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "30+",
    statLabel: "Countries visited on delegations",
    tags: ["Market Entry", "Business Delegations", "Global Partnerships"],
  },
];

export const industryDetails: Record<string, {
  hero: string;
  heroAlt: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  overview: string;
  tags: string[];
  highlights: { label: string; value: string }[];
  features: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  cta: string;
}> = {
  "government-public-sector": {
    hero: "https://images.unsplash.com/photo-1768399808130-abac2a8442e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcHVibGljJTIwc2VjdG9yJTIwcG9saWN5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcyMzM3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Government advisory and strategic planning session",
    eyebrow: "Government & Public Sector",
    headline: "Shaping public sector excellence.",
    subheadline: "Strategic advisory, financial management, and policy consulting for government ministries and semi-government organizations.",
    overview: "Canbiz's Government Advisory practice brings deep expertise in public sector strategy, financial management, and institutional performance to the organizations that shape the future of nations. We work in close partnership with government entities to design and implement transformational strategies.",
    tags: ["Policy Advisory", "Financial Consulting", "Strategic Planning", "Performance Management"],
    highlights: [
      { label: "Government Bodies Served", value: "20+" },
      { label: "Strategic Plans Delivered", value: "60+" },
      { label: "Countries of Engagement", value: "10+" },
      { label: "Years of Expertise", value: "10+" },
    ],
    features: [
      { title: "Strategic Planning", body: "We partner with government leaders to design multi-year strategic plans aligned to national goals." },
      { title: "Financial Advisory", body: "Expert financial consulting covering budget planning and optimization for public entities." },
      { title: "Performance Management", body: "Design and implementation of performance management systems that drive accountability." },
    ],
    process: [
      { step: "01", title: "Stakeholder Engagement", body: "Deep engagement with ministers and directors to build understanding of the entity's mandate." },
      { step: "02", title: "Situation Analysis", body: "A rigorous diagnostic to establish an accurate baseline for strategy design." },
      { step: "03", title: "Strategy Development", body: "Co-design of a strategic plan with senior government officials." },
      { step: "04", title: "Implementation Support", body: "Hands-on support during execution and navigating institutional complexity." },
      { step: "05", title: "Performance Monitoring", body: "Ongoing performance tracking ensures objectives are achieved." },
    ],
    cta: "Engage Our Government Advisory Team",
  },
  "entrepreneurship-smes": {
    hero: "https://images.unsplash.com/photo-1629124096116-48743a0cea58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyMzM3MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Entrepreneurship and SMEs growth",
    eyebrow: "Entrepreneurship & SMEs",
    headline: "Fueling startup and SME growth.",
    subheadline: "Comprehensive growth strategies, mentorship, and scaling support.",
    overview: "We help startups and small-to-medium enterprises navigate market entry, scaling, and operational excellence through proven methodologies and tailored advisory.",
    tags: ["Business Growth", "Startup Advisory", "Operational Excellence"],
    highlights: [
      { label: "Entrepreneurs Empowered", value: "500+" },
      { label: "Industries Analyzed", value: "15+" },
      { label: "Funding Facilitated", value: "$50M+" },
      { label: "Years of Experience", value: "10+" },
    ],
    features: [
      { title: "Growth Strategy", body: "Bespoke actionable roadmaps to scale rapidly." },
      { title: "Operational Excellence", body: "Streamlining operations to improve efficiency and reduce costs." },
      { title: "Go-to-Market", body: "Targeted strategies for launching new products and entering markets." },
    ],
    process: [
      { step: "01", title: "Discovery", body: "Analyzing current market position and potential." },
      { step: "02", title: "Roadmap Creation", body: "Building step-by-step strategies for scaling." },
      { step: "03", title: "Execution", body: "Implementing the plan with real-time support." },
      { step: "04", title: "Monitoring", body: "Tracking KPIs to ensure optimal growth." },
      { step: "05", title: "Refinement", body: "Iterating strategies to maximize outcomes." },
    ],
    cta: "Boost Your Growth",
  },
  "technology-digital-innovation": {
    hero: "https://images.unsplash.com/photo-1760346546767-95b89356a6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Technology & Digital Innovation",
    eyebrow: "Technology & Digital Innovation",
    headline: "Accelerating your digital transformation.",
    subheadline: "Software development, IT maintenance, and technology strategy for the digital economy.",
    overview: "End-to-end digital solutions that transform organizations, leveraging scalable software development, agile methodologies, and proactive IT maintenance.",
    tags: ["Software Development", "Digital Strategy", "IT Maintenance"],
    highlights: [
      { label: "Digital Projects", value: "150+" },
      { label: "Platforms Built", value: "80+" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Tech Partners", value: "20+" },
    ],
    features: [
      { title: "Custom Development", body: "Tailored applications solving real business challenges." },
      { title: "ERP Integration", body: "Seamless ERP & CRM systems for optimal flow." },
      { title: "Tech Strategy", body: "Digital roadmaps designed for long-term scalability." },
    ],
    process: [
      { step: "01", title: "Requirement Gathering", body: "Defining business objectives and tech needs." },
      { step: "02", title: "Architecture", body: "Designing solid foundations." },
      { step: "03", title: "Development", body: "Agile sprints delivering functional software." },
      { step: "04", title: "Quality Assurance", body: "Rigorous testing protocols." },
      { step: "05", title: "Launch and Support", body: "Continuous maintenance and optimization." },
    ],
    cta: "Start Your Digital Journey",
  },
  "financial-services": {
    hero: "https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Financial Services",
    eyebrow: "Financial Services",
    headline: "Driving financial performance and risk resilience.",
    subheadline: "Advisory, performance management, and consulting for financial institutions and corporate finance.",
    overview: "Expert guidance for banks, investment firms, and corporate finance teams to elevate performance, manage risk, and identify new wealth opportunities in rapidly changing environments.",
    tags: ["Investment Advisory", "Risk Management", "Corporate Finance"],
    highlights: [
      { label: "Institutions Advised", value: "35+" },
      { label: "Capital Optimized", value: "$2B+" },
      { label: "Risk Assessments", value: "100+" },
      { label: "Years in Market", value: "10+" },
    ],
    features: [
      { title: "Performance Management", body: "Metrics and systems tracking core financial health." },
      { title: "Risk Analytics", body: "Identifying vulnerabilities and creating contingencies." },
      { title: "Investment Strategy", body: "Data-backed advice for sustainable portfolio growth." },
    ],
    process: [
      { step: "01", title: "Audit", body: "Comprehensive review of current financial health." },
      { step: "02", title: "Strategy Formulation", body: "Identifying key optimization targets." },
      { step: "03", title: "Implementation", body: "Applying precise operational adjustments." },
      { step: "04", title: "Risk Mitigation", body: "Establishing protective measures." },
      { step: "05", title: "Ongoing Review", body: "Continuous financial advisory and course-correction." },
    ],
    cta: "Speak to a Financial Advisor",
  },
  "education-training-leadership": {
    hero: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNQkElMjBleGVjdXRpdmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzIzMzcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Education, Training & Leadership",
    eyebrow: "Education & Training",
    headline: "Building the next generation of capable leaders.",
    subheadline: "Transformational learning programs to empower minds and scale impacts.",
    overview: "From Executive MBAs and Junior CEO development to specialized Women Leadership programs, we shape visionaries equipped to tackle tomorrow's complexities.",
    tags: ["Executive MBA", "Junior CEO Program", "Women Leadership"],
    highlights: [
      { label: "Leaders Trained", value: "1,200+" },
      { label: "Programs Offered", value: "5+" },
      { label: "Alumni Network", value: "1,000+" },
      { label: "Global Mentors", value: "50+" },
    ],
    features: [
      { title: "Executive MBA", body: "Rigorous training combining theory with real-case application." },
      { title: "Junior CEOs", body: "Guiding the youth toward entrepreneurial thinking." },
      { title: "Women in Leadership", body: "Specialized cohorts empowering female executives." },
    ],
    process: [
      { step: "01", title: "Assessment", body: "Aligning candidates with the right programs." },
      { step: "02", title: "Enrollment", body: "Getting onboarded into specialized cohorts." },
      { step: "03", title: "Instruction", body: "Learning modules taught by industry experts." },
      { step: "04", title: "Practical Application", body: "Real-world projects and case studies." },
      { step: "05", title: "Graduation", body: "Joining a global alumni network." },
    ],
    cta: "Explore Our Programs",
  },
  "global-business-international-markets": {
    hero: "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Global Business & International Markets",
    eyebrow: "Global Business",
    headline: "Connecting GCC entrepreneurs with the world.",
    subheadline: "Curated international business delegations and cross-border partnerships.",
    overview: "We facilitate international market exposure, B2B meetings, and partnership development across continents to unlock truly global growth opportunities.",
    tags: ["Market Entry", "Business Delegations", "Global Partnerships"],
    highlights: [
      { label: "Countries Visited", value: "30+" },
      { label: "MOUs Signed", value: "120+" },
      { label: "Delegations Hosted", value: "50+" },
      { label: "Global Active Partners", value: "200+" },
    ],
    features: [
      { title: "Curated Delegations", body: "Sector-focused international travel and networking." },
      { title: "Business Matching", body: "Pre-vetted introductions with global counterparts." },
      { title: "Market Entry Strategies", body: "Advising on legal, financial, and cultural transitions." },
    ],
    process: [
      { step: "01", title: "Program Design", body: "Tailoring trips based on business needs." },
      { step: "02", title: "Preparation", body: "Pre-trip briefings and cultural training." },
      { step: "03", title: "Execution", body: "On-the-ground facilitation and management." },
      { step: "04", title: "Negotiation", body: "Supporting MOUs and agreements." },
      { step: "05", title: "Follow-Up", body: "Post-delegation action plans." },
    ],
    cta: "Join the Next Delegation",
  },
};

export const industriesBottomStats = [
  { value: "6+", label: "Industry Sectors" },
  { value: "10+", label: "Years of Expertise" },
  { value: "1,000+", label: "Clients Served" },
  { value: "30+", label: "Countries Reached" },
];

// ─── Featured Insights ────────────────────────────────────────────────────────

export const insightsSection = {
  eyebrow: "Knowledge & Perspectives",
  headingPlain: "Featured ",
  headingGold: "insights",
  subtext:
    "Thought leadership, research, and perspectives from the Canbiz consulting team — helping leaders navigate complexity and unlock growth.",
  ctaLabel: "See all insights",
};

export const fallbackInsights = [];

// ─── About Section ────────────────────────────────────────────────────────────

export const aboutSection = {
  eyebrow: "Who We Are",
  headingPlain: "About",
  headingGold: "Canbiz",
  subtext:
    "A premier consultancy dedicated to helping startups and growing businesses implement structured operational frameworks and impactful leadership capabilities.",
  image:
    "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wYW55JTIwdGVhbSUyMGRpdmVyc2UlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjMzNzE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "About Canbiz",
  storyHeadingPlain: "A foundation of",
  storyHeadingGold: "sustainable growth",
  storyPara1:
    "Established as a strategic joint venture between Professional Services (Doha, est. 2012) and Benac Consultancy (India, est. 2014), Canbiz Consultancy was founded with a clear mission to build resilient, independent businesses by prioritizing well-defined systems over premature infrastructure expansion.",
  storyPara2:
    "Whether it’s developing documented policies, constructing operational workflows, or delivering continuous corporate training, our interventions prevent the deep, long-term risks of unstructured operations.",
  ctaQuestion: "Want to know more about our story, leadership, and journey?",
  ctaLabel: "Learn More About Us",
};

export const aboutPillars = [
  {
    icon: TargetIcon,
    title: "Our Mission",
    text: "To empower businesses, entrepreneurs, and leaders with transformative advisory, education, and digital solutions that unlock sustainable growth and long-term value.",
  },
  {
    icon: EyeIcon,
    title: "Our Vision",
    text: "To be the most trusted and impactful consultancy firm across the GCC and beyond, shaping a new generation of capable, confident, and globally competitive leaders.",
  },
  {
    icon: MedalIcon,
    title: "Our Values",
    text: "Excellence, integrity, innovation, and inclusivity drive everything we do — from our client engagements to our internal culture and community contributions.",
  },
  {
    icon: UsersIcon,
    title: "Our People",
    text: "A diverse team of seasoned consultants, educators, technologists, and strategists united by a passion for creating real, measurable impact for every client we serve.",
  },
];

export const aboutStats = [
  { value: "15", label: "Years of Experience" },
  { value: "4000+", label: "Clients" },
  { value: "3", label: "Countries" },
  { value: "14", label: "Specialized Services" },
];

export const aboutLeadership = [
  {
    name: "Dr. Ahmed Al-Mansoori",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzcyMzQ4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A visionary leader with over 25 years of experience in regional economic development, corporate strategy, and cross-border partnerships."
  },
  {
    name: "Sarah Jenks",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NzIzNDg3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Expert in organizational transformation, leading Canbiz's advisory expansion and ensuring world-class service delivery across all practice areas."
  },
  {
    name: "Tariq Rahman",
    role: "Head of Government Advisory",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmV8ZW58MXx8fDE3NzIzNDg3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Trusted advisor to public sector institutions, specializing in policy formulation, national strategy, and public-private partnerships."
  },
  {
    name: "Elena Rostova",
    role: "Head of Digital & Innovation",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZmVtYWxlJTIwbGVhZGVyfGVufDF8fHx8MTc3MjM0ODc2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Driving technological modernization for clients, bridging the gap between strategic business objectives and complex enterprise IT ecosystems."
  }
];

export const aboutJourney = [
  {
    year: "2014",
    title: "The Foundation",
    description: "Canbiz was established in Doha as a boutique management consultancy focused on SMEs and regional market entry."
  },
  {
    year: "2017",
    title: "Practice Expansion",
    description: "Launched the Digital Solutions and Brand Strategy practices to provide integrated end-to-end services for growing clients."
  },
  {
    year: "2019",
    title: "Regional Reach",
    description: "Expanded our footprint across the GCC, taking on major government advisory projects and opening pathways for international partnerships."
  },
  {
    year: "2021",
    title: "Executive Education",
    description: "Introduced the Executive MBA, Women CEO, and Junior CEO programs, addressing a critical need for structured capability building."
  },
  {
    year: "2024",
    title: "Global Delegations",
    description: "Scaled our global network, connecting hundreds of GCC entrepreneurs with markets across Europe, Asia, and the Americas."
  },
  {
    year: "2026",
    title: "A Decade of Impact",
    description: "Celebrating over a decade of continuous growth, trusted by 1,000+ clients to navigate complexity and achieve sustainable success."
  }
];

// ─── Careers Section ──────────────────────────────────────────────────────────

export const careersSection = {
  eyebrow: "Join Our Team",
  headingPlain: "Build your career with",
  headingGold: "Canbiz",
  subtext:
    "We're always looking for driven, curious, and talented individuals who want to make a real difference. Join a team that values expertise, innovation, and meaningful impact across the region and beyond.",
  image:
    "https://images.unsplash.com/photo-1758520144417-e1c432042dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBqb2IlMjBvcHBvcnR1bml0eSUyMGhpcmluZyUyMHRhbGVudHxlbnwxfHx8fDE3NzIzMzcxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Careers at Canbiz",
  whyHeadingPlain: "Why choose",
  whyHeadingGold: "Canbiz?",
  ctaQuestion: "Ready to take the next step? Explore our open roles and find your fit.",
  ctaLabel: "View Open Positions",
};

export const careersValues = [
  {
    title: "Purpose-Driven Work",
    description:
      "Every engagement we undertake is aimed at creating real, lasting impact for clients, communities, and the broader economy.",
  },
  {
    title: "Continuous Learning",
    description:
      "We invest in your growth — through world-class training programs, mentorship, and exposure to diverse, complex challenges.",
  },
  {
    title: "Inclusive Culture",
    description:
      "A diverse, respectful, and collaborative environment where every voice matters and fresh perspectives are celebrated.",
  },
  {
    title: "Global Exposure",
    description:
      "International business delegations, cross-border projects, and a growing global client base ensure your career reaches beyond borders.",
  },
];

export const careersStats = [
  { value: "100+", label: "Professionals on our team" },
  { value: "12+", label: "Industries we serve" },
  { value: "15+", label: "Countries reached" },
  { value: "95%", label: "Employee satisfaction rate" },
];

export const careersWhyPoints = [
  "Work on high-impact projects across government, private, and global sectors",
  "Access to world-class executive education and training programs",
  "International exposure through business delegations and global partnerships",
  "Structured mentorship from seasoned industry leaders",
  "Competitive compensation and growth-oriented career paths",
];

export const openPositions = [];

export const careersBenefits = [
  {
    title: "Competitive Compensation",
    description:
      "Market-leading salaries, performance bonuses, and equity participation for senior roles reflecting the value you bring.",
  },
  {
    title: "Executive Education Access",
    description:
      "Free enrolment in Canbiz executive programs including MBA modules, leadership workshops, and global delegation participation.",
  },
  {
    title: "Flexible Working",
    description:
      "Hybrid and remote-friendly policies that respect your personal commitments while empowering you to do your best work.",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Comprehensive medical insurance, mental health support, and wellness initiatives for you and your family.",
  },
  {
    title: "Global Travel",
    description:
      "Regular international exposure through business delegations, client visits, and conferences across 30+ countries.",
  },
  {
    title: "Structured Mentorship",
    description:
      "One-on-one mentorship from Canbiz's senior leadership and industry advisors to accelerate your career trajectory.",
  },
];

export const careersLifeImages = [
  {
    src: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wYW55JTIwdGVhbSUyMGRpdmVyc2UlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjMzNzE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Canbiz team collaboration",
    caption: "Collaborative, high-energy team environment",
  },
  {
    src: "https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRU8lMjBsZWFkZXJzaGlwJTIwZnV0dXJlJTIwc3RyYXRlZ3klMjB2aXNpb258ZW58MXx8fHwxNzcyMzM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Strategy sessions at Canbiz",
    caption: "Working on challenges that shape the region",
  },
  {
    src: "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "International delegations",
    caption: "Global exposure across 30+ countries",
  },
  {
    src: "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Women leadership programs",
    caption: "An inclusive culture where everyone leads",
  },
];

export const careersGradPrograms = [
  {
    title: "Graduate Consultant Program",
    duration: "12 Months",
    description:
      "A structured pathway for top graduates to join Canbiz as junior consultants and build a world-class advisory career from the ground up.",
    tracks: ["Management Consulting", "Brand Strategy", "Government Advisory"],
  },
  {
    title: "Technology Graduate Track",
    duration: "12 Months",
    description:
      "For graduates in computer science, engineering, or related fields ready to build enterprise digital solutions and drive transformation projects.",
    tracks: ["Software Development", "Digital Strategy", "IT Maintenance"],
  },
  {
    title: "6-Month Internship Program",
    duration: "6 Months",
    description:
      "Hands-on internship placements for university students and recent graduates across all Canbiz practice areas, with a strong conversion pipeline.",
    tracks: ["Open to All Departments"],
  },
];

// ─── Contact Section ──────────────────────────────────────────────────────────

export const contactSection = {
  eyebrow: "Get In Touch",
  headingPlain: "Let's build",
  headingGold: "together",
  subtext: "Whether you have a question about our services, want to partner with us, or are ready to transform your organization, our team is here to help.",
  officeHeadingPlain: "Visit Us",
  officeHeadingMain: "Our",
  officeHeadingGold: "Office",
  officeImageSrc: "https://images.unsplash.com/photo-1595856903272-97b63f25c777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2hhJTIwcWF0YXIlMjBza3lsaW5lfGVufDF8fHx8MTc3MjM2NjE5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  officeImageAlt: "Doha Skyline",
  office: {
    city: "Doha",
    country: "Qatar",
    address: "Office no: 301, Floor 03, Regency Business Center, Corniche Street",
    phone: "+974 5173 2111",
    email: "info@canbizconsultancy.com"
  },
  otherInquiriesHeading: "Other Inquiries",
  otherInquiries: [
    { label: "General", email: "info@canbizconsultancy.com" },
    { label: "Press", email: "info@canbizconsultancy.com" }
  ],
  formEyebrow: "Send a Message",
  formHeadingPlain: "How can we",
  formHeadingGold: "help?"
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerContent = {
  description:
    "Canbiz Consultancy Services provides leading corporate training and startup consulting services, focusing on business process management, policies, and robust procedures.",
  copyright: "© 2026 Canbiz Consultancy Services. All Rights Reserved.",
};

export const footerLinks = [
  { label: "Connect with us", href: "/contact" },
  { label: "Site map", href: "/sitemap-page" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const footerSocials = [
  { icon: FacebookLogoIcon, href: "#", label: "Facebook" },
  { icon: TwitterLogoIcon, href: "#", label: "Twitter" },
  { icon: LinkedinLogoIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeLogoIcon, href: "#", label: "YouTube" },
];

// ─── Employee Training Section ────────────────────────────────────────────────
export const employeeTrainingSection = {
  eyebrow: "Corporate Training",
  heading: "Building teams that power your strategic systems.",
  body: "Even the most rigorously structured organization will falter without a capable, adaptable workforce. In a rapidly changing business environment, continuous learning isn't a one-time event—it's a massive competitive advantage. At Canbiz Consultancy, we design professional corporate training programs that supercharge employee productivity, cultivate reliable management, and keep your teams perfectly aligned with long-term organizational stability.",
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHRyYWluaW5nfGVufDF8fHx8MTcyMzg1NjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Corporate Training at Canbiz",
  imageTag: "Continuous Learning",
  ctaLabel: "Explore Training Programs",
};
