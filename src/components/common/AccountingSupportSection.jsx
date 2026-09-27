'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';
import Link from 'next/link';

// Smooth counting hook using easeOutExpo that triggers only when section is in view
function useSmoothCount(target, inView, duration = 2000, hasCommas = false) {
  const [value, setValue] = React.useState('0');

  React.useEffect(() => {
    if (!inView || typeof target !== 'number') return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo deceleration curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      const formattedVal = hasCommas ? currentVal.toLocaleString() : String(currentVal);
      setValue(formattedVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setValue(hasCommas ? target.toLocaleString() : String(target));
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, target, duration, hasCommas]);

  return value;
}

function AnimatedStatValue({ rawValue, inView }) {
  // Parse string like "10+", "1,000+", "$50M", etc.
  const parsed = React.useMemo(() => {
    if (typeof rawValue === 'number') {
      return { target: rawValue, prefix: '', suffix: '', hasCommas: false };
    }
    if (typeof rawValue !== 'string') return null;
    const match = rawValue.match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!match) return null;
    const prefix = match[1] || '';
    const numStr = match[2].replace(/,/g, '');
    const num = parseFloat(numStr);
    const suffix = match[3] || '';
    const hasCommas = match[2].includes(',');
    if (isNaN(num)) return null;
    return { target: num, prefix, suffix, hasCommas };
  }, [rawValue]);

  const count = useSmoothCount(
    parsed ? parsed.target : 0,
    inView,
    2000,
    parsed ? parsed.hasCommas : false
  );

  if (!parsed) {
    return <>{rawValue}</>;
  }

  return (
    <>
      {parsed.prefix}
      {inView ? count : '0'}
      {parsed.suffix}
    </>
  );
}

const DEFAULT_PARAGRAPHS = [
  'Managing sales tax across multiple states can be complex due to changing rules, different filing requirements, tax rates, and reporting obligations',
  'Xconcile helps CPA firms and businesses handle sales & use tax compliance with support for economic nexus reviews, state registrations, taxability assessments, multi-state filings, and ongoing reporting.',
  'Our team helps keep sales tax processes organized, records accurate, and compliance activities on track across U.S. jurisdictions.',
];

const DEFAULT_STATS = [
  { label: 'Experience', value: '10+' },
  { label: 'Projects', value: '1,000+' },
  { label: 'Projects', value: '1,000+' },
];

const DEFAULT_IMAGES = {
  image1: '/assets/images/accounting-support-1.svg',
  image2: '/assets/images/acounting-support-2.svg',
  image3: '/assets/images/acounting-support-3.svg',
  centerLogo: '/assets/images/acounting-support-logo.svg',
};

export default function AccountingSupportSection({
  id = 'accounting-support',
  title = 'Accounting Support Built Around Your Business',
  paragraphs = DEFAULT_PARAGRAPHS,
  stats = DEFAULT_STATS,
  buttonText = 'Learn More About Xconcile',
  buttonLink = '/contact',
  onButtonClick,
  showButton = true,
  images = DEFAULT_IMAGES,
  backgroundColor = '#FFFFFF',
  titleColor = '#101828',
  textColor = '#475467',
  accentColor = '#6ABE52',
  borderColor = '#EAECF0',
  collageHeight = { xs: 330, sm: 430, md: 500, lg: 560, xl: 600 },
  maxWidth = 'xl',
  sx = {},
}) {
  const mergedImages = { ...DEFAULT_IMAGES, ...images };
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
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      id={id}
      ref={sectionRef}
      component="section"
      sx={{
        width: '100%',
        backgroundColor: backgroundColor,
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        position: 'relative',
        overflow: 'hidden',
        '@keyframes floatBadge': {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) translateY(-8px) rotate(1.5deg)',
          },
        },
        '@keyframes pulseGlow': {
          '0%, 100%': {
            filter: 'drop-shadow(0 10px 24px rgba(0, 0, 0, 0.12))',
          },
          '50%': {
            filter: 'drop-shadow(0 16px 36px rgba(106, 190, 82, 0.28))',
          },
        },
        ...sx,
      }}
    >
      <Container
        maxWidth={maxWidth}
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 4, lg: 5, xl: 6 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 5, lg: 7, xl: 8 }}
          sx={{ alignItems: 'center' }}
        >
          {/* Left Column: Asymmetrical 3-Image Collage with Center Overlapping Floating Badge */}
          <Grid size={{ xs: 12, md: 5.5, lg: 5.5 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: collageHeight,
                userSelect: 'none',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(36px)',
                transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Inner 2-column image arrangement */}
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 1.5, sm: 2, md: 2.25 },
                  height: '100%',
                  width: '100%',
                }}
              >
                {/* Left Tall Image (Two men working at rustic desk with laptops) */}
                <Box
                  sx={{
                    flex: 1.38,
                    position: 'relative',
                    borderRadius: { xs: '14px', sm: '18px', md: '20px' },
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                    '& img': {
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    },
                    '&:hover img': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Image
                    src={mergedImages.image1}
                    alt="Accounting Support Team at Work"
                    fill
                    priority
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Box>

                {/* Right Stacked Column (2 Images) */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1.5, sm: 2, md: 2.25 },
                    height: '100%',
                  }}
                >
                  {/* Top Right Image (Businessman analyzing charts on tablet) */}
                  <Box
                    sx={{
                      flex: 1,
                      position: 'relative',
                      borderRadius: { xs: '14px', sm: '18px', md: '20px' },
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                      cursor: 'pointer',
                      '& img': {
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      },
                      '&:hover img': {
                        transform: 'scale(1.06)',
                      },
                    }}
                  >
                    <Image
                      src={mergedImages.image2}
                      alt="Financial Analysis and Strategy"
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </Box>

                  {/* Bottom Right Image (Tax withholding documents, phone, calculator) */}
                  <Box
                    sx={{
                      flex: 1.1,
                      position: 'relative',
                      borderRadius: { xs: '14px', sm: '18px', md: '20px' },
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                      cursor: 'pointer',
                      '& img': {
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      },
                      '&:hover img': {
                        transform: 'scale(1.06)',
                      },
                    }}
                  >
                    <Image
                      src={mergedImages.image3}
                      alt="Tax Compliance and Calculations"
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Center Overlapping Floating Badge ("Trusted Partner for Accounting") */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: {
                    xs: 'calc((1.38 / 2.38) * 100% - 2px)',
                    md: 'calc((1.38 / 2.38) * 100% - 3px)',
                  },
                  transform: 'translate(-50%, -50%)',
                  zIndex: 4,
                  width: { xs: 96, sm: 125, md: 135, lg: 155, xl: 170 },
                  height: { xs: 96, sm: 125, md: 135, lg: 155, xl: 170 },
                  borderRadius: '50%',
                  cursor: 'pointer',
                  animation: 'floatBadge 4s ease-in-out infinite, pulseGlow 4s ease-in-out infinite',
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease',
                  '&:hover': {
                    animationPlayState: 'paused',
                    transform: 'translate(-50%, -50%) scale(1.08)',
                    filter: 'drop-shadow(0 18px 36px rgba(106, 190, 82, 0.38))',
                  },
                }}
              >
                <Image
                  src={mergedImages.centerLogo}
                  alt="Trusted Partner for Accounting Logo"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Title, Paragraphs, Stats, and Action Button */}
          <Grid size={{ xs: 12, md: 6.5, lg: 6.5 }}>
            <Box sx={{ maxWidth: { xs: '100%', lg: '680px' } }}>
              {/* Heading with Entrance Animation */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.5rem', lg: '2.85rem' },
                  fontWeight: 700,
                  lineHeight: { xs: 1.25, sm: 1.2, md: 1.2 },
                  color: titleColor,
                  letterSpacing: '-0.02em',
                  mb: { xs: 2.5, md: 3 },
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                }}
              >
                {title}
              </Typography>

              {/* Description Paragraphs with Entrance Animation */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1.75, md: 2 },
                  mb: { xs: 3, md: 3.5 },
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
                }}
              >
                {paragraphs.map((paragraph, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: { xs: '0.925rem', sm: '0.95rem', md: '0.975rem', lg: '1rem' },
                      lineHeight: 1.65,
                      color: textColor,
                      fontWeight: 400,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>

              {/* Stats Row with Smooth Counting and Hover Micro-interactions */}
              {stats && stats.length > 0 && (
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 3, md: 3.5, lg: 4.5 },
                    pt: { xs: 2.5, md: 3 },
                    borderTop: `1px solid ${borderColor}`,
                    mb: { xs: 3.5, md: 4 },
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                  }}
                >
                  {stats.map((stat, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        px: { xs: 1, sm: 1.25 },
                        py: 0.75,
                        borderRadius: '12px',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'default',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          backgroundColor: 'rgba(106, 190, 82, 0.04)',
                          '& .stat-icon-wrapper': {
                            backgroundColor: accentColor,
                            transform: 'scale(1.1) rotate(6deg)',
                            boxShadow: '0 6px 16px rgba(106, 190, 82, 0.28)',
                          },
                          '& .stat-icon-svg': {
                            color: '#FFFFFF',
                          },
                        },
                      }}
                    >
                      {/* Green Briefcase Icon in Soft Green Circle */}
                      <Box
                        className="stat-icon-wrapper"
                        sx={{
                          width: { xs: 40, sm: 44 },
                          height: { xs: 40, sm: 44 },
                          borderRadius: '50%',
                          backgroundColor: '#EAF7E8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        {stat.icon ? (
                          stat.icon
                        ) : (
                          <WorkOutlineOutlinedIcon
                            className="stat-icon-svg"
                            sx={{
                              color: accentColor,
                              fontSize: { xs: 20, sm: 22 },
                              transition: 'color 0.25s ease',
                            }}
                          />
                        )}
                      </Box>

                      {/* Text details */}
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: { xs: '0.785rem', sm: '0.85rem' },
                            fontWeight: 500,
                            color: textColor,
                            lineHeight: 1.25,
                            mb: 0.25,
                          }}
                        >
                          {stat.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: { xs: '1.15rem', sm: '1.3rem', md: '1.4rem' },
                            fontWeight: 700,
                            color: titleColor,
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                          }}
                        >
                          <AnimatedStatValue rawValue={stat.value} inView={inView} />
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}

              {/* Action Button: "Learn More About Xconcile →" with Entrance Animation */}
              {showButton && (
                <Box
                  sx={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(24px)',
                    transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
                  }}
                >
                  <Button
                    component={buttonLink ? Link : 'button'}
                    href={buttonLink || undefined}
                    onClick={onButtonClick}
                    variant="outlined"
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      fontWeight: 600,
                      color: accentColor,
                      borderColor: accentColor,
                      borderWidth: '1.5px',
                      borderRadius: '10px',
                      px: { xs: 2.75, sm: 3.25 },
                      py: { xs: 1.15, sm: 1.25 },
                      textTransform: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      backgroundColor: 'transparent',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        borderColor: '#559c40',
                        backgroundColor: 'rgba(106, 190, 82, 0.08)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 18px rgba(106, 190, 82, 0.15)',
                        '& .btn-arrow': {
                          transform: 'translateX(5px)',
                        },
                      },
                    }}
                  >
                    {buttonText}
                    <EastIcon
                      className="btn-arrow"
                      sx={{
                        fontSize: { xs: 17, sm: 19 },
                        transition: 'transform 0.25s ease',
                      }}
                    />
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
