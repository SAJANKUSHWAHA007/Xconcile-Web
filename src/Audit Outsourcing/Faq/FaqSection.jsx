"use client";

import * as React from "react";
import FaqAccordionSection from "@/components/common/FaqAccordionSection";

export const auditFaqItems = [
  {
    question: "What audit software do you support?",
    answer:
      "We work directly in your existing audit software including CaseWare, CCH Engagement (Axcess Audit), AdvanceFlow, and other major platforms to ensure seamless integration.",
  },
  {
    question: "Are you GAAS and PCAOB compliant?",
    answer:
      "Yes, all our audit work adheres to strict GAAS and PCAOB standards. Every file undergoes multi-tier review by specialists and senior managers before delivery.",
  },
  {
    question: "Can you handle specialized audits?",
    answer:
      "Absolutely. We support Employee Benefit Plan (EBP) audits, Governmental and Single Audits (Yellow Book), and Agreed-Upon Procedures (AUP) engagements for various industries.",
  },

  {
    question: "What audit outsourcing services does Xconcile provide?",
    answer:
      "Xconcile provides comprehensive audit outsourcing services for U.S. CPA firms, including audit planning support, financial statement audits, audit documentation, workpaper preparation, risk assessment, internal control testing, and reviewer-ready files. Our team helps firms streamline audit engagements while maintaining quality and compliance.",
  },
  {
    question:
      "Can Xconcile assist with financial statement audits and audit documentation?",
    answer:
      "Absolutely. We support financial statement audits by preparing audit workpapers, organizing audit documentation, performing testing procedures, assisting with risk assessments, and delivering reviewer-ready files that help improve audit efficiency and accuracy.",
  },
  {
    question:
      "Why do U.S. CPA firms choose Xconcile for audit outsourcing services?",
    answer:
      "CPA firms choose Xconcile because we combine technical expertise, scalable audit support, and a commitment to quality. Our audit outsourcing services help firms improve productivity, meet tight deadlines, maintain compliance, and deliver exceptional audit and assurance services without compromising quality.",
  },
];

export default function FaqSection() {
  return (
    <FaqAccordionSection
      id="faq"
      badge="FAQ"
      title={"Frequently asked\nquestions"}
      subtitle={
        "Still have Questions?\nDrop us a message and we'll get back to you"
      }
      buttonText="Get in Touch"
      buttonHref="#contact"
      items={auditFaqItems}
      maxWidth="xl"
      background="#FFFFFF"
    />
  );
}
