'use client';

import * as React from 'react';
import HeroSection from '@/components/common/HeroSection';

export default function TaxPreparationHero(props) {
  return (
    <HeroSection
      id="hero"
      badge="Trusted by 500+ USA Accounting Firms"
      title={
        <>
          Tax Preparation Outsourcing
          <br />
          Services for US CPA Firms
        </>
      }
      subtitle="Handle increasing audit workloads with experienced professionals who support your team with planning, testing, documentation, financial statement audits, and working papers"
      primaryButtonText="Get Tax Support"
      primaryButtonHref="#contact"
      trustBadges={['Flexible Tax Support', 'Faster Tax Preparation']}
      graphicImage="/assets/images/hero_section_image.png"
      hideGraphicOnMobile={true}
      {...props}
    />
  );
}
