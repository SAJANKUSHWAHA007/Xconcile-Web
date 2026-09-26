'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CustomAutocomplete from './CustomAutocomplete';
import CustomButton from './CustomButton';

// Form validation imports
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const defaultFeatures = [
  'Free, no-obligation consultation',
  'Response within one business day',
  'A clear proposal with scope, team and pricing',
];

export const defaultServiceOptions = [
  'Tax Preparation',
  'Sales & Use Tax Compliance',
  'Bookkeeping',
  'Payroll',
  'Full-Service Accounting',
  'CFO Support',
  'Account Cleanup',
  'Other',
];

export const consultationFormSchema = yup.object().shape({
  name: yup.string().trim().required('Name is required'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .trim()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{1,4}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?[\d\s.-]{6,15}$/,
      'Please enter a valid phone number'
    ),
  company: yup.string().trim(),
  service: yup.string().required('Please select a service of interest'),
  message: yup.string().trim(),
});

export default function ContactConsultationSection({
  id = 'contact',
  title = 'Ready to Simplify Your\nAccounting?',
  subtitle = "Tell us about your accounting needs and we'll help you find the right outsourcing model for your business.",
  features = defaultFeatures,
  serviceOptions = defaultServiceOptions,
  maxWidth = 'xl',
  background = '#F8FAFC',
  onSubmitSuccess,
}) {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(consultationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    // Simulated submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(data);
    }
    reset();
  };

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: background,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={maxWidth}>
        <Grid container spacing={{ xs: 5, md: 6, lg: 8 }} sx={{ alignItems: 'center' }}>
          {/* Left Column: Heading, Subtitle & Checkmark Features */}
          <Grid size={{ xs: 12, md: 5.75, lg: 5.5 }}>
            <Box sx={{ maxWidth: { xs: '100%', md: '560px' } }}>
              {/* Heading: Exact 2 lines as shown in Image 1 */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.35rem', md: '2.5rem', lg: '2.75rem', xl: '2.95rem' },
                  lineHeight: { xs: 1.2, md: 1.15 },
                  color: '#0F172A',
                  letterSpacing: '-0.03em',
                  whiteSpace: 'pre-line',
                  mb: 2,
                }}
              >
                {title}
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  fontWeight: 400,
                  fontSize: { xs: '0.95rem', md: '1.025rem' },
                  color: '#475569',
                  lineHeight: 1.55,
                  maxWidth: '480px',
                  mb: { xs: 3.5, md: 4.5 },
                }}
              >
                {subtitle}
              </Typography>

              {/* Checkmark List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {features.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.75,
                    }}
                  >
                    {/* Circular Green Checkmark matching Image 1 */}
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        border: '1.8px solid #52BA41',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#52BA41',
                        flexShrink: 0,
                      }}
                    >
                      <CheckRoundedIcon sx={{ fontSize: 14, stroke: '#52BA41', strokeWidth: 0.4 }} />
                    </Box>

                    {/* Feature Text */}
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                        fontSize: { xs: '0.95rem', sm: '0.975rem' },
                        fontWeight: 500,
                        color: '#1E293B',
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Column: White Consultation Form Card */}
          <Grid size={{ xs: 12, md: 6.25, lg: 6.5 }}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                p: { xs: 3, sm: 4.5 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
              }}
            >
              {/* Row 1: Name and Email */}
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Box>
                        <FormLabel
                          htmlFor="consultation-name"
                          sx={{
                            display: 'block',
                            mb: 0.75,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: '#1E293B',
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            '&.Mui-focused': { color: '#4B9E36' },
                          }}
                        >
                          Name*
                        </FormLabel>
                        <TextField
                          {...field}
                          id="consultation-name"
                          placeholder="Your name"
                          fullWidth
                          size="small"
                          error={Boolean(error)}
                          helperText={error?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: '#FFFFFF',
                              '& fieldset': {
                                borderColor: '#E2E8F0',
                              },
                              '&:hover fieldset': {
                                borderColor: '#CBD5E1',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#6ABE52',
                                borderWidth: '1.5px',
                              },
                            },
                            '& .MuiInputBase-input': {
                              fontSize: '0.9rem',
                              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              color: '#0F172A',
                              py: 1.15,
                            },
                          }}
                        />
                      </Box>
                    )}
                  />
                </Grid>

                {/* Email Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Box>
                        <FormLabel
                          htmlFor="consultation-email"
                          sx={{
                            display: 'block',
                            mb: 0.75,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: '#1E293B',
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            '&.Mui-focused': { color: '#4B9E36' },
                          }}
                        >
                          Email*
                        </FormLabel>
                        <TextField
                          {...field}
                          id="consultation-email"
                          type="email"
                          placeholder="Your name"
                          fullWidth
                          size="small"
                          error={Boolean(error)}
                          helperText={error?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: '#FFFFFF',
                              '& fieldset': {
                                borderColor: '#E2E8F0',
                              },
                              '&:hover fieldset': {
                                borderColor: '#CBD5E1',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#6ABE52',
                                borderWidth: '1.5px',
                              },
                            },
                            '& .MuiInputBase-input': {
                              fontSize: '0.9rem',
                              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              color: '#0F172A',
                              py: 1.15,
                            },
                          }}
                        />
                      </Box>
                    )}
                  />
                </Grid>
              </Grid>

              {/* Row 2: Phone Number and Company */}
              <Grid container spacing={2}>
                {/* Phone Number Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Box>
                        <FormLabel
                          htmlFor="consultation-phone"
                          sx={{
                            display: 'block',
                            mb: 0.75,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: '#1E293B',
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            '&.Mui-focused': { color: '#4B9E36' },
                          }}
                        >
                          Phone Number*
                        </FormLabel>
                        <TextField
                          {...field}
                          id="consultation-phone"
                          type="tel"
                          placeholder="Your phone number"
                          fullWidth
                          size="small"
                          error={Boolean(error)}
                          helperText={error?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: '#FFFFFF',
                              '& fieldset': {
                                borderColor: error ? '#EF4444' : '#E2E8F0',
                              },
                              '&:hover fieldset': {
                                borderColor: error ? '#EF4444' : '#CBD5E1',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: error ? '#EF4444' : '#6ABE52',
                                borderWidth: '1.5px',
                              },
                            },
                            '& .MuiInputBase-input': {
                              fontSize: '0.9rem',
                              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              color: '#0F172A',
                              py: 1.15,
                            },
                          }}
                        />
                      </Box>
                    )}
                  />
                </Grid>

                {/* Company Field */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Controller
                    name="company"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Box>
                        <FormLabel
                          htmlFor="consultation-company"
                          sx={{
                            display: 'block',
                            mb: 0.75,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: '#1E293B',
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            '&.Mui-focused': { color: '#4B9E36' },
                          }}
                        >
                          Company
                        </FormLabel>
                        <TextField
                          {...field}
                          id="consultation-company"
                          placeholder="Your company name"
                          fullWidth
                          size="small"
                          error={Boolean(error)}
                          helperText={error?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: '#FFFFFF',
                              '& fieldset': {
                                borderColor: '#E2E8F0',
                              },
                              '&:hover fieldset': {
                                borderColor: '#CBD5E1',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#6ABE52',
                                borderWidth: '1.5px',
                              },
                            },
                            '& .MuiInputBase-input': {
                              fontSize: '0.9rem',
                              fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                              color: '#0F172A',
                              py: 1.15,
                            },
                          }}
                        />
                      </Box>
                    )}
                  />
                </Grid>
              </Grid>

              {/* Row 3: Service of Interest * (CustomAutocomplete) */}
              <Box>
                <Controller
                  name="service"
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <CustomAutocomplete
                      id="consultation-service"
                      label="Service of Interest *"
                      placeholder="Select a service of interest"
                      options={serviceOptions}
                      value={value}
                      onChange={(_, newValue) => onChange(newValue)}
                      error={Boolean(error)}
                      helperText={error?.message}
                    />
                  )}
                />
              </Box>


              {/* Row 4: Company / Message Textarea */}
              <Box>
                <Controller
                  name="message"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Box>
                      <FormLabel
                        htmlFor="consultation-message"
                        sx={{
                          display: 'block',
                          mb: 0.75,
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: '#1E293B',
                          fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                          '&.Mui-focused': { color: '#4B9E36' },
                        }}
                      >
                        Company
                      </FormLabel>
                      <TextField
                        {...field}
                        id="consultation-message"
                        placeholder="Your name"
                        fullWidth
                        multiline
                        minRows={4}
                        error={Boolean(error)}
                        helperText={error?.message}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: '#FFFFFF',
                            '& fieldset': {
                              borderColor: '#E2E8F0',
                            },
                            '&:hover fieldset': {
                              borderColor: '#CBD5E1',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#6ABE52',
                              borderWidth: '1.5px',
                            },
                          },
                          '& .MuiInputBase-input': {
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                            color: '#0F172A',
                          },
                        }}
                      />
                    </Box>
                  )}
                />
              </Box>

              {/* Submit Button */}
              <CustomButton
                type="submit"
                disabled={isSubmitting}
                text={isSubmitting ? 'Submitting...' : 'Get a Free Consultation'}
                sx={{
                  width: '100%',
                  py: 1.35,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 14px rgba(106, 190, 82, 0.25)',
                }}
              />

              {/* Success Feedback Alert */}
              {submitted && (
                <Box
                  sx={{
                    p: 1.75,
                    borderRadius: '8px',
                    backgroundColor: '#EAF7E8',
                    border: '1px solid rgba(106, 190, 82, 0.3)',
                    color: '#2E7D32',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                  }}
                >
                  Thank you! We have received your request and will respond within one business day.
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
