'use client';

import * as React from 'react';
import { AccountingSupportSection as CommonAccountingSupportSection } from '@/components/common';

const MULTI_STATE_PARAGRAPHS = [
  'Managing sales tax across multiple states can be complex due to changing rules, different filing requirements, tax rates, and reporting obligations',
  'Xconcile helps CPA firms and businesses handle sales & use tax compliance with support for economic nexus reviews, state registrations, taxability assessments, multi-state filings, and ongoing reporting.',
  'Our team helps keep sales tax processes organized, records accurate, and compliance activities on track across U.S. jurisdictions.',
];

const MULTI_STATE_STATS = [
  { label: 'Experience', value: '10+' },
  { label: 'Projects', value: '1,000+' },
  { label: 'Projects', value: '1,000+' },
];

export default function AccountingSupportSection(props) {
  return (
    <CommonAccountingSupportSection
      id="multi-state-accounting-support"
      title="Accounting Support Built Around Your Business"
      paragraphs={MULTI_STATE_PARAGRAPHS}
      stats={MULTI_STATE_STATS}
      buttonText="Learn More About Xconcile"
      buttonLink="/contact"
      images={{
        image1: '/assets/images/accounting-support-1.svg',
        image2: '/assets/images/acounting-support-2.svg',
        image3: '/assets/images/acounting-support-3.svg',
        centerLogo: '/assets/images/acounting-support-logo.svg',
      }}
      {...props}
    />
  );
}
