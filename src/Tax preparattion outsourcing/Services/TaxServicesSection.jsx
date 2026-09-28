'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
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

const taxServicesData = [
  {
    number: '01',
    badgeNumber: 1,
    title: 'Individual Tax Preparation (Form 1040)',
    description: 'Accuracy, optimization of credits, and seamless data flow',
    focus: 'Accuracy, optimization of credits, and seamless data flow',
    icon: <CalculateOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Workpaper Preparation & Indexing',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Organizing digital "shoeboxes" into bookmarked, hyperlinked PDF workpapers',
          'Cross-referencing source documents (W-2, 1099, 1098) with the draft tax return',
        ],
      },
      {
        title: 'Income & Investment Reporting',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Schedule C: Profit/Loss from Business (Self-employed) with home office and auto-expense calculation',
          'Schedule D: Capital Gains/Losses reconciliation from brokerage statements (1099-B)',
          'Schedule E: Rental property income and expense tracking (including depreciation)',
        ],
      },
      {
        title: 'Credits & Deductions Optimization',
        icon: <PurpleGroupIcon />,
        cardBg: '#FAF5FF',
        borderColor: '#F3E8FF',
        dotColor: '#9333EA',
        points: [
          'Itemized Deductions (Schedule A) vs. Standard Deduction comparison',
          'Calculation of Child Tax Credits (CTC), Education Credits (1098-T), and Energy Credits',
        ],
      },
    ],
  },
  {
    number: '02',
    badgeNumber: 2,
    title: 'Business Tax Compliance (1065, 1120, 1120S)',
    description: 'Precision in book-to-tax adjustments and shareholder reporting',
    focus: 'Precision in book-to-tax adjustments and shareholder reporting',
    icon: <AssignmentOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Entity-Specific Preparation',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Form 1120/1120S: Federal and State Corporate/S-Corp income tax returns',
          'Form 1065: Partnership returns with complex capital account maintenance',
        ],
      },
      {
        title: 'Technical Tax Tasks',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'M-1 & M-3 Reconciliations: Bridging the gap between financial net income and taxable income',
          'Fixed Asset & Depreciation: MACRS vs. Section 179/Bonus Depreciation optimization',
          'Shareholder Basis Tracking: Maintaining accurate basis logs to ensure tax-free distributions',
        ],
      },
      {
        title: 'Year-End Information Returns',
        icon: <PurpleGroupIcon />,
        cardBg: '#FAF5FF',
        borderColor: '#F3E8FF',
        dotColor: '#9333EA',
        points: [
          'Bulk 1099-NEC/MISC preparation and electronic filing for contractors',
        ],
      },
    ],
  },
  {
    number: '03',
    badgeNumber: 3,
    title: 'International Tax Compliance (Inbound & Outbound)',
    description: 'Specialized expertise in high-penalty IRS disclosure forms',
    focus: 'Specialized expertise in high-penalty IRS disclosure forms',
    icon: <MenuBookOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Inbound (Foreign-Owned US Entities)',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Form 5472 & 1120: Reporting transactions between US corporations and 25% foreign shareholders',
          'FIRPTA Compliance: Forms 8288/8288-A for foreign persons selling US real estate',
        ],
      },
      {
        title: 'Outbound (US Entities/Persons Overseas)',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Form 5471: Information returns for US persons with respect to certain Foreign Corporations (CFCs)',
          'Form 8865: Reporting interests in Foreign Partnerships',
          'GILTI & Subpart F: Calculation of Global Intangible Low-Taxed Income',
        ],
      },
      {
        title: 'Individual International Reporting',
        icon: <PurpleGroupIcon />,
        cardBg: '#FAF5FF',
        borderColor: '#F3E8FF',
        dotColor: '#9333EA',
        points: [
          'FBAR (FinCEN 114): Reporting foreign bank and financial accounts',
          'Form 8938 (FATCA): Statement of specified foreign financial assets',
          'Form 2555: Foreign Earned Income Exclusion for US expats',
        ],
      },
    ],
  },
  {
    number: '04',
    badgeNumber: 4,
    title: 'Indirect Tax (Sales & Use Tax)',
    description: 'Multi-state Nexus protection for E-commerce and Retail',
    focus: 'Multi-state Nexus protection for E-commerce and Retail',
    icon: <AssessmentOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Nexus Identification',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Economic and Physical Nexus studies to determine state filing obligations',
        ],
      },
      {
        title: 'Compliance & Filing',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Registration for State Sales Tax permits',
          'Monthly, Quarterly, and Annual Sales Tax return preparation and remittance via Avalara or TaxJar',
        ],
      },
      {
        title: 'Audit Support',
        icon: <PurpleGroupIcon />,
        cardBg: '#FAF5FF',
        borderColor: '#F3E8FF',
        dotColor: '#9333EA',
        points: [
          'Gathering documentation for State Sales Tax audits and responding to nexus inquiries',
        ],
      },
    ],
  },
  {
    number: '05',
    badgeNumber: 5,
    title: 'Specialized Statutory & Trust Filings',
    description: 'Niche tax areas for high-net-worth and non-profit clients',
    focus: 'Niche tax areas for high-net-worth and non-profit clients',
    icon: <SyncOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Exempt Organizations',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Form 990 / 990-PF: Annual information returns for Non-profits and Private Foundations',
        ],
      },
      {
        title: 'Trust & Estate Taxation',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
        points: [
          'Form 1041: Fiduciary income tax returns and beneficiary K-1 issuance',
          'Form 706/709: Estate and Gift tax return preparation',
        ],
      },
    ],
  },
];

export default function TaxServicesSection(props) {
  return (
    <ExpandableListSection
      id="tax-services"
      badge="Services"
      title="Our Tax Preparation Outsourcing Services"
      subtitle="Support your tax workload with experienced professionals handling tax returns, compliance tasks, and workpaper preparation for CPA firms and businesses."
      items={taxServicesData}
      initialVisibleCount={5}
      {...props}
    />
  );
}
