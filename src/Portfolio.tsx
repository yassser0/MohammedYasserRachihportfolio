import { useState, useEffect } from 'react';

import {
  Github, Mail, Phone, MapPin, Code, Database, Brain, Box, Link2,
  Award, BookOpen, ChevronDown, Menu, X, Linkedin, FileDown
} from 'lucide-react';

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

  // --------------------------
  // ⭐ Certifications
  // --------------------------
  const certifications = [
    {
      title: "Oracle Certified Java SE 17 Developer",
      provider: "Oracle",
      year: "2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=029243E51686CB1B18888C9ED6A001BD59E8AAF1065E53301445372E7D02C664"
    }
  ];

  // --------------------------
  // ⭐ Compétences
  // --------------------------
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

  // --------------------------
  // ⭐ Projets
  // --------------------------
  const projects = [
    {
      title: "Système de bibliothèque en microservices",
      description: "Architecture microservices avec Spring Boot, Spring Cloud Gateway et Eureka Server. Interface HTML/JS et Thymeleaf.",
      tags: ["Spring Boot", "Microservices", "DDD", "MySQL"],
      github: "https://github.com/yassser0/LibraryMicro"
    },
    {
      title: "CI/CD avec Jenkins, Docker & Kubernetes",
      description: "Pipeline DevOps complet pour une application React. Automatisation totale.",
      tags: ["Jenkins", "Docker", "Kubernetes", "React"],
      github: "https://github.com/yassser0/DevOps-Todo-App"
    },
    {
      title: "Application de diplômes sur blockchain",
      description: "DApp Ethereum pour enregistrer et vérifier des diplômes.",
      tags: ["Blockchain", "Solidity", "React", "Web3"],
      github: "https://github.com/yassser0/diploma-contract"
    },
    {
      title: "Certificats de propriété via Blockchain",
      description: "Vérification et consultation de certificats de propriété.",
      tags: ["Blockchain", "Solidity", "React"],
      github: "https://github.com/yassser0/CertificatProprieteBlockchain"
    },
    {
      title: "Prédiction du rendement agricole",
      description: "XGBoost + Pandas pour prédire les rendements agricoles.",
      tags: ["Machine Learning", "Python", "XGBoost", "Pandas"],
      github: "https://github.com/yassser0/ProjetAgriML"
    },
    {
      title: "Benchmark d'optimiseurs pour GANs",
      description: "Comparaison Adam vs SGD vs RMSprop sur GANs.",
      tags: ["Deep Learning", "PyTorch", "GANs"],
      github: "https://github.com/yassser0/GAN_Optimizer_Benchmark"
    },
    {
      title: "Clustering d'émissions Netflix",
      description: "K-Means + PCA + Streamlit.",
      tags: ["Machine Learning", "K-Means", "Streamlit"],
      github: "https://github.com/yassser0/netflix-clustering"
    },
    {
      title: "ChatRoom – Messagerie temps réel",
      description: "Chat WebSocket avec MongoDB et STOMP.",
      tags: ["WebSocket", "MongoDB", "Thymeleaf"],
      github: "https://github.com/yassser0/chatroom"
    },
    {
      title: "Réseau de neurones en NumPy",
      description: "Réseau neuronal codé from scratch.",
      tags: ["Deep Learning", "NumPy", "Python"],
      github: "https://github.com/yassser0/neuralNetMLTP"
    },
    {
      title: "Spotify Audio Feature Analyzer",
      description: "Analyse avancée de features audio via API Spotify.",
      tags: ["Python", "Spotify API", "DataViz"],
      github: "https://github.com/yassser0/SpotifyAudioFeatureAnalyzer"
    }
  ];

  // --------------------------
  // ⭐ Formation
  // --------------------------
  const education = [
    { year: "2025", degree: "Master Data Science & Big Data", school: "FSBM", spec: "BIG DATA" },
    { year: "2024", degree: "Licence Professionnelle", school: "FSBM", spec: "SMI" },
    { year: "2023", degree: "DEUG", school: "FSBM", spec: "SMAI" },
    { year: "2021", degree: "Baccalauréat", school: "École Oued Dahab", spec: "Physique" }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      {/* -------------------------------------------------- */}
      {/* NAVIGATION */}
      {/* -------------------------------------------------- */}

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            YR
          </h1>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex md:flex-row flex-col absolute md:relative top-16 md:top-0 left-0 right-0 bg-slate-900 md:bg-transparent p-4 md:p-0 gap-6`}>
            {["about", "skills", "projects", "education", "certifications", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? "text-purple-400" : ""}`}
              >
                {{
                  about: "À propos",
                  skills: "Compétences",
                  projects: "Projets",
                  education: "Formation",
                  certifications: "Certifications",
                  contact: "Contact"
                }[section]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}

      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold">
            YR
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Mohammed Yasser Rachih
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Data Scientist & Ingénieur Big Data | Créateur de solutions intelligentes et évolutives
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <button onClick={() => scrollToSection("contact")} className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg transition-all">
              Me contacter
            </button>

            <a
              href={`${import.meta.env.BASE_URL}CV.pdf`}
              download="CV_Mohammed_Yasser_Rachih.pdf"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
            >
              <FileDown className="w-5 h-5" /> Télécharger CV
            </a>
          </div>

          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-purple-400" />
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* ABOUT */}
      {/* -------------------------------------------------- */}

      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">À propos</h2>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Étudiant en Master Data Science & Big Data (DSBD) et développeur Full-Stack, je me spécialise dans l’analyse avancée des données, la modélisation statistique, l’apprentissage automatique et le traitement des données massives. Mon parcours me permet de maîtriser les technologies clés du Big Data tout en développant des applications web robustes et performantes grâce à une expertise en développement front-end et back-end. Passionné par l’intelligence artificielle, l’ingénierie logicielle et les architectures modernes, je conçois des solutions data-driven intelligentes, évolutives et orientées performance. Animé par la rigueur et la curiosité, je transforme les données et les besoins métier en outils concrets, fiables et innovants.
            </p>

            <div className="flex justify-center my-6">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>

            <h3 className="text-2xl font-semibold text-purple-400 mt-8 mb-4">Ce que je recherche</h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              Un stage en <span className="text-purple-400 font-semibold">Data Science</span>,
              <span className="text-purple-400 font-semibold"> Big Data</span>,
              <span className="text-purple-400 font-semibold"> Machine Learning</span> ou
              <span className="text-purple-400 font-semibold"> Développement Full-Stack</span>.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* SKILLS */}
      {/* -------------------------------------------------- */}

      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Compétences</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all shadow-xl">
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                  {skill.icon}
                  <h3 className="font-bold text-lg">{skill.category}</h3>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* PROJECTS */}
      {/* -------------------------------------------------- */}

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projets</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>

                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

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

      {/* -------------------------------------------------- */}
      {/* EDUCATION */}
      {/* -------------------------------------------------- */}

      <section id="education" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Formation</h2>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 flex gap-6 hover:scale-105 transition-all shadow-xl">
                <div className="bg-purple-600 px-4 py-2 rounded-lg font-bold text-lg shrink-0">
                  {edu.year}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-400">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.school}</p>
                  <p className="text-gray-400 text-sm">Spécialité : {edu.spec}</p>
                </div>

                <BookOpen className="w-6 h-6 text-purple-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* ⭐ CERTIFICATIONS (AVEC ICÔNE LINK2) */}
      {/* -------------------------------------------------- */}

      <section id="certifications" className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>

          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 flex gap-6 hover:scale-105 transition-all shadow-xl">

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-yellow-400">{cert.title}</h3>

                  {/* provider + icône Link */}
                  <div className="flex items-center gap-2">
                    <p className="text-gray-300">{cert.provider}</p>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-yellow-400 transition-colors"
                      >
                        <Link2 className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <Award className="w-6 h-6 text-yellow-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* CONTACT */}
      {/* -------------------------------------------------- */}

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-12">Contact</h2>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">

              <div className="flex flex-col items-center">
                <Phone className="w-10 h-10 text-purple-400" />
                <h3 className="font-bold">Téléphone</h3>
                <a href="tel:+212716972238" className="text-gray-300 hover:text-purple-400">+212 716-972238</a>
              </div>

              <div className="flex flex-col items-center">
                <Mail className="w-10 h-10 text-purple-400" />
                <h3 className="font-bold">Email</h3>
                <a href="mailto:rachihyasser@gmail.com" className="text-gray-300 hover:text-purple-400">rachihyasser@gmail.com</a>
              </div>

              <div className="flex flex-col items-center">
                <MapPin className="w-10 h-10 text-purple-400" />
                <h3 className="font-bold">Localisation</h3>
                <p className="text-gray-300">Casablanca, Maroc</p>
              </div>

            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <a href="https://github.com/yassser0" target="_blank" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2">
                <Github className="w-5 h-5" />
                github.com/yassser0
              </a>
            </div>

            <div className="mt-6">
              <a href="https://www.linkedin.com/in/mohamed-yasser-rachih-249121373/" target="_blank" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                linkedin.com/MohammedYasserRachih
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------------------------- */}

      <footer className="py-8 px-4 bg-slate-900 text-center text-gray-400">
        © 2025 Mohammed Yasser Rachih — Tous droits réservés.
      </footer>

    </div>
  );
}
