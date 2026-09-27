'use client';

import * as React from 'react';
import AccountingTeamBannerSection from '@/components/common/AccountingTeamBannerSection';

export default function TeamBannerSection(props) {
  return (
    <AccountingTeamBannerSection
      id="multi-state-team-banner"
      title={
        <>
          Need Skilled Accounting
          <br />
          Resources for Your Team?
        </>
      }
      subtitle="Build your accounting capacity with experienced professionals who can work as an extension of your team"
      buttonText="Hire Accounting Professionals"
      buttonHref="#contact"
      bgImage="/assets/images/accounting-team.svg"
      overlayGradient="linear-gradient(90deg, #13212CE5 0%, #173345CC 100%)"
      {...props}
    />
  );
}
