'use client';

import * as React from 'react';
import TestimonialsSection from '@/components/common/TestimonialsSection';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const homeTestimonialsData = [
  {
    category: 'CPA Firms',
    title: 'CPA Firms',
    image: '/assets/images/testimonial.svg',
    badgeLabel: 'Workload Impact',
    badgeValue: '42% Reduced',
    badgeIcon: <TrendingDownOutlinedIcon sx={{ fontSize: 20 }} />,
    challenge:
      "Growing client workloads were putting pressure on the firm's internal accounting capacity.",
    solution:
      "Dedicated outsourced accounting support integrated with the firm's existing workflow. Our team seamlessly took over day-to-day bookkeeping, monthly closes, and compliance preparations.",
    result:
      'Improved financial visibility, streamlined day-to-day operations, and reduced internal accounting workload.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
  {
    category: 'Real Estate',
    title: 'Real Estate',
    image: '/assets/images/testimonial.svg',
    badgeLabel: 'Reporting Speed',
    badgeValue: '3x Faster',
    badgeIcon: <SpeedOutlinedIcon sx={{ fontSize: 20 }} />,
    challenge:
      'Multiple property entities and scattered rental income records caused month-end reconciliations to drag on for weeks.',
    solution:
      'Consolidated multi-entity bookkeeping and automated rent ledger reconciliations under standard operating procedures tailored for property management.',
    result:
      'Month-end close completed in 4 days instead of 18, with real-time property performance dashboards accessible to investors.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
  {
    category: 'Healthcare',
    title: 'Healthcare Clinics',
    image: '/assets/images/testimonial.svg',
    badgeLabel: 'Cost Efficiency',
    badgeValue: '35% Saved',
    badgeIcon: <SavingsOutlinedIcon sx={{ fontSize: 20 }} />,
    challenge:
      'Complex insurance billing reconciliations and payroll across multiple medical branches created audit bottlenecks.',
    solution:
      'Assigned a dedicated healthcare accounting pod to standardize payroll compliance and daily patient ledger reconciliations.',
    result:
      'Zero compliance penalties, completely auditable financial books, and a 35% reduction in internal overhead costs.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
  {
    category: 'E-Commerce',
    title: 'E-Commerce & Retail',
    image: '/assets/images/testimonial.svg',
    badgeLabel: 'Accuracy Rate',
    badgeValue: '99.8% Accurate',
    badgeIcon: <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />,
    challenge:
      'High-volume transactions across Amazon, Shopify, and Stripe resulted in constant payment gateway mismatch and inventory discrepancy.',
    solution:
      'Connected automated sync tools and implemented daily multi-channel payout reconciliation with COGS inventory tracking.',
    result:
      'Fully eliminated reconciliations lag, accurate sales tax filings across 15+ states, and crystal-clear margin reports.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
  {
    category: 'Technology',
    title: 'Technology & SaaS',
    image: '/assets/images/testimonial.svg',
    badgeLabel: 'Close Cycle',
    badgeValue: '60% Faster',
    badgeIcon: <SpeedOutlinedIcon sx={{ fontSize: 20 }} />,
    challenge:
      'Tracking recurring subscription revenue (ASC 606), churn accruals, and runway projections demanded senior accounting expertise.',
    solution:
      'Deployed experienced SaaS accounting specialists to handle deferred revenue recognition and monthly investor reporting packs.',
    result:
      'Flawless financial statements prepared on time every month, empowering founders to raise series funding with investor-ready books.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
];

export default function HomeTestimonialsSection() {
  return (
    <TestimonialsSection
      id="testimonials"
      badge="Testimonials"
      title="Trusted by Businesses & CPA Firms"
      subtitle="We work with the accounting platforms and business tools your company already uses."
      items={homeTestimonialsData}
      imagePosition="right"
      maxWidth="xl"
    />
  );
}
