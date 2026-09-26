'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Image from 'next/image';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// Clean SVG US Flag component
const UsFlagIcon = ({ width = 24, height = 16 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 20"
    style={{
      borderRadius: 2.5,
      display: 'inline-block',
      boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
      flexShrink: 0,
    }}
  >
    <rect width="32" height="20" fill="#B22234" />
    <rect y="1.54" width="32" height="1.54" fill="#FFFFFF" />
    <rect y="4.62" width="32" height="1.54" fill="#FFFFFF" />
    <rect y="7.7" width="32" height="1.54" fill="#FFFFFF" />
    <rect y="10.78" width="32" height="1.54" fill="#FFFFFF" />
    <rect y="13.86" width="32" height="1.54" fill="#FFFFFF" />
    <rect y="16.94" width="32" height="1.54" fill="#FFFFFF" />
    <rect width="13" height="10.78" fill="#3C3B6E" />
    <circle cx="2.5" cy="2" r="0.75" fill="#FFFFFF" />
    <circle cx="6.5" cy="2" r="0.75" fill="#FFFFFF" />
    <circle cx="10.5" cy="2" r="0.75" fill="#FFFFFF" />
    <circle cx="4.5" cy="4" r="0.75" fill="#FFFFFF" />
    <circle cx="8.5" cy="4" r="0.75" fill="#FFFFFF" />
    <circle cx="2.5" cy="6" r="0.75" fill="#FFFFFF" />
    <circle cx="6.5" cy="6" r="0.75" fill="#FFFFFF" />
    <circle cx="10.5" cy="6" r="0.75" fill="#FFFFFF" />
    <circle cx="4.5" cy="8" r="0.75" fill="#FFFFFF" />
    <circle cx="8.5" cy="8" r="0.75" fill="#FFFFFF" />
  </svg>
);

const videoClientsData = [
  {
    id: 1,
    name: 'Rosanne Mallozzi',
    role: 'Navesink Tex and Advisory',
    youtubeId: 'Mu0O-qTK1jo',
    youtubeUrl: 'https://youtu.be/Mu0O-qTK1jo?si=Y7MOWVapYODCOoDb',
    thumbnail: 'https://img.youtube.com/vi/Mu0O-qTK1jo/hqdefault.jpg',
  },
  {
    id: 2,
    name: 'Rosanne Mallozzi',
    role: 'Navesink Tex and Advisory',
    youtubeId: 'Mu0O-qTK1jo',
    youtubeUrl: 'https://youtu.be/Mu0O-qTK1jo?si=Y7MOWVapYODCOoDb',
    thumbnail: 'https://img.youtube.com/vi/Mu0O-qTK1jo/hqdefault.jpg',
  },
  {
    id: 3,
    name: 'Rosanne Mallozzi',
    role: 'Navesink Tex and Advisory',
    youtubeId: 'Mu0O-qTK1jo',
    youtubeUrl: 'https://youtu.be/Mu0O-qTK1jo?si=Y7MOWVapYODCOoDb',
    thumbnail: 'https://img.youtube.com/vi/Mu0O-qTK1jo/hqdefault.jpg',
  },
];

export default function TrustedClientSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const swiperRef = React.useRef(null);

  const activeVideo = videoClientsData[activeIndex] || videoClientsData[0];

  const handleSelectVideo = (index) => {
    setActiveIndex(index);
    setIsPlaying(false);
    if (swiperRef.current && swiperRef.current.slideToLoop) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <Box
      id="trusted-clients"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #13212C 0%, #173345 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Block */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 5.5 },
          }}
        >
          {/* Pill Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 2.2,
              py: 0.65,
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              mb: 2,
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
              Testimonials
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              mb: 1.75,
            }}
          >
            Trusted by Our Clients
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontWeight: 400,
              fontSize: { xs: '0.925rem', sm: '1rem', md: '1.05rem' },
              color: '#94A3B8',
              lineHeight: 1.6,
              maxWidth: '680px',
              mx: 'auto',
            }}
          >
            See how Xconcile helps businesses improve efficiency, visibility, and financial
            operations.
          </Typography>
        </Box>

        {/* Featured Video Player Card */}
        <Box
          sx={{
            maxWidth: '820px',
            mx: 'auto',
            borderRadius: { xs: '16px', sm: '22px' },
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: { xs: '16 / 10', sm: '16 / 9' },
            backgroundColor: '#0D1E2B',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 25px rgba(106, 190, 82, 0.12)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(106, 190, 82, 0.2)',
            },
          }}
        >
          {isPlaying ? (
            /* Interactive YouTube Embedded Video */
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={`${activeVideo.name} Testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              {/* Close Button to return to thumbnail */}
              <IconButton
                onClick={() => setIsPlaying(false)}
                aria-label="close video"
                sx={{
                  position: 'absolute',
                  top: 14,
                  right: 14,
                  zIndex: 10,
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: '#FFFFFF',
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    backgroundColor: '#6ABE52',
                  },
                }}
              >
                <CloseRoundedIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          ) : (
            /* Thumbnail & Overlay Presentation */
            <Box
              onClick={() => setIsPlaying(true)}
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              {/* Video Thumbnail Background */}
              <Box
                component="img"
                src={activeVideo.thumbnail}
                alt={activeVideo.name}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
              />

              {/* Ambient Cinematic Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(14, 31, 45, 0.45) 0%, rgba(14, 31, 45, 0.15) 40%, rgba(10, 22, 33, 0.85) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top-Left Play Button with Glowing Pulse Animation */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 16, sm: 24 },
                  left: { xs: 16, sm: 24 },
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 46, sm: 56 },
                    height: { xs: 46, sm: 56 },
                    borderRadius: '50%',
                    backgroundColor: '#6ABE52',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(106, 190, 82, 0.45)',
                    transition: 'transform 0.25s ease, background-color 0.25s ease',
                    animation: 'playPulse 2.4s infinite ease-out',
                    '@keyframes playPulse': {
                      '0%': {
                        boxShadow: '0 0 0 0 rgba(106, 190, 82, 0.65)',
                      },
                      '70%': {
                        boxShadow: '0 0 0 16px rgba(106, 190, 82, 0)',
                      },
                      '100%': {
                        boxShadow: '0 0 0 0 rgba(106, 190, 82, 0)',
                      },
                    },
                    '&:hover': {
                      backgroundColor: '#5ea748',
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  <PlayArrowRoundedIcon
                    sx={{
                      fontSize: { xs: 28, sm: 34 },
                      transform: 'translateX(1px)',
                    }}
                  />
                </Box>
              </Box>

              {/* Top-Right Xconcile Logo */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 16, sm: 24 },
                  right: { xs: 16, sm: 24 },
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(18, 38, 54, 0.55)',
                  backdropFilter: 'blur(8px)',
                  px: 1.5,
                  py: 0.6,
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <Image
                  src="/assets/images/Logo.png"
                  alt="Xconcile"
                  width={90}
                  height={22}
                  style={{ height: 'auto', width: 'auto', maxHeight: '22px' }}
                />
              </Box>

              {/* Bottom-Left Client Details */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 16, sm: 24 },
                  left: { xs: 16, sm: 24 },
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '1.25rem', sm: '1.6rem' },
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                  }}
                >
                  {activeVideo.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    color: '#CBD5E1',
                    mt: 0.4,
                    mb: 1.2,
                    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                  }}
                >
                  {activeVideo.role}
                </Typography>

                {/* Country Flag */}
                <UsFlagIcon width={28} height={18} />
              </Box>
            </Box>
          )}
        </Box>

        {/* Thumbnail Carousel with Navigation Arrows & 2s Autoplay Swiper */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1.5, sm: 2.5 },
            maxWidth: '820px',
            mx: 'auto',
            mt: { xs: 3, md: 4 },
          }}
        >
          {/* Previous Arrow Button */}
          <IconButton
            ref={prevRef}
            aria-label="Previous video"
            sx={{
              width: { xs: 38, sm: 44 },
              height: { xs: 38, sm: 44 },
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              color: '#13212C',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
              flexShrink: 0,
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#6ABE52',
                color: '#FFFFFF',
                transform: 'scale(1.08)',
              },
            }}
          >
            <ChevronLeftRoundedIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
          </IconButton>

          {/* Swiper Carousel */}
          <Box sx={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={600}
              spaceBetween={14}
              slidesPerView={1.3}
              breakpoints={{
                480: {
                  slidesPerView: 1.8,
                  spaceBetween: 14,
                },
                640: {
                  slidesPerView: 2.4,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 18,
                },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                const realIdx = swiper.realIndex % videoClientsData.length;
                setActiveIndex(realIdx);
              }}
            >
              {videoClientsData.map((item, idx) => {
                const isCurrent = activeIndex === idx;

                return (
                  <SwiperSlide key={`${item.id}-${idx}`}>
                    <Box
                      onClick={() => handleSelectVideo(idx)}
                      sx={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative',
                        aspectRatio: '16 / 10',
                        cursor: 'pointer',
                        border: isCurrent
                          ? '2px solid #6ABE52'
                          : '1px solid rgba(255, 255, 255, 0.14)',
                        boxShadow: isCurrent
                          ? '0 0 16px rgba(106, 190, 82, 0.4)'
                          : '0 6px 18px rgba(0, 0, 0, 0.35)',
                        transition: 'all 0.25s ease',
                        transform: isCurrent ? 'scale(1.02)' : 'scale(1)',
                        '&:hover': {
                          borderColor: '#6ABE52',
                          transform: 'scale(1.03)',
                        },
                      }}
                    >
                      {/* Thumbnail Image */}
                      <Box
                        component="img"
                        src={item.thumbnail}
                        alt={item.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />

                      {/* Vignette Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(180deg, rgba(14, 31, 45, 0.2) 0%, rgba(10, 22, 33, 0.85) 100%)',
                        }}
                      />

                      {/* Center Play Icon */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          backgroundColor: '#6ABE52',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                        }}
                      >
                        <PlayArrowRoundedIcon
                          sx={{ fontSize: 18, transform: 'translateX(0.5px)' }}
                        />
                      </Box>

                      {/* Bottom Details Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 8,
                          left: 8,
                          right: 8,
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: '0.58rem',
                            color: '#CBD5E1',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            mb: 0.5,
                          }}
                        >
                          {item.role}
                        </Typography>
                        <UsFlagIcon width={16} height={10} />
                      </Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>

          {/* Next Arrow Button */}
          <IconButton
            ref={nextRef}
            aria-label="Next video"
            sx={{
              width: { xs: 38, sm: 44 },
              height: { xs: 38, sm: 44 },
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              color: '#13212C',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
              flexShrink: 0,
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#6ABE52',
                color: '#FFFFFF',
                transform: 'scale(1.08)',
              },
            }}
          >
            <ChevronRightRoundedIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
