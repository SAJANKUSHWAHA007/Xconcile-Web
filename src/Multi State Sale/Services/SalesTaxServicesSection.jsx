'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
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

const salesTaxServicesData = [
  {
    number: '01',
    badgeNumber: 1,
    title: 'Nexus Identification & Monitoring',
    description: 'Proactive compliance tracking',
    focus: 'Proactive compliance tracking',
    icon: <CalculateOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Economic Nexus Tracking',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Monitor sales volume against state-specific thresholds',
          'Track transaction counts (e.g., $100k or 200 transactions)',
          'Automated threshold alerts and reporting',
        ],
      },
      {
        title: 'Physical Nexus Analysis',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
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
    badgeNumber: 2,
    title: 'Registration & Permitting',
    description: 'Complete multi-state setup',
    focus: 'Complete multi-state setup',
    icon: <AssignmentOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'State & Local Permitting',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Certificate of Authority applications',
          'Local jurisdiction registrations',
          'Ongoing permit maintenance',
        ],
      },
      {
        title: 'SST Registration',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
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
    badgeNumber: 3,
    title: 'Monthly Filing & Remittance',
    description: 'Accurate, timely compliance',
    focus: 'Accurate, timely compliance',
    icon: <MenuBookOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Home-Rule City Filings',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Manage complex Colorado, Alabama, Louisiana filings',
          'Separate city-level tax returns',
          'Local jurisdiction compliance',
        ],
      },
      {
        title: 'Situs & Sourcing Rules',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
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
    badgeNumber: 4,
    title: 'Advanced Tax Types',
    description: 'Specialized tax management',
    focus: 'Specialized tax management',
    icon: <BarChartOutlinedIcon sx={{ fontSize: 24 }} />,
    groupColumns: 2,
    groups: [
      {
        title: 'Gross Receipts & Franchise Taxes',
        icon: <BlueDocIcon />,
        cardBg: '#F8FAFF',
        borderColor: '#DBEAFE',
        dotColor: '#2563EB',
        points: [
          'Ohio CAT compliance',
          'Texas Franchise Tax management',
          'Washington B&O Tax handling',
        ],
      },
      {
        title: 'Specialized Excise Taxes',
        icon: <GreenTaxIcon />,
        cardBg: '#F6FEF9',
        borderColor: '#DCFCE7',
        dotColor: '#16A34A',
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

