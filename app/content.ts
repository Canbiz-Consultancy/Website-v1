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
  FacebookLogoIcon,
  TwitterLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

// ─── Hero Slider ─────────────────────────────────────────────────────────────

export const heroSlides = [
  {
    id: 1,
    category: "CEO IMPERATIVE",
    title: "Five priorities for GCC CEOs navigating transformation and growth in 2026",
    description:
      "Explore how top business leaders across the Gulf are reimagining strategy, talent, and innovation to build resilient, future-ready organizations.",
    tab: "CEO Imperative",
    image:
      "https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRU8lMjBsZWFkZXJzaGlwJTIwZnV0dXJlJTIwc3RyYXRlZ3klMjB2aXNpb258ZW58MXx8fHwxNzcyMzM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    category: "WOMEN LEADERSHIP",
    title: "She leads: how Canbiz's Women CEO Programs are reshaping business across the GCC",
    description:
      "Specialized leadership and capacity-building programs empowering women entrepreneurs and senior executives to reach their full potential.",
    tab: "Women Leadership",
    image:
      "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    category: "GLOBAL BUSINESS",
    title: "International business delegations: connecting GCC entrepreneurs with the world",
    description:
      "Discover how our curated global exposure programs have facilitated 120+ MOU signings and opened new markets for entrepreneurs across 30+ countries.",
    tab: "Global Delegations",
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
      { label: "Management Consulting", sub: "Strategy and performance" },
      { label: "Brand & Marketing Advisory", sub: "Positioning and content" },
      { label: "Personal Branding", sub: "Executive visibility" },
      { label: "Digital Solutions & IT", sub: "Software and maintenance" },
      { label: "AMC Retainer Services", sub: "Ongoing advisory support" },
      { label: "Executive MBA Program", sub: "Advanced leadership education" },
      { label: "Junior CEO Program", sub: "Youth entrepreneurship" },
      { label: "Women CEO Programs", sub: "She entrepreneurship" },
      { label: "Government Advisory", sub: "Public sector consulting" },
      { label: "Global Delegations", sub: "International exposure" },
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
      { label: "Life at Canbiz", sub: "Culture and values" },
      { label: "Graduate Programs", sub: "Start your career" },
      { label: "Internships", sub: "Hands-on experience" },
    ],
  },
  {
    label: "About us",
    section: "about",
    children: [
      { label: "Our Story", sub: "A decade of impact" },
      { label: "Mission & Vision", sub: "Purpose-driven advisory" },
      { label: "Leadership Team", sub: "Meet our experts" },
      { label: "Our Journey", sub: "Milestones and growth" },
    ],
  },
];

// ─── Advisory Philosophy ──────────────────────────────────────────────────────

export const advisorySection = {
  eyebrow: "Our Advisory Philosophy",
  heading: "Decisions that create value — today, and for the long term.",
  body: "At Canbiz, we believe great advisory goes beyond advice. We embed ourselves in your challenges, align with your ambitions, and deliver counsel that is grounded in evidence, shaped by experience, and built for lasting impact across the GCC and beyond.",
  image:
    "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjM1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "Canbiz Advisory",
  imageEyebrow: "Canbiz Advisory",
  imageCaption: "Trusted by leaders across 30+ countries to navigate what comes next.",
};

export const advisoryPillars = [
  {
    icon: LightbulbIcon,
    value: "Strategic Clarity",
    label: "Turning complexity into clear, actionable direction for leaders",
  },
  {
    icon: ShieldCheckIcon,
    value: "Risk Intelligence",
    label: "Identifying and mitigating risk before it becomes a liability",
  },
  {
    icon: ChartBarIcon,
    value: "Performance Elevation",
    label: "Driving measurable growth across every layer of your organisation",
  },
];

// ─── Services Section ─────────────────────────────────────────────────────────

export const servicesSection = {
  eyebrow: "Our Core Services",
  headingPlain: "Approved Core",
  headingGold: "Service Portfolio",
  subtext:
    "The following business activities form our core service offerings, designed to drive growth, innovation, and sustainable success for our clients.",
  ctaPrimary: "Explore All Services",
  ctaSecondary: "Request a Consultation",
};

export const services = [
  {
    id: 1,
    slug: "management-consulting",
    icon: UsersIcon,
    title: "Management Consulting & Professional Training",
    shortTitle: "Management Consulting",
    description:
      "Strategic advisory and capability-building programs covering business growth, leadership development, sales effectiveness, operations, and organizational performance.",
  },
  {
    id: 2,
    slug: "brand-strategy-marketing",
    icon: MegaphoneIcon,
    title: "Brand Strategy, Marketing Advisory & Content Development",
    shortTitle: "Brand Strategy & Marketing",
    description:
      "End-to-end branding solutions including brand positioning, marketing strategy, digital marketing, and structured content planning and execution.",
  },
  {
    id: 3,
    slug: "personal-branding",
    icon: StarIcon,
    title: "Executive & Entrepreneur Personal Branding",
    shortTitle: "Personal Branding",
    description:
      "Personal brand positioning, reputation management, thought leadership development, and public visibility strategies for business leaders and professionals.",
  },
  {
    id: 4,
    slug: "software-digital-solutions",
    icon: CodeIcon,
    title: "Software Development, Digital Solutions & IT Maintenance",
    shortTitle: "Software & Digital Solutions",
    description:
      "Design, development, implementation, and ongoing maintenance of customized software, platforms, and digital systems tailored to your business needs.",
  },
  {
    id: 5,
    slug: "amc-services",
    icon: ArrowsClockwiseIcon,
    title: "Consultancy Annual Maintenance Contract (AMC) Services",
    shortTitle: "AMC Services",
    description:
      "Retainer-based advisory services providing continuous strategic, operational, and performance support to clients on an ongoing basis.",
  },
  {
    id: 6,
    slug: "global-business-delegations",
    icon: GlobeIcon,
    title: "International Entrepreneur Exposure & Business Delegations",
    shortTitle: "Global Business Delegations",
    description:
      "Curated international business trips, market exposure visits, networking forums, and global partnership facilitation for entrepreneurs.",
  },
  {
    id: 7,
    slug: "executive-mba",
    icon: GraduationCapIcon,
    title: "Executive MBA Program",
    shortTitle: "Executive MBA",
    description:
      "Advanced executive education program focused on strategic leadership, business scaling, financial management, and global expansion.",
  },
  {
    id: 8,
    slug: "junior-ceo-program",
    icon: BabyIcon,
    title: "Junior CEO Leadership Development Program",
    shortTitle: "Junior CEO Program",
    description:
      "Structured leadership and business exposure program for children of business owners, including mentorship, internships, and entrepreneurial skill development.",
  },
  {
    id: 9,
    slug: "women-leadership-programs",
    icon: HeartIcon,
    title: "She Entrepreneurship & Women CEO Leadership Programs",
    shortTitle: "Women Leadership Programs",
    description:
      "Specialized leadership, business development, and capacity-building programs designed to empower women entrepreneurs and senior executives.",
  },
  {
    id: 10,
    slug: "government-advisory",
    icon: BuildingsIcon,
    title: "Finance & Strategic Management Consulting for Government",
    shortTitle: "Government & Public Sector",
    description:
      "High-level financial advisory, strategic planning, policy support, and performance management consulting for government and semi-government organizations.",
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
  "management-consulting": {
    hero: "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjM1ODMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Management Consulting professionals in a strategy session",
    eyebrow: "Management Consulting & Professional Training",
    headline: "Transform strategy into sustainable performance.",
    subheadline: "Expert advisory that turns organisational ambition into measurable, lasting results across the GCC.",
    overview: "Canbiz's Management Consulting practice provides organisations with the strategic clarity, operational discipline, and leadership capability needed to outperform in today's competitive landscape. We work alongside leadership teams to diagnose challenges, design solutions, and implement change — from business model pivots to large-scale operational transformation.",
    tags: ["Strategy", "Leadership", "Operations", "Sales Excellence", "Organisational Design"],
    highlights: [
      { label: "Clients Served", value: "500+" },
      { label: "Years of Expertise", value: "10+" },
      { label: "Countries Reached", value: "30+" },
      { label: "Engagements Completed", value: "1,000+" },
    ],
    features: [
      { title: "Business Growth Strategy", body: "We develop bespoke growth roadmaps aligned to your market position, competitive landscape, and long-term vision — covering revenue expansion, market entry, and portfolio optimisation." },
      { title: "Leadership Development", body: "Our tailored leadership programs build the executive capabilities, decision-making frameworks, and cultural alignment needed to lead high-performing organisations in complexity." },
      { title: "Sales Effectiveness", body: "From go-to-market strategy to sales force design and incentive architecture, we help organisations build commercial engines that consistently win and retain high-value clients." },
      { title: "Operational Excellence", body: "We improve process efficiency, reduce waste, and embed performance management systems that create sustainable competitive advantage at the operational level." },
      { title: "Organisational Design", body: "Structural realignment, role clarity, and governance frameworks tailored to support your strategy and enable agility as your organisation grows and evolves." },
      { title: "Professional Training Programs", body: "Customised capability-building workshops and training curricula designed in partnership with your teams to embed practical skills and drive lasting behavioural change." },
    ],
    process: [
      { step: "01", title: "Discovery & Diagnostics", body: "We begin with a rigorous diagnostic phase — stakeholder interviews, data analysis, and benchmarking — to build a shared, evidence-based picture of your current state." },
      { step: "02", title: "Strategy Design", body: "Our consultants co-develop a tailored strategic blueprint with your leadership team, identifying priorities, initiatives, and success metrics aligned to your goals." },
      { step: "03", title: "Implementation Planning", body: "We translate strategy into a structured implementation roadmap, with phased workstreams, accountabilities, and risk mitigation built in from the outset." },
      { step: "04", title: "Execution Support", body: "We work alongside your team during delivery — providing hands-on advisory, resolving blockers, and course-correcting as needed to maintain momentum." },
      { step: "05", title: "Performance Review", body: "Structured review cycles ensure outcomes are tracked against defined KPIs, with learnings fed back into continuous improvement and future planning." },
    ],
    cta: "Request a Consulting Engagement",
  },

  "brand-strategy-marketing": {
    hero: "https://images.unsplash.com/photo-1733231291455-3c4de1c24e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwbWFya2V0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjMzNzE2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Creative branding and marketing professionals at work",
    eyebrow: "Brand Strategy, Marketing Advisory & Content Development",
    headline: "Build a brand that commands attention and loyalty.",
    subheadline: "End-to-end brand and marketing advisory for organisations ready to define, differentiate, and dominate their market.",
    overview: "Your brand is your most enduring business asset. Canbiz's Brand Strategy and Marketing Advisory practice helps organisations craft compelling, differentiated identities — and then activate them across every channel and touchpoint. From foundational brand architecture to targeted content campaigns, we deliver integrated solutions that build awareness, trust, and commercial momentum.",
    tags: ["Brand Positioning", "Marketing Strategy", "Digital Marketing", "Content Planning", "Campaign Management"],
    highlights: [
      { label: "Brands Positioned", value: "200+" },
      { label: "Campaigns Executed", value: "350+" },
      { label: "Industries Covered", value: "12+" },
      { label: "Growth Rate Achieved", value: "3× avg." },
    ],
    features: [
      { title: "Brand Architecture & Positioning", body: "We guide organisations through the process of defining their brand promise, personality, and positioning relative to the competitive landscape and target audience expectations." },
      { title: "Marketing Strategy", body: "Comprehensive marketing roadmaps that align your commercial goals with audience insights, channel mix, and budget — covering both digital and traditional channels." },
      { title: "Digital Marketing", body: "Performance-driven digital strategies across SEO, paid media, social platforms, and email marketing — designed to generate qualified demand and measurable ROI." },
      { title: "Content Development & Planning", body: "Structured editorial planning and high-quality content creation — thought leadership articles, video scripts, social content, and campaign assets — tailored to your brand voice." },
      { title: "Brand Identity Design", body: "Visual identity systems including logomarks, colour palettes, typography, and brand guidelines that ensure consistency across every customer interaction." },
      { title: "Campaign Management", body: "End-to-end execution support for integrated marketing campaigns, from brief to launch to post-campaign performance analysis and optimisation." },
    ],
    process: [
      { step: "01", title: "Brand Audit", body: "A thorough review of your existing brand assets, competitive positioning, and market perception — identifying gaps and strengths that inform strategy." },
      { step: "02", title: "Strategy Development", body: "We co-create a differentiated brand and marketing strategy, establishing positioning pillars, messaging frameworks, and channel priorities." },
      { step: "03", title: "Creative Development", body: "Our creative team translates strategy into compelling visual identities, messaging, and campaign concepts tailored to your audiences." },
      { step: "04", title: "Activation & Launch", body: "Campaigns and content are activated across agreed channels, with robust tracking and attribution frameworks in place from day one." },
      { step: "05", title: "Optimise & Evolve", body: "Ongoing performance analysis drives continuous refinement — ensuring your brand and marketing investment delivers compounding returns over time." },
    ],
    cta: "Start Your Brand Journey",
  },

  "personal-branding": {
    hero: "https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MjMzNzE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Executive personal branding and thought leadership",
    eyebrow: "Executive & Entrepreneur Personal Branding",
    headline: "Your story is your most powerful competitive advantage.",
    subheadline: "We help executives, entrepreneurs, and senior leaders build authentic personal brands that command authority, open doors, and create lasting influence.",
    overview: "In a world where credibility is built online and influence is earned through visibility, a strong personal brand is no longer optional for senior leaders. Canbiz's Personal Branding practice works with executives and entrepreneurs to clarify their unique narrative, amplify their thought leadership, and build a public presence that reflects the depth of their expertise and character.",
    tags: ["Personal Narrative", "Thought Leadership", "Executive Visibility", "Reputation Management", "Media & PR"],
    highlights: [
      { label: "Executives Branded", value: "300+" },
      { label: "Media Features Secured", value: "500+" },
      { label: "LinkedIn Growth Avg.", value: "10×" },
      { label: "MOU Facilitated", value: "120+" },
    ],
    features: [
      { title: "Personal Brand Strategy", body: "We help you define your unique brand positioning — your story, values, voice, and the distinct perspective you bring to your industry and audience." },
      { title: "Thought Leadership Development", body: "We craft high-impact content strategies and ghostwrite articles, speeches, and social content that position you as a credible authority in your field." },
      { title: "Digital Presence Optimisation", body: "From LinkedIn profile overhaul to website design, we build a polished, professional digital footprint that makes the right first impression every time." },
      { title: "Reputation Management", body: "Proactive strategies to protect, manage, and enhance your public reputation — including crisis readiness, media relations, and narrative control." },
      { title: "Media & Speaker Positioning", body: "We secure media features, podcast appearances, and speaking opportunities that expand your reach, credibility, and influence." },
      { title: "Coaching & Advisory", body: "One-on-one personal branding coaching sessions that equip you with the skills, confidence, and strategic mindset to sustain and grow your presence independently." },
    ],
    process: [
      { step: "01", title: "Brand Discovery", body: "A deep-dive session to uncover your story, strengths, achievements, values, and the audiences you want to connect with." },
      { step: "02", title: "Positioning & Narrative", body: "We craft your personal brand positioning statement and core narrative — the foundation for all content and communications." },
      { step: "03", title: "Digital & Visual Identity", body: "Your digital presence is elevated with a professional profile, visual identity, and content calendar aligned to your brand." },
      { step: "04", title: "Content & Visibility", body: "We activate your presence through consistent, high-quality content and targeted media outreach for maximum visibility." },
      { step: "05", title: "Sustain & Scale", body: "Regular advisory check-ins, audience growth analysis, and content performance reviews ensure your brand continues to grow." },
    ],
    cta: "Build Your Personal Brand",
  },

  "software-digital-solutions": {
    hero: "https://images.unsplash.com/photo-1760346546767-95b89356a6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Software development and digital innovation workspace",
    eyebrow: "Software Development, Digital Solutions & IT Maintenance",
    headline: "Custom digital solutions engineered for your business.",
    subheadline: "From bespoke software to full-scale digital transformation — we build, implement, and maintain technology that powers growth.",
    overview: "Canbiz's Digital Solutions practice combines technical excellence with deep business understanding to deliver software and digital systems that solve real problems. Whether you need a custom enterprise platform, a client-facing web application, or an IT maintenance partner to keep your systems running at peak performance, our team of experienced engineers and digital strategists delivers with precision and speed.",
    tags: ["Web Development", "Mobile Apps", "ERP & CRM", "Cloud Solutions", "IT Maintenance"],
    highlights: [
      { label: "Digital Projects Delivered", value: "150+" },
      { label: "Platforms Built", value: "80+" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Tech Partners", value: "20+" },
    ],
    features: [
      { title: "Custom Software Development", body: "We design and build tailored software solutions — from enterprise management systems to consumer-facing digital products — engineered to your exact specifications." },
      { title: "Web & Mobile Applications", body: "High-performance, scalable web and mobile applications built with modern frameworks, responsive design, and an obsessive focus on user experience." },
      { title: "ERP & CRM Implementation", body: "Expert implementation, configuration, and training for leading ERP and CRM platforms, ensuring seamless adoption and maximum return on investment." },
      { title: "Cloud Solutions & Migration", body: "Strategic cloud architecture design and migration services that improve scalability, reduce infrastructure costs, and enhance data security." },
      { title: "IT Maintenance & Support", body: "Proactive monitoring, patch management, and dedicated technical support ensuring your digital infrastructure remains secure, stable, and continuously optimised." },
      { title: "Digital Transformation Strategy", body: "We help organisations formulate and execute digital transformation roadmaps that modernise operations, improve agility, and unlock new revenue opportunities." },
    ],
    process: [
      { step: "01", title: "Discovery & Requirements", body: "We work with your stakeholders to understand business objectives, user needs, and technical constraints — producing a clear, agreed project specification." },
      { step: "02", title: "Architecture & Design", body: "Our team designs the technical architecture and user experience, validating with prototypes before a single line of production code is written." },
      { step: "03", title: "Agile Development", body: "Development is delivered in structured sprints with regular demos, ensuring alignment with your expectations at every stage." },
      { step: "04", title: "Testing & Quality Assurance", body: "Rigorous multi-layer testing — functional, performance, security, and user acceptance — ensures every solution meets our exacting quality standards." },
      { step: "05", title: "Deployment & Ongoing Support", body: "Smooth, managed go-live deployment followed by proactive maintenance, monitoring, and feature iteration to keep your systems performing." },
    ],
    cta: "Start Your Digital Project",
  },

  "amc-services": {
    hero: "https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMzM3MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Ongoing consulting advisory and support team",
    eyebrow: "Consultancy Annual Maintenance Contract (AMC) Services",
    headline: "Senior advisory, continuously at your side.",
    subheadline: "Retainer-based consulting partnerships that give your organisation access to expert strategic support — exactly when you need it, all year round.",
    overview: "The Canbiz AMC Retainer model provides organisations with a dedicated advisory partnership on a continuous, subscription basis. Rather than engaging consultants reactively, our AMC clients benefit from proactive strategic counsel, regular review sessions, and rapid-response advisory support — ensuring they are always prepared, always progressing, and never navigating complexity alone.",
    tags: ["Retainer Advisory", "Strategic Support", "Performance Reviews", "Operational Guidance", "On-Demand Access"],
    highlights: [
      { label: "Active AMC Clients", value: "80+" },
      { label: "Advisory Hours/Month", value: "Flexible" },
      { label: "Response Time SLA", value: "24 hrs" },
      { label: "Client Retention Rate", value: "92%" },
    ],
    features: [
      { title: "Dedicated Advisory Partnership", body: "A named senior consultant is assigned to your account, ensuring continuity, context, and a trusted relationship that deepens over time." },
      { title: "Monthly Strategy Reviews", body: "Structured monthly sessions review performance against strategic goals, surface emerging issues, and recalibrate priorities as your business evolves." },
      { title: "On-Demand Advisory Access", body: "Rapid-response access to your advisory team for emerging questions, decisions, and challenges — without the delay of new engagement setup." },
      { title: "Operational Performance Support", body: "Continuous monitoring and advisory on KPIs, operational metrics, and performance dashboards to keep your business on track." },
      { title: "Priority Project Support", body: "AMC clients receive priority access to specialist teams for new projects, ensuring faster mobilisation and seamless advisory continuity." },
      { title: "Annual Strategic Planning", body: "A comprehensive annual planning engagement at the start of each cycle, setting the strategic agenda and investment priorities for the year ahead." },
    ],
    process: [
      { step: "01", title: "Onboarding & Setup", body: "An intensive onboarding process ensures your dedicated consultant fully understands your business, goals, team, and current priorities." },
      { step: "02", title: "Monthly Advisory Cycle", body: "Structured monthly sessions review performance, surface issues, and set the agenda for the coming period — keeping strategic momentum consistent." },
      { step: "03", title: "On-Demand Support", body: "Your advisory team is available for rapid consultation between scheduled sessions, ensuring you are never without expert guidance on urgent matters." },
      { step: "04", title: "Quarterly Deep-Dives", body: "Every quarter, a more intensive review session examines strategic progress, major challenges, and alignment with annual objectives." },
      { step: "05", title: "Annual Renewal & Planning", body: "Contract renewal comes with a full strategic planning workshop, ensuring the next cycle is set up for even greater impact." },
    ],
    cta: "Enquire About AMC Retainer",
  },

  "global-business-delegations": {
    hero: "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "International business delegation and global networking event",
    eyebrow: "International Entrepreneur Exposure & Business Delegations",
    headline: "Open your business to the world.",
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

  "executive-mba": {
    hero: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNQkElMjBleGVjdXRpdmUlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzIzMzcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Executive MBA leadership education classroom",
    eyebrow: "Executive MBA Program",
    headline: "Elevate your leadership. Accelerate your enterprise.",
    subheadline: "An advanced executive education experience designed for senior leaders ready to scale their thinking, their organisations, and their impact.",
    overview: "The Canbiz Executive MBA Program is a premium, practice-based leadership education experience built for senior executives, business owners, and high-potential leaders. Combining world-class academic rigour with real-world business application, our program equips participants with the strategic frameworks, financial acumen, and global perspective needed to lead and scale organisations in the modern era.",
    tags: ["Executive Education", "Leadership", "Finance", "Strategy", "Global Expansion"],
    highlights: [
      { label: "Graduates to Date", value: "600+" },
      { label: "Program Duration", value: "12 months" },
      { label: "Countries Represented", value: "20+" },
      { label: "Industries Covered", value: "12+" },
    ],
    features: [
      { title: "Strategic Leadership", body: "Advanced frameworks for leading organisations through transformation, uncertainty, and growth — from vision-setting to execution excellence." },
      { title: "Financial Management", body: "Deep-dive into corporate finance, investment decision-making, financial modelling, and value creation strategies for senior leaders." },
      { title: "Business Scaling & Growth", body: "Proven methodologies for scaling businesses sustainably — across markets, geographies, and product lines — drawing on real GCC case studies." },
      { title: "Global Business & Market Entry", body: "Frameworks for international expansion, cross-border partnerships, and navigating the regulatory and cultural complexities of global markets." },
      { title: "Innovation & Digital Strategy", body: "How to leverage emerging technologies, data, and digital platforms to create competitive advantage and drive organisational innovation." },
      { title: "Peer Learning & Networking", body: "A cohort of accomplished peers across industries provides a richly collaborative learning environment and a powerful professional network for life." },
    ],
    process: [
      { step: "01", title: "Application & Selection", body: "A competitive application process ensures each cohort is composed of accomplished, committed professionals who elevate the learning experience for all." },
      { step: "02", title: "Orientation", body: "An immersive orientation program builds cohort connections, aligns expectations, and prepares participants for the intensity of the learning journey." },
      { step: "03", title: "Core Modules", body: "Rigorous monthly modules delivered by expert faculty and practitioners, combining theory with real case applications and peer discussion." },
      { step: "04", title: "Capstone Project", body: "Each participant completes a high-impact capstone project applied directly to their own business — generating real strategic outcomes." },
      { step: "05", title: "Graduation & Alumni", body: "Program completion is celebrated with a formal graduation, and participants join an active global alumni network for continued growth." },
    ],
    cta: "Apply to the Executive MBA",
  },

  "junior-ceo-program": {
    hero: "https://images.unsplash.com/photo-1629124096116-48743a0cea58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyMzM3MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Junior CEO youth leadership and entrepreneurship program",
    eyebrow: "Junior CEO Leadership Development Program",
    headline: "Building the next generation of business leaders.",
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
    headline: "She leads. She succeeds. She transforms.",
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

  "government-advisory": {
    hero: "https://images.unsplash.com/photo-1768399808130-abac2a8442e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcHVibGljJTIwc2VjdG9yJTIwcG9saWN5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcyMzM3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroAlt: "Government advisory and strategic planning session",
    eyebrow: "Finance & Strategic Management Consulting for Government",
    headline: "Shaping public sector excellence.",
    subheadline: "High-level strategic, financial, and performance consulting trusted by government ministries, authorities, and semi-government organisations across the GCC.",
    overview: "Canbiz's Government Advisory practice brings deep expertise in public sector strategy, financial management, and institutional performance to the organisations that shape the future of nations. We work in close partnership with government entities to design and implement transformational strategies, build institutional capabilities, and optimise performance — ensuring public resources are deployed for maximum societal impact.",
    tags: ["Policy Advisory", "Financial Consulting", "Strategic Planning", "Performance Management", "Public Sector"],
    highlights: [
      { label: "Government Bodies Served", value: "20+" },
      { label: "Strategic Plans Delivered", value: "60+" },
      { label: "Countries of Engagement", value: "10+" },
      { label: "Years of Public Sector Expertise", value: "10+" },
    ],
    features: [
      { title: "Strategic Planning & Policy Advisory", body: "We partner with government leaders to design multi-year strategic plans, policy frameworks, and national programs aligned to Vision 2030 and broader development goals." },
      { title: "Financial Advisory & Budget Optimisation", body: "Expert financial consulting covering budget planning, revenue diversification, expenditure optimisation, and fiscal sustainability for public entities." },
      { title: "Institutional Performance Management", body: "Design and implementation of balanced scorecards, KPI frameworks, and performance management systems that drive accountability and measurable improvement." },
      { title: "Organisational Restructuring", body: "We support government entities in restructuring for efficiency, clear accountability, and alignment with strategic mandates." },
      { title: "Feasibility & Economic Studies", body: "Rigorous feasibility analysis, economic impact assessments, and investment appraisals to support high-stakes government decision-making." },
      { title: "Public–Private Partnership Advisory", body: "End-to-end advisory on PPP structuring, partner selection, contract negotiation, and performance monitoring for major public initiatives." },
    ],
    process: [
      { step: "01", title: "Stakeholder Engagement", body: "Deep engagement with ministers, directors, and frontline staff to build a comprehensive understanding of the entity's mandate, challenges, and priorities." },
      { step: "02", title: "Situation Analysis", body: "A rigorous diagnostic using quantitative data, benchmarking, and qualitative insight to establish an accurate baseline for strategy design." },
      { step: "03", title: "Strategy Development", body: "Co-design of a strategic plan or solution with senior government officials, ensuring ownership and alignment from the outset." },
      { step: "04", title: "Implementation Support", body: "Hands-on support during execution — managing workstreams, building internal capability, and navigating institutional complexity." },
      { step: "05", title: "Performance Monitoring", body: "Ongoing performance tracking, reporting, and advisory support ensures strategic objectives are achieved and outcomes are sustained." },
    ],
    cta: "Engage Our Government Advisory Team",
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

export const insights = [
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
    "A premier management consultancy and professional services firm dedicated to empowering organizations and leaders across the GCC and global markets.",
  image:
    "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wYW55JTIwdGVhbSUyMGRpdmVyc2UlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc3MjMzNzE2OHww&ixlib=rb-4.1.0&q=80&w=1080",
  imageAlt: "About Canbiz",
  storyHeadingPlain: "A decade of",
  storyHeadingGold: "transformative impact",
  storyPara1:
    "Founded in Dubai, Canbiz Consultancy Services has grown from a boutique advisory firm into a multi-sector powerhouse serving government institutions, corporations, SMEs, and individual leaders across the GCC and internationally.",
  storyPara2:
    "Our core services — spanning management consulting, brand strategy, digital solutions, executive education, and government advisory — reflect our unwavering commitment to comprehensive, high-impact client service.",
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
    "Canbiz Consultancy Services is a global professional services firm providing consulting, assurance, tax, and advisory services. We help clients across industries navigate complexity, unlock growth opportunities, and build sustainable value for their stakeholders.",
  copyright: "© 2026 Canbiz Consultancy Services. All Rights Reserved.",
};

export const footerLinks = [
  { label: "Connect with us", href: "/contact" },
  { label: "Site map", href: "/sitemap-page" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export const footerSocials = [
  { icon: FacebookLogoIcon, href: "#", label: "Facebook" },
  { icon: TwitterLogoIcon, href: "#", label: "Twitter" },
  { icon: LinkedinLogoIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeLogoIcon, href: "#", label: "YouTube" },
];
