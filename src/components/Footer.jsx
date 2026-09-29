import React from 'react';
import { BUSINESS_INFO } from '../data/appraisalData';
import { IconPhone, IconMail, IconMapPin, IconClock, IconShield } from './Icons';
import { publicAsset } from '../assets';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Photo strip above footer */}
      <div style={styles.photoStrip}>
        {[
          publicAsset('/images/pdf_p13_img1.jpeg'),
          publicAsset('/images/Bear-Hollow-Cabin-1020x610.jpg'),
          publicAsset('/images/OIP.jpg'),
          publicAsset('/images/Row houses.jpg'),
        ].map((src, i) => (
          <div key={i} style={{ ...styles.stripPhoto, backgroundImage: `url(${src})` }} />
        ))}
        <div style={styles.stripOverlay} />
      </div>

      <div style={styles.main}>
        <div className="container" style={styles.grid}>
          {/* Brand */}
          <div>
            <div style={styles.logoBg}>
              <img src={publicAsset('/images/pdf_p7_img1.png')} alt="Thacker Appraisal Logo" style={styles.logoImg} />
            </div>
            <p style={styles.tagline}>
              Independent, USPAP-certified residential real estate appraisals across Metro Denver and surrounding Colorado counties.
            </p>
            <div style={styles.badge}>
              <IconShield size={14} color="var(--accent-sky)" />
              <span>State Certified • FHA Approved</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={styles.colTitle}>Services</h4>
            <ul style={styles.list}>
              {['1-4 Unit Residential & Condos', 'FHA & Mortgage Lending', 'Divorce Settlement Appraisals', 'Estate & Probate Valuations', 'PMI Removal Appraisals', 'Appraisal Reviews'].map(item => (
                <li key={item}><a href="#services" style={styles.link}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Counties */}
          <div>
            <h4 style={styles.colTitle}>Coverage Area</h4>
            <div style={styles.countyList}>
              {BUSINESS_INFO.serviceCounties.map((c, i) => (
                <div key={i} style={styles.countyRow}>
                  <IconMapPin size={12} color="var(--accent-sky)" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={styles.colTitle}>Contact Todd Directly</h4>
            <div style={styles.contactStack}>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} style={styles.contactItem}>
                <IconPhone size={16} color="var(--accent-sky)" />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Phone</div>
                  <div style={{ fontWeight: '800', color: 'var(--accent-sky)', fontSize: '1rem' }}>{BUSINESS_INFO.phone}</div>
                </div>
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} style={styles.contactItem}>
                <IconMail size={16} color="var(--accent-blue)" />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Email</div>
                  <div style={{ fontSize: '0.85rem' }}>{BUSINESS_INFO.email}</div>
                </div>
              </a>
              <div style={styles.contactItem}>
                <IconClock size={16} color="var(--accent-sky)" />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Hours</div>
                  <div style={{ fontSize: '0.85rem' }}>{BUSINESS_INFO.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</span>
          <span>{BUSINESS_INFO.appraiserName} • {BUSINESS_INFO.title}</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { borderTop: '1px solid var(--border-color)' },
  photoStrip: { position: 'relative', display: 'flex', height: '140px', overflow: 'hidden' },
  stripPhoto: { flex: 1, backgroundSize: 'cover', backgroundPosition: 'center' },
  stripOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, var(--bg-secondary) 100%)' },
  main: { background: 'var(--bg-secondary)', paddingTop: '3rem', paddingBottom: '3rem' },
  grid: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: '2.5rem' },
  logoBg: { background: '#fff', borderRadius: 'var(--radius-md)', padding: '0.85rem 1.25rem', display: 'inline-block', marginBottom: '1rem' },
  logoImg: { height: '50px', width: 'auto', objectFit: 'contain' },
  tagline: { color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--accent-blue-light)', color: 'var(--accent-sky)', padding: '0.3rem 0.7rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700' },
  colTitle: { fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' },
  list: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  link: { color: 'var(--text-secondary)', fontSize: '0.85rem', transition: 'color 0.2s' },
  countyList: { display: 'flex', flexDirection: 'column', gap: '0.35rem' },
  countyRow: { display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-secondary)' },
  contactStack: { display: 'flex', flexDirection: 'column', gap: '0.9rem' },
  contactItem: { display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' },
  copyright: { background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', padding: '1.25rem 0', fontSize: '0.8rem', color: 'var(--text-muted)' },
};
