import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data/appraisalData';
import { IconChevronDown, IconSparkles, IconPhone, IconMail } from './Icons';

export default function TestimonialsFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <IconSparkles size={16} color="var(--accent-gold)" />
            <span>Appraisal Knowledge Base</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Common questions regarding residential real estate appraisals in Metro Denver and surrounding Colorado counties.
          </p>
        </div>

        <div style={styles.faqList}>
          {FAQS.map((faq, idx) => (
            <div key={idx} className="glass-card" style={styles.faqItem}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={styles.faqQuestionBtn}
              >
                <span style={{ fontWeight: '700', fontSize: '1.05rem', textAlign: 'left' }}>{faq.question}</span>
                <div style={{
                  transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease'
                }}>
                  <IconChevronDown size={20} color="var(--accent-gold)" />
                </div>
              </button>

              {openFaq === idx && (
                <div style={styles.faqAnswer}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Direct Contact Banner */}
        <div id="contact" className="glass-card" style={styles.contactBanner}>
          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Have Questions or Need an Appraisal?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Contact Todd Thacker directly to discuss your property and schedule an appraisal.
            </p>
          </div>
          <div style={styles.contactBannerActions}>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="btn btn-primary">
              <IconPhone size={18} />
              <span>Call 303-909-0809</span>
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="btn btn-secondary">
              <IconMail size={18} color="var(--accent-blue)" />
              <span>Email Todd</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  faqList: {
    maxWidth: '840px',
    margin: '0 auto 4rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  faqItem: {
    overflow: 'hidden'
  },
  faqQuestionBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.35rem 1.75rem',
    background: 'transparent',
    color: 'var(--text-primary)',
    cursor: 'pointer'
  },
  faqAnswer: {
    padding: '0 1.75rem 1.5rem 1.75rem',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '1rem'
  },
  contactBanner: {
    padding: '2.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    border: '1px solid var(--border-highlight)'
  },
  contactBannerActions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }
};
