'use client';

import * as React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ProcessStepsSection from '@/components/common/ProcessStepsSection';

const accountingProcessSteps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Learn your accounting needs, systems, and workflows.',
    icon: <SearchOutlinedIcon />,
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define scope, responsibilities, and timelines.',
    icon: <AssignmentOutlinedIcon />,
  },
  {
    step: '03',
    title: 'Onboard',
    description: 'Align our team with your systems and processes.',
    icon: <RocketLaunchOutlinedIcon />,
  },
  {
    step: '04',
    title: 'Manage',
    description: 'Handle agreed accounting tasks and reporting.',
    icon: <FactCheckOutlinedIcon />,
  },
  {
    step: '05',
    title: 'Review & Improve',
    description: 'Review results and improve processes over time.',
    icon: <AutorenewOutlinedIcon />,
  },
];

export default function ProcessSection() {
  return (
    <ProcessStepsSection
      id="process"
      badge="How It Works"
      title="Our Simple Accounting Process"
      subtitle="From understanding your needs to managing ongoing accounting work, our structured process helps ensure a smooth transition, clear communication, and support that fits your existing workflows."
      steps={accountingProcessSteps}
      autoScrollDelay={2000}
      maxWidth="xl"
    />
  );
}
