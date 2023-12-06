// Library Imports
import React, { FC } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

//Local Imports
import Styles from '@/styles/locations.module.css';

interface IPropsSearchBar {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar: FC<IPropsSearchBar> = ({ value, onChange }) => {
  return (
    <React.Fragment>
      <Box
        width='100%'
        bgcolor='secondary.main'
        borderRadius='12px'
        padding='12px 15px'
        mt='20px'
        className={Styles.searchContainer}
      >
        <SearchIcon />
        <input
          type='text'
          placeholder='Search'
          value={value}
          onChange={onChange}
        />
      </Box>
    </React.Fragment>
  );
};
export default SearchBar;
