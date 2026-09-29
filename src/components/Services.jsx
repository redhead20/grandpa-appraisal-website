import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/appraisalData';
import { IconHome, IconShield, IconFileText, IconAward, IconCheck, IconPhone } from './Icons';

const ICONS = { Home: IconHome, Shield: IconShield, FileText: IconFileText, Award: IconAward };

// Map each service to a real property photo
const SERVICE_PHOTOS = [
  '/images/pdf_p13_img1.jpeg',          // Residential: Colorado suburban home
  '/images/Home-Builder-Colorado-Springs.jpg', // FHA/Mortgage: new construction
  '/images/Bear-Hollow-Cabin-1020x610.jpg',    // Estate: mountain cabin
  '/images/OIP.jpg',                    // PMI/Reviews: colorful houses
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <IconShield size={15} color="var(--accent-sky)" />
            <span>Certified Residential Valuation</span>
          </div>
          <h2 className="section-title">
            Appraisal Services by <span className="blue-gradient-text">Thacker Appraisal Services</span>
          </h2>
          <p className="section-subtitle">
            Todd R. Thacker provides licensed, USPAP-compliant residential real estate appraisals across Metro Denver and 9 surrounding Colorado counties.
          </p>
        </div>

        <div style={styles.grid}>
          {SERVICES.map((svc, idx) => {
            const IconComp = ICONS[svc.icon] || IconHome;
            return (
              <div key={svc.id} className="glass-card" style={styles.card}>
                {/* Photo header */}
                <div style={{ ...styles.photoWrap, backgroundImage: `url(${SERVICE_PHOTOS[idx]})` }}>
                  <div style={styles.photoOverlay} />
                  <div style={styles.photoBadge}>{svc.badge}</div>
                  <div style={styles.photoIcon}><IconComp size={28} color="#fff" /></div>
                </div>

                <div style={styles.body}>
                  <h3 style={styles.title}>{svc.title}</h3>
                  <p style={styles.desc}>{svc.description}</p>

                  <div style={styles.features}>
                    {svc.features.map(f => (
                      <div key={f} style={styles.featRow}>
                        <IconCheck size={15} color="var(--accent-sky)" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}
                  >
                    <IconPhone size={16} />
                    <span>Call 303-909-0809</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' },
  card: { display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 },
  photoWrap: {
    height: '180px', position: 'relative',
    backgroundSize: 'cover', backgroundPosition: 'center',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
    padding: '1rem',
  },
  photoOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,31,53,0.2) 0%, rgba(13,31,53,0.72) 100%)' },
  photoBadge: {
    position: 'relative', zIndex: 1,
    background: 'var(--accent-blue)', color: '#fff',
    padding: '0.2rem 0.7rem', borderRadius: 'var(--radius-full)',
    fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.04em',
  },
  photoIcon: {
    position: 'relative', zIndex: 1,
    width: '44px', height: '44px', borderRadius: '12px',
    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  body: { padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1rem' },
  title: { fontSize: '1.2rem' },
  desc: { color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.55', flexGrow: 1 },
  features: { display: 'flex', flexDirection: 'column', gap: '0.45rem' },
  featRow: { display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-secondary)' },
};
