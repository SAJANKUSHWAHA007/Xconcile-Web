'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CustomButton from '@/components/common/CustomButton';


export default function ExpandableListSection({
  id = 'services-section',
  badge = 'Services',
  title = 'Our Accounting Outsourcing Services',
  subtitle = 'From everyday bookkeeping to strategic financial planning, our outsourced accounting services help businesses maintain accurate financial records,',
  items = [],
  initialVisibleCount = 5,
  showMoreLabel = 'Show more services',
  showLessLabel = 'Show less services',
  sx = {},
}) {
  const [expandedId, setExpandedId] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);

  const toggleExpand = (itemId) => {
    setExpandedId((prev) => (prev === itemId ? null : itemId));
  };

  const visibleItems = showAll ? items : items.slice(0, initialVisibleCount);
  const hiddenCount = Math.max(0, items.length - initialVisibleCount);

  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        ...sx,
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 3.5, md: 4, lg: 5 },
        }}
      >
        {/* Header Area */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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

          {/* Title (H2) */}
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
              maxWidth: '850px',
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          {subtitle && (
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.6,
                color: '#475467',
                maxWidth: '680px',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* List of Items - Spanning full maxWidth="xl" container */}
        <Box
          sx={{
            width: '100%',
            borderTop: '1px solid #EAECF0',
          }}
        >
          {visibleItems.map((item, index) => {
            const isExpanded = expandedId === (item.id || index);
            const displayNumber = item.number || String(index + 1).padStart(2, '0');

            return (
              <Box
                key={item.id || item.title || index}
                sx={{
                  borderBottom: '1px solid #EAECF0',
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(244, 250, 242, 0.4)',
                  },
                }}
              >
                {/* Main Row */}
                <Box
                  onClick={() => toggleExpand(item.id || index)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: { xs: 2.75, sm: 3.25, md: 3.5 },
                    px: { xs: 1, sm: 2 },
                    cursor: 'pointer',
                    gap: { xs: 2, sm: 3, md: 4 },
                  }}
                >
                  {isExpanded && item.focus ? (
                    <>
                      {/* Left: Dark Teal Badge + Title & Focus */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 }, flex: 1, minWidth: 0 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '6px',
                            backgroundColor: '#0F3846',
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            flexShrink: 0,
                          }}
                        >
                          {item.badgeNumber || parseInt(displayNumber, 10)}
                        </Box>

                        <Box sx={{ minWidth: 0, flex: 1 }}>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.25rem' },
                              fontWeight: 700,
                              color: '#0F172A',
                              lineHeight: 1.3,
                              mb: 0.35,
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            sx={{
                              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              fontSize: { xs: '0.85rem', sm: '0.895rem' },
                              color: '#475467',
                              lineHeight: 1.5,
                            }}
                          >
                            <Box component="span" sx={{ fontWeight: 700, color: '#0F3846' }}>
                              Focus:{' '}
                            </Box>
                            {item.focus}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Right: Up Chevron */}
                      <IconButton
                        aria-label="collapse item"
                        sx={{
                          color: '#64748B',
                          p: 0.5,
                          flexShrink: 0,
                          '&:hover': { color: '#0F172A' },
                        }}
                      >
                        <KeyboardArrowUpIcon sx={{ fontSize: 24 }} />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      {/* Left: Number (desktop only) + Icon */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: { xs: 1.5, sm: 2.5 },
                          flexShrink: 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: { xs: '1rem', sm: '1.15rem' },
                            fontWeight: 600,
                            color: '#6ABE52',
                            minWidth: { sm: 28, md: 32 },
                            display: { xs: 'none', md: 'block' },
                          }}
                        >
                          {displayNumber}
                        </Typography>

                        {item.icon && (
                          <Box
                            sx={{
                              color: '#6ABE52',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              '& svg': {
                                fontSize: { xs: 22, sm: 26 },
                              },
                            }}
                          >
                            {item.icon}
                          </Box>
                        )}
                      </Box>

                      {/* Center: Title + Description */}
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.2rem' },
                            fontWeight: 700,
                            color: '#0F172A',
                            lineHeight: 1.3,
                            mb: { xs: 0, md: item.description ? 0.5 : 0 },
                          }}
                        >
                          {item.title}
                        </Typography>
                        {item.description && (
                          <Typography
                            sx={{
                              display: { xs: 'none', md: 'block' },
                              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              fontSize: { xs: '0.875rem', sm: '0.935rem' },
                              color: '#475467',
                              lineHeight: 1.5,
                            }}
                          >
                            {item.description}
                          </Typography>
                        )}
                      </Box>

                      {/* Right: Plus/Minus Toggle Button */}
                      <IconButton
                        aria-label={isExpanded ? 'collapse item' : 'expand item'}
                        sx={{
                          width: { xs: 30, sm: 34 },
                          height: { xs: 30, sm: 34 },
                          borderRadius: '50%',
                          border: '1.5px solid rgba(106, 190, 82, 0.45)',
                          color: '#6ABE52',
                          flexShrink: 0,
                          p: 0,
                          transition: 'all 0.25s ease',
                          '&:hover': {
                            backgroundColor: '#6ABE52',
                            color: '#FFFFFF',
                            borderColor: '#6ABE52',
                          },
                        }}
                      >
                        {isExpanded ? (
                          <RemoveIcon sx={{ fontSize: 18 }} />
                        ) : (
                          <AddIcon sx={{ fontSize: 18 }} />
                        )}
                      </IconButton>
                    </>
                  )}
                </Box>

                {/* Expandable Details Container */}
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <Box
                    sx={{
                      pb: 3.5,
                      pt: 0.5,
                      pl: item.focus ? { xs: 1, sm: 2 } : { xs: 1, sm: 5.5, md: 8.5 },
                      pr: { xs: 1, sm: 4 },
                    }}
                  >
                    {/* On mobile, show description at top of opened accordion since it's hidden when closed */}
                    {item.description && !item.focus && (
                      <Typography
                        sx={{
                          display: { xs: 'block', md: 'none' },
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontSize: '0.875rem',
                          color: '#475467',
                          lineHeight: 1.55,
                          mb: 2,
                          pb: 2,
                          borderBottom: '1px solid #EAECF0',
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}

                    {/* If item.groups is provided, render grouped cards & CTA button */}
                    {Array.isArray(item.groups) && item.groups.length > 0 ? (
                      <Box sx={{ width: '100%' }}>
                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                              xs: '1fr',
                              sm: item.groupColumns
                                ? `repeat(${item.groupColumns}, 1fr)`
                                : item.groups.length === 2
                                ? 'repeat(2, 1fr)'
                                : '1fr',
                              md:
                                item.groupColumns
                                  ? `repeat(${item.groupColumns}, 1fr)`
                                  : item.groups.length === 2
                                  ? 'repeat(2, 1fr)'
                                  : item.groups.length === 3
                                  ? 'repeat(3, 1fr)'
                                  : 'repeat(2, 1fr)',
                            },
                            gap: { xs: 2, sm: 2.5 },
                            mb: item.ctaLabel ? 3 : 1,
                          }}
                        >
                          {item.groups.map((group, gIdx) => (
                            <Box
                              key={gIdx}
                              sx={{
                                backgroundColor: group.cardBg || '#F8FAFC',
                                border: `1px solid ${group.borderColor || '#EAECF0'}`,
                                borderRadius: '14px',
                                p: { xs: 2.25, sm: 2.75 },
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.04)',
                                },
                              }}
                            >
                              {group.icon ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                  <Box
                                    sx={{
                                      width: 32,
                                      height: 32,
                                      borderRadius: '8px',
                                      backgroundColor: group.iconBg || (group.dotColor || '#2563EB'),
                                      color: '#FFFFFF',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: 0,
                                      '& svg': { fontSize: 18 },
                                    }}
                                  >
                                    {group.icon}
                                  </Box>
                                  <Typography
                                    sx={{
                                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                                      fontSize: { xs: '0.95rem', sm: '1.05rem' },
                                      fontWeight: 700,
                                      color: '#0F172A',
                                    }}
                                  >
                                    {group.title}
                                  </Typography>
                                </Box>
                              ) : (
                                <Typography
                                  sx={{
                                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                                    fontWeight: 700,
                                    color: '#0F172A',
                                    mb: 2,
                                  }}
                                >
                                  {group.title}
                                </Typography>
                              )}

                              <Box
                                component="ul"
                                sx={{
                                  listStyle: 'none',
                                  p: 0,
                                  m: 0,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 1.25,
                                }}
                              >
                                {group.points.map((pt, pIdx) => (
                                  <Box
                                    component="li"
                                    key={pIdx}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: 1.25,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        backgroundColor: group.dotColor || '#6ABE52',
                                        flexShrink: 0,
                                        mt: '7.5px',
                                      }}
                                    />
                                    <Typography
                                      sx={{
                                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                                        fontSize: { xs: '0.85rem', sm: '0.885rem' },
                                        color: '#475467',
                                        lineHeight: 1.55,
                                      }}
                                    >
                                      {pt}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          ))}
                        </Box>

                        {item.ctaLabel && (
                          <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
                            <CustomButton
                              text={item.ctaLabel || `Explore ${item.title}`}
                              href={item.href || '#contact'}
                              size="medium"
                              sx={{
                                width: { xs: '100%', sm: 'auto' },
                                justifyContent: { xs: 'space-between', sm: 'center' },
                                py: 1.1,
                              }}
                            />
                          </Box>
                        )}
                      </Box>
                    ) : Array.isArray(item.points) && item.points.length > 0 ? (
                      <Box sx={{ width: '100%' }}>
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: { xs: '0.925rem', sm: '1rem' },
                            fontWeight: 600,
                            color: '#0F172A',
                            mb: 1.5,
                          }}
                        >
                          {item.pointsTitle || 'Key services:'}
                        </Typography>

                        <Box
                          component="ul"
                          sx={{
                            listStyle: 'none',
                            p: 0,
                            m: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.25,
                            mb: 3,
                          }}
                        >
                          {item.points.map((point, ptIdx) => (
                            <Box
                              component="li"
                              key={ptIdx}
                              sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 1.5,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 7,
                                  height: 7,
                                  borderRadius: '50%',
                                  backgroundColor: '#6ABE52',
                                  flexShrink: 0,
                                  mt: '7.5px',
                                }}
                              />
                              <Typography
                                sx={{
                                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                                  fontSize: { xs: '0.875rem', sm: '0.925rem' },
                                  color: '#475467',
                                  lineHeight: 1.5,
                                }}
                              >
                                {point}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
                          <CustomButton
                            text={item.ctaLabel || `Explore ${item.title}`}
                            href={item.href || '#contact'}
                            size="medium"
                            sx={{
                              width: { xs: '100%', sm: 'auto' },
                              justifyContent: { xs: 'space-between', sm: 'center' },
                              py: 1.1,
                            }}
                          />
                        </Box>
                      </Box>
                    ) : React.isValidElement(item.details) ? (
                      item.details
                    ) : (
                      <Box
                        sx={{
                          backgroundColor: '#F8FAFC',
                          borderRadius: '12px',
                          p: 2.5,
                          border: '1px solid #EAECF0',
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: '0.95rem',
                            color: '#334155',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.details ||
                            `Our specialized team provides end-to-end execution, continuous quality checks, and scalable processes customized for ${item.title}. Contact us to tailor this solution to your organization's exact needs.`}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>

        {/* Bottom "Show more / Show less" Action */}
        {hiddenCount > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 5, md: 6 },
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setShowAll((prev) => !prev)}
              endIcon={
                showAll ? (
                  <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
                )
              }
              sx={{
                borderRadius: '9999px',
                borderColor: '#6ABE52',
                color: '#6ABE52',
                textTransform: 'none',
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontWeight: 600,
                fontSize: '0.925rem',
                py: 1.1,
                px: 3.5,
                borderWidth: '1.5px',
                '&:hover': {
                  borderColor: '#5FA949',
                  backgroundColor: '#F3FAF1',
                  borderWidth: '1.5px',
                },
              }}
            >
              {showAll ? showLessLabel : `${showMoreLabel} (${hiddenCount})`}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
