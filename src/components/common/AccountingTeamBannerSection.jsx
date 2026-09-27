'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CustomButton from '@/components/common/CustomButton';

export default function AccountingTeamBannerSection({
  id = 'accounting-team-banner',
  title = (
    <>
      <Box component="span" sx={{ display: { xs: 'inline', sm: 'block' } }}>
        Need Skilled Accounting
      </Box>
      <Box component="span" sx={{ display: { xs: 'inline', sm: 'block' } }}>
        Resources for Your Team?
      </Box>
    </>
  ),
  subtitle = 'Build your accounting capacity with experienced professionals who can work as an extension of your team',
  buttonText = 'Hire Accounting Professionals',
  buttonHref = '#contact',
  buttonWithArrow = true,
  bgImage = '/assets/images/accounting-team.svg',
  overlayGradient = 'linear-gradient(90deg, #13212CE5 0%, #173345CC 100%)',
  maxWidth = 'xl',
  contentMaxWidth = { xs: '100%', md: '580px', lg: '640px' },
  sx = {},
  ...props
}) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: '#13212C',
        backgroundImage: `${overlayGradient}, url("${bgImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: { xs: 'center', md: 'center right' },
        backgroundRepeat: 'no-repeat',
        minHeight: { xs: 360, sm: 420, md: 480, lg: 520 },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, sm: 10, md: 12 },
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      <Container
        maxWidth={maxWidth}
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 5, lg: 6, xl: 8 },
          width: '100%',
        }}
      >
        <Box
          sx={{
            maxWidth: contentMaxWidth,
            textAlign: 'left',
          }}
        >
          {/* Main Heading */}
          {title && (
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '1.75rem', sm: '2.15rem', md: '2.5rem', lg: '2.85rem' },
                fontWeight: 700,
                lineHeight: { xs: 1.25, md: 1.2 },
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                mb: { xs: 2, sm: 2.5 },
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
                maxWidth: '520px',
                mb: { xs: 3.5, sm: 4.5 },
              }}
            >
              {subtitle}
            </Typography>
          )}

          {/* Action Button */}
          {buttonText && (
            <Box sx={{ display: 'inline-flex' }}>
              <CustomButton
                text={buttonText}
                href={buttonHref}
                withArrow={buttonWithArrow}
                size="medium"
                sx={{
                  py: 1.15,
                  px: 2.75,
                  fontSize: { xs: '0.9rem', sm: '0.95rem' },
                  boxShadow: '0 8px 24px rgba(106, 190, 82, 0.35)',
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
