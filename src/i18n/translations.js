// ========================================
// TRADUÇÕES - Edite aqui os textos
// ========================================

export const translations = {
  pt: {
    // Navbar
    nav: {
      home: 'Início',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    
    // Hero Section
    hero: {
      badge: 'FULLSTACK DEVELOPER',
      name: 'Braz Tadeu',
      bio: 'Transitando de Infraestrutura para Desenvolvimento Fullstack. Construindo aplicações escaláveis com base em sistemas cloud.',
      viewProjects: 'Ver Projetos',
      resume: 'Currículo',
      expertise: 'EXPERTISE',
    },
    
    // Experience Section
    experience: {
      title: 'Minha Jornada',
      subtitle: 'Evoluindo de Estabilidade em Infraestrutura para Inovação Fullstack.',
      experienceTitle: 'Experiência',
      educationTitle: 'Educação',
      skillsTitle: 'Skills & Tech',
      present: 'ATUAL',
      viewProjects: 'Ver Meus Projetos',
    },
    
    // Projects Section
    projects: {
      title: 'Projetos',
      subtitle: 'Transitando de Infraestrutura para Fullstack. Construindo soluções escaláveis com foco em automação e experiência do usuário.',
      filterAll: 'Todos',
    },
    
    // Contact Section
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Transitando de Infra para Fullstack. Vamos construir algo escalável e bonito juntos.',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto...',
      send: 'Enviar Mensagem',
      connectWith: 'CONECTE-SE COMIGO',
      footer: '© 2024 Developer Portfolio • Transitioning to Fullstack',
    },
  },
  
  en: {
    // Navbar
    nav: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    
    // Hero Section
    hero: {
      badge: 'FULLSTACK DEVELOPER',
      name: 'Braz Tadeu',
      bio: 'Transitioning from Infrastructure to Fullstack Development. Building scalable apps with a foundation in cloud systems.',
      viewProjects: 'View Projects',
      resume: 'Resume',
      expertise: 'EXPERTISE',
    },
    
    // Experience Section
    experience: {
      title: 'My Journey',
      subtitle: 'Evolving from Infrastructure Stability to Fullstack Innovation.',
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      skillsTitle: 'Skills & Tech',
      present: 'PRESENT',
      viewProjects: 'View My Projects',
    },
    
    // Projects Section
    projects: {
      title: 'Projects',
      subtitle: 'Transitioning from Infrastructure to Fullstack. Building scalable solutions with a focus on automation and user experience.',
      filterAll: 'All',
    },
    
    // Contact Section
    contact: {
      title: 'Get in Touch',
      subtitle: 'Transitioning from Infra to Fullstack. Let\'s build something scalable and beautiful together.',
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
      connectWith: 'CONNECT WITH ME',
      footer: '© 2024 Developer Portfolio • Transitioning to Fullstack',
    },
  },
}

// ========================================
// DADOS - Edite aqui suas informações
// ========================================

export const personalData = {
  name: 'Braz Tadeu',
  initials: 'BT',
  profileImage: '/images/profile.jpg',
  
  expertise: ['Terraform', 'AWS', 'React', 'Node.js', 'Docker'],
  
  social: {
    github: 'https://github.com/braztadeu',
    linkedin: 'https://linkedin.com/in/braztadeu',
    email: 'contato@braztadeu.com',
  },
}

export const experienceData = [
  {
    title: { pt: 'Fullstack Developer', en: 'Fullstack Developer' },
    company: 'INNYX Solutions',
    period: { pt: 'Jan 2022 — Atual', en: 'Jan 2022 — Current' },
    isCurrent: true,
    description: {
      pt: [
        'Construindo arquiteturas escaláveis React & Node.js.',
        'Transicionando infraestrutura legada para pipelines CI/CD modernos.',
      ],
      en: [
        'Building scalable React & Node.js architectures.',
        'Transitioned legacy infra to modern CI/CD pipelines.',
      ],
    },
  },
  {
    title: { pt: 'Engenheiro de Infraestrutura', en: 'Infrastructure Engineer' },
    company: 'MARJOM Systems',
    period: { pt: 'Mar 2020 — Dez 2021', en: 'Mar 2020 — Dec 2021' },
    isCurrent: false,
    description: {
      pt: [
        'Gerenciou ambientes cloud complexos e virtualização.',
        'Otimizou performance de banco de dados e segurança de rede.',
      ],
      en: [
        'Managed complex cloud environments and virtualization.',
        'Optimized database performance and network security.',
      ],
    },
  },
]

export const educationData = [
  {
    title: { pt: 'Bacharelado em Ciência da Computação', en: 'B.S. Computer Science' },
    institution: 'Tech University of Excellence',
    period: '2016 — 2020',
    image: '/images/university.jpg',
  },
  {
    title: { pt: 'Certificação Fullstack', en: 'Fullstack Certification' },
    institution: 'Global Code Academy',
    period: '2021',
    image: null,
  },
]

export const skillsData = [
  { name: 'React.js', icon: 'code' },
  { name: 'Node.js', icon: 'code' },
  { name: 'AWS / GCP', icon: 'cloud' },
  { name: 'Docker', icon: 'box' },
  { name: 'MongoDB', icon: 'database' },
  { name: 'CyberSec', icon: 'shield' },
]

export const projectsData = [
  {
    title: 'Fullstack CRM',
    description: {
      pt: 'Sistema de gestão de relacionamento com cliente de nível empresarial com analytics em tempo real.',
      en: 'Enterprise-grade customer relationship management system with real-time analytics.',
    },
    image: '/images/project-crm.jpg',
    tags: ['React', 'PostgreSQL'],
    category: 'React',
    date: 'Dec 2023',
    link: '#',
  },
  {
    title: 'K8s Dashboard',
    description: {
      pt: 'Dashboard de monitoramento e gestão em tempo real para clusters Kubernetes em múltiplas regiões.',
      en: 'Real-time monitoring and management dashboard for Kubernetes clusters across regions.',
    },
    image: '/images/project-k8s.jpg',
    tags: ['Go', 'Grafana'],
    category: 'Docker',
    date: 'Nov 2023',
    link: '#',
  },
  {
    title: 'CI/CD Pipeline',
    description: {
      pt: 'Provisionamento automatizado de infraestrutura e deploy de aplicações com Terraform.',
      en: 'Automated infrastructure provisioning and application deployment with Terraform.',
    },
    image: '/images/project-cicd.jpg',
    tags: ['Terraform', 'AWS'],
    category: 'Node.js',
    date: 'Oct 2023',
    link: '#',
  },
]

export const projectCategories = ['All', 'React', 'Node.js', 'Docker']
