'use client';

import * as React from 'react';
import FaqAccordionSection from '@/components/common/FaqAccordionSection';

export const salesTaxFaqItems = [
  {
    question: 'What is sales & use tax compliance?',
    answer:
      'Sales & use tax compliance is the process of calculating, collecting, filing, and remitting sales and use taxes according to state and local tax regulations. Xconcile helps businesses and CPA firms manage economic nexus, state registrations, multi-state tax filings, and ongoing compliance across all U.S. jurisdictions.',
  },
  {
    question: 'What is economic nexus, and when do i need to collect sales tax?',
    answer:
      'Economic nexus is established when your business exceeds a state\'s sales or transaction thresholds, even without a physical presence. Once nexus is created, you may need to register, collect, and remit sales tax in that state. Xconcile monitors nexus thresholds and helps ensure timely compliance.',
  },
  {
    question: 'How do i know which state require my business to register for sales tax?',
    answer:
      'Sales tax registration requirements depend on where your business has economic or physical nexus. Our experts analyze your business activities, identify states where registration is required, and manage the registration process to keep your business compliant.',
  },
  {
    question: 'Can Xconcile handle multi-state sales tax filings?',
    answer:
      'Yes. Xconcile provides end-to-end multi-state sales & use tax compliance services, including return preparation, filing, nexus monitoring, and ongoing compliance management. We help businesses and CPA firms meet filing deadlines while reducing compliance risks.',
  },
  {
    question: 'What should i outsource sales & use tax compliance?',
    answer:
      'Outsourcing sales & use tax compliance helps reduce administrative workload, improve filing accuracy, minimize compliance risks, and keep up with changing U.S. tax regulations. Xconcile acts as an extension of your team, delivering scalable compliance support for businesses and CPA firms.',
  },
 
  
];

export default function FaqSection(props) {
  return (
    <FaqAccordionSection
      id="sales-tax-faq"
      badge="FAQ"
      title={'Frequently asked\nquestions'}
      subtitle={
        "Still have Questions?\nDrop us a message and we'll get back to you"
      }
      buttonText="Get in Touch"
      buttonHref="#contact"
      items={salesTaxFaqItems}
      maxWidth="xl"
      background="#FFFFFF"
      {...props}
    />
  );
}
