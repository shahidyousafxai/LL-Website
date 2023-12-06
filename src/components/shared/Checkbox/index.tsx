//Library Imports
import React, { FC } from 'react';
import { Checkbox as MuiCheckbox, FormLabel, Box } from '@mui/material';

//Local Imports
import UnCheckedCheckboxIcon from '@/assets/Icons/UnCheckboxIcon';
import CheckedCheckboxIcon from '@/assets/Icons/CheckedCheckboxIcon';

interface ICheckboxProps {
  label: string;
  checked?: boolean;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
}

const Checkbox: FC<ICheckboxProps> = ({
  label,
  checked,
  value,
  onChange,
  name,
}) => {
  return (
    <React.Fragment>
      <Box component={'div'} display='flex' alignItems='center' gap='8px'>
        <MuiCheckbox
          icon={<UnCheckedCheckboxIcon />}
          checkedIcon={<CheckedCheckboxIcon />}
          onChange={onChange}
          checked={checked}
          value={value}
          name={name}
          sx={{ padding: '0px' }}
          placeholder={label}
          className='checkbox'
        />
        <FormLabel sx={{ fontSize: '13px', color: 'text.primary' }}>
          {label}
        </FormLabel>
      </Box>
    </React.Fragment>
  );
};
export default Checkbox;
