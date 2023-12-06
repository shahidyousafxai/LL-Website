// Library Imports
import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
// Local Imports
import assets from '@/assets';
import { primaryMain } from '@/theme/GlobalVariables';
import styles from '@/styles/home.module.css';
import { dateFormate } from '@/utils/utils';

interface IPropsBlogCard {
  date: string;
  blogName: string;
  description: string;
  image?: any;
  tags: string[];
  className?: any;
  onClick?: React.ReactEventHandler<HTMLDivElement>;
}

const BlogCard: FC<IPropsBlogCard> = ({
  date,
  blogName,
  description,
  image,
  tags,
  className,
  onClick,
}) => {
  return (
    <React.Fragment>
      <Box
        className={className ? className : styles.blog}
        onClick={onClick}
        sx={{ cursor: 'pointer' }}
        maxWidth={{ lg: '45%', md: '45%', sm: '100%', xs: '100%' }}
        minWidth='40%'
      >
        <Box borderRadius='12px' height='max-content'>
          {image ? (
            <Image
              src={image ? image : assets.blogImg}
              alt='Blog Thumbnail'
              className='blog-img'
              style={{
                width: '100%',
                objectFit: 'cover',
                height: '233px',
                borderRadius: '14px',
              }}
            />
          ) : null}
        </Box>
        <Typography fontSize='12px' color='text.secondary'>
          {dateFormate(date)}
        </Typography>
        <Typography fontSize='15px' color='text.primary'>
          {blogName}
        </Typography>
        <Box
          fontSize='13px'
          color='text.secondary'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Box display='flex' gap='8px' flexWrap='wrap' mt='6px'>
          {tags.map((tag, index) => (
            <Typography
              fontSize='13px'
              color='primary.main'
              border={`2px solid ${primaryMain}`}
              width='max-content'
              padding='2px 10px'
              borderRadius={'17px'}
              key={index}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default BlogCard;
