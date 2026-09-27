'use client';

import * as React from 'react';
import { StatsSection as CommonStatsSection } from '@/components/common';

const MULTI_STATE_STATS = [
  { target: 10, suffix: '+', label: 'U.S. Tax Support' },
  { target: 1, suffix: 'K+', label: 'Flexible Engagements' },
  { target: 50, suffix: '+', label: 'Experienced Professionals' },
  { target: 98, suffix: '%', label: 'Secure Workflows' },
];

export default function StatsSection(props) {
  return (
    <CommonStatsSection
      id="multi-state-stats"
      stats={MULTI_STATE_STATS}
      {...props}
    />
  );
}
