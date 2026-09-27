'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CustomButton from '@/components/common/CustomButton';

export default function ChallengesSection({
  id = 'challenges',
  badge = 'Key Challenges',
  title,
  description,
  buttonText = 'Talk to Our Team',
  buttonHref = '/#contact',
  items = [],
  challenges = [],
  sx = {},
}) {
  const challengeItems = items.length > 0 ? items : challenges;

  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        py: { xs: 7, sm: 9, md: 11 },
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 5, lg: 6, xl: 8 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 6, lg: 8 }}
          sx={{ alignItems: 'flex-start' }}
        >
          {/* Left Column: Heading, Badge, Description & CTA */}
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              position: { md: 'sticky' },
              top: { md: 110 },
            }}
          >
            {/* Pill Tag / Badge */}
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
                  mb: { xs: 2.5, md: 3 },
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

            {/* Main Heading (H2) */}
            {title && (
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
                  mb: 2.5,
                }}
              >
                {title}
              </Typography>
            )}

            {/* Description Paragraph */}
            {description && (
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.65,
                  color: '#475467',
                  maxWidth: { xs: '100%', md: '500px' },
                  mb: 4.5,
                }}
              >
                {description}
              </Typography>
            )}

            {/* Primary CTA Button */}
            {buttonText && (
              <Box>
                <CustomButton
                  text={buttonText}
                  href={buttonHref}
                  size="large"
                  withArrow={true}
                  sx={{
                    py: 1.35,
                    pl: 3.5,
                    pr: 1.35,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                />
              </Box>
            )}
          </Grid>

          {/* Right Column: Stacked Challenge Cards */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 2, sm: 2.5 },
              }}
            >
              {challengeItems.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    backgroundColor: item.cardBg || '#FFFFFF',
                    border: `1px solid ${item.borderColor || '#EAECF0'}`,
                    borderRadius: '16px',
                    p: { xs: 2.5, sm: 3 },
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: { xs: 2, sm: 2.5 },
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    },
                  }}
                >
                  {/* Category Colored Icon Box */}
                  {item.icon && (
                    <Box
                      sx={{
                        width: { xs: 44, sm: 48 },
                        height: { xs: 44, sm: 48 },
                        borderRadius: '12px',
                        backgroundColor: item.iconBg || '#F1F5F9',
                        color: item.iconColor || '#6ABE52',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                  )}

                  {/* Card Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: { xs: '1.05rem', sm: '1.15rem' },
                        fontWeight: 700,
                        color: '#0F172A',
                        lineHeight: 1.3,
                        mb: 0.75,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: { xs: '0.875rem', sm: '0.925rem' },
                        color: '#475467',
                        lineHeight: 1.55,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
