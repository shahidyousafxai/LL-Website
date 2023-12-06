'use client';
// Library Imports
import React, { FC, useState, useEffect } from 'react';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
//Local Imports
import BlogCard from '@/components/shared/BlogCard';
import { data } from '@/utils/data';
import styles from '@/styles/home.module.css';
import ApiController from '@/network/api';
import { truncateString } from '@/utils/utils';
import { useRouter } from 'next/router';

const BlogSection: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<any[]>([]);
  // METHODS FETCH BLOGS & FETCH TAGS LIST
  const fetchBlogsListCall = async (payload: any) => {
    setLoading(true);
    ApiController.fechBlogsListPageCall(payload, (response) => {
      if (response.success) {
        if (response?.data?.length > 0) {
          setBlogs(response?.data);
        } else {
          setBlogs([]);
        }
        setLoading(false);
      } else {
        setBlogs([]);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    fetchBlogsListCall('');
  }, []);

  return (
    <React.Fragment>
      <Grid container mb='120px'>
        <Box>
          <Typography variant='subtitle1' color='text.primary'>
            Luxelocker News
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            Investing in Storage Units Blog - RV & Boat Storage at Luxelocker
          </Typography>
        </Box>
        <Grid item lg={12} md={12} xs={12}>
          {loading ? (
            <Grid
              container
              height={'50vh'}
              m='auto'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <CircularProgress size={40} />
            </Grid>
          ) : (
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
                    onClick={() => router.push(`/blogs/${blog?.uid}`)}
                  />
                );
              })}
            </Box>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default BlogSection;
