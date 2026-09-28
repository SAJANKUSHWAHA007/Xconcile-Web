'use client';

import * as React from 'react';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ToolsTabsSection from '@/components/common/ToolsTabsSection';

const taxToolsTabs = [
  {
    name: 'Accounting Software',
    heading: 'Audit Software',
    icon: <CalculateOutlinedIcon />,
    tools: [
      { name: 'CaseWare Working Papers', icon: '/assets/images/quickbook.svg' },
      { name: 'Xero', icon: '/assets/images/Xero.svg' },
      { name: 'NetSuite', icon: '/assets/images/netsuite.svg' },
      { name: 'Sage', icon: '/assets/images/sage.svg' },
      { name: 'Dynamics 365', icon: '/assets/images/dynamic365.svg' },
      { name: 'Bill.com', icon: '/assets/images/bill.svg' },
      { name: 'Zoho Books', icon: '/assets/images/zoho.svg' },
      { name: 'FreshBooks', icon: '/assets/images/freshbook.svg' },
    ],
  },
  {
    name: 'Audit Software',
    icon: <DesktopWindowsOutlinedIcon />,
    tools: [
      { name: 'CaseWare Working Papers', icon: '/assets/images/quickbook.svg' },
      { name: 'CCH Axcess', icon: '/assets/images/sage.svg' },
      { name: 'AdvanceFlow', icon: '/assets/images/Xero.svg' },
      { name: 'Engagement (CCH)', icon: '/assets/images/dynamic365.svg' },
      { name: 'Thomson Reuters PPC', icon: '/assets/images/cpa_accounting.svg' },
      { name: 'Suralink', icon: '/assets/images/bill.svg' },
    ],
  },
  {
    name: 'Data Analytics & Testing',
    icon: <AnalyticsOutlinedIcon />,
    tools: [
      { name: 'IDEA', icon: '/assets/images/cpa_accounting.svg' },
      { name: 'ACL Analytics', icon: '/assets/images/audit-support.svg' },
      { name: 'Microsoft Excel (Power Query)', icon: '/assets/images/dynamic365.svg' },
      { name: 'Tableau', icon: '/assets/images/netsuite.svg' },
      { name: 'Power BI', icon: '/assets/images/dynamic365.svg' },
      { name: 'Alteryx', icon: '/assets/images/quickbook.svg' },
    ],
  },
  {
    name: 'Confirmation & Documentation',
    icon: <FactCheckOutlinedIcon />,
    tools: [
      { name: 'Confirmation.com', icon: '/assets/images/google.svg' },
      { name: 'CaseWare Cloud', icon: '/assets/images/quickbook.svg' },
      { name: 'CCH Axcess', icon: '/assets/images/sage.svg' },
      { name: 'AdvanceFlow', icon: '/assets/images/Xero.svg' },
      { name: 'Suralink', icon: '/assets/images/bill.svg' },
      { name: 'Adobe Acrobat Pro', icon: '/assets/images/zoho.svg' },
    ],
  },
  {
    name: 'Audit Software',
    icon: <SearchOutlinedIcon />,
    tools: [
      { name: 'Checkpoint (Thomson Reuters)', icon: '/assets/images/sage.svg' },
      { name: 'CCH IntelliConnect', icon: '/assets/images/cpa_accounting.svg' },
      { name: 'FASB Codification (ASC)', icon: '/assets/images/netsuite.svg' },
      { name: 'AICPA Online Professional Library', icon: '/assets/images/quickbook.svg' },
      { name: 'Bloomberg Tax', icon: '/assets/images/dynamic365.svg' },
    ],
  },
];

export default function TaxToolsSection(props) {
  return (
    <ToolsTabsSection
      id="tax-tools"
      badge="Software Expertise"
      title="Your Audit Tools. Our Expertise."
      subtitle="We work with the accounting and audit platforms your team already uses, helping you maintain your existing workflows instead of rebuilding your process around a new system."
      tabs={taxToolsTabs}
      maxWidth="xl"
      {...props}
    />
  );
}
