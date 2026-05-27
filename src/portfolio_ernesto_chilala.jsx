import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = ['Início', 'Sobre', 'Serviços', 'Projetos', 'Contacto']

const SERVICES_MARBLE = [
  { icon: '🏗️', label: 'Bancadas de Cozinha' },
  { icon: '🪜', label: 'Escadas' },
  { icon: '🟫', label: 'Pisos' },
  { icon: '🧱', label: 'Revestimentos' },
  { icon: '🏛️', label: 'Fachadas' },
  { icon: '🛁', label: 'Casas de Banho' },
  { icon: '🍽️', label: 'Mesas e Ilhas' },
]

const SERVICES_DESIGN = [
  { icon: '📐', label: 'Modelação 3D' },
  { icon: '🖼️', label: 'Renderização' },
  { icon: '🛋️', label: 'Design de Interiores' },
  { icon: '🏠', label: 'Planeamento de Ambientes' },
  { icon: '📋', label: 'Leitura de Plantas' },
  { icon: '👁️', label: 'Visualização de Projetos' },
]

const STATS = [
  { value: '+5', label: 'Anos de Experiência' },
  { value: '100+', label: 'Projetos Executados' },
  { value: '100%', label: 'Compromisso' },
]

const PROJECTS = [
  {
    title: 'Cozinha Moderna',
    category: 'Mármore & Granito',
    tag: 'Bancada em Granito',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    color: '#C9A96E',
  },
  {
    title: 'Casa de Banho Premium',
    category: 'Revestimento',
    tag: 'Mármore Branco',
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    color: '#8B7355',
  },
  {
    title: 'Escada em Mármore',
    category: 'Arquitetura',
    tag: 'Travertino',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: '#6B5B45',
  },
  {
    title: 'Revestimento de Parede',
    category: 'Design de Interiores',
    tag: 'Pedra Natural',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    color: '#A0896B',
  },
  {
    title: 'Bancada em Granito',
    category: 'Cozinha',
    tag: 'Granito Preto',
    image:
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80',
    color: '#5C4B3A',
  },
  {
    title: 'Ilha em Mármore',
    category: 'Cozinha Premium',
    tag: 'Mármore Carrara',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    color: '#B8A082',
  },
]

const QUALITIES = [
  {
    icon: '💡',
    title: 'Design Inteligente',
    desc: 'Soluções modernas e funcionais',
  },
  { icon: '💎', title: 'Qualidade Superior', desc: 'Materiais selecionados' },
  {
    icon: '✂️',
    title: 'Execução Impecável',
    desc: 'Acabamentos de alto padrão',
  },
  {
    icon: '✅',
    title: 'Satisfação Garantida',
    desc: 'Compromisso com cada detalhe',
  },
]

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --gold: #C9A96E;
    --gold-light: #E8D5B0;
    --gold-dark: #8B7350;
    --dark: #0A0906;
    --dark-2: #111009;
    --dark-3: #1A1712;
    --dark-4: #252018;
    --cream: #F5F0E8;
    --cream-2: #EDE4D3;
    --text-muted: #8A8070;
  }

  body { background: var(--dark); color: var(--cream); font-family: 'Jost', sans-serif; }

  .portfolio {
    min-height: 100vh;
    background: var(--dark);
    overflow-x: hidden;
  }

  /* NAV */
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 1.25rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(10,9,6,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(201,169,110,0.12);
    transition: all 0.3s;
  }

  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    letter-spacing: 0.12em;
    color: var(--gold);
    text-transform: uppercase;
  }

  .nav-logo span {
    color: var(--cream);
    font-style: italic;
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  .nav-links a {
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;
  }

  .nav-links a:hover { color: var(--gold); }

  .nav-cta {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark);
    background: var(--gold);
    padding: 0.6rem 1.5rem;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
  }

  .nav-cta:hover { background: var(--gold-light); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    padding-top: 5rem;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 4rem 5rem 5rem;
    position: relative;
    z-index: 2;
  }

  .hero-eyebrow {
    font-size: 0.65rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .hero-eyebrow::before {
    content: '';
    display: block;
    width: 2.5rem;
    height: 1px;
    background: var(--gold);
  }

  .hero-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 400;
    line-height: 1.05;
    margin-bottom: 0.5rem;
    color: var(--cream);
  }

  .hero-name .last {
    color: var(--gold);
    font-style: italic;
  }

  .hero-tagline {
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
    margin-top: 0.75rem;
  }

  .hero-tagline span {
    color: var(--gold);
    opacity: 0.7;
  }

  .hero-desc {
    font-size: 1rem;
    line-height: 1.9;
    color: rgba(245,240,232,0.55);
    max-width: 380px;
    font-weight: 300;
    margin-bottom: 3rem;
  }

  .hero-desc em {
    color: var(--gold-light);
    font-style: italic;
    font-weight: 400;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .btn-primary {
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--dark);
    background: var(--gold);
    padding: 0.9rem 2rem;
    border: none;
    cursor: pointer;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    transition: all 0.3s;
  }

  .btn-primary:hover { background: var(--gold-light); }

  .btn-ghost {
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    background: transparent;
    padding: 0.9rem 2rem;
    border: 1px solid rgba(201,169,110,0.35);
    cursor: pointer;
    font-family: 'Jost', sans-serif;
    transition: all 0.3s;
  }

  .btn-ghost:hover { border-color: var(--gold); background: rgba(201,169,110,0.05); }

  .hero-signature {
    position: absolute;
    bottom: 3rem;
    left: 5rem;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.3rem;
    color: rgba(201,169,110,0.4);
    letter-spacing: 0.05em;
  }

  .hero-right {
    position: relative;
    overflow: hidden;
  }

  .hero-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(20%) contrast(1.05);
  }

  .hero-right::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, var(--dark) 0%, transparent 35%);
    z-index: 1;
  }

  .hero-right::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(201,169,110,0.06) 0%, transparent 100%);
    z-index: 1;
  }

  .hero-qualities {
    position: absolute;
    bottom: 2.5rem;
    right: 2rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .quality-pill {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: rgba(10,9,6,0.7);
    border: 1px solid rgba(201,169,110,0.15);
    padding: 0.5rem 0.9rem;
    backdrop-filter: blur(8px);
  }

  .quality-pill-icon {
    font-size: 0.9rem;
  }

  .quality-pill-text strong {
    display: block;
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 500;
  }

  .quality-pill-text span {
    font-size: 0.6rem;
    color: var(--text-muted);
    letter-spacing: 0.08em;
  }

  /* DIVIDER */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent);
    margin: 0;
  }

  /* ABOUT */
  .section {
    padding: 7rem 5rem;
  }

  .section-label {
    font-size: 0.62rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .section-label::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1px;
    background: var(--gold);
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 400;
    line-height: 1.2;
    color: var(--cream);
    margin-bottom: 1.5rem;
  }

  .section-title em {
    color: var(--gold);
    font-style: italic;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .about-image-wrap {
    position: relative;
  }

  .about-image-wrap img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    filter: grayscale(30%);
  }

  .about-image-wrap::before {
    content: '';
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
    border: 1px solid rgba(201,169,110,0.2);
    z-index: -1;
  }

  .about-text p {
    font-size: 0.97rem;
    line-height: 2;
    color: rgba(245,240,232,0.55);
    font-weight: 300;
    margin-bottom: 1.25rem;
  }

  .about-text p em {
    color: var(--gold-light);
    font-style: italic;
  }

  .stats-row {
    display: flex;
    gap: 2.5rem;
    margin-top: 3rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(201,169,110,0.12);
  }

  .stat-item {
    text-align: left;
  }

  .stat-value {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    font-weight: 400;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 0.35rem;
  }

  .stat-label {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* SERVICES */
  .services-bg {
    background: var(--dark-3);
  }

  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 3rem;
  }

  .services-col-title {
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(201,169,110,0.15);
  }

  .service-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(201,169,110,0.06);
    transition: all 0.2s;
    cursor: default;
  }

  .service-item:hover {
    border-bottom-color: rgba(201,169,110,0.2);
    padding-left: 0.5rem;
  }

  .service-item:hover .service-icon {
    color: var(--gold);
  }

  .service-icon {
    font-size: 1rem;
    width: 1.5rem;
    text-align: center;
    transition: color 0.2s;
  }

  .service-name {
    font-size: 0.88rem;
    color: rgba(245,240,232,0.7);
    font-weight: 300;
    letter-spacing: 0.03em;
  }

  .service-item:hover .service-name {
    color: var(--cream);
  }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .project-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 4/3;
  }

  .project-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
    filter: grayscale(20%);
  }

  .project-card:hover img {
    transform: scale(1.06);
    filter: grayscale(0%);
  }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,9,6,0.9) 0%, transparent 60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    transition: all 0.3s;
  }

  .project-tag {
    font-size: 0.58rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.35rem;
  }

  .project-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--cream);
  }

  .project-cat {
    font-size: 0.65rem;
    color: rgba(245,240,232,0.45);
    margin-top: 0.2rem;
    letter-spacing: 0.08em;
  }

  .project-arrow {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    border: 1px solid rgba(201,169,110,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    color: var(--gold);
    font-size: 0.8rem;
  }

  .project-card:hover .project-arrow { opacity: 1; }

  /* CONTACT */
  .contact-bg {
    background: var(--dark-2);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
    margin-top: 3rem;
  }

  .contact-info p {
    font-size: 0.95rem;
    line-height: 1.9;
    color: rgba(245,240,232,0.45);
    font-weight: 300;
    margin-bottom: 2.5rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(201,169,110,0.08);
  }

  .contact-item-icon {
    width: 2.2rem;
    height: 2.2rem;
    border: 1px solid rgba(201,169,110,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .contact-item-label {
    font-size: 0.58rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
  }

  .contact-item-value {
    font-size: 0.88rem;
    color: var(--cream-2);
    font-weight: 300;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-label {
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .form-input {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(201,169,110,0.12);
    color: var(--cream);
    padding: 0.85rem 1rem;
    font-family: 'Jost', sans-serif;
    font-size: 0.88rem;
    font-weight: 300;
    outline: none;
    transition: border-color 0.2s;
    resize: none;
  }

  .form-input::placeholder { color: rgba(245,240,232,0.18); }

  .form-input:focus { border-color: rgba(201,169,110,0.45); }

  /* FOOTER */
  .footer {
    padding: 2.5rem 5rem;
    border-top: 1px solid rgba(201,169,110,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 0.9rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .footer-copy {
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  .footer-tagline {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 0.8rem;
    color: rgba(201,169,110,0.4);
  }

  /* SCROLL ANIM */
  .fade-up {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  .fade-up.visible {
    opacity: 1;
    transform: none;
  }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; }
    .hero-right { display: none; }
    .about-grid, .services-grid, .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .projects-grid { grid-template-columns: 1fr 1fr; }
    .section { padding: 5rem 2rem; }
    .nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .hero-left { padding: 4rem 2rem; }
  }
`

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="portfolio">
      <style>{styles}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          Ernesto <span>Chilala</span>
        </div>
        <ul className="nav-links">
          {['inicio', 'sobre', 'servicos', 'projetos', 'contacto'].map(
            (id, i) => (
              <li key={id}>
                <a onClick={() => scrollTo(id)}>{NAV_LINKS[i]}</a>
              </li>
            ),
          )}
        </ul>
        <button className="nav-cta" onClick={() => scrollTo('contacto')}>
          Contactar
        </button>
      </nav>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Mármore · Granito · Design</div>
          <h1 className="hero-name">
            Ernesto
            <br />
            <span className="last">Chilala</span>
          </h1>
          <p className="hero-tagline">
            SketchUp · Design de Interiores · <span>Modelação 3D</span>
          </p>
          <p className="hero-desc">
            Transformando pedra em <em>experiências únicas</em> — onde a
            precisão do ofício encontra a beleza do design contemporâneo.
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollTo('projetos')}
            >
              Ver Projetos
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('contacto')}>
              Falar Comigo
            </button>
          </div>
          <div className="hero-signature">Ernesto Chilala</div>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
            alt="Interior de mármore premium"
          />
          <div className="hero-qualities">
            {QUALITIES.map((q) => (
              <div className="quality-pill" key={q.title}>
                <div className="quality-pill-icon">{q.icon}</div>
                <div className="quality-pill-text">
                  <strong>{q.title}</strong>
                  <span>{q.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="sobre" className="section">
        <div className="about-grid">
          <FadeUp>
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80"
                alt="Trabalho em mármore"
              />
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <div>
              <div className="section-label">Sobre Mim</div>
              <h2 className="section-title">
                Pedra que conta <em>histórias</em>
              </h2>
              <div className="about-text">
                <p>
                  Sou Ernesto Chilala, especialista em mármore, granito,{' '}
                  <em>modelação 3D no SketchUp</em> e design de interiores.
                </p>
                <p>
                  Combino visualização digital com execução prática para criar
                  ambientes modernos, funcionais e sofisticados — cada projeto
                  pensado ao detalhe, com foco na qualidade, durabilidade e
                  estética.
                </p>
                <p>
                  Do esboço ao acabamento final, o meu trabalho reflete um{' '}
                  <em>compromisso inabalável com a excelência</em> e a
                  satisfação de cada cliente.
                </p>
              </div>
              <div className="stats-row">
                {STATS.map((s) => (
                  <div className="stat-item" key={s.label}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section id="servicos" className="section services-bg">
        <FadeUp>
          <div className="section-label">Serviços</div>
          <h2 className="section-title">
            O que <em>ofereço</em>
          </h2>
        </FadeUp>
        <div className="services-grid">
          <FadeUp delay={80}>
            <div>
              <div className="services-col-title">Mármore &amp; Granito</div>
              {SERVICES_MARBLE.map((s) => (
                <div className="service-item" key={s.label}>
                  <span className="service-icon">{s.icon}</span>
                  <span className="service-name">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={160}>
            <div>
              <div className="services-col-title">SketchUp &amp; Design</div>
              {SERVICES_DESIGN.map((s) => (
                <div className="service-item" key={s.label}>
                  <span className="service-icon">{s.icon}</span>
                  <span className="service-name">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projetos" className="section">
        <FadeUp>
          <div className="section-label">Portfólio</div>
          <h2 className="section-title">
            Projetos <em>realizados</em>
          </h2>
        </FadeUp>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <FadeUp key={p.title} delay={i * 60}>
              <div className="project-card">
                <img src={p.image} alt={p.title} />
                <div className="project-overlay">
                  <div className="project-tag">{p.tag}</div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-cat">{p.category}</div>
                </div>
                <div className="project-arrow">↗</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contacto" className="section contact-bg">
        <div className="contact-grid">
          <FadeUp>
            <div>
              <div className="section-label">Contacto</div>
              <h2 className="section-title">
                Vamos criar <em>juntos</em>
              </h2>
              <div className="contact-info">
                <p>
                  Tem um projeto em mente? Entre em contacto e transformemos a
                  sua visão em realidade — com a qualidade e precisão que o seu
                  espaço merece.
                </p>
              </div>
              <div>
                <div className="contact-item">
                  <div className="contact-item-icon">✉️</div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-value">
                      ernestochilala13@gmail.com
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div>
                    <div className="contact-item-label">Telefone</div>
                    <div className="contact-item-value">+244 928 591 841</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📍</div>
                  <div>
                    <div className="contact-item-label">Localização</div>
                    <div className="contact-item-value">Luanda, Angola</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="O seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="O seu email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Mensagem</label>
                <textarea
                  className="form-input"
                  rows={5}
                  placeholder="Descreva o seu projeto..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                className="btn-primary"
                type="submit"
                style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}
              >
                {sent ? '✓ Mensagem Enviada' : 'Enviar Mensagem'}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">Ernesto Chilala</div>
        <div className="footer-tagline">Design. Precisão. Qualidade.</div>
        <div className="footer-copy">© 2025 · Luanda, Angola</div>
      </footer>
    </div>
  )
}
