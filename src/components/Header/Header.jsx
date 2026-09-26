'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/CustomButton';

const navItems = [
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Hire Experts', href: '#hire-experts', hasDropdown: true },
  { label: 'Industries', href: '#industries', hasDropdown: true },
  { label: 'Company', href: '#company', hasDropdown: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        pt: { xs: 2, sm: 3 },
        px: { xs: 2.5, sm: 4, md: 5, lg: 6 },
        position: 'relative',
        zIndex: 1100,
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(18, 38, 54, 0.72)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            px: { xs: 2, sm: 3, md: 3.5 },
            py: { xs: 1.1, sm: 1.25 },
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Image
              src="/assets/images/Logo.png"
              alt="Xconcile Logo"
              width={132}
              height={32}
              priority
              style={{
                height: 'auto',
                width: 'auto',
                maxHeight: '32px',
                display: 'block',
              }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: { md: 3, lg: 4 },
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.935rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  '&:hover': {
                    color: '#FFFFFF',
                    '& .dropdown-chevron': {
                      color: '#6ABE52',
                      transform: 'translateY(1px)',
                    },
                  },
                }}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <KeyboardArrowDownIcon
                    className="dropdown-chevron"
                    sx={{
                      fontSize: 18,
                      color: 'rgba(255, 255, 255, 0.6)',
                      transition: 'all 0.2s ease',
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          {/* Right Action: Button + Responsive Hamburger */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 1.5 },
            }}
          >
            <CustomButton
              text="Schedule a Meeting"
              size="small"
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                fontSize: '0.875rem',
                py: 0.85,
                pl: 2.2,
                pr: 0.85,
              }}
            />

            {/* Hamburger Menu Toggle - Hidden on larger screens (md and above), visible on smaller screens */}
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open navigation menu"
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: '#FFFFFF',
                p: 1,
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: 24 }} />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 290,
            backgroundColor: '#0E1F2D',
            color: '#FFFFFF',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            p: 3,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
            }}
          >
            Menu
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ mb: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  py: 1.25,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                />
                {item.hasDropdown && (
                  <KeyboardArrowDownIcon
                    sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', pt: 2 }}>
          <CustomButton
            text="Schedule a Meeting"
            size="medium"
            fullWidth
            sx={{ width: '100%' }}
          />
        </Box>
      </Drawer>
    </Box>
  );
}
