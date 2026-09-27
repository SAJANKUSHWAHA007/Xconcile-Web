'use client';

import * as React from 'react';
import { StatsSection as CommonStatsSection } from '@/components/common';

const HOME_STATS = [
  { target: 10, suffix: '+', label: 'Years of Experience' },
  { target: 1, suffix: 'K+', label: 'Businesses Supported', isDecimal: true },
  { target: 50, suffix: '+', label: 'Accounting Professionals' },
  { target: 98, suffix: '%', label: 'Client Satisfaction' },
];

export default function StatsSection(props) {
  return (
    <CommonStatsSection
      id="home-stats"
      stats={HOME_STATS}
      {...props}
    />
  );
}
