'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CustomButton from '@/components/common/CustomButton';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({
  id = 'hero',
  badge,
  title,
  subtitle,
  primaryButtonText = 'Get a Free Consultation',
  primaryButtonHref = '#contact',
  primaryButtonWithArrow = true,
  secondaryButtonText,
  secondaryButtonHref = '#contact',
  trustBadges = ['ISO 27001 - ISO 27701', 'US GAAP Expertise'],
  graphicImage = '/assets/images/hero_section_image.png',
  hideGraphicOnMobile = true,
  maxWidth = 'xl',
  sx = {},
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: 'calc(100vh - 110px)' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #13212C 0%, #173345 100%)',
        pt: { xs: 5, sm: 7, md: 8 },
        pb: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2.5, sm: 4, md: 5, lg: 6 },
        ...sx,
      }}
    >
      <Container
        maxWidth={maxWidth}
        disableGutters
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: { xs: 'auto', md: '520px' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Hero Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: { xs: '100%', md: '780px', lg: '860px' },
            width: '100%',
          }}
        >
          {/* Pill Tag / Badge */}
          {badge && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px',
                px: 2.25,
                py: 0.75,
                mb: { xs: 2.5, md: 3 },
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  color: '#CBD5E1',
                  fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                }}
              >
                {badge}
              </Typography>
            </Box>
          )}

          {/* Main Title (H1) */}
          {title && (
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '32px', sm: '42px', md: '50px', lg: '56px' },
                fontWeight: 700,
                lineHeight: { xs: '42px', sm: '52px', md: '62px', lg: '70px' },
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                mb: 2.5,
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
                fontSize: { xs: '15.5px', sm: '17px', md: '18px' },
                fontWeight: 400,
                lineHeight: { xs: '25px', sm: '27px', md: '28px' },
                color: '#94A3B8',
                mb: { xs: 3.5, md: 4 },
                maxWidth: { xs: '100%', sm: '680px', md: '750px' },
              }}
            >
              {subtitle}
            </Typography>
          )}

          {/* CTA Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 2.5 },
              mb: { xs: 3.5, md: 4 },
            }}
          >
            {primaryButtonText && (
              <CustomButton
                text={primaryButtonText}
                href={primaryButtonHref}
                size="large"
                withArrow={primaryButtonWithArrow}
                sx={{
                  py: 1.25,
                  pl: 3.25,
                  pr: primaryButtonWithArrow ? 1.25 : 3.25,
                  fontSize: '0.98rem',
                  fontWeight: 600,
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
                  fontSize: { xs: '0.9rem', sm: '0.98rem' },
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255, 255, 255, 0.75)',
                  borderRadius: '9999px',
                  px: { xs: 2.75, sm: 3.25 },
                  py: 1.2,
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

          {/* Trust Badges */}
          {trustBadges && trustBadges.length > 0 && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: { xs: 2.5, sm: 3.5 },
                pt: 0.5,
              }}
            >
              {trustBadges.map((badgeText, idx) => (
                <Box
                  key={typeof badgeText === 'string' ? badgeText : idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.2,
                  }}
                >
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      border: '1.5px solid #6ABE52',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6ABE52',
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 12, strokeWidth: 2 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      color: '#CBD5E1',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  >
                    {badgeText}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Right Graphic - Hidden on Mobile screen */}
        {graphicImage && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: { md: '-10px', lg: '10px', xl: '30px' },
              transform: 'translateY(-50%)',
              width: { md: '420px', lg: '480px', xl: '540px' },
              height: { md: 350, lg: 410, xl: 460 },
              display: hideGraphicOnMobile
                ? { xs: 'none', md: 'flex' }
                : { xs: 'flex', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'flex-end',
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 1,
              opacity: 0.9,
            }}
          >
            <Image
              src={graphicImage}
              alt="Hero Section Graphic"
              fill
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'right center',
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}
