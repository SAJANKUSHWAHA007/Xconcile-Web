'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CommonWhyChooseUsSection from '@/components/common/WhyChooseUsSection';

const salesTaxFeaturesData = [
  {
    title: 'Multi-State Support',
    description: 'Help manage sales tax activities across multiple states.',
    icon: <CreditCardOutlinedIcon />,
  },
  {
    title: 'U.S. Tax Expertise',
    description: 'Work with professionals familiar with U.S. tax workflows.',
    icon: <HowToRegOutlinedIcon />,
  },
  {
    title: 'Flexible Support',
    description: 'Choose support based on your business requirements.',
    icon: <PaymentsOutlinedIcon />,
  },
  {
    title: 'Accurate Reporting',
    description: 'Maintain organized and accurate compliance records.',
    icon: <TuneOutlinedIcon />,
  },
  {
    title: 'Scalable Support',
    description: 'Scale tax support during busy periods.',
    icon: <InsertChartOutlinedIcon />,
  },
];

const salesTaxStatsData = [
  { target: 10, suffix: '+', label: 'Accounting Experience' },
  { target: 21, suffix: '+', label: 'Businesses Supported' },
  { target: 50, suffix: '+', label: 'Accounting Professionals' },
  { target: 90, suffix: '%', label: 'Reconciliation Accuracy' },
];

export default function WhyChooseUsSection(props) {
  return (
    <CommonWhyChooseUsSection
      id="sales-tax-why-choose-us"
      theme="dark"
      cardVariant="card"
      badge="Why Choose Us"
      title={
        <>
          <Box
            component="span"
            sx={{
              display: 'block',
              whiteSpace: { md: 'nowrap' },
              fontSize: { xs: '1.65rem', sm: '1.95rem', md: '2.15rem', lg: '2.35rem', xl: '2.5rem' },
            }}
          >
            Why Businesses & CPA Firms Choose
          </Box>
          <Box
            component="span"
            sx={{
              display: 'block',
              fontSize: { xs: '1.65rem', sm: '1.95rem', md: '2.15rem', lg: '2.35rem', xl: '2.5rem' },
            }}
          >
            Xconcile for{' '}
            <Box component="span" sx={{ color: '#6ABE52' }}>
              Sales Tax Support
            </Box>
          </Box>
        </>
      }
      subtitle="Get reliable, accurate, and cost-effective accounting support from experienced professionals who help US businesses streamline finances and focus on growth."
      features={salesTaxFeaturesData}
      stats={salesTaxStatsData}
      images={{
        img1: { src: '/assets/images/why-choose-us-1.svg', alt: 'Xconcile team celebrating success' },
        img2: { src: '/assets/images/why-choose-us-2.svg', alt: 'Team hands joined together in collaboration' },
        img3: { src: '/assets/images/why-choose-us-3.svg', alt: 'Xconcile professionals in modern workspace' },
        img4: { src: '/assets/images/why-choose-us-4.svg', alt: 'Xconcile team collaborating at workstation' },
      }}
      {...props}
    />
  );
}
