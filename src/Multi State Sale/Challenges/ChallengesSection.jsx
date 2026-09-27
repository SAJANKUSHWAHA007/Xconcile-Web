'use client';

import * as React from 'react';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { ChallengesSection as CommonChallengesSection } from '@/components/common';

const multiStateChallengesData = [
  {
    title: 'Changing State Requirements',
    description: 'Stay organized with different state rules and requirements.',
    icon: <PersonSearchOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FFF1F2',
    iconColor: '#F43F5E',
    borderColor: '#FFE4E6',
    cardBg: '#FFF8F8',
  },
  {
    title: 'Filing Deadline Management',
    description: 'Support timely preparation and reporting.',
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FEF9C3',
    iconColor: '#D97706',
    borderColor: '#FEF3C7',
    cardBg: '#FFFDF5',
  },
  {
    title: 'Complex Transaction Data',
    description: 'Handle sales information across multiple locations.',
    icon: <PaidOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
    borderColor: '#DBEAFE',
    cardBg: '#F8FAFF',
  },
  {
    title: 'Limited Internal Resources',
    description: 'Extend your team with experienced tax support.',
    icon: <VisibilityOffOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FAF5FF',
    iconColor: '#9333EA',
    borderColor: '#F3E8FF',
    cardBg: '#FAF5FF',
  },
];

export default function ChallengesSection(props) {
  return (
    <CommonChallengesSection
      id="multi-state-challenges"
      badge="Key Challenges"
      title="Managing Multi-State Sales Tax Can Be Challenging"
      description="Multi-state sales tax involves complex rules, deadlines, and reporting requirements. Xconcile provides structured support to help businesses and CPA firms manage compliance activities more efficiently"
      buttonText="Lets Discuss Project"
      buttonHref="/#contact"
      items={multiStateChallengesData}
      {...props}
    />
  );
}
