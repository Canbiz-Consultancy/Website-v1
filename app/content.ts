"use client"
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
} from "@phosphor-icons/react";

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
  ctaLabel: "Explore our advisory approach",
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
    icon: UsersIcon,
    title: "Management Consulting & Professional Training",
    shortTitle: "Management Consulting",
    description:
      "Strategic advisory and capability-building programs covering business growth, leadership development, sales effectiveness, operations, and organizational performance.",
  },
  {
    id: 2,
    icon: MegaphoneIcon,
    title: "Brand Strategy, Marketing Advisory & Content Development",
    shortTitle: "Brand Strategy & Marketing",
    description:
      "End-to-end branding solutions including brand positioning, marketing strategy, digital marketing, and structured content planning and execution.",
  },
  {
    id: 3,
    icon: StarIcon,
    title: "Executive & Entrepreneur Personal Branding",
    shortTitle: "Personal Branding",
    description:
      "Personal brand positioning, reputation management, thought leadership development, and public visibility strategies for business leaders and professionals.",
  },
  {
    id: 4,
    icon: CodeIcon,
    title: "Software Development, Digital Solutions & IT Maintenance",
    shortTitle: "Software & Digital Solutions",
    description:
      "Design, development, implementation, and ongoing maintenance of customized software, platforms, and digital systems tailored to your business needs.",
  },
  {
    id: 5,
    icon: ArrowsClockwiseIcon,
    title: "Consultancy Annual Maintenance Contract (AMC) Services",
    shortTitle: "AMC Services",
    description:
      "Retainer-based advisory services providing continuous strategic, operational, and performance support to clients on an ongoing basis.",
  },
  {
    id: 6,
    icon: GlobeIcon,
    title: "International Entrepreneur Exposure & Business Delegations",
    shortTitle: "Global Business Delegations",
    description:
      "Curated international business trips, market exposure visits, networking forums, and global partnership facilitation for entrepreneurs.",
  },
  {
    id: 7,
    icon: GraduationCapIcon,
    title: "Executive MBA Program",
    shortTitle: "Executive MBA",
    description:
      "Advanced executive education program focused on strategic leadership, business scaling, financial management, and global expansion.",
  },
  {
    id: 8,
    icon: BabyIcon,
    title: "Junior CEO Leadership Development Program",
    shortTitle: "Junior CEO Program",
    description:
      "Structured leadership and business exposure program for children of business owners, including mentorship, internships, and entrepreneurial skill development.",
  },
  {
    id: 9,
    icon: HeartIcon,
    title: "She Entrepreneurship & Women CEO Leadership Programs",
    shortTitle: "Women Leadership Programs",
    description:
      "Specialized leadership, business development, and capacity-building programs designed to empower women entrepreneurs and senior executives.",
  },
  {
    id: 10,
    icon: BuildingsIcon,
    title: "Finance & Strategic Management Consulting for Government",
    shortTitle: "Government & Public Sector",
    description:
      "High-level financial advisory, strategic planning, policy support, and performance management consulting for government and semi-government organizations.",
  },
];

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
  link1Label: "Build your personal brand with Canbiz →",
  link2Label: "Read our Executive Visibility Report →",
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
    name: "Government & Public Sector",
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
    name: "Entrepreneurship & SMEs",
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
    name: "Technology & Digital Innovation",
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
    name: "Financial Services",
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
    name: "Education, Training & Leadership",
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
    name: "Global Business & International Markets",
    description:
      "Curated international business delegations, cross-border market entry strategies, and global networking programs facilitating partnerships across continents.",
    image:
      "https://images.unsplash.com/photo-1759013277013-d69946b834eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc3MjMzNzE1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    stat: "30+",
    statLabel: "Countries visited on delegations",
    tags: ["Market Entry", "Business Delegations", "Global Partnerships"],
  },
];

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
  storyCta: "Discover our full story",
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

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerContent = {
  description:
    "Canbiz Consultancy Services is a global professional services firm providing consulting, assurance, tax, and advisory services. We help clients across industries navigate complexity, unlock growth opportunities, and build sustainable value for their stakeholders.",
  copyright: "© 2026 Canbiz Consultancy Services. All Rights Reserved.",
};

export const footerLinks = [
  { label: "Connect with us", href: "#" },
  { label: "Site map", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export const footerSocials = [
  { icon: FacebookLogoIcon, href: "#", label: "Facebook" },
  { icon: TwitterLogoIcon, href: "#", label: "Twitter" },
  { icon: LinkedinLogoIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeLogoIcon, href: "#", label: "YouTube" },
];
