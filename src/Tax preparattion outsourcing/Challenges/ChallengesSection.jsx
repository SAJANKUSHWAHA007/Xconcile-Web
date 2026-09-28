'use client';

import * as React from 'react';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CommonChallengesSection from '@/components/common/ChallengesSection';

const taxChallengesData = [
  {
    title: 'Reduce Audit Workload',
    description:
      'Get additional support for time-consuming audit tasks and give your internal team more time for review, client communication, and engagement management.',
    icon: <PersonAddAltOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FFF1F2',
    iconColor: '#F43F5E',
    borderColor: '#FFE4E6',
    cardBg: '#FFFDFC',
  },
  {
    title: 'Add Capacity When Needed',
    description:
      "Increase your audit team's capacity based on workload and engagement needs without adding permanent staff.",
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FEF9C3',
    iconColor: '#D97706',
    borderColor: '#FEF08A',
    cardBg: '#FFFEFA',
  },
  {
    title: 'Keep Audit Work Organized',
    description:
      'Maintain organized documentation, testing, reconciliations, and working papers throughout the audit process.',
    icon: <PaidOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
    borderColor: '#DBEAFE',
    cardBg: '#FBFDFF',
  },
  {
    title: 'Manage Multiple Audits',
    description:
      "Extend your team's capacity to manage multiple audits, clients, and financial reporting requirements more efficiently.",
    icon: <VisibilityOffOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FAF5FF',
    iconColor: '#9333EA',
    borderColor: '#F3E8FF',
    cardBg: '#FDFBFF',
  },
];

export default function ChallengesSection(props) {
  return (
    <CommonChallengesSection
      id="tax-challenges"
      badge="Key Challenges"
      title="Why Businesses & CPA Firms Outsource Audit Work"
      description="Managing multiple audit engagements can put pressure on internal teams, especially when workloads, documentation, and deadlines increase. Outsourcing selected audit tasks gives your team additional capacity while keeping your existing processes in place."
      buttonText="Talk to Our Team"
      buttonHref="/#contact"
      items={taxChallengesData}
      {...props}
    />
  );
}
