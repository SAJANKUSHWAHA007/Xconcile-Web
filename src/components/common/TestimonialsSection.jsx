'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import CustomButton from '@/components/common/CustomButton';

/**
 * Common Testimonials / Case Studies Section
 * Reusable across multiple pages with customizable:
 * - badge (e.g. 'Testimonials')
 * - title (e.g. 'Trusted by Businesses & CPA Firms')
 * - subtitle (e.g. 'We work with the accounting platforms...')
 * - items: array of category case studies:
 *   [{
 *      category: 'CPA Firms',
 *      title: 'CPA Firms',
 *      image: '/assets/images/testimonial.svg',
 *      badgeLabel: 'Workload Impact',
 *      badgeValue: '42% Reduced',
 *      badgeIcon: <TrendingDownOutlinedIcon />,
 *      challenge: '...',
 *      solution: '...',
 *      result: '...',
 *      ctaLabel: 'View Case Study',
 *      ctaHref: '#contact'
 *   }]
 * - maxWidth: default 'xl'
 */
export default function TestimonialsSection({
  id = 'testimonials',
  badge = 'Testimonials',
  title = 'Trusted by Businesses & CPA Firms',
  subtitle = 'We work with the accounting platforms and business tools your company already uses.',
  items = [],
  maxWidth = 'xl',
}) {
  const [selectedCategory, setSelectedCategory] = React.useState(
    items[0]?.category || 'CPA Firms'
  );

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
      }}
    >
      <Container maxWidth={maxWidth}>
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

        {/* Selected Category Heading */}
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
            fontSize: { xs: '1.45rem', sm: '1.65rem', md: '1.85rem' },
            fontWeight: 700,
            color: '#0F172A',
            mb: { xs: 3, md: 4 },
          }}
        >
          {activeItem.title || selectedCategory}
        </Typography>

        {/* Content Layout (Desktop: 2 Columns, Mobile: 1 Column Stacked) */}
        <Grid
          container
          spacing={{ xs: 4, md: 6, lg: 8 }}
          alignItems="center"
          key={selectedCategory}
          sx={{
            animation: 'fadeIn 0.4s ease-in-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(12px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          {/* Left Column: Image with Floating Workload Impact Badge */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '539 / 380',
                boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.12)',
              }}
            >
              <Image
                src={activeItem.image || '/assets/images/testimonial.svg'}
                alt={activeItem.title || 'Client testimonial'}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />

              {/* Floating Badge (e.g. Workload Impact 42% Reduced) */}
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
                {/* Circular Icon Container */}
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

                {/* Badge Label and Value */}
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
                    {activeItem.badgeValue || '42% Reduced'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Case Study Details (Challenge, Solution, Result) & CTA */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2.75,
              }}
            >
              {/* Challenge */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '0.925rem', sm: '1rem' },
                    lineHeight: 1.6,
                    color: '#475467',
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
              </Box>

              {/* Solution */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '0.925rem', sm: '1rem' },
                    lineHeight: 1.6,
                    color: '#475467',
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
              </Box>

              {/* Result */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '0.925rem', sm: '1rem' },
                    lineHeight: 1.6,
                    color: '#475467',
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
              </Box>

              {/* View Case Study CTA Button */}
              <Box sx={{ mt: 1, width: '100%' }}>
                <CustomButton
                  text={activeItem.ctaLabel || 'View Case Study'}
                  href={activeItem.ctaHref || '#contact'}
                  size="medium"
                  sx={{
                    width: { xs: '100%', sm: 'auto' },
                    justifyContent: { xs: 'space-between', sm: 'center' },
                    py: 1.1,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
