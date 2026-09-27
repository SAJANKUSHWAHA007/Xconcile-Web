'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import CtaBannerSection from '@/components/common/CtaBannerSection';

export default function SalesTaxCtaBannerSection(props) {
  return (
    <CtaBannerSection
      id="sales-tax-cta-banner"
      title={
        <>
          <Box component="span" sx={{ display: 'block', whiteSpace: { sm: 'nowrap' } }}>
            Build the Right Accounting Team for
          </Box>
          <Box component="span" sx={{ display: 'block' }}>
            Your Needs
          </Box>
        </>
      }
      subtitle="Get dedicated accounting professionals matched to your workload, skills, and business requirements."
      primaryButtonText="Talk to an Expert"
      primaryButtonHref="#contact"
      secondaryButtonText="Hire Accounting Staff"
      secondaryButtonHref="#contact"
      backgroundColor="#165A6A"
      {...props}
    />
  );
}
