'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import HeroSection from '@/components/common/HeroSection';

export default function AuditHero() {
  return (
    <HeroSection
      id="hero"
      badge="Trusted by 500+ USA Accounting Firms"
      title={
        <>
          <Box component="span" sx={{ display: 'block', whiteSpace: { md: 'nowrap' } }}>
            Audit Outsourcing Services
          </Box>
          <Box component="span" sx={{ display: 'block', whiteSpace: { md: 'nowrap' } }}>
            for CPA Firms &amp; Businesses
          </Box>
        </>
      }
      subtitle="Get reliable audit outsourcing support for U.S. CPA firms. Xconcile supports audit planning, financial statement audits, audit documentation, testing, and assurance work, helping your team manage workloads and keep engagements moving."
      primaryButtonText="Discuss Your Audit Requirements"
      primaryButtonHref="/#contact"
      trustBadges={['ISO 27001 - ISO 27701', 'US GAAP Expertise', 'Strict NDA & Data Security']}
      graphicImage="/assets/images/hero_section_image.png"
      hideGraphicOnMobile={true}
    />
  );
}
