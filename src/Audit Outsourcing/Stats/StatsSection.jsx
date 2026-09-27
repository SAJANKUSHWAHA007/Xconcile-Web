'use client';

import * as React from 'react';
import { StatsSection as CommonStatsSection } from '@/components/common';

const AUDIT_STATS = [
  { target: 10, suffix: '+', label: 'US Audit Experience' },
  { target: 1, suffix: 'K+', label: 'Audit Professionals', isDecimal: true },
  { target: 50, suffix: '+', label: 'Accounting Professionals' },
  { target: 98, suffix: '%', label: 'Client Satisfaction' },
];

export default function StatsSection(props) {
  return (
    <CommonStatsSection
      id="audit-stats"
      stats={AUDIT_STATS}
      {...props}
    />
  );
}
