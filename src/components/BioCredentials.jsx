import React from 'react';
import { BUSINESS_INFO, ABOUT_TEXT } from '../data/appraisalData';
import { IconAward, IconShield, IconCheck, IconMapPin, IconPhone, IconMail } from './Icons';

export default function BioCredentials() {
  return (
    <section id="about-todd" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={styles.grid}>

          {/* Left: Photo + Story */}
          <div style={styles.leftStack}>
            {/* Property photo banner */}
            <div style={styles.photoBanner}>
              <img
                src="/images/pdf_p13_img1.jpeg"
                alt="Colorado residential property appraisal"
                style={styles.bannerImg}
              />
              <div style={styles.bannerOverlay} />
              <div style={styles.bannerTag}>
                <IconShield size={16} color="#fff" />
                <span>State Certified Residential Appraiser</span>
              </div>
            </div>

            {/* Story card */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div className="section-badge" style={{ marginBottom: '1rem' }}>
                <IconAward size={15} color="var(--accent-sky)" />
                <span>About Thacker Appraisal Services Inc.</span>
              </div>

              <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem', lineHeight: '1.25' }}>
                {ABOUT_TEXT.headline}
              </h2>

              <p style={styles.bodyText}>{ABOUT_TEXT.description}</p>

              {/* USPAP blockquote */}
              <div style={styles.quote}>
                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                  "{ABOUT_TEXT.qualifications}"
                </p>
                <footer style={{ marginTop: '0.6rem', fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-sky)' }}>
                  — USPAP Compliance Statement
                </footer>
              </div>

              {/* Counties */}
              <div style={{ marginTop: '1.5rem' }}>
                <div style={styles.countyHeading}>
                  <IconMapPin size={17} color="var(--accent-sky)" />
                  <span>Colorado Counties Served:</span>
                </div>
                <div style={styles.countyGrid}>
                  {BUSINESS_INFO.serviceCounties.map((c, i) => (
                    <span key={i} style={styles.countyPill}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Credentials + Contact */}
          <div style={styles.rightStack}>
            {/* Logo white card */}
            <div className="glass-card" style={styles.logoCard}>
              <div style={styles.logoWhiteBg}>
                <img src="/images/pdf_p7_img1.png" alt="Thacker Appraisal Logo" style={styles.logoImg} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.2rem' }}>{BUSINESS_INFO.appraiserName}</h3>
                <p style={{ color: 'var(--accent-sky)', fontWeight: '700', fontSize: '0.88rem' }}>{BUSINESS_INFO.title}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '0.2rem' }}>{BUSINESS_INFO.name}</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconAward size={20} color="var(--accent-sky)" />
                Credentials & Standing
              </h4>
              <div style={styles.certList}>
                {BUSINESS_INFO.certifications.map((cert, i) => (
                  <div key={i} style={styles.certRow}>
                    <div style={styles.certDot}><IconCheck size={15} color="#fff" /></div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{cert.title}</div>
                      <div style={{ fontSize: '0.77rem', color: 'var(--text-secondary)' }}>{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div className="glass-card" style={{ padding: '1.75rem', border: '1px solid var(--border-highlight)' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '1.15rem' }}>Direct Contact</h4>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} style={styles.contactRow}>
                <div style={styles.contactIcon}><IconPhone size={18} color="var(--accent-sky)" /></div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Direct Line</div>
                  <div style={{ fontWeight: '800', fontSize: '1.15rem', color: 'var(--accent-sky)' }}>{BUSINESS_INFO.phone}</div>
                </div>
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} style={{ ...styles.contactRow, marginTop: '0.75rem' }}>
                <div style={styles.contactIcon}><IconMail size={18} color="var(--accent-blue)" /></div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Email</div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{BUSINESS_INFO.email}</div>
                </div>
              </a>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} className="btn btn-primary" style={{ width: '100%', marginTop: '1.25rem' }}>
                <IconPhone size={16} /><span>Call Todd Thacker</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: { display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '2.5rem', alignItems: 'start' },
  leftStack: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  photoBanner: { position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '200px' },
  bannerImg: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' },
  bannerOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(13,31,53,0.8) 100%)' },
  bannerTag: {
    position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 2,
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    background: 'var(--accent-blue)', color: '#fff',
    padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)',
    fontSize: '0.8rem', fontWeight: '700',
  },
  bodyText: { color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.25rem' },
  quote: {
    background: 'var(--bg-primary)', borderLeft: '4px solid var(--accent-blue)',
    padding: '1.1rem 1.3rem', borderRadius: '0 var(--radius-md) var(--radius-md) 0',
  },
  countyHeading: { display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '0.88rem', marginBottom: '0.75rem' },
  countyGrid: { display: 'flex', flexWrap: 'wrap', gap: '0.45rem' },
  countyPill: {
    background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
    padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)',
    fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)',
  },
  rightStack: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  logoCard: { padding: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' },
  logoWhiteBg: { background: '#fff', borderRadius: 'var(--radius-md)', padding: '1rem 2rem', width: '100%', textAlign: 'center' },
  logoImg: { height: '70px', width: 'auto', margin: '0 auto', objectFit: 'contain' },
  certList: { display: 'flex', flexDirection: 'column', gap: '0.85rem' },
  certRow: { display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'var(--bg-secondary)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' },
  certDot: { width: '30px', height: '30px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  contactRow: { display: 'flex', alignItems: 'center', gap: '0.85rem' },
  contactIcon: { width: '40px', height: '40px', borderRadius: '10px', background: 'var(--accent-blue-light)', border: '1px solid var(--border-highlight)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
};
