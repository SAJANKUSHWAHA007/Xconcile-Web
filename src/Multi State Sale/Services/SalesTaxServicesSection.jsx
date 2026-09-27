'use client';

import * as React from 'react';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ExpandableListSection from '@/components/common/ExpandableListSection';

const salesTaxServicesData = [
  {
    number: '01',
    title: 'Nexus Identification & Monitoring',
    description: 'Proactive compliance tracking',
    icon: <CalculateOutlinedIcon />,
    ctaLabel: 'Explore Nexus Identification',
    groups: [
      {
        title: 'Economic Nexus Tracking',
        points: [
          'Monitor sales volume against state-specific thresholds',
          'Track transaction counts (e.g., $100k or 200 transactions)',
          'Automated threshold alerts and reporting',
        ],
      },
      {
        title: 'Physical Nexus Analysis',
        points: [
          'Track remote employee impact on nexus',
          'Monitor inventory in third-party warehouses (Amazon FBA)',
          'Analyze traveling sales team activities',
        ],
      },
    ],
  },
  {
    number: '02',
    title: 'Registration & Permitting',
    description: 'Complete multi-state setup',
    icon: <AssignmentOutlinedIcon />,
    ctaLabel: 'Explore Registration & Permitting',
    groups: [
      {
        title: 'State & Local Permitting',
        points: [
          'Certificate of Authority applications',
          'Local jurisdiction registrations',
          'Ongoing permit maintenance',
        ],
      },
      {
        title: 'SST Registration',
        points: [
          'Streamlined Sales Tax registration for 24 SST states',
          'Simplified filing path setup',
          'Cost optimization strategies',
        ],
      },
    ],
  },
  {
    number: '03',
    title: 'Monthly Filing & Remittance',
    description: 'Accurate, timely compliance',
    icon: <MenuBookOutlinedIcon />,
    ctaLabel: 'Explore Monthly Filing & Remittance',
    groups: [
      {
        title: 'Home-Rule City Filings',
        points: [
          'Manage complex Colorado, Alabama, Louisiana filings',
          'Separate city-level tax returns',
          'Local jurisdiction compliance',
        ],
      },
      {
        title: 'Situs & Sourcing Rules',
        points: [
          'Apply correct Origin vs. Destination rules',
          'Accurate local tax rate calculations',
          'Invoice-level tax application',
        ],
      },
    ],
  },
  {
    number: '04',
    title: 'Advanced Tax Types',
    description: 'Specialized tax management',
    icon: <BarChartOutlinedIcon />,
    ctaLabel: 'Explore Advanced Tax Types',
    groups: [
      {
        title: 'Gross Receipts & Franchise Taxes',
        points: [
          'Ohio CAT compliance',
          'Texas Franchise Tax management',
          'Washington B&O Tax handling',
        ],
      },
      {
        title: 'Specialized Excise Taxes',
        points: [
          'Fuel tax compliance',
          'Lodging and occupancy taxes',
          'Environmental fees (green taxes)',
        ],
      },
    ],
  },
];

export default function SalesTaxServicesSection(props) {
  return (
    <ExpandableListSection
      id="sales-tax-services"
      badge="Services"
      title="Our Sales Tax Compliance Services"
      subtitle="Support for sales tax registration, filings, reporting, and compliance across multiple states."
      items={salesTaxServicesData}
      initialVisibleCount={4}
      {...props}
    />
  );
}
