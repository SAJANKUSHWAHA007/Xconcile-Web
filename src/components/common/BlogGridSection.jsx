'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Image from 'next/image';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

export const defaultBlogPosts = [
  {
    id: 1,
    title: 'Guide to Schedule D Form 1040: Capital Gains and Losses',
    description:
      'The sale of an investment either leads to a gain or a loss, but knowing the tax .....',
    image: '/assets/images/blog-schedule-d.svg',
    date: 'Jul 14, 2026',
    readTime: '5 min',
    link: '#blog-1',
  },
  {
    id: 2,
    title: 'Guide to Schedule D Form 1040: Capital Gains and Losses',
    description:
      'The sale of an investment either leads to a gain or a loss, but knowing the tax .....',
    image: '/assets/images/blog-schedule-d.svg',
    date: 'Jul 14, 2026',
    readTime: '5 min',
    link: '#blog-2',
  },
  {
    id: 3,
    title: 'Guide to Schedule D Form 1040: Capital Gains and Losses',
    description:
      'The sale of an investment either leads to a gain or a loss, but knowing the tax .....',
    image: '/assets/images/blog-schedule-d.svg',
    date: 'Jul 14, 2026',
    readTime: '5 min',
    link: '#blog-3',
  },
];


export default function BlogGridSection({
  id = 'blogs',
  badge = 'Our Blog',
  title = 'Helpful Accounting Insights',
  subtitle = 'Explore our latest accounting tips, guides, and business insights.',
  items = defaultBlogPosts,
  maxWidth = 'xl',
  background = '#F8FAFC',
}) {
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
        {/* Header Block */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4.5, md: 6 },
          }}
        >
          {/* Pill Badge */}
          {badge && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#EAF7E8',
                border: '1px solid rgba(106, 190, 82, 0.3)',
                borderRadius: '9999px',
                px: 2.2,
                py: 0.65,
                mb: 2,
                boxShadow: '0 2px 10px rgba(106, 190, 82, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(106, 190, 82, 0.25)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#4B9E36',
                  letterSpacing: '0.01em',
                }}
              >
                {badge}
              </Typography>
            </Box>
          )}

          {/* Heading */}
          {title && (
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '2.85rem' },
                fontWeight: 700,
                lineHeight: 1.22,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                mb: 1.75,
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
                fontWeight: 400,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                color: '#64748B',
                lineHeight: 1.6,
                maxWidth: '680px',
                mx: 'auto',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* Blog Cards Grid */}
        <Grid container spacing={{ xs: 3, md: 3.5 }}>
          {items.map((post, idx) => (
            <Grid key={post.id || post.title + idx} size={{ xs: 12, md: 4 }}>
              <Box
                component={Link}
                href={post.link || '#'}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  position: 'relative',
                  transition:
                    'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(28px)',
                  animation: inView
                    ? `cardFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.14}s both`
                    : 'none',
                  '@keyframes cardFadeUp': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(28px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                  '&:hover': {
                    transform: 'translateY(-9px)',
                    boxShadow:
                      '0 24px 48px -12px rgba(18, 38, 54, 0.12), 0 10px 22px -6px rgba(106, 190, 82, 0.14), 0 0 0 1px rgba(106, 190, 82, 0.28)',
                    borderColor: 'rgba(106, 190, 82, 0.35)',
                    '& .blog-card-img': {
                      transform: 'scale(1.06)',
                      filter: 'brightness(1.02)',
                    },
                    '& .blog-card-img-wrap::after': {
                      left: '220%',
                    },
                    '& .blog-card-title': {
                      color: '#4B9E36',
                    },
                    '& .blog-meta-icon': {
                      color: '#4B9E36',
                    },
                    '& .blog-read-circle': {
                      backgroundColor: '#4B9E36',
                      transform: 'scale(1.08)',
                      '& .blog-read-arrow': {
                        color: '#FFFFFF',
                        transform: 'translateX(2px)',
                      },
                    },
                  },
                }}
              >
                {/* Top Image Container with Premium Light Sweep Effect */}
                <Box
                  className="blog-card-img-wrap"
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    overflow: 'hidden',
                    backgroundColor: '#0F2436',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-120%',
                      width: '60%',
                      height: '100%',
                      background:
                        'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
                      transform: 'skewX(-25deg)',
                      transition: 'left 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                      pointerEvents: 'none',
                      zIndex: 3,
                    },
                  }}
                >
                  <Image
                    className="blog-card-img"
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      transition:
                        'transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.55s ease',
                    }}
                  />
                </Box>

                {/* Card Content Body */}
                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    {/* Blog Title */}
                    <Typography
                      className="blog-card-title"
                      component="h3"
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: { xs: '1.05rem', sm: '1.125rem' },
                        fontWeight: 700,
                        color: '#0F172A',
                        lineHeight: 1.35,
                        mb: 1.25,
                        transition: 'color 0.25s ease',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.title}
                    </Typography>

                    {/* Blog Description */}
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: '0.885rem',
                        color: '#64748B',
                        lineHeight: 1.55,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.description}
                    </Typography>
                  </Box>

                  {/* Footer Metadata Row with Interactive Arrow Circle */}
                  <Box
                    sx={{
                      pt: 2.2,
                      mt: 2.5,
                      borderTop: '1px solid #F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* Date and Read Time */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1.5, sm: 2 },
                        color: '#64748B',
                        fontSize: '0.825rem',
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      }}
                    >
                      {post.date && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                          <CalendarTodayOutlinedIcon
                            className="blog-meta-icon"
                            sx={{ fontSize: 15, color: '#94A3B8', transition: 'color 0.25s ease' }}
                          />
                          <span>{post.date}</span>
                        </Box>
                      )}
                      {post.readTime && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                          <AccessTimeOutlinedIcon
                            className="blog-meta-icon"
                            sx={{ fontSize: 15, color: '#94A3B8', transition: 'color 0.25s ease' }}
                          />
                          <span>{post.readTime}</span>
                        </Box>
                      )}
                    </Box>

                    {/* Read more with animated circle badge */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#4B9E36',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                      }}
                    >
                      <span>Read more</span>
                      <Box
                        className="blog-read-circle"
                        sx={{
                          width: 26,
                          height: 26,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(106, 190, 82, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
                        }}
                      >
                        <EastRoundedIcon
                          className="blog-read-arrow"
                          sx={{
                            fontSize: 14,
                            color: '#4B9E36',
                            transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
