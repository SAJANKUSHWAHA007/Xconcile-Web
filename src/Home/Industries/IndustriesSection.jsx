'use client';

import * as React from 'react';
import IndustryGridSection from '@/components/common/IndustryGridSection';

export const industriesData = [
  {
    title: 'CPA & Accounting Firms',
    description: 'Reliable bookkeeping and accounting support for CPA firms.',
    image: '/assets/images/cpa_accounting.svg',
    alt: 'CPA & Accounting Firms',
    link: '#contact',
  },
  {
    title: 'Healthcare',
    description: 'Accurate accounting support tailored to healthcare practices.',
    image: '/assets/images/healthcare.svg',
    alt: 'Healthcare Accounting Support',
    link: '#contact',
  },
  {
    title: 'Real Estate',
    description: 'Streamlined accounting for property and real estate businesses.',
    image: '/assets/images/real-estate.svg',
    alt: 'Real Estate Accounting Support',
    link: '#contact',
  },
  {
    title: 'Retail',
    description: 'Accurate bookkeeping and reporting for growing retail businesses.',
    image: '/assets/images/retail.svg',
    alt: 'Retail Accounting Support',
    link: '#contact',
  },
  {
    title: 'Education',
    description: 'Simple accounting solutions for schools and education providers.',
    image: '/assets/images/education.svg',
    alt: 'Education Accounting Support',
    link: '#contact',
  },
  {
    title: 'Pharma',
    description: 'Better accounting support for pharmaceutical operations.',
    image: '/assets/images/pharma.svg',
    alt: 'Pharma Accounting Support',
    link: '#contact',
  },
  {
    title: 'eCommerce',
    description: 'Multi-channel accounting support for growing eCommerce brands.',
    image: '/assets/images/exommerce.svg',
    alt: 'eCommerce Accounting Support',
    link: '#contact',
  },
  {
    title: 'Manufacturing',
    description: 'Cost-effective accounting support for manufacturing businesses.',
    image: '/assets/images/manufacturing.svg',
    alt: 'Manufacturing Accounting Support',
    link: '#contact',
  },
];

export default function IndustriesSection() {
  return (
    <IndustryGridSection
      id="industries"
      badge="Domain Specialization"
      title="Accounting Support Across Industries"
      subtitle="Every industry has unique accounting needs. Our tailored solutions help businesses maintain accurate books, improve financial visibility, and streamline daily accounting operations."
      items={industriesData}
      autoScrollDelay={2500}
    />
  );
}
