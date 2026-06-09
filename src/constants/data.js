import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiServer,
  FiBarChart2,
  FiSmartphone,
  FiDatabase,
  FiTrendingUp,
} from 'react-icons/fi';

export const personalInfo = {
  name: 'Celina Bulyar',
  titles: ['Web Developer', 'Flutter Developer', 'Aspiring Data Analyst'],
  intro:
    'Building digital solutions that solve real-world problems and create positive community impact.',
  bio: 'I am a software developer and aspiring data analyst from Kenya passionate about building digital solutions that solve real-world problems and create positive community impact.',
  cvUrl: '#',
};

export const skills = [
  { name: 'Flutter', icon: FiSmartphone, color: '#02569B' },
  { name: 'HTML', icon: FiCode, color: '#E34F26' },
  { name: 'CSS', icon: FiCode, color: '#1572B6' },
  { name: 'JavaScript', icon: FiCode, color: '#F7DF1E' },
  { name: 'React', icon: FiCode, color: '#61DAFB' },
  { name: 'Git & GitHub', icon: FiGithub, color: '#F05032' },
  { name: 'Data Analysis', icon: FiBarChart2, color: '#3B82F6' },
  { name: 'Microsoft Excel', icon: FiDatabase, color: '#217346' },
  { name: 'Data Visualization', icon: FiTrendingUp, color: '#FF6B35' },
  { name: 'Power BI (Learning)', icon: FiServer, color: '#F2C811' },
];

export const projects = [
  {
    title: 'Pamoja Thrift',
    featured: true,
    image: null,
    description:
      'A digital savings and financial management platform designed to help individuals and groups manage savings, track contributions, and promote financial inclusion.',
    tech: ['Flutter', 'Firebase', 'Web Technologies'],
    features: [
      'Savings management',
      'Contribution tracking',
      'User-friendly dashboard',
      'Financial inclusion focus',
    ],
    github: '#',
    demo: 'https://pamojathrift.site',
  },
  {
    title: 'Healthy Start Samburu',
    image: null,
    description:
      'A community-focused website promoting health awareness, education, and access to important information and resources.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Digital Notebook',
    image: null,
    description:
      'A productivity application that helps users organize notes, ideas, and important information.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Expense Tracker',
    image: null,
    description:
      'A personal finance application that helps users monitor expenses and manage spending habits.',
    tech: ['Flutter', 'Dart', 'SQLite'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Mawemaji Application',
    image: null,
    description:
      'A digital solution developed to address community and user needs through accessible technology.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: '#',
    demo: '#',
  },
];

export const analyticsProjects = [
  {
    title: 'Sales Performance Dashboard',
    description:
      'Interactive dashboard analyzing sales trends, regional performance, and revenue forecasts.',
    type: 'In Progress',
    placeholder: true,
  },
  {
    title: 'Customer Segmentation Analysis',
    description:
      'Data-driven customer clustering using purchase behavior and demographic data.',
    type: 'Coming Soon',
    placeholder: true,
  },
  {
    title: 'COVID-19 Impact Analytics',
    description:
      'Visualization of pandemic data showing infection rates, recovery trends, and vaccination progress.',
    type: 'Coming Soon',
    placeholder: true,
  },
];

export const contactLinks = [
  { label: 'GitHub', icon: FiGithub, url: 'https://github.com/celinabulyar' },
  {
    label: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://linkedin.com/in/celinabulyar',
  },
  { label: 'Email', icon: FiMail, url: 'mailto:celina@example.com' },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Data Analytics', href: '#analytics' },
  { label: 'Contact', href: '#contact' },
];
