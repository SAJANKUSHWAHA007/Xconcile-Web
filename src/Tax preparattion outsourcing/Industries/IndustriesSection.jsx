'use client';

import * as React from 'react';
import IndustryGridSection from '@/components/common/IndustryGridSection';

export const taxIndustriesData = [
  {
    title: 'CPA & Accounting Firms',
    description: 'Cost accounting, inventory valuation, job costing.',
    image: '/assets/images/cpa_accounting.svg',
    alt: 'CPA & Accounting Firms',
    link: '#contact',
  },
  {
    title: 'Healthcare',
    description: 'Practice accounting, revenue cycle support, compliance.',
    image: '/assets/images/healthcare.svg',
    alt: 'Healthcare',
    link: '#contact',
  },
  {
    title: 'Real Estate',
    description: 'Streamline property, sales, and client relationships.',
    image: '/assets/images/real-estate.svg',
    alt: 'Real Estate',
    link: '#contact',
  },
  {
    title: 'Retail',
    description: 'Multi-location consolidation and daily sales reconciliation.',
    image: '/assets/images/retail.svg',
    alt: 'Retail',
    link: '#contact',
  },
  {
    title: 'Education',
    description: 'Simplify admissions, student records, and administrative',
    image: '/assets/images/education.svg',
    alt: 'Education',
    link: '#contact',
  },
  {
    title: 'Pharma',
    description: 'Improve compliance, inventory tracking, and distribution',
    image: '/assets/images/pharma.svg',
    alt: 'Pharma',
    link: '#contact',
  },
  {
    title: 'eCommerce',
    description: 'Multi-channel books, inventory COGS, sales tax.',
    image: '/assets/images/exommerce.svg',
    alt: 'eCommerce',
    link: '#contact',
  },
  {
    title: 'Manufacturing',
    description: 'Optimize production, inventory, and supply chain operations.',
    image: '/assets/images/manufacturing.svg',
    alt: 'Manufacturing',
    link: '#contact',
  },
];

export default function IndustriesSection(props) {
  return (
    <IndustryGridSection
      id="tax-industries"
      badge="Industries We Serve"
      title="Accounting Expertise Across Industries"
      subtitle="Accounting support designed around the financial workflows of different industries and business types."
      items={taxIndustriesData}
      autoScrollDelay={2500}
      maxWidth="xl"
      {...props}
    />
  );
}
