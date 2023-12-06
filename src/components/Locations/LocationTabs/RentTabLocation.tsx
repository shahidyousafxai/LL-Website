//Library Imports
import React, { FC, useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Pagination,
  SelectChangeEvent,
  styled,
} from '@mui/material';
//Local Imports
import SearchBar from '@/components/shared/SearchBar';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchedUnitCard from '@/components/shared/SearchedUnitCard';

interface IRentTabLocationProps {
  searchedList: any[];
  from: string;
  activeTab: string;
}

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-textPrimary.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: '10px',
    width: 34,
    height: 34,
  },
  '& .MuiPaginationItem-textPrimary': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    borderRadius: '10px',
    padding: '6px',
  },
  '& .MuiPaginationItem-icon': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
}));

const itemsPerPage = 7;

const RentTabLocation: FC<IRentTabLocationProps> = ({
  searchedList,
  from,
  activeTab,
}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [sortType, setSortType] = useState<string>('Name');
  const handleOnChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchedList?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Sorted Data
  const sortedData = [...searchedList]?.sort((a, b) => {
    if (sortType === 'Name') {
      return a?.unit_number?.localeCompare(b?.unit_number);
    } else if (sortType === 'Price') {
      if (a?.is_available_for_lease) {
        return b?.lease_price?.localeCompare(a?.lease_price);
      } else if (a?.is_available_for_sale) {
        return b?.buy_price?.localeCompare(a?.buy_price);
      }
    }
  });
  // Filtered Data
  const filteredData = sortedData?.filter(
    (item) =>
      item?.unit_number?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
      item?.unit_type?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  const currentPageData = filteredData?.slice(startIndex, endIndex);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <React.Fragment>
      <SearchBar
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Box
        width='100%'
        display='flex'
        justifyContent='space-between'
        mt='20px'
        mb='16px'
      >
        <Typography variant='body2' color='text.secondary'>
          {filteredData?.length} units
        </Typography>
        <Box display='flex' alignItems='center' gap='5px'>
          <Typography variant='body2' color='text.secondary'>
            Sort by :
          </Typography>
          <FormControl>
            <Select
              value={sortType}
              onChange={handleOnChange}
              name='sort'
              variant='standard'
              IconComponent={KeyboardArrowDownRoundedIcon}
              sx={{
                backgroundColor: 'transparent',
                outline: 'none',
                color: 'text.primary',
                borderBottom: 'none',
                '&:hover': {
                  '&& fieldset': {
                    borderColor: 'primary.main',
                  },
                },
                '& .MuiSelect-icon': {
                  color: 'text.primary',
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
                '&:before': {
                  borderBottom: 'none',
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    '& .MuiList-root': {
                      backgroundColor: 'secondary.main',
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
              <MenuItem value={'Name'} selected>
                Name
              </MenuItem>
              <MenuItem value={'Price'}>Price</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        gap='10px'
        height='800px'
        overflow='auto'
      >
        {currentPageData?.map((item, index) => {
          return (
            <SearchedUnitCard
              key={index}
              unitType={item?.unit_type}
              ammenties={item?.unit_amenities}
              buyPrice={item?.buy_price}
              leasePrice={item?.lease_price}
              width={item?.width}
              length={item?.length}
              unitNumber={item?.unit_number}
              price={
                from === 'Rent'
                  ? item?.lease_price
                  : from === 'Buy'
                  ? item?.buy_price
                  : from === 'campusUnits' && item?.is_available_for_lease
                  ? item?.lease_price
                  : item?.buy_price
              }
              fromTab={from}
              activeTab={activeTab}
              item={item}
            />
          );
        })}
        {currentPageData?.length <= 0 && (
          <Typography
            color='text.primary'
            variant='subtitle1'
            textAlign='center'
          >
            No Data Found
          </Typography>
        )}
      </Box>
      <Box mt='20px' display='flex' justifyContent='center'>
        <StyledPagination
          count={totalPages}
          color='primary'
          shape='rounded'
          variant='text'
          boundaryCount={1}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </React.Fragment>
  );
};
export default RentTabLocation;
