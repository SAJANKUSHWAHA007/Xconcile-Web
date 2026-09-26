'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


export default function CustomAutocomplete({
  id = 'custom-autocomplete',
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  error = false,
  helperText,
  fullWidth = true,
  size = 'small',
  required = false,
  disabled = false,
  maxVisibleItems = 4,
  sx = {},
  ...props
}) {
  // Normalize options to handle both string array and object array
  const normalizedOptions = React.useMemo(() => {
    return options.map((opt) => {
      if (typeof opt === 'string') {
        return { label: opt, value: opt };
      }
      return opt;
    });
  }, [options]);

  // Find currently selected option object based on value
  const selectedOption = React.useMemo(() => {
    if (!value) return null;
    if (typeof value === 'object' && value !== null) {
      return value;
    }
    return (
      normalizedOptions.find(
        (opt) => opt.value === value || opt.label === value
      ) || null
    );
  }, [value, normalizedOptions]);

  const handleChange = (event, newValue) => {
    if (onChange) {
      if (!newValue) {
        onChange(event, '');
      } else if (typeof newValue === 'string') {
        onChange(event, newValue);
      } else {
        onChange(event, newValue.value || newValue.label);
      }
    }
  };

  // Calculate height to show maxVisibleItems (4 items = ~176px)
  const listboxMaxHeight = maxVisibleItems ? `${maxVisibleItems * 44 + 2}px` : '178px';

  return (
    <Box sx={{ width: fullWidth ? '100%' : 'auto', ...sx }}>
      {label && (
        <FormLabel
          htmlFor={id}
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
          {label}
        </FormLabel>
      )}

      <Autocomplete
        id={id}
        options={normalizedOptions}
        value={selectedOption}
        onChange={handleChange}
        disabled={disabled}
        fullWidth={fullWidth}
        size={size}
        getOptionLabel={(option) => {
          if (typeof option === 'string') return option;
          return option?.label || option?.value || '';
        }}
        isOptionEqualToValue={(option, val) => {
          if (!val) return false;
          const optVal = typeof option === 'string' ? option : option?.value || option?.label;
          const currentVal = typeof val === 'string' ? val : val?.value || val?.label;
          return optVal === currentVal;
        }}
        forcePopupIcon={true}
        popupIcon={
          <KeyboardArrowDownRoundedIcon
            sx={{
              fontSize: 22,
              color: '#64748B',
              transition: 'transform 0.25s ease, color 0.2s ease',
            }}
          />
        }
        ListboxProps={{
          onWheel: (e) => {
            e.stopPropagation();
          },
          sx: {
            maxHeight: `${listboxMaxHeight} !important`,
            overflowY: 'auto !important',
            overscrollBehavior: 'contain',
            p: 0.5,
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#F8FAFC',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#CBD5E1',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#94A3B8',
              },
            },
          },
        }}
        slotProps={{
          popper: {
            onWheel: (e) => {
              e.stopPropagation();
            },
            sx: {
              zIndex: 1300,
              '& .MuiPaper-root': {
                backgroundColor: '#FFFFFF !important',
                color: '#1E293B',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
                mt: 1,
                p: 0.5,
                overflow: 'hidden',
              },
              '& .MuiAutocomplete-listbox': {
                maxHeight: `${listboxMaxHeight} !important`,
                overflowY: 'auto !important',
                overscrollBehavior: 'contain',
                p: 0.5,
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#F8FAFC',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#CBD5E1',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#94A3B8',
                  },
                },
              },
            },
          },
        }}
        renderOption={(optionProps, option, { selected }) => {
          const { key, ...otherProps } = optionProps;
          const labelText = typeof option === 'string' ? option : option.label || option.value;

          return (
            <Box
              component="li"
              key={key || labelText}
              {...otherProps}
              sx={{
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                fontSize: '0.9rem',
                fontWeight: selected ? 600 : 500,
                px: 2,
                py: 1.15,
                my: 0.35,
                borderRadius: '8px',
                cursor: 'pointer',
                color: selected ? '#FFFFFF !important' : '#1E293B',
                backgroundColor: selected
                  ? '#6ABE52 !important'
                  : 'transparent !important',
                transition: 'all 0.15s ease',
                '&:hover': {
                  backgroundColor: selected
                    ? '#5ea748 !important'
                    : 'rgba(106, 190, 82, 0.1) !important',
                  color: selected ? '#FFFFFF !important' : '#4B9E36 !important',
                },
                '&[aria-selected="true"]': {
                  backgroundColor: '#6ABE52 !important',
                  color: '#FFFFFF !important',
                },
                '&.Mui-focused': {
                  backgroundColor: selected
                    ? '#5ea748 !important'
                    : 'rgba(106, 190, 82, 0.1) !important',
                  color: selected ? '#FFFFFF !important' : '#4B9E36 !important',
                },
              }}
            >
              {labelText}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            error={error}
            required={required}
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
              '& .MuiAutocomplete-popupIndicator': {
                color: '#64748B',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(106, 190, 82, 0.08)',
                  color: '#6ABE52',
                },
                '&.MuiAutocomplete-popupIndicatorOpen': {
                  color: '#6ABE52',
                },
              },
              '& .MuiInputBase-input': {
                fontSize: '0.9rem',
                fontFamily: 'var(--font-manrope), "Manrope", sans-serif',
                color: '#0F172A',
                py: 1.15,
                '&::placeholder': {
                  color: '#94A3B8',
                  opacity: 1,
                },
              },
            }}
          />
        )}
        {...props}
      />

      {helperText && (
        <FormHelperText error={error} sx={{ mx: 0.5, mt: 0.5 }}>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
}
