'use client';

import * as React from 'react';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CommonChallengesSection from '@/components/common/ChallengesSection';

const auditChallengesData = [
  {
    title: 'Increase Audit Capacity',
    description:
      'Add audit professionals when your team has more engagements to handle or needs extra support to complete assigned audit work',
    icon: <PersonAddAltOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FFF1F2',
    iconColor: '#F43F5E',
    borderColor: '#FFE4E6',
    cardBg: '#FFFDFC',
  },
  {
    title: 'Reduce Hiring Pressure',
    description:
      'Get additional audit support without hiring permanent employees when you need extra team capacity for specific workloads or engagements.',
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FEF9C3',
    iconColor: '#D97706',
    borderColor: '#FEF08A',
    cardBg: '#FFFEFA',
  },
  {
    title: 'Handle Seasonal Demand',
    description:
      'Add audit support when workloads increase, so your team can handle more engagements without hiring permanent staff.',
    icon: <PaidOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
    borderColor: '#DBEAFE',
    cardBg: '#FBFDFF',
  },
  {
    title: 'Focus Internal Teams',
    description:
      'Free up your experienced staff to focus on audit review and client needs while routine tasks are handled by support staff.',
    icon: <VisibilityOffOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FAF5FF',
    iconColor: '#9333EA',
    borderColor: '#F3E8FF',
    cardBg: '#FDFBFF',
  },
];

export default function ChallengesSection() {
  return (
    <CommonChallengesSection
      id="audit-challenges"
      badge="Key Challenges"
      title="Why Businesses & Accounting Firms Outsource Audit Work"
      description="Outsourcing audit work helps businesses and accounting firms manage workloads, add skilled support, and keep audit tasks organized without increasing internal staffing."
      buttonText="Talk to Our Team"
      buttonHref="/#contact"
      items={auditChallengesData}
    />
  );
}
