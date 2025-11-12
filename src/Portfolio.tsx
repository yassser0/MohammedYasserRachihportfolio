import { useState, useEffect } from 'react';
import { Github, Mail, Phone, MapPin, Code, Database, Brain, Box, Link2, Award, BookOpen, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      category: "Développement & Programmation",
      icon: <Code className="w-6 h-6" />,
      items: ["Java (Spring Boot, Java EE)", "Python (scikit-learn, PyTorch)", "HTML/CSS/JavaScript", "Ethers.js, Streamlit"]
    },
    {
      category: "Data Science & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      items: ["Machine Learning & Deep Learning", "Clustering (K-Means, PCA)", "GANs avec PyTorch", "Analyse de métriques (FID, loss)"]
    },
    {
      category: "Architecture Logicielle",
      icon: <Box className="w-6 h-6" />,
      items: ["Microservices (API Gateway, Eureka)", "Agile / DDD", "CI/CD (Jenkins, GitHub Actions)"]
    },
    {
      category: "Blockchain & Web3",
      icon: <Link2 className="w-6 h-6" />,
      items: ["Smart Contracts (Solidity)", "MetaMask & Ethers.js"]
    },
    {
      category: "Bases de données & Cloud",
      icon: <Database className="w-6 h-6" />,
      items: ["MySQL", "MongoDB"]
    }
  ];

  const projects = [
    {
      title: "Système de bibliothèque en microservices",
      description: "Architecture microservices avec Spring Boot, Spring Cloud Gateway et Eureka Server. Interface avec HTML/CSS/JavaScript et Thymeleaf. Suit les principes DDD.",
      tags: ["Spring Boot", "Microservices", "DDD", "MySQL"],
      github: "https://github.com/yassser0/LibraryMicro"
    },
    {
      title: "CI/CD avec Jenkins, Docker & Kubernetes",
      description: "Pipeline DevOps complet pour déploiement continu d'une application React. Intégration continue avec Jenkins, conteneurisation Docker, orchestration Kubernetes.",
      tags: ["Jenkins", "Docker", "Kubernetes", "React"],
      github: "https://github.com/yassser0/DevOps-Todo-App"
    },
    {
      title: "Application de diplômes sur blockchain",
      description: "DApp pour l'enregistrement et vérification de diplômes via Ethereum. Smart contract Solidity, interface React.js avec MetaMask.",
      tags: ["Blockchain", "Solidity", "React", "Web3"],
      github: "https://github.com/yassser0/diploma-contract"
    },
    {
      title: "Certificats de propriété via Blockchain",
      description: "Solution web pour consultation et vérification d'authenticité de certificats de propriété. Interface React, contrats intelligents Solidity.",
      tags: ["Blockchain", "Solidity", "React"],
      github: "https://github.com/yassser0/CertificatProprieteBlockchain"
    },
    {
      title: "Prédiction du rendement agricole",
      description: "Modèle de régression prédictive avec XGBoost pour estimer le rendement agricole. Nettoyage de données avec Pandas, évaluation via RMSE et R².",
      tags: ["Machine Learning", "Python", "XGBoost", "Pandas"],
      github: "https://github.com/yassser0/ProjetAgriML"
    },
    {
      title: "Benchmark d'optimiseurs pour GANs",
      description: "Comparaison des performances d'optimiseurs (Adam, RMSprop, SGD) pour l'entraînement de GANs sur CIFAR-10. Évaluation avec scores FID.",
      tags: ["Deep Learning", "PyTorch", "GANs"],
      github: "https://github.com/yassser0/GAN_Optimizer_Benchmark"
    },
    {
      title: "Clustering d'émissions Netflix",
      description: "Regroupement automatique avec K-Means. Prétraitement, PCA, visualisation des clusters. Interface interactive avec Streamlit.",
      tags: ["Machine Learning", "K-Means", "Streamlit", "PCA"],
      github: "https://github.com/yassser0/netflix-clustering"
    },
    {
      title: "ChatRoom – Messagerie temps réel",
      description: "Application de chat public avec WebSocket (STOMP). Pseudo, indicateur de frappe, utilisateurs en ligne. Architecture MVC avec MongoDB.",
      tags: ["WebSocket", "MongoDB", "Thymeleaf"],
      github: "https://github.com/yassser0/chatroom"
    },
    {
      title: "Réseau de neurones en NumPy",
      description: "Implémentation from scratch d'un réseau fully-connected pour la fonction XOR. Rétropropagation, couches denses, fonction MSE personnalisée.",
      tags: ["Deep Learning", "NumPy", "Python"],
      github: "https://github.com/yassser0/neuralNetMLTP"
    },
    {
      title: "Spotify Audio Feature Analyzer",
      description: "Analyse des caractéristiques audio de Spotify pour découvrir des patterns musicaux. Visualisation de données et exploration des features audio.",
      tags: ["Python", "Data Analysis", "Spotify API", "Visualization"],
      github: "https://github.com/yassser0/SpotifyAudioFeatureAnalyzer"
    },
    {
      title: "Gestion de résidences étudiantes",
      description: "Application web pour gérer chambres, étudiants, paiements et demandes de maintenance dans une résidence universitaire.",
      tags: ["Web Development", "CRUD", "Database"],
      github: "https://github.com/yassser0/SiteWebPourGestionDesResidance"
    }
  ];

  const education = [
    { year: "2025", degree: "Master Data Science & Big Data", school: "Faculté des Sciences Ben M'Sick", spec: "DSBD" },
    { year: "2024", degree: "Licence Professionnelle", school: "Faculté des Sciences Ben M'Sick", spec: "SMAI" },
    { year: "2023", degree: "DEUG", school: "Faculté des Sciences Ben M'Sick", spec: "SMAI" },
    { year: "2021", degree: "Baccalauréat", school: "École oued dahab", spec: "Physique" }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            YR
          </h1>
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-slate-900 md:bg-transparent p-4 md:p-0 gap-6`}>
            {['about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400' : ''}`}
              >
                {section === 'about' ? 'À propos' : section === 'skills' ? 'Compétences' : section === 'projects' ? 'Projets' : section === 'education' ? 'Formation' : 'Contact'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold">
              YR
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Mohammed Yasser Rachih
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Étudiant en Master Big Data & Data Science
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Étudiant en Master Big Data & Data Science, passionné par le développement logiciel, l’IA et la blockchain.
J’allie compétences techniques et esprit d’innovation pour concevoir des solutions intelligentes et évolutive
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/yassser0" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <button onClick={() => scrollToSection('contact')} className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg transition-all">
              Me contacter
            </button>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">À propos</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Étudiant en Master Big Data & Data Science à la Faculté des Sciences Ben M’Sick, je me passionne pour le développement logiciel, l’intelligence artificielle et les technologies blockchain.
Mon parcours académique et mes projets personnels m’ont permis de développer une expertise complète, allant de la conception d’architectures microservices à la mise en œuvre de modèles de machine learning, tout en explorant le Web3 et les applications décentralisées.
Curieux et rigoureux, j’aime transformer des idées innovantes en solutions concrètes et performantes.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Compétences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                  {skill.icon}
                  <h3 className="font-bold text-lg">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projets Académiques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-purple-400 flex-1">{project.title}</h3>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                      title="Voir sur GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Formation</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 flex gap-6 items-start hover:transform hover:scale-105 transition-all shadow-xl">
                <div className="bg-purple-600 rounded-lg px-4 py-2 font-bold text-lg shrink-0">
                  {edu.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-400 mb-1">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.school}</p>
                  <p className="text-gray-400 text-sm">Spécialité: {edu.spec}</p>
                </div>
                <BookOpen className="w-6 h-6 text-purple-400 shrink-0" />
              </div>
            ))}
          </div>
          <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold text-purple-400 mb-2">Certification</h3>
            <p className="text-gray-300">Java SE 17 Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Contact</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <Phone className="w-10 h-10 text-purple-400" />
                <h3 className="font-bold">Téléphone</h3>
                <a href="tel:+212716972238" className="text-gray-300 hover:text-purple-400">+212 716-972238</a>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Mail className="w-10 h-10 text-purple-400" />
                <h3 className="font-bold">Email</h3>
                <a href="mailto:rachihyasser@gmail.com" className="text-gray-300 hover:text-purple-400">rachihyasser@gmail.com</a>
              </div>
              <div className="flex flex-col items-center gap-3">
                <MapPin className="w-10 h-10 text-purple-400" />
                <h3 className="font-bold">Localisation</h3>
                <p className="text-gray-300">Casablanca, Maroc</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <a href="https://github.com/yassser0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <Github className="w-5 h-5" />
                github.com/yassser0
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-center text-gray-400">
        <p>© 2025 Mohammed Yasser Rachih. Tous droits réservés.</p>
        
      </footer>
    </div>
  );
}