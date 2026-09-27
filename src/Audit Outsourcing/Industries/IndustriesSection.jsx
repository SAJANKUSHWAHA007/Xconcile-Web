'use client';

import * as React from 'react';
import IndustryGridSection from '@/components/common/IndustryGridSection';

export const auditIndustriesData = [
  {
    title: 'CPA & Accounting Firms',
    description: 'Audit and accounting support for your client work',
    image: '/assets/images/cpa_accounting.svg',
    alt: 'CPA & Accounting Firms',
    link: '#contact',
  },
  {
    title: 'Healthcare',
    description: 'Audit support for healthcare records and finance needs.',
    image: '/assets/images/healthcare.svg',
    alt: 'Healthcare Audit Support',
    link: '#contact',
  },
  {
    title: 'Real Estate',
    description: 'Audit support for property records and transactions',
    image: '/assets/images/real-estate.svg',
    alt: 'Real Estate Audit Support',
    link: '#contact',
  },
  {
    title: 'Retail',
    description: 'Audit support for sales, inventory, and financial data.',
    image: '/assets/images/retail.svg',
    alt: 'Retail Audit Support',
    link: '#contact',
  },
  {
    title: 'Education',
    description: 'Audit support for tuition, expenses, and financial records.',
    image: '/assets/images/education.svg',
    alt: 'Education Audit Support',
    link: '#contact',
  },
  {
    title: 'Pharma',
    description: 'Audit support for inventory, expenses, and compliance.',
    image: '/assets/images/pharma.svg',
    alt: 'Pharma Audit Support',
    link: '#contact',
  },
  {
    title: 'eCommerce',
    description: 'Audit support for sales, payments, inventory, and tax.',
    image: '/assets/images/exommerce.svg',
    alt: 'eCommerce Audit Support',
    link: '#contact',
  },
  {
    title: 'Manufacturing',
    description: 'Audit support for inventory, costs, and financial records.',
    image: '/assets/images/manufacturing.svg',
    alt: 'Manufacturing Audit Support',
    link: '#contact',
  },
];

export default function IndustriesSection() {
  return (
    <IndustryGridSection
      id="audit-industries"
      badge="Industries We Serve"
      title="Audit Expertise Across Industries"
      subtitle="Every industry has different financial processes, reporting requirements, and compliance needs."
      items={auditIndustriesData}
      autoScrollDelay={2500}
      maxWidth="xl"
    />
  );
}
