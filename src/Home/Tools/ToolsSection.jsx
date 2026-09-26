'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

// Swiper imports for mobile view
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Mobile columns (original 4 columns of 2 tools each)
const toolColumns = [
  [
    {
      name: 'QuickBooks',
      icon: '/assets/images/quickbook.svg',
      alt: 'QuickBooks Logo',
    },
    {
      name: 'NetSuite',
      icon: '/assets/images/netsuite.svg',
      alt: 'NetSuite Logo',
    },
  ],
  [
    {
      name: 'Dynamics 365',
      icon: '/assets/images/dynamic365.svg',
      alt: 'Microsoft Dynamics 365 Logo',
    },
    {
      name: 'Zoho Books',
      icon: '/assets/images/zoho.svg',
      alt: 'Zoho Books Logo',
    },
  ],
  [
    {
      name: 'FreshBooks',
      icon: '/assets/images/freshbook.svg',
      alt: 'FreshBooks Logo',
    },
    {
      name: 'Sage',
      icon: '/assets/images/sage.svg',
      alt: 'Sage Intacct Logo',
    },
  ],
  [
    {
      name: 'Bill.com',
      icon: '/assets/images/bill.svg',
      alt: 'Bill.com Logo',
    },
    {
      name: 'Xero',
      icon: '/assets/images/Xero.svg',
      alt: 'Xero Logo',
    },
  ],
];

// Desktop 2-column grid data (matching exact reference image order)
const desktopToolsData = [
  {
    name: 'QuickBooks',
    icon: '/assets/images/quickbook.svg',
    alt: 'QuickBooks Logo',
  },
  {
    name: 'Xero',
    icon: '/assets/images/Xero.svg',
    alt: 'Xero Logo',
  },
  {
    name: 'NetSuite',
    icon: '/assets/images/netsuite.svg',
    alt: 'NetSuite Logo',
  },
  {
    name: 'Sage',
    icon: '/assets/images/sage.svg',
    alt: 'Sage Intacct Logo',
  },
  {
    name: 'Dynamics 365',
    icon: '/assets/images/dynamic365.svg',
    alt: 'Microsoft Dynamics 365 Logo',
  },
  {
    name: 'Bill.com',
    icon: '/assets/images/bill.svg',
    alt: 'Bill.com Logo',
  },
  {
    name: 'Zoho Books',
    icon: '/assets/images/zoho.svg',
    alt: 'Zoho Books Logo',
  },
  {
    name: 'FreshBooks',
    icon: '/assets/images/freshbook.svg',
    alt: 'FreshBooks Logo',
  },
];

export default function ToolsSection() {
  const sectionRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [swiperInstance, setSwiperInstance] = React.useState(null);

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

  const handleTrackClick = (e) => {
    if (!swiperInstance) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = Math.min(Math.max(clickX / rect.width, 0), 1);
    const targetIndex = Math.min(
      Math.floor(clickRatio * toolColumns.length),
      toolColumns.length - 1
    );
    swiperInstance.slideToLoop(targetIndex);
  };

  return (
    <Box
      id="tools"
      ref={sectionRef}
      component="section"
      sx={{
        width: '100%',
        backgroundColor: { xs: '#FFFFFF', md: '#F8FAFC' },
        py: { xs: 7, sm: 8.5, md: 10, lg: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 4, lg: 5, xl: 6 },
        }}
      >
        {/* ============================================================== */}
        {/* MOBILE VIEW (xs to sm / < md): Original UI + 2s Auto Swiper    */}
        {/* ============================================================== */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          {/* Header: Centered Pill Tag, Heading, Subheading */}
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '680px',
              mx: 'auto',
              mb: { xs: 4, sm: 5 },
            }}
          >
            {/* Pill Tag: Software Expertise */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#F3FAF1',
                border: '1px solid rgba(106, 190, 82, 0.28)',
                borderRadius: '9999px',
                px: 2.25,
                py: 0.65,
                mb: { xs: 2, md: 2.5 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                  fontWeight: 600,
                  color: '#6ABE52',
                  letterSpacing: '0.01em',
                  lineHeight: 1.2,
                }}
              >
                Software Expertise
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '1.95rem', sm: '2.35rem' },
                fontWeight: 700,
                lineHeight: 1.25,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              Tools We Work With
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '0.925rem', sm: '0.975rem' },
                lineHeight: 1.6,
                color: '#475467',
                maxWidth: '560px',
                mx: 'auto',
              }}
            >
              Improved financial visibility, streamlined day-to-day operations,
              and reduced internal accounting workload.
            </Typography>
          </Box>

          {/* Auto Swiper every 2 seconds */}
          <Box sx={{ width: '100%' }}>
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1.22}
              spaceBetween={16}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 18,
                },
                600: {
                  slidesPerView: 2.1,
                  spaceBetween: 20,
                },
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              style={{ paddingBottom: '8px', paddingTop: '4px' }}
            >
              {toolColumns.map((col, colIdx) => (
                <SwiperSlide key={colIdx} style={{ height: 'auto' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: { xs: 2, sm: 2.5 },
                      height: '100%',
                    }}
                  >
                    {col.map((tool) => (
                      <Box
                        key={tool.name}
                        sx={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #EAECF0',
                          borderRadius: '16px',
                          p: { xs: 2.25, sm: 2.5 },
                          minHeight: { xs: '76px', sm: '84px' },
                          display: 'flex',
                          alignItems: 'center',
                          gap: { xs: 1.75, sm: 2 },
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                          transition:
                            'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                          cursor: 'default',
                          userSelect: 'none',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            borderColor: 'rgba(106, 190, 82, 0.5)',
                            boxShadow:
                              '0 10px 24px -4px rgba(106, 190, 82, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        {/* Tool Brand Icon */}
                        <Box
                          sx={{
                            width: { xs: 38, sm: 42 },
                            height: { xs: 38, sm: 42 },
                            minWidth: { xs: 38, sm: 42 },
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Image
                            src={tool.icon}
                            alt={tool.alt}
                            width={38}
                            height={38}
                            style={{
                              objectFit: 'contain',
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </Box>

                        {/* Tool Name */}
                        <Typography
                          sx={{
                            fontFamily:
                              'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: { xs: '1.05rem', sm: '1.15rem' },
                            fontWeight: 700,
                            color: '#0F172A',
                            lineHeight: 1.2,
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {tool.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* Mobile Progress Bar (matching original UI) */}
          <Box
            sx={{
              mt: { xs: 3.5, sm: 4 },
              width: '100%',
              maxWidth: { xs: '260px', sm: '320px' },
              mx: 'auto',
            }}
          >
            <Box
              onClick={handleTrackClick}
              sx={{
                width: '100%',
                height: '5px',
                backgroundColor: 'rgba(106, 190, 82, 0.18)',
                borderRadius: '9999px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Active Green Progress Indicator */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '35%',
                  left: `${(activeIndex / Math.max(toolColumns.length - 1, 1)) * 65}%`,
                  backgroundColor: '#6ABE52',
                  borderRadius: '9999px',
                  transition: 'left 0.3s ease',
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid
            container
            spacing={{ md: 4, lg: 7, xl: 10 }}
            sx={{ alignItems: 'center' }}
          >
            {/* Left Column: Pill Badge, Heading, Description */}
            <Grid size={{ md: 5, lg: 5 }}>
              <Box
                sx={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition:
                    'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Pill Tag: Software Expertise */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: '#F3FAF1',
                    border: '1px solid rgba(106, 190, 82, 0.28)',
                    borderRadius: '9999px',
                    px: 2.25,
                    py: 0.65,
                    mb: { xs: 2, md: 2.5 },
                    transition: 'transform 0.25s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.85rem' },
                      fontWeight: 600,
                      color: '#6ABE52',
                      letterSpacing: '0.01em',
                      lineHeight: 1.2,
                    }}
                  >
                    Software Expertise
                  </Typography>
                </Box>

                {/* Heading */}
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: {
                      md: '2.35rem',
                      lg: '3.15rem',
                      xl: '3.25rem',
                    },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: '#0F172A',
                    letterSpacing: '-0.025em',
                    mb: { xs: 2, md: 2.5 },
                  }}
                >
                  Tools We Work With
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { md: '0.95rem', lg: '1.05rem' },
                    lineHeight: 1.65,
                    color: '#475467',
                    maxWidth: { md: '420px', lg: '440px' },
                  }}
                >
                  Improved financial visibility, streamlined day-to-day operations,
                  and reduced internal accounting workload.
                </Typography>
              </Box>
            </Grid>

            {/* Right Column: 2-column Grid of 8 Tool Cards (4 rows x 2 cols) */}
            <Grid size={{ md: 7, lg: 7 }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: { md: 2, lg: 2.5, xl: 2.75 },
                }}
              >
                {desktopToolsData.map((tool, index) => (
                  <Box
                    key={tool.name}
                    sx={{
                      opacity: inView ? 1 : 0,
                      transform: inView
                        ? 'translateY(0) scale(1)'
                        : 'translateY(24px) scale(0.96)',
                      transition: `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${index * 60
                        }ms, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${index * 60
                        }ms`,
                      height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #EAECF0',
                        borderRadius: '16px',
                        px: { md: 2.25, lg: 3, xl: 3.25 },
                        py: { md: 2, lg: 2.25, xl: 2.5 },
                        minHeight: { md: '74px', lg: '80px', xl: '84px' },
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: { md: 1.75, lg: 2.25, xl: 2.5 },
                        boxShadow:
                          '0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.01)',
                        cursor: 'default',
                        userSelect: 'none',
                        transition:
                          'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          borderColor: 'rgba(106, 190, 82, 0.5)',
                          boxShadow:
                            '0 12px 28px -4px rgba(106, 190, 82, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04)',
                          '& .tool-icon': {
                            transform: 'scale(1.1) rotate(2deg)',
                          },
                        },
                      }}
                    >
                      {/* Tool Brand Icon */}
                      <Box
                        className="tool-icon"
                        sx={{
                          width: { md: 34, lg: 38, xl: 40 },
                          height: { md: 34, lg: 38, xl: 40 },
                          minWidth: { md: 34, lg: 38, xl: 40 },
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition:
                            'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                      >
                        <Image
                          src={tool.icon}
                          alt={tool.alt}
                          width={40}
                          height={40}
                          style={{
                            objectFit: 'contain',
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </Box>

                      {/* Tool Name */}
                      <Typography
                        className="tool-name"
                        sx={{
                          fontFamily:
                            'var(--font-manrope), "Manrope", sans-serif',
                          fontSize: {
                            md: '1.025rem',
                            lg: '1.125rem',
                            xl: '1.18rem',
                          },
                          fontWeight: 600,
                          color: '#0F172A',
                          lineHeight: 1.25,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {tool.name}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

