'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';

// Smooth counting hook using easeOutExpo that triggers only when section is reached
function useSmoothCount(target, inView, duration = 2000, isDecimal = false) {
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

      if (isDecimal) {
        const currentVal = (easeProgress * target).toFixed(1);
        if (progress >= 1 || currentVal >= target) {
          setValue(String(target));
        } else {
          setValue(currentVal);
        }
      } else {
        const currentVal = Math.floor(easeProgress * target);
        setValue(String(currentVal));
      }

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
  }, [inView, target, duration, isDecimal]);

  return value;
}

function StatItem({ target, suffix, label, inView, isDecimal = false, hasBorderRight = true }) {
  const count = useSmoothCount(target, inView, 2000, isDecimal);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: { xs: 3.5, sm: 4, md: 3.5, lg: 4.5, xl: 5 },
        px: { xs: 2, sm: 2, md: 1, lg: 1.75, xl: 3 },
        height: '100%',
        borderRight: {
          xs: 'none',
          md: hasBorderRight ? '1px solid #EAECF0' : 'none',
        },
        borderBottom: {
          xs: hasBorderRight ? '1px solid #EAECF0' : 'none',
          md: 'none',
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
          fontSize: { xs: '2.25rem', sm: '2.75rem', md: '2.35rem', lg: '2.85rem', xl: '3.65rem' },
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#6ABE52',
          mb: { xs: 1, md: 0.75, lg: 1.25 },
          letterSpacing: '-0.02em',
        }}
      >
        {count}
        {suffix}
      </Typography>

      <Typography
        sx={{
          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
          fontSize: { xs: '0.925rem', sm: '1rem', md: '0.85rem', lg: '0.95rem', xl: '1.05rem' },
          fontWeight: 500,
          color: '#344054',
          lineHeight: 1.35,
          whiteSpace: 'normal',
          maxWidth: { xs: '200px', md: '145px', lg: '180px', xl: 'none' },
          mx: 'auto',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function StatsSection() {
  const sectionRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const currentElem = sectionRef.current;
    if (!currentElem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #EAECF0',
        borderBottom: '1px solid #EAECF0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 2.5, lg: 4, xl: 5 },
        }}
      >
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 5 }}
          sx={{ width: '100%', alignItems: 'center' }}
        >
          {/* Stat 1: 10+ Years of Experience */}
          <Grid size={{ xs: 12, sm: 6, md: 1 }}>
            <StatItem
              target={10}
              suffix="+"
              label="Years of Experience"
              inView={inView}
              hasBorderRight={true}
            />
          </Grid>

          {/* Stat 2: 1K+ Businesses Supported */}
          <Grid size={{ xs: 12, sm: 6, md: 1 }}>
            <StatItem
              target={1}
              suffix="K+"
              label="Businesses Supported"
              inView={inView}
              isDecimal={true}
              hasBorderRight={true}
            />
          </Grid>

          {/* Stat 3: 50+ Accounting Professionals */}
          <Grid size={{ xs: 12, sm: 6, md: 1 }}>
            <StatItem
              target={50}
              suffix="+"
              label="Accounting Professionals"
              inView={inView}
              hasBorderRight={true}
            />
          </Grid>

          {/* Stat 4: 98% Client Satisfaction */}
          <Grid size={{ xs: 12, sm: 6, md: 1 }}>
            <StatItem
              target={98}
              suffix="%"
              label="Client Satisfaction"
              inView={inView}
              hasBorderRight={true}
            />
          </Grid>

          {/* Stat 5: ISO Certificate Badge & Google Rating */}
          <Grid size={{ xs: 12, sm: 12, md: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 3.5, sm: 4, md: 3.5, lg: 4.5, xl: 5 },
                px: { xs: 2, sm: 2, md: 0.75, lg: 1.75, xl: 3 },
                gap: { xs: 2, sm: 2.5, md: 1.25, lg: 2, xl: 3 },
                height: '100%',
              }}
            >
              {/* ISO Certified Badge */}
              <Box
                sx={{
                  width: { xs: 56, sm: 64, md: 52, lg: 64, xl: 76 },
                  height: { xs: 56, sm: 64, md: 52, lg: 64, xl: 76 },
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/assets/images/iso-certificate.svg"
                  alt="Certified ISO 27001:2022 Company"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              {/* Vertical Divider */}
              <Box
                sx={{
                  width: '1px',
                  height: { xs: 38, sm: 42, md: 36, lg: 44, xl: 48 },
                  backgroundColor: '#E2E8F0',
                  flexShrink: 0,
                }}
              />

              {/* Google Rating + Logo */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: 0.5,
                }}
              >
                {/* Star + 5.0 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <StarIcon
                    sx={{
                      fontSize: { xs: 18, md: 18, lg: 20, xl: 22 },
                      color: '#F59E0B',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: { xs: '0.95rem', md: '0.95rem', lg: '1.05rem', xl: '1.15rem' },
                      fontWeight: 700,
                      color: '#1E293B',
                      lineHeight: 1,
                    }}
                  >
                    5.0
                  </Typography>
                </Box>

                {/* Google Logo */}
                <Box
                  sx={{
                    width: { xs: 74, sm: 84, md: 70, lg: 82, xl: 96 },
                    height: { xs: 24, md: 24, lg: 28, xl: 30 },
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/assets/images/google.svg"
                    alt="Google"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
