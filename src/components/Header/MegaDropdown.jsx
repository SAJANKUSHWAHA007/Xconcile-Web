'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import CustomButton from '@/components/common/CustomButton';

export default function MegaDropdown({ data, onClose }) {
  if (!data) return null;

  const isCompany = data.key === 'company';

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: isCompany ? '680px' : '1060px',
        mx: 'auto',
        backgroundColor: 'rgba(15, 33, 47, 0.96)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        p: { xs: 2.5, md: 3.5 },
        boxShadow: '0 24px 60px -10px rgba(0, 0, 0, 0.75), 0 0 1px 1px rgba(255, 255, 255, 0.06)',
        animation: 'dropdownSlideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        '@keyframes dropdownSlideDown': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px) scale(0.985)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: isCompany ? 'column' : 'row' },
          gap: { xs: 3, md: 4 },
          alignItems: 'stretch',
        }}
      >
        {/* Left Section: Category Title + Grid */}
        <Box sx={{ flex: 1 }}>
          {/* Section Header Title */}
          <Typography
            sx={{
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              color: '#94A3B8',
              pb: 1.5,
              mb: 2.2,
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
            }}
          >
            {data.headerTitle}
          </Typography>

          {/* Grid of Items */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
              },
              columnGap: 2.5,
              rowGap: 2,
            }}
          >
            {data.items.map((item) => (
              <Box
                key={item.title}
                component={Link}
                href={item.href}
                onClick={onClose}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.75,
                  p: 1.25,
                  borderRadius: '14px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    transform: 'translateY(-1px)',
                    '& .dropdown-item-icon': {
                      backgroundColor: 'rgba(106, 190, 82, 0.22)',
                      borderColor: 'rgba(106, 190, 82, 0.45)',
                      transform: 'scale(1.06)',
                    },
                    '& .dropdown-item-title': {
                      color: '#6ABE52',
                    },
                  },
                }}
              >
                {/* Icon Container */}
                <Box
                  className="dropdown-item-icon"
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    backgroundColor: 'rgba(106, 190, 82, 0.12)',
                    border: '1px solid rgba(106, 190, 82, 0.24)',
                    color: '#6ABE52',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.icon}
                </Box>

                {/* Text Content */}
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    className="dropdown-item-title"
                    sx={{
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1.3,
                      mb: 0.5,
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      color: '#94A3B8',
                      lineHeight: 1.45,
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right CTA Card (Only for Services, Hire Staff, Industries) */}
        {data.hasCta && data.cta && (
          <Box
            sx={{
              width: { xs: '100%', md: '280px', lg: '295px' },
              flexShrink: 0,
              background: 'linear-gradient(160deg, rgba(24, 55, 76, 0.95) 0%, rgba(13, 29, 41, 0.98) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              borderRadius: '18px',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.3)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: 140,
                height: 140,
                background: 'radial-gradient(circle at top right, rgba(106, 190, 82, 0.2), transparent 70%)',
                pointerEvents: 'none',
              },
            }}
          >
            <Box>
              {/* Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(56, 189, 248, 0.14)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: '#38BDF8',
                  px: 1.5,
                  py: 0.6,
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                }}
              >
                {data.cta.badge}
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: '0.92rem',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  mt: 2.5,
                  mb: 3,
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                }}
              >
                {data.cta.description}
              </Typography>
            </Box>

            {/* CTA Button */}
            <CustomButton
              text={data.cta.buttonText}
              href={data.cta.buttonHref}
              onClick={onClose}
              size="medium"
              sx={{
                width: '100%',
                justifyContent: 'center',
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
