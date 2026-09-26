'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import Image from 'next/image';

const IndiaFlag = () => (
  <Box
    component="svg"
    width="32"
    height="22"
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      borderRadius: '3px',
      overflow: 'hidden',
      flexShrink: 0,
      boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
    }}
  >
    <rect width="28" height="6.67" fill="#FF9933" />
    <rect y="6.67" width="28" height="6.67" fill="#FFFFFF" />
    <rect y="13.34" width="28" height="6.67" fill="#138808" />
    <circle cx="14" cy="10" r="2.5" stroke="#000080" strokeWidth="0.8" fill="none" />
    <circle cx="14" cy="10" r="0.6" fill="#000080" />
  </Box>
);

const UsaFlag = () => (
  <Box
    component="svg"
    width="32"
    height="22"
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      borderRadius: '3px',
      overflow: 'hidden',
      flexShrink: 0,
      boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
    }}
  >
    <rect width="28" height="20" fill="#B22234" />
    <path
      d="M0 2.3h28M0 5.4h28M0 8.5h28M0 11.5h28M0 14.6h28M0 17.7h28"
      stroke="#FFFFFF"
      strokeWidth="1.5"
    />
    <rect width="12" height="10.8" fill="#3C3B6E" />
    <circle cx="3" cy="2.7" r="0.6" fill="#FFFFFF" />
    <circle cx="6" cy="2.7" r="0.6" fill="#FFFFFF" />
    <circle cx="9" cy="2.7" r="0.6" fill="#FFFFFF" />
    <circle cx="4.5" cy="5.4" r="0.6" fill="#FFFFFF" />
    <circle cx="7.5" cy="5.4" r="0.6" fill="#FFFFFF" />
    <circle cx="3" cy="8.1" r="0.6" fill="#FFFFFF" />
    <circle cx="6" cy="8.1" r="0.6" fill="#FFFFFF" />
    <circle cx="9" cy="8.1" r="0.6" fill="#FFFFFF" />
  </Box>
);

const companyLinks = [
  { label: 'About Us', href: '#about-us' },
  { label: 'Contact', href: '#contact' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Blogs', href: '#blogs' },
];

const servicesLinks = [
  { label: 'Outsourced Accounting', href: '#outsourced-accounting' },
  { label: 'Bookkeeping', href: '#bookkeeping' },
  { label: 'Payroll Services', href: '#payroll-services' },
  { label: 'Tax Support', href: '#tax-support' },
  { label: 'AP & AR Management', href: '#ap-ar-management' },
  { label: 'Financial Reporting', href: '#financial-reporting' },
  { label: 'Virtual CFO Services', href: '#virtual-cfo-services' },
  { label: 'Audit Support', href: '#audit-support' },
];

const hireLinks = [
  { label: 'Hire Audit and Assurance', href: '#hire-audit-and-assurance' },
  { label: 'Hire Bookkeeper / Accountant', href: '#hire-bookkeeper-accountant' },
  { label: 'Hire Payroll and Compliance', href: '#hire-payroll-and-compliance' },
  { label: 'Hire Tax Preparation Staff', href: '#hire-tax-preparation-staff' },
  { label: 'Hire Virtual CFO', href: '#hire-virtual-cfo' },
];

const industriesLinks = [
  { label: 'Real Estate', href: '#real-estate' },
  { label: 'Healthcare', href: '#healthcare' },
  { label: 'Hospitality', href: '#hospitality' },
  { label: 'Professional Services', href: '#professional-services' },
  { label: 'E-commerce', href: '#e-commerce' },
  { label: 'IT technology', href: '#it-technology' },
  { label: 'Retail', href: '#retail' },
  { label: 'Technology', href: '#technology' },
  { label: 'Construction', href: '#construction' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0A1C28',
        color: '#FFFFFF',
        pt: { xs: 8, md: 10 },
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          px: { xs: 2.5, sm: 4, md: 5, lg: 6 },
        }}
      >
        {/* Top Section: 5 Columns */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: '1.4fr 0.9fr 1.1fr 1.1fr 1fr',
            },
            gap: { xs: 4, sm: 5, md: 4, lg: 5 },
            pb: { xs: 6, md: 8 },
          }}
        >
          {/* Column 1: Brand & Contact Info */}
          <Box sx={{ maxWidth: { xs: '100%', md: '320px' } }}>
            {/* Logo */}
            <Box component={Link} href="/" sx={{ display: 'inline-block', mb: 2 }}>
              <Image
                src="/assets/images/Logo.png"
                alt="Xconcile Logo"
                width={132}
                height={32}
                priority
                style={{
                  height: 'auto',
                  width: 'auto',
                  maxHeight: '34px',
                  display: 'block',
                }}
              />
            </Box>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: '#94A3B8',
                mb: 3,
              }}
            >
              We are a trusted outsourced accounting partner, helping businesses simplify their
              financial operations through expert accounting, bookkeeping, payroll, tax, and
              finance solutions
            </Typography>

            {/* Contact Details */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box
                component="a"
                href="tel:+917984949224"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#6ABE52' },
                }}
              >
                <PhoneOutlinedIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
                <span>(Sales) + 91 798 494-9224</span>
              </Box>

              <Box
                component="a"
                href="tel:+916351043147"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#6ABE52' },
                }}
              >
                <PhoneOutlinedIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
                <span>(HR) + 91 635 104-3147</span>
              </Box>

              <Box
                component="a"
                href="mailto:hello@yourbrand.com"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#6ABE52' },
                }}
              >
                <EmailOutlinedIcon sx={{ fontSize: 18, color: '#94A3B8' }} />
                <span>hello@yourbrand.com</span>
              </Box>
            </Box>
          </Box>

          {/* Column 2: Company */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 2.5,
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6 }}>
              {companyLinks.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: '#94A3B8',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FFFFFF' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Column 3: Services */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 2.5,
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6 }}>
              {servicesLinks.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: '#94A3B8',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FFFFFF' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Column 4: Hire */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 2.5,
              }}
            >
              Hire
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6 }}>
              {hireLinks.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: '#94A3B8',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FFFFFF' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Column 5: Industries */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 2.5,
              }}
            >
              Industries
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6 }}>
              {industriesLinks.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: '#94A3B8',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FFFFFF' },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Middle Section: Follow Us + Location Cards */}
        <Box
          sx={{
            pt: { xs: 4, md: 5 },
            pb: { xs: 5, md: 6 },
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { xs: 'flex-start', lg: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 4, lg: 5 },
          }}
        >
          {/* Social Links */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#FFFFFF',
                mr: 1,
              }}
            >
              Follow us
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {[
                { icon: <FacebookIcon sx={{ fontSize: 18 }} />, href: 'https://facebook.com', label: 'Facebook' },
                { icon: <InstagramIcon sx={{ fontSize: 18 }} />, href: 'https://instagram.com', label: 'Instagram' },
                { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <PinterestIcon sx={{ fontSize: 18 }} />, href: 'https://pinterest.com', label: 'Pinterest' },
                { icon: <YouTubeIcon sx={{ fontSize: 18 }} />, href: 'https://youtube.com', label: 'YouTube' },
              ].map((item) => (
                <IconButton
                  key={item.label}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: '#FFFFFF',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#6ABE52',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Office Location Cards (India & USA) */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2.5, sm: 3 },
              width: { xs: '100%', lg: 'auto' },
            }}
          >
            {/* India Card */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 50%', lg: 'none' },
                width: { lg: '350px' },
                backgroundColor: 'rgba(15, 33, 46, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '16px',
                p: { xs: 2.5, sm: 3 },
                backdropFilter: 'blur(10px)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <IndiaFlag />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  India
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: '0.85rem',
                  lineHeight: 1.55,
                  color: '#94A3B8',
                }}
              >
                Sun orbit, 606, Rajpath Rangoli Rd, near Nayara petrol pump, PRL Colony,
                Bodakdev, Ahmedabad, Gujarat 380059
              </Typography>
            </Box>

            {/* USA Card */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 50%', lg: 'none' },
                width: { lg: '350px' },
                backgroundColor: 'rgba(15, 33, 46, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '16px',
                p: { xs: 2.5, sm: 3 },
                backdropFilter: 'blur(10px)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <UsaFlag />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  USA
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontSize: '0.85rem',
                  lineHeight: 1.55,
                  color: '#94A3B8',
                }}
              >
                10 Heston Ave South Amboy, NJ 08879
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar: Copyright */}
        <Box
          sx={{
            py: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
              fontSize: '0.825rem',
              color: '#94A3B8',
            }}
          >
            © 2026 Xconcile Inc.. All rights reserved.
          </Typography>
        </Box>
      </Container>

      {/* Vibrant Cyan/Blue Bottom Line Accent as shown in image */}
      <Box
        sx={{
          height: '4px',
          width: '100%',
          backgroundColor: '#0084FF',
        }}
      />
    </Box>
  );
}
