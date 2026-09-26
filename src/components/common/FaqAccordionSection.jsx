'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';

export const defaultFaqItems = [
  {
    question: 'What outsourced accounting services does Xconcile provide?',
    answer:
      'Xconcile provides end-to-end accounting support, including day-to-day bookkeeping, financial statement preparation, accounts payable & receivable management, payroll processing, tax preparation, multi-state sales tax compliance, and virtual CFO services.',
  },
  {
    question: 'Who can benefit from outsourced accounting services?',
    answer:
      'Growing startups, mid-sized enterprises, CPA firms, and established companies looking to reduce overhead costs, eliminate bookkeeping backlog, and access experienced finance professionals without the hassle of hiring in-house staff.',
  },
  {
    question: 'Can Xconcile work with our existing accounting software?',
    answer:
      'Yes. Our team seamlessly integrates with all major accounting platforms including QuickBooks, NetSuite, Xero, Sage Intacct, Microsoft Dynamics 365, FreshBooks, Bill.com, and industry-specific ERP systems.',
  },
  {
    question: 'Can we outsource only certain accounting tasks?',
    answer:
      'Absolutely. We offer flexible engagement models. You can outsource specific tasks—such as month-end reconciliations, payroll, or tax filings—or engage a full-time dedicated accounting team based on your workload.',
  },
  {
    question: 'How does the outsourced accounting process work?',
    answer:
      'Our onboarding is simple and structured: 1) Initial discovery to understand your workflow and tools, 2) Secure setup and access delegation, 3) Dedicated accounting manager assignment, and 4) Ongoing execution with real-time reporting and periodic reviews.',
  },
  {
    question: 'Can CPA firms outsource accounting work to Xconcile?',
    answer:
      'Yes. We partner extensively with U.S. CPA and accounting firms to handle substantive audit workpapers, tax preparation during busy seasons, client catch-up bookkeeping, and back-office reconciliations under strict SOC 1 & SOC 2 compliance.',
  },
];


export default function FaqAccordionSection({
  id = 'faq',
  badge = 'FAQ',
  title = 'Frequently asked\nquestions',
  subtitle = "Still have Questions?\nDrop us a message and we'll get back to you",
  items = defaultFaqItems,
  maxWidth = 'xl',
  background = '#FFFFFF',
  allowMultiple = false,
  defaultOpenIndex = null,
}) {
  const [openIndices, setOpenIndices] = React.useState(() => {
    return defaultOpenIndex !== null ? [defaultOpenIndex] : [];
  });

  const sectionRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (index) => {
    setOpenIndices((prev) => {
      const isOpen = prev.includes(index);
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index];
      } else {
        return isOpen ? [] : [index];
      }
    });
  };

  return (
    <Box
      id={id}
      ref={sectionRef}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: background,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={maxWidth}>
        <Grid container spacing={{ xs: 5, md: 7, lg: 9 }} sx={{ alignItems: 'flex-start' }}>
          {/* Left Column: Badge, Title & Contact Prompt */}
          <Grid size={{ xs: 12, md: 4.8 }}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                position: { md: 'sticky' },
                top: { md: 100 },
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* FAQ Pill Badge */}
              {badge && (
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: '#EAF7E8',
                    border: '1px solid rgba(106, 190, 82, 0.3)',
                    borderRadius: '9999px',
                    px: 2.2,
                    py: 0.6,
                    mb: { xs: 2, md: 2.5 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#4B9E36',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {badge}
                  </Typography>
                </Box>
              )}

              {/* Main Heading */}
              {title && (
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.15rem' },
                    fontWeight: 700,
                    lineHeight: { xs: 1.25, md: 1.15 },
                    color: '#0F172A',
                    letterSpacing: '-0.025em',
                    mb: { xs: 2, md: 3 },
                    whiteSpace: 'pre-line',
                  }}
                >
                  {title}
                </Typography>
              )}

              {/* Subtitle / Lead Paragraph */}
              {subtitle && (
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    color: '#64748B',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                    maxWidth: { xs: '420px', md: '100%' },
                    mx: { xs: 'auto', md: 'unset' },
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </Box>
          </Grid>

          {/* Right Column: Interactive Accordion List */}
          <Grid size={{ xs: 12, md: 7.2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
              }}
            >
              {items.map((item, index) => {
                const isOpen = openIndices.includes(index);

                return (
                  <Box
                    key={item.question}
                    sx={{
                      borderBottom: '1px solid #F1F5F9',
                      transition: 'border-color 0.25s ease',
                      '&:hover': {
                        borderColor: '#E2E8F0',
                      },
                    }}
                  >
                    {/* Accordion Question Header */}
                    <Box
                      component="button"
                      type="button"
                      onClick={() => handleToggle(index)}
                      sx={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        py: { xs: 2.25, md: 2.75 },
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        p: 0,
                        my: 0,
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          '& .faq-question-text': {
                            color: '#4B9E36',
                          },
                          '& .faq-toggle-icon': {
                            color: '#4B9E36',
                          },
                        },
                      }}
                    >
                      <Typography
                        className="faq-question-text"
                        component="span"
                        sx={{
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontSize: { xs: '1.025rem', sm: '1.125rem' },
                          fontWeight: 600,
                          lineHeight: 1.45,
                          color: isOpen ? '#0F172A' : '#1E293B',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {item.question}
                      </Typography>

                      {/* Smooth Rotating Plus / Close Icon */}
                      <Box
                        className="faq-toggle-icon"
                        sx={{
                          width: 28,
                          height: 28,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: isOpen ? '#4B9E36' : '#64748B',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition:
                            'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease',
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </Box>
                    </Box>

                    {/* Animated Answer Body */}
                    <Collapse in={isOpen} timeout={320} unmountOnExit>
                      <Box sx={{ pt: 0.5, pb: 2.75, pr: { xs: 0, sm: 4 } }}>
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            fontSize: { xs: '0.925rem', sm: '1rem' },
                            color: '#64748B',
                            lineHeight: 1.65,
                          }}
                        >
                          {item.answer}
                        </Typography>
                      </Box>
                    </Collapse>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
