'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import CommonWhyChooseUsSection from '@/components/common/WhyChooseUsSection';

const auditFeaturesData = [
  {
    title: 'Increase Audit Capacity',
    description: 'Handle more engagements without adding pressure to your team.',
    icon: <PostAddOutlinedIcon />,
  },
  {
    title: 'Access Audit Expertise',
    description: 'Get support with audit testing, workpapers, and documentation.',
    icon: <HowToRegOutlinedIcon />,
  },
  {
    title: 'Support Busy Seasons',
    description: 'Add resources when deadlines and audit workloads increase.',
    icon: <DateRangeOutlinedIcon />,
  },
  {
    title: 'Maintain Your Workflow',
    description: 'Work with your existing audit tools and processes.',
    icon: <TuneOutlinedIcon />,
  },
  {
    title: 'Improve Audit Efficiency',
    description: 'Keep audit tasks organized throughout each engagement.',
    icon: <InsertChartOutlinedIcon />,
  },
];

const auditStatsData = [
  { target: 10, suffix: '+', label: 'Accounting Experience' },
  { target: 21, suffix: '+', label: 'Businesses Supported' },
  { target: 50, suffix: '+', label: 'Accounting Professionals' },
  { target: 90, suffix: '%', label: 'Reconciliation Accuracy' },
];

export default function WhyChooseUsSection() {
  return (
    <CommonWhyChooseUsSection
      id="why-choose-us"
      theme="dark"
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
      features={auditFeaturesData}
      stats={auditStatsData}
      images={{
        img1: { src: '/assets/images/why-choose-us-1.svg', alt: 'Xconcile team celebrating audit milestone' },
        img2: { src: '/assets/images/why-choose-us-2.svg', alt: 'CPA and audit team collaboration' },
        img3: { src: '/assets/images/why-choose-us-3.svg', alt: 'Audit professionals in modern office' },
        img4: { src: '/assets/images/why-choose-us-4.svg', alt: 'Audit testing and review session' },
      }}
    />
  );
}
