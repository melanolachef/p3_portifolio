import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const menuItems = [
  { id: 'status', label: 'STATUS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'quests', label: 'QUESTS' },
  { id: 'system', label: 'SYSTEM' }
];

const menuContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
};

const menuItemAnim = {
  hidden: { opacity: 0, x: -100, skewX: -15 },
  show: { opacity: 1, x: 0, skewX: -15, transition: { type: "spring", stiffness: 80 } }
};

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  // --- SISTEMA DE ÁUDIO ---
  const playHoverSound = () => {
    const audio = new Audio('/hover.mp3');
    audio.volume = 0.3; // Volume mais baixo para não assustar
    audio.play().catch(() => { }); // O catch evita erros se o navegador bloquear o som
  };

  const playClickSound = () => {
    const audio = new Audio('/click.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => { });
  };

  const startGame = () => {
    if (!gameStarted) {
      playClickSound(); // Toca o som de confirmar ao iniciar
      setGameStarted(true);
    }
  };

  // --- RENDERIZAÇÃO DO CONTEÚDO DAS ABAS (Mantido igual) ---
  const renderContent = () => {
    switch (activeSection) {
      case 'status':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', paddingRight: '15px', height: '100%' }}>
            <div>
              <h3 style={{ fontSize: '3rem', color: '#FFFFFF', textShadow: '2px 2px 0px #000' }}>LUCAS N. MELARÉ COELHO</h3>
              <div style={{ color: '#A0D2EB', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '-5px' }}>Class: Back-end Developer & Data Analyst</div>
            </div>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderLeft: '4px solid #00BFFF' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Focado em unir a robustez da engenharia de software com a inteligência de dados. Atualmente liderando automações de documentos e criando dashboards interativos.</p>
            </div>
            <div>
              <h4 style={{ color: '#00BFFF', fontSize: '1.5rem', borderBottom: '1px solid rgba(0, 191, 255, 0.3)', paddingBottom: '5px', marginBottom: '10px' }}>CURRENT GUILD</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Rei dos Motores</span><span style={{ color: '#A0D2EB', fontSize: '1rem' }}>Abr 2025 - Atual</span></div>
              <p style={{ fontSize: '1.1rem', color: '#CCC', marginTop: '5px' }}>Estagiário de Desenvolvimento</p>
            </div>
            <div>
              <h4 style={{ color: '#00BFFF', fontSize: '1.5rem', borderBottom: '1px solid rgba(0, 191, 255, 0.3)', paddingBottom: '5px', marginBottom: '10px' }}>ACADEMICS</h4>
              <div style={{ marginBottom: '15px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: '1.2rem' }}>Pós-graduação em Data Analytics</span><span style={{ color: '#A0D2EB', fontSize: '1rem' }}>FIAP</span></div></div>
              <div><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: '1.2rem' }}>Análise e Desenvolvimento de Sistemas</span><span style={{ color: '#A0D2EB', fontSize: '1rem' }}>FACENS</span></div></div>
            </div>
          </div>
        );

      case 'skills':
        const skillsParty = [
          { name: 'JAVA / SPRING', level: 'Lv 45', hp: '85%', sp: '70%' },
          { name: 'SQL / DATABASES', level: 'Lv 40', hp: '90%', sp: '80%' },
          { name: 'POWER BI / DAX', level: 'Lv 38', hp: '80%', sp: '85%' },
          { name: 'DATA STRUCTURES', level: 'Lv 35', hp: '75%', sp: '60%' }
        ];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'flex-start', paddingLeft: '20px', overflowY: 'auto', height: '100%', paddingRight: '15px' }}>
            {skillsParty.map((skill, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.15 }} style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: 'rgba(5, 10, 31, 0.9)', border: '2px solid #00BFFF', padding: '10px 20px', transform: 'skewX(-10deg)', boxShadow: '4px 4px 0px rgba(0,0,0,0.5)', minWidth: '400px' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: '#00BFFF', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'skewX(10deg)' }}><span style={{ color: '#050A1F', fontWeight: 'bold' }}>{skill.name.charAt(0)}</span></div>
                <div style={{ flex: 1, transform: 'skewX(10deg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span style={{ fontWeight: 'bold', fontSize: '1.2rem', textShadow: '1px 1px 0px #000' }}>{skill.name}</span><span style={{ color: '#A0D2EB' }}>{skill.level}</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}><span style={{ fontSize: '0.8rem', color: '#B2FF59', width: '20px' }}>HP</span><div style={{ height: '6px', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #333' }}><div style={{ width: skill.hp, height: '100%', backgroundColor: '#B2FF59', boxShadow: '0 0 5px #B2FF59' }}></div></div></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ fontSize: '0.8rem', color: '#00BFFF', width: '20px' }}>SP</span><div style={{ height: '6px', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #333' }}><div style={{ width: skill.sp, height: '100%', backgroundColor: '#00BFFF', boxShadow: '0 0 5px #00BFFF' }}></div></div></div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'quests':
        const questsList = [
          { title: 'IT Asset Management (ITAM)', client: 'Rei dos Motores', status: 'IN PROGRESS', techs: 'SaaS • Automação • Dashboards', desc: 'Desenvolvimento completo de um sistema de Gestão de Ativos para controle de licenças de software, depreciação financeira, histórico de manutenção e gestão de telefonia corporativa.' },
          { title: 'Corporate Data Dashboards', client: 'Rei dos Motores', status: 'CLEARED', techs: 'Power BI • Google Forms', desc: 'Automatização de documentos corporativos e criação de dashboards em tempo real para tomada de decisão estratégica.' },
          { title: 'Automate the Dental Clinic', client: 'Freelance Request', status: 'CLEARED', techs: 'Scripts • Integração', desc: 'Desenvolvimento de sistema automático de lembretes e agendamentos, reduzindo a carga operacional manual e eliminando duplicidades.' },
          { title: 'Mentor the Novices', client: 'FACENS', status: 'CLEARED', techs: 'Java • Data Structures', desc: 'Suporte na depuração de códigos e implementação de algoritmos complexos (Árvores, Grafos, Listas) para os alunos.' }
        ];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', paddingRight: '15px', height: '100%' }}>
            {questsList.map((quest, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }} style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0, 191, 255, 0.4)', padding: '20px', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '100px', height: '100px', backgroundColor: 'rgba(0, 191, 255, 0.1)', transform: 'rotate(45deg)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div><h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', textTransform: 'uppercase' }}>{quest.title}</h3><span style={{ color: '#A0D2EB', fontSize: '0.9rem', letterSpacing: '1px' }}>Client: {quest.client}</span></div>
                  <div style={{ border: `2px solid ${quest.status === 'CLEARED' ? '#B2FF59' : '#00BFFF'}`, color: quest.status === 'CLEARED' ? '#B2FF59' : '#00BFFF', padding: '3px 10px', fontWeight: 'bold', transform: 'rotate(5deg)', letterSpacing: '2px', boxShadow: `0 0 10px ${quest.status === 'CLEARED' ? 'rgba(178,255,89,0.2)' : 'rgba(0,191,255,0.2)'}` }}>{quest.status}</div>
                </div>
                <div style={{ color: '#00BFFF', fontSize: '0.8rem', marginBottom: '10px', fontWeight: 'bold' }}>[ REWARD / TECH: {quest.techs} ]</div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: '#E0E0E0' }}>{quest.desc}</p>
              </motion.div>
            ))}
          </div>
        );

      case 'system':
        const systemOptions = [
          { icon: <FaFileDownload />, label: 'SAVE DATA', sub: 'Download Resume (PDF)', action: () => { playClickSound(); window.open('/curriculo_lucas_melare_2026.pdf', '_blank'); } },
          { icon: <FaLinkedin />, label: 'NETWORK', sub: 'Connect on LinkedIn', action: () => { playClickSound(); window.open('https://www.linkedin.com/in/lucasmelare/', '_blank'); } },
          { icon: <FaGithub />, label: 'SOURCE CODE', sub: 'View GitHub Repositories', action: () => { playClickSound(); window.open('https://github.com/melanolachef', '_blank'); } },
          { icon: <FaEnvelope />, label: 'COMMUNICATION', sub: 'Send an E-mail', action: () => { playClickSound(); window.location.href = 'mailto:lnmelare@gmail.com'; } }
        ];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px', height: '100%', justifyContent: 'center' }}>
            {systemOptions.map((opt, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.15 }} whileHover={{ scale: 1.02, backgroundColor: '#00BFFF', color: '#050A1F' }}
                onMouseEnter={playHoverSound} onClick={opt.action}
                style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 30px', cursor: 'pointer', border: '2px solid #00BFFF', backgroundColor: 'rgba(0, 191, 255, 0.1)', color: '#FFFFFF', transform: 'skewX(-10deg)', transition: 'all 0.2s ease', boxShadow: '4px 4px 0px rgba(0,0,0,0.5)' }}>
                <div style={{ fontSize: '2.5rem', transform: 'skewX(10deg)' }}>{opt.icon}</div>
                <div style={{ transform: 'skewX(10deg)' }}><h3 style={{ fontSize: '1.8rem', letterSpacing: '2px', margin: 0 }}>{opt.label}</h3><span style={{ fontSize: '1rem', opacity: 0.8 }}>{opt.sub}</span></div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', backgroundColor: '#050A1F' }}
      onClick={startGame} // Aciona a função que toca o som e inicia
    >
      {/* Lua de fundo do menu principal (Aparece só depois do jogo iniciar) */}
      {gameStarted && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 2 }} style={{ position: 'absolute', top: '10%', right: '15%', width: '350px', height: '350px', borderRadius: '50%', backgroundColor: '#E0F7FA', boxShadow: '0 0 80px 20px rgba(0, 191, 255, 0.2), inset -30px -30px 50px rgba(0,0,0,0.3)', zIndex: 1, pointerEvents: 'none', filter: 'blur(2px)' }} />
      )}

      <AnimatePresence>
        {!gameStarted ? (
          /* NOVO BACKGROUND DA TELA DE TÍTULO */
          <motion.div
            key="title-screen"
            initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', cursor: 'pointer', zIndex: 10,
              // Propriedades do novo fundo
              backgroundImage: "url('/title-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              // Um leve sombreado preto por cima da imagem para dar destaque ao seu nome
              boxShadow: 'inset 0 0 0 2000px rgba(5, 10, 31, 0.3)'
            }}
          >
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ fontSize: '5.5rem', letterSpacing: '4px', color: '#00BFFF', textShadow: '6px 6px 0px #000', textTransform: 'uppercase' }}>LUCAS MELARE</motion.h1>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} style={{ fontSize: '1.8rem', letterSpacing: '4px', marginTop: '10px', color: '#FFF', textShadow: '2px 2px 0px #000', textTransform: 'uppercase' }}>PORTFOLIO</motion.h2>
            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} style={{ position: 'absolute', bottom: '10%', fontSize: '1.4rem', color: '#FFFFFF', textShadow: '3px 3px 0px #000', backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '5px' }}>PRESS ENTER OR CLICK</motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="main-layout"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}
          >
            <div style={{ flex: 1, paddingLeft: '8%' }}>
              <motion.ul variants={menuContainer} initial="hidden" animate="show" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id} variants={menuItemAnim}
                    // Adicionado o som de hover aqui
                    onMouseEnter={() => { setHoveredItem(item.id); playHoverSound(); }}
                    onMouseLeave={() => setHoveredItem(null)}
                    // Adicionado o som de click aqui
                    onClick={() => { setActiveSection(item.id); playClickSound(); }}
                    style={{
                      fontSize: '4rem', color: hoveredItem === item.id || activeSection === item.id ? '#050A1F' : '#FFFFFF',
                      backgroundColor: hoveredItem === item.id || activeSection === item.id ? '#00BFFF' : 'transparent',
                      padding: '5px 40px', cursor: 'pointer', textTransform: 'uppercase', textShadow: hoveredItem === item.id || activeSection === item.id ? 'none' : '4px 4px 0px #000',
                      borderLeft: hoveredItem === item.id || activeSection === item.id ? '15px solid #FFFFFF' : '15px solid transparent',
                      transition: 'all 0.1s ease-out', width: 'fit-content'
                    }}
                  >
                    {item.label}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div style={{ flex: 1.5, height: '80%', paddingRight: '5%', position: 'relative' }}>
              <AnimatePresence mode="wait">
                {activeSection && (
                  <motion.div
                    key={activeSection} initial={{ opacity: 0, x: 50, skewX: -5 }} animate={{ opacity: 1, x: 0, skewX: 0 }} exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }} transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    style={{ backgroundColor: 'rgba(5, 10, 31, 0.8)', border: '2px solid #00BFFF', height: '100%', padding: '40px', borderRadius: '10px', boxShadow: '0 0 30px rgba(0, 191, 255, 0.15)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column' }}
                  >
                    <h2 style={{ fontSize: '3rem', color: '#00BFFF', textTransform: 'uppercase', borderBottom: '2px solid #00BFFF', paddingBottom: '10px', marginBottom: '25px', textShadow: '2px 2px 0px #000' }}>
                      {activeSection}
                    </h2>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      {renderContent()}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;