'use client';

import * as React from 'react';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CommonChallengesSection from '@/components/common/ChallengesSection';

const challengesData = [
  {
    title: 'Hiring Challenges',
    description:
      'Finding experienced accounting professionals can take time and add pressure to internal teams',
    icon: <PersonAddAltOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FFF1F2',
    iconColor: '#F43F5E',
    borderColor: '#FFE4E6',
  },
  {
    title: 'Growing Workload',
    description:
      'Increasing transactions, reconciliations, reporting, and bookkeeping tasks can stretch existing resources.',
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FEF9C3',
    iconColor: '#D97706',
    borderColor: '#FEF08A',
  },
  {
    title: 'High Operating Costs',
    description:
      'Maintaining a full in-house accounting team can increase staffing, training, and operational expenses.',
    icon: <PaidOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
    borderColor: '#DBEAFE',
  },
  {
    title: 'Limited Financial Visibility',
    description:
      'Delayed or incomplete financial information can make it harder to monitor performance and plan ahead.',
    icon: <VisibilityOffOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FAF5FF',
    iconColor: '#9333EA',
    borderColor: '#F3E8FF',
  },
  {
    title: 'Skill Gaps',
    description:
      'Businesses may lack specialized accounting expertise needed for complex or growing financial requirements.',
    icon: <AssignmentIndOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#ECFDF5',
    iconColor: '#16A34A',
    borderColor: '#DCFCE7',
  },
];

export default function ChallengesSection() {
  return (
    <CommonChallengesSection
      id="challenges"
      badge="Key Challenges"
      title="Common Accounting Challenges Businesses Face"
      description="Managing accounting in-house can become time-consuming as your business grows. From hiring skilled professionals to keeping up with increasing transaction volumes, accounting demands can put pressure on your team and resources"
      buttonText="Lets Discuss Project"
      buttonHref="#contact"
      items={challengesData}
    />
  );
}
