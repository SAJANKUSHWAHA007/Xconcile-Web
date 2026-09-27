'use client';

import * as React from 'react';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ExpandableListSection from '@/components/common/ExpandableListSection';

const accountingServicesData = [
  {
    number: '01',
    title: 'Accounting & Bookkeeping',
    description:
      'Manage your day-to-day accounting with organized bookkeeping and reliable financial reporting support.',
    icon: <CalculateOutlinedIcon />,
    pointsTitle: 'Key services:',
    points: [
      'General ledger maintenance',
      'Bank and account reconciliations',
      'Accounts payable and receivable',
      'Month-end closing',
      'Financial statement preparation',
      'Catch-up and cleanup bookkeeping',
    ],
    ctaLabel: 'Explore Accounting & Bookkeeping',
  },
  {
    number: '02',
    title: 'Audit & Assurance',
    description:
      'Support your audit engagements with experienced professionals handling documentation, testing, workpapers, and related audit.',
    icon: <FactCheckOutlinedIcon />,
    pointsTitle: 'Key services:',
    points: [
      'Audit preparation and workpapers',
      'Internal control evaluations',
      'Substantive audit testing',
      'US GAAP & PCAOB compliance support',
      'Trial balance & variance analysis',
      'External auditor liaison',
    ],
    ctaLabel: 'Explore Audit & Assurance',
    ctaHref: '/audit-outsourcing-services',
  },
  {
    number: '03',
    title: 'Tax Preparation',
    description:
      'Get support with individual and business tax returns, tax workpapers, compliance tasks, and related preparation activities.',
    icon: <MenuBookOutlinedIcon />,
    pointsTitle: 'Key services:',
    points: [
      'Federal & multi-state tax returns',
      'Form 1040, 1065, 1120 & 1120-S filing',
      'Book-to-tax reconciliations (M-1/M-3)',
      'K-1 distribution and schedules',
      'Fixed asset & depreciation tracking',
      'Year-round IRS compliance support',
    ],
    ctaLabel: 'Explore Tax Preparation',
  },
  {
    number: '04',
    title: 'Multi-State Sales & Use Tax Compliance',
    description:
      'Manage multi-state sales and use tax requirements with support for registrations, taxability reviews, and filings.',
    icon: <BarChartOutlinedIcon />,
    pointsTitle: 'Key services:',
    points: [
      'Economic & physical nexus determination',
      'State registration & exemption certificates',
      'Product & service taxability analysis',
      'Automated filing via Avalara & TaxJar',
      'Timely return remittance & tracking',
      'State audit defense & notice resolution',
    ],
    ctaLabel: 'Explore Sales & Use Tax Compliance',
    ctaHref: '/multi-state-sales-tax-compliance',
  },
  {
    number: '05',
    title: 'Payroll & Compliance',
    description:
      'Keep payroll activities organized with support for processing, reporting, reconciliations, employee records, and compliance tasks.',
    icon: <SyncOutlinedIcon />,
    pointsTitle: 'Key services:',
    points: [
      'Multi-state payroll processing & direct deposit',
      'Form 941 quarterly federal reporting',
      'Year-end W-2 and 1099 filings',
      'State unemployment tax compliance',
      'Software setup (Gusto, ADP, Paychex)',
      'Wage garnishments & benefit deductions',
    ],
    ctaLabel: 'Explore Payroll & Compliance',
  },
  // Additional services revealed on "Show more services (3)"
  {
    number: '06',
    title: 'Virtual CFO & FP&A',
    description:
      'Gain strategic executive-level financial guidance, cash flow forecasting, budgeting, and KPI monitoring tailored to your business goals.',
    icon: <TrendingUpOutlinedIcon />,
    pointsTitle: 'Key services:',
    points: [
      'Strategic financial planning & forecasting',
      '13-week rolling cash flow projections',
      'Capital allocation & budgeting advisory',
      'Board & investor presentation support',
      'Growth scenario & financial modeling',
      'KPI dashboards & performance benchmarking',
    ],
    ctaLabel: 'Explore Virtual CFO & FP&A',
  },
  {
    number: '07',
    title: 'Hire Dedicated Accountants',
    description:
      'Augment your finance and accounting department with dedicated offshore CPAs and experienced accountants.',
    icon: <PeopleAltOutlinedIcon />,
    pointsTitle: 'Key services:',
    points: [
      'Vetted US-GAAP trained accounting talent',
      'Full-time or part-time flexible staffing',
      'Seamless integration with your in-house tools',
      'Dedicated account manager oversight',
      'Direct daily communication via Slack/Teams',
      'Scalable capacity for busy tax seasons',
    ],
    ctaLabel: 'Explore Dedicated Accountants',
  },
  {
    number: '08',
    title: 'Revenue Cycle Management',
    description:
      'Streamline accounts payable, billing, and accounts receivable processes, ensuring timely invoices, vendor payments, and cash flow tracking.',
    icon: <AccountBalanceOutlinedIcon />,
    pointsTitle: 'Key services:',
    points: [
      'Automated customer billing & electronic invoicing',
      'Accounts receivable aging & follow-ups',
      'Payment gateway & merchant reconciliations',
      'Bad debt mitigation & collections management',
      'Cash receipts application & credit memos',
      'Revenue recognition compliance (ASC 606)',
    ],
    ctaLabel: 'Explore Revenue Cycle Management',
  },
];

export default function ServicesSection() {
  return (
    <ExpandableListSection
      id="services"
      badge="Services"
      title="Our Accounting Outsourcing Services"
      subtitle="From everyday bookkeeping to strategic financial planning, our outsourced accounting services help businesses maintain accurate financial records,"
      items={accountingServicesData}
      initialVisibleCount={5}
      showMoreLabel="Show more services"
      showLessLabel="Show less services"
    />
  );
}
