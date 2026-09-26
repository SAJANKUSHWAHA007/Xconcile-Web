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
import Collapse from '@mui/material/Collapse';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/CustomButton';
import MegaDropdown from './MegaDropdown';
import { navDropdownData } from './navData';

const navItems = [
  { label: 'Services', key: 'services', href: '#services', hasDropdown: true },
  { label: 'Hire Our Staff', key: 'hire', href: '#hire-staff', hasDropdown: true },
  { label: 'Industries', key: 'industries', href: '#industries', hasDropdown: true },
  { label: 'Company', key: 'company', href: '#company', hasDropdown: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);
  const headerRef = React.useRef(null);
  const closeTimeoutRef = React.useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
    if (!mobileOpen) {
      setMobileExpanded(null);
    }
  };

  const handleDropdownToggle = (key) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const handleMenuMouseEnter = (key) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMenuMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  // Close desktop dropdown on outside click or Escape key
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <Box
      component="header"
      ref={headerRef}
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
        sx={{ position: 'relative' }}
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
            onClick={() => setActiveDropdown(null)}
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

          {/* Desktop Navigation Links with Dropdown Clicks */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: { md: 2.5, lg: 3.5 },
            }}
          >
            {navItems.map((item) => {
              const isOpen = activeDropdown === item.key;

              return (
                <Box
                  key={item.label}
                  component="button"
                  type="button"
                  onClick={() => handleDropdownToggle(item.key)}
                  onMouseEnter={() => handleMenuMouseEnter(item.key)}
                  onMouseLeave={handleMenuMouseLeave}
                  sx={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    p: 0,
                    m: 0,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.6,
                    color: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                    fontSize: '0.935rem',
                    fontWeight: isOpen ? 600 : 500,
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    borderRadius: '8px',
                    px: 1,
                    py: 0.5,
                    backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                    '&:hover': {
                      color: '#FFFFFF',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '& .dropdown-chevron': {
                        color: '#6ABE52',
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
                        color: isOpen ? '#6ABE52' : 'rgba(255, 255, 255, 0.6)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s cubic-bezier(0.2, 0, 0, 1), color 0.2s ease',
                      }}
                    />
                  )}
                </Box>
              );
            })}
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
              href="#contact"
              size="small"
              onClick={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                setActiveDropdown(null);
              }}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                fontSize: '0.875rem',
                py: 0.85,
                pl: 2.2,
                pr: 0.85,
              }}
            />

            {/* Hamburger Menu Toggle */}
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

        {/* Desktop Mega Dropdown Content with Hover and Bridge */}
        {activeDropdown && navDropdownData[activeDropdown] && (
          <Box
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '100%',
              pt: '12px',
              left: 0,
              right: 0,
              zIndex: 1200,
            }}
          >
            <MegaDropdown
              data={navDropdownData[activeDropdown]}
              onClose={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                setActiveDropdown(null);
              }}
            />
          </Box>
        )}
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 380 },
            maxWidth: '100%',
            height: '100%',
            maxHeight: '100dvh',
            backgroundColor: '#162C3A',
            color: '#FFFFFF',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          },
        }}
      >
        {/* Fixed Drawer Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2.5,
            py: 2.25,
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#162C3A',
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          <Box
            component={Link}
            href="/"
            onClick={() => setMobileOpen(false)}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Image
              src="/assets/images/Logo.png"
              alt="Xconcile Logo"
              width={120}
              height={28}
              style={{ height: 'auto', width: 'auto', maxHeight: '28px' }}
            />
          </Box>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Close menu"
            sx={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              color: '#FFFFFF',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Scrollable Navigation Body */}
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            px: 2.5,
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '4px',
            },
          }}
        >
          <List disablePadding sx={{ width: '100%' }}>
            {navItems.map((item) => {
              const isExpanded = mobileExpanded === item.key;
              const dropdown = navDropdownData[item.key];

              return (
                <React.Fragment key={item.label}>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                      onClick={() => {
                        if (item.hasDropdown) {
                          setMobileExpanded((prev) => (prev === item.key ? null : item.key));
                        } else {
                          setMobileOpen(false);
                        }
                      }}
                      sx={{
                        borderRadius: 2.5,
                        py: 1.25,
                        px: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        border: isExpanded ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
                        transition: 'background-color 0.2s ease',
                        '&:hover': {
                          backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                        },
                        '&.Mui-focusVisible': {
                          backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          fontSize: '0.98rem',
                          fontWeight: 600,
                          color: isExpanded ? '#CBD5E1' : '#94A3B8',
                        }}
                      />
                      {item.hasDropdown && (
                        <KeyboardArrowDownIcon
                          sx={{
                            fontSize: 20,
                            color: isExpanded ? '#6ABE52' : '#94A3B8',
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease, color 0.2s ease',
                          }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>

                  {/* Sub-items Collapse */}
                  {item.hasDropdown && dropdown && (
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                      <Box
                        sx={{
                          mt: 0.5,
                          mb: 1.5,
                          p: 1.75,
                          backgroundColor: '#12232E',
                          borderRadius: '16px',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#64748B',
                            px: 1,
                            pt: 0.5,
                            pb: 1.25,
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          }}
                        >
                          {dropdown.headerTitle}
                        </Typography>

                        {dropdown.items.map((subItem) => (
                          <Box
                            key={subItem.title}
                            component={Link}
                            href={subItem.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileExpanded(null);
                            }}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1.5,
                              p: 1.25,
                              borderRadius: '10px',
                              textDecoration: 'none',
                              transition: 'background-color 0.2s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                '& .mobile-sub-title': { color: '#6ABE52' },
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: 32,
                                height: 32,
                                borderRadius: '8px',
                                backgroundColor: 'rgba(106, 190, 82, 0.12)',
                                color: '#6ABE52',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                mt: 0.2,
                                '& svg': { fontSize: 18 },
                              }}
                            >
                              {subItem.icon}
                            </Box>
                            <Box sx={{ minWidth: 0, flex: 1 }}>
                              <Typography
                                className="mobile-sub-title"
                                sx={{
                                  fontSize: '0.88rem',
                                  fontWeight: 700,
                                  color: '#FFFFFF',
                                  lineHeight: 1.3,
                                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                                  transition: 'color 0.2s ease',
                                }}
                              >
                                {subItem.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: '0.75rem',
                                  color: '#94A3B8',
                                  lineHeight: 1.45,
                                  mt: 0.3,
                                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                                }}
                              >
                                {subItem.description}
                              </Typography>
                            </Box>
                          </Box>
                        ))}

                        {/* Mobile CTA Box if available */}
                        {dropdown.hasCta && dropdown.cta && (
                          <Box
                            sx={{
                              mt: 2,
                              p: 2,
                              borderRadius: '12px',
                              backgroundColor: '#0D1B25',
                              border: '1px solid rgba(255, 255, 255, 0.06)',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'inline-block',
                                backgroundColor: 'rgba(56, 189, 248, 0.14)',
                                color: '#38BDF8',
                                px: 1.2,
                                py: 0.35,
                                borderRadius: '4px',
                                fontSize: '0.68rem',
                                fontWeight: 800,
                                letterSpacing: '0.08em',
                                mb: 1.25,
                              }}
                            >
                              {dropdown.cta.badge}
                            </Box>
                            <Typography
                              sx={{
                                fontSize: '0.8rem',
                                color: '#CBD5E1',
                                lineHeight: 1.45,
                                mb: 1.75,
                                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              }}
                            >
                              {dropdown.cta.description}
                            </Typography>
                            <CustomButton
                              text={dropdown.cta.buttonText}
                              href={dropdown.cta.buttonHref}
                              size="small"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileExpanded(null);
                              }}
                              sx={{ width: '100%', justifyContent: 'center', py: 1 }}
                            />
                          </Box>
                        )}
                      </Box>
                    </Collapse>
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </Box>

        {/* Fixed Drawer Footer CTA */}
        <Box
          sx={{
            flexShrink: 0,
            px: 2.5,
            py: 2,
            pb: 'calc(env(safe-area-inset-bottom, 0px) + 16px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#162C3A',
            zIndex: 10,
            boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.25)',
          }}
        >
          <CustomButton
            text="Schedule a Meeting"
            href="#contact"
            size="medium"
            fullWidth
            onClick={() => setMobileOpen(false)}
            sx={{ width: '100%', py: 1.2 }}
          />
        </Box>
      </Drawer>

    </Box>
  );
}
