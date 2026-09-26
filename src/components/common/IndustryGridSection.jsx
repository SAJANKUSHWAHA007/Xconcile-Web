'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';
import Link from 'next/link';

// Swiper imports for mobile carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function IndustryGridSection({
  id = 'industries',
  badge = 'Domain Specialization',
  title = 'Accounting Support Across Industries',
  subtitle = 'Every industry has unique accounting needs. Our tailored solutions help businesses maintain accurate books, improve financial visibility, and streamline daily accounting operations.',
  items = [],
  autoScrollDelay = 2500,
  maxWidth = 'xl',
  sx = {},
}) {
  const sectionRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [swiperInstance, setSwiperInstance] = React.useState(null);

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
      }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTrackClick = (e) => {
    if (!swiperInstance || items.length === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = Math.min(Math.max(clickX / rect.width, 0), 1);
    const targetIndex = Math.min(
      Math.floor(clickRatio * items.length),
      items.length - 1
    );
    swiperInstance.slideToLoop(targetIndex);
  };

  const renderCard = (item, isMobile = false) => {
    const CardWrapper = item.link ? Link : Box;
    const wrapperProps = item.link
      ? { href: item.link, style: { textDecoration: 'none', display: 'block', height: '100%' } }
      : { sx: { height: '100%' } };

    return (
      <CardWrapper {...wrapperProps}>
        <Box
          sx={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAECF0',
            borderRadius: '16px',
            p: { xs: 2.5, sm: 2.75, md: 3 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            minHeight: { xs: '320px', md: '340px' },
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.01)',
            cursor: item.link ? 'pointer' : 'default',
            userSelect: 'none',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              borderColor: 'rgba(106, 190, 82, 0.5)',
              boxShadow: '0 14px 30px -4px rgba(106, 190, 82, 0.12), 0 6px 16px rgba(0, 0, 0, 0.04)',
              '& .card-arrow': {
                transform: 'translateX(4px)',
                color: '#6ABE52',
              },
              '& .card-image': {
                transform: 'scale(1.04)',
              },
            },
          }}
        >
          {/* Card Top: Title & Arrow */}
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 1.5,
                mb: 1.25,
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '1.05rem', sm: '1.15rem'  },
                  fontWeight: 700,
                  color: '#0F172A',
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </Typography>
              <Box
                className="card-arrow"
                sx={{
                  color: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  mt: 0.25,
                  transition: 'transform 0.25s ease, color 0.25s ease',
                }}
              >
                <EastIcon sx={{ fontSize: 20 }} />
              </Box>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '1.1rem', md: '1.1rem', lg: '1rem', xl: '1rem' },
                color: '#475467',
                lineHeight: 1.55,
                mb: 2.5,
              }}
            >
              {item.description}
            </Typography>
          </Box>

          {/* Card Bottom: Responsive Image */}
          <Box
            sx={{
              width: '100%',
              height: { xs: 145, sm: 155, md: 150, lg: 150 },
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#F2F4F7',
              flexShrink: 0,
            }}
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.alt || item.title}
                fill
                className="card-image"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            )}
          </Box>
        </Box>
      </CardWrapper>
    );
  };

  return (
    <Box
      id={id}
      ref={sectionRef}
      component="section"
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        py: { xs: 7, sm: 8.5, md: 10, lg: 12 },
        position: 'relative',
        overflow: 'hidden',
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
        {/* Section Header: Pill Badge, Heading, Subtitle */}
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '760px',
            mx: 'auto',
            mb: { xs: 4, sm: 5, md: 6 },
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {badge && (
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
                {badge}
              </Typography>
            </Box>
          )}

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontSize: {
                xs: '1.95rem',
                sm: '2.35rem',
                md: '2.75rem',
                lg: '3.15rem',
              },
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#0F172A',
              letterSpacing: '-0.025em',
              mb: { xs: 2, md: 2.25 },
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '0.925rem', sm: '0.975rem', md: '1.025rem' },
                lineHeight: 1.65,
                color: '#475467',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: {
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: { md: 2.5, lg: 3 },
          }}
        >
          {items.map((item, index) => (
            <Box
              key={item.title || index}
              sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${
                  index * 60
                }ms, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${
                  index * 60
                }ms`,
                height: '100%',
              }}
            >
              {renderCard(item, false)}
            </Box>
          ))}
        </Box>

      
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ width: '100%' }}>
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: autoScrollDelay,
                disableOnInteraction: false,
              }}
              loop={items.length > 2}
              slidesPerView={1.18}
              spaceBetween={16}
              breakpoints={{
                480: {
                  slidesPerView: 1.45,
                  spaceBetween: 18,
                },
                640: {
                  slidesPerView: 2.1,
                  spaceBetween: 20,
                },
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              style={{ paddingBottom: '8px', paddingTop: '4px' }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={item.title || index} style={{ height: 'auto' }}>
                  {renderCard(item, true)}
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* Mobile Progress Bar (matching Image 2) */}
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
                backgroundColor: '#EAF7E8',
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
                  width: `${Math.max(100 / Math.max(items.length, 1), 25)}%`,
                  left: `${(activeIndex / Math.max(items.length - 1, 1)) * (100 - Math.max(100 / Math.max(items.length, 1), 25))}%`,
                  backgroundColor: '#6ABE52',
                  borderRadius: '9999px',
                  transition: 'left 0.3s ease',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
