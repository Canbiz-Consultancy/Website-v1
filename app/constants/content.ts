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
      { label: "CEO Imperative", sub: "Strategic leadership perspectives" },
      { label: "Entrepreneurship", sub: "Growth and innovation research" },
      { label: "Digital Transformation", sub: "Technology and IT trends" },
      { label: "Women Leadership", sub: "Empowerment and inclusion" },
      { label: "ESG & Sustainability", sub: "Policy and green business" },
      { label: "Global Markets", sub: "GCC and international outlook" },
    ],
  },
  {
    label: "Services",
    section: "services",
    children: [
      { label: "Business Systems", sub: "Startup consulting & system design" },
      { label: "Corporate Training", sub: "Workforce development programs" },
      { label: "Business Process Management", sub: "Process optimization & workflows" },
      { label: "Company Policies & Procedures", sub: "Policy frameworks & SOPs" },
      { label: "Startup Consulting Services", sub: "Growth strategy & scaling" },
      { label: "System Automation", sub: "Digital transformation & ERP" },
      { label: "Performance Management", sub: "KPIs & balanced scorecards" },
      { label: "Risk Management", sub: "Internal controls & compliance" },
      { label: "Departmental Systems", sub: "HR, Finance, Operations & more" },
      { label: "Gap Analysis", sub: "Business diagnostics & assessment" },
      { label: "Change Management", sub: "Implementation & transformation" },
      { label: "Documentation", sub: "Knowledge systems & SOPs" },
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
      { label: "Leadership Team", sub: "Meet our experts" },
      { label: "Our Journey", sub: "Milestones and growth" },
      { label: "Employee Training", sub: "Cultivating leadership from within" },
    ],
  },
];

// ─── Advisory Philosophy ──────────────────────────────────────────────────────

export const advisorySection = {
  eyebrow: "Our Advisory Philosophy",
  heading: "Transforming startups through business systems and corporate training.",
  body: "At Canbiz Consultancy, we specialize in business systems for startups, corporate training for companies, business process management, company policies and procedures, and startup consulting services. We believe the real foundation of a successful organization is structured processes—not just physical expansion. Our approach combines comprehensive business process management with documented company policies and procedures, creating operational frameworks that eliminate founder dependency. Through targeted corporate training programs and systematic startup consulting, we build capability-driven teams that empower your business to function, adapt, and scale smoothly on its own.",
  image:
    "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjM1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Canbiz Consultancy",
  imageEyebrow: "Canbiz Consultancy",
  imageCaption: "Supporting organizations in building practical, scalable business systems.",
};

export const advisoryPillars = [
  {
    icon: LightbulbIcon,
    value: "Business Systems",
    label: "Designing comprehensive business systems for startups that create scalable operational frameworks and eliminate founder dependency.",
  },
  {
    icon: ShieldCheckIcon,
    value: "Process Management",
    label: "Implementing business process management with documented company policies and procedures that ensure operational consistency.",
  },
  {
    icon: ChartBarIcon,
    value: "Corporate Training",
    label: "Delivering corporate training for companies that builds workforce capabilities to execute business systems effectively.",
  },
];

// ─── Services Section ─────────────────────────────────────────────────────────

export const servicesSection = {
  eyebrow: "Our Core Services",
  headingPlain: "Business Systems &",
  headingGold: "Corporate Solutions",
  subtext:
    "Specializing in business systems for startups, corporate training for companies, business process management, company policies and procedures, and startup consulting services. We build operational frameworks that enable sustainable growth and organizational excellence.",
  ctaPrimary: "Explore All Services",
  ctaSecondary: "Request a Consultation",
};

export const services = [
  {
    id: 1,
    slug: "business-systems",
    icon: StrategyIcon,
    title: "Business Systems for Startups",
    shortTitle: "Business Systems",
    description:
      "Comprehensive startup consulting services that design scalable business systems, from operational workflows to company policies and procedures. Build the foundation for sustainable growth without founder dependency.",
  },
  {
    id: 2,
    slug: "corporate-training",
    icon: FlowArrowIcon,
    title: "Corporate Training for Companies",
    shortTitle: "Corporate Training",
    description:
      "Customized corporate training programs that develop workforce capabilities to execute business systems effectively. From leadership development to operational excellence training.",
  },
  {
    id: 3,
    slug: "business-process-management",
    icon: FileTextIcon,
    title: "Business Process Management",
    shortTitle: "Process Management",
    description:
      "Design and optimize business processes that drive efficiency and scalability. From workflow mapping to process automation, we create streamlined operations that support growth.",
  },
  {
    id: 4,
    slug: "company-policies-procedures",
    icon: GearIcon,
    title: "Company Policies and Procedures",
    shortTitle: "Policies & Procedures",
    description:
      "Develop comprehensive company policies and procedures that ensure compliance, reduce risk, and standardize operations. From employee handbooks to operational SOPs.",
  },
  {
    id: 5,
    slug: "system-automation",
    icon: RobotIcon,
    title: "System Automation & Digital Transformation",
    shortTitle: "System Automation",
    description:
      "Automating manual processes and improving operational efficiency through ERP implementation, CRM systems, workflow automation, and comprehensive digital transformation.",
  },
  {
    id: 6,
    slug: "performance-management",
    icon: TrendUpIcon,
    title: "Performance Management Systems",
    shortTitle: "Performance Management",
    description:
      "Establishing measurable performance systems with KPI development, balanced scorecard implementation, performance monitoring, and productivity measurement frameworks.",
  },
  {
    id: 7,
    slug: "risk-management",
    icon: ShieldIcon,
    title: "Internal Control & Risk Management",
    shortTitle: "Risk Management",
    description:
      "Strengthening operational control and minimizing risk through internal control system design, risk management frameworks, financial controls, and fraud prevention.",
  },
  {
    id: 8,
    slug: "departmental-systems",
    icon: BriefcaseIcon,
    title: "Departmental System Development",
    shortTitle: "Departmental Systems",
    description:
      "Creating structured systems for each department including HR, Finance, Sales, Marketing, Procurement, Operations, and Customer Experience management systems.",
  },
  {
    id: 9,
    slug: "gap-analysis",
    icon: MagnifyingGlassIcon,
    title: "Organizational Gap Analysis & Business Diagnostics",
    shortTitle: "Gap Analysis",
    description:
      "Identifying weaknesses and improvement opportunities through organizational diagnostic studies, process gap identification, system efficiency analysis, and improvement roadmaps.",
  },
  {
    id: 10,
    slug: "change-management",
    icon: ArrowsLeftRightIcon,
    title: "Change Management & Implementation Support",
    shortTitle: "Change Management",
    description:
      "Ensuring smooth adoption of new systems and strategies through change management strategies, leadership alignment programs, staff training, and transformation support.",
  },
  {
    id: 11,
    slug: "corporate-documentation",
    icon: BookOpenIcon,
    title: "Corporate Documentation & Knowledge Systems",
    shortTitle: "Documentation & Knowledge",
    description:
      "Building structured documentation for long-term operational clarity with policy manuals, SOP manuals, process documentation, and corporate knowledge bases.",
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
  proof: { quote?: string; author?: string; role?: string; company?: string; impact?: string; context?: string };
  targetAudience: { title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  cta: string;
}> = {
  "business-systems": {
    "hero": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN5c3RlbXMlMjBwbGFubmluZ3xlbnwxfHx8fDE3NzI0MDY0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Strategic architecture planning",
    "eyebrow": "Operations & Infrastructure",
    "headline": "Building the architecture for a scalable enterprise.",
    "subheadline": "We design robust institutional frameworks that eliminate founder dependency and embed predictability into your core operations.",
    "painPoints": [
      {
        "title": "Founder Bottlenecks",
        "description": "Operational velocity is constrained because daily decisions require senior leadership intervention."
      },
      {
        "title": "Inconsistent Execution",
        "description": "Service or product quality fluctuates due to a reliance on individual heroics rather than institutionalized processes."
      },
      {
        "title": "Scaling Friction",
        "description": "Attempts to increase volume lead to proportional increases in chaos, overhead, and customer dissatisfaction."
      },
      {
        "title": "Tribal Knowledge",
        "description": "Critical operational intelligence exists only in the minds of a few key employees, creating unacceptable risk."
      }
    ],
    "deliverables": [
      {
        "title": "Enterprise Blueprint",
        "description": "A comprehensive schematic of your organization's functional architecture and reporting lines."
      },
      {
        "title": "Systemized Workflows",
        "description": "Standardized, repeatable operational loops designed to run independently of specific personnel."
      },
      {
        "title": "Delegation Frameworks",
        "description": "Structured authority matrices that empower mid-level management without relinquishing holistic control."
      },
      {
        "title": "Capacity Modeling",
        "description": "Stress-tested operational models capable of absorbing 5x to 10x volume increases."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Diagnostic Mapping",
        "description": "We conduct a forensic analysis of your current operational reality, isolating structural weaknesses and undocumented routines."
      },
      {
        "step": "02",
        "title": "Target Architecture Design",
        "description": "We architect a new, optimized business system tailored to your sector's regulatory and competitive demands."
      },
      {
        "step": "03",
        "title": "Strategic Phasing",
        "description": "We develop a risk-mitigated rollout plan that ensures uninterrupted daily operations during the structural transition."
      },
      {
        "step": "04",
        "title": "Implementation & Transfer",
        "description": "We embed the new systems alongside your teams, transferring ownership and capability to internal stakeholders."
      }
    ],
    "outcomes": [
      {
        "metric": "450+",
        "description": "Systems Implemented"
      },
      {
        "metric": "40%",
        "description": "Efficiency Gain"
      },
      {
        "metric": "20k+",
        "description": "Manual Hours Saved"
      },
      {
        "metric": "98%",
        "description": "Client Success Rate"
      }
    ],
    "proof": {
      "impact": "Transitioned a multi-million dollar logistics firm from a founder-led bottleneck into a fully systemized enterprise.",
      "context": "Within 14 months of implementing our tailored business systems, the firm increased processing capacity by 150% without adding administrative headcount, allowing the CEO to fully exit daily operations to focus on acquisitions."
    },
    "targetAudience": [
      {
        "title": "High-Growth Founders",
        "description": "Entrepreneurs whose businesses have outgrown their individual capacity to manage them."
      },
      {
        "title": "Private Equity Firms",
        "description": "Investors looking to institutionalize newly acquired portfolio companies prior to scaling."
      },
      {
        "title": "Legacy Enterprises",
        "description": "Established firms suffering from generational stagnation and outdated operational models."
      }
    ],
    "whyUs": [
      {
        "title": "Agnostic Architecture",
        "description": "We don't force a one-size-fits-all model; we design systems molded to your unique strategic moat."
      },
      {
        "title": "Execution Focus",
        "description": "We move beyond theoretical consulting, staying embedded until the system runs itself."
      },
      {
        "title": "Leadership Liberation",
        "description": "Our ultimate metric is the amount of strategic time we return back to the executive board."
      }
    ],
    "cta": "Design Your Business Foundation"
  },
  "corporate-training": {
    "hero": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHRyYWluaW5nfGVufDF8fHx8MTcyMzg1NjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Corporate Training Workshop",
    "eyebrow": "Learning & Development",
    "headline": "Empowering human capital to execute strategy.",
    "subheadline": "Customized capacity-building programs that bridge the gap between theoretical corporate strategy and frontline tactical execution.",
    "painPoints": [
      {
        "title": "Capability Gaps",
        "description": "The workforce lacks the specialized skills necessary to adapt to rapid technological or market shifts."
      },
      {
        "title": "Management Malpractice",
        "description": "High-performing technical staff are promoted to management without the leadership tools required to succeed."
      },
      {
        "title": "Cultural Misalignment",
        "description": "Silos and miscommunication erode productivity due to a lack of shared organizational vocabulary."
      },
      {
        "title": "Low Retention",
        "description": "Top talent exits due to stagnant career development and uninspiring learning environments."
      }
    ],
    "deliverables": [
      {
        "title": "Executive Leadership Cohorts",
        "description": "Intensive, scenario-based programming to groom high-potential successors."
      },
      {
        "title": "Tactical Upskilling Modules",
        "description": "Targeted training focused on specific procedural or technological adoptions."
      },
      {
        "title": "Train-the-Trainer Protocols",
        "description": "Internalizing educational capacity by developing your own subject matter experts."
      },
      {
        "title": "Competency Matrices",
        "description": "Clear, graduated frameworks that align skill acquisition with career progression."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Skills Audit",
        "description": "We map your current workforce capabilities against the competencies required to achieve your strategic intent."
      },
      {
        "step": "02",
        "title": "Curriculum Engineering",
        "description": "We design bespoke training interventions tailored to the specific operational realities of your teams."
      },
      {
        "step": "03",
        "title": "Active Facilitation",
        "description": "Our industry veterans deliver high-impact workshops utilizing real-world case studies."
      },
      {
        "step": "04",
        "title": "Application & Tracking",
        "description": "We implement post-training mechanisms to ensure new skills convert into daily operational habits."
      }
    ],
    "outcomes": [
      {
        "metric": "15k+",
        "description": "Professionals Trained"
      },
      {
        "metric": "85%",
        "description": "Retention Improvement"
      },
      {
        "metric": "120+",
        "description": "Curriculums Designed"
      },
      {
        "metric": "3.5x",
        "description": "Average ROI"
      }
    ],
    "proof": {
      "quote": "Canbiz didn't just give us a lecture; they gave us a new operating language. Our mid-level managers are now executing at an executive standard.",
      "author": "Director of Operations",
      "role": "Public Sector Authority",
      "company": "UAE"
    },
    "targetAudience": [
      {
        "title": "Corporate HR Leaders",
        "description": "CHROs requiring sophisticated tools to upgrade collective organizational capabilities."
      },
      {
        "title": "Government Entities",
        "description": "Public sector bodies mandating comprehensive upskilling in alignment with national visions."
      },
      {
        "title": "SME Management",
        "description": "Growing firms needing to rapid-train a maturing middle-management layer."
      }
    ],
    "whyUs": [
      {
        "title": "Practitioner Led",
        "description": "Our programs are facilitated by former executives who have lived the challenges they teach."
      },
      {
        "title": "Contextual Relevance",
        "description": "We replace generic theory with localized, highly relevant operational scenarios."
      },
      {
        "title": "Measurable Application",
        "description": "We tie learning outcomes directly to measurable KPIs on the performance scorecard."
      }
    ],
    "cta": "Upskill Your Workforce"
  },
  "business-process-management": {
    "hero": "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc3MjQwNjQxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Business Process Mapping",
    "eyebrow": "Efficiency & Excellence",
    "headline": "Simplify the complex. Maximize the output.",
    "subheadline": "A rigorous, data-driven methodology to eradicate operational waste, streamline workflows, and enhance gross margin efficiency.",
    "painPoints": [
      {
        "title": "Operational Bloat",
        "description": "Processes have accumulated redundant steps over years, resulting in sluggish turnaround times."
      },
      {
        "title": "Error Epidemics",
        "description": "High defect rates and rework costs caused by convoluted, disjointed cross-departmental handoffs."
      },
      {
        "title": "Blind Spots",
        "description": "Leadership cannot accurately identify where delays are occurring within the value chain."
      },
      {
        "title": "Margin Erosion",
        "description": "Inefficiencies secretly inflate operational costs, suppressing profitability despite revenue growth."
      }
    ],
    "deliverables": [
      {
        "title": "End-to-End Value Streaming",
        "description": "Visual mapping of your entire delivery cycle from procurement to customer fulfillment."
      },
      {
        "title": "Waste Elimination Protocol",
        "description": "Identification and targeted removal of non-value-adding activities using Lean methodology."
      },
      {
        "title": "Standardized Flow Logic",
        "description": "Re-engineered process loops optimized for speed, accuracy, and minimum friction."
      },
      {
        "title": "Performance Dashboards",
        "description": "Telemetry systems that provide real-time visibility into workflow health and velocity."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "As-Is Capturing",
        "description": "We map the reality of how work is actually done, bypassing sanitized manuals for ground truth."
      },
      {
        "step": "02",
        "title": "Bottleneck Diagnostics",
        "description": "Utilizing variance analysis, we pinpoint the exact sources of systemic friction."
      },
      {
        "step": "03",
        "title": "To-Be Reengineering",
        "description": "We collectively design an optimal future-state process balancing compliance with velocity."
      },
      {
        "step": "04",
        "title": "Piloting & Refinement",
        "description": "We execute the new process in a controlled environment, tuning it before enterprise-wide launch."
      }
    ],
    "outcomes": [
      {
        "metric": "1.2k+",
        "description": "Processes Optimized"
      },
      {
        "metric": "25%",
        "description": "Waste Reduction"
      },
      {
        "metric": "30%",
        "description": "Cycle Time Cut"
      },
      {
        "metric": "100%",
        "description": "Standardization Score"
      }
    ],
    "proof": {
      "impact": "Reduced loan approval cycle times for a regional financial institution by 42%.",
      "context": "By eradicating redundant approval layers and re-sequencing the compliance verification steps, our intervention drastically improved customer satisfaction."
    },
    "targetAudience": [
      {
        "title": "Chief Operating Officers",
        "description": "Executives tasked with fundamentally restructuring enterprise delivery mechanisms."
      },
      {
        "title": "Manufacturing & Logistics",
        "description": "Sector players where minimal process deviations directly dictate gross margins."
      },
      {
        "title": "Scaling Agencies",
        "description": "Firms looking to productize and standardize bespoke service deliveries."
      }
    ],
    "whyUs": [
      {
        "title": "Radical Simplification",
        "description": "We do not believe in complex processes; we design elegant paths of least resistance."
      },
      {
        "title": "Cross-Functional Integration",
        "description": "We solve the inter-departmental friction points where most processes traditionally fail."
      },
      {
        "title": "Data-Backed Precision",
        "description": "Every optimization we implement is justified by rigorous empirical data, not assumptions."
      }
    ],
    "cta": "Optimize Your Workflows"
  },
  "company-policies-procedures": {
    "hero": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG9zZSUyMHVwJTIwb2YlMjBkb2N1bWVudCUyMHRleHR8ZW58MXx8fHwxNzcyNDA2NDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Corporate Governance Documents",
    "eyebrow": "Governance & Risk",
    "headline": "Clarity in action through incontrovertible standards.",
    "subheadline": "Developing sophisticated policy frameworks that enforce compliance, mitigate legal exposure, and establish a uniform corporate culture.",
    "painPoints": [
      {
        "title": "Regulatory Vulnerability",
        "description": "The organization operates in a state of risk due to severe compliance gaps and undocumented liabilities."
      },
      {
        "title": "Behavioral Ambiguity",
        "description": "A lack of clear, enforceable standards leads to inconsistent management decisions and employee disputes."
      },
      {
        "title": "Onboarding Paralysis",
        "description": "New hires struggle to integrate efficiently because 'how things are done' is an oral tradition."
      },
      {
        "title": "Atheoritical Growth",
        "description": "Rapid scaling has bypassed governance, resulting in a 'Wild West' operational environment."
      }
    ],
    "deliverables": [
      {
        "title": "Corporate Policy Manuals",
        "description": "Legally vetted documents dictating organizational boundaries and behavioral standards."
      },
      {
        "title": "Standard Operating Procedures (SOPs)",
        "description": "Granular, step-by-step instructional guides for critical technical and administrative tasks."
      },
      {
        "title": "Employee Handbooks",
        "description": "Accessible, culturally aligned guides outlining expectations, benefits, and dispute resolution."
      },
      {
        "title": "Governance Matrices",
        "description": "Clear definitions establishing who has the authority to approve, veto, or execute specific actions."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Regulatory Scanning",
        "description": "We cross-reference your current practices against local laws and industry-specific regulations."
      },
      {
        "step": "02",
        "title": "Stakeholder Interviews",
        "description": "We extract nuanced operational realities directly from your subject matter experts."
      },
      {
        "step": "03",
        "title": "Iterative Drafting",
        "description": "We translate complex legal and operational requirements into clear, unambiguous corporate language."
      },
      {
        "step": "04",
        "title": "Adoption Strategy",
        "description": "We don't just hand over a binder; we assist in the rollout to ensure read-rates and enforcement."
      }
    ],
    "outcomes": [
      {
        "metric": "3k+",
        "description": "SOPs Developed"
      },
      {
        "metric": "-80%",
        "description": "Compliance Infractions"
      },
      {
        "metric": "+50%",
        "description": "Onboarding Velocity"
      },
      {
        "metric": "100%",
        "description": "Audit Readiness"
      }
    ],
    "proof": {
      "quote": "The SOPs developed by Canbiz transformed our operations from reactive chaos to proactive control. We passed our ISO audit flawlessly.",
      "author": "Chief Compliance Officer",
      "role": "Industrial Manufacturing Group",
      "company": "KSA"
    },
    "targetAudience": [
      {
        "title": "Compliance Directors",
        "description": "Leaders requiring airtight documentation to survive stringent regulatory environments."
      },
      {
        "title": "Franchisors",
        "description": "Brands needing to perfectly replicate operational standards across multiple geographic locations."
      },
      {
        "title": "Pre-IPO Companies",
        "description": "Startups requiring institutional-grade governance structures prior to major funding rounds."
      }
    ],
    "whyUs": [
      {
        "title": "Linguistic Clarity",
        "description": "We abhor dense jargon. We write policies that frontline employees actually read and understand."
      },
      {
        "title": "Strategic Alignment",
        "description": "Our documents don't just enforce rules; they reinforce your overarching corporate strategy."
      },
      {
        "title": "Living Documents",
        "description": "We establish review cycles, ensuring your governance framework evolves alongside your business."
      }
    ],
    "cta": "Formalize Your Standards"
  },
  "system-automation": {
    "hero": "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI0MDY0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Digital Transformation Data",
    "eyebrow": "Digital Transformation",
    "headline": "Harnessing technology to exponentially amplify effort.",
    "subheadline": "Strategic modernization through targeted software implementation, ERP integration, and intelligent workflow automation.",
    "painPoints": [
      {
        "title": "Data Silos",
        "description": "Departments operate in vacuum-sealed legacy systems, requiring massive manual data entry to bridge the gaps."
      },
      {
        "title": "Platform Fatigue",
        "description": "Investment in disconnected SaaS tools has created a costly, confusing, and fragmented IT ecosystem."
      },
      {
        "title": "Human Bandwidth Waste",
        "description": "Highly paid talent spends the majority of their week engaged in repetitive, menial administrative tasks."
      },
      {
        "title": "Scalability Ceilings",
        "description": "The current technological infrastructure fundamentally cannot handle a surge in transactional volume."
      }
    ],
    "deliverables": [
      {
        "title": "Digital Architecture Roadmap",
        "description": "A multi-year strategic plan detailing enterprise software procurement and retirement."
      },
      {
        "title": "ERP Implementation Strategy",
        "description": "Requirement gathering, vendor selection, and oversight for foundational system rollouts."
      },
      {
        "title": "API Integration Workflows",
        "description": "Custom logic connecting disparate platforms into a single, seamless data pipeline."
      },
      {
        "title": "Robotic Process Automation",
        "description": "Deployment of intelligent bots to execute high-volume, rules-based administrative tasks."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Tech Stack Audit",
        "description": "We inventory your existing digital assets, measuring utilization rates and identifying costly redundancies."
      },
      {
        "step": "02",
        "title": "Automation Prioritization",
        "description": "We calculate the exact ROI of automating specific workflows, focusing on quick capacity-freeing wins."
      },
      {
        "step": "03",
        "title": "Solution Architecture",
        "description": "We select the optimal software stack—favoring lean, interoperable tools over monolithic bloatware."
      },
      {
        "step": "04",
        "title": "Deployment & Training",
        "description": "We oversee technical integration while driving the human change management required for adoption."
      }
    ],
    "outcomes": [
      {
        "metric": "800+",
        "description": "Workflows Automated"
      },
      {
        "metric": "99.9%",
        "description": "Data Accuracy"
      },
      {
        "metric": "3x",
        "description": "Software ROI"
      },
      {
        "metric": "-40%",
        "description": "Manual Admin Time"
      }
    ],
    "proof": {
      "impact": "Automated the entire client onboarding sequence for a regional advisory firm.",
      "context": "By integrating their CRM with document parsing APIs, we reduced administrative onboarding time from 3 days to exactly 14 minutes, eliminating transcription errors entirely."
    },
    "targetAudience": [
      {
        "title": "Chief Information Officers",
        "description": "IT leaders looking to modernize legacy infrastructure without disrupting core business."
      },
      {
        "title": "Operations Directors",
        "description": "Executives seeking to extract heavy manual admin work from their operational teams."
      },
      {
        "title": "Mid-Market Enterprises",
        "description": "Companies that have outgrown spreadsheets and require cohesive, enterprise-grade software."
      }
    ],
    "whyUs": [
      {
        "title": "Business First",
        "description": "We aren't software resellers. We let your strategic business objectives dictate the technology."
      },
      {
        "title": "Vendor Agnostic",
        "description": "We provide unbiased recommendations, selecting the exact tools that fit your budget and reality."
      },
      {
        "title": "Focus on Adoption",
        "description": "We know software is useless without people using it; our implementations heavily index on user experience."
      }
    ],
    "cta": "Automate Your Operations"
  },
  "performance-management": {
    "hero": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjQwNjQxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Performance Analytics",
    "eyebrow": "Growth & Analytics",
    "headline": "Engineering accountability through precision measurement.",
    "subheadline": "Deploying rigorous metric frameworks that directly align individual employee output with overarching corporate strategy.",
    "painPoints": [
      {
        "title": "Strategic Disconnect",
        "description": "Frontline employees have no understanding of how their daily tasks contribute to annual objectives."
      },
      {
        "title": "Subjective Evaluations",
        "description": "Appraisals are based on recency bias and personal relationships rather than objective data."
      },
      {
        "title": "Metric Overload",
        "description": "Leadership is drowning in dashboards showing vanity metrics that offer no actionable insight."
      },
      {
        "title": "Reactive Management",
        "description": "Performance issues are only identified during year-end reviews, long after the damage has been done."
      }
    ],
    "deliverables": [
      {
        "title": "Balanced Scorecards",
        "description": "Translating corporate vision into holistic metrics spanning finance, customer, and processes."
      },
      {
        "title": "Cascading KPI Architecture",
        "description": "Breaking down board objectives into specific, quantifiable targets for every department."
      },
      {
        "title": "Appraisal Systems",
        "description": "Structuring transparent evaluation cycles that distinguish between high and low performers."
      },
      {
        "title": "Executive Dashboards",
        "description": "Clean, real-time visual interfaces highlighting only the leading indicators that matter most."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Objective Distillation",
        "description": "We work with the executive board to clarify precisely what successful execution looks like."
      },
      {
        "step": "02",
        "title": "Metric Selection",
        "description": "We bypass vanity data, isolating the vital few 'leading indicators' that predict future success."
      },
      {
        "step": "03",
        "title": "System Configuration",
        "description": "We design appraisal templates, review cadences, and feedback loops to sustain the framework."
      },
      {
        "step": "04",
        "title": "Managerial Training",
        "description": "We coach your leaders on how to use data for constructive coaching and decisive intervention."
      }
    ],
    "outcomes": [
      {
        "metric": "2k+",
        "description": "KPIs Defined"
      },
      {
        "metric": "90%",
        "description": "Goal Alignment"
      },
      {
        "metric": "+35%",
        "description": "Productivity Lift"
      },
      {
        "metric": "100%",
        "description": "Data Transparency"
      }
    ],
    "proof": {
      "quote": "The cascading KPIs finally gave our mid-management clear targets. We went from 'busy' to 'productive' in a single quarter.",
      "author": "Chief Executive Officer",
      "role": "Retail Group",
      "company": "Dubai"
    },
    "targetAudience": [
      {
        "title": "Executive Boards",
        "description": "Directors seeking transparent, unfiltered visibility into the actual performance of the enterprise."
      },
      {
        "title": "Human Resources",
        "description": "HR Directors tasked with shifting company culture from tenure-based to meritocratic."
      },
      {
        "title": "Sales & Operations",
        "description": "Department heads needing precise mechanisms to drive target attainment."
      }
    ],
    "whyUs": [
      {
        "title": "Leading Indicators",
        "description": "We measure the inputs that generate success, rather than just staring at lagging financial outputs."
      },
      {
        "title": "Behavioral Alignment",
        "description": "We design metrics that incentivize the right behaviors, actively avoiding KPIs that encourage gaming."
      },
      {
        "title": "Simplicity by Design",
        "description": "We build dashboards with radical clarity, stripping away the noise of 30+ useless metrics."
      }
    ],
    "cta": "Drive Better Results"
  },
  "risk-management": {
    "hero": "https://images.unsplash.com/photo-1454165833767-027ffea9e772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNrJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NzI0MDY0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Risk and Security Strategy",
    "eyebrow": "Compliance & Security",
    "headline": "Protecting your progress. Securing your future.",
    "subheadline": "Identifying hidden vulnerabilities and constructing resilient internal controls to safeguard against operational, financial, and reputational ruin.",
    "painPoints": [
      {
        "title": "Financial Leakage",
        "description": "A lack of segregation of duties exposes the firm to internal fraud and unchecked expenditure."
      },
      {
        "title": "Operational Fragility",
        "description": "A single point of failure (a crucial supplier, an IT system) threatens the entire business's survival."
      },
      {
        "title": "Regulatory Targets",
        "description": "Changing legislative landscapes leave the company exposed to massive fines due to non-compliance."
      },
      {
        "title": "Reactive Firefighting",
        "description": "The organization has no established protocol for responding to macroeconomic shocks or disasters."
      }
    ],
    "deliverables": [
      {
        "title": "Enterprise Risk Registers",
        "description": "A prioritized matrix identifying all probable threats and their potential financial impact."
      },
      {
        "title": "Internal Control Frameworks",
        "description": "Rigorous checks, balances, and approval hierarchies designed to prevent operational malpractice."
      },
      {
        "title": "Continuity Plans (BCP)",
        "description": "Actionable strategies ensuring the organization survives and functions during black-swan events."
      },
      {
        "title": "Compliance Audits",
        "description": "Independent verification to ensure adherence to sector-specific mandates."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Threat Identification",
        "description": "We conduct a sweeping audit of your environment, looking for structural and systemic weaknesses."
      },
      {
        "step": "02",
        "title": "Probability Scoring",
        "description": "We quantify risks, prioritizing interventions based on likelihood of occurrence and severity."
      },
      {
        "step": "03",
        "title": "Control Engineering",
        "description": "We design specific, non-obtrusive operational controls that neutralize high-priority threats."
      },
      {
        "step": "04",
        "title": "Stress Testing",
        "description": "We conduct simulations and tabletop exercises to validate your team's readiness to execute BCPs."
      }
    ],
    "outcomes": [
      {
        "metric": "5k+",
        "description": "Risks Mitigated"
      },
      {
        "metric": "$10M+",
        "description": "Fraud Prevented"
      },
      {
        "metric": "100+",
        "description": "Control Systems"
      },
      {
        "metric": "Zero",
        "description": "Compliance Breaches"
      }
    ],
    "proof": {
      "impact": "Designed the internal control architecture for a major regional investment holding.",
      "context": "Our risk intervention uncovered a multi-million dirham vulnerability in procurement. By executing strict digital segregation of duties, we sealed the leak and provided board-level assurance."
    },
    "targetAudience": [
      {
        "title": "Audit Committees",
        "description": "Directors requiring independent assurance that executive management is safeguarding assets."
      },
      {
        "title": "Financial Services",
        "description": "Highly regulated entities where risk management dictates the survival of the product."
      },
      {
        "title": "Expanding Regional Firms",
        "description": "Organizations moving into new jurisdictions where unfamiliar regulatory risks await."
      }
    ],
    "whyUs": [
      {
        "title": "Commercial Pragmatism",
        "description": "We don't paralyze your business with paranoia; we design controls that allow commercial agility."
      },
      {
        "title": "Anticipatory Logic",
        "description": "We look beyond historical data to predict emerging risks in the technological landscape."
      },
      {
        "title": "Holistic Security",
        "description": "We view risk holistically, recognizing that an IT failure is just as damaging as a financial lapse."
      }
    ],
    "cta": "Fortify Your Operations"
  },
  "departmental-systems": {
    "hero": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjQwNjQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Departmental Operations",
    "eyebrow": "Integrated Operations",
    "headline": "Expert engineering for every functional silo.",
    "subheadline": "Deep, specialized system development for HR, Finance, Operations, and Sales to elevate departmental standards.",
    "painPoints": [
      {
        "title": "Functional Imbalance",
        "description": "A brilliant sales team outpaces struggling ops, leading to delivered promises breaking down."
      },
      {
        "title": "Siloed Friction",
        "description": "Departments use incompatible metrics and software, leading to toxic internal politics."
      },
      {
        "title": "Lack of Specialization",
        "description": "Functions are run using generalized methods rather than industry-best-practice playbooks."
      },
      {
        "title": "Scalability Walls",
        "description": "A specific department cannot keep up with the scaling demands of the wider enterprise."
      }
    ],
    "deliverables": [
      {
        "title": "HR & Talent Frameworks",
        "description": "End-to-end systems for sourcing, managing, and exiting human capital efficiently."
      },
      {
        "title": "Financial Architectures",
        "description": "Rigorous models for budgeting, cash flow forecasting, and automated board reporting."
      },
      {
        "title": "Sales & CRM Playbooks",
        "description": "Structured pipeline logic, objection handling scripts, and conversion tracking mechanics."
      },
      {
        "title": "Procurement Logic",
        "description": "Systems dictating vendor selection, negotiation thresholds, and supply chain redundancies."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Micro-Diagnostic",
        "description": "We isolate the specific department, auditing its current tooling, talent, and process efficiency."
      },
      {
        "step": "02",
        "title": "Best-Practice Injection",
        "description": "We cross-reference your department's reality against the operational standards of top-tier global firms."
      },
      {
        "step": "03",
        "title": "System Assembly",
        "description": "We build the specialized frameworks, forms, and software integrations required to elevate the function."
      },
      {
        "step": "04",
        "title": "Horizontal Alignment",
        "description": "We meticulously connect the newly stabilized department back into the broader organizational flow."
      }
    ],
    "outcomes": [
      {
        "metric": "50+",
        "description": "Dept Frameworks"
      },
      {
        "metric": "90%",
        "description": "Cross-Silo Flow"
      },
      {
        "metric": "+40%",
        "description": "Operational Speed"
      },
      {
        "metric": "-60%",
        "description": "Error Reduction"
      }
    ],
    "proof": {
      "quote": "Canbiz overhauled our Procurement and Finance departments simultaneously. For the first time, our systems are talking to each other, saving hundreds of hours.",
      "author": "Chief Financial Officer",
      "role": "Construction Enterprise",
      "company": "Qatar"
    },
    "targetAudience": [
      {
        "title": "Department Heads",
        "description": "Leaders aware that their specific functional area requires a professional upgrade."
      },
      {
        "title": "Maturing Founders",
        "description": "CEOs realizing that 'everyone doing everything' no longer works, and specialization is essential."
      },
      {
        "title": "Post-Merger Entities",
        "description": "Organizations struggling to reconcile two different departmental cultures into one system."
      }
    ],
    "whyUs": [
      {
        "title": "Domain Analysts",
        "description": "We deploy specialized consultants; a finance system is designed by a finance veteran."
      },
      {
        "title": "Horizontal Integration",
        "description": "We ensure the isolated department serves the wider structural goals of the entire company."
      },
      {
        "title": "Future-Proofing",
        "description": "We build departmental capacity to handle the volume you target in 3 years."
      }
    ],
    "cta": "Empower Your Departments"
  },
  "gap-analysis": {
    "hero": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzfGVufDF8fHx8MTc3MjQwNjQxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Strategic Gap Analysis",
    "eyebrow": "Business Intelligence",
    "headline": "Illuminating the path from present reality to target state.",
    "subheadline": "Rigorous organizational diagnostics that pierce through assumptions to identify the hidden root causes of stagnation.",
    "painPoints": [
      {
        "title": "Growth Plateaus",
        "description": "Despite aggressive investment, revenue or efficiency metrics refuse to scale past a ceiling."
      },
      {
        "title": "Symptomatic Fixing",
        "description": "Leadership plays 'whack-a-mole' with issues without ever identifying the underlying disease."
      },
      {
        "title": "Strategy Misalignment",
        "description": "A vast chasm exists between what the board intends and what the frontline executes."
      },
      {
        "title": "Cultural Blind Spots",
        "description": "Management is unaware of critical leaks because the internal culture discourages reporting bad news."
      }
    ],
    "deliverables": [
      {
        "title": "360-Degree Diagnostic",
        "description": "An objective assessment of your organization's people, process, tech, and strategy."
      },
      {
        "title": "Root-Cause Matrices",
        "description": "Visual mapping tracing current operational pain points back to their foundational origins."
      },
      {
        "title": "Industry Benchmarking",
        "description": "Comparative analytics showing where you lose ground against top-quartile competitors."
      },
      {
        "title": "Remediation Roadmap",
        "description": "A prioritized action plan detailing exactly how to close the identified performance gaps."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Data Harvesting",
        "description": "We extract quantitative metrics and conduct confidential interviews across all levels."
      },
      {
        "step": "02",
        "title": "Hypothesis Testing",
        "description": "We analyze friction points, cross-referencing qualitative complaints with hard data."
      },
      {
        "step": "03",
        "title": "Gap Quantification",
        "description": "We measure the exact distance (revenue loss or time waste) between current and optimal state."
      },
      {
        "step": "04",
        "title": "Intervention Design",
        "description": "We script specific tactical moves required by leadership to bridge the chasm."
      }
    ],
    "outcomes": [
      {
        "metric": "300+",
        "description": "Audits Conducted"
      },
      {
        "metric": "$10M+",
        "description": "Value Found"
      },
      {
        "metric": "5k+",
        "description": "Action Items Generated"
      },
      {
        "metric": "100%",
        "description": "Objective Clarity"
      }
    ],
    "proof": {
      "impact": "Uncovered structural misalignments in a regional distributor resulting in a 15% margin recovery.",
      "context": "Our analysis revealed a misconfigured incentive structure inadvertently encouraging sales to cannibalize high-margin products. Fixing this recovered massive profitability."
    },
    "targetAudience": [
      {
        "title": "Incoming Executives",
        "description": "New CEOs requiring an objective lay-of-the-land before instituting major changes."
      },
      {
        "title": "Stalled Enterprises",
        "description": "Companies that have lost momentum and cannot empirically figure out why."
      },
      {
        "title": "Pre-Digital Pivot",
        "description": "Organizations needing to map process flaws before cementing them into new software."
      }
    ],
    "whyUs": [
      {
        "title": "Uncompromising Objectivity",
        "description": "We deliver the unfiltered truth to leadership, untainted by internal politics."
      },
      {
        "title": "Holistic Vision",
        "description": "We analyze the complex interplay between all moving parts of your business model."
      },
      {
        "title": "Action Bias",
        "description": "We don't deliver academic reports; we deliver prioritized, surgical execution plans."
      }
    ],
    "cta": "Diagnose Your Business"
  },
  "change-management": {
    "hero": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjaGFuZ2V8ZW58MXx8fHwxNzc2MzM3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Change Management and Adoption",
    "eyebrow": "Transformation & Culture",
    "headline": "Mastering the psychology of execution.",
    "subheadline": "Structured methodologies to dismantle resistance, secure buy-in, and guarantee the successful adoption of new strategic systems.",
    "painPoints": [
      {
        "title": "Failed Implementations",
        "description": "Expensive new strategies are launched but quickly abandoned by a resistant workforce."
      },
      {
        "title": "Cultural Paralysis",
        "description": "Deep-seated organizational habits act as an immune system, attacking proposed innovations."
      },
      {
        "title": "Leadership Misalignment",
        "description": "Sponsors of the change fail to present a unified front, causing downstream apathy."
      },
      {
        "title": "Morale Collapse",
        "description": "Poorly communicated restructures lead to anxiety, rumors, and the exodus of top talent."
      }
    ],
    "deliverables": [
      {
        "title": "Stakeholder Impact Analysis",
        "description": "Mapping exactly who will be disrupted by the change and to what severity."
      },
      {
        "title": "Strategic Comm Plans",
        "description": "Crafting a compelling narrative that answers the critical question: 'What's in it for me?'"
      },
      {
        "title": "Resistance Mitigation",
        "description": "Executing specific interventions to convert key internal detractors into advocates."
      },
      {
        "title": "Adoption Measurement",
        "description": "Tracking the actual behavioral shift of the workforce rather than just project milestones."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Readiness Triage",
        "description": "We assess if your organization possesses the emotional bandwidth to absorb the proposed change."
      },
      {
        "step": "02",
        "title": "Coalition Building",
        "description": "We recruit highly influential internal figures across hierarchies to champion the new direction."
      },
      {
        "step": "03",
        "title": "Narrative Deployment",
        "description": "We orchestrate town halls and internal marketing to frame the transformation positively."
      },
      {
        "step": "04",
        "title": "Reinforcement Systems",
        "description": "We establish feedback loops and celebration mechanisms to make new behaviors permanent."
      }
    ],
    "outcomes": [
      {
        "metric": "150+",
        "description": "TransformationsManaged"
      },
      {
        "metric": "90%",
        "description": "System Adoption Rate"
      },
      {
        "metric": "-60%",
        "description": "Implementation Time"
      },
      {
        "metric": "100%",
        "description": "Stakeholder Alignment"
      }
    ],
    "proof": {
      "quote": "Canbiz didn't just manage the timeline; they managed our culture. They turned a highly controversial restructuring into a unified rallying point.",
      "author": "VP of People & Culture",
      "role": "Telecommunications Firm",
      "company": "Bahrain"
    },
    "targetAudience": [
      {
        "title": "Transformational Leaders",
        "description": "Executives tasked with pushing through a highly disruptive shift in strategy or tech."
      },
      {
        "title": "M&A Integration Teams",
        "description": "PMOs responsible for merging two distinct corporate cultures into a functional entity."
      },
      {
        "title": "HR Business Partners",
        "description": "Leaders managing the human fallout of downsizing, restructuring, or rapid scaling."
      }
    ],
    "whyUs": [
      {
        "title": "Behavioral Economics",
        "description": "Our strategies are rooted in psychology, recognizing that humans resist forced transitions."
      },
      {
        "title": "Proactive Defense",
        "description": "We predict resistance before it manifests, neutralizing blockers early in the project."
      },
      {
        "title": "Empathetic Rigor",
        "description": "We balance deep empathy for the disrupted workforce with absolute commitment to the business outcome."
      }
    ],
    "cta": "Manage Your Transformation"
  },
  "corporate-documentation": {
    "hero": "https://images.unsplash.com/photo-1517842645767-c639042777db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlcyUyMGJvb2t8ZW58MXx8fHwxNzcyNDA2NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "heroAlt": "Corporate Knowledge Systems",
    "eyebrow": "Knowledge Management",
    "headline": "Institutionalizing your intellectual capital.",
    "subheadline": "Transforming fragmented individual expertise into highly searchable, centralized corporate knowledge systems that survive turnover.",
    "painPoints": [
      {
        "title": "Knowledge Evaporation",
        "description": "When key veterans leave the company, their critical operational 'know-how' leaves with them."
      },
      {
        "title": "Onboarding Lag",
        "description": "New hires take months to become productive due to reliance on endless tap-on-the-shoulder shadowing."
      },
      {
        "title": "Version Control Chaos",
        "description": "Employees execute tasks using conflicting, outdated documents stored on scattered local drives."
      },
      {
        "title": "Redundant Inquiry",
        "description": "Management spends valuable hours answering the same fundamental procedural questions."
      }
    ],
    "deliverables": [
      {
        "title": "Knowledge Base Deployment",
        "description": "Structured company wikis architected for intuitive discovery and rapid learning."
      },
      {
        "title": "Role-Specific Playbooks",
        "description": "Curated guides containing exactly the context, processes, and tools a specific job title needs."
      },
      {
        "title": "Taxonomy & Governance Logic",
        "description": "Strict rules for how information is categorized, tagged, vetted, and retired."
      },
      {
        "title": "Process Flow Libraries",
        "description": "Centralized repositories of visual workflows detailing the standard for every task."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Information Audit",
        "description": "We locate where critical knowledge currently resides—in drives, chat threads, or minds."
      },
      {
        "step": "02",
        "title": "Extraction & Authoring",
        "description": "We conduct debriefs with top performers, converting intuition into explicit written logic."
      },
      {
        "step": "03",
        "title": "Architecture Build",
        "description": "We design a digital library so procedural answers are found in seconds, not hours."
      },
      {
        "step": "04",
        "title": "Maintenance Workflows",
        "description": "We implement protocols dictating who is responsible for updating the wiki as procedures evolve."
      }
    ],
    "outcomes": [
      {
        "metric": "10k+",
        "description": "Assets Mapped"
      },
      {
        "metric": "-70%",
        "description": "Search Time"
      },
      {
        "metric": "+60%",
        "description": "Onboarding Velocity"
      },
      {
        "metric": "100%",
        "description": "IP Retention"
      }
    ],
    "proof": {
      "impact": "Captured and codified decades of scattered intellectual property for a legacy manufacturer.",
      "context": "Faced with a retiring wave of senior engineers, we built an interactive corporate brain capturing diagnostic methodologies, ensuring the next generation possessed the same problem-solving DNA."
    },
    "targetAudience": [
      {
        "title": "Remote/Hybrid Teams",
        "description": "Organizations lacking physical proximity for organic 'water-cooler' knowledge transfer."
      },
      {
        "title": "Scaling Startups",
        "description": "Fast-growing companies needing to rapidly decouple critical training from the founder's calendar."
      },
      {
        "title": "High-Turnover Sectors",
        "description": "Industries where rapid employee cycling necessitates a completely foolproof onboarding sprint."
      }
    ],
    "whyUs": [
      {
        "title": "Information Architecture",
        "description": "We design relational databases that intuitively guide the user, avoiding 'folder dumps'."
      },
      {
        "title": "Concise Pedagogics",
        "description": "We write for modern attention spans, favoring bullet points and diagrams over dense paragraphs."
      },
      {
        "title": "Platform Native",
        "description": "Versed in modern knowledge stacks, we ensure the technological implementation fits your culture."
      }
    ],
    "cta": "Build Your Corporate Brain"
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
    "proof": {
      "quote": "The Canbiz delegation to South Korea bypassed years of networking. Within five days, we secured a master distribution agreement with a leading robotics manufacturer.",
      "author": "Managing Director",
      "role": "Logistics Enterprise",
      "company": "Saudi Arabia"
    },
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
    "proof": {
      "impact": "Transformed the succession trajectory for a prominent GCC family office.",
      "context": "By enrolling the 19-year-old heir, we bridged a severe communication gap, embedding a deep understanding of P&L management that allowed for a confident, phased operational handover."
    },
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
    "proof": {
      "quote": "The Canbiz program didn't just teach theory; it fundamentally rewired how I commanded the room. Within 6 months, I navigated a leap from Director to VP.",
      "author": "Vice President",
      "role": "Global Banking Institution",
      "company": "UAE"
    },
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

export const fallbackInsights = [
  {
    id: 1,
    category: "CEO Imperative",
    image:
      "https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRU8lMjBsZWFkZXJzaGlwJTIwZnV0dXJlJTIwc3RyYXRlZ3klMjB2aXNpb258ZW58MXx8fHwxNzcyMzM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Five priorities for GCC CEOs navigating transformation in 2026",
    description:
      "Our latest CEO survey reveals the key strategic imperatives facing business leaders across the Gulf — from talent and digital to sustainability and geopolitics.",
  },
  {
    id: 2,
    category: "Entrepreneurship",
    image:
      "https://images.unsplash.com/photo-1758873272739-701756d8c7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXJzaGlwJTIwaW5ub3ZhdGlvbiUyMHN0YXJ0dXAlMjBncm93dGh8ZW58MXx8fHwxNzcyMzM3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "How SMEs can scale faster by unlocking strategic advisory partnerships",
    description:
      "Retainer-based consultancy models are transforming how small and medium enterprises access senior-level strategic thinking and operational support.",
  },
  {
    id: 3,
    category: "Digital Transformation",
    image:
      "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5JTIwQUklMjBmdXR1cmV8ZW58MXx8fHwxNzcyMzM3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "The future of business is digital: building resilient IT ecosystems",
    description:
      "Organizations that invest in custom software and proactive IT maintenance outperform competitors by 3x in operational agility and client satisfaction.",
  },
  {
    id: 4,
    category: "Women Leadership",
    image:
      "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "She leads: how women CEO programs are reshaping regional business",
    description:
      "Specialized capacity-building programs for women entrepreneurs are generating measurable economic impact and breaking glass ceilings across the GCC.",
  },
  {
    id: 5,
    category: "Global Markets",
    image:
      "https://images.unsplash.com/photo-1696764485466-793f465ac074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHQ0MlMjBNaWRkbGUlMjBFYXN0JTIwYnVzaW5lc3MlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NzIzMzczNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "International business delegations: unlocking new market opportunities",
    description:
      "Our curated global business exposure programs have connected over 200 entrepreneurs with international partners across Europe, Asia, and the Americas.",
  },
  {
    id: 6,
    category: "ESG & Sustainability",
    image:
      "https://images.unsplash.com/photo-1743082063778-bb0c2b04d2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMEVTRyUyMGdyZWVuJTIwYnVzaW5lc3MlMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzIzMzczNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Embedding ESG into government strategy: lessons from the GCC",
    description:
      "As sustainability rises on the global agenda, Canbiz's government advisory practice is helping public institutions embed ESG principles into core policy frameworks.",
  },
];

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
    "Established with a clear mission to build resilient, independent businesses, Canbiz Consultancy helps organizations prioritize well-defined systems over premature infrastructure expansion.",
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
  { value: "10+", label: "Years of Excellence" },
  { value: "1,000+", label: "Clients Served" },
  { value: "30+", label: "Countries Reached" },
  { value: "6+", label: "Industry Sectors" },
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
    description: "Canbiz was established in Dubai as a boutique management consultancy focused on SMEs and regional market entry."
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

export const openPositions = [
  {
    id: 1,
    title: "Senior Management Consultant",
    department: "Consulting",
    location: "Dubai, UAE",
    type: "Full-Time",
    level: "Senior",
    slug: "senior-management-consultant",
    description:
      "Lead high-impact client engagements across strategy, operations, and organisational transformation. Work directly with C-suite stakeholders and manage delivery teams.",
    requirements: [
      "8+ years of management consulting experience",
      "Strong background in strategy and organisational design",
      "Experience in GCC markets preferred",
      "MBA or equivalent advanced degree",
    ],
  },
  {
    id: 2,
    title: "Brand Strategy Consultant",
    department: "Brand & Marketing",
    location: "Dubai, UAE",
    type: "Full-Time",
    level: "Mid-Level",
    slug: "brand-strategy-consultant",
    description:
      "Develop and execute brand positioning, identity, and marketing strategies for our diverse portfolio of clients across government, private, and SME sectors.",
    requirements: [
      "5+ years in brand strategy or marketing advisory",
      "Portfolio of brand positioning projects",
      "Strong creative and analytical mindset",
      "Experience with digital marketing channels",
    ],
  },
  {
    id: 3,
    title: "Digital Solutions Lead",
    department: "Technology",
    location: "Dubai, UAE",
    type: "Full-Time",
    level: "Senior",
    slug: "digital-solutions-lead",
    description:
      "Oversee the design and delivery of custom software projects and digital transformation initiatives. Collaborate with clients and internal teams to ensure world-class technical delivery.",
    requirements: [
      "7+ years in software development or digital project management",
      "Experience with enterprise platforms (ERP, CRM, cloud)",
      "Strong client-facing communication skills",
      "Agile delivery methodology expertise",
    ],
  },
  {
    id: 4,
    title: "Executive Education Facilitator",
    department: "Programs & Education",
    location: "Dubai, UAE",
    type: "Contract / Part-Time",
    level: "Expert",
    slug: "executive-education-facilitator",
    description:
      "Design and facilitate world-class learning experiences for our Executive MBA, Women CEO, and Junior CEO programs. Bring real-world business expertise to inspiring cohorts of leaders.",
    requirements: [
      "10+ years of senior business or academic experience",
      "Proven track record in executive education or training",
      "Strong facilitation and public speaking skills",
      "GCC market knowledge preferred",
    ],
  },
  {
    id: 5,
    title: "Business Development Manager",
    department: "Growth & Partnerships",
    location: "Dubai, UAE",
    type: "Full-Time",
    level: "Mid-Level",
    slug: "business-development-manager",
    description:
      "Identify, develop, and close new business opportunities across Canbiz's service portfolio. Build lasting relationships with clients, partners, and institutions across the GCC.",
    requirements: [
      "5+ years of B2B business development experience",
      "Established network in GCC business community",
      "Experience selling professional services",
      "Strong commercial acumen and negotiation skills",
    ],
  },
  {
    id: 6,
    title: "Government Advisory Analyst",
    department: "Government Advisory",
    location: "Abu Dhabi, UAE",
    type: "Full-Time",
    level: "Junior",
    slug: "government-advisory-analyst",
    description:
      "Support high-level consulting engagements with government ministries and public sector entities. Conduct research, analysis, and strategy documentation for senior consultants.",
    requirements: [
      "2–4 years of public sector or consulting experience",
      "Strong research and data analysis skills",
      "Excellent written Arabic and English communication",
      "Bachelor's degree in business, economics, or public policy",
    ],
  },
];

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
  officeImageSrc: "https://images.unsplash.com/photo-1549247796-6d153dc3cb4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaXxlbnwxfHx8fDE3NzIzNjYxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  officeImageAlt: "Dubai Skyline",
  office: {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Office 402, Canbiz Tower, Business Bay",
    phone: "+971 4 123 4567",
    email: "info@canbizconsultancy.com"
  },
  otherInquiriesHeading: "Other Inquiries",
  otherInquiries: [
    { label: "Careers", email: "careers@canbizconsultancy.com" },
    { label: "Media & Press", email: "media@canbizconsultancy.com" }
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
