'use client';

import * as React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ProcessStepsSection from '@/components/common/ProcessStepsSection';

const auditProcessSteps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Review the audit scope, client information, requirements, and engagement timeline.',
    icon: <SearchOutlinedIcon />,
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define audit procedures, responsibilities, documentation needs, and key deadlines.',
    icon: <AssignmentOutlinedIcon />,
  },
  {
    step: '03',
    title: 'Onboard',
    description: 'Align our team with your audit software, working papers, files, and review process.',
    icon: <RocketLaunchOutlinedIcon />,
  },
  {
    step: '04',
    title: 'Manage',
    description: 'Support testing, documentation, workpapers, reconciliations,',
    icon: <FactCheckOutlinedIcon />,
  },
  {
    step: '05',
    title: 'Review & Improve',
    description: 'Complete review points, organize supporting documentation, and prepare work for final review.',
    icon: <AutorenewOutlinedIcon />,
  },
];

export default function ProcessSection() {
  return (
    <ProcessStepsSection
      id="audit-process"
      badge="How It Works"
      title="Our Audit Outsourcing Process"
      subtitle="Our process covers audit requirements, planning, documentation, testing, and review activities."
      steps={auditProcessSteps}
      autoScrollDelay={2000}
      maxWidth="xl"
    />
  );
}
