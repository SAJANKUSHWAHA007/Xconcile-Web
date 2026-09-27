'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import HeroSection from '@/components/common/HeroSection';

export default function MultiStateSaleHero() {
  return (
    <HeroSection
      id="hero"
      badge="Tax Compliance Support"
      title={
        <>
          <Box component="span" sx={{ display: 'block' }}>
            Multi-State Sales &amp; Use Tax
          </Box>
          <Box component="span" sx={{ display: 'block' }}>
            Compliance Services
          </Box>
        </>
      }
      subtitle="Manage complex U.S. sales tax requirements with reliable compliance support for businesses and CPA firms. Xconcile helps with nexus analysis, registrations, multi-state filings, reporting, and ongoing sales tax obligations."
      primaryButtonText="Get Started"
      primaryButtonHref="#contact"
      secondaryButtonText="Talk to Tax Experts"
      secondaryButtonHref="#contact"
      trustBadges={['ISO 27001 - ISO 27701', 'US GAAP Expertise']}
      graphicImage="/assets/images/hero_section_image.png"
      hideGraphicOnMobile={true}
    />
  );
}
