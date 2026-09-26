'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

// Smooth counting hook using easeOutExpo animation
function useSmoothCount(target, inView, duration = 1800) {
  const [value, setValue] = React.useState('0');

  React.useEffect(() => {
    if (!inView) return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo deceleration curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      setValue(String(currentVal));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setValue(String(target));
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, target, duration]);

  return value;
}

const featuresData = [
  {
    title: 'US Accounting Expertise',
    description: 'Support according to U.S. accounting practices and needs.',
    icon: <PostAddOutlinedIcon />,
  },
  {
    title: 'Experienced Professionals',
    description: 'Experienced professionals to meet your accounting needs.',
    icon: <HowToRegOutlinedIcon />,
  },
  {
    title: 'Dedicated Support',
    description: 'Dedicated professionals focused on your accounting needs.',
    icon: <BadgeOutlinedIcon />,
  },
  {
    title: 'Flexible Engagements',
    description: 'Flexible support that fits your workload and requirements.',
    icon: <TuneOutlinedIcon />,
  },
  {
    title: 'Month-End Support',
    description: 'Stay on top of your recurring month-end accounting activities.',
    icon: <InsertChartOutlinedIcon />,
  },
];

const statsData = [
  { target: 10, suffix: '+', label: 'Accounting Experience' },
  { target: 1, suffix: 'K+', label: 'Businesses Supported' },
  { target: 50, suffix: '+', label: 'Accounting Professionals' },
  { target: 98, suffix: '%', label: 'Reconciliation Accuracy' },
];

function StatItem({ target, suffix, label, inView, index }) {
  const count = useSmoothCount(target, inView);

  // Border logic: on desktop, dividers between all 4 items; on mobile 2x2 grid, divider between left and right
  const isLeftColMobile = index % 2 === 0;
  const isTopRowMobile = index < 2;

  return (
    <Grid
      size={{ xs: 6, md: 3 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'flex-start', sm: 'center' },
        textAlign: { xs: 'left', sm: 'center' },
        px: { xs: 1.5, sm: 2 },
        py: { xs: 1, md: 0 },
        borderRight: {
          xs: isLeftColMobile ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          md: index < 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        },
        borderBottom: {
          xs: isTopRowMobile ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          md: 'none',
        },
        pb: { xs: isTopRowMobile ? 2 : 1, md: 0 },
        pt: { xs: !isTopRowMobile ? 2 : 1, md: 0 },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
          fontWeight: 700,
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
          color: '#6ABE52',
          lineHeight: 1.1,
          mb: 0.75,
        }}
      >
        {count}
        {suffix}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
          fontWeight: 500,
          fontSize: { xs: '0.8rem', sm: '0.875rem' },
          color: '#CBD5E1',
          lineHeight: 1.35,
          maxWidth: { xs: '120px', sm: '140px' },
        }}
      >
        {label}
      </Typography>
    </Grid>
  );
}

export default function WhyChooseUsSection() {
  const sectionRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="why-choose-us"
      ref={sectionRef}
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #13212C 0%, #173345 100%)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 7 }} sx={{ alignItems: 'flex-start' }}>
          {/* Left Column: Heading, Subtitle & Features */}
          <Grid size={{ xs: 12, lg: 6.5 }}>
            {/* Pill Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 2,
                py: 0.65,
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(8px)',
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#CBD5E1',
                  letterSpacing: '0.02em',
                }}
              >
                Why Choose Us
              </Typography>
            </Box>

            {/* Main Section Heading */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '1.875rem', sm: '2.5rem', md: '3rem', lg: '3.25rem' },
                lineHeight: { xs: 1.25, md: 1.18 },
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                mb: 2.5,
              }}
            >
              Why Businesses Choose Xconcile for{' '}
              <Box
                component="span"
                sx={{
                  color: '#6ABE52',
                  display: { xs: 'block', sm: 'inline' },
                }}
              >
                Outsourced Accounting
              </Box>
            </Typography>

            {/* Subtitle / Lead Paragraph */}
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontWeight: 400,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                color: '#94A3B8',
                lineHeight: 1.6,
                maxWidth: { xs: '100%', lg: '560px' },
                mb: { xs: 4.5, md: 5.5 },
              }}
            >
              Get reliable accounting support from experienced professionals who handle daily
              accounting, reconciliations, financial reporting, and ongoing accounting needs.
            </Typography>

            {/* 5 Features Grid (2 columns on desktop, 1 column on mobile) */}
            <Grid container spacing={{ xs: 3, sm: 3.5 }}>
              {featuresData.map((item) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                  >
                    {/* Rounded Green Square Icon Container */}
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        minWidth: 44,
                        borderRadius: '10px',
                        backgroundColor: '#EAF7E8',
                        color: '#4B9E36',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 0.25,
                        '& svg': {
                          fontSize: 24,
                        },
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Feature Title and Description */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontWeight: 700,
                          fontSize: { xs: '1rem', sm: '1.05rem' },
                          color: '#FFFFFF',
                          mb: 0.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontWeight: 400,
                          fontSize: '0.875rem',
                          color: '#94A3B8',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column: Image Collage & Stats Bar */}
          <Grid size={{ xs: 12, lg: 5.5 }}>
            {/* Image Collage Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: { xs: 1.5, sm: 2 },
                mb: { xs: 3.5, md: 4 },
                alignItems: 'stretch',
                height: { xs: '380px', sm: '420px', md: '440px', lg: '460px' },
              }}
            >
              {/* Left Sub-column of Images (Image 1 + Image 3) */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1.5, sm: 2 },
                  height: '100%',
                }}
              >
                {/* Image 1: High five */}
                <Box
                  sx={{
                    flex: 1,
                    borderRadius: { xs: '12px', sm: '16px' },
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src="/assets/images/why-choose-us-1.svg"
                    alt="Xconcile team celebrating success"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>

                {/* Image 3: Team meeting at wooden table */}
                <Box
                  sx={{
                    flex: 1,
                    borderRadius: { xs: '12px', sm: '16px' },
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src="/assets/images/why-choose-us-3.svg"
                    alt="Xconcile accounting professionals in modern workspace"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              {/* Right Sub-column of Images (Image 2 tall, + Image 4 on desktop) */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1.5, sm: 2 },
                  height: '100%',
                }}
              >
                {/* Image 2: Tall hands stacked together (spans full height on mobile, top 65% on desktop) */}
                <Box
                  sx={{
                    flex: { xs: '1 1 100%', md: '1.6 1 0%' },
                    borderRadius: { xs: '12px', sm: '16px' },
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src="/assets/images/why-choose-us-2.svg"
                    alt="Team hands joined together in collaboration"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>

                {/* Image 4: Team working at computer monitors (visible on md+, bottom 35% on desktop) */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    flex: { md: '1 1 0%' },
                    borderRadius: '16px',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src="/assets/images/why-choose-us-4.svg"
                    alt="Xconcile financial reporting team at work"
                    fill
                    sizes="25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Bottom Stats Card */}
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                p: { xs: 2.5, sm: 3 },
                backdropFilter: 'blur(10px)',
              }}
            >
              <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ alignItems: 'center' }}>
                {statsData.map((stat, idx) => (
                  <StatItem
                    key={stat.label}
                    target={stat.target}
                    suffix={stat.suffix}
                    label={stat.label}
                    inView={inView}
                    index={idx}
                  />
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
