'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';
import CustomButton from '@/components/common/CustomButton';

const auditFeatures = [
  'Dedicated Resources',
  'US Accounting Experience',
  'Flexible Support',
];

export default function AuditSupportSection() {
  return (
    <Box
      component="section"
      id="audit-support"
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        py: { xs: 7, sm: 9, md: 11, lg: 12 },
        position: 'relative',
        overflow: 'hidden',
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
          spacing={{ xs: 4, sm: 5, md: 6, lg: 8 }}
          sx={{ alignItems: 'center' }}
        >
          {/* Left Column: Audit Support Image */}
          <Grid size={{ xs: 12, md: 5.5, lg: 5.5 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 280, sm: 380, md: 460, lg: 520, xl: 560 },
                borderRadius: { xs: '16px', sm: '20px' },
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Image
                src="/assets/images/audit-support.svg"
                alt="Professional Audit Support When You Need It"
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
                Professional Audit Support
                <Box component="span" sx={{ display: 'block' }}>
                  When You Need It
                </Box>
              </Typography>

              {/* Paragraph 1 */}
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '0.925rem', sm: '0.95rem', md: '0.95rem', lg: '1rem' },
                  color: '#475467',
                  lineHeight: 1.65,
                  mb: { xs: 2, md: 2.5 },
                  fontWeight: 400,
                }}
              >
                Xconcile provides outsourced audit and assurance support for CPA firms and
                businesses that need reliable help with audit workloads, documentation, and
                financial reporting. Our experienced professionals work with your existing processes
                to support audit engagements without disrupting the way your team operates.
              </Typography>

              {/* Paragraph 2 */}
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '0.925rem', sm: '0.95rem', md: '0.95rem', lg: '1rem' },
                  color: '#475467',
                  lineHeight: 1.65,
                  mb: { xs: 3, md: 3.5 },
                  fontWeight: 400,
                }}
              >
                From audit planning and financial statement audits to risk assessment, internal
                control testing, documentation, and working papers, we provide practical support
                across key audit activities. Our team works as an extension of your existing staff,
                helping you manage workloads, maintain organized audit files, and keep
                engagements moving from planning through completion.
              </Typography>

              {/* Key Features Grid with Green Checkmark Icons */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: { xs: 1.75, sm: 2 },
                  mb: { xs: 3, md: 3.5 },
                }}
              >
                {auditFeatures.map((feature) => (
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
              <Box>
                <CustomButton
                  text="Get Audit Support"
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
