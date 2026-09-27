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
        minHeight: { xs: 'auto', md: 'calc(100vh - 120px)' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #13212C 0%, #173345 100%)',
        pt: { xs: 6, sm: 7, md: 9 },
        pb: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: { xs: 'auto', md: '500px' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Hero Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: { xs: '100%', md: '800px', lg: '860px' },
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
              px: 2.2,
              py: 0.65,
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
              Trusted by 500+ USA Accounting Firms
            </Typography>
          </Box>

          {/* Main Title (H1) - Exactly 2 lines */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontSize: { xs: '32px', sm: '42px', md: '50px', lg: '56px' },
              fontWeight: 700,
              lineHeight: { xs: '42px', sm: '52px', md: '62px', lg: '68px' },
              letterSpacing: '-0.02em',
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
              Audit Outsourcing Services
            </Box>
            <Box
              component="span"
              sx={{
                display: 'block',
                whiteSpace: { md: 'nowrap' },
              }}
            >
              for CPA Firms &amp; Businesses
            </Box>
          </Typography>

          {/* Sub Title - Wraps in exactly 3 lines matching Image 1 */}
          <Typography
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontSize: { xs: '15px', sm: '16.5px', md: '17.5px' },
              fontWeight: 400,
              lineHeight: { xs: '24px', sm: '26px', md: '28px' },
              color: '#94A3B8',
              mb: { xs: 3.5, md: 4 },
              maxWidth: { xs: '100%', sm: '680px', md: '710px' },
            }}
          >
            Get reliable audit outsourcing support for U.S. CPA firms. Xconcile supports audit
            planning, financial statement audits, audit documentation, testing, and assurance
            work, helping your team manage workloads and keep engagements moving.
          </Typography>

          {/* Primary CTA Button */}
          <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
            <CustomButton
              text="Discuss Your Audit Requirements"
              href="/#contact"
              size="large"
              withArrow={true}
              sx={{
                py: 1.25,
                pl: 3.25,
                pr: 1.25,
                fontSize: '0.98rem',
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
            {/* Badge 1: ISO */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.1,
              }}
            >
              <Box
                sx={{
                  width: 17,
                  height: 17,
                  borderRadius: '50%',
                  border: '1.5px solid #6ABE52',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6ABE52',
                  flexShrink: 0,
                }}
              >
                <CheckIcon sx={{ fontSize: 11, strokeWidth: 2.5 }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  color: '#CBD5E1',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                ISO 27001 - ISO 27701
              </Typography>
            </Box>

            {/* Badge 2: US GAAP Expertise */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.1,
              }}
            >
              <Box
                sx={{
                  width: 17,
                  height: 17,
                  borderRadius: '50%',
                  border: '1.5px solid #6ABE52',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6ABE52',
                  flexShrink: 0,
                }}
              >
                <CheckIcon sx={{ fontSize: 11, strokeWidth: 2.5 }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  color: '#CBD5E1',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                US GAAP Expertise
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Graphic: Reduced size watermark matching Image 1 */}
        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            top: { md: '50%' },
            right: { md: '-20px', lg: '0px', xl: '20px' },
            transform: { md: 'translateY(-50%)' },
            width: { xs: '65%', sm: '320px', md: '380px', lg: '450px', xl: '500px' },
            height: { xs: 200, sm: 260, md: 320, lg: 380, xl: 420 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-end' },
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 1,
            mt: { xs: 4, md: 0 },
            opacity: 0.9,
          }}
        >
          <Image
            src="/assets/images/hero_section_image.png"
            alt="Audit Outsourcing Graphic"
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
