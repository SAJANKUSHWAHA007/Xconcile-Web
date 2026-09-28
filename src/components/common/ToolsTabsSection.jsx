'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';

export default function ToolsTabsSection({
  id = 'tools',
  badge = 'Software Expertise',
  title = 'Your Tools, Our Expertise',
  subtitle = 'Work with professionals experienced in major accounting platforms and tools, without changing the workflows your business already relies on.',
  tabs = [],
  maxWidth = 'xl',
  sx = {},
}) {
  const [activeTab, setActiveTab] = React.useState(0);

  const currentTab = tabs[activeTab] || tabs[0] || { name: '', tools: [] };

  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        py: { xs: 7, sm: 9, md: 11 },
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Container
        maxWidth={maxWidth}
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 5, lg: 6, xl: 8 },
        }}
      >
        {/* Header Block */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 7 },
          }}
        >
          {/* Pill Badge */}
          {badge && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#EAF7E8',
                border: '1px solid rgba(106, 190, 82, 0.25)',
                borderRadius: '9999px',
                px: 2,
                py: 0.65,
                mb: 2,
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
                {badge}
              </Typography>
            </Box>
          )}

          {/* Title */}
          {title && (
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
                mb: 2,
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
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.6,
                color: '#475467',
                maxWidth: '740px',
                mx: 'auto',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* Mobile Horizontal Tabs Row (xs only) */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            overflowX: 'auto',
            pb: 1.5,
            mb: 3,
            gap: 1.25,
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': {
              height: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(106, 190, 82, 0.3)',
              borderRadius: 4,
            },
          }}
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <Box
                key={tab.name || index}
                onClick={() => setActiveTab(index)}
                sx={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  px: 2,
                  py: 1,
                  borderRadius: '9999px',
                  backgroundColor: isActive ? '#EAF7E8' : '#F8FAFC',
                  border: `1px solid ${isActive ? 'rgba(106, 190, 82, 0.4)' : '#EAECF0'}`,
                  color: isActive ? '#0F172A' : '#475467',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  scrollSnapAlign: 'start',
                }}
              >
                {tab.icon && (
                  <Box
                    sx={{
                      color: isActive ? '#6ABE52' : '#64748B',
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': { fontSize: 18 },
                    }}
                  >
                    {tab.icon}
                  </Box>
                )}
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 700 : 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab.name}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Desktop & Tablet 2-Column Layout */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ alignItems: 'stretch' }}
        >
          {/* Left Column: Vertical Category Tabs Card (desktop view) */}
          <Grid
            size={{ xs: 12, md: 4.5, lg: 4 }}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EAECF0',
                borderRadius: '20px',
                p: { xs: 2, sm: 2.5, md: 3 },
                height: '100%',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
              }}
            >
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;

                return (
                  <Box
                    key={tab.name || index}
                    onClick={() => setActiveTab(index)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: { xs: 1.5, sm: 1.75 },
                      borderRadius: '14px',
                      backgroundColor: isActive ? '#EAF7E8' : 'transparent',
                      border: `1px solid ${isActive ? 'rgba(106, 190, 82, 0.35)' : 'transparent'}`,
                      cursor: 'pointer',
                      transition: 'all 0.22s ease',
                      '&:hover': {
                        backgroundColor: isActive ? '#EAF7E8' : 'rgba(244, 250, 242, 0.6)',
                        transform: 'translateX(3px)',
                      },
                    }}
                  >
                    {/* Left: Icon Box + Tab Name */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.75,
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: '10px',
                          backgroundColor: isActive ? '#6ABE52' : '#F1F5F9',
                          color: isActive ? '#FFFFFF' : '#475467',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.2s ease',
                          '& svg': { fontSize: 22 },
                        }}
                      >
                        {tab.icon}
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontSize: { xs: '0.95rem', md: '1.025rem' },
                          fontWeight: isActive ? 700 : 600,
                          color: isActive ? '#0F172A' : '#344054',
                          lineHeight: 1.3,
                        }}
                      >
                        {tab.name}
                      </Typography>
                    </Box>

                    {/* Right: Chevron Arrow */}
                    <ChevronRightIcon
                      sx={{
                        fontSize: 20,
                        color: isActive ? '#6ABE52' : '#94A3B8',
                        transition: 'transform 0.2s ease, color 0.2s ease',
                        transform: isActive ? 'translateX(2px)' : 'none',
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Grid>

          {/* Right Column: Active Tab Content with Tool Pills */}
          <Grid size={{ xs: 12, md: 7.5, lg: 8 }}>
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EAECF0',
                borderRadius: '20px',
                p: { xs: 3, sm: 4, md: 5 },
                height: '100%',
                minHeight: { md: '380px' },
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Green Horizontal Accent Line */}
              <Box
                sx={{
                  width: 34,
                  height: 3.5,
                  backgroundColor: '#6ABE52',
                  borderRadius: '2px',
                  mb: 2.5,
                }}
              />

              {/* Category Title */}
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: { xs: '1.35rem', sm: '1.65rem' },
                  fontWeight: 700,
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                  mb: { xs: 3, sm: 3.5, md: 4 },
                }}
              >
                {currentTab.heading || currentTab.name}
              </Typography>

              {/* Tool Pills Grid / Flex Wrap */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 1.5, sm: 2 },
                  alignItems: 'center',
                }}
              >
                {Array.isArray(currentTab.tools) &&
                  currentTab.tools.map((tool, tIdx) => {
                    const isImagePath =
                      typeof tool.icon === 'string' &&
                      (tool.icon.startsWith('/') || tool.icon.startsWith('http'));

                    return (
                      <Box
                        key={tool.name || tIdx}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 1.25,
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '9999px',
                          px: { xs: 1.75, sm: 2.25 },
                          py: { xs: 0.85, sm: 1.05 },
                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                          transition:
                            'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                          cursor: 'default',
                          userSelect: 'none',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            borderColor: 'rgba(106, 190, 82, 0.5)',
                            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)',
                          },
                        }}
                      >
                        {/* Tool Logo / Icon */}
                        {isImagePath ? (
                          <Box
                            sx={{
                              width: 22,
                              height: 22,
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Image
                              src={tool.icon}
                              alt={tool.alt || tool.name}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </Box>
                        ) : tool.icon ? (
                          <Box
                            sx={{
                              color: '#6ABE52',
                              display: 'flex',
                              alignItems: 'center',
                              '& svg': { fontSize: 20 },
                            }}
                          >
                            {tool.icon}
                          </Box>
                        ) : null}

                        {/* Tool Name */}
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: { xs: '0.85rem', sm: '0.925rem' },
                            fontWeight: 600,
                            color: '#1E293B',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {tool.name}
                        </Typography>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
