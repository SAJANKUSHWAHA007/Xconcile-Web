'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

export default function CustomButton({
  children,
  text,
  href,
  withArrow = true,
  size = 'medium',
  sx = {},
  iconBg = '#FFFFFF',
  iconColor = '#0F2332',
  ...props
}) {
  const content = text || children;

  const sizeStyles = {
    small: {
      py: 0.75,
      pl: 2,
      pr: withArrow ? 0.75 : 2,
      fontSize: '0.85rem',
      iconSize: 26,
      arrowSize: 14,
    },
    medium: {
      py: 1,
      pl: 2.5,
      pr: withArrow ? 1 : 2.5,
      fontSize: '0.925rem',
      iconSize: 30,
      arrowSize: 16,
    },
    large: {
      py: 1.25,
      pl: 3.25,
      pr: withArrow ? 1.25 : 3.25,
      fontSize: '1rem',
      iconSize: 36,
      arrowSize: 18,
    },
  }[size] || {
    py: 1,
    pl: 2.5,
    pr: withArrow ? 1 : 2.5,
    fontSize: '0.925rem',
    iconSize: 30,
    arrowSize: 16,
  };

  const buttonElement = (
    <Button
      variant="contained"
      component={href ? Link : 'button'}
      href={href}
      sx={{
        backgroundColor: '#6ABE52',
        color: '#FFFFFF',
        borderRadius: '9999px',
        fontWeight: 600,
        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
        textTransform: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
        boxShadow: '0 4px 14px rgba(106, 190, 82, 0.25)',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        whiteSpace: 'nowrap',
        py: sizeStyles.py,
        pl: sizeStyles.pl,
        pr: sizeStyles.pr,
        fontSize: sizeStyles.fontSize,
        '&:hover': {
          backgroundColor: '#5EA748',
          boxShadow: '0 8px 24px rgba(106, 190, 82, 0.4)',
          transform: 'translateY(-2px)',
          '& .custom-button-icon': {
            transform: 'translate(2px, -2px)',
          },
        },
        '&:active': {
          transform: 'translateY(0)',
        },
        ...sx,
      }}
      {...props}
    >
      <span>{content}</span>
      {withArrow && (
        <Box
          sx={{
            width: sizeStyles.iconSize,
            height: sizeStyles.iconSize,
            borderRadius: '50%',
            backgroundColor: iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 0.25s ease',
          }}
        >
          <ArrowOutwardIcon
            className="custom-button-icon"
            sx={{
              fontSize: sizeStyles.arrowSize,
              color: iconColor,
              transition: 'transform 0.25s ease',
            }}
          />
        </Box>
      )}
    </Button>
  );

  return buttonElement;
}
