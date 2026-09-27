'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import IndustryGridSection from '@/components/common/IndustryGridSection';

export const salesTaxIndustriesData = [
  {
    title: 'CPA & Accounting Firms',
    description: 'Sales tax compliance support for CPA firm workflows',
    image: '/assets/images/cpa_accounting.svg',
    alt: 'CPA & Accounting Firms',
    link: '#contact',
  },
  {
    title: 'Healthcare',
    description: 'Healthcare sales tax compliance support and reporting',
    image: '/assets/images/healthcare.svg',
    alt: 'Healthcare',
    link: '#contact',
  },
  {
    title: 'Real Estate',
    description: 'Real estate sales tax compliance and reporting support',
    image: '/assets/images/real-estate.svg',
    alt: 'Real Estate',
    link: '#contact',
  },
  {
    title: 'Retail',
    description: 'Sales tax support for retail transactions and filing',
    image: '/assets/images/retail.svg',
    alt: 'Retail',
    link: '#contact',
  },
  {
    title: 'Education',
    description: 'Education sales tax reporting and compliance support',
    image: '/assets/images/education.svg',
    alt: 'Education',
    link: '#contact',
  },
  {
    title: 'Pharma',
    description: 'Sales tax support for pharma products and distribution',
    image: '/assets/images/pharma.svg',
    alt: 'Pharma',
    link: '#contact',
  },
  {
    title: 'eCommerce',
    description: 'Sales tax compliance support for online businesses',
    image: '/assets/images/exommerce.svg',
    alt: 'eCommerce',
    link: '#contact',
  },
  {
    title: 'Manufacturing',
    description: 'Manufacturing sales tax compliance and reporting support',
    image: '/assets/images/manufacturing.svg',
    alt: 'Manufacturing',
    link: '#contact',
  },
];

export default function IndustriesSection(props) {
  return (
    <IndustryGridSection
      id="sales-tax-industries"
      badge="Industries We Serve"
      title={
        <Box component="span" sx={{ display: 'inline-block', whiteSpace: { md: 'nowrap' } }}>
          Sales Tax Support Across Industries
        </Box>
      }
      subtitle="Accounting support designed around the financial workflows of different industries and business types."
      items={salesTaxIndustriesData}
      autoScrollDelay={2500}
      maxWidth="xl"
      {...props}
    />
  );
}
