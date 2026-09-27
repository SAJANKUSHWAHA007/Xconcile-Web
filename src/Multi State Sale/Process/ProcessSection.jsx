'use client';

import * as React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ProcessStepsSection from '@/components/common/ProcessStepsSection';

const salesTaxProcessSteps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Review business activities, locations, transactions.',
    icon: <SearchOutlinedIcon />,
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define compliance tasks, filing schedules, and state requirements.',
    icon: <AssignmentOutlinedIcon />,
  },
  {
    step: '03',
    title: 'Onboard',
    description: 'Align our team with your tax data, systems, and filing processes.',
    icon: <RocketLaunchOutlinedIcon />,
  },
  {
    step: '04',
    title: 'Manage',
    description: 'Manage tax returns, reports, and agreed compliance activities.',
    icon: <FactCheckOutlinedIcon />,
  },
  {
    step: '05',
    title: 'Review & Improve',
    description: 'Review filings and address open items for ongoing compliance.',
    icon: <AutorenewOutlinedIcon />,
  },
];

export default function ProcessSection(props) {
  return (
    <ProcessStepsSection
      id="sales-tax-process"
      badge="How It Works"
      title="Our Sales Tax Compliance Process"
      subtitle="Our process covers sales tax requirements, compliance tasks, filings, reporting, and open items."
      steps={salesTaxProcessSteps}
      autoScrollDelay={2000}
      maxWidth="xl"
      {...props}
    />
  );
}
