import React from 'react';
import { BUSINESS_INFO } from '../data/appraisalData';
import { IconShield, IconPhone, IconMail, IconCheck } from './Icons';
import { publicAsset } from '../assets';

export default function Hero() {
  return (
    <section style={styles.heroSection}>
      {/* Full-bleed cabin photo background */}
      <div style={styles.heroBg} />
      <div style={styles.heroOverlay} />

      <div className="container" style={styles.heroInner}>
        {/* Left: Headline & CTA */}
        <div style={styles.leftCol}>
          <div className="section-badge" style={{ marginBottom: '1.25rem' }}>
            <IconShield size={15} color="var(--accent-sky)" />
            <span>State Certified • FHA Approved Appraiser</span>
          </div>

          <h1 style={styles.headline}>
            Colorado Real Estate Appraisals <span className="blue-gradient-text">You Can Trust.</span>
          </h1>

          <p style={styles.sub}>
            {BUSINESS_INFO.heroSubtitle}
          </p>

          <div style={styles.checks}>
            {[
              '1-4 Unit Residential & Condos',
              'FHA & Conventional Mortgage',
              'Estate & Date-of-Death Valuations',
              'Divorce Settlement Appraisals',
            ].map(txt => (
              <div key={txt} style={styles.checkRow}>
                <span style={styles.checkDot}><IconCheck size={14} color="#fff" /></span>
                <span>{txt}</span>
              </div>
            ))}
          </div>

          <div style={styles.ctaRow}>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} className="btn btn-primary" style={styles.primaryBtn}>
              <IconPhone size={20} />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="btn btn-secondary">
              <IconMail size={18} />
              <span>Send Email</span>
            </a>
          </div>

          <div style={styles.hoursNote}>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Office Hours:</span>
            <strong style={{ color: '#fff' }}>{BUSINESS_INFO.hours}</strong>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <span style={{ color: 'var(--accent-sky)' }}>{BUSINESS_INFO.serviceRegion}</span>
          </div>
        </div>

        {/* Right: Glass credentials card */}
        <div style={styles.rightCol}>
          <div className="glass-card" style={styles.credCard}>
            {/* Logo inside card */}
            <div style={styles.cardLogoWrap}>
              <img src={publicAsset('/images/pdf_p7_img1.png')} alt="Thacker Appraisal Logo" style={styles.cardLogo} />
            </div>

            <div style={styles.divider} />

            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{BUSINESS_INFO.appraiserName}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--accent-sky)', fontWeight: '700', marginBottom: '1.5rem' }}>
              {BUSINESS_INFO.title}
            </p>

            {/* Three stat boxes */}
            <div style={styles.statsGrid}>
              {[
                { value: 'Certified', label: 'State Licensed Appraiser' },
                { value: 'FHA', label: 'Approved Roster Appraiser' },
                { value: '9', label: 'Colorado Counties Covered' },
              ].map(s => (
                <div key={s.label} style={styles.statBox}>
                  <div style={styles.statValue}>{s.value}</div>
                  <div style={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div style={styles.contactBox}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Direct Appraisal Inquiries:</span>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} style={styles.bigPhone}>
                {BUSINESS_INFO.phone}
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} style={{ fontSize: '0.85rem', color: 'var(--accent-sky)' }}>
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: { position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', padding: '5rem 0' },
  heroBg: {
    position: 'absolute', inset: 0,
    backgroundImage: `url(${publicAsset('/images/Bear-Hollow-Cabin-1020x610.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    zIndex: 0,
  },
  heroOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(105deg, rgba(8,20,40,0.92) 0%, rgba(13,31,53,0.78) 55%, rgba(8,20,40,0.55) 100%)',
    zIndex: 1,
  },
  heroInner: {
    position: 'relative', zIndex: 2,
    display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '3.5rem', alignItems: 'center',
  },
  leftCol: { display: 'flex', flexDirection: 'column' },
  headline: { fontSize: '3rem', letterSpacing: '-0.03em', marginBottom: '1.25rem', lineHeight: '1.15', color: '#fff' },
  sub: { fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '560px' },
  checks: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem 1.5rem', marginBottom: '2.25rem' },
  checkRow: { display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.93rem', color: 'rgba(255,255,255,0.85)', fontWeight: '500' },
  checkDot: {
    width: '24px', height: '24px', borderRadius: '50%',
    background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  ctaRow: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' },
  primaryBtn: { padding: '0.95rem 2rem', fontSize: '1.05rem' },
  hoursNote: { display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.87rem', flexWrap: 'wrap' },
  rightCol: {},
  credCard: { padding: '2.25rem', borderColor: 'rgba(74,122,181,0.3)' },
  cardLogoWrap: { background: '#fff', borderRadius: 'var(--radius-md)', padding: '1rem 1.5rem', textAlign: 'center', marginBottom: '1.5rem' },
  cardLogo: { height: '60px', width: 'auto', margin: '0 auto', objectFit: 'contain' },
  divider: { height: '1px', background: 'var(--border-color)', marginBottom: '1.25rem' },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' },
  statBox: {
    background: 'var(--bg-secondary)', padding: '0.85rem 0.5rem',
    borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center',
  },
  statValue: { fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: 'var(--accent-sky)' },
  statLabel: { fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: '1.3' },
  contactBox: {
    background: 'var(--accent-blue-light)', border: '1px solid var(--border-highlight)',
    borderRadius: 'var(--radius-md)', padding: '1.1rem', textAlign: 'center',
    display: 'flex', flexDirection: 'column', gap: '0.35rem',
  },
  bigPhone: { fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: '800', color: 'var(--accent-sky)' },
};
