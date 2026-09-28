'use client';

import * as React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ProcessStepsSection from '@/components/common/ProcessStepsSection';

const taxProcessSteps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Review tax requirements, return types, client data, and deadlines.',
    icon: <SearchOutlinedIcon />,
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define preparation tasks, timelines, documents, and review needs.',
    icon: <AssignmentOutlinedIcon />,
  },
  {
    step: '03',
    title: 'Onboard',
    description: 'Align our team with your tax software, files, and workflows.',
    icon: <RocketLaunchOutlinedIcon />,
  },
  {
    step: '04',
    title: 'Manage',
    description: 'Prepare tax returns, workpapers, and agreed compliance activities.',
    icon: <FactCheckOutlinedIcon />,
  },
  {
    step: '05',
    title: 'Delivery & Ongoing Support',
    description: 'Review completed work and address issues before finalization.',
    icon: <AutorenewOutlinedIcon />,
  },
];

export default function ProcessSection(props) {
  return (
    <ProcessStepsSection
      id="tax-process"
      badge="How It Works"
      title="Our Tax Preparation Outsourcing Process"
      subtitle="Our process covers tax requirements, document preparation, return preparation, review, and finalization."
      steps={taxProcessSteps}
      autoScrollDelay={2000}
      maxWidth="xl"
      {...props}
    />
  );
}
