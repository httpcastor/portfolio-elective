import type { Project, NetworkCertification, SkillCategory, QuickFact } from '../types';
import profilePic from '../assets/images/8018d25d-701d-4e1e-b892-9806c527b4ed.jpg';

export const developerProfile = {
  name: 'Mark Anthony Castor',
  handle: 'httpcastor',
  title: 'Network Systems & Technical Support Specialist',
  tagline: 'Focused on computer networking, Cisco fundamentals, and cybersecurity — with practical experience in hardware maintenance, QA testing, and event technical support.',
  email: 'castormarkanthony6@gmail.com',
  github: 'https://github.com/httpcastor',
  linkedin: 'https://www.linkedin.com/in/mark-anthony-castor-4291a0288/?isSelfProfile=true',
  location: 'Aparri, Cagayan, Philippines',
  statusTag: 'Aspiring Networking Engineer· Aparri, Cagayan',
  profileImage: profilePic,
  education: {
    degree: 'BS Computer Engineering (4th Year Standing)',
    institution: 'Cagayan State University – Carig Campus',
    focus: 'Computer Networks, Hardware Support & Active Directory',
  },
  bioParagraph1:
    'I am a fourth-year Computer Engineering student at Cagayan State University – Carig Campus, based in Aparri, Cagayan. My primary passion and focus is computer networking — specifically in the basic foundations like IP addressing, and fundamental cybersecurity practices.',
  bioParagraph2:
    'Beyond networking fundamentals, I am currently taking certifications in computer hardware and upgrade support, i also serve as technical support for live event productions, and have hands-on experience as a QA tester on software development systems during our 3rd Year Project Software development. I also maintain practical development literacy with Django, Vue 3, databases (PostgreSQL/SQL), and Git Bash.',
};

export const quickFacts: QuickFact[] = [
  { label: 'Primary Aspirations', value: 'Computer Networking', detail: 'CCNA 200-301' },
  { label: 'Technical Skills', value: 'Technical Hardware Support ', detail: 'Component diagnostics & assembly' },
  { label: 'Systems Background', value: 'Software QA Testing', detail: 'Test execution & defect reporting' },
  { label: 'Event Operations', value: 'Event Technical Support', detail: 'Live audio/visual & local network drops' },
];

export const networkCertificationsList: NetworkCertification[] = [
  {
    id: 'cert-cisco-basics',
    title: 'Cisco Networking Basics & Fundamentals',
    issuer: 'Cisco Networking Academy',
    code: 'CSCO-NET-FND',
    level: 'Networking Foundation',
    issueDate: 'Verified Credential',
    description:
      'Covers fundamental network architectures, IPv4 addressing and subnet calculation, OSI & TCP/IP protocols, Ethernet cabling standards, and initial Cisco switch/router configuration.',
    coreDomains: [
      'IPv4 Subnetting & CIDR Calculation',
      'OSI 7-Layer & TCP/IP Protocol Stack',
      'Basic Switch & Router Configuration (Cisco IOS)',
      'Network Cabling (TIA-568A/B) & Local LAN Setup',
    ],
    verifiedStatus: 'Verified Cisco Foundation',
  },
  {
    id: 'cert-cybersecurity-basics',
    title: 'Cybersecurity Fundamentals & Network Defense',
    issuer: 'Cisco Networking Academy / Industry Credential',
    code: 'SEC-FND-2025',
    level: 'Security & Access Control',
    issueDate: 'Verified Credential',
    description:
      'Foundational training in network security principles, threat mitigation, endpoint protection, securing device access with strong credentials, and basic firewall/ACL packet filtering concepts.',
    coreDomains: [
      'Network Security Fundamentals & Threat Types',
      'Switch Port Security & MAC Address Protection',
      'Basic IP Access Control Lists (ACLs)',
      'Device Hardening & Secure Administrative Access',
    ],
    verifiedStatus: 'Verified Security Credential',
  },
  {
    id: 'cert-hardware-support',
    title: 'Hardware & System Upgrade Support',
    issuer: 'Technical & Vocational Certification',
    code: 'HW-UPG-SUP24',
    level: 'Hardware Technical Support',
    issueDate: 'Certified Credential',
    description:
      'Validated competency in PC hardware troubleshooting, component assembly, RAM and SSD storage upgrades, BIOS/UEFI configuration, preventive maintenance, and thermal management.',
    coreDomains: [
      'Desktop & Laptop Hardware Diagnostics',
      'Component Replacement & Storage/RAM Upgrades',
      'Power Supply & Motherboard Continuity Testing',
      'System Benchmarking & Thermal Optimization',
    ],
    verifiedStatus: 'Certified Hardware Support',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Computer Networking (Primary Focus)',
    description: 'Foundational routing, switching, addressing, and infrastructure configurations.',
    skills: [
      { name: 'Cisco Networking Basics', level: 'Primary Focus', highlight: 'Switch/router setup, interface config, basic IOS CLI' },
      { name: 'IPv4 Subnetting & VLSM', level: 'Proficient', highlight: 'CIDR notation, address planning, broadcast domains' },
      { name: 'Cybersecurity Fundamentals', level: 'Certified', highlight: 'Basic ACLs, switch port security, threat awareness' },
      { name: 'Network Cabling & Drops', level: 'Practical', highlight: 'TIA-568B crimping, patch panels, connectivity testing' },
    ],
  },
  {
    title: 'Hardware & Upgrade Support',
    description: 'Certified technical support for physical computing hardware and maintenance.',
    skills: [
      { name: 'Hardware Diagnostics & Repair', level: 'Certified', highlight: 'Component troubleshooting, fault isolation' },
      { name: 'System Upgrades (RAM/Storage)', level: 'Certified', highlight: 'NVMe/SATA SSD migrations, memory expansions' },
      { name: 'BIOS/UEFI & OS Deployment', level: 'Proficient', highlight: 'Clean installations, driver setup, firmware updates' },
      { name: 'Preventive Maintenance', level: 'Proficient', highlight: 'Dust cleaning, thermal paste repasting, thermal audits' },
    ],
  },
  {
    title: 'QA Testing & Event Technical Support',
    description: 'Quality assurance on software systems and on-site technical event assistance.',
    skills: [
      { name: 'Software QA Testing', level: 'Experience', highlight: 'Test execution on software development systems' },
      { name: 'Bug Reporting & Test Cases', level: 'Practical', highlight: 'Step-by-step defect logging, verification of bug fixes' },
      { name: 'Event Production Tech Support', level: 'Experience', highlight: 'Audio/visual routing, live-stream feeds, event LAN' },
      { name: 'On-Site Equipment Troubleshooting', level: 'Practical', highlight: 'Rapid incident resolution during live productions' },
    ],
  },
  {
    title: 'Software Development Foundations',
    description: 'Practical programming and database literacy supporting technical workflows.',
    skills: [
      { name: 'Django & Python Basics', level: 'Foundational', highlight: 'Backend models, view logic, basic REST endpoints' },
      { name: 'Vue 3 & Modern Frontend', level: 'Foundational', highlight: 'Single-page components, reactive state, Tailwind CSS' },
      { name: 'Databases (PostgreSQL / SQL)', level: 'Foundational', highlight: 'Relational tables, basic queries, schema structure' },
      { name: 'Git & Bash Command Line', level: 'Foundational', highlight: 'Branching, commits, remote repos, Linux shell basics' },
    ],
  },
];

export const projectsList: Project[] = [
  {
    id: 'cisco-networking-lab',
    title: 'Cisco Campus LAN & Subnetting Implementation',
    subtitle: 'Networking Fundamentals & Cisco IOS',
    category: 'networking',
    categoryLabel: 'Computer Networking',
    description:
      'Structured local area network implementation with subnetted IPv4 address blocks, basic switch security, and Cisco IOS device configuration.',
    fullOverview:
      'Configured a multi-workstation local area network topology in a Cisco laboratory environment. Implemented logical subnet division using VLSM to allocate distinct subnets for administration and laboratory workstations, assigned default gateways, and configured Cisco IOS switch port security to restrict unauthorized MAC access.',
    highlights: [
      'Calculated and implemented structured IPv4 subnets minimizing address waste',
      'Configured Cisco switch hostnames, passwords, banner MOTD, and management VLAN',
      'Enabled port security with sticky MAC address limits to prevent rogue machine connections',
      'Tested full network reachability using ICMP ping and traceroute diagnostics',
    ],
    techStack: ['Cisco IOS', 'IPv4 Subnetting', 'Switch Port Security', 'Packet Tracer', 'LAN Cabling'],
    metrics: [
      { label: 'Address Efficiency', value: 'VLSM Planned' },
      { label: 'Port Security', value: 'Active Sticky' },
      { label: 'Connectivity', value: '100% Verified' },
    ],
    githubUrl: 'https://github.com/httpcastor',
    status: 'Verified',
  },
  {
    id: 'hardware-upgrade-support',
    title: 'PC Hardware Maintenance & Upgrade Support Lab',
    subtitle: 'Hardware Support Certification',
    category: 'networking',
    categoryLabel: 'Hardware & Upgrade Support',
    description:
      'Physical computer hardware diagnostics, component upgrades (NVMe SSDs, high-capacity RAM), and preventive thermal maintenance for workstations.',
    fullOverview:
      'Performed certified technical support on academic and laboratory workstations. Conducted hardware health inspections, diagnosed faulty power supply rails and RAM modules with multi-meters and diagnostic software, performed storage upgrades to solid-state drives with disk cloning, and completed thermal maintenance.',
    highlights: [
      'Executed diagnostic workflows to isolate failing storage drives and memory errors',
      'Upgraded mechanical hard drives to high-speed NVMe SSDs with zero data loss',
      'Reapplied high-performance thermal paste and optimized chassis airflow dynamics',
      'Maintained documented maintenance logs and pre/post-upgrade benchmark records',
    ],
    techStack: ['Hardware Diagnostics', 'RAM & Storage Upgrades', 'Thermal Management', 'BIOS/UEFI Config', 'Preventive Care'],
    metrics: [
      { label: 'Boot Time Boost', value: 'Up to 4x' },
      { label: 'Thermal Delta', value: '-12°C Under Load' },
      { label: 'System Stability', value: '100% Passed' },
    ],
    githubUrl: 'https://github.com/httpcastor',
    status: 'Verified',
  },
  {
    id: 'event-production-support',
    title: 'Live Event Production Technical Support',
    subtitle: 'Audio/Visual & Local Network Infrastructure',
    category: 'networking',
    categoryLabel: 'Event Technical Support',
    description:
      'On-site technical support for university symposiums and live assemblies: wiring network drops, stage audio/visual equipment routing, and live troubleshooting.',
    fullOverview:
      'Served on the technical support crew for academic events and assemblies. Laid and secured temporary Ethernet network drops for control stations, assisted with audio/visual mixing equipment setups, ensured stable connectivity for live-streaming encoders, and provided immediate on-site problem resolution during running events.',
    highlights: [
      'Installed, crimped (TIA-568B), and tested temporary gigabit Ethernet cable runs for live events',
      'Assisted in setting up signal routing between stage microphones, video switchers, and stream encoders',
      'Monitored local network bandwidth usage to ensure smooth stream broadcast without packet drops',
      'Promptly addressed technical hitches during live presentations to maintain seamless proceedings',
    ],
    techStack: ['Event Tech Support', 'Ethernet Cabling', 'Audio/Visual Routing', 'Stream Feeds', 'On-Site NetOps'],
    metrics: [
      { label: 'Events Supported', value: 'Multiple Campus Events' },
      { label: 'Network Uptime', value: '100% During Events' },
      { label: 'Cable Runs', value: 'Custom Crimped' },
    ],
    githubUrl: 'https://github.com/httpcastor',
    status: 'Completed',
  },
  {
    id: 'qa-software-testing',
    title: 'Software Development Systems QA Testing',
    subtitle: 'Quality Assurance & Defect Verification',
    category: 'qa',
    categoryLabel: 'QA Testing Background',
    description:
      'Active background in QA testing: authoring test plans, executing regression test matrices, validating edge cases, and reporting defects on software systems.',
    fullOverview:
      'Participated as a QA Tester on software development systems. Developed test case matrices covering user inputs, boundary values, and system error responses. Verified bug fixes and ensured that software updates met required functional criteria before final deployment.',
    highlights: [
      'Created structured manual test cases covering functional workflows and negative input scenarios',
      'Conducted regression passes to verify that resolved bug fixes did not introduce new issues',
      'Logged clear, reproducible defect reports with exact steps and screenshots for developers',
      'Validated database state updates following system transactions',
    ],
    techStack: ['Manual QA Testing', 'Test Case Design', 'Bug Tracking', 'Regression Passes', 'Functional Verification'],
    metrics: [
      { label: 'Test Matrices', value: 'Detailed Cases' },
      { label: 'Bug Reporting', value: 'Reproducible Steps' },
    ],
    githubUrl: 'https://github.com/httpcastor',
    status: 'Active',
  },
  {
    id: 'software-dev-foundations',
    title: 'Django & Vue 3 Software Development Basics',
    subtitle: 'Full-Stack Foundations & Git Bash',
    category: 'software',
    categoryLabel: 'Software Development Literacy',
    description:
      'Foundational software development using Django REST Framework, Vue 3 single-page architecture, relational SQL databases, and Git Bash version control.',
    fullOverview:
      'Applied foundational programming skills to build and understand full-stack software systems. Built basic RESTful endpoints with Django and Python, connected relational PostgreSQL/SQL databases, created responsive Vue 3 components with Tailwind CSS, and managed code versions through Git Bash.',
    highlights: [
      'Configured Django models, serializers, and views for basic resource tracking',
      'Created responsive frontend interfaces using Vue 3 Composition API and Tailwind CSS',
      'Utilized Git Bash for local repository version control, branching, and GitHub synchronization',
    ],
    techStack: ['Django', 'Python', 'Vue 3', 'PostgreSQL / SQL', 'Git Bash', 'Tailwind CSS'],
    metrics: [
      { label: 'Architecture', value: 'Client-Server' },
      { label: 'Version Control', value: 'Git Bash' },
    ],
    githubUrl: 'https://github.com/httpcastor',
    status: 'Completed',
  },
];
