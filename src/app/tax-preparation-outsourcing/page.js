import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Hero,
  StatsSection,
  TaxSupportSection,
  ChallengesSection,
  TaxServicesSection,
  ProcessSection,
  IndustriesSection,
  TaxToolsSection,
  WhyChooseUsSection,
} from '@/Tax preparattion outsourcing';

export const metadata = {
  title: 'Tax Preparation Outsourcing Services for US CPA Firms | Xconcile',
  description:
    'Handle increasing tax and audit workloads with experienced professionals who support your team with tax preparation, planning, testing, and documentation.',
};

export default function TaxPreparationPage() {
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
      <TaxSupportSection />
      <ChallengesSection />
      <TaxServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <TaxToolsSection />
      <WhyChooseUsSection />
      <Footer />
    </Box>
  );
}
