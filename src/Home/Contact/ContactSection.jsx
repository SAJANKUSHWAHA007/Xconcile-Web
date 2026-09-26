'use client';

import * as React from 'react';
import ContactConsultationSection from '@/components/common/ContactConsultationSection';

export const homeConsultationFeatures = [
  'Free, no-obligation consultation',
  'Response within one business day',
  'A clear proposal with scope, team and pricing',
];

export const homeServiceOptions = [
  'Tax Preparation',
  'Sales & Use Tax Compliance',
  'Bookkeeping',
  'Payroll',
  'Full-Service Accounting',
  'CFO Support',
  'Account Cleanup',
  'Other',
];

export default function ContactSection(props) {
  return (
    <ContactConsultationSection
      id="contact"
      title={'Ready to Simplify Your\nAccounting?'}
      subtitle="Tell us about your accounting needs and we'll help you find the right outsourcing model for your business."
      features={homeConsultationFeatures}
      serviceOptions={homeServiceOptions}
      maxWidth="xl"
      background="#F8FAFC"
      {...props}
    />
  );
}
