'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Image from 'next/image';
import CustomButton from '@/components/common/CustomButton';

export default function AccountingSupportSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        py: { xs: 7, sm: 9, md: 11 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 4, lg: 5 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 6, lg: 8 }}
          alignItems="center"
        >
          {/* Left Column: Office Image with Floating Industry Compliance Badge */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 380, sm: 460, md: 520, lg: 550 },
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Main Office Image */}
              <Image
                src="/assets/images/account-support-section.svg"
                alt="Accounting Support Team Working in Office"
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />

              {/* Floating Compliance Card */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 16, sm: 24 },
                  left: { xs: 16, sm: 24 },
                  zIndex: 2,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  py: 1.5,
                  px: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  maxWidth: 'calc(100% - 32px)',
                }}
              >
                {/* Shield Icon Box */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    backgroundColor: '#EAF7E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <VerifiedUserOutlinedIcon
                    sx={{
                      color: '#6ABE52',
                      fontSize: 22,
                    }}
                  />
                </Box>

                {/* Text */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: '#64748B',
                      lineHeight: 1.2,
                      mb: 0.25,
                    }}
                  >
                    Industry Compliance
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: { xs: '0.875rem', sm: '0.95rem' },
                      fontWeight: 700,
                      color: '#0F172A',
                      lineHeight: 1.2,
                    }}
                  >
                    SoC 2 & GAAP Compliant
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ maxWidth: { xs: '100%', lg: '740px' } }}>
              {/* Heading */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.65rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                  mb: 2.5,
                }}
              >
                Accounting Support for Growing U.S. Businesses
              </Typography>

              {/* Description Paragraph */}
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.65,
                  color: '#475467',
                  mb: 4,
                }}
              >
                Xconcile provides outsourced accounting, bookkeeping, tax, and audit services for
                U.S. businesses and CPA firms across industries. Our experienced professionals work
                with your existing workflows, systems, and requirements to provide reliable
                financial support that fits your business. From day-to-day accounting tasks to
                specialized tax, audit, and financial work, we help manage workloads, maintain
                organized records, and keep your financial processes running smoothly.
              </Typography>

              {/* Feature Cards Row (3 Cards: US Accounting, Experienced Pros, 1K+ Businesses) */}
              <Grid
                container
                spacing={{ xs: 2, sm: 2.5 }}
                alignItems="stretch"
                sx={{ mb: 3.5 }}
              >
                {/* Card 1: US Accounting Expertise */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #EAECF0',
                      borderRadius: '16px',
                      p: { xs: 2.5, sm: 2.5 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        backgroundColor: '#EAF7E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    >
                      <EmojiEventsOutlinedIcon
                        sx={{
                          color: '#6ABE52',
                          fontSize: 24,
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#1E293B',
                        lineHeight: 1.35,
                      }}
                    >
                      US Accounting Expertise
                    </Typography>
                  </Box>
                </Grid>

                {/* Card 2: Experienced Professionals */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #EAECF0',
                      borderRadius: '16px',
                      p: { xs: 2.5, sm: 2.5 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        backgroundColor: '#EAF7E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    >
                      <GroupsOutlinedIcon
                        sx={{
                          color: '#6ABE52',
                          fontSize: 24,
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#1E293B',
                        lineHeight: 1.35,
                      }}
                    >
                      Experienced Professionals
                    </Typography>
                  </Box>
                </Grid>

                {/* Card 3: 1K+ Businesses Supported */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      p: { xs: 2.5, sm: 2.5 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: { xs: '2.5rem', sm: '2.75rem' },
                        fontWeight: 700,
                        color: '#6ABE52',
                        lineHeight: 1,
                        mb: 1.25,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      1K+
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#1E293B',
                        lineHeight: 1.35,
                      }}
                    >
                      Businesses Supported
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* Checkmark Highlights Pill Bar */}
              <Box
                sx={{
                  backgroundColor: '#F3FAF1',
                  borderRadius: { xs: '16px', sm: '9999px' },
                  py: 1.5,
                  px: { xs: 2, sm: 3 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: { xs: 'wrap', md: 'nowrap' },
                  gap: { xs: 1.5, sm: 2 },
                  mb: 4.5,
                }}
              >
                {[
                  'Accounting Operations',
                  'Tax & Compliance Support',
                  'Financial Reporting Support',
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(106, 190, 82, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <CheckIcon
                        sx={{
                          fontSize: 12,
                          color: '#6ABE52',
                          strokeWidth: 2,
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        fontWeight: 500,
                        color: '#1E293B',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* CTA Button */}
              <Box>
                <CustomButton
                  text="Know more about us"
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
