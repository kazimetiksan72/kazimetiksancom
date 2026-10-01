import React, { useState } from 'react';
import { ArrowUpRight, ArrowUp, EnvelopeSimple, Brain, DeviceMobile, UsersThree, CaretDown, GithubLogo, Phone } from '@phosphor-icons/react';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import { profile } from './profile';
import './styles.css';

function Timeline({ items }) {
  return <div className="timeline">{items.map((item, i) => <article className="timeline-item" key={i}>
    <p className="period">{item.period}</p><div><h3>{item.organization}</h3><p>{item.title}</p>{item.description && <details><summary>Detaylar <CaretDown /></summary><p className="description">{item.description}</p></details>}</div>
  </article>)}</div>;
}
function Project({ project }) {
  return <article className="project"><p className="project-period">{project.period}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>;
}
export default function App() {
  const [expanded, setExpanded] = useState(false);
  return <>
    <a className="skip-link" href="#main">İçeriğe geç</a>
    <header className="wrapper header"><a className="brand" href="#" aria-label="Kazım Etiksan, ana sayfa">KE<span>.</span></a><nav aria-label="Ana menü"><a href="#hakkimda">Hakkımda</a><a href="#deneyim">Deneyim</a><a href="#projeler">Projeler</a><a href="#iletisim">İletişim</a></nav></header>
    <main id="main">
      <section id="hakkimda" className="wrapper hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="greeting">Merhaba, ben</p><h1 id="hero-title">Kazım<br />Etiksan<span>.</span></h1><p className="role">Teknoloji Girişimcisi, danışman ve eğitmen.</p><p className="intro">2013’te kurduğum Piksel Mutfak’ta mobil uygulamalar ve yapay zekâ çözümleri geliştiriyor, deneyimimi eğitimlerle paylaşıyorum.</p><div className="actions"><a className="button secondary" href="#iletisim"><EnvelopeSimple size={22} /> İletişime geç</a></div></div>
        <img className="portrait" src="/kazim-etiksan.webp" alt="Kazım Etiksan’ın siyah beyaz portresi" width="1086" height="1448" fetchPriority="high" />
      </section>
      <section className="wrapper expertise" aria-label="Uzmanlık alanlarım"><p className="eyebrow">Uzmanlık alanlarım</p><div><Brain /><span>Yapay zekâ</span></div><div><DeviceMobile /><span>Mobil uygulamalar</span></div><div><UsersThree /><span>Kurumsal eğitim</span></div></section>
      <section id="deneyim" className="wrapper resume"><div><h2>Deneyim</h2><Timeline items={profile.experience} /></div><div className="education"><h2>Eğitim</h2><Timeline items={profile.education} /></div></section>
      <section id="projeler" className="wrapper projects"><div className="section-heading"><h2>Seçili projeler</h2><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a></div><div className="project-grid">{[profile.projects[1],profile.projects[2],profile.projects[0]].map(p => <Project project={p} key={p.title} />)}</div><button className="more-button" onClick={()=>setExpanded(!expanded)} aria-expanded={expanded} aria-controls="other-projects">{expanded ? 'Daha az göster' : 'Diğer çalışmalarımı gör'}<CaretDown className={expanded ? 'rotated' : ''} /></button><div id="other-projects" hidden={!expanded}><div className="project-grid more-projects">{profile.projects.slice(3).map(p => <Project project={p} key={p.title} />)}</div></div></section>
      <section id="iletisim" className="contact wrapper"><div><p className="eyebrow">İletişim</p><h2>Bir merhaba ile<br />başlayalım<span>.</span></h2><p>Bir proje, eğitim ya da fikir üzerine konuşmak için bana ulaşabilirsin.</p></div><div className="contact-links"><a href={`mailto:${profile.email}`}><EnvelopeSimple />{profile.email}<ArrowUpRight /></a><a href={`tel:${profile.phone.replace(/\s/g,'')}`}><Phone />{profile.phone}<ArrowUpRight /></a><a href={profile.github} target="_blank" rel="noreferrer"><GithubLogo />GitHub<ArrowUpRight /></a></div></section>
    </main><footer className="wrapper footer"><p>© {new Date().getFullYear()} Kazım Etiksan</p><a href="#">Başa dön <ArrowUp size={16}/></a></footer>
  </>;
}
