import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6ABE52',
      light: '#7ecb66',
      dark: '#559c40',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#13212C',
      paper: '#173345',
      gradient: 'linear-gradient(180deg, #13212C 0%, #173345 100%)',
      nav: 'rgba(18, 38, 54, 0.75)',
      badge: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',
      accent: '#6ABE52',
      muted: '#64748B',
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.1)',
      nav: 'rgba(255, 255, 255, 0.08)',
    },
  },
  typography: {
    fontFamily: 'var(--font-manrope), "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
      fontSize: '56px',
      fontWeight: 700,
      lineHeight: '72px',
      letterSpacing: '0%',
      color: '#FFFFFF',
      '@media (max-width:900px)': {
        fontSize: '40px',
        lineHeight: '52px',
      },
      '@media (max-width:600px)': {
        fontSize: '32px',
        lineHeight: '42px',
      },
    },
    // Sub title on hero section: font Manrope, size 20px, weight 500, line height 24px
    heroSubtitle: {
      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0%',
      color: '#94A3B8',
      display: 'block',
      maxWidth: '640px',
      '@media (max-width:600px)': {
        fontSize: '17px',
        lineHeight: '24px',
      },
    },
    heroDescription: {
      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0%',
      color: '#94A3B8',
      display: 'block',
      maxWidth: '640px',
      '@media (max-width:600px)': {
        fontSize: '17px',
        lineHeight: '24px',
      },
    },
    subtitle1: {
      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0%',
      color: '#94A3B8',
    },
    heroBadge: {
      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
      fontSize: '13.5px',
      fontWeight: 500,
      lineHeight: '20px',
      color: '#CBD5E1',
      letterSpacing: '0%',
    },
    trustBadge: {
      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '22px',
      color: '#94A3B8',
      letterSpacing: '0%',
    },
    body1: {
      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
      fontSize: '16px',
      lineHeight: '26px',
      color: '#94A3B8',
    },
    button: {
      fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#13212C',
          color: '#FFFFFF',
          minHeight: '100vh',
          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 9999,
          fontWeight: 600,
          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
          padding: '10px 22px',
          transition: 'all 0.25s ease-in-out',
        },
        containedPrimary: {
          backgroundColor: '#6ABE52',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#5ea748',
            boxShadow: '0 6px 20px rgba(106, 190, 82, 0.35)',
          },
        },
      },
    },
  },
});

export default theme;
