'use client';

import * as React from 'react';
import FaqAccordionSection from '@/components/common/FaqAccordionSection';

export const homeFaqItems = [
  {
    question: 'What outsourced accounting services does Xconcile provide?',
    answer:
      'Xconcile provides end-to-end accounting support, including day-to-day bookkeeping, financial statement preparation, accounts payable & receivable management, payroll processing, tax preparation, multi-state sales tax compliance, and virtual CFO services.',
  },
  {
    question: 'Who can benefit from outsourced accounting services?',
    answer:
      'Growing startups, mid-sized enterprises, CPA firms, and established companies looking to reduce overhead costs, eliminate bookkeeping backlog, and access experienced finance professionals without the hassle of hiring in-house staff.',
  },
  {
    question: 'Can Xconcile work with our existing accounting software?',
    answer:
      'Yes. Our team seamlessly integrates with all major accounting platforms including QuickBooks, NetSuite, Xero, Sage Intacct, Microsoft Dynamics 365, FreshBooks, Bill.com, and industry-specific ERP systems.',
  },
  {
    question: 'Can we outsource only certain accounting tasks?',
    answer:
      'Absolutely. We offer flexible engagement models. You can outsource specific tasks—such as month-end reconciliations, payroll, or tax filings—or engage a full-time dedicated accounting team based on your workload.',
  },
  {
    question: 'How does the outsourced accounting process work?',
    answer:
      'Our onboarding is simple and structured: 1) Initial discovery to understand your workflow and tools, 2) Secure setup and access delegation, 3) Dedicated accounting manager assignment, and 4) Ongoing execution with real-time reporting and periodic reviews.',
  },
  {
    question: 'Can CPA firms outsource accounting work to Xconcile?',
    answer:
      'Yes. We partner extensively with U.S. CPA and accounting firms to handle substantive audit workpapers, tax preparation during busy seasons, client catch-up bookkeeping, and back-office reconciliations under strict SOC 1 & SOC 2 compliance.',
  },
];

export default function FaqSection() {
  return (
    <FaqAccordionSection
      id="faq"
      badge="FAQ"
      title={'Frequently asked\nquestions'}
      subtitle={"Still have Questions?\nDrop us a message and we'll get back to you"}
      items={homeFaqItems}
      maxWidth="xl"
      background="#FFFFFF"
    />
  );
}
