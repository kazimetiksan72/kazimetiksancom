import React from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './profile';
import './styles.css';

const Arrow = () => <span aria-hidden="true">↗</span>;

function Timeline({ items, empty }) {
  return items.length ? <div className="timeline">{items.map((item, index) => <article className="timeline-item" key={`${item.title}-${index}`}>
    <p className="period">{item.period}</p><div><h3>{item.title}</h3><p className="organization">{item.organization}</p><p>{item.description}</p></div>
  </article>)}</div> : <p className="empty">{empty}</p>;
}

function App() {
  return <>
    <a className="skip-link" href="#main">İçeriğe geç</a>
    <header className="header wrapper">
      <a className="brand" href="#" aria-label={`${profile.name}, ana sayfa`}>{profile.initials}<span>.</span></a>
      <nav aria-label="Ana menü"><a href="#hakkimda">Hakkımda</a><a href="#deneyim">Özgeçmiş</a><a href="#calismalar">Çalışmalar</a></nav>
      <a className="nav-contact" href="#iletisim">İletişim <Arrow /></a>
    </header>
    <main id="main">
      <section className="hero wrapper" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" /> {profile.title}</p>
          <h1 id="hero-title">Merhaba,<br />ben <em>{profile.name.split(' ')[0]}.</em></h1>
          <p className="intro">{profile.intro}</p>
          <div className="actions"><a className="button" href="#calismalar">Çalışmaları keşfet <Arrow /></a><a className="text-link" href="#hakkimda">Beni tanı <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="art-label">KİŞİSEL BİR ALAN / 01</div><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="art-monogram">{profile.initials}<span>.</span></div><div className="art-caption"><span>{profile.name}</span><span>HER ZAMAN İLERİYE ↗</span></div></div>
        <div className="hero-bottom"><span>Merak. Emek. Yeni başlangıçlar.</span><a href="#hakkimda">Aşağı kaydır <span aria-hidden="true">↓</span></a></div>
      </section>
      <section id="hakkimda" className="section wrapper about">
        <div className="section-label"><span>01 / HAKKIMDA</span></div>
        <div><h2>İşin arkasındaki <em>insan.</em></h2><p className="large-copy">{profile.about || 'Bu sayfanın hikâyesi henüz yazılıyor.'}</p>{profile.bio && <p className="muted bio">{profile.bio}</p>}{!profile.about && <p className="muted">Biyografi, uzmanlık alanları ve özgeçmiş bilgileri yakında burada.</p>}
          {!!profile.skills.length && <div className="tags">{profile.skills.map(skill => <span key={skill}>{skill}</span>)}</div>}
          {profile.cvUrl && <a className="text-link" href={profile.cvUrl} download>Özgeçmişimi indir <span aria-hidden="true">↓</span></a>}
        </div>
      </section>
      <section id="deneyim" className="section wrapper resume">
        <div className="section-heading"><p className="section-label">02 / ÖZGEÇMİŞ</p><h2>Bugüne uzanan <em>yol.</em></h2></div>
        <div className="resume-grid"><div><h3 className="subheading">Deneyim <span>↗</span></h3><Timeline items={profile.experience} empty="Profesyonel deneyimler yakında eklenecek." /></div><div><h3 className="subheading">Eğitim <span>↗</span></h3><Timeline items={profile.education} empty="Eğitim bilgileri yakında eklenecek." /></div></div>
      </section>
      <section id="calismalar" className="section wrapper projects">
        <div className="section-heading"><p className="section-label">03 / ÇALIŞMALAR</p><div className="heading-row"><h2>Fikirden <em>gerçeğe.</em></h2><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub profilim <Arrow /></a></div></div>
        {profile.projects.length ? <div className="project-grid">{profile.projects.map((project, index) => <article className="project-card" key={`${project.title}-${index}`}><span className="project-index">{String(index + 1).padStart(2, '0')}</span><p className="project-period">{project.period}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags?.map(tag => <span key={tag}>{tag}</span>)}</div>{project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Projeyi incele <Arrow /></a>}</article>)}</div> : <div className="project-placeholder"><span className="placeholder-mark" aria-hidden="true">↗</span><div><h3>Yeni çalışmalar için yer açılıyor.</h3><p>Seçili projeler yakında burada. Mevcut depoları GitHub profilimde inceleyebilirsin.</p></div><a href={profile.github} target="_blank" rel="noreferrer" className="round-link" aria-label="GitHub profilini aç"><Arrow /></a></div>}
      </section>
      <section id="iletisim" className="contact"><div className="wrapper"><p className="eyebrow">04 / İLETİŞİM</p><div className="contact-row"><h2>Bir merhaba,<br /><em>yeni bir başlangıç.</em></h2><a className="contact-circle" href={profile.email ? `mailto:${profile.email}` : profile.github} aria-label={profile.email ? 'E-posta gönder' : 'GitHub profilini ziyaret et'}><Arrow /></a></div><div className="contact-links">{profile.phone && <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone} <Arrow /></a>}{profile.email && <a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>}<a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>}</div></div></section>
    </main>
    <footer className="wrapper footer"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#">Başa dön ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
