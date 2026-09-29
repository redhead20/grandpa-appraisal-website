import React, { useState } from 'react';
import { CALCULATOR_CONFIG } from '../data/appraisalData';
import { IconCalculator, IconClock, IconCheck, IconArrowRight, IconSparkles } from './Icons';

export default function FeeCalculator({ onSelectCalculatedQuote }) {
  const [selectedPropertyType, setSelectedPropertyType] = useState(0);
  const [selectedSqftRange, setSelectedSqftRange] = useState(0);
  const [selectedPurpose, setSelectedPurpose] = useState(0);

  // Compute calculated fee & turnaround
  const propConfig = CALCULATOR_CONFIG.propertyTypes[selectedPropertyType];
  const sqftConfig = CALCULATOR_CONFIG.sqftRanges[selectedSqftRange];
  const purposeConfig = CALCULATOR_CONFIG.purposes[selectedPurpose];

  const calculatedBase = Math.round((propConfig.baseFee + sqftConfig.feeAdd + purposeConfig.priceAdd));
  const feeMin = calculatedBase;
  const feeMax = Math.round(calculatedBase * 1.12);
  const estDays = propConfig.estDays;

  const handleBookWithEstimate = () => {
    onSelectCalculatedQuote({
      propertyType: propConfig.label,
      sqftRange: sqftConfig.label,
      purpose: purposeConfig.label,
      estimatedFee: `$${feeMin} - $${feeMax}`,
      estimatedDays: `${estDays} Business Days`
    });
  };

  return (
    <section id="calculator" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <IconSparkles size={16} color="var(--accent-gold)" />
            <span>Instant Valuation Estimator</span>
          </div>
          <h2 className="section-title">
            Interactive Appraisal Fee & <span className="gold-gradient-text">Timeline Calculator</span>
          </h2>
          <p className="section-subtitle">
            Get an instant transparent estimate for your appraisal fee and turnaround timeline in 3 simple steps.
          </p>
        </div>

        <div style={styles.calculatorGrid}>
          {/* Controls Column */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            {/* Step 1: Property Type */}
            <div style={styles.stepBlock}>
              <label style={styles.stepLabel}>
                <span style={styles.stepNum}>1</span>
                <span>Select Property Type</span>
              </label>
              <div style={styles.optionsGrid}>
                {CALCULATOR_CONFIG.propertyTypes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPropertyType(index)}
                    style={{
                      ...styles.optionBtn,
                      ...(selectedPropertyType === index ? styles.optionBtnActive : {})
                    }}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Square Footage */}
            <div style={styles.stepBlock}>
              <label style={styles.stepLabel}>
                <span style={styles.stepNum}>2</span>
                <span>Property Size (Square Footage)</span>
              </label>
              <div style={styles.optionsGrid}>
                {CALCULATOR_CONFIG.sqftRanges.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSqftRange(index)}
                    style={{
                      ...styles.optionBtn,
                      ...(selectedSqftRange === index ? styles.optionBtnActive : {})
                    }}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Purpose */}
            <div style={styles.stepBlock}>
              <label style={styles.stepLabel}>
                <span style={styles.stepNum}>3</span>
                <span>Appraisal Purpose</span>
              </label>
              <div style={styles.optionsGrid}>
                {CALCULATOR_CONFIG.purposes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPurpose(index)}
                    style={{
                      ...styles.optionBtn,
                      ...(selectedPurpose === index ? styles.optionBtnActive : {})
                    }}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="glass-card" style={styles.resultsCard}>
            <div style={styles.resultsCardHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <IconCalculator size={22} color="var(--accent-gold)" />
                <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Instant Estimate Summary</span>
              </div>
              <span style={styles.liveBadge}>LIVE QUOTE</span>
            </div>

            <div style={{ margin: '1.75rem 0' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Estimated Appraisal Fee</div>
              <div style={styles.feeAmount}>
                ${feeMin} <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>-</span> ${feeMax}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginTop: '0.2rem' }}>
                No hidden charges • Full USPAP Compliant Deliverable
              </div>
            </div>

            <div style={styles.infoRow}>
              <div style={styles.infoBox}>
                <IconClock size={20} color="var(--accent-gold)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Turnaround Time</div>
                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{estDays} Business Days</div>
                </div>
              </div>
            </div>

            {/* Selection Summary Tags */}
            <div style={styles.summaryBox}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                SELECTED SPECIFICATIONS:
              </div>
              <div style={styles.tagList}>
                <span style={styles.tag}>{propConfig.label}</span>
                <span style={styles.tag}>{sqftConfig.label}</span>
                <span style={styles.tag}>{purposeConfig.label}</span>
              </div>
            </div>

            {/* Included Deliverables List */}
            <div style={styles.deliverablesList}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem' }}>Included Deliverables:</div>
              <div style={styles.delivItem}><IconCheck size={14} color="var(--accent-gold)" /> Full Physical Property Inspection</div>
              <div style={styles.delivItem}><IconCheck size={14} color="var(--accent-gold)" /> Certified Fannie Mae / USPAP Form Report</div>
              <div style={styles.delivItem}><IconCheck size={14} color="var(--accent-gold)" /> Paired Sales Adjustment Grid & Maps</div>
            </div>

            {/* CTA */}
            <button onClick={handleBookWithEstimate} className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
              <span>Book Inspection With This Quote</span>
              <IconArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  calculatorGrid: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: '2.5rem',
    alignItems: 'start'
  },
  stepBlock: {
    marginBottom: '2rem'
  },
  stepLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.05rem',
    fontWeight: '700',
    marginBottom: '1rem'
  },
  stepNum: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    background: 'var(--accent-gold-light)',
    color: 'var(--accent-gold)',
    border: '1px solid rgba(251, 191, 36, 0.4)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    fontWeight: '800'
  },
  optionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '0.65rem'
  },
  optionBtn: {
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-md)',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    fontWeight: '600',
    textAlign: 'left',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  },
  optionBtnActive: {
    background: 'var(--accent-gold-light)',
    borderColor: 'var(--accent-gold)',
    color: 'var(--text-primary)'
  },
  resultsCard: {
    padding: '2rem',
    border: '1px solid var(--border-highlight)'
  },
  resultsCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '1rem'
  },
  liveBadge: {
    background: 'var(--accent-gold-light)',
    color: 'var(--accent-gold)',
    padding: '0.2rem 0.6rem',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.7rem',
    fontWeight: '800',
    letterSpacing: '0.05em'
  },
  feeAmount: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    lineHeight: '1.1'
  },
  infoRow: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.25rem'
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'var(--bg-secondary)',
    padding: '0.85rem 1.25rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    width: '100%'
  },
  summaryBox: {
    background: 'var(--bg-secondary)',
    padding: '1rem',
    borderRadius: 'var(--radius-md)',
    marginBottom: '1.25rem'
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  tag: {
    background: 'rgba(255, 255, 255, 0.06)',
    padding: '0.25rem 0.6rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  deliverablesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  },
  delivItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.82rem',
    color: 'var(--text-secondary)'
  }
};
