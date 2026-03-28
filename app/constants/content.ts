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
    category: "STARTUP GROWTH",
    title: "True scalable growth starts with structured business systems",
    description:
      "Avoid the trap of simply expanding infrastructure or headcount. Discover how strong operational frameworks and team development form the bedrock of sustainable business growth.",
    tab: "Business Systems",
    image:
      "https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRU8lMjBsZWFkZXJzaGlwJTIwZnV0dXJlJTIwc3RyYXRlZ3klMjB2aXNpb258ZW58MXx8fHwxNzcyMzM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    category: "OPERATIONAL SYSTEMS",
    title: "Systemize your business to eliminate owner dependency",
    description:
      "Operating for years without documented systems creates organizational fragility. We design clear operational procedures that allow your company to scale effortlessly, without relying on constant leadership intervention.",
    tab: "Systemize & Scale",
    image:
      "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    category: "CORPORATE TRAINING",
    title: "Forge a future-ready workforce through continuous learning",
    description:
      "Your strategic systems are only as effective as the team running them. Invest in professional corporate training strategies to boost engagement, adaptability, and long-term competitive advantage.",
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
      { label: "Strategic Planning", sub: "Strategy optimization & growth" },
      { label: "Organizational Structure", sub: "Governance & hierarchy design" },
      { label: "Policies & Procedures", sub: "Standardized operational frameworks" },
      { label: "Process Optimization", sub: "Workflow design & efficiency" },
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
  heading: "Transforming startups into durable, independent powerhouses.",
  body: "At Canbiz Consultancy, we believe the real foundation of a successful organization is structured processes—not just physical expansion. Operating without formal frameworks is like leaving a condition untreated; over time, it creates severe bottlenecks and deep reliance on owner involvement. We step in to design documented methodologies and build capability-driven teams that empower your business to function, adapt, and scale smoothly on its own.",
  image:
    "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjM1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Canbiz Advisory",
  imageEyebrow: "Canbiz Advisory",
  imageCaption: "Supporting organizations in building practical, scalable systems.",
};

export const advisoryPillars = [
  {
    icon: LightbulbIcon,
    value: "Prioritize Systems",
    label: "Establishing clear operational processes and workflows long before expanding physical infrastructure.",
  },
  {
    icon: ShieldCheckIcon,
    value: "Systemize to Mitigate Risk",
    label: "Avoiding bottlenecks and operational fragility caused by an over-dependence on direct owner involvement.",
  },
  {
    icon: ChartBarIcon,
    value: "Future-Ready Teams",
    label: "Embedding continuous corporate training into your growth strategy to keep employees competitive and engaged.",
  },
];

// ─── Services Section ─────────────────────────────────────────────────────────

export const servicesSection = {
  eyebrow: "Our Core Services",
  headingPlain: "Strategic Consulting",
  headingGold: "Services",
  subtext:
    "Our consulting services focus on strategy optimization, system automation, and structured organizational development, helping companies align their strategies with market realities, implement clear policies and processes, automate operations, and build scalable systems that support sustainable growth.",
  ctaPrimary: "Explore All Services",
  ctaSecondary: "Request a Consultation",
};

export const services = [
  {
    id: 1,
    slug: "strategic-planning",
    icon: StrategyIcon,
    title: "Strategic Planning & Strategy Optimization",
    shortTitle: "Strategic Planning",
    description:
      "Aligning company strategy with market opportunities and growth potential through comprehensive business strategy development, competitive positioning, and go-to-market execution.",
  },
  {
    id: 2,
    slug: "organizational-structure",
    icon: FlowArrowIcon,
    title: "Organizational Structure & Governance Consulting",
    shortTitle: "Organizational Structure",
    description:
      "Establishing clear structure and decision hierarchy with organizational design, corporate governance frameworks, delegation of authority, and role responsibility mapping.",
  },
  {
    id: 3,
    slug: "policies-procedures",
    icon: FileTextIcon,
    title: "Policies & Procedures Development",
    shortTitle: "Policies & Procedures",
    description:
      "Creating standardized policies that guide company operations including corporate policy frameworks, departmental policies, SOPs, compliance policies, and employee handbooks.",
  },
  {
    id: 4,
    slug: "business-process-optimization",
    icon: GearIcon,
    title: "Business Process Design & Optimization",
    shortTitle: "Process Optimization",
    description:
      "Designing efficient workflows across departments through business process mapping, process re-engineering, workflow standardization, and operational efficiency optimization.",
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
  overview: string;
  tags: string[];
  highlights: { label: string; value: string }[];
  features: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  cta: string;
}> = {
  "strategic-planning": {
    hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHBsYW5uaW5nJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc3MzYzMDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Strategic planning session with business team",
    eyebrow: "Strategic Planning & Strategy Optimization",
    headline: "Align strategy.\nUnlock growth.",
    subheadline: "Comprehensive strategic advisory that transforms business potential into competitive advantage through data-driven planning and market-aligned execution.",
    overview: "Our Strategic Planning & Strategy Optimization service helps organizations navigate complex market dynamics by developing robust, actionable strategies that align company capabilities with emerging opportunities. We work closely with leadership teams to assess market position, identify growth vectors, and create comprehensive roadmaps that deliver measurable results. From business model optimization to go-to-market execution, we provide the strategic clarity needed to outpace competition and build lasting market presence.",
    tags: ["Business Strategy", "Market Alignment", "Competitive Positioning", "Go-To-Market", "Scaling"],
    highlights: [
      { label: "Strategies Delivered", value: "200+" },
      { label: "Growth Rate Improvement", value: "40%" },
      { label: "Market Entry Success", value: "95%" },
      { label: "Client Retention", value: "90%" },
    ],
    features: [
      { title: "Business Strategy Development", body: "We craft comprehensive business strategies that define your unique value proposition, competitive positioning, and long-term vision. Our approach combines market intelligence, competitive analysis, and organizational capabilities to create strategies that are both ambitious and achievable, providing clear direction for sustainable growth." },
      { title: "Market Alignment Strategy", body: "Understanding market dynamics is crucial for success. We conduct deep market analysis to identify trends, customer needs, and competitive gaps, then develop strategies that position your offerings optimally within these market realities. This ensures your business moves in harmony with market forces rather than against them." },
      { title: "Competitive Positioning Strategy", body: "Standing out in crowded markets requires distinctive positioning. We help you identify your unique competitive advantages, develop differentiation strategies, and create compelling value propositions that resonate with target audiences while creating sustainable competitive moats." },
      { title: "Business Model Optimization", body: "Your business model is the engine of value creation. We analyze and optimize revenue streams, cost structures, key partnerships, and customer relationships to maximize profitability and operational efficiency, ensuring your business model evolves with changing market conditions." },
      { title: "Go-To-Market Strategy", body: "A brilliant strategy fails without effective execution. We design comprehensive go-to-market plans covering channel strategy, pricing frameworks, marketing approaches, and sales enablement to ensure successful product launches and market expansion initiatives deliver maximum impact." },
      { title: "Business Scaling Strategy", body: "Scaling requires different capabilities than starting. We develop scaling strategies that address infrastructure requirements, talent needs, operational systems, and organizational culture changes necessary to grow from startup to enterprise while maintaining quality and customer satisfaction." },
      { title: "Market Expansion Planning", body: "Entering new markets—geographic, demographic, or product-based—requires careful planning. We assess market attractiveness, entry barriers, resource requirements, and risk factors to create expansion roadmaps that maximize success probability while minimizing costly missteps." },
      { title: "Startup Growth Strategy", body: "Early-stage companies face unique strategic challenges. We provide specialized growth strategies for startups focusing on product-market fit validation, funding readiness, customer acquisition, and rapid iteration frameworks that accelerate path to profitability and sustainable scale." },
      { title: "Strategic Roadmap Development", body: "Strategy without execution is just wishful thinking. We translate strategic objectives into detailed, phased roadmaps with clear milestones, resource allocations, accountability frameworks, and success metrics that transform strategic vision into actionable reality." },
    ],
    process: [
      { step: "01", title: "Strategic Discovery", body: "We begin with comprehensive diagnostic assessments including stakeholder interviews, market analysis, competitive benchmarking, and organizational capability reviews to build a complete picture of your current state and strategic opportunities." },
      { step: "02", title: "Opportunity Assessment", body: "Our team analyzes market trends, customer insights, and competitive dynamics to identify high-potential growth opportunities and strategic positioning options that align with your organizational strengths and market realities." },
      { step: "03", title: "Strategy Formulation", body: "Working collaboratively with your leadership team, we develop comprehensive strategic options, evaluate trade-offs, and co-create the optimal strategy that balances ambition with feasibility while addressing identified market opportunities." },
      { step: "04", title: "Roadmap Development", body: "We translate strategic choices into detailed implementation roadmaps including phased initiatives, resource requirements, timeline milestones, and key performance indicators that guide execution and enable progress tracking." },
      { step: "05", title: "Execution Support", body: "Strategy implementation receives ongoing support through regular review sessions, course corrections based on market feedback, and advisory assistance to navigate challenges and accelerate achievement of strategic objectives." },
    ],
    cta: "Start Your Strategic Journey",
  },

  "organizational-structure": {
    hero: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6YXRpb25hbCUyMHN0cnVjdHVyZSUyMGJ1c2luZXNzJTIwaGllcmFyY2h5fGVufDF8fHx8MTc3MzYzMDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Organizational structure and hierarchy diagram",
    eyebrow: "Organizational Structure & Governance Consulting",
    headline: "Build structures\nthat enable scale.",
    subheadline: "Design organizational architectures that clarify accountability, streamline decision-making, and create the foundation for sustainable growth and operational excellence.",
    overview: "Our Organizational Structure & Governance Consulting service addresses the fundamental architecture of how work gets done in your organization. We design clear organizational structures, establish robust governance frameworks, and create explicit decision-making protocols that eliminate confusion, reduce friction, and accelerate execution. From delegation of authority matrices to comprehensive corporate governance systems, we build the structural foundation that enables organizations to scale efficiently while maintaining control and accountability.",
    tags: ["Organizational Design", "Governance", "Delegation", "Role Mapping", "Reporting Structure"],
    highlights: [
      { label: "Structures Redesigned", value: "150+" },
      { label: "Decision Speed Increase", value: "60%" },
      { label: "Governance Frameworks", value: "100+" },
      { label: "Role Clarity Improvement", value: "85%" },
    ],
    features: [
      { title: "Organizational Structure Design", body: "We design optimal organizational structures that align with your strategic objectives, whether functional, divisional, matrix, or network-based. Our designs balance efficiency with flexibility, centralization with local autonomy, and control with empowerment to create structures that support rather than constrain business performance." },
      { title: "Corporate Governance Framework", body: "Effective governance is essential for sustainable success. We develop comprehensive governance frameworks defining board responsibilities, management accountability, oversight mechanisms, and decision rights that ensure proper checks and balances while enabling agile business operations." },
      { title: "Delegation of Authority (DOA) Framework", body: "Clear authority delegation prevents decision bottlenecks while maintaining appropriate controls. We create detailed DOA frameworks specifying who can make what decisions, at what monetary thresholds, with what approval requirements, creating clarity that accelerates execution while managing risk." },
      { title: "Job Description (JD) Development", body: "Role clarity starts with precise job descriptions. We develop comprehensive JDs for all organizational levels that clearly define responsibilities, required competencies, performance expectations, and reporting relationships, creating the foundation for effective recruitment, performance management, and career development." },
      { title: "Role & Responsibility Mapping", body: "Organizational confusion often stems from unclear responsibilities. We conduct detailed role mapping exercises using RACI and other frameworks to explicitly define who is Responsible, Accountable, Consulted, and Informed for every key process, eliminating gaps, overlaps, and confusion." },
      { title: "Reporting Structure Design", body: "Reporting relationships shape organizational culture and performance. We design optimal reporting structures that ensure appropriate span of control, create clear career progression paths, facilitate effective supervision, and support cross-functional collaboration where needed." },
      { title: "Board & Executive Governance System", body: "Strong governance starts at the top. We develop board charters, committee structures, executive governance protocols, and leadership team operating models that ensure effective strategic oversight, risk management, and organizational stewardship." },
    ],
    process: [
      { step: "01", title: "Organizational Assessment", body: "We conduct comprehensive analysis of your current structure, governance practices, decision-making patterns, and pain points to understand existing organizational dynamics and identify improvement opportunities." },
      { step: "02", title: "Structural Design", body: "Based on strategic requirements and best practices, we design optimized organizational structures, governance frameworks, and authority delegations that align with your business needs and growth objectives." },
      { step: "03", title: "Role Definition", body: "We develop detailed job descriptions, responsibility matrices, and reporting relationships that create complete clarity about who does what, who decides what, and how different roles interact across the organization." },
      { step: "04", title: "Governance Documentation", body: "All governance structures, policies, and procedures are documented comprehensively in governance manuals, organization charts, and authority matrices that serve as definitive references for organizational operation." },
      { step: "05", title: "Implementation Support", body: "We support transition to new organizational structures through change management, communication planning, and hands-on advisory to ensure smooth adoption and rapid realization of structural benefits." },
    ],
    cta: "Design Your Organization",
  },

  "policies-procedures": {
    hero: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpY3klMjBkb2N1bWVudHMlMjBjb21wbGlhbmNlJTIwbGVnYWx8ZW58MXx8fHwxNzczNjMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Policy documents and compliance files",
    eyebrow: "Policies & Procedures Development",
    headline: "Create policies\nthat guide operations.",
    subheadline: "Develop comprehensive policy frameworks that establish clear standards, ensure compliance, reduce risk, and enable consistent decision-making across your organization.",
    overview: "Our Policies & Procedures Development service creates the documented guardrails that enable consistent, compliant, and efficient organizational operations. We develop comprehensive policy frameworks covering all aspects of business operations—from HR and finance to operations and compliance—translating regulatory requirements, industry best practices, and organizational values into clear, actionable policies and procedures that guide employee behavior and management decision-making while ensuring regulatory compliance and risk mitigation.",
    tags: ["Policy Frameworks", "SOPs", "Compliance", "HR Policies", "Governance Manuals"],
    highlights: [
      { label: "Policies Developed", value: "500+" },
      { label: "Compliance Improvement", value: "95%" },
      { label: "Industries Covered", value: "15+" },
      { label: "SOPs Documented", value: "2,000+" },
    ],
    features: [
      { title: "Corporate Policy Framework Development", body: "We establish overarching policy architectures that define the scope, hierarchy, and governance of all organizational policies. This framework ensures policy consistency, proper authorization levels, regular review cycles, and clear communication channels that maintain policy relevance and effectiveness over time." },
      { title: "Departmental Policies (HR, Finance, Operations etc.)", body: "Each department requires specialized policies aligned with its functions and regulatory environment. We develop comprehensive departmental policies covering HR management, financial controls, operational standards, IT security, and more—tailored to your industry requirements and organizational culture." },
      { title: "Standard Operating Procedures (SOPs)", body: "Consistency in execution requires documented procedures. We create detailed SOPs for all critical business processes including step-by-step instructions, required inputs and outputs, quality standards, and responsible parties—ensuring tasks are performed consistently regardless of who executes them." },
      { title: "Compliance Policies", body: "Regulatory compliance is non-negotiable. We develop comprehensive compliance policies covering labor laws, data protection, anti-corruption, environmental regulations, and industry-specific requirements—translating complex regulations into practical organizational standards that ensure legal compliance and reduce regulatory risk." },
      { title: "Internal Control Policies", body: "Effective internal controls prevent errors, fraud, and inefficiency. We design control policies covering segregation of duties, approval authorities, documentation requirements, and monitoring mechanisms that safeguard organizational assets and ensure operational integrity." },
      { title: "Employee Handbook Development", body: "Your employee handbook is often the first introduction to organizational standards. We create comprehensive, accessible handbooks covering employment terms, workplace conduct, benefits, disciplinary procedures, and employee rights—presented in clear language that employees can understand and reference." },
      { title: "Corporate Governance Manuals", body: "Governance requires documented standards. We develop governance manuals that codify board procedures, management responsibilities, decision-making protocols, and oversight mechanisms—creating definitive references that ensure consistent governance practices and regulatory compliance." },
    ],
    process: [
      { step: "01", title: "Policy Assessment", body: "We review existing policies, regulatory requirements, industry standards, and organizational needs to identify gaps, inconsistencies, and improvement opportunities in your current policy framework." },
      { step: "02", title: "Framework Design", body: "We design comprehensive policy architectures defining policy categories, approval hierarchies, review cycles, and documentation standards that create coherent, manageable policy ecosystems." },
      { step: "03", title: "Policy Development", body: "Working with subject matter experts, we draft detailed policies and procedures that translate regulatory requirements and operational needs into clear, actionable organizational standards." },
      { step: "04", title: "Review & Approval", body: "Developed policies undergo thorough legal review, stakeholder consultation, and leadership approval to ensure compliance, practicality, and alignment with organizational objectives before implementation." },
      { step: "05", title: "Implementation & Training", body: "We support policy rollout through employee communication, training programs, and integration with HR systems—ensuring policies are understood, accepted, and effectively embedded in organizational operations." },
    ],
    cta: "Develop Your Policy Framework",
  },

  "business-process-optimization": {
    hero: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjB3b3JrZmxvdyUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3NzM2MzA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Business process workflow optimization",
    eyebrow: "Business Process Design & Optimization",
    headline: "Design workflows\nfor operational excellence.",
    subheadline: "Transform business operations through intelligent process design, re-engineering, and standardization that eliminates waste, reduces cycle times, and improves quality.",
    overview: "Our Business Process Design & Optimization service tackles the operational backbone of your organization—how work actually gets done. We map current processes, identify inefficiencies and bottlenecks, then redesign workflows using lean principles, automation opportunities, and best practices to create streamlined operations that deliver superior outcomes with fewer resources. From cross-departmental integration to process documentation, we build operational capabilities that scale with your business growth.",
    tags: ["Process Mapping", "Re-Engineering", "Workflow Design", "Efficiency", "Integration"],
    highlights: [
      { label: "Processes Optimized", value: "800+" },
      { label: "Efficiency Gains", value: "35%" },
      { label: "Cycle Time Reduction", value: "50%" },
      { label: "Cost Savings", value: "$10M+" },
    ],
    features: [
      { title: "Business Process Mapping", body: "You cannot improve what you do not understand. We create comprehensive process maps documenting current workflows including all activities, decision points, handoffs, and information flows—providing visual clarity that reveals inefficiencies, redundancies, and improvement opportunities hidden in day-to-day operations." },
      { title: "Process Re-Engineering", body: "Incremental improvements may not be enough. We conduct fundamental process re-engineering that challenges basic assumptions, eliminates non-value-added activities, and redesigns workflows from the ground up to achieve dramatic performance improvements rather than marginal gains." },
      { title: "Workflow Standardization", body: "Inconsistent processes produce inconsistent results. We standardize workflows across teams, locations, and time periods—creating uniform procedures that ensure predictable outcomes, simplify training, facilitate quality control, and enable continuous improvement through consistent measurement." },
      { title: "Departmental Process Documentation", body: "Tribal knowledge creates organizational risk. We document all departmental processes in detailed, accessible formats including flowcharts, procedure guides, and work instructions that capture institutional knowledge, support training, and ensure operational continuity regardless of personnel changes." },
      { title: "Process Gap Analysis", body: "Gaps between current and optimal processes represent improvement opportunities. We conduct systematic gap analyses comparing existing workflows against best practices, industry benchmarks, and operational requirements—identifying specific improvement priorities with quantified impact potential." },
      { title: "Cross-Department Workflow Integration", body: "Organizational silos create friction and delays. We design integrated cross-departmental workflows that eliminate handoff problems, improve information sharing, coordinate activities across functional boundaries, and create seamless end-to-end processes that serve customer needs efficiently." },
      { title: "Operational Efficiency Optimization", body: "Efficiency is a continuous journey. We implement lean methodologies, Six Sigma tools, and continuous improvement frameworks that systematically identify and eliminate waste, reduce variation, and optimize resource utilization across all operational processes." },
    ],
    process: [
      { step: "01", title: "Current State Mapping", body: "We thoroughly document existing processes through observation, interviews, and data analysis—creating accurate process maps that capture the reality of how work currently gets done, including informal practices and workarounds." },
      { step: "02", title: "Analysis & Diagnosis", body: "Mapped processes are analyzed to identify bottlenecks, redundancies, quality issues, and inefficiencies using quantitative metrics and qualitative assessment to build the improvement business case." },
      { step: "03", title: "Future State Design", body: "We design optimized future-state processes incorporating best practices, automation opportunities, and organizational requirements—creating workflows that achieve target performance levels while remaining practical and implementable." },
      { step: "04", title: "Implementation Planning", body: "Process changes require careful transition planning. We develop detailed implementation roadmaps including change management, training requirements, system modifications, and pilot approaches that minimize disruption while maximizing adoption." },
      { step: "05", title: "Monitoring & Continuous Improvement", body: "Implemented processes are monitored through performance metrics, feedback mechanisms, and regular reviews that enable ongoing refinement and continuous improvement as business conditions evolve." },
    ],
    cta: "Optimize Your Processes",
  },

  "system-automation": {
    hero: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NzM2MzA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Digital transformation and system automation technology",
    eyebrow: "System Automation & Digital Transformation",
    headline: "Automate processes.\nUnlock potential.",
    subheadline: "Transform operations through intelligent automation, ERP/CRM implementation, and comprehensive digital transformation that reduces costs, improves accuracy, and accelerates execution.",
    overview: "Our System Automation & Digital Transformation service helps organizations leverage technology to eliminate manual work, improve data accuracy, and create scalable digital operations. From ERP and CRM implementations to workflow automation and document management systems, we guide organizations through the complex journey of digital transformation—selecting appropriate technologies, managing implementations, and ensuring user adoption that delivers promised benefits. We bridge the gap between business needs and technical solutions, ensuring technology investments drive real operational improvement.",
    tags: ["ERP Implementation", "CRM Systems", "Workflow Automation", "DMS", "Digital Transformation"],
    highlights: [
      { label: "Systems Implemented", value: "120+" },
      { label: "Automation ROI", value: "300%" },
      { label: "Process Efficiency", value: "60%" },
      { label: "Error Reduction", value: "85%" },
    ],
    features: [
      { title: "ERP Implementation Advisory", body: "ERP systems are transformative but complex. We provide comprehensive ERP advisory covering requirements definition, vendor selection, implementation planning, configuration management, data migration, and change management that maximizes implementation success and accelerates time-to-value for your enterprise resource planning investment." },
      { title: "CRM System Implementation", body: "Customer relationships deserve systematic management. We implement CRM solutions that centralize customer data, automate sales processes, improve service delivery, and enable data-driven customer insights—transforming how your organization acquires, serves, and retains customers." },
      { title: "Workflow Automation Systems", body: "Repetitive manual tasks drain productivity and create errors. We design and implement workflow automation solutions that handle routine processes automatically—from approval routing and notifications to data entry and report generation—freeing employees for higher-value work while improving speed and accuracy." },
      { title: "Document Management Systems (DMS)", body: "Document chaos creates operational friction. We implement document management systems that provide centralized document storage, version control, access management, and retrieval capabilities—transforming document handling from a daily frustration into a streamlined, compliant process." },
      { title: "HRMS Implementation", body: "People management deserves systematic support. We implement Human Resource Management Systems that automate recruitment, onboarding, attendance, payroll, performance management, and employee self-service—reducing HR administrative burden while improving employee experience and data accuracy." },
      { title: "Accounting System Integration", body: "Financial management requires integrated systems. We implement and integrate accounting software, connecting financial operations with broader business systems to automate transaction recording, streamline reporting, improve financial visibility, and ensure data consistency across the organization." },
      { title: "Digital Business Transformation", body: "True transformation goes beyond individual systems. We develop comprehensive digital transformation strategies that align technology investments with business objectives, create integrated digital ecosystems, build digital capabilities, and manage organizational change to realize digital transformation benefits." },
    ],
    process: [
      { step: "01", title: "Digital Assessment", body: "We assess current technology landscape, manual processes suitable for automation, system integration gaps, and digital readiness to identify highest-impact automation and digital transformation opportunities." },
      { step: "02", title: "Solution Design", body: "Based on requirements and technology options, we design optimal automation solutions and digital architectures including system selection, integration approaches, and implementation roadmaps aligned with business priorities and constraints." },
      { step: "03", title: "Implementation Management", body: "We manage system implementation including vendor coordination, configuration oversight, data migration planning, testing protocols, and issue resolution—ensuring projects stay on schedule, within budget, and deliver expected functionality." },
      { step: "04", title: "Integration & Testing", body: "Systems must work together seamlessly. We manage integration between new and existing systems, conduct comprehensive testing, and resolve issues before go-live to ensure smooth operation from day one." },
      { step: "05", title: "Training & Adoption", body: "Technology delivers value only when used effectively. We develop training programs, user guides, and support mechanisms that drive rapid user adoption and ensure your digital investments deliver maximum operational benefit." },
    ],
    cta: "Start Your Digital Journey",
  },

  "performance-management": {
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMG1ldHJpY3MlMjBkYXNoYm9hcmQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzM2MzA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Performance metrics and business dashboard",
    eyebrow: "Performance Management Systems",
    headline: "Build systems\nthat drive results.",
    subheadline: "Build comprehensive performance management frameworks with clear KPIs, balanced scorecards, and monitoring systems that align teams, focus effort, and accelerate achievement of strategic objectives.",
    overview: "Our Performance Management Systems service creates the measurement and accountability frameworks that translate strategy into results. We develop tailored KPIs for each department, implement balanced scorecards that provide holistic performance visibility, and design performance monitoring systems that enable proactive management. From target-setting methodologies to appraisal systems, we build performance management capabilities that motivate employees, focus organizational effort, and create data-driven management cultures that consistently deliver superior outcomes.",
    tags: ["KPI Development", "Balanced Scorecard", "Performance Monitoring", "Appraisal Systems", "Target Setting"],
    highlights: [
      { label: "KPIs Developed", value: "3,000+" },
      { label: "Scorecards Implemented", value: "150+" },
      { label: "Performance Improvement", value: "40%" },
      { label: "Goal Achievement Rate", value: "85%" },
    ],
    features: [
      { title: "KPI Development for Each Department", body: "What gets measured gets managed. We develop department-specific KPIs that align functional activities with strategic objectives, selecting metrics that are meaningful, measurable, and motivational—providing clear performance visibility that guides decision-making and drives improvement efforts." },
      { title: "Balanced Scorecard Implementation", body: "Financial metrics alone are insufficient. We implement balanced scorecards incorporating financial, customer, operational, and learning perspectives—providing holistic performance visibility that ensures short-term results do not compromise long-term organizational health and capability." },
      { title: "Performance Monitoring Systems", body: "Timely information enables proactive management. We design and implement performance monitoring systems including dashboards, automated reporting, and exception alerting that provide managers with real-time visibility into performance trends, enabling rapid response to emerging issues and opportunities." },
      { title: "Employee Performance Appraisal Systems", body: "Fair evaluation drives engagement and improvement. We develop performance appraisal systems including evaluation criteria, rating scales, calibration processes, feedback mechanisms, and development planning—creating fair, transparent systems that employees trust and that genuinely improve performance." },
      { title: "Departmental Target Setting", body: "Effective targets are both ambitious and achievable. We develop target-setting methodologies and processes that establish challenging but realistic goals for departments and teams—incorporating historical performance, industry benchmarks, and strategic priorities to set targets that motivate without demoralizing." },
      { title: "Productivity Measurement Framework", body: "Productivity improvements require accurate measurement. We develop productivity frameworks that measure output per input across different work types, enabling identification of high-performing practices, benchmarking against standards, and targeted improvement initiatives that genuinely improve efficiency." },
    ],
    process: [
      { step: "01", title: "Strategy Alignment", body: "We review strategic objectives and organizational priorities to ensure performance management systems align measurement and accountability with what matters most for organizational success." },
      { step: "02", title: "Metric Design", body: "Working with department leaders, we design KPIs, scorecard structures, and measurement approaches that provide relevant, actionable performance information at all organizational levels." },
      { step: "03", title: "System Development", body: "We develop detailed performance management systems including scorecards, monitoring dashboards, appraisal processes, and reporting protocols that operationalize performance measurement." },
      { step: "04", title: "Implementation & Training", body: "Performance systems require user adoption. We implement systems, train managers and employees in their use, and establish review rhythms that embed performance management into organizational operating routines." },
      { step: "05", title: "Review & Refinement", body: "Performance management systems improve through iteration. We establish regular review cycles that assess system effectiveness, adjust metrics based on experience, and continuously enhance the value delivered by performance management processes." },
    ],
    cta: "Build Your Performance System",
  },

  "risk-management": {
    hero: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNrJTIwbWFuYWdlbWVudCUyMHNlY3VyaXR5JTIwY29udHJvbHN8ZW58MXx8fHwxNzczNjMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Risk management and security controls",
    eyebrow: "Internal Control & Risk Management",
    headline: "Strengthen controls.\nMinimize risk.",
    subheadline: "Build robust internal control systems and risk management frameworks that protect assets, ensure compliance, prevent fraud, and create organizational resilience.",
    overview: "Our Internal Control & Risk Management service creates the protective frameworks that safeguard organizational assets, ensure regulatory compliance, and enable confident operations. We design internal control systems that prevent errors and fraud, develop comprehensive risk management frameworks that identify and mitigate threats, and implement monitoring systems that provide early warning of emerging issues. From financial controls to operational risk assessments, we build risk-aware organizational capabilities that protect value while enabling appropriate risk-taking for growth.",
    tags: ["Internal Controls", "Risk Frameworks", "Financial Controls", "Compliance", "Fraud Prevention"],
    highlights: [
      { label: "Control Systems Built", value: "200+" },
      { label: "Risk Reduction", value: "70%" },
      { label: "Fraud Prevention", value: "90%" },
      { label: "Compliance Improvement", value: "95%" },
    ],
    features: [
      { title: "Internal Control System Design", body: "Strong controls prevent problems before they occur. We design comprehensive internal control systems incorporating segregation of duties, authorization requirements, reconciliation procedures, and physical safeguards—creating layered defenses that protect organizational assets and ensure operational integrity." },
      { title: "Risk Management Framework", body: "Effective risk management requires systematic approaches. We develop risk management frameworks covering risk identification, assessment, mitigation, monitoring, and reporting—establishing clear risk appetite statements, risk registers, and governance processes that enable proactive risk management across the organization." },
      { title: "Financial Control Systems", body: "Financial integrity is fundamental. We design financial controls covering cash management, accounts payable/receivable, payroll, inventory, and financial reporting—ensuring accurate records, preventing misappropriation, and providing reliable financial information for decision-making." },
      { title: "Compliance Monitoring Systems", body: "Regulatory compliance requires ongoing attention. We develop compliance monitoring systems that track regulatory requirements, monitor compliance status, identify gaps, and trigger corrective actions—ensuring continuous compliance with labor laws, tax regulations, industry standards, and other applicable requirements." },
      { title: "Fraud Prevention Framework", body: "Fraud can devastate organizations. We implement fraud prevention frameworks including fraud risk assessments, preventive controls, detective mechanisms, incident response protocols, and investigation procedures that significantly reduce fraud risk and enable rapid response if fraud occurs." },
      { title: "Operational Risk Assessment", body: "Operational disruptions threaten business continuity. We conduct operational risk assessments identifying potential failures in processes, systems, suppliers, and external dependencies—then develop mitigation strategies and contingency plans that build operational resilience." },
    ],
    process: [
      { step: "01", title: "Risk & Control Assessment", body: "We conduct comprehensive assessments of existing controls, risk exposure, compliance gaps, and past incidents to understand current risk management maturity and identify priority improvement areas." },
      { step: "02", title: "Framework Design", body: "Based on assessment findings and organizational requirements, we design internal control systems, risk management frameworks, and compliance monitoring approaches tailored to your risk profile and business context." },
      { step: "03", title: "Control Implementation", body: "We support implementation of controls, risk mitigation measures, and monitoring systems including policy development, process changes, system configurations, and control documentation." },
      { step: "04", title: "Testing & Validation", body: "Implemented controls must work as designed. We conduct control testing, risk scenario analysis, and compliance audits that validate control effectiveness and identify any gaps requiring additional attention." },
      { step: "05", title: "Ongoing Monitoring", body: "Risk management requires continuous attention. We establish ongoing monitoring mechanisms including key risk indicators, control self-assessments, compliance dashboards, and regular risk reviews that maintain effective risk management over time." },
    ],
    cta: "Strengthen Your Controls",
  },

  "departmental-systems": {
    hero: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXBhcnRtZW50JTIwdGVhbSUyMGJ1c2luZXNzJTIwb3JnYW5pemF0aW9ufGVufDF8fHx8MTc3MzYzMDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Department team and business organization",
    eyebrow: "Departmental System Development",
    headline: "Systems tailored\nfor every department.",
    subheadline: "Develop comprehensive management systems for HR, Finance, Sales, Marketing, Operations, and more—ensuring every function operates with clarity, efficiency, and strategic alignment.",
    overview: "Our Departmental System Development service creates specialized management systems tailored to the unique requirements of each functional area. We recognize that HR, Finance, Sales, Marketing, Procurement, Operations, and Customer Service each have distinct processes, compliance requirements, and performance drivers. We develop comprehensive systems for each department that standardize operations, improve efficiency, ensure compliance, and align departmental activities with broader organizational strategy—creating functional excellence that elevates overall organizational performance.",
    tags: ["HR Systems", "Finance Systems", "Sales Systems", "Operations", "Customer Experience"],
    highlights: [
      { label: "Systems Developed", value: "300+" },
      { label: "Departments Served", value: "25+" },
      { label: "Efficiency Improvement", value: "45%" },
      { label: "Compliance Achievement", value: "98%" },
    ],
    features: [
      { title: "HR Systems & Workforce Management", body: "People are your most important asset. We develop comprehensive HR systems covering recruitment, onboarding, training, performance management, compensation, benefits administration, and employee relations—creating structured approaches that attract, develop, and retain talent while ensuring HR compliance and employee satisfaction." },
      { title: "Finance & Accounting Systems", body: "Financial management requires systematic rigor. We develop finance systems covering budgeting, forecasting, accounting, treasury, tax, and financial reporting—establishing processes that ensure financial accuracy, support decision-making, maintain compliance, and optimize financial performance." },
      { title: "Sales & Marketing Systems", body: "Revenue generation needs systematic support. We develop sales systems covering lead management, opportunity tracking, sales forecasting, account management, and sales operations—plus marketing systems for campaign management, content development, and marketing operations that drive predictable revenue growth." },
      { title: "Procurement Systems", body: "Effective purchasing controls costs and ensures quality. We develop procurement systems covering vendor management, purchasing procedures, contract administration, inventory control, and spend analysis—creating systematic approaches that optimize supplier relationships and acquisition costs." },
      { title: "Operations Management Systems", body: "Operational excellence requires systematic approaches. We develop operations systems covering production planning, quality management, maintenance, logistics, and supply chain coordination—standardizing operational processes that ensure consistent output quality, efficiency, and reliability." },
      { title: "Customer Experience Systems", body: "Customer satisfaction drives loyalty and revenue. We develop customer experience systems covering service delivery, complaint handling, feedback management, and customer success processes—creating consistent, high-quality customer interactions that build lasting relationships and positive word-of-mouth." },
    ],
    process: [
      { step: "01", title: "Department Assessment", body: "We conduct detailed assessments of each department's current processes, pain points, compliance requirements, and improvement opportunities to understand specific system development needs." },
      { step: "02", title: "Requirements Definition", body: "Working with department leaders, we define detailed system requirements covering processes, controls, reporting needs, and integration requirements that the departmental system must satisfy." },
      { step: "03", title: "System Design", body: "We design comprehensive departmental systems including process flows, policy frameworks, document templates, reporting structures, and performance metrics tailored to each function's unique needs." },
      { step: "04", title: "Implementation Support", body: "We support system rollout through training development, pilot testing, change management, and ongoing advisory—ensuring new systems are adopted effectively and deliver intended benefits." },
      { step: "05", title: "Continuous Improvement", body: "Departmental systems evolve with business needs. We establish review mechanisms and continuous improvement processes that keep systems current, effective, and aligned with changing departmental requirements." },
    ],
    cta: "Develop Your Department Systems",
  },

  "gap-analysis": {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXNpcyUyMGRhdGElMjBzdHJhdGVneSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MzYzMDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Analysis and data strategy business",
    eyebrow: "Organizational Gap Analysis & Business Diagnostics",
    headline: "Identify weaknesses.\nUncover opportunities.",
    subheadline: "Conduct comprehensive organizational diagnostics that reveal structural weaknesses, process gaps, and system inefficiencies—providing the foundation for targeted, high-impact improvements.",
    overview: "Our Organizational Gap Analysis & Business Diagnostics service provides deep organizational intelligence that reveals what is really happening beneath the surface. We conduct systematic diagnostic studies that assess organizational health across multiple dimensions—strategy, structure, processes, systems, culture, and capabilities. By comparing current state against best practices and strategic requirements, we identify specific gaps and improvement opportunities with quantified impact potential. This diagnostic clarity enables targeted interventions that address root causes rather than symptoms, maximizing improvement ROI.",
    tags: ["Organizational Diagnostics", "Gap Analysis", "System Analysis", "Efficiency Assessment", "Improvement Roadmaps"],
    highlights: [
      { label: "Diagnostics Completed", value: "180+" },
      { label: "Gaps Identified", value: "5,000+" },
      { label: "Improvement ROI", value: "400%" },
      { label: "Client Satisfaction", value: "95%" },
    ],
    features: [
      { title: "Organizational Diagnostic Study", body: "Comprehensive health checks reveal hidden issues. We conduct thorough organizational diagnostics examining strategy execution, structural effectiveness, process efficiency, system adequacy, cultural alignment, and capability gaps—providing holistic assessments of organizational health and performance potential." },
      { title: "Process Gap Identification", body: "Process problems often hide in plain sight. We systematically identify gaps between current processes and best practices, analyzing workflow efficiency, quality consistency, cycle times, and resource utilization to reveal specific improvement opportunities with quantified impact potential." },
      { title: "System Efficiency Analysis", body: "Systems should enable rather than constrain. We analyze business system efficiency including technology utilization, integration effectiveness, data quality, automation levels, and user adoption—identifying system gaps that limit operational performance and growth capacity." },
      { title: "Role Conflict Analysis", body: "Unclear roles create friction and inefficiency. We conduct role conflict analysis examining reporting relationships, responsibility overlaps, authority gaps, and accountability clarity—identifying structural issues that impede execution and create organizational stress." },
      { title: "Structural Weakness Identification", body: "Organizational structure can be a barrier to performance. We identify structural weaknesses including excessive hierarchy, inadequate spans of control, siloed operations, and decision-making bottlenecks that limit organizational agility and effectiveness." },
      { title: "Improvement Roadmap Development", body: "Diagnosis without action is wasted effort. We develop prioritized improvement roadmaps that sequence gap remediation based on impact, effort, and dependencies—providing clear action plans that translate diagnostic insights into measurable performance improvements." },
    ],
    process: [
      { step: "01", title: "Diagnostic Planning", body: "We define diagnostic scope, objectives, and methodology—establishing assessment frameworks, data requirements, and stakeholder engagement plans tailored to your specific organizational context and diagnostic priorities." },
      { step: "02", title: "Data Collection", body: "We gather comprehensive diagnostic data through document review, process observation, system analysis, surveys, interviews, and performance data analysis—building complete pictures of organizational reality across assessed dimensions." },
      { step: "03", title: "Gap Analysis", body: "Collected data is analyzed to identify gaps between current state and best practices, strategic requirements, and industry benchmarks—quantifying gap severity, root causes, and improvement potential for each identified issue." },
      { step: "04", title: "Diagnostic Reporting", body: "We deliver comprehensive diagnostic reports presenting findings, gap analysis, improvement recommendations, and expected benefits—providing clear, actionable intelligence that supports informed improvement decisions." },
      { step: "05", title: "Roadmap Creation", body: "Based on diagnostic findings, we develop detailed improvement roadmaps prioritizing gaps, sequencing initiatives, defining resource requirements, and establishing success metrics that guide transformation efforts." },
    ],
    cta: "Start Your Diagnostic Assessment",
  },

  "change-management": {
    hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFuZ2UlMjBtYW5hZ2VtZW50JTIwdGVhbSUyMG9yZ2FuaXphdGlvbnxlbnwxfHx8fDE3NzM2MzA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Change management and team organization",
    eyebrow: "Change Management & Implementation Support",
    headline: "Ensure smooth\nadoption of change.",
    subheadline: "Navigate organizational transformation with proven change management strategies, leadership alignment, and comprehensive implementation support that accelerates adoption and sustains change.",
    overview: "Our Change Management & Implementation Support service addresses the human side of organizational transformation. Even the best-designed strategies, systems, and processes fail without effective implementation. We provide comprehensive change management support including stakeholder engagement, communication planning, leadership alignment, training development, and resistance management that helps organizations navigate change successfully. From system implementations to strategic transformations, we ensure new ways of working are adopted quickly and sustained over time, protecting your investment in improvement initiatives.",
    tags: ["Change Strategy", "Leadership Alignment", "Training", "Implementation", "Transformation"],
    highlights: [
      { label: "Change Projects", value: "250+" },
      { label: "Adoption Rate", value: "90%" },
      { label: "Implementation Success", value: "85%" },
      { label: "Sustainability Rate", value: "88%" },
    ],
    features: [
      { title: "Change Management Strategy", body: "Successful change requires deliberate planning. We develop comprehensive change management strategies covering stakeholder analysis, impact assessment, communication planning, training needs, and risk mitigation—creating integrated approaches that address both technical and human aspects of organizational change." },
      { title: "Leadership Alignment Programs", body: "Change starts at the top. We conduct leadership alignment programs that ensure executive and management consensus on change objectives, equip leaders with change leadership skills, and mobilize leadership influence to drive organizational adoption of new ways of working." },
      { title: "Staff Training & System Orientation", body: "People need skills to operate new systems. We develop comprehensive training programs including curriculum design, training delivery, user guides, and ongoing support that equip employees with the knowledge and skills needed to succeed in changed environments." },
      { title: "Implementation Roadmap", body: "Change implementation requires careful sequencing. We develop detailed implementation roadmaps that phase change activities, manage dependencies, allocate resources, and coordinate workstreams—ensuring smooth transitions that minimize disruption and maintain operational continuity." },
      { title: "Organizational Transformation Programs", body: "Major transformations require comprehensive approaches. We design and manage large-scale transformation programs addressing culture, structure, processes, and systems simultaneously—providing program management, change leadership, and sustained support through complex organizational transitions." },
      { title: "Resistance Management", body: "Change naturally creates resistance. We identify sources of resistance, develop targeted mitigation strategies, engage with resistant stakeholders, and address legitimate concerns—converting skeptics into supporters and preventing resistance from derailing improvement initiatives." },
    ],
    process: [
      { step: "01", title: "Change Assessment", body: "We assess the scope and nature of proposed changes, identify affected stakeholders, analyze organizational readiness, and evaluate potential risks and resistance factors that could impact implementation success." },
      { step: "02", title: "Strategy Development", body: "Based on assessment findings, we develop comprehensive change management strategies including communication plans, training programs, stakeholder engagement approaches, and leadership alignment activities tailored to your specific change context." },
      { step: "03", title: "Leadership Mobilization", body: "We engage leadership in change sponsorship, align management perspectives, develop leadership change capabilities, and establish governance structures that provide visible leadership commitment and ongoing change guidance." },
      { step: "04", title: "Implementation Execution", body: "We support change execution through communication delivery, training rollout, stakeholder engagement, issue resolution, and progress monitoring—ensuring change activities proceed according to plan and achieve intended adoption levels." },
      { step: "05", title: "Sustainment & Reinforcement", body: "We establish mechanisms to sustain change including performance monitoring, feedback systems, recognition programs, and continuous improvement processes that prevent backsliding and embed new ways of working into organizational culture." },
    ],
    cta: "Manage Your Change Journey",
  },

  "corporate-documentation": {
    hero: "https://images.unsplash.com/photo-1503551723145-6c040742065b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGF0aW9uJTIwa25vd2xlZGdlJTIwY29ycG9yYXRlfGVufDF8fHx8MTc3MzYzMDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Documentation and knowledge management",
    eyebrow: "Corporate Documentation & Knowledge Systems",
    headline: "Build documentation\nfor clarity.",
    subheadline: "Create comprehensive knowledge systems, policy manuals, and process documentation that capture institutional wisdom, standardize operations, and ensure organizational continuity.",
    overview: "Our Corporate Documentation & Knowledge Systems service creates the organizational memory that sustains operational excellence over time. We develop comprehensive documentation systems including policy manuals, SOP manuals, process documentation, and corporate knowledge bases that capture critical organizational knowledge in accessible, maintainable formats. From onboarding new employees to preserving expertise from departing veterans, our documentation systems ensure that essential knowledge is never lost and that organizational operations remain consistent and high-quality regardless of personnel changes.",
    tags: ["Documentation", "Knowledge Management", "SOP Manuals", "Knowledge Base", "Compliance Docs"],
    highlights: [
      { label: "Manuals Created", value: "400+" },
      { label: "SOPs Documented", value: "5,000+" },
      { label: "Knowledge Retention", value: "95%" },
      { label: "Training Time Reduction", value: "50%" },
    ],
    features: [
      { title: "Policy Manuals", body: "Comprehensive policy documentation provides clear standards. We develop well-organized policy manuals covering all organizational policies in accessible formats that employees can easily reference, understand, and follow—providing definitive guidance on organizational standards and expectations." },
      { title: "SOP Manuals", body: "Standard procedures ensure consistent execution. We create detailed SOP manuals documenting step-by-step procedures for all critical processes with clear instructions, visual aids, quality standards, and troubleshooting guidance that enable consistent, high-quality task execution." },
      { title: "Process Documentation", body: "Process knowledge must be captured and shared. We develop comprehensive process documentation including flowcharts, narrative descriptions, input/output specifications, and performance metrics that provide complete visibility into how work gets done and how processes can be improved." },
      { title: "Corporate Knowledge Base", body: "Organizational knowledge deserves systematic management. We implement knowledge base systems that capture, organize, and make accessible all forms of organizational knowledge—from technical procedures and best practices to historical decisions and lessons learned—enabling rapid information retrieval and organizational learning." },
      { title: "Compliance Documentation", body: "Regulatory compliance requires thorough documentation. We develop compliance documentation systems covering regulatory requirements, compliance procedures, evidence retention, and audit trails—ensuring organizations can demonstrate compliance and respond effectively to regulatory inquiries." },
      { title: "Training Materials", body: "Effective training requires quality materials. We develop comprehensive training documentation including employee handbooks, training manuals, e-learning content, and assessment tools that accelerate skill development and ensure consistent knowledge transfer to new and existing employees." },
    ],
    process: [
      { step: "01", title: "Documentation Audit", body: "We assess existing documentation, identify gaps, evaluate quality, and determine documentation priorities—establishing comprehensive views of current documentation landscape and improvement requirements." },
      { step: "02", title: "Architecture Design", body: "We design documentation architectures including structure, formats, templates, storage systems, and maintenance processes that ensure documentation is organized, accessible, consistent, and sustainable over time." },
      { step: "03", title: "Content Development", body: "Working with subject matter experts, we develop comprehensive documentation content capturing policies, procedures, processes, and knowledge in clear, usable formats that meet organizational and user needs." },
      { step: "04", title: "System Implementation", body: "We implement documentation management systems including repositories, version control, access management, and search capabilities that make documentation easily accessible while ensuring security and maintaining currency." },
      { step: "05", title: "Maintenance & Governance", body: "We establish documentation governance including review cycles, update procedures, ownership assignments, and quality standards that ensure documentation remains accurate, relevant, and valuable as the organization evolves." },
    ],
    cta: "Build Your Knowledge Foundation",
  },

  "global-business-delegations": {
    hero: "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "International business delegation and global networking event",
    eyebrow: "International Entrepreneur Exposure & Business Delegations",
    headline: "Open your business\nglobally.",
    subheadline: "Curated international delegations that connect GCC entrepreneurs with global markets, partners, and opportunities across 30+ countries.",
    overview: "Canbiz's Global Business Delegations program has facilitated over 120 MOU signings and connected entrepreneurs across 30+ countries through meticulously curated market exposure visits, networking forums, trade shows, and high-level business meetings. Each delegation is tailored to the specific interests, industries, and goals of participating businesses — ensuring every trip delivers tangible commercial outcomes.",
    tags: ["Market Exposure", "Partnership Facilitation", "Trade Missions", "MOU Signings", "Global Networking"],
    highlights: [
      { label: "Countries Visited", value: "30+" },
      { label: "MOU Signings Facilitated", value: "120+" },
      { label: "Entrepreneurs Participated", value: "500+" },
      { label: "Delegations Organised", value: "50+" },
    ],
    features: [
      { title: "Curated Country Delegations", body: "Each delegation is built around a specific target market, with deep pre-trip preparation including briefings, business matching, and cultural orientation." },
      { title: "Business Matching & Meetings", body: "We facilitate structured one-on-one meetings between GCC entrepreneurs and pre-vetted international partners, suppliers, investors, and distributors." },
      { title: "Trade Show & Exhibition Access", body: "Participants gain privileged access to leading international trade exhibitions and business forums relevant to their industry sector." },
      { title: "MOU & Partnership Facilitation", body: "Our experienced team supports negotiations and formalises partnerships through MOUs and commercial agreements during and after each delegation." },
      { title: "Government & Institution Visits", body: "Delegations include access to government bodies, chambers of commerce, and economic development agencies that open doors standard business travel cannot." },
      { title: "Post-Delegation Follow-Up", body: "We provide structured post-trip support to convert delegation relationships into active commercial partnerships and long-term collaborations." },
    ],
    process: [
      { step: "01", title: "Delegation Design", body: "We work with participants to understand their commercial objectives and design a delegation itinerary that maximises relevant exposure and meeting quality." },
      { step: "02", title: "Pre-Trip Preparation", body: "Comprehensive briefings, cultural training, and business matching ensure every participant arrives ready to engage and negotiate effectively." },
      { step: "03", title: "In-Country Execution", body: "Our on-the-ground team manages all logistics, coordinates meetings, and provides real-time facilitation throughout the delegation." },
      { step: "04", title: "MOU & Agreement Support", body: "We support the formalisation of partnerships, MOUs, and commercial agreements negotiated during the trip." },
      { step: "05", title: "Post-Delegation Support", body: "Regular follow-up sessions and relationship management ensure delegation contacts are converted into active, valuable business partnerships." },
    ],
    cta: "Join the Next Delegation",
  },

  "junior-ceo-program": {
    hero: "https://images.unsplash.com/photo-1629124096116-48743a0cea58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyMzM3MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Junior CEO youth leadership and entrepreneurship program",
    eyebrow: "Junior CEO Leadership Development Program",
    headline: "Build the next\nbusiness leaders.",
    subheadline: "A world-class entrepreneurship and leadership program for the children of business owners, equipping tomorrow's CEOs with the mindset, skills, and network to lead.",
    overview: "The Canbiz Junior CEO Program is a unique, structured leadership journey designed for the sons and daughters of entrepreneurs and business owners. Through a combination of mentorship, business education, real-world exposure, and peer networking, we prepare the next generation to confidently assume leadership roles, continue family business legacies, and launch ventures of their own.",
    tags: ["Youth Leadership", "Entrepreneurship", "Business Education", "Mentorship", "Family Business"],
    highlights: [
      { label: "Youth Leaders Enrolled", value: "400+" },
      { label: "Program Tracks", value: "3" },
      { label: "Mentor Network", value: "50+" },
      { label: "Business Plans Created", value: "200+" },
    ],
    features: [
      { title: "Business Fundamentals", body: "An accessible, engaging curriculum covering entrepreneurship, finance, marketing, and operations — designed to build genuine business literacy from a young age." },
      { title: "Leadership & Mindset", body: "Character, resilience, decision-making, and leadership presence are cultivated through experiential workshops, challenges, and reflection activities." },
      { title: "Mentorship Program", body: "Each participant is paired with a senior business mentor who provides guidance, challenges their thinking, and shares real-world experience." },
      { title: "Internship Placements", body: "Practical experience through structured internship placements within leading organisations, giving participants real exposure to professional environments." },
      { title: "Startup Practicum", body: "Participants develop and pitch their own business plans, receiving expert feedback and competing in a final-day investor showcase event." },
      { title: "Global Exposure", body: "International study visits and networking events connect Junior CEO participants with peers and leaders from across the GCC and beyond." },
    ],
    process: [
      { step: "01", title: "Enrolment", body: "Participants are enrolled through a straightforward process, with tracks available for different age groups and prior business exposure levels." },
      { step: "02", title: "Orientation Camp", body: "A high-energy orientation event builds connections among the cohort and introduces the program journey, goals, and expectations." },
      { step: "03", title: "Monthly Learning Modules", body: "Engaging monthly sessions covering core business and leadership topics, delivered in an interactive, age-appropriate format." },
      { step: "04", title: "Mentorship & Internship", body: "Ongoing mentorship and workplace internship experience runs in parallel with the academic curriculum throughout the program." },
      { step: "05", title: "Graduation & Showcase", body: "The program culminates in a business pitch showcase, with participants presenting plans to a panel of industry leaders, followed by graduation." },
    ],
    cta: "Enrol Your Child Today",
  },

  "women-leadership-programs": {
    hero: "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Women entrepreneurs in a leadership empowerment session",
    eyebrow: "She Entrepreneurship & Women CEO Leadership Programs",
    headline: "Women lead.\nWomen succeed.",
    subheadline: "Comprehensive leadership and business development programs designed to empower women entrepreneurs and senior executives to reach their full potential and lead with confidence.",
    overview: "The Canbiz She Entrepreneurship and Women CEO Leadership Programs are purpose-built to address the unique opportunities and challenges faced by women in business across the GCC. Through a combination of executive education, peer networks, mentorship, and visibility platforms, we equip women leaders with everything they need to build thriving enterprises and make a lasting impact in their industries and communities.",
    tags: ["Women Empowerment", "Leadership", "Entrepreneurship", "Networking", "Business Development"],
    highlights: [
      { label: "Women Leaders Empowered", value: "800+" },
      { label: "CEOs Graduated", value: "150+" },
      { label: "Industries Represented", value: "15+" },
      { label: "Business Revenue Generated", value: "$50M+" },
    ],
    features: [
      { title: "Women CEO Leadership Program", body: "An intensive leadership curriculum covering executive strategy, financial acumen, personal branding, and governance — built specifically for women in senior roles." },
      { title: "She Entrepreneurship Program", body: "A structured startup and growth program for women entrepreneurs, covering ideation, business planning, funding readiness, and market launch." },
      { title: "Peer Mastermind Network", body: "An exclusive network of accomplished women leaders who collaborate, challenge, and support each other through regular facilitated mastermind sessions." },
      { title: "Mentorship from Industry Leaders", body: "Access to a curated network of senior mentors — businesswomen, executives, and sector specialists — who provide guidance and open doors." },
      { title: "International Exposure", body: "Dedicated women's business delegations, international conferences, and global speaking opportunities that expand networks and horizons." },
      { title: "Media & Visibility Platform", body: "Canbiz provides a platform for women graduates to amplify their stories, participate in media features, and build public profiles as sector thought leaders." },
    ],
    process: [
      { step: "01", title: "Application & Assessment", body: "A personalised assessment process ensures the right program track — CEO Leadership or She Entrepreneurship — is matched to each participant's profile and goals." },
      { step: "02", title: "Orientation & Community", body: "An inspiring orientation event introduces the cohort, sets the cultural tone of inclusion and ambition, and launches the peer community." },
      { step: "03", title: "Core Program Modules", body: "Monthly learning sessions, workshops, and guest speaker events build knowledge and skills in an environment designed for women's learning preferences." },
      { step: "04", title: "Mentorship & Projects", body: "Personalised mentorship and real-world business projects ensure learning is applied to each participant's unique circumstances." },
      { step: "05", title: "Graduation & Platform", body: "Graduation marks the beginning — not the end — with ongoing access to the alumni network, events, and Canbiz's She Leadership platform." },
    ],
    cta: "Apply to the Program",
  },

  
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
