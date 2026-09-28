'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';
import CustomButton from '@/components/common/CustomButton';

const defaultFeatures = [
  'Manage Audit Workloads',
  'Reduce Team Workload',
  'Scale Support as Needed',
];

export default function TaxSupportSection({
  id = 'tax-support',
  imageSrc = '/assets/images/audit-support.svg',
  imageAlt = 'Trusted Tax Preparation Support for CPA Firms & Businesses',
  title = (
    <>
      Trusted Tax Preparation Support
      <Box component="span" sx={{ display: 'block' }}>
        for CPA Firms & Businesses
      </Box>
    </>
  ),
  paragraphs = [
    'As audit workloads increase, CPA firms and businesses need reliable support that fits their existing processes. Xconcile provides audit outsourcing services to help manage engagement workloads without adding permanent internal capacity.',
    'Our experienced professionals support key audit activities, including planning, risk assessment, financial statement audits, documentation, internal control testing, and working papers. We work alongside your team to keep information organized, support consistent workflows, and help move engagements from planning through completion.',
  ],
  features = defaultFeatures,
  buttonText = 'Talk to an Audit Expert',
  buttonHref = '#contact',
  sx = {},
  ...props
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        py: { xs: 7, sm: 9, md: 10, lg: 12 },
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
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
          spacing={{ xs: 4, sm: 5, md: 6, lg: 8 }}
          sx={{ alignItems: 'center' }}
        >
          {/* Left Column: Image with rounded corners and soft shadow */}
          <Grid size={{ xs: 12, md: 5.5, lg: 5.5 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 290, sm: 390, md: 470, lg: 530, xl: 560 },
                borderRadius: { xs: '14px', sm: '18px', md: '20px' },
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </Box>
          </Grid>

          {/* Right Column: Text Content */}
          <Grid size={{ xs: 12, md: 6.5, lg: 6.5 }}>
            <Box sx={{ maxWidth: { xs: '100%', lg: '680px' } }}>
              {/* Heading */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '28px', sm: '34px', md: '38px', lg: '44px' },
                  fontWeight: 700,
                  lineHeight: { xs: '36px', sm: '44px', md: '48px', lg: '54px' },
                  color: '#1D2939',
                  letterSpacing: '-0.02em',
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                {title}
              </Typography>

              {/* Paragraphs */}
              {paragraphs.map((pText, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '0.925rem', sm: '0.95rem', md: '0.95rem', lg: '1rem' },
                    color: '#475467',
                    lineHeight: 1.65,
                    mb: idx === paragraphs.length - 1 ? { xs: 3, md: 3.5 } : { xs: 2, md: 2.5 },
                    fontWeight: 400,
                  }}
                >
                  {pText}
                </Typography>
              ))}

              {/* Key Features Grid with Green Checkmark Icons */}
              {features && features.length > 0 && (
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    gap: { xs: 1.75, sm: 2.25 },
                    mb: { xs: 3, md: 3.5 },
                  }}
                >
                  {features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.25,
                      }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          border: '1.5px solid #6ABE52',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#6ABE52',
                          flexShrink: 0,
                        }}
                      >
                        <CheckIcon sx={{ fontSize: 13, strokeWidth: 2.5 }} />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontSize: { xs: '0.925rem', sm: '0.975rem' },
                          fontWeight: 500,
                          color: '#344054',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}

              {/* Faint Divider Line */}
              <Box
                sx={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#EAECF0',
                  mb: { xs: 3, md: 3.5 },
                }}
              />

              {/* CTA Button */}
              {buttonText && (
                <Box>
                  <CustomButton
                    text={buttonText}
                    href={buttonHref}
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
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
