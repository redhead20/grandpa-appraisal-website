import React, { useState } from 'react';
import { SAMPLE_REPORTS } from '../data/appraisalData';
import { IconFileText, IconCheck, IconShield, IconSparkles } from './Icons';

export default function SampleReportShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeReport = SAMPLE_REPORTS[activeTab];

  return (
    <section id="reports" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <IconFileText size={16} color="var(--accent-gold)" />
            <span>Transparent Deliverables</span>
          </div>
          <h2 className="section-title">
            Sample Appraisal Report <span className="gold-gradient-text">Excerpts</span>
          </h2>
          <p className="section-subtitle">
            See the exact level of rigor, paired sales grid depth, and clear documentation that Bob includes in every appraisal report.
          </p>
        </div>

        {/* Tab Selection */}
        <div style={styles.tabBar}>
          {SAMPLE_REPORTS.map((report, idx) => (
            <button
              key={report.id}
              onClick={() => setActiveTab(idx)}
              style={{
                ...styles.tabBtn,
                ...(activeTab === idx ? styles.tabBtnActive : {})
              }}
            >
              <IconFileText size={18} />
              <span>{report.title}</span>
            </button>
          ))}
        </div>

        {/* Active Report Showcase Box */}
        <div className="glass-card" style={styles.showcaseCard}>
          <div style={styles.showcaseHeader}>
            <div>
              <span style={styles.reportBadge}>{activeReport.purpose}</span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem' }}>{activeReport.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Property Type: <strong>{activeReport.propertyType}</strong>
              </p>
            </div>
            <div style={styles.appraisedValueBox}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Sample Final Valuation</span>
              <div style={styles.valueText}>{activeReport.appraisedValue}</div>
            </div>
          </div>

          <div style={{ height: '1px', background: 'var(--border-color)', margin: '1.5rem 0' }}></div>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
            Key Included Highlights & Analysis:
          </h4>

          <div style={styles.highlightsGrid}>
            {activeReport.keyHighlights.map((highlight, idx) => (
              <div key={idx} style={styles.highlightCard}>
                <div style={styles.checkWrapper}>
                  <IconCheck size={16} color="var(--accent-gold)" />
                </div>
                <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>{highlight}</span>
              </div>
            ))}
          </div>

          <div style={styles.sampleFooter}>
            <IconShield size={20} color="var(--accent-gold)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              All client names and exact street numbers are redacted to preserve strict confidentiality under USPAP Ethics Rules.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  tabBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2.5rem',
    flexWrap: 'wrap'
  },
  tabBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.85rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    fontWeight: '600',
    transition: 'all 0.2s'
  },
  tabBtnActive: {
    background: 'var(--accent-gold-light)',
    borderColor: 'var(--accent-gold)',
    color: 'var(--text-primary)'
  },
  showcaseCard: {
    padding: '2.5rem',
    border: '1px solid var(--border-highlight)'
  },
  showcaseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '1.5rem'
  },
  reportBadge: {
    background: 'var(--accent-gold-light)',
    color: 'var(--accent-gold)',
    padding: '0.35rem 0.85rem',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.8rem',
    fontWeight: '700'
  },
  appraisedValueBox: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    padding: '0.85rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    textAlign: 'right'
  },
  valueText: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'var(--accent-gold)'
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  highlightCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'var(--bg-secondary)',
    padding: '1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)'
  },
  checkWrapper: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'var(--accent-gold-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  sampleFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'var(--bg-secondary)',
    padding: '0.85rem 1.25rem',
    borderRadius: 'var(--radius-md)'
  }
};
