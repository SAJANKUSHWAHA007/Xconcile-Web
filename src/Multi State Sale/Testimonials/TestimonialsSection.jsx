'use client';

import * as React from 'react';
import TestimonialsSection from '@/components/common/TestimonialsSection';

export const salesTaxTestimonialsData = [
  {
    category: 'CPA Firms',
    title: 'CPA Firms',
    image: '/assets/images/testimonial.svg',
    challenge: 'Growing workload and limited accounting capacity.',
    solution: 'Dedicated outsourced accounting support.',
    result: 'Better financial visibility, streamlined operations, and reduced accounting workload.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
  {
    category: 'Real Estate',
    title: 'Real Estate',
    image: '/assets/images/testimonial.svg',
    challenge: 'Complex multi-entity property transactions and slow month-end reconciliations.',
    solution: 'Standardized property accounting, rent roll reconciliations, and automated reporting.',
    result: 'Faster closing cycles, error-free investor reports, and timely financial visibility.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
  {
    category: 'E-commerce',
    title: 'E-commerce',
    image: '/assets/images/testimonial.svg',
    challenge: 'High transaction volumes across multiple sales channels and payment gateways.',
    solution: 'Automated marketplace reconciliation with Shopify, Amazon, and Stripe integration.',
    result: 'Real-time revenue visibility, zero discrepancies, and seamless tax compliance.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
  {
    category: 'Construction',
    title: 'Construction',
    image: '/assets/images/testimonial.svg',
    challenge: 'Job costing complexities, subcontractor billings, and cash flow tracking.',
    solution: 'Project-based accounting system with real-time job cost reporting and WIP tracking.',
    result: 'Accurate job profitability margins, organized vendor payments, and clear cash management.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
  {
    category: 'Restaurants',
    title: 'Restaurants',
    image: '/assets/images/testimonial.svg',
    challenge: 'Daily POS reconciliations, high inventory turnover, and payroll fluctuations.',
    solution: 'Daily sales auditing, automated vendor bill management, and precise food cost tracking.',
    result: 'Controlled prime costs, streamlined vendor payables, and accurate multi-location books.',
    ctaLabel: 'View Case Study',
    ctaHref: '#contact',
  },
];

export default function SalesTaxTestimonialsSection(props) {
  return (
    <TestimonialsSection
      id="sales-tax-testimonials"
      badge="Testimonials"
      title="Trusted by Our Clients"
      subtitle="See how Xconcile helps businesses improve efficiency, visibility, and financial operations."
      items={salesTaxTestimonialsData}
      imagePosition="right"
      showFloatingBadge={false}
      maxWidth="xl"
      {...props}
    />
  );
}
