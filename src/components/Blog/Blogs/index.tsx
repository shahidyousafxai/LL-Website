// Library Imports
import React, { useState, FC } from 'react';
import { useRouter } from 'next/router';
import { Grid, Box, Typography, Pagination, styled } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DescriptionIcon from '@mui/icons-material/Description';

// Local Imports
import BlogCard from '@/components/shared/BlogCard';
import Styles from '@/styles/home.module.css';
import { primaryMain } from '@/theme/GlobalVariables';
import { truncateString } from '@/utils/utils';

interface IBlogsProps {
  blogs: any[];
  tags: any[];
  tagfilter: string[];
  handleAddTagFilter: (tag: string) => void;
  handleRemoveTagFilter: (tag: string) => void;
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
const itemsPerPage = 6;
const BlogsListSection: FC<IBlogsProps> = ({
  blogs,
  tags,
  tagfilter,
  handleAddTagFilter,
  handleRemoveTagFilter,
}) => {
  const router = useRouter();
  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // On Change
  const currentBlogs = blogs?.slice(startIndex, endIndex);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  // POPULAR POSTS
  const popularPosts = blogs
    ?.sort((a, b) => b?.popular_count - a?.popular_count)
    ?.slice(0, 3);

  return (
    <Grid container mt='60px' mb='40px'>
      <Grid item xs={12} sm={8} md={8} lg={8}>
        <Typography variant='h5' color='text.primary'>
          Latest Posts
        </Typography>
        <Box
          display='flex'
          gap='10px'
          flexWrap='wrap'
          mt={tagfilter?.length > 0 ? '10px' : '0px'}
        >
          {tagfilter?.length > 0 &&
            tagfilter?.map((tag, index) => (
              <Typography
                fontSize='13px'
                color='secondary.main'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                gap='6px'
                bgcolor={`primary.main`}
                width='max-content'
                padding='2px 10px'
                borderRadius={'17px'}
                rowGap='5px'
                key={index}
              >
                {tag}
                <CloseRoundedIcon
                  fontSize='small'
                  onClick={() => handleRemoveTagFilter(tag)}
                  sx={{ cursor: 'pointer' }}
                />
              </Typography>
            ))}
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'
          rowGap='30px'
          gap={'30px'}
          mt='20px'
        >
          {currentBlogs?.length > 0 &&
            currentBlogs?.map((blog) => {
              let descirption = blog?.short_description?.replace(
                /<[^>]*>/g,
                ''
              );
              const imageURL = blog?.featured_image?.replaceAll(
                'download',
                'view'
              );
              const image = {
                default: {
                  src: `${imageURL}`,
                  height: 800,
                  width: 1200,
                  blurDataURL: `${imageURL}`,
                  blurWidth: 8,
                  blurHeight: 4,
                },
              };
              return (
                <BlogCard
                  key={blog?.id}
                  date={blog?.created_at}
                  blogName={blog?.title}
                  description={truncateString(descirption, 26)}
                  image={image}
                  tags={blog?.tags}
                  className={Styles.blogsPageBlogs}
                  onClick={() => router.push(`/blogs/${blog?.uid}`)}
                />
              );
            })}
          {currentBlogs?.length === 0 && (
            <Grid
              container
              height={'50vh'}
              m='auto'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Box textAlign='center' m={'auto'}>
                <Typography
                  pt='5px'
                  component='div'
                  textAlign='center'
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  gap='8px'
                >
                  <DescriptionIcon fontSize='large' />
                  No Data Found
                </Typography>
              </Box>
            </Grid>
          )}
        </Box>
        <Box mt='60px' display='flex' justifyContent='left' mb='20px'>
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
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography variant='h5' color='text.primary'>
          Popular Posts
        </Typography>
        <Box display='flex' flexWrap='wrap' rowGap='30px' mt='20px'>
          {popularPosts?.map((blog) => {
            let descirption = blog?.short_description?.replace(/<[^>]*>/g, '');
            return (
              <BlogCard
                key={blog.id}
                date={blog?.created_at}
                blogName={blog?.title}
                description={truncateString(descirption, 26)}
                tags={blog?.tags}
                className={Styles.blogsPopularPost}
                onClick={() => router.push(`/blogs/${blog?.uid}`)}
              />
            );
          })}
        </Box>
        <Typography variant='h5' color='text.primary' mt='30px'>
          Tags
        </Typography>
        <Box display='flex' gap='8px' flexWrap='wrap' mt='20px'>
          {tags?.map((tag, index) => (
            <Typography
              fontSize='13px'
              color='primary.main'
              border={`2px solid ${primaryMain}`}
              width='max-content'
              padding='2px 10px'
              borderRadius={'17px'}
              key={index}
              onClick={() => handleAddTagFilter(tag)}
              sx={{ cursor: 'pointer' }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlogsListSection;
