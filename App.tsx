
import React, { useEffect, useState } from 'react';
import {
  Cpu,
  Gamepad2,
  BrainCircuit,
  CheckCircle2,
  Mail,
  Instagram,
  Linkedin,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Zap,
  Play
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Components ---
const getUrl = (fileName) => {
  // Prende la base del sito (solitamente '/') e aggiunge la cartella video
  const base = import.meta.env.BASE_URL;
  const path = `${base}video/${fileName}`;

  // Puliamo eventuali doppi slash //
  return path.replace(/\/+/g, '/');
};
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-high py-4 shadow-2xl shadow-purple-900/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
          IA<span className="text-purple-500">PROD</span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="mailto:alessio.cocco.video@gmail.com"
            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-purple-400 transition-colors border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 hover:border-purple-500/50 transition-all group"
          >
            Lavoriamo Insieme <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const ShowreelHero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src={getUrl("miscuglio.mp4")}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 py-1.5 px-6 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-lg shadow-purple-900/20"
          >

          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-8 leading-tight tracking-tighter text-white opacity-95 text-center w-full uppercase">
            Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 opacity-100">Video Production</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-12 leading-relaxed font-light">
            Dove le Scienze Applicate incontrano l'Intelligenza Artificiale.
            <br />
            <strong className="text-white">Trasformo il video marketing in esperienze cinematografiche.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#work"
              className="group relative px-10 py-5 bg-white text-[#030712] rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2 tracking-tight">
                GUARDA I LAVORI <Zap size={18} className="fill-current" />
              </span>
            </a>

            <a
              href="#contact"
              className="px-10 py-5 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-all hover:border-white/30 text-white tracking-tight backdrop-blur-sm"
            >
              Parliamo del Progetto
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <ChevronRight size={24} className="rotate-90" />
      </motion.div>
    </section>
  );
};

const CircularWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    { title: "Arrampicata", file: "arrampicata.mp4", desc: "Adrenaline Climb" },
    { title: "Balena AI", file: "balena_ai.mp4", desc: "Digital Nature" },
    { title: "Caffè Eleonora", file: "caffe_eleonora.mp4", desc: "Sensory Experience" },
    { title: "Giorh Mix", file: "giorh audio 7 .mp4", desc: "Sound Design" },
    { title: "Quad", file: "quad.mp4", desc: "Offroad Dynamics" },
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Configurations
  const spacing = isMobile ? 260 : 450;
  const activeScale = isMobile ? 1.1 : 1.4;
  const inactiveScale = isMobile ? 0.85 : 0.8;
  const zDepth = isMobile ? -80 : -200;

  return (
    <section id="work" className="py-12 md:py-24 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            I MIEI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">LAVORI</span>
          </h2>
          <p className="text-gray-400">Esplora l'archivio completo dei lavori.</p>
        </div>

        {/* Circular Carousel */}
        <div
          className="relative w-full max-w-full mx-auto h-[400px] md:h-[800px] flex items-center justify-center touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-1 md:left-4 z-50 p-2 md:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-md"
          >
            <ChevronRight size={24} className="rotate-180 md:w-8 md:h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 md:right-4 z-50 p-2 md:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-md"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            {projects.map((project, idx) => {
              let position = idx - activeIndex;
              if (position < -2) position += projects.length;
              if (position > 2) position -= projects.length;

              if (projects.length > 4) {
                if (activeIndex === 0 && idx >= projects.length - 2) position = idx - projects.length;
                if (activeIndex === projects.length - 1 && idx <= 1) position = projects.length + idx - activeIndex;
              }

              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 2;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    x: position * (isMobile && !isActive ? 40 : spacing),
                    z: Math.abs(position) * zDepth,
                    scale: isActive ? activeScale : inactiveScale,
                    opacity: isActive ? 1 : 0.3,
                    zIndex: isActive ? 50 : 40 - Math.abs(position),
                    rotateY: position * (isMobile ? -5 : -15),
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute w-[85vw] md:w-[500px] aspect-video rounded-xl overflow-hidden border shadow-2xl ${isActive ? 'border-2 border-purple-500 shadow-purple-900/50' : 'border-white/10 bg-gray-900 group'
                    }`}
                  onClick={() => !isActive && setActiveIndex(idx)}
                >
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    <video
                      className="w-full h-full object-contain"
                      src={getUrl(project.file)}
                      controls={isActive}
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => !isActive && !isMobile && e.currentTarget.play()}
                      onMouseLeave={(e) => !isActive && !isMobile && (e.currentTarget.pause(), e.currentTarget.currentTime = 0)}
                    />
                    {!isActive && (
                      <>
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors pointer-events-none" />
                        <div className="absolute bottom-4 left-4 pointer-events-none z-10">
                          <h3 className="text-white font-bold text-lg drop-shadow-md bg-black/50 px-2 rounded">{project.title}</h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                            <Play size={24} className="text-white fill-current" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "500",
      features: ["1 Video Spot", "Montaggio HD", "Correzione Colore", "1 Revisione"],
      popular: false
    },
    {
      name: "Pro Bundle",
      price: "1350",
      subtitle: "Risparmia il 10%",
      features: ["3 Video Spot", "Integrazione AI", "Scriptwriting", "3 Revisioni"],
      popular: true
    },
    {
      name: "Business Scale",
      price: "3000",
      features: ["10 Video / Mese", "Workflow AI Completo", "Social Strategy", "Priorità Supporto"],
      popular: false
    },
    {
      name: "Enterprise",
      price: "5000",
      features: ["20 Video / Mese", "Asset 4K Custom", "Voiceover AI Pro", "Account Manager"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">Investi nel <span className="text-gradient">Futuro</span></h2>
          <p className="text-gray-400">Soluzioni scalabili per ogni esigenza di produzione.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 group ${tier.popular
                ? 'border-purple-500/50 bg-purple-900/10 shadow-lg shadow-purple-900/20 scale-105 z-10'
                : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10'
                }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-purple-600/30 ring-1 ring-white/20">
                    Consigliato
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2 text-gray-300 uppercase tracking-wider">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-white">€{tier.price}</span>
                  {tier.name.includes('Scale') || tier.name.includes('Enterprise') ? (
                    <span className="text-gray-500 text-sm font-medium">/mese</span>
                  ) : null}
                </div>
                {tier.subtitle && (
                  <p className="text-emerald-400 text-xs font-bold mt-2 flex items-center gap-1">
                    <Sparkles size={12} /> {tier.subtitle}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <CheckCircle2 size={16} className={`mt-0.5 ${tier.popular ? 'text-purple-400' : 'text-gray-600 group-hover:text-purple-400 transition-colors'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:alessio.cocco.video@gmail.com"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center block tracking-wide ${tier.popular
                  ? 'bg-white text-black hover:scale-105 shadow-xl shadow-purple-900/20'
                  : 'bg-white/5 text-white hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
              >
                Inizia Ora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-[40px] border border-white/10 relative overflow-hidden">
          {/* Accent Blobs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Pronto a scalare con l'AI?</h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Il futuro del video marketing è qui. Non restare indietro. Contattami ora per una consulenza strategica gratuita e scopri come l'intelligenza artificiale può rivoluzionare la tua produzione video.
              </p>

              <div className="space-y-4">
                <a href="https://wa.me/#" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <span className="font-medium">WhatsApp Direct</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span className="font-medium">Instagram Portfolio</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-8 p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/40">
                <Mail size={40} className="text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Scrivimi un'email</h3>
                <p className="text-gray-400 mb-6">Rispondo solitamente entro poche ore.</p>
                <a
                  href="mailto:alessio.cocco.video@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-purple-600/20 text-lg group"
                >
                  contattami
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter text-white">
          IA<span className="text-purple-500">PROD</span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AI Specialist & Production Portfolio. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Questo sito è un prototipo NON è da intendere come un'offerta commerciale
        </p>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 transition-colors cursor-pointer text-gray-400">
            <Linkedin size={16} />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 transition-colors cursor-pointer text-gray-400">
            <Instagram size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const Timeline = () => {
  const steps = [
    {
      title: "Ingegneria Informatica",
      subtitle: "Il Fondamento Analitico",
      description: "Sviluppo di un mindset tecnico-scientifico focalizzato sul problem solving e l'ottimizzazione degli algoritmi.",
      icon: <Cpu size={24} />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "ITS Videogame Production",
      subtitle: "Estetica e Gestione",
      description: "Produzione e management di contenuti digitali complessi. Unione tra creatività visiva e logiche di produzione industriale.",
      icon: <Gamepad2 size={24} />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "AI Specialist",
      subtitle: "Il Presente Generativo",
      description: "Utilizzo di modelli LLM e generative media (Stable Diffusion, Runway, Sora) per ridefinire i confini del video marketing.",
      icon: <BrainCircuit size={24} />,
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white"
          >
            IL MIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">PERCORSO</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden md:block opacity-30" />

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-1/2 p-8 md:p-10 rounded-3xl glass border border-white/5 hover:border-purple-500/30 transition-all duration-300 md:group-hover:translate-x-2 ${idx % 2 === 0 ? 'md:text-right text-center' : 'md:text-left text-center'}`}>
                  <h3 className="text-3xl font-bold mb-2 text-white tracking-tight">{step.title}</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold mb-4 uppercase text-sm tracking-widest">{step.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
                </div>

                {/* Icon Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#030712] border-4 border-[#030712] z-20 hidden md:flex shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-inner`}>
                    {step.icon}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <ShowreelHero />
      <Timeline />
      <CircularWorks />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
