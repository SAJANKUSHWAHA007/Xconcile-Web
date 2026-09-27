'use client';

import * as React from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ToolsTabsSection from '@/components/common/ToolsTabsSection';

const auditToolsTabs = [
  {
    name: 'Audit Software',
    icon: <GridViewOutlinedIcon />,
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
    icon: <AssessmentOutlinedIcon />,
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
    name: 'Research & Reference',
    icon: <MenuBookOutlinedIcon />,
    tools: [
      { name: 'Checkpoint (Thomson Reuters)', icon: '/assets/images/sage.svg' },
      { name: 'CCH IntelliConnect', icon: '/assets/images/cpa_accounting.svg' },
      { name: 'FASB Codification (ASC)', icon: '/assets/images/netsuite.svg' },
      { name: 'AICPA Online Professional Library', icon: '/assets/images/quickbook.svg' },
      { name: 'Bloomberg Tax', icon: '/assets/images/dynamic365.svg' },
    ],
  },
];

export default function AuditToolsSection() {
  return (
    <ToolsTabsSection
      id="audit-tools"
      badge="Software Expertise"
      title="Your Tools, Our Expertise"
      subtitle="Work with professionals experienced in major accounting platforms and tools, without changing the workflows your business already relies on."
      tabs={auditToolsTabs}
      maxWidth="xl"
    />
  );
}
