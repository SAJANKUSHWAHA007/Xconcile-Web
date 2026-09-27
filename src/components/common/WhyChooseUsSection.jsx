'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

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

function StatItem({ target, suffix, label, inView, index, totalStats, dividerColor, numberColor, labelColor }) {
  const count = useSmoothCount(target, inView);

  const isLeftColMobile = index % 2 === 0;
  const isTopRowMobile = index < 2;

  return (
    <Grid
      size={{ xs: 6, sm: 3 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'flex-start', sm: 'center' },
        textAlign: { xs: 'left', sm: 'center' },
        px: { xs: 1.5, sm: 2 },
        py: { xs: 1, sm: 0 },
        borderRight: {
          xs: isLeftColMobile ? `1px solid ${dividerColor}` : 'none',
          sm: index < totalStats - 1 ? `1px solid ${dividerColor}` : 'none',
        },
        borderBottom: {
          xs: isTopRowMobile ? `1px solid ${dividerColor}` : 'none',
          sm: 'none',
        },
        pb: { xs: isTopRowMobile ? 2 : 1, sm: 0 },
        pt: { xs: !isTopRowMobile ? 2 : 1, sm: 0 },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
          fontWeight: 700,
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
          color: numberColor,
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
          color: labelColor,
          lineHeight: 1.35,
          maxWidth: { xs: '120px', sm: '140px' },
        }}
      >
        {label}
      </Typography>
    </Grid>
  );
}

export default function WhyChooseUsSection({
  id = 'why-choose-us',
  theme = 'light',
  cardVariant,
  badge = 'Why Choose Us',
  title,
  subtitle,
  features = [],
  stats = [],
  images = {
    img1: { src: '/assets/images/why-choose-us-1.svg', alt: 'Xconcile team celebrating success' },
    img2: { src: '/assets/images/why-choose-us-2.svg', alt: 'Team hands joined together in collaboration' },
    img3: { src: '/assets/images/why-choose-us-3.svg', alt: 'Xconcile professionals in modern workspace' },
    img4: { src: '/assets/images/why-choose-us-4.svg', alt: 'Xconcile team collaborating at workstation' },
  },
  statsBackground,
  maxWidth = 'xl',
  sx = {},
}) {
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

  const isLight = theme === 'light';
  const effectiveCardVariant = cardVariant || (isLight ? 'card' : 'plain');

  // Colors based on theme
  const sectionBg = isLight
    ? '#FFFFFF'
    : 'linear-gradient(180deg, #13212C 0%, #173345 100%)';

  const badgeBg = isLight ? '#EAF7E8' : 'rgba(255, 255, 255, 0.05)';
  const badgeBorder = isLight ? '1px solid rgba(106, 190, 82, 0.25)' : '1px solid rgba(255, 255, 255, 0.12)';
  const badgeColor = isLight ? '#4B9E36' : '#CBD5E1';

  const titleColor = isLight ? '#0F172A' : '#FFFFFF';
  const subtitleColor = isLight ? '#475467' : '#94A3B8';

  const cardBg = isLight ? '#FFFFFF' : 'rgba(255, 255, 255, 0.04)';
  const cardBorder = isLight ? '1px solid #EAECF0' : '1px solid rgba(255, 255, 255, 0.08)';
  const cardTitleColor = isLight ? '#0F172A' : '#FFFFFF';
  const cardDescColor = isLight ? '#475467' : '#94A3B8';

  // Stats Card Colors: In light theme, the stats bar is a dark teal-navy card as shown in reference image
  const effectiveStatsBg = statsBackground || (isLight ? '#0C2735' : 'rgba(255, 255, 255, 0.04)');
  const statsBorder = isLight ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)';
  const statsDividerColor = isLight ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.1)';
  const statNumberColor = '#6ABE52';
  const statLabelColor = '#CBD5E1';

  // Normalize image data
  const getImage = (key, fallbackSrc, fallbackAlt) => {
    if (!images) return { src: fallbackSrc, alt: fallbackAlt };
    const item = images[key];
    if (typeof item === 'string') return { src: item, alt: fallbackAlt };
    if (item && item.src) return { src: item.src, alt: item.alt || fallbackAlt };
    return { src: fallbackSrc, alt: fallbackAlt };
  };

  const img1 = getImage('img1', '/assets/images/why-choose-us-1.svg', 'Team celebration');
  const img2 = getImage('img2', '/assets/images/why-choose-us-2.svg', 'Hands joined together');
  const img3 = getImage('img3', '/assets/images/why-choose-us-3.svg', 'Modern office space');
  const img4 = getImage('img4', '/assets/images/why-choose-us-4.svg', 'Team collaborating');

  return (
    <Box
      id={id}
      ref={sectionRef}
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 7, sm: 9, md: 11 },
        background: sectionBg,
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Container
        maxWidth={maxWidth}
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 5, lg: 6, xl: 8 },
        }}
      >
        <Grid container spacing={{ xs: 6, lg: 7 }} sx={{ alignItems: 'flex-start' }}>
          {/* Left Column: Heading, Subtitle & Features */}
          <Grid size={{ xs: 12, lg: 6.5 }}>
            {/* Pill Badge */}
            {badge && (
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 2,
                  py: 0.65,
                  borderRadius: '9999px',
                  backgroundColor: badgeBg,
                  border: badgeBorder,
                  backdropFilter: !isLight ? 'blur(8px)' : 'none',
                  mb: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: badgeColor,
                    letterSpacing: '0.01em',
                  }}
                >
                  {badge}
                </Typography>
              </Box>
            )}

            {/* Main Section Heading */}
            {title && (
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.875rem', sm: '2.35rem', md: '2.85rem', lg: '3.15rem' },
                  lineHeight: { xs: 1.25, md: 1.18 },
                  color: titleColor,
                  letterSpacing: '-0.02em',
                  mb: 2.5,
                }}
              >
                {title}
              </Typography>
            )}

            {/* Subtitle / Description */}
            {subtitle && (
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontWeight: 400,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  color: subtitleColor,
                  lineHeight: 1.6,
                  maxWidth: { xs: '100%', lg: '560px' },
                  mb: { xs: 4, md: 5 },
                }}
              >
                {subtitle}
              </Typography>
            )}

            {/* Features Grid */}
            <Grid container spacing={{ xs: 2, sm: 2.5 }}>
              {features.map((item, index) => {
                const iconBgColor = item.iconBg || (isLight ? '#EAF7E8' : '#EAF7E8');
                const iconColor = item.iconColor || (isLight ? '#4B9E36' : '#4B9E36');

                if (effectiveCardVariant === 'card') {
                  return (
                    <Grid key={item.title || index} size={{ xs: 12, sm: 6 }}>
                      <Box
                        sx={{
                          height: '100%',
                          p: { xs: 2.25, sm: 2.5 },
                          backgroundColor: cardBg,
                          border: cardBorder,
                          borderRadius: '14px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 2,
                          transition: 'all 0.25s ease-in-out',
                          '&:hover': {
                            borderColor: 'rgba(106, 190, 82, 0.45)',
                            boxShadow: isLight
                              ? '0 8px 24px -4px rgba(16, 24, 40, 0.06)'
                              : '0 8px 24px -4px rgba(0, 0, 0, 0.3)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {/* Rounded Green Square Icon Container */}
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            minWidth: 44,
                            borderRadius: '10px',
                            backgroundColor: iconBgColor,
                            color: iconColor,
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
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              fontWeight: 700,
                              fontSize: { xs: '1rem', sm: '1.05rem' },
                              color: cardTitleColor,
                              mb: 0.75,
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
                              color: cardDescColor,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  );
                }

                // Plain variant (borderless list item)
                return (
                  <Grid key={item.title || index} size={{ xs: 12, sm: 6 }}>
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
                          backgroundColor: iconBgColor,
                          color: iconColor,
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
                            color: cardTitleColor,
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
                            color: cardDescColor,
                            lineHeight: 1.5,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
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
                {/* Image 1: High five / celebration */}
                <Box
                  sx={{
                    flex: 1,
                    borderRadius: { xs: '12px', sm: '16px' },
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    boxShadow: isLight
                      ? '0 10px 25px -5px rgba(0, 0, 0, 0.12)'
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src={img1.src}
                    alt={img1.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>

                {/* Image 3: Modern workspace / desk meeting */}
                <Box
                  sx={{
                    flex: 1,
                    borderRadius: { xs: '12px', sm: '16px' },
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    boxShadow: isLight
                      ? '0 10px 25px -5px rgba(0, 0, 0, 0.12)'
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src={img3.src}
                    alt={img3.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              {/* Right Sub-column of Images (Image 2 tall, + Image 4) */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1.5, sm: 2 },
                  height: '100%',
                }}
              >
                {/* Image 2: Tall hands joined together */}
                <Box
                  sx={{
                    flex: { xs: '1.4 1 0%', sm: '1.6 1 0%' },
                    borderRadius: { xs: '12px', sm: '16px' },
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    boxShadow: isLight
                      ? '0 10px 25px -5px rgba(0, 0, 0, 0.12)'
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src={img2.src}
                    alt={img2.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>

                {/* Image 4: Team working at laptop */}
                <Box
                  sx={{
                    flex: { xs: '1 1 0%', sm: '1 1 0%' },
                    borderRadius: { xs: '12px', sm: '16px' },
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                    boxShadow: isLight
                      ? '0 10px 25px -5px rgba(0, 0, 0, 0.12)'
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <Image
                    src={img4.src}
                    alt={img4.alt}
                    fill
                    sizes="25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Bottom Stats Card */}
            {stats && stats.length > 0 && (
              <Box
                sx={{
                  backgroundColor: effectiveStatsBg,
                  borderRadius: '16px',
                  border: statsBorder,
                  p: { xs: 2.5, sm: 3 },
                  backdropFilter: !isLight ? 'blur(10px)' : 'none',
                  boxShadow: isLight
                    ? '0 12px 30px -5px rgba(12, 39, 53, 0.25)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ alignItems: 'center' }}>
                  {stats.map((stat, idx) => (
                    <StatItem
                      key={stat.label || idx}
                      target={stat.target}
                      suffix={stat.suffix}
                      label={stat.label}
                      inView={inView}
                      index={idx}
                      totalStats={stats.length}
                      dividerColor={statsDividerColor}
                      numberColor={statNumberColor}
                      labelColor={statLabelColor}
                    />
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
