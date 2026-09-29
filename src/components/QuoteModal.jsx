import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, CALCULATOR_CONFIG } from '../data/appraisalData';
import { IconX, IconCheck, IconCalculator, IconCalendar, IconPhone, IconMail, IconSparkles } from './Icons';

export default function QuoteModal({ isOpen, onClose, preselectedQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyAddress: '',
    county: BUSINESS_INFO.serviceCounties[0],
    propertyType: CALCULATOR_CONFIG.propertyTypes[0].label,
    purpose: CALCULATOR_CONFIG.purposes[0].label,
    preferredDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  useEffect(() => {
    if (preselectedQuote) {
      setFormData(prev => ({
        ...prev,
        propertyType: preselectedQuote.propertyType || prev.propertyType,
        purpose: preselectedQuote.purpose || prev.purpose
      }));
    }
  }, [preselectedQuote]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = 'AVG-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(randomCode);
    setSubmitted(true);
  };

  return (
    <div style={styles.overlay}>
      <div className="glass-card" style={styles.modalCard}>
        {/* Close Button */}
        <button onClick={onClose} style={styles.closeBtn}>
          <IconX size={20} color="var(--text-primary)" />
        </button>

        {!submitted ? (
          <div>
            <div style={styles.modalHeader}>
              <div style={styles.headerBadge}>
                <IconCalculator size={16} color="var(--accent-gold)" />
                <span>Inspection Booking Request</span>
              </div>
              <h2 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>Request an Appraisal Quote</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Fill out property details below. Grandpa Bob will review public records and call you within 2 business hours with guaranteed pricing.
              </p>
            </div>

            {preselectedQuote?.estimatedFee && (
              <div style={styles.estimatedBanner}>
                <IconSparkles size={18} color="var(--accent-gold)" />
                <span>Estimated Price Quote: <strong>{preselectedQuote.estimatedFee}</strong> ({preselectedQuote.estimatedDays})</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGrid}>
                {/* Contact Name */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={styles.input}
                  />
                </div>

                {/* Contact Phone */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={styles.input}
                  />
                </div>

                {/* Email */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={styles.input}
                  />
                </div>

                {/* County */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Property County</label>
                  <select
                    value={formData.county}
                    onChange={e => setFormData({ ...formData, county: e.target.value })}
                    style={styles.input}
                  >
                    {BUSINESS_INFO.serviceCounties.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Property Street Address */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Subject Property Address *</label>
                <input
                  type="text"
                  required
                  placeholder="123 Oak Street, Suite A, City, State ZIP"
                  value={formData.propertyAddress}
                  onChange={e => setFormData({ ...formData, propertyAddress: e.target.value })}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGrid}>
                {/* Property Type */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                    style={styles.input}
                  >
                    {CALCULATOR_CONFIG.propertyTypes.map((t, i) => (
                      <option key={i} value={t.label}>{t.label}</option>
                    ))}
                  </select>
                </div>

                {/* Purpose */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Appraisal Purpose</label>
                  <select
                    value={formData.purpose}
                    onChange={e => setFormData({ ...formData, purpose: e.target.value })}
                    style={styles.input}
                  >
                    {CALCULATOR_CONFIG.purposes.map((p, i) => (
                      <option key={i} value={p.label}>{p.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Instructions / Notes */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Additional Notes or Deadline Requests</label>
                <textarea
                  rows="3"
                  placeholder="e.g. Need date-of-death retrospective valuation for 2024, property has detached garage..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  style={{ ...styles.input, resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
                <span>Submit Request for Bob's Review</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div style={styles.successBox}>
            <div style={styles.successIconCircle}>
              <IconCheck size={36} color="#0f172a" />
            </div>
            <h2 style={{ fontSize: '1.8rem', margin: '1rem 0 0.5rem 0' }}>Request Submitted Successfully!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Thank you, <strong>{formData.name}</strong>. Grandpa Bob has received your property details for <strong>{formData.propertyAddress}</strong>.
            </p>

            <div style={styles.refBox}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Your Reference Confirmation Number:</span>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-gold)' }}>
                {refCode}
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We will call you at <strong>{formData.phone}</strong> or send a confirmation email to <strong>{formData.email}</strong> shortly.
            </p>

            <button onClick={onClose} className="btn btn-secondary" style={{ width: '100%' }}>
              <span>Done & Close</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(11, 19, 41, 0.85)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem'
  },
  modalCard: {
    maxWidth: '680px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: '2.5rem',
    position: 'relative',
    border: '1px solid var(--border-highlight)'
  },
  closeBtn: {
    position: 'absolute',
    top: '1.25rem',
    right: '1.25rem',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  modalHeader: {
    marginBottom: '1.5rem'
  },
  headerBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'var(--accent-gold-light)',
    color: 'var(--accent-gold)',
    padding: '0.25rem 0.75rem',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.75rem',
    fontWeight: '700'
  },
  estimatedBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    background: 'var(--accent-gold-light)',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    padding: '0.85rem 1.25rem',
    borderRadius: 'var(--radius-md)',
    marginBottom: '1.5rem',
    fontSize: '0.9rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr'
    }
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  input: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    padding: '0.75rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'var(--font-body)'
  },
  successBox: {
    textAlign: 'center',
    padding: '1rem 0'
  },
  successIconCircle: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto'
  },
  refBox: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    padding: '1.25rem',
    borderRadius: 'var(--radius-md)',
    margin: '1.5rem 0'
  }
};
