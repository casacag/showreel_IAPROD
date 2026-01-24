
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
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
          AI<span className="text-purple-500">PROD</span>
        </a>

        {/* Minimalist CTA instead of section links */}
        <div className="flex items-center gap-4">
          <a 
            href="mailto:alessio.cocco.video@gmail.com" 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-purple-400 transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 transition-all"
          >
            Lavoriamo Insieme <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            Future of Video Production
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            Dove l'Ingegneria incontra <br />
            <span className="text-gradient">l'Intelligenza Artificiale</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Trasformo il video marketing tradizionale in esperienze cinetiche ad alto impatto. Approccio analitico da ingegnere, visione creativa da production manager.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#work" 
              className="group relative px-8 py-4 bg-purple-600 rounded-full font-bold text-white transition-all hover:bg-purple-700 overflow-hidden neon-border"
            >
              <span className="relative z-10 flex items-center gap-2">
                Guarda i Lavori <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-all"
            >
              Parliamo del tuo progetto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    {
      title: "Ingegneria Informatica",
      subtitle: "Il Fondamento Analitico",
      description: "Sviluppo di un mindset tecnico-scientifico focalizzato sul problem solving e l'ottimizzazione degli algoritmi.",
      icon: <Cpu className="text-blue-400" />,
      color: "blue"
    },
    {
      title: "ITS Videogame Production",
      subtitle: "Estetica e Gestione",
      description: "Produzione e management di contenuti digitali complessi. Unione tra creatività visiva e logiche di produzione industriale.",
      icon: <Gamepad2 className="text-purple-400" />,
      color: "purple"
    },
    {
      title: "AI Specialist",
      subtitle: "Il Presente Generativo",
      description: "Utilizzo di modelli LLM e generative media (Stable Diffusion, Runway, Sora) per ridefinire i confini del video marketing.",
      icon: <BrainCircuit className="text-emerald-400" />,
      color: "emerald"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-white">Il mio percorso</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 p-8 rounded-2xl glass ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-bold mb-1 text-white">{step.title}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{step.subtitle}</p>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Icon Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 border-2 border-current shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 hidden md:flex" style={{ color: `var(--tw-color-${step.color}-400)` }}>
                  {step.icon}
                </div>

                {/* Spacer for reverse layout */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Showreel = () => {
  // Ensure videos are included in Vite build and URLs are correctly resolved in production.
  const videoModules = import.meta.glob('./video/*.mp4', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>;

  const videoUrlsByFileName: Record<string, string> = Object.fromEntries(
    Object.entries(videoModules).map(([filePath, url]) => {
      const fileName = filePath.split('/').pop() ?? filePath;
      return [fileName, url];
    })
  );

  const videoUrl = (fileName: string) =>
    videoUrlsByFileName[fileName] ??
    `${import.meta.env.BASE_URL}video/${encodeURIComponent(fileName)}`;

  const mainVideo = {
    title: "Showreel 2024",
    file: "miscuglio.mp4",
    subtitle: "Un concentrato di tecnologia e visione artistica.",
  };

  const samples = [
    { title: "Arrampicata", file: "arrampicata.mp4" },
    { title: "Balena", file: "balena (1).mp4" },
    { title: "Giorh", file: "giorh audio 7 .mp4" },
    { title: "Maimone", file: "maimone.mp4" },
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-white">Portfolio & Showreel</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <video
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                src={videoUrl(mainVideo.file)}
                playsInline
                preload="metadata"
                controls
              />

              {/* Desktop overlay (avoid covering controls on mobile) */}
              <div className="hidden md:block absolute bottom-8 left-8 pointer-events-none">
                <h3 className="text-3xl font-bold text-white mb-2">{mainVideo.title}</h3>
                <p className="text-gray-300">{mainVideo.subtitle}</p>
              </div>
            </div>

            {/* Mobile caption */}
            <div className="md:hidden mt-4 px-2">
              <h3 className="text-xl font-bold text-white">{mainVideo.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{mainVideo.subtitle}</p>
            </div>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {samples.map((sample, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="w-full"
              >
                <div className="group relative rounded-xl overflow-hidden border border-white/5 aspect-[4/3]">
                  <video
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    src={videoUrl(sample.file)}
                    controls
                    playsInline
                    preload="metadata"
                  />

                  {/* Overlay title on larger screens (don't cover controls on mobile) */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex-col justify-end p-4 pointer-events-none">
                    <h4 className="font-bold text-white text-sm">{sample.title}</h4>
                  </div>
                </div>

                {/* Mobile caption */}
                <div className="sm:hidden mt-2 px-1">
                  <h4 className="font-bold text-white text-sm">{sample.title}</h4>
                </div>
              </motion.div>
            ))}
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
    <section id="pricing" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-white">Piani & Pacchetti</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${tier.popular ? 'border-purple-500 bg-purple-500/5' : 'border-white/10 glass'} group`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-purple-600/20">
                  Consigliato
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 text-white">{tier.name}</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold tracking-tight text-white">€{tier.price}</span>
                {tier.name.includes('Scale') || tier.name.includes('Enterprise') ? (
                   <span className="text-gray-500 ml-1 text-sm">/mese</span>
                ) : null}
              </div>
              {tier.subtitle && (
                <p className="text-emerald-400 text-xs font-bold mb-6">{tier.subtitle}</p>
              )}
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 size={16} className="text-purple-500 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="mailto:alessio.cocco.video@gmail.com"
                className={`w-full py-3 rounded-xl font-bold transition-all text-center block ${tier.popular ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/20' : 'bg-white/5 hover:bg-white/10 text-white'}`}
              >
                Inizia ora
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
                  alessio.cocco.video@gmail.com
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
          AI<span className="text-purple-500">PROD</span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AI Specialist & Production Portfolio. All rights reserved.
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <Timeline />
      <Showreel />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
