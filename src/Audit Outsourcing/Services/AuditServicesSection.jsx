'use client';

import * as React from 'react';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import ExpandableListSection from '@/components/common/ExpandableListSection';

const auditServicesData = [
  {
    number: '01',
    title: 'Audit Planning & Risk Assessment',
    description: 'Strategic groundwork to ensure a focused and efficient audit',
    icon: <CalculateOutlinedIcon />,
    ctaLabel: 'Explore Audit Planning',
    groups: [
      {
        title: 'Pre-Audit Engagement Support',
        points: [
          "Rolling forward the previous year's electronic audit files in software like CaseWare, AdvanceFlow, or CCH Axcess",
          'Drafting Engagement Letters and Independence Confirmations for the audit team',
        ],
      },
      {
        title: 'Materiality & Risk Identification',
        points: [
          'Calculating Overall Materiality and Performance Materiality based on the chosen benchmark (e.g., Total Assets or Revenue)',
          'Preparing Planning Analytics (Flux Analysis) to identify significant account balances and unusual trends',
          'Documenting the "Understanding of the Entity" and identifying fraud risk factors',
        ],
      },
      {
        title: 'PBC (Provided by Client) Management',
        points: [
          'Creating and managing a detailed PBC Checklist to track document status and follow up on missing items',
        ],
      },
    ],
  },
  {
    number: '02',
    title: 'Substantive Testing & Execution',
    description: 'The "Heavy Lifting" of verifying account balances',
    icon: <FactCheckOutlinedIcon />,
    ctaLabel: 'Explore Substantive Testing',
    groups: [
      {
        title: 'Sample Selection & Testing',
        points: [
          'Using IDEA or ACL to perform statistical and non-statistical sampling',
          'Vouching: Tracing samples from the General Ledger to source documents (Invoices, BOLs, Contracts)',
          'Tracing: Selecting source documents and tracing them into the General Ledger to ensure completeness',
        ],
      },
      {
        title: 'Account-Specific Scrutiny',
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
    title: 'Internal Control & Compliance Testing',
    description: 'Testing the "Plumbing" of the organization',
    icon: <MenuBookOutlinedIcon />,
    ctaLabel: 'Explore Internal Controls',
    groups: [
      {
        title: 'Walkthroughs & Narratives',
        points: [
          'Documenting process walkthroughs (Sales, Payroll, Purchasing) through flowcharts and narratives',
          'Identifying "Key Controls" within the transaction cycles',
        ],
      },
      {
        title: 'Control Testing (SOC/SOX)',
        points: [
          'Testing the Operating Effectiveness of internal controls (e.g., verifying that all checks over $5,000 have two signatures)',
          'Reporting control deficiencies (Significant Deficiencies vs. Material Weaknesses) to the onshore team',
        ],
      },
      {
        title: 'Compliance Audits',
        points: [
          'Verifying adherence to industry-specific regulations (e.g., HIPAA for Healthcare or HUD for Real Estate)',
        ],
      },
    ],
  },
  {
    number: '04',
    title: 'Financial Statement Preparation & Finalization',
    description: 'The "Last Mile" of the audit engagement',
    icon: <AssessmentOutlinedIcon />,
    ctaLabel: 'Explore Financial Statement Prep',
    groups: [
      {
        title: 'Reporting & Disclosure',
        points: [
          'Drafting the Full Disclosure Financial Statements (P&L, Balance Sheet, Cash Flow, Footnotes) as per US GAAP',
          'Completing Disclosure Checklists to ensure every mandatory footnote is included',
        ],
      },
      {
        title: 'Tie-out & Quality Review',
        points: [
          'Performing a "Mathematical Accuracy" (Casting) check on the entire financial report',
          'Indexing & Cross-Referencing: Linking every number in the financial statements back to the supporting lead schedule',
        ],
      },
      {
        title: 'Completion Procedures',
        points: [
          'Drafting the Management Letter Points (MLPs) and the Audit Summary Memo',
          'Preparing the "Representation Letter" for management signature',
        ],
      },
    ],
  },
  {
    number: '05',
    title: 'Specialized Audit Support (Niche Areas)',
    description: 'High-margin expertise for specific US requirements',
    icon: <SyncOutlinedIcon />,
    ctaLabel: 'Explore Specialized Audit Support',
    groups: [
      {
        title: 'Employee Benefit Plan (EBP) Audits',
        points: [
          'Testing participant eligibility, contributions, and distributions for 401(k) or 403(b) plans',
        ],
      },
      {
        title: 'Governmental & Single Audits',
        points: [
          'Support for Yellow Book audits and Uniform Guidance (Single Audit) compliance for non-profits receiving federal funds',
        ],
      },
      {
        title: 'Agreed-Upon Procedures (AUP)',
        points: [
          'Performing specific testing on limited financial areas as requested by third parties (e.g., royalty audits or loan covenant compliance)',
        ],
      },
    ],
  },
];

export default function AuditServicesSection() {
  return (
    <ExpandableListSection
      id="audit-services"
      badge="Services"
      title="Audit Outsourcing Services"
      subtitle="our outsourced accounting services help businesses maintain accurate financial records,"
      items={auditServicesData}
      initialVisibleCount={5}
    />
  );
}
