import React, { FC } from 'react';
import { TextField, Box, Typography, colors } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

interface ISelectDropdwonProps {
  fieldName: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?:
    | ((event: SelectChangeEvent<string>, child: React.ReactNode) => void)
    | undefined;
  width?: string;
  options: { uuid: string; label: string; value: string }[];
}

const MuiSelectDropdown: FC<ISelectDropdwonProps> = ({
  fieldName,
  options,
  name,
  placeholder,
  value,
  onChange,
  width,
}) => {
  const icon = <ExpandCircleDownOutlinedIcon color='error' />;
  return (
    <React.Fragment>
      <Box width='100%'>
        <Typography fontSize='12px' color='text.secondary'>
          {fieldName}
        </Typography>
        <FormControl fullWidth>
          {value === '' ? (
            <InputLabel shrink={false} sx={{ fontSize: '13px' }}>
              Select
            </InputLabel>
          ) : null}
          <Select
            value={value}
            IconComponent={ExpandCircleDownOutlinedIcon}
            placeholder='Select'
            onChange={onChange}
            sx={{
              backgroundColor: 'secondary.main',
              color: 'text.primary',
              borderRadius: '12px',
              '&:hover': {
                '&& fieldset': {
                  borderColor: 'primary.main',
                },
              },
              '& .MuiSelect-icon': {
                color: 'text.primary',
                backgroundColor: 'secondary.main',
              },
              '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                borderRadius: '12px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '12px !important',
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'primary.main',
                  borderRadius: '12px',
                },
              '& .css-gkvge4-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
                maxHeight: '200px !important',
              },
              '& .MuiSvgIcon-root': {
                color: 'text.secondary',
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  '& .MuiList-root': {
                    backgroundColor: 'secondary.main',
                    maxHeight: '200px',
                    overflow: 'auto',
                  },
                  '& .MuiMenuItem-root.Mui-selected': {
                    backgroundColor: 'primary.main',
                  },
                  '& .MuiMenuItem-root:hover': {
                    backgroundColor: 'primary.light',
                  },
                  '& .MuiMenuItem-root.Mui-selected:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              },
            }}
          >
            {options?.map((option) => (
              <MenuItem key={option.uuid} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </React.Fragment>
  );
};
export default MuiSelectDropdown;
