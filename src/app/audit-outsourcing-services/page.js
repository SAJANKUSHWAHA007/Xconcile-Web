import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Hero,
  StatsSection,
  AuditSupportSection,
  ChallengesSection,
  AuditServicesSection,
  ProcessSection,
  IndustriesSection,
  AuditToolsSection,
  WhyChooseUsSection,
  TestimonialsSection,
  TrustedClientSection,
  FaqSection,
  CtaBannerSection,
} from '@/Audit Outsourcing';

export const metadata = {
  title: 'Audit Outsourcing Services for CPA Firms & Businesses | Xconcile',
  description:
    'Get reliable audit outsourcing support for U.S. CPA firms. Xconcile supports audit planning, financial statement audits, audit documentation, testing, and assurance work, helping your team manage workloads and keep engagements moving.',
};

export default function AuditOutsourcingServicesPage() {
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
      <AuditSupportSection />
      <ChallengesSection />
      <AuditServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <AuditToolsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <TrustedClientSection />
      <FaqSection />
      <CtaBannerSection />
      <Footer />
    </Box>
  );
}
