'use client';

import * as React from 'react';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';

export const navDropdownData = {
  services: {
    key: 'services',
    label: 'Services',
    headerTitle: 'SERVICES',
    hasCta: true,
    cta: {
      badge: 'PARTNER WITH US',
      description: 'Let our expert team handle your finances while you focus on what you do best.',
      buttonText: 'Free Consultation',
      buttonHref: '#contact',
    },
    items: [
      {
        title: 'Audit Outsourcing Services',
        description: 'Trusted audit and assurance support services for CPA firms and growing businesses.',
        icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Multi-State Sales & Use Tax Compliance',
        description: 'Reliable sales & use tax compliance support for multi-state operations.',
        icon: <BusinessCenterOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Outsourced Accounting & Bookkeeping',
        description: 'Comprehensive outsourced bookkeeping and financial reporting services.',
        icon: <MenuBookOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Outsourced Payroll & Compliance Services',
        description: 'Seamless payroll processing and regulatory compliance solutions.',
        icon: <GroupsOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Outsourced Tax Preparation',
        description: 'Outsourced tax preparation services for U.S. CPA firms and enterprises.',
        icon: <CalculateOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Outsourced Virtual CFO & FP&A',
        description: 'Expert virtual CFO & FP&A outsourcing services for strategic decision making.',
        icon: <TrendingUpOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
    ],
  },

  hire: {
    key: 'hire',
    label: 'Hire Our Staff',
    headerTitle: 'HIRE OUR STAFF',
    hasCta: true,
    cta: {
      badge: 'PARTNER WITH US',
      description: 'Let our expert team handle your finances while you focus on what you do best.',
      buttonText: 'Free Consultation',
      buttonHref: '#contact',
    },
    items: [
      {
        title: 'Hire Audit and Assurance',
        description: 'GAAS-trained audit professionals performing substantive testing and workpapers.',
        icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Hire Bookkeeper / Accountant',
        description: 'Build a world-class bookkeeping team without the overhead of local hiring.',
        icon: <MenuBookOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Hire Payroll and Compliance',
        description: 'SOC 1 & SOC 2 compliant payroll specialists managing full-cycle processing.',
        icon: <GroupsOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Hire Tax Preparation Staff',
        description: 'CPA, EA, and CA credentialed tax preparation staff for busy seasons.',
        icon: <CalculateOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
      {
        title: 'Hire Virtual CFO & FP&A',
        description: 'Senior FP&A analysts and fractional CFOs with 10+ years of advisory experience.',
        icon: <TrendingUpOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#services',
      },
    ],
  },

  industries: {
    key: 'industries',
    label: 'Industries',
    headerTitle: 'INDUSTRIES WE SERVE',
    hasCta: true,
    cta: {
      badge: 'PARTNER WITH US',
      description: 'Let our expert team handle your finances while you focus on what you do best.',
      buttonText: 'Free Consultation',
      buttonHref: '#contact',
    },
    items: [
      {
        title: 'Hospitality and Retail',
        description: 'Prime Cost management, POS reconciliation, and inventory valuation.',
        icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#industries',
      },
      {
        title: 'Industrial & Niche',
        description: 'Specialized accounting for 501(c)(3) non-profits, manufacturing & distribution.',
        icon: <SettingsOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#industries',
      },
      {
        title: 'Medical and Health',
        description: 'HIPAA-compliant accounting for medical practices, clinics, and health systems.',
        icon: <MedicalServicesOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#industries',
      },
      {
        title: 'Professional Services',
        description: 'IOLTA trust accounting, time & billing integration, and partner distributions.',
        icon: <BusinessCenterOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#industries',
      },
      {
        title: 'Real Estate & Construction',
        description: 'Job costing, WIP schedules, property management accounting, and 1031 exchanges.',
        icon: <ApartmentOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#industries',
      },
      {
        title: 'Tech & Ecommerce',
        description: 'ASC 606 revenue recognition, SaaS metrics, and multi-channel marketplace accounting.',
        icon: <DesktopWindowsOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#industries',
      },
    ],
  },

  company: {
    key: 'company',
    label: 'Company',
    headerTitle: 'ABOUT US',
    hasCta: false,
    cta: null,
    items: [
      {
        title: 'Our Company',
        description: 'Learn about our mission, values, and what drives us',
        icon: <ApartmentOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#about-us',
      },
      {
        title: 'Our Team',
        description: 'Meet the talented professionals behind our success',
        icon: <GroupsOutlinedIcon sx={{ fontSize: 22 }} />,
        href: '#our-team',
      },
    ],
  },
};
