// // Library Imports
import React, { FC, useEffect, useState } from 'react';
import { Box, Typography, IconButton, Popover } from '@mui/material';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { secondaryLight, secondaryMain } from '@/theme/GlobalVariables';
import DescriptionIcon from '@mui/icons-material/Description';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchIcon from '@mui/icons-material/Search';

//Local Imports
import Styles from '@/styles/home.module.css';
interface IDropdownProps {
  options: { id: string; name: string }[];
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.MouseEvent<HTMLButtonElement>, option: any) => void;
  message?: string;
}
interface RenderValType {
  uuid: string;
  label: string;
}

const SelectSingleDropdown: FC<IDropdownProps> = ({
  options,
  name,
  value,
  placeholder,
  onChange,
  message,
}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchList, setSearchList] = useState<any[]>(options);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    if (event.target.value !== '') {
      setSearchList((prev): any => {
        const filteredData = prev?.filter((item) => {
          return item?.name
            ?.toLowerCase()
            ?.includes(event?.target?.value?.toLowerCase());
        });
        return filteredData;
      });
    } else {
      setSearchList(options);
    }
  };

  useEffect(() => {
    setSearchList(options);
  }, [options]);

  return (
    <React.Fragment>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        component='div'
        width='100%'
      >
        <Box>
          <Typography fontSize='11px' color='text.secondary'>
            {name}
          </Typography>
          <Typography variant='subtitle1'>
            {value ? value : placeholder}
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={handleClick}>
            <ExpandCircleDownOutlinedIcon
              sx={{ color: open ? 'primary.main' : 'text.primary' }}
            />
          </IconButton>
        </Box>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx: {
              backgroundColor: 'secondary.main',
              width: { lg: '13%', md: '16%', sm: '25%', xs: '70%' },
              mt: '5px',
              borderRadius: '12px',
            },
          }}
        >
          <Box
            width='100%'
            display='flex'
            flexDirection='column'
            // gap={'10px'}
            pt='8px'
            pb='8px'
            maxHeight='200px'
          >
            {searchList?.length >= 0 && (
              <Box
                width='100%'
                bgcolor='secondary.main'
                padding='4px 6px'
                pb='8px'
                className={Styles.searchContainer}
                display='flex'
                justifyContent='space-between'
                gap='2px'
                borderBottom={`1px solid ${secondaryLight}`}
              >
                <SearchIcon fontSize='small' />
                <input
                  type='text'
                  placeholder='Search'
                  value={searchText}
                  onChange={handleSearchText}
                />
                {searchText !== '' && (
                  <CloseRoundedIcon
                    fontSize='small'
                    cursor='pointer'
                    onClick={() => {
                      setSearchText('');
                      setSearchList(options);
                    }}
                  />
                )}
              </Box>
            )}
            {searchList &&
              searchList?.map((option) => (
                <Typography
                  key={option?.id}
                  onClick={(e: any) => {
                    if (onChange === undefined) return;
                    onChange(e, option);
                    handleClose();
                  }}
                  sx={{
                    padding: '4px 15px',
                    cursor: 'pointer',
                    borderBottom: `1px solid ${secondaryLight}`,
                  }}
                >
                  {option.name}
                </Typography>
              ))}
            {searchList?.length === 0 && (
              <Box textAlign='center'>
                <Typography
                  pt='5px'
                  fontSize='12px'
                  component='div'
                  textAlign='center'
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  gap='8px'
                >
                  <DescriptionIcon />
                  No Data Found <br />
                  {message}
                </Typography>
              </Box>
            )}
          </Box>
        </Popover>
      </Box>
    </React.Fragment>
  );
};
export default SelectSingleDropdown;
