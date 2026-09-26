import Box from '@mui/material/Box';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Hero,
  StatsSection,
  AccountingSupportSection,
  ChallengesSection,
  ServicesSection,
  WhyChooseUsSection,
  ProcessSection,
  TestimonialsSection,
} from '@/components/Home';

export default function Home() {
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
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <Footer />
    </Box>
  );
}
