'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CommonWhyChooseUsSection from '@/components/common/WhyChooseUsSection';

const taxWhyChooseUsFeatures = [
  {
    title: 'Tax Expertise',
    description: 'Experienced professionals familiar with U.S. tax workflows.',
    icon: <PostAddOutlinedIcon />,
  },
  {
    title: 'Access Audit Expertise',
    description: 'Get support with audit testing, workpapers, and documentation.',
    icon: <HowToRegOutlinedIcon />,
  },
  {
    title: 'Support Busy Seasons',
    description: 'Add capacity when tax workloads increase.',
    icon: <BadgeOutlinedIcon />,
  },
  {
    title: 'Flexible Support',
    description: 'Choose the level of support based on your workload and engagement needs.',
    icon: <TuneOutlinedIcon />,
  },
  {
    title: 'Data Security',
    description: 'Use secure workflows to protect confidential financial information.',
    icon: <InsertChartOutlinedIcon />,
  },
];

const taxWhyChooseUsStats = [
  { target: 10, suffix: '+', label: 'Years of Experience' },
  { target: 21, suffix: '+', label: 'Businesses Supported' },
  { target: 50, suffix: '+', label: 'Accounting Professionals' },
  { target: 90, suffix: '%', label: 'Reconciliation Accuracy' },
];

export default function WhyChooseUsSection(props) {
  return (
    <CommonWhyChooseUsSection
      id="tax-why-choose-us"
      theme="dark"
      cardVariant="card"
      badge="Why Choose Us"
      title={
        <>
          Why Businesses & CPA Firms Choose Xconcile for{' '}
          <Box
            component="span"
            sx={{
              color: '#6ABE52',
              display: { xs: 'block', sm: 'inline' },
            }}
          >
            Audit Outsourcing
          </Box>
        </>
      }
      subtitle="Get reliable, accurate, and cost-effective accounting support from experienced professionals who help US businesses streamline finances and focus on growth."
      features={taxWhyChooseUsFeatures}
      stats={taxWhyChooseUsStats}
      statAlign="left"
      images={{
        img1: { src: '/assets/images/why-choose-us-1.svg', alt: 'Xconcile team celebrating success' },
        img2: { src: '/assets/images/why-choose-us-2.svg', alt: 'Team hands joined together in collaboration' },
        img3: { src: '/assets/images/why-choose-us-3.svg', alt: 'Tax professionals in modern office workspace' },
        img4: { src: '/assets/images/why-choose-us-4.svg', alt: 'Tax preparation and review workstation' },
      }}
      {...props}
    />
  );
}
