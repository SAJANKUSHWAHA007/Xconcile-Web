'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ExpandableListSection from '@/components/common/ExpandableListSection';

const BlueDocIcon = () => (
  <Box
    sx={{
      width: 28,
      height: 28,
      borderRadius: '7px',
      background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      boxShadow: '0 2px 6px rgba(37, 99, 235, 0.25)',
    }}
  >
    <DescriptionOutlinedIcon sx={{ fontSize: 16 }} />
  </Box>
);

const GreenTaxIcon = () => (
  <Box
    sx={{
      width: 28,
      height: 28,
      borderRadius: '7px',
      background: 'linear-gradient(135deg, #22C55E 0%, #15803D 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      boxShadow: '0 2px 6px rgba(34, 197, 94, 0.25)',
    }}
  >
    <ReceiptLongOutlinedIcon sx={{ fontSize: 16 }} />
  </Box>
);

const PurpleGroupIcon = () => (
  <Box
    sx={{
      width: 28,
      height: 28,
      borderRadius: '7px',
      background: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      boxShadow: '0 2px 6px rgba(168, 85, 247, 0.25)',
    }}
  >
    <GroupsOutlinedIcon sx={{ fontSize: 16 }} />
  </Box>
);

const auditServicesData = [
  {
    number: '01',
    badgeNumber: 1,
    title: 'Audit Planning & Risk Assessment',
    description: 'Strategic groundwork to ensure a focused and efficient audit',
    focus: 'Strategic groundwork to ensure a focused and efficient audit',
    icon: <CalculateOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Pre-Audit Engagement Support',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          "Rolling forward the previous year's electronic audit files in software like CaseWare, AdvanceFlow, or CCH Axcess",
          'Drafting Engagement Letters and Independence Confirmations for the audit team',
        ],
      },
      {
        title: 'Materiality & Risk Identification',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Calculating Overall Materiality and Performance Materiality based on the chosen benchmark (e.g., Total Assets or Revenue)',
          'Preparing Planning Analytics (Flux Analysis) to identify significant account balances and unusual trends',
          'Documenting the "Understanding of the Entity" and identifying fraud risk factors',
        ],
      },
      {
        title: 'PBC (Provided by Client) Management',
        icon: <PurpleGroupIcon />,
        cardBg: '#FAF5FF',
        borderColor: '#F3E8FF',
        dotColor: '#9333EA',
        points: [
          'Creating and managing a detailed PBC Checklist to track document status and follow up on missing items',
        ],
      },
    ],
  },
  {
    number: '02',
    badgeNumber: 2,
    title: 'Substantive Testing & Execution',
    description: 'The "Heavy Lifting" of verifying account balances',
    focus: 'The "Heavy Lifting" of verifying account balances',
    icon: <FactCheckOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Sample Selection & Testing',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Using IDEA or ACL to perform statistical and non-statistical sampling',
          'Vouching: Tracing samples from the General Ledger to source documents (Invoices, BOLs, Contracts)',
          'Tracing: Selecting source documents and tracing them into the General Ledger to ensure completeness',
        ],
      },
      {
        title: 'Account-Specific Scrutiny',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Cash: Preparing bank reconciliations and performing "Casting" procedures on bank statements',
          'Accounts Receivable: Managing the Confirmation Process (preparing, sending, and tracking responses via Confirmation.com)',
          'Inventory: Reviewing physical inventory count sheets and performing "Price Testing" (lower of cost or market)',
          'Search for Unrecorded Liabilities: Reviewing post-balance sheet payments to ensure proper period cutoff',
        ],
      },
    ],
  },
  {
    number: '03',
    badgeNumber: 3,
    title: 'Internal Control & Compliance Testing',
    description: 'Testing the "Plumbing" of the organization',
    focus: 'Testing the "Plumbing" of the organization',
    icon: <MenuBookOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Walkthroughs & Narratives',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Documenting process walkthroughs (Sales, Payroll, Purchasing) through flowcharts and narratives',
          'Identifying "Key Controls" within the transaction cycles',
        ],
      },
      {
        title: 'Control Testing (SOC/SOX)',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Testing the Operating Effectiveness of internal controls (e.g., verifying that all checks over $5,000 have two signatures)',
          'Reporting control deficiencies (Significant Deficiencies vs. Material Weaknesses) to the onshore team',
        ],
      },
      {
        title: 'Compliance Audits',
        icon: <PurpleGroupIcon />,
        cardBg: '#FAF5FF',
        borderColor: '#F3E8FF',
        dotColor: '#9333EA',
        points: [
          'Verifying adherence to industry-specific regulations (e.g., HIPAA for Healthcare or HUD for Real Estate)',
        ],
      },
    ],
  },
  {
    number: '04',
    badgeNumber: 4,
    title: 'Financial Statement Preparation & Finalization',
    description: 'The "Last Mile" of the audit engagement',
    focus: 'The "Last Mile" of the audit engagement',
    icon: <AssessmentOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Reporting & Disclosure',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Drafting the Full Disclosure Financial Statements (P&L, Balance Sheet, Cash Flow, Footnotes) as per US GAAP',
          'Completing Disclosure Checklists to ensure every mandatory footnote is included',
        ],
      },
      {
        title: 'Tie-out & Quality Review',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Performing a "Mathematical Accuracy" (Casting) check on the entire financial report',
          'Indexing & Cross-Referencing: Linking every number in the financial statements back to the supporting lead schedule',
        ],
      },
      {
        title: 'Completion Procedures',
        icon: <PurpleGroupIcon />,
        cardBg: '#FAF5FF',
        borderColor: '#F3E8FF',
        dotColor: '#9333EA',
        points: [
          'Drafting the Management Letter Points (MLPs) and the Audit Summary Memo',
          'Preparing the "Representation Letter" for management signature',
        ],
      },
    ],
  },
  {
    number: '05',
    badgeNumber: 5,
    title: 'Specialized Audit Support (Niche Areas)',
    description: 'High-margin expertise for specific US requirements',
    focus: 'High-margin expertise for specific US requirements',
    icon: <SyncOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Employee Benefit Plan (EBP) Audits',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Testing participant eligibility, contributions, and distributions for 401(k) or 403(b) plans',
        ],
      },
      {
        title: 'Governmental & Single Audits',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Support for Yellow Book audits and Uniform Guidance (Single Audit) compliance for non-profits receiving federal funds',
        ],
      },
      {
        title: 'Agreed-Upon Procedures (AUP)',
        icon: <PurpleGroupIcon />,
        cardBg: '#FAF5FF',
        borderColor: '#F3E8FF',
        dotColor: '#9333EA',
        points: [
          'Performing specific testing on limited financial areas as requested by third parties (e.g., royalty audits or loan covenant compliance)',
        ],
      },
    ],
  },
];

export default function AuditServicesSection(props) {
  return (
    <ExpandableListSection
      id="audit-services"
      badge="Services"
      title="Audit Outsourcing Services"
      subtitle="Our outsourced accounting services help businesses maintain accurate financial records, manage compliance, and gain actionable insights."
      items={auditServicesData}
      initialVisibleCount={5}
      {...props}
    />
  );
}

