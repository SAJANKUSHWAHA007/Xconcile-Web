'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CommonWhyChooseUsSection from '@/components/common/WhyChooseUsSection';

const featuresData = [
  {
    title: 'US Accounting Expertise',
    description: 'Support according to U.S. accounting practices and needs.',
    icon: <PostAddOutlinedIcon />,
  },
  {
    title: 'Experienced Professionals',
    description: 'Experienced professionals to meet your accounting needs.',
    icon: <HowToRegOutlinedIcon />,
  },
  {
    title: 'Dedicated Support',
    description: 'Dedicated professionals focused on your accounting needs.',
    icon: <BadgeOutlinedIcon />,
  },
  {
    title: 'Flexible Engagements',
    description: 'Flexible support that fits your workload and requirements.',
    icon: <TuneOutlinedIcon />,
  },
  {
    title: 'Month-End Support',
    description: 'Stay on top of your recurring month-end accounting activities.',
    icon: <InsertChartOutlinedIcon />,
  },
];

const statsData = [
  { target: 10, suffix: '+', label: 'Accounting Experience' },
  { target: 1, suffix: 'K+', label: 'Businesses Supported' },
  { target: 50, suffix: '+', label: 'Accounting Professionals' },
  { target: 98, suffix: '%', label: 'Reconciliation Accuracy' },
];

export default function WhyChooseUsSection() {
  return (
    <CommonWhyChooseUsSection
      id="why-choose-us"
      theme="dark"
      cardVariant="plain"
      badge="Why Choose Us"
      title={
        <>
          Why Businesses Choose Xconcile for{' '}
          <Box
            component="span"
            sx={{
              color: '#6ABE52',
              display: { xs: 'block', sm: 'inline' },
            }}
          >
            Outsourced Accounting
          </Box>
        </>
      }
      subtitle="Get reliable accounting support from experienced professionals who handle daily accounting, reconciliations, financial reporting, and ongoing accounting needs."
      features={featuresData}
      stats={statsData}
    />
  );
}
