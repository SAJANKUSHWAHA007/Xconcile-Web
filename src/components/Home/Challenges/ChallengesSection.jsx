'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CustomButton from '@/components/common/CustomButton';

const challengesData = [
  {
    title: 'Hiring Challenges',
    description:
      'Finding experienced accounting professionals can take time and add pressure to internal teams',
    icon: <PersonAddAltOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FFF1F2',
    iconColor: '#F43F5E',
    borderColor: '#FFE4E6',
  },
  {
    title: 'Growing Workload',
    description:
      'Increasing transactions, reconciliations, reporting, and bookkeeping tasks can stretch existing resources.',
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FEF9C3',
    iconColor: '#D97706',
    borderColor: '#FEF08A',
  },
  {
    title: 'High Operating Costs',
    description:
      'Maintaining a full in-house accounting team can increase staffing, training, and operational expenses.',
    icon: <PaidOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#EFF6FF',
    iconColor: '#2563EB',
    borderColor: '#DBEAFE',
  },
  {
    title: 'Limited Financial Visibility',
    description:
      'Delayed or incomplete financial information can make it harder to monitor performance and plan ahead.',
    icon: <VisibilityOffOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#FAF5FF',
    iconColor: '#9333EA',
    borderColor: '#F3E8FF',
  },
  {
    title: 'Skill Gaps',
    description:
      'Businesses may lack specialized accounting expertise needed for complex or growing financial requirements.',
    icon: <AssignmentIndOutlinedIcon sx={{ fontSize: 24 }} />,
    iconBg: '#ECFDF5',
    iconColor: '#16A34A',
    borderColor: '#DCFCE7',
  },
];

export default function ChallengesSection() {
  return (
    <Box
      component="section"
      id="challenges"
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
          alignItems="flex-start"
        >
          {/* Left Column: Heading, Badge, Description & CTA */}
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              position: { md: 'sticky' },
              top: { md: 110 },
            }}
          >
            {/* Key Challenges Pill Tag */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#EAF7E8',
                border: '1px solid rgba(106, 190, 82, 0.25)',
                borderRadius: '9999px',
                px: 2,
                py: 0.65,
                mb: { xs: 2.5, md: 3 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#6ABE52',
                  letterSpacing: '0.01em',
                }}
              >
                Key Challenges
              </Typography>
            </Box>

            {/* Main Heading (H2) */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '1.95rem', sm: '2.35rem', md: '2.75rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                mb: 2.5,
              }}
            >
              Common Accounting Challenges Businesses Face
            </Typography>

            {/* Description Paragraph */}
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '0.95rem', md: '1rem' },
                lineHeight: 1.65,
                color: '#475467',
                maxWidth: { xs: '100%', md: '500px' },
                mb: 4.5,
              }}
            >
              Managing accounting in-house can become time-consuming as your business grows. From
              hiring skilled professionals to keeping up with increasing transaction volumes,
              accounting demands can put pressure on your team and resources
            </Typography>

            {/* Primary CTA Button */}
            <Box>
              <CustomButton
                text="Lets Discuss Project"
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
          </Grid>

          {/* Right Column: 5 Stacked Challenge Cards */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 2, sm: 2.5 },
              }}
            >
              {challengesData.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${item.borderColor}`,
                    borderRadius: '16px',
                    p: { xs: 2.5, sm: 3 },
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: { xs: 2, sm: 2.5 },
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    },
                  }}
                >
                  {/* Category Colored Icon Box */}
                  <Box
                    sx={{
                      width: { xs: 44, sm: 48 },
                      height: { xs: 44, sm: 48 },
                      borderRadius: '12px',
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Card Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: { xs: '1.05rem', sm: '1.15rem' },
                        fontWeight: 700,
                        color: '#0F172A',
                        lineHeight: 1.3,
                        mb: 0.75,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: { xs: '0.875rem', sm: '0.925rem' },
                        color: '#475467',
                        lineHeight: 1.55,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
