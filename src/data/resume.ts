export const profile = {
  name: "Piotr Kazimierski",
  role: "Senior Salesforce Engineer",
  tagline: "Enterprise Integration Specialist & System Architect",
  intro:
    "Architecting high-throughput cloud ecosystems, decoupled systems & multi-cloud enterprise solutions.",
  email: "piotr.kazimierski92@wp.pl",
  phone: "+48 697 340 405",
  location: "Poland",
  summary:
    "Senior Software Engineer focused on architecting and developing scalable solutions within the Salesforce ecosystem. Expert in Apex Enterprise Patterns (FFLIB/AWAF) and robust backend development, with extensive experience integrating Salesforce with Java-based microservices and AWS cloud-native architectures. Proven track record of delivering mission-critical systems (KYC, Onboarding, Lead Management) for large-scale financial environments.",
  certifications: [
    "Salesforce Certified Platform Developer I",
    "Salesforce Certified Platform Developer II (PD2)",
    "Salesforce Certified Agentforce Specialist",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/PiotrKazimierski" },
    { label: "Tech Blog — ApexPredator.cloud", href: "https://apexpredator.cloud" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/piotr-kazimierski" },
  ],
};

export const stats = [
  { value: "15+", label: "Years in software engineering" },
  { value: "5+", label: "Years in Salesforce" },
  { value: "KYC", label: "Fintech scale systems" },
  { value: "3", label: "Salesforce certifications" },
];

export const competencies = [
  {
    title: "System & Solution Architecture",
    body: "End-to-end design of scalable enterprise systems, database modeling, identity management (OAuth2/SAML) and secure API gateways using EDA, DDD and microservices.",
  },
  {
    title: "Enterprise Salesforce Stack",
    body: "Deep technical governance across Platform Developer II, Agentforce, Financial Services Cloud, OmniStudio and Experience Cloud.",
  },
  {
    title: "Multi-Cloud Integrations",
    body: "Connecting Salesforce ecosystems with external backends via AWS Lambda, REST/SOAP APIs and messaging buses.",
  },
  {
    title: "DevOps, CI/CD & Automation",
    body: "Custom metadata comparison engines, automated deployment pipelines (SFDX, Python CLI tooling) and Infrastructure as Code.",
  },
  {
    title: "Quality & Security Assurance",
    body: "GoF design patterns, defensive programming, high test coverage and strict performance optimization to eliminate technical debt.",
  },
];

export const skills = [
  {
    group: "Salesforce",
    items: [
      "Apex",
      "LWC / LWR",
      "Aura → LWC migration",
      "FFLIB / AWAF",
      "Financial Services Cloud",
      "OmniStudio",
      "Experience Cloud",
      "2GP Packaging",
      "Pub/Sub API, CDC, Platform Events",
      "SOQL / SOSL & LDV",
      "Agentforce",
    ],
  },
  {
    group: "Backend & Cloud",
    items: [
      "Java (Spring Boot, Micronaut)",
      "Node.js / TypeScript",
      "AWS Lambda & serverless",
      "C# / .NET",
      "C / C++",
      "Kotlin",
      "Python",
      "REST / SOAP integrations",
      "OAuth2 / SAML identity",
      "EDA · DDD · Microservices",
      "SQL (MySQL / MariaDB)",
    ],
  },
  {
    group: "DevOps & Quality",
    items: [
      "Salesforce CLI & Scratch Orgs",
      "CI/CD pipelines",
      "Terraform (IaC)",
      "Docker & Kubernetes",
      "Kafka",
      "Datadog observability",
      "SonarCloud / PMD",
    ],
  },
];

export const experience = [
  {
    company: "XTB (X-Trade Brokers)",
    role: "Senior Salesforce Developer",
    period: "March 2025 – present",
    intro:
      "Engineered high-scale onboarding and KYC infrastructure for a leading global brokerage house, supporting multi-jurisdiction compliance and real-time client acquisition for millions of users.",
    highlights: [
      {
        title: "Automated Onboarding & KYC Orchestration",
        body: "Built integration layers with external KYC/AML providers and jurisdiction-specific logic for automated identity verification and risk assessment across global markets.",
      },
      {
        title: "Proprietary Document Engineering (LWC/LWR/JS)",
        body: "Developed a high-performance contract generation engine handling dynamic document rendering and digital signing beyond standard platform limitations.",
      },
      {
        title: "Java Microservices & Apex Integration",
        body: "Offloaded heavy business processes from Salesforce into Spring Boot / Micronaut services with robust event-driven communication.",
      },
      {
        title: "Global Lead Conversion Framework",
        body: "Enhanced a multi-jurisdictional auto-conversion engine, cutting manual processing time while keeping data integrity across distributed systems.",
      },
    ],
    stack: ["Apex", "LWC/LWR", "Java", "Event-driven"],
  },
  {
    company: "BCF Software",
    role: "Senior Salesforce Engineer",
    period: "May 2024 – March 2025",
    intro:
      "Developed and scaled a mission-critical financial ecosystem for a digital lending venture backed by a top-tier Dutch banking group, combining Salesforce FSC with AWS serverless architecture.",
    highlights: [
      {
        title: "Advanced LWC & Frontend Architecture",
        body: "Reactive, data-intensive interfaces for complex loan applications with strict LWC Security, state management and optimized rendering of real-time financial data.",
      },
      {
        title: "Financial Services Cloud & Architecture",
        body: "CORE banking layer on FSC using FFLIB (Domain, Selector, Service, UoW), optimized for Large Data Volumes and race conditions in automated loan flows.",
      },
      {
        title: "Full-Stack Serverless (Node.js/TypeScript)",
        body: "AWS Lambda microservices synchronising with Salesforce via Pub/Sub API, Change Data Capture and Platform Events.",
      },
      {
        title: "DevOps & Security-First Culture",
        body: "Terraform IaC, automated deployment pipelines, Datadog observability and SonarCloud/PMD quality gates. 2GP modular metadata strategy for high-velocity CI/CD.",
      },
    ],
    stack: ["FSC", "FFLIB", "AWS Lambda", "TypeScript", "Terraform"],
  },
  {
    company: "Accenture Poland",
    role: "Senior Salesforce Developer",
    period: "May 2021 – May 2024",
    intro:
      "Executed the technical evolution of flagship managed package solutions, migrating legacy Aura frameworks to high-performance Lightning Web Components.",
    highlights: [
      {
        title: "Managed Package Development",
        body: "Refactored complex managed package components across Sales, Service and Consumer Goods Clouds for better performance and scalability.",
      },
      {
        title: "System Integration & Middleware",
        body: "Synchronous and asynchronous integration layers over REST/SOAP APIs.",
      },
      {
        title: "DevOps & Automation",
        body: "Custom Python tooling to automate CI/CD tasks, improving metadata deployments and release reliability.",
      },
      {
        title: "Advanced Backend Development",
        body: "Robust Apex logic and optimized data models (SOQL/SOSL) for Large Data Volumes with high test coverage and enterprise security standards.",
      },
    ],
    stack: ["Aura → LWC", "Managed Packages", "Python", "REST/SOAP"],
  },
  {
    company: "BERTRAND Sp. z o.o. Sp. k.",
    role: "Developer",
    period: "April 2018 – April 2021",
    intro:
      "Developed modular product lines within the WinPro ERP system using C# and SQL, owning end-to-end release management and on-premises server deployments.",
    highlights: [],
    stack: ["C#", "MySQL / MariaDB", "ERP"],
  },
  {
    company: "Entres LTD",
    role: "Junior Java/Kotlin Developer",
    period: "November 2017 – April 2018",
    intro:
      "Built Java, Kotlin and Spring backend services alongside native Android applications, supporting containerized DevOps pipelines.",
    highlights: [],
    stack: ["Java", "Kotlin", "Spring", "Docker", "Kubernetes", "Kafka"],
  },
];