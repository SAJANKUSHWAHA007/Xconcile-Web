'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';

export default function TestimonialsSection({
  id = 'testimonials',
  badge = 'Testimonials',
  title = 'Trusted by Our Clients',
  subtitle = 'See how Xconcile helps businesses improve efficiency, visibility, and financial operations.',
  items = [],
  imagePosition = 'right',
  showFloatingBadge = false,
  maxWidth = 'xl',
  sx = {},
}) {
  const [selectedCategory, setSelectedCategory] = React.useState(
    items[0]?.category || 'CPA Firms'
  );

  // Sync if items change
  React.useEffect(() => {
    if (items.length > 0 && !items.some((it) => it.category === selectedCategory)) {
      setSelectedCategory(items[0]?.category || 'CPA Firms');
    }
  }, [items, selectedCategory]);

  const activeItem =
    items.find((it) => it.category === selectedCategory) || items[0] || {};

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
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
        {/* Header Block */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 5.5 },
          }}
        >
          {/* Pill Badge */}
          {badge && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#EAF7E8',
                border: '1px solid rgba(106, 190, 82, 0.25)',
                borderRadius: '9999px',
                px: 2,
                py: 0.65,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#6ABE52',
                  letterSpacing: '0.01em',
                }}
              >
                {badge}
              </Typography>
            </Box>
          )}

          {/* Heading */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontSize: { xs: '1.95rem', sm: '2.35rem', md: '2.75rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#0F172A',
              letterSpacing: '-0.02em',
              mb: 2,
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          {subtitle && (
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.6,
                color: '#475467',
                maxWidth: '740px',
                mx: 'auto',
                mb: 4,
              }}
            >
              {subtitle}
            </Typography>
          )}

          {/* Category Tabs Pill Bar */}
          {items.length > 0 && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#F8FAFC',
                border: '1px solid #EAECF0',
                borderRadius: '9999px',
                p: '6px',
                gap: 1,
                maxWidth: '100%',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {items.map((item) => {
                const isActive = item.category === selectedCategory;
                return (
                  <Button
                    key={item.category}
                    onClick={() => setSelectedCategory(item.category)}
                    sx={{
                      borderRadius: '9999px',
                      textTransform: 'none',
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      py: 0.85,
                      px: { xs: 2.25, sm: 3 },
                      minWidth: 'auto',
                      whiteSpace: 'nowrap',
                      backgroundColor: isActive ? '#6ABE52' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#475467',
                      border: isActive ? 'none' : '1px solid #EAECF0',
                      boxShadow: isActive
                        ? '0 4px 12px rgba(106, 190, 82, 0.28)'
                        : 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        backgroundColor: isActive ? '#5EA748' : '#F1F5F9',
                        color: isActive ? '#FFFFFF' : '#0F172A',
                      },
                    }}
                  >
                    {item.category}
                  </Button>
                );
              })}
            </Box>
          )}
        </Box>

        {/* Main Card with Content */}
        <Box
          sx={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAECF0',
            borderRadius: { xs: '16px', sm: '20px' },
            p: { xs: 2.5, sm: 3.5, md: 4.5, lg: 5 },
            boxShadow: '0 4px 20px -2px rgba(16, 24, 40, 0.04)',
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 5, lg: 6 }}
            key={selectedCategory}
            sx={{
              alignItems: 'center',
              flexDirection: imagePosition === 'left' ? { xs: 'column-reverse', md: 'row-reverse' } : 'row',
              animation: 'fadeIn 0.35s ease-in-out',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(10px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            {/* Left Column: Details (Title, Challenge, Solution, Result & CTA) */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Selected Category Heading */}
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '1.45rem', sm: '1.75rem', md: '2rem' },
                    fontWeight: 700,
                    color: '#0F172A',
                    mb: { xs: 2.5, md: 3 },
                  }}
                >
                  {activeItem.title || selectedCategory}
                </Typography>

                {/* Challenge */}
                {activeItem.challenge && (
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: { xs: '0.925rem', sm: '1rem' },
                      lineHeight: 1.6,
                      color: '#475467',
                      mb: 2,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: '#0F172A',
                        mr: 0.75,
                      }}
                    >
                      Challenge:
                    </Box>
                    {activeItem.challenge}
                  </Typography>
                )}

                {/* Solution */}
                {activeItem.solution && (
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: { xs: '0.925rem', sm: '1rem' },
                      lineHeight: 1.6,
                      color: '#475467',
                      mb: 2,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: '#0F172A',
                        mr: 0.75,
                      }}
                    >
                      Solution:
                    </Box>
                    {activeItem.solution}
                  </Typography>
                )}

                {/* Result */}
                {activeItem.result && (
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: { xs: '0.925rem', sm: '1rem' },
                      lineHeight: 1.6,
                      color: '#475467',
                      mb: { xs: 3, md: 4 },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color: '#0F172A',
                        mr: 0.75,
                      }}
                    >
                      Result:
                    </Box>
                    {activeItem.result}
                  </Typography>
                )}

                {/* View Case Study CTA Button */}
                <Box sx={{ width: 'auto' }}>
                  <Button
                    component={Link}
                    href={activeItem.ctaHref || '#contact'}
                    endIcon={
                      <ArrowForwardIcon
                        sx={{
                          fontSize: 18,
                          transition: 'transform 0.2s ease-in-out',
                        }}
                      />
                    }
                    sx={{
                      backgroundColor: '#6ABE52',
                      color: '#FFFFFF',
                      textTransform: 'none',
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', sm: '0.925rem' },
                      px: 2.75,
                      py: 1.1,
                      borderRadius: '8px',
                      boxShadow: '0 4px 14px rgba(106, 190, 82, 0.28)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        backgroundColor: '#5BA845',
                        boxShadow: '0 6px 18px rgba(106, 190, 82, 0.35)',
                        '& .MuiButton-endIcon': {
                          transform: 'translateX(3px)',
                        },
                      },
                    }}
                  >
                    {activeItem.ctaLabel || 'View Case Study'}
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Column: Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: { xs: '12px', sm: '16px' },
                  overflow: 'hidden',
                  aspectRatio: '539 / 380',
                  boxShadow: '0 10px 28px -4px rgba(0, 0, 0, 0.08)',
                }}
              >
                <Image
                  src={activeItem.image || '/assets/images/testimonial.svg'}
                  alt={activeItem.title || selectedCategory}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />

                {/* Floating Badge (optional if showFloatingBadge is true) */}
                {showFloatingBadge && activeItem.badgeValue && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: { xs: 14, sm: 20 },
                      left: { xs: 14, sm: 20 },
                      backgroundColor: '#FFFFFF',
                      borderRadius: '14px',
                      p: { xs: '10px 16px', sm: '12px 20px' },
                      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.16)',
                      border: '1px solid rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 36, sm: 42 },
                        height: { xs: 36, sm: 42 },
                        borderRadius: '50%',
                        backgroundColor: '#EAF7E8',
                        color: '#4B9E36',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        '& svg': {
                          fontSize: { xs: 20, sm: 24 },
                        },
                      }}
                    >
                      {activeItem.badgeIcon || <TrendingDownOutlinedIcon />}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontWeight: 600,
                          fontSize: { xs: '0.785rem', sm: '0.85rem' },
                          color: '#475467',
                          lineHeight: 1.2,
                        }}
                      >
                        {activeItem.badgeLabel || 'Workload Impact'}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontWeight: 700,
                          fontSize: { xs: '0.95rem', sm: '1.05rem' },
                          color: '#6ABE52',
                          lineHeight: 1.2,
                          mt: 0.25,
                        }}
                      >
                        {activeItem.badgeValue}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
