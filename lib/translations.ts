export const translations = {
  en: {
    hero: {
      name: 'Youssef Bezza',
      role: 'Full-Stack Engineer | Java | Spring Boot | Microservices',
      bio: 'Passionate Software Engineer, AI & DevOps specialist with experience in developing scalable and performant applications in Java, Spring Boot, and React/Node.js. Specialist in microservices architectures, REST/GraphQL APIs, databases, and DevOps practices (CI/CD, Docker, Kubernetes, automation, and continuous integration).',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    about: {
      title: 'About',
      content: `Passionate Software Engineer, AI & DevOps specialist with experience in developing scalable and performant applications in Java, Spring Boot, and React/Node.js.

Specialist in microservices architectures, REST/GraphQL APIs, databases, and DevOps practices (CI/CD, Docker, Kubernetes, automation, and continuous integration).

I build robust, scalable solutions that combine cutting-edge technology with best practices in software engineering.`,
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          title: 'AI Specialist Intern',
          company: 'Rubicon France',
          period: 'June 2025 - September 2025',
          description: `• Scraping API (FastAPI + Caddy) — Ministry of Agriculture (Agritech News Agent)
• Outline deployment (documentation), AI services & orchestrator design — La RAM
• MCP server connected to Odoo HR + Claude (HR assistant)
• WhatsApp Sentiment Agent — POS/NEU/NEG classification via Cohere, auto responses (BMCE Bourse)
• AI Innovation Watch — Telegram bot + Serper + Gemini (competitive intelligence & reporting)
• Ghostwriter Agent — email/posts generation by style cloning (Mixtral/Fireworks)
• Telegram Agritech Bot — automatic news distribution via scraping API`,
        },
        {
          title: 'Full-Stack Development Intern (AI-oriented)',
          company: 'Garage L\'Arc',
          location: 'Casablanca, Morocco',
          period: 'March 2024 - June 2024',
          description: `Web application for automotive garage management
• Stack: Node.js, Express, EJS, MySQL, Git, Machine Learning
• Objective: Automate inventory, orders, and services to boost productivity
• Tech: Fluid UI (EJS), performant REST API (Node/Express/MySQL)
• Features: Intelligent management, real-time tracking, auto reports, dynamic alerts
• AI (POC): scikit-learn for anomaly detection and predictive recommendations`,
        },
        {
          title: 'Full-Stack Development Intern (AI-oriented)',
          company: 'CFCA Maroc',
          location: 'Berrechid, Morocco',
          period: 'July 2023 - September 2023',
          description: `IT department ticket management system
• Stack: Laravel, SQL, Git, NLP
• Objective: Centralize and prioritize IT requests
• Tech: Fluid frontend (HTML/CSS), Laravel backend (routes, validations)
• AI (prototype): NLP for automatic classification and priority scoring`,
        },
        {
          title: 'Full-Stack Development Intern',
          company: 'Noa Stark Entreprises',
          location: 'Casablanca, Morocco',
          period: 'July 2022 - August 2022',
          description: `IT management and support platform
• Skills: Node.js, Excel, VBA, IT Support, Ticket Management
• Web application: Improvement of a student data management solution (complete CRUD)`,
        },
      ],
    },
    projects: {
      title: 'Significant Projects',
      items: [
        {
          title: 'Bidinsouk - Online Auction SaaS Platform',
          description: `A comprehensive SaaS platform connecting sellers and buyers with real-time auction management, integrated messaging, notifications, and analytical dashboards.`,
          details: `Project Overview:
Bidinsouk is a complete e-commerce solution designed to facilitate online auctions between sellers and buyers. The platform provides a seamless experience for managing auctions, communications, and business analytics.

Key Features:
• Real-time Auction System: Live bidding with Socket.IO for instant updates
• Integrated Messaging: Direct communication between buyers and sellers
• Smart Notifications: Real-time alerts for bids, messages, and auction events
• Analytical Dashboards: Comprehensive business insights and statistics
• User Authentication: Secure JWT-based authentication system
• Email System: Automated notifications via NodeMailer
• Responsive Design: Mobile-first approach with TailwindCSS

Technical Implementation:
• Frontend: Next.js 15 with TypeScript for type safety
• Backend: Node.js with Express/Next.js API routes
• Database: PostgreSQL with Prisma ORM for type-safe database access
• Real-time: Socket.IO for WebSocket connections
• Styling: TailwindCSS for modern, responsive UI
• Deployment: Docker containerization for easy deployment
• Authentication: JWT tokens for secure user sessions

Challenges Solved:
• Implemented real-time bidding system with conflict resolution
• Optimized database queries for high-traffic auction events
• Created scalable notification system
• Built responsive UI that works across all devices`,
          tech: ['Next.js 15', 'Prisma ORM', 'PostgreSQL', 'TypeScript', 'TailwindCSS', 'JWT', 'Socket.IO', 'NodeMailer', 'Docker'],
          role: 'Full-Stack Developer',
          duration: '6 months',
        },
        {
          title: 'Devaktus - SaaS Pricing Plans Platform',
          description: `Full-Stack SaaS application for creating and managing interactive pricing plans with drag-and-drop widgets, designed for businesses to showcase their service tiers.`,
          details: `Project Overview:
Devaktus is a sophisticated SaaS platform that enables businesses to create, customize, and manage interactive pricing plans with an intuitive drag-and-drop interface. The platform simplifies the process of presenting service tiers to potential customers.

Key Features:
• Drag-and-Drop Builder: Intuitive widget-based pricing plan creator
• Microservices Architecture: Scalable and maintainable system design
• Payment Integration: Stripe integration for subscription management
• State Management: NgRx for complex application state
• Real-time Updates: Live preview of pricing plan changes
• Multi-tenant Support: Support for multiple businesses
• Customizable Templates: Pre-built templates for quick setup

Technical Implementation:
• Frontend: Angular 17 with TypeScript and RxJS
• Backend: NestJS microservices architecture
• Database: MongoDB for flexible document storage
• State Management: NgRx for reactive state management
• Payment Processing: Stripe API integration
• Authentication: JWT-based secure authentication
• Deployment: Docker containers for microservices

Challenges Solved:
• Designed scalable microservices architecture
• Implemented complex drag-and-drop functionality
• Integrated Stripe payment processing with webhooks
• Created responsive pricing plan builder
• Optimized state management with NgRx
• Built reusable component library`,
          tech: ['Angular 17', 'NestJS', 'TypeScript', 'MongoDB', 'NgRx', 'Stripe', 'Docker'],
          role: 'Full-Stack Developer',
          duration: '4 months',
        },
        {
          title: 'Jumeau Numérique Organisationnel',
          description: `Simulation of a startup (~20 employees, 3 teams, 4 projects) with real-time dashboard, "what-if" analysis engine, HR chatbot, and automated alerts.`,
          details: `Project Overview:
Jumeau Numérique Organisationnel (Organizational Digital Twin) is an advanced simulation platform that creates a digital representation of a startup organization. The system simulates approximately 20 employees across 3 teams working on 4 projects, providing real-time insights and predictive analytics.

Key Features:
• Real-time Dashboard: Live monitoring of organizational metrics and performance
• What-If Analysis Engine: Predictive modeling to simulate different scenarios and outcomes
• HR Chatbot: Intelligent chatbot for human resources management and employee interactions
• Automated Alerts: Real-time notifications for critical events and performance thresholds
• Team Management: Track and manage 3 distinct teams within the organization
• Project Tracking: Monitor 4 concurrent projects with detailed analytics
• Employee Simulation: Simulate ~20 employees with realistic behaviors and interactions

Technical Implementation:
• Backend: Spring Boot for robust enterprise-grade backend services
• Frontend: Angular for dynamic and responsive user interface
• Data Science: Python with scikit-learn for machine learning and predictive analytics
• API Services: FastAPI for high-performance API endpoints
• Data Processing: pandas and numpy for data manipulation and analysis
• Automation: n8n for workflow automation and alert systems

Challenges Solved:
• Implemented complex organizational simulation algorithms
• Built real-time data processing pipeline for dashboard updates
• Created predictive "what-if" analysis engine using machine learning
• Developed intelligent HR chatbot with natural language processing
• Designed automated alert system for proactive management
• Optimized performance for real-time multi-user scenarios`,
          tech: ['Spring Boot', 'Angular', 'Python', 'FastAPI', 'scikit-learn', 'pandas', 'numpy', 'n8n'],
          role: 'Full-Stack Developer',
          duration: 'Ongoing',
        },
      ],
    },
    skills: {
      title: 'Skills',
      backend: {
        title: 'Back-End',
        items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'NestJS', 'Laravel', 'Microservices', 'REST APIs', 'GraphQL'],
      },
      frontend: {
        title: 'Front-End',
        items: ['React', 'Next.js', 'Angular 17', 'TypeScript', 'TailwindCSS', 'EJS', 'HTML/CSS'],
      },
      databases: {
        title: 'Databases',
        items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma ORM'],
      },
      ai: {
        title: 'AI/LLM',
        items: ['NLP', 'Machine Learning', 'scikit-learn', 'Cohere', 'Claude', 'Gemini', 'Mixtral', 'FastAPI'],
      },
      devops: {
        title: 'DevOps',
        items: ['Docker', 'Kubernetes', 'CI/CD', 'Oracle Cloud Infrastructure', 'Git', 'Automation'],
      },
      languages: {
        title: 'Languages',
        items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'PHP'],
      },
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'Oracle Autonomous Database Cloud 2025 Certified Professional',
          issuer: 'Oracle',
          period: 'October 2025',
          credentialId: 'B5927C4DC21AEA529C0CA976CAC4C6BB4908C0B2CCE37A71C0475BF83D79A68E',
        },
        {
          name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
          issuer: 'Oracle',
          period: 'October 2025',
          credentialId: '30F847B35DE81EC9AD20A0020F8201520DC1A2BA05FD13AA7008A7667EB93BFB',
        },
        {
          name: 'Gen AI Agents: Transform Your Organization',
          issuer: 'Google Cloud Security',
          period: 'August 2025',
          credentialId: 'S21QFMHGU8F0',
        },
        {
          name: 'Prompt Engineering for ChatGPT',
          issuer: 'Vanderbilt University',
          period: 'August 2025',
          credentialId: 'GDBACH3FX9KL',
        },
        {
          name: 'Foundations of Cybersecurity',
          issuer: 'Google',
          period: 'February 2025',
          credentialId: 'Z4AWZV560IK5',
        },
        {
          name: 'Foundations of Digital Marketing and E-commerce',
          issuer: 'Google',
          period: 'February 2025',
          credentialId: '2EC0JUW4KC6Y',
        },
        {
          name: 'Virtual Networks in Azure',
          issuer: 'Whizlabs',
          period: 'February 2025 - March 2025',
          credentialId: 'O94XARVPN991',
          expires: true,
        },
        {
          name: 'Fundamentals of Red Hat Enterprise Linux',
          issuer: 'Red Hat',
          period: 'December 2024',
          credentialId: '89F03X5LSOJ4',
        },
        {
          name: '.Net Full Stack Foundation',
          issuer: 'Board Infinity',
          period: 'October 2024',
          credentialId: 'FUWJ1987H1OH',
        },
        {
          name: 'Introduction to Java',
          issuer: 'LearnQuest',
          period: 'February 2024',
          credentialId: 'NNM9T7CYKJ5Z',
        },
        {
          name: 'Introduction to Next.js',
          issuer: 'Coursera',
          period: 'February 2024',
          credentialId: 'ES4FTD3PGVQG',
        },
        {
          name: 'Interactivity with JavaScript',
          issuer: 'University of Michigan',
          period: 'September 2023',
          credentialId: 'E7UYUHLPV7UP',
        },
        {
          name: 'Introduction to MongoDB',
          issuer: 'MongoDB',
          period: 'August 2023',
          credentialId: 'AXJBJPY1YDGP',
        },
        {
          name: 'Développe un site Internet gratuit avec WordPress',
          issuer: 'Coursera',
          period: 'June 2023',
          credentialId: '7GGT5N11YMFY',
        },
        {
          name: 'Excel Skills for Business: Essentials',
          issuer: 'Macquarie University',
          period: 'March 2023',
          credentialId: '9WLRUKZBD8T9',
        },
        {
          name: 'HTML, CSS, and Javascript for Web Developers',
          issuer: 'The Johns Hopkins University',
          period: 'February 2023',
          credentialId: 'WYN87RDCXU3R',
        },
        {
          name: 'Advanced React',
          issuer: 'Meta',
          period: 'January 2023',
          credentialId: 'D9OC7E7TUJ4F',
        },
        {
          name: 'The Arduino Platform and C Programming',
          issuer: 'University of California, Irvine',
          period: 'April 2022',
          credentialId: 'TAZ99LHYTQLW',
        },
        {
          name: 'Introduction to Scrum Master Profession',
          issuer: 'Skillup.co',
          period: 'January 2022',
          credentialId: 'F318MJDUZWQB',
        },
      ],
    },
    contact: {
      title: 'Contact',
      name: 'Youssef Bezza',
      email: 'youssefbz124@gmail.com',
      phone: '+212 653 639747',
      location: 'Casablanca, Morocco',
      age: '24 years old',
      github: 'github.com/BezzaYoussef',
      linkedin: 'https://www.linkedin.com/in/youssef-bezza/',
    },
  },
  fr: {
    hero: {
      name: 'Youssef Bezza',
      role: 'Ingénieur Full-Stack | Java | Spring Boot | Microservices',
      bio: 'Ingénieur logiciel, IA & DevOps passionné, avec une expérience dans le développement d\'applications scalables et performantes en Java, Spring Boot et React/Node.js. Spécialiste des architectures microservices, des API REST/GraphQL, des bases de données, ainsi que des pratiques DevOps (CI/CD, Docker, Kubernetes, automatisation et intégration continue).',
    },
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    about: {
      title: 'À propos',
      content: `Ingénieur logiciel, IA & DevOps passionné, avec une expérience dans le développement d'applications scalables et performantes en Java, Spring Boot et React/Node.js.

Spécialiste des architectures microservices, des API REST/GraphQL, des bases de données, ainsi que des pratiques DevOps (CI/CD, Docker, Kubernetes, automatisation et intégration continue).

Je construis des solutions robustes et scalables qui combinent des technologies de pointe avec les meilleures pratiques en ingénierie logicielle.`,
    },
    experience: {
      title: 'Expériences Professionnelles',
      items: [
        {
          title: 'Stagiaire Spécialiste IA',
          company: 'Rubicon France',
          period: 'Juin 2025 - Septembre 2025',
          description: `• API de scraping (FastAPI + Caddy) — Ministère de l'Agriculture (Agritech News Agent)
• Déploiement d'Outline (documentation), conception de services IA & orchestrateur — La RAM
• Serveur MCP connecté à Odoo HR + Claude (assistant RH)
• WhatsApp Sentiment Agent — classification POS/NEU/NEG via Cohere, réponses auto (BMCE Bourse)
• AI Innovation Watch — bot Telegram + Serper + Gemini (veille concurrentielle & reporting)
• Ghostwriter Agent — génération d'emails/posts par clonage de style (Mixtral/Fireworks)
• Telegram Agritech Bot — diffusion auto d'actualités via API scraping`,
        },
        {
          title: 'Stagiaire Développement Full-Stack (orienté IA)',
          company: 'Garage L\'Arc',
          location: 'Casablanca, Maroc',
          period: 'Mars 2024 - Juin 2024',
          description: `Application web de gestion pour un garage automobile
• Stack : Node.js, Express, EJS, MySQL, Git, Machine Learning
• Objectif : automatiser stocks, commandes et services pour booster la productivité
• Tech : UI fluide (EJS), API REST performante (Node/Express/MySQL)
• Fonctionnalités : gestion intelligente, suivi en temps réel, rapports auto, alertes dynamiques
• IA (POC) : scikit-learn pour détection d'anomalies et recommandations prédictives`,
        },
        {
          title: 'Stagiaire Développement Full-Stack (orienté IA)',
          company: 'CFCA Maroc',
          location: 'Berrechid, Maroc',
          period: 'Juillet 2023 - Septembre 2023',
          description: `Système de gestion de tickets pour le département IT
• Stack : Laravel, SQL, Git, NLP
• Objectif : centraliser et prioriser les demandes IT
• Tech : front fluide (HTML/CSS), back Laravel (routes, validations)
• IA (proto) : NLP pour classification auto et scoring de priorité`,
        },
        {
          title: 'Stagiaire Développement Full-Stack',
          company: 'Noa Stark Entreprises',
          location: 'Casablanca, Maroc',
          period: 'Juillet 2022 - Août 2022',
          description: `Plateforme de gestion et support IT
• Compétences : Node.js, Excel, VBA, Support IT, Gestion de tickets
• Application web : amélioration d'une solution de gestion des données étudiantes (CRUD complet)`,
        },
      ],
    },
    projects: {
      title: 'Projets Significatifs',
      items: [
        {
          title: 'Bidinsouk - Plateforme SaaS d\'enchères en ligne',
          description: `Solution complète de mise en relation entre vendeurs et acheteurs avec gestion en temps réel des enchères, messagerie intégrée, notifications, et tableaux de bord analytiques.`,
          details: `Vue d'ensemble du projet :
Bidinsouk est une solution e-commerce complète conçue pour faciliter les enchères en ligne entre vendeurs et acheteurs. La plateforme offre une expérience fluide pour la gestion des enchères, les communications et les analyses commerciales.

Fonctionnalités clés :
• Système d'enchères en temps réel : Enchères en direct avec Socket.IO pour des mises à jour instantanées
• Messagerie intégrée : Communication directe entre acheteurs et vendeurs
• Notifications intelligentes : Alertes en temps réel pour les offres, messages et événements d'enchères
• Tableaux de bord analytiques : Analyses commerciales complètes et statistiques
• Authentification utilisateur : Système d'authentification sécurisé basé sur JWT
• Système d'email : Notifications automatisées via NodeMailer
• Design responsive : Approche mobile-first avec TailwindCSS

Implémentation technique :
• Frontend : Next.js 15 avec TypeScript pour la sécurité des types
• Backend : Node.js avec routes API Express/Next.js
• Base de données : PostgreSQL avec Prisma ORM pour un accès type-safe
• Temps réel : Socket.IO pour les connexions WebSocket
• Styling : TailwindCSS pour une UI moderne et responsive
• Déploiement : Containerisation Docker pour un déploiement facile
• Authentification : Tokens JWT pour des sessions utilisateur sécurisées

Défis résolus :
• Implémentation d'un système d'enchères en temps réel avec résolution de conflits
• Optimisation des requêtes de base de données pour les événements d'enchères à fort trafic
• Création d'un système de notifications scalable
• Construction d'une UI responsive fonctionnant sur tous les appareils`,
          tech: ['Next.js 15', 'Prisma ORM', 'PostgreSQL', 'TypeScript', 'TailwindCSS', 'JWT', 'Socket.IO', 'NodeMailer', 'Docker'],
          role: 'Développeur Full-Stack',
          duration: '6 mois',
        },
        {
          title: 'Devaktus - Plateforme SaaS de plans tarifaires',
          description: `Application Full-Stack SaaS pour la création et la gestion de plans tarifaires interactifs avec widgets drag-and-drop, conçue pour permettre aux entreprises de présenter leurs niveaux de service.`,
          details: `Vue d'ensemble du projet :
Devaktus est une plateforme SaaS sophistiquée qui permet aux entreprises de créer, personnaliser et gérer des plans tarifaires interactifs avec une interface drag-and-drop intuitive. La plateforme simplifie le processus de présentation des niveaux de service aux clients potentiels.

Fonctionnalités clés :
• Constructeur Drag-and-Drop : Créateur de plans tarifaires basé sur des widgets intuitifs
• Architecture microservices : Conception de système scalable et maintenable
• Intégration de paiement : Intégration Stripe pour la gestion des abonnements
• Gestion d'état : NgRx pour l'état d'application complexe
• Mises à jour en temps réel : Aperçu en direct des modifications de plans tarifaires
• Support multi-tenant : Support pour plusieurs entreprises
• Modèles personnalisables : Modèles pré-construits pour une configuration rapide

Implémentation technique :
• Frontend : Angular 17 avec TypeScript et RxJS
• Backend : Architecture microservices NestJS
• Base de données : MongoDB pour le stockage flexible de documents
• Gestion d'état : NgRx pour la gestion d'état réactive
• Traitement des paiements : Intégration API Stripe
• Authentification : Authentification sécurisée basée sur JWT
• Déploiement : Containers Docker pour les microservices

Défis résolus :
• Conception d'une architecture microservices scalable
• Implémentation de fonctionnalités drag-and-drop complexes
• Intégration du traitement des paiements Stripe avec webhooks
• Création d'un constructeur de plans tarifaires responsive
• Optimisation de la gestion d'état avec NgRx
• Construction d'une bibliothèque de composants réutilisables`,
          tech: ['Angular 17', 'NestJS', 'TypeScript', 'MongoDB', 'NgRx', 'Stripe', 'Docker'],
          role: 'Développeur Full-Stack',
          duration: '4 mois',
        },
        {
          title: 'Jumeau Numérique Organisationnel',
          description: `Simulation d'une startup (~20 employés, 3 équipes, 4 projets) avec tableau de bord en temps réel, moteur d'analyse "what-if", chatbot RH et alertes automatisées.`,
          details: `Vue d'ensemble du projet :
Jumeau Numérique Organisationnel est une plateforme de simulation avancée qui crée une représentation numérique d'une organisation de startup. Le système simule environ 20 employés répartis sur 3 équipes travaillant sur 4 projets, fournissant des insights en temps réel et des analyses prédictives.

Fonctionnalités clés :
• Tableau de bord en temps réel : Surveillance en direct des métriques organisationnelles et de la performance
• Moteur d'analyse What-If : Modélisation prédictive pour simuler différents scénarios et résultats
• Chatbot RH : Chatbot intelligent pour la gestion des ressources humaines et les interactions avec les employés
• Alertes automatisées : Notifications en temps réel pour les événements critiques et les seuils de performance
• Gestion d'équipes : Suivi et gestion de 3 équipes distinctes au sein de l'organisation
• Suivi de projets : Surveillance de 4 projets simultanés avec des analyses détaillées
• Simulation d'employés : Simulation d'environ 20 employés avec des comportements et interactions réalistes

Implémentation technique :
• Backend : Spring Boot pour des services backend robustes de niveau entreprise
• Frontend : Angular pour une interface utilisateur dynamique et responsive
• Science des données : Python avec scikit-learn pour l'apprentissage automatique et les analyses prédictives
• Services API : FastAPI pour des points de terminaison API haute performance
• Traitement des données : pandas et numpy pour la manipulation et l'analyse des données
• Automatisation : n8n pour l'automatisation des workflows et les systèmes d'alertes

Défis résolus :
• Implémentation d'algorithmes de simulation organisationnelle complexes
• Construction d'un pipeline de traitement de données en temps réel pour les mises à jour du tableau de bord
• Création d'un moteur d'analyse prédictive "what-if" utilisant l'apprentissage automatique
• Développement d'un chatbot RH intelligent avec traitement du langage naturel
• Conception d'un système d'alertes automatisé pour une gestion proactive
• Optimisation des performances pour des scénarios multi-utilisateurs en temps réel`,
          tech: ['Spring Boot', 'Angular', 'Python', 'FastAPI', 'scikit-learn', 'pandas', 'numpy', 'n8n'],
          role: 'Développeur Full-Stack',
          duration: 'En cours',
        },
      ],
    },
    skills: {
      title: 'Compétences',
      backend: {
        title: 'Back-End',
        items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'NestJS', 'Laravel', 'Microservices', 'API REST', 'GraphQL'],
      },
      frontend: {
        title: 'Front-End',
        items: ['React', 'Next.js', 'Angular 17', 'TypeScript', 'TailwindCSS', 'EJS', 'HTML/CSS'],
      },
      databases: {
        title: 'Bases de données',
        items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma ORM'],
      },
      ai: {
        title: 'IA/LLM',
        items: ['NLP', 'Machine Learning', 'scikit-learn', 'Cohere', 'Claude', 'Gemini', 'Mixtral', 'FastAPI'],
      },
      devops: {
        title: 'DevOps',
        items: ['Docker', 'Kubernetes', 'CI/CD', 'Oracle Cloud Infrastructure', 'Git', 'Automatisation'],
      },
      languages: {
        title: 'Langages',
        items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'PHP'],
      },
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'Oracle Autonomous Database Cloud 2025 Certified Professional',
          issuer: 'Oracle',
          period: 'Octobre 2025',
          credentialId: 'B5927C4DC21AEA529C0CA976CAC4C6BB4908C0B2CCE37A71C0475BF83D79A68E',
        },
        {
          name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
          issuer: 'Oracle',
          period: 'Octobre 2025',
          credentialId: '30F847B35DE81EC9AD20A0020F8201520DC1A2BA05FD13AA7008A7667EB93BFB',
        },
        {
          name: 'Gen AI Agents: Transform Your Organization',
          issuer: 'Google Cloud Security',
          period: 'Août 2025',
          credentialId: 'S21QFMHGU8F0',
        },
        {
          name: 'Prompt Engineering for ChatGPT',
          issuer: 'Vanderbilt University',
          period: 'Août 2025',
          credentialId: 'GDBACH3FX9KL',
        },
        {
          name: 'Foundations of Cybersecurity',
          issuer: 'Google',
          period: 'Février 2025',
          credentialId: 'Z4AWZV560IK5',
        },
        {
          name: 'Foundations of Digital Marketing and E-commerce',
          issuer: 'Google',
          period: 'Février 2025',
          credentialId: '2EC0JUW4KC6Y',
        },
        {
          name: 'Virtual Networks in Azure',
          issuer: 'Whizlabs',
          period: 'Février 2025 - Mars 2025',
          credentialId: 'O94XARVPN991',
          expires: true,
        },
        {
          name: 'Fundamentals of Red Hat Enterprise Linux',
          issuer: 'Red Hat',
          period: 'Décembre 2024',
          credentialId: '89F03X5LSOJ4',
        },
        {
          name: '.Net Full Stack Foundation',
          issuer: 'Board Infinity',
          period: 'Octobre 2024',
          credentialId: 'FUWJ1987H1OH',
        },
        {
          name: 'Introduction to Java',
          issuer: 'LearnQuest',
          period: 'Février 2024',
          credentialId: 'NNM9T7CYKJ5Z',
        },
        {
          name: 'Introduction to Next.js',
          issuer: 'Coursera',
          period: 'Février 2024',
          credentialId: 'ES4FTD3PGVQG',
        },
        {
          name: 'Interactivity with JavaScript',
          issuer: 'University of Michigan',
          period: 'Septembre 2023',
          credentialId: 'E7UYUHLPV7UP',
        },
        {
          name: 'Introduction to MongoDB',
          issuer: 'MongoDB',
          period: 'Août 2023',
          credentialId: 'AXJBJPY1YDGP',
        },
        {
          name: 'Développe un site Internet gratuit avec WordPress',
          issuer: 'Coursera',
          period: 'Juin 2023',
          credentialId: '7GGT5N11YMFY',
        },
        {
          name: 'Excel Skills for Business: Essentials',
          issuer: 'Macquarie University',
          period: 'Mars 2023',
          credentialId: '9WLRUKZBD8T9',
        },
        {
          name: 'HTML, CSS, and Javascript for Web Developers',
          issuer: 'The Johns Hopkins University',
          period: 'Février 2023',
          credentialId: 'WYN87RDCXU3R',
        },
        {
          name: 'Advanced React',
          issuer: 'Meta',
          period: 'Janvier 2023',
          credentialId: 'D9OC7E7TUJ4F',
        },
        {
          name: 'The Arduino Platform and C Programming',
          issuer: 'University of California, Irvine',
          period: 'Avril 2022',
          credentialId: 'TAZ99LHYTQLW',
        },
        {
          name: 'Introduction to Scrum Master Profession',
          issuer: 'Skillup.co',
          period: 'Janvier 2022',
          credentialId: 'F318MJDUZWQB',
        },
      ],
    },
    contact: {
      title: 'Contact',
      name: 'Youssef Bezza',
      email: 'youssefbz124@gmail.com',
      phone: '+212 653 639747',
      location: 'Casablanca, Maroc',
      age: '24 ans',
      github: 'github.com/BezzaYoussef',
      linkedin: 'https://www.linkedin.com/in/youssef-bezza/',
    },
  },
}
