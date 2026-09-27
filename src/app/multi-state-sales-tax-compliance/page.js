import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Hero,
  StatsSection,
  AccountingSupportSection,
  ChallengesSection,
  ServicesSection,
  TeamBannerSection,
  WhyChooseUsSection,
  ProcessSection,
  IndustriesSection,
  TestimonialsSection,
  TrustedClientSection,
  FaqSection,
  CtaBannerSection,
} from '@/Multi State Sale';

export const metadata = {
  title: 'Multi-State Sales & Use Tax Compliance Services | Xconcile',
  description:
    'Manage complex U.S. sales tax requirements with reliable compliance support for businesses and CPA firms. Xconcile helps with nexus analysis, registrations, multi-state filings, reporting, and ongoing sales tax obligations.',
};

export default function MultiStateSalesPage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #13212C 0%, #173345 100%)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Hero />
      <StatsSection />
      <AccountingSupportSection />
      <ChallengesSection />
      <ServicesSection />
      <TeamBannerSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <TrustedClientSection />
      <FaqSection />
      <CtaBannerSection />
      <Footer />
    </Box>
  );
}
