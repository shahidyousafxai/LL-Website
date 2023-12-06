'use client';
// Library Imports
import React, { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
//Local Imports
import BlogCard from '@/components/shared/BlogCard';
import styles from '@/styles/home.module.css';
import { truncateString } from '@/utils/utils';

interface IRelatedPostProps {
  name: string;
  description?: string;
  blogs: any[];
}

const RelatedPosts: FC<IRelatedPostProps> = ({ name, description, blogs }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Grid container mb='120px'>
        <Box>
          <Typography variant='h6' color='text.primary'>
            {name}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {description}
          </Typography>
        </Box>
        <Grid item lg={12} md={12} xs={12}>
          <Box className={styles.blogRow} mt='20px'>
            {blogs?.map((blog) => {
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
                  key={blog?.uid}
                  date={blog?.created_at}
                  blogName={blog?.title}
                  description={truncateString(descirption, 20)}
                  image={image}
                  tags={blog?.tags}
                  onClick={() => {
                    router.replace(`/blogs/${blog?.uid}`);
                  }}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default RelatedPosts;
