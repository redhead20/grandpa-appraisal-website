import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/appraisalData';
import { IconMapPin, IconPhone, IconCheck, IconSparkles } from './Icons';

export default function ScopeExplorer() {
  const [selectedCounty, setSelectedCounty] = useState(BUSINESS_INFO.serviceCounties[3]);
  const [selectedPropType, setSelectedPropType] = useState('Single-Family Residence');
  const [selectedPurpose, setSelectedPurpose] = useState('Mortgage Lending / Refinance');

  const propTypes = ['Single-Family Residence', '2-4 Unit Multi-Family', 'Condominium / Townhouse', 'Vacant Residential Land'];
  const purposes = ['Mortgage Lending / Refinance (FHA)', 'Estate Settlement / Date of Death', 'Divorce Settlement Appraisal', 'PMI Removal', 'Appraisal Review / Second Opinion'];

  return (
    <section id="counties-covered" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <IconMapPin size={15} color="var(--accent-sky)" />
            <span>Coverage Area & Scope Finder</span>
          </div>
          <h2 className="section-title">
            Find Out if <span className="blue-gradient-text">Your Property Qualifies</span>
          </h2>
          <p className="section-subtitle">
            Select your Colorado county and property type to confirm service coverage, then call Todd directly for a custom fee quote.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Controls */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            {/* Step 1 */}
            <div style={styles.step}>
              <label style={styles.stepLabel}><span style={styles.stepNum}>1</span>Select Your County</label>
              <select value={selectedCounty} onChange={e => setSelectedCounty(e.target.value)} style={styles.select}>
                {BUSINESS_INFO.serviceCounties.map((c, i) => <option key={i}>{c}</option>)}
              </select>
            </div>

            {/* Step 2 */}
            <div style={styles.step}>
              <label style={styles.stepLabel}><span style={styles.stepNum}>2</span>Property Type</label>
              <div style={styles.btnGroup}>
                {propTypes.map(t => (
                  <button key={t} onClick={() => setSelectedPropType(t)}
                    style={{ ...styles.optBtn, ...(selectedPropType === t ? styles.optBtnActive : {}) }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div style={styles.step}>
              <label style={styles.stepLabel}><span style={styles.stepNum}>3</span>Appraisal Purpose</label>
              <div style={styles.btnGroup}>
                {purposes.map(p => (
                  <button key={p} onClick={() => setSelectedPurpose(p)}
                    style={{ ...styles.optBtn, ...(selectedPurpose === p ? styles.optBtnActive : {}) }}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="glass-card" style={{ ...styles.resultCard }}>
            <div style={styles.resultHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconSparkles size={18} color="var(--accent-sky)" />
                <span style={{ fontWeight: '700' }}>Coverage Status</span>
              </div>
              <span style={styles.coveredBadge}>✓ COVERED</span>
            </div>

            <div style={{ margin: '1.5rem 0' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>County Selected:</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-sky)', marginBottom: '0.25rem' }}>{selectedCounty}</div>
              <div style={{ fontSize: '0.88rem' }}>Property: <strong>{selectedPropType}</strong></div>
              <div style={{ fontSize: '0.88rem', marginTop: '0.2rem' }}>Purpose: <strong>{selectedPurpose}</strong></div>
            </div>

            <div style={styles.coveragePoints}>
              {['State Certified Residential Appraiser', 'FHA Approved Lender Roster', 'USPAP Compliant Reports', 'Custom Homes & Mountain Communities'].map(p => (
                <div key={p} style={styles.coverPoint}>
                  <IconCheck size={15} color="var(--accent-sky)" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div style={styles.calloutBox}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                Custom homes and outlying mountain locations require individual scope evaluation. Call Todd directly for a personalized fee quote:
              </p>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g,'')}`} className="btn btn-primary" style={{ width: '100%' }}>
                <IconPhone size={16} />
                <span>Call Todd: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: { display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2.5rem', alignItems: 'start' },
  step: { marginBottom: '1.75rem' },
  stepLabel: { display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: '700', fontSize: '0.98rem', marginBottom: '0.85rem' },
  stepNum: {
    width: '24px', height: '24px', borderRadius: '50%',
    background: 'var(--accent-blue-light)', color: 'var(--accent-sky)',
    border: '1px solid rgba(74,122,181,0.4)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '800',
  },
  select: {
    width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)',
    background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
    color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '600', outline: 'none',
  },
  btnGroup: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '0.55rem' },
  optBtn: {
    padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-md)',
    background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
    color: 'var(--text-secondary)', fontSize: '0.86rem', fontWeight: '600', textAlign: 'left', cursor: 'pointer', transition: 'all 0.18s',
  },
  optBtnActive: { background: 'var(--accent-blue-light)', borderColor: 'var(--accent-blue)', color: 'var(--text-primary)' },
  resultCard: { padding: '2rem', border: '1px solid var(--border-highlight)' },
  resultHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' },
  coveredBadge: {
    background: 'rgba(74,122,181,0.15)', color: 'var(--accent-sky)',
    padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)', fontSize: '0.72rem', fontWeight: '800',
  },
  coveragePoints: { display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' },
  coverPoint: { display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-secondary)' },
  calloutBox: { background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '1.15rem', borderRadius: 'var(--radius-md)' },
};
