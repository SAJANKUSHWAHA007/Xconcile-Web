'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import CustomButton from '@/components/common/CustomButton';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: 'calc(100vh - 110px)' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // Background linear gradient: #13212C to #173345
        background: 'linear-gradient(180deg, #13212C 0%, #173345 100%)',
        pt: { xs: 5, sm: 7, md: 8 },
        pb: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2.5, sm: 4, md: 5, lg: 6 },
      }}
    >
      <Container
        maxWidth="xl"
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
            maxWidth: { xs: '100%', md: '780px', lg: '850px' },
            width: '100%',
          }}
        >
          {/* Pill Tag / Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              px: 2.25,
              py: 0.8,
              mb: { xs: 3, md: 3.5 },
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <Typography
              variant="heroBadge"
              sx={{
                color: '#CBD5E1',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              Trusted by 1,000+ U.S. Accounting Firms
            </Typography>
          </Box>

          {/* Main Title (H1) */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontSize: { xs: '32px', sm: '44px', md: '56px' },
              fontWeight: 700,
              lineHeight: { xs: '42px', sm: '56px', md: '72px' },
              letterSpacing: '0%',
              color: '#FFFFFF',
              mb: 2.5,
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'block',
                whiteSpace: { md: 'nowrap' },
              }}
            >
              Outsourced{' '}
              <Box
                component="span"
                sx={{
                  color: '#6ABE52',
                  display: 'inline',
                }}
              >
                Accounting
              </Box>
            </Box>
            <Box
              component="span"
              sx={{
                display: 'block',
                whiteSpace: { md: 'nowrap' },
              }}
            >
              Services for US Businesses
            </Box>
          </Typography>

          {/* Sub Title */}
          <Typography
            variant="heroSubtitle"
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontSize: { xs: '17px', sm: '19px', md: '20px' },
              fontWeight: 500,
              lineHeight: { xs: '26px', md: '28px' },
              letterSpacing: '0%',
              color: '#94A3B8',
              mb: 4.5,
              maxWidth: '750px',
            }}
          >
            We provide outsourced accounting and bookkeeping services for U.S. businesses and CPA
            firms, including reconciliations, financial reporting, AP, AR, and ongoing accounting
            support.
          </Typography>

          {/* Primary CTA Button */}
          <Box sx={{ mb: 4 }}>
            <CustomButton
              text="Get a Free Consultation"
              size="large"
              sx={{
                py: 1.35,
                pl: 3.5,
                pr: 1.35,
                fontSize: '1rem',
                fontWeight: 600,
              }}
            />
          </Box>

          {/* Trust Badges */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2.5, sm: 3.5 },
              pt: 0.5,
            }}
          >
            {/* Badge 1 */}
            <Box
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
                variant="trustBadge"
                sx={{
                  color: '#CBD5E1',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                ISO/IEC 27001:2022
              </Typography>
            </Box>

            {/* Badge 2 */}
            <Box
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
                variant="trustBadge"
                sx={{
                  color: '#CBD5E1',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                US GAAP Expertise
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Graphic */}
        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            top: { md: '50%' },
            right: { md: '-40px', lg: '-10px', xl: '20px' },
            transform: { md: 'translateY(-50%)' },
            width: { xs: '100%', sm: '480px', md: '580px', lg: '680px', xl: '750px' },
            height: { xs: 300, sm: 380, md: 480, lg: 560, xl: 620 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-end' },
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 1,
            mt: { xs: 5, md: 0 },
          }}
        >
          <Image
            src="/assets/images/hero_section_image.png"
            alt="Hero Section Graphic"
            fill
            priority
            style={{
              objectFit: 'contain',
              objectPosition: 'right center',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
