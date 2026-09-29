import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/appraisalData';
import { IconPhone, IconMail, IconSun, IconMoon } from './Icons';
import { publicAsset } from '../assets';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div className="container" style={styles.topBarInner}>
          <div style={styles.topBarLeft}>
            <span style={styles.topBarBadge}>STATE CERTIFIED RESIDENTIAL APPRAISER</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>FHA Approved • Metro Denver & Surrounding Counties</span>
          </div>
          <div style={styles.topBarRight}>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} style={styles.topLink}>
              <IconPhone size={13} color="var(--accent-sky)" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <a href={`mailto:${BUSINESS_INFO.email}`} style={styles.topLink}>
              <IconMail size={13} color="var(--accent-sky)" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container" style={styles.navRow}>
        {/* Logo */}
        <a href="#" style={styles.brand}>
          <img
            src={publicAsset('/images/pdf_p7_img1.png')}
            alt="Thacker Appraisal Services Inc. Logo"
            style={styles.logoImg}
          />
        </a>

        {/* Desktop Links */}
        <div style={styles.navLinks}>
          {['Services', 'Counties Covered', 'About Todd', 'FAQ', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/ /g, '-')}`}
              style={styles.navLink}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div style={styles.actions}>
          <button onClick={toggleTheme} style={styles.themeBtn} title="Toggle theme">
            {theme === 'dark'
              ? <IconSun size={18} color="var(--accent-sky)" />
              : <IconMoon size={18} color="var(--accent-blue)" />}
          </button>
          <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
            <IconPhone size={16} />
            <span>Call Now</span>
          </a>
          {/* Hamburger */}
          <button onClick={() => setMobileMenuOpen(o => !o)} style={styles.hamburger}>
            {[0,1,2].map(i => <span key={i} style={styles.hLine} />)}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={styles.drawer}>
          {['services','counties-covered','about-todd','faq','contact'].map(id => (
            <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} style={styles.drawerLink}>
              {id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}
            </a>
          ))}
          <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} className="btn btn-primary" style={{ marginTop: '0.5rem', width:'100%' }}>
            <IconPhone size={18}/><span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky', top: 0, zIndex: 100,
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid var(--border-color)',
  },
  topBar: {
    background: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-color)',
    padding: '0.35rem 0',
  },
  topBarInner: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem',
  },
  topBarLeft: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  topBarBadge: {
    background: 'var(--accent-blue-light)', color: 'var(--accent-sky)',
    padding: '0.1rem 0.55rem', borderRadius: '4px', fontWeight: '700', fontSize: '0.7rem',
    letterSpacing: '0.04em',
  },
  topBarRight: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  topLink: {
    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
    color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.8rem',
  },
  navRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: '0.7rem', paddingBottom: '0.7rem',
  },
  brand: { display: 'flex', alignItems: 'center' },
  logoImg: { height: '70px', width: 'auto', objectFit: 'contain', filter: 'var(--logo-filter, none)' },
  navLinks: { display: 'flex', gap: '1.75rem', alignItems: 'center' },
  navLink: { fontSize: '0.93rem', fontWeight: '500', color: 'var(--text-secondary)', transition: 'color 0.2s' },
  actions: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  themeBtn: {
    width: '38px', height: '38px', borderRadius: '10px',
    background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  hamburger: {
    display: 'none', flexDirection: 'column', gap: '4px',
    background: 'transparent', padding: '8px',
  },
  hLine: { display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px' },
  drawer: {
    padding: '1.5rem', background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-color)',
    display: 'flex', flexDirection: 'column', gap: '1rem',
  },
  drawerLink: { fontSize: '1.05rem', fontWeight: '600', padding: '0.4rem 0', borderBottom: '1px solid var(--border-color)' },
};
