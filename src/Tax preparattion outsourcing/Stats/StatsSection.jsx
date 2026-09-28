'use client';

import * as React from 'react';
import CommonStatsSection from '@/components/common/StatsSection';

const TAX_PREPARATION_STATS = [
  { target: 10, suffix: '+', label: 'US Tax Knowledge' },
  { target: 1, suffix: 'K+', label: 'Flexible Support' },
  { target: 50, suffix: '+', label: 'Secure Workflows' },
  { target: 98, suffix: '%', label: 'Experienced Professionals' },
];

export default function StatsSection(props) {
  return (
    <CommonStatsSection
      id="tax-prep-stats"
      stats={TAX_PREPARATION_STATS}
      {...props}
    />
  );
}
