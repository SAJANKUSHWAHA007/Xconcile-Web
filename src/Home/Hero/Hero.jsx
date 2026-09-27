'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import HeroSection from '@/components/common/HeroSection';

export default function HomeHero() {
  return (
    <HeroSection
      id="hero"
      badge="Trusted by 1,000+ U.S. Accounting Firms"
      title={
        <>
          <Box component="span" sx={{ display: 'block', whiteSpace: { md: 'nowrap' } }}>
            Outsourced{' '}
            <Box component="span" sx={{ color: '#6ABE52', display: 'inline' }}>
              Accounting
            </Box>
          </Box>
          <Box component="span" sx={{ display: 'block', whiteSpace: { md: 'nowrap' } }}>
            Services for US Businesses
          </Box>
        </>
      }
      subtitle="We provide outsourced accounting and bookkeeping services for U.S. businesses and CPA firms, including reconciliations, financial reporting, AP, AR, and ongoing accounting support."
      primaryButtonText="Get a Free Consultation"
      primaryButtonHref="#contact"
      trustBadges={['ISO/IEC 27001:2022', 'US GAAP Expertise']}
      graphicImage="/assets/images/hero_section_image.png"
      hideGraphicOnMobile={true}
    />
  );
}
