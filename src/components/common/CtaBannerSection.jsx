'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import CustomButton from '@/components/common/CustomButton';

export default function CtaBannerSection({
  id = 'cta-banner',
  title = (
    <>
      <Box component="span" sx={{ display: 'block', whiteSpace: { sm: 'nowrap' } }}>
        Build the Right Accounting Team for
      </Box>
      <Box component="span" sx={{ display: 'block' }}>
        Your Needs
      </Box>
    </>
  ),
  subtitle = 'Get dedicated accounting professionals matched to your workload, skills, and business requirements.',
  primaryButtonText = 'Talk to an Expert',
  primaryButtonHref = '#contact',
  primaryButtonWithArrow = true,
  secondaryButtonText = 'Hire Accounting Staff',
  secondaryButtonHref = '#contact',
  backgroundColor = '#165A6A',
  maxWidth = 'xl',
  sx = {},
}) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: '100%',
        backgroundColor: backgroundColor,
        py: { xs: 8, sm: 10, md: 12 },
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
        <Box
          sx={{
            maxWidth: '1000px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          {/* Main Heading */}
          {title && (
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.65rem', lg: '2.85rem' },
                fontWeight: 700,
                lineHeight: { xs: 1.25, md: 1.2 },
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                mb: { xs: 2, sm: 2.5 },
                whiteSpace: 'pre-line',
              }}
            >
              {title}
            </Typography>
          )}

          {/* Subtitle */}
          {subtitle && (
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.125rem' },
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: 1.6,
                maxWidth: '680px',
                mx: 'auto',
                mb: { xs: 4, sm: 5 },
                whiteSpace: 'pre-line',
              }}
            >
              {subtitle}
            </Typography>
          )}

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 2.5 },
            }}
          >
            {primaryButtonText && (
              <CustomButton
                text={primaryButtonText}
                href={primaryButtonHref}
                withArrow={primaryButtonWithArrow}
                size="medium"
                iconBg="#FFFFFF"
                iconColor="#0F2332"
                sx={{
                  py: 1.1,
                  px: 2.75,
                  fontSize: { xs: '0.9rem', sm: '0.95rem' },
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.18)',
                }}
              />
            )}

            {secondaryButtonText && (
              <Button
                component={Link}
                href={secondaryButtonHref}
                variant="outlined"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '0.95rem' },
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '9999px',
                  px: { xs: 2.75, sm: 3.25 },
                  py: 1.1,
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  },
                }}
              >
                {secondaryButtonText}
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
