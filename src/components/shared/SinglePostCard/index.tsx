// Library Imports
import React, { useState, FC } from 'react';
import Image from 'next/image';
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import DescriptionIcon from '@mui/icons-material/Description';
// Local Imports
import assets from '@/assets';
import { data } from '@/utils/data';
import { primaryMain } from '@/theme/GlobalVariables';
import Button from '../Button';
import TextField from '../TextField';
import { dateFormate } from '@/utils/utils';

interface ISingleBlogPostCardProps {
  data: { [x: string]: any };
  error: { [x: string]: any };
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onClickToCheckPassword: any;
  loading: boolean;
}

const SinglePostCard: FC<ISingleBlogPostCardProps> = ({
  data,
  error,
  password,
  setPassword,
  onClickToCheckPassword,
  loading,
}) => {
  const tags = data?.tags;
  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        <React.Fragment>
          {error?.message?.length > 0 ? (
            <React.Fragment>
              <Grid
                container
                spacing={3}
                mb='150px'
                mt='120px'
                rowGap={'100px'}
              >
                <Box textAlign='center' width='100%'>
                  <Typography variant='h3' color='text.primary'>
                    Please Enter Password
                  </Typography>
                  <Box
                    display='flex'
                    alignItems='start'
                    gap='20px'
                    width='50%'
                    pt='30px'
                    m='auto'
                  >
                    <TextField
                      placeholder='Enter Password'
                      name='password'
                      type='text'
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      error={Boolean(error?.message[0]?.Password)}
                      helperText={error?.message[0]?.Password}
                    />
                    <Box mt='4px'>
                      <Button
                        variant='contained'
                        onClick={() => onClickToCheckPassword()}
                        // loading={loading}
                      >
                        Check
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </React.Fragment>
          ) : (
            <Box>
              <Typography
                variant='subtitle2'
                color='text.secondary'
                textAlign='center'
              >
                {dateFormate(data?.date)}
              </Typography>
              <Typography variant='h3' color='text.primary' textAlign='center'>
                {data?.title}
              </Typography>
              <Box
                display='flex'
                gap='8px'
                flexWrap='wrap'
                mt='10px'
                justifyContent='center'
              >
                {tags?.map((tag: string, index: number) => (
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
              <Box width='100%' mt='30px'>
                <Image
                  src={data?.featuredImage}
                  alt='Blog Thumbnail'
                  style={{
                    width: '100%',
                    height: '360px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
              </Box>
              <Box
                maxWidth='730px'
                m='auto'
                mt='40px'
                mb='40px'
                dangerouslySetInnerHTML={{ __html: data?.description }}
                sx={{
                  div: {
                    fontSize: '16px',
                    lineHeight: '26px',
                    color: 'text.secondary',
                  },
                  img: {
                    width: '100% !important',
                  },
                  button: {
                    display: 'none !important',
                  },
                  a: {
                    color: 'primary.main',
                    textDecoration: 'none',
                  },
                  video: {
                    width: '100%',
                  },
                  '& .heading': {
                    color: 'text.primary',
                  },
                }}
              />
              {/* <Box maxWidth='730px' m='auto' mt='40px' mb='40px'>
                <Typography variant='h5' color='text.primary'>
                  Quis autem vel eum iure
                </Typography>
                <Typography variant='body1' color='text.secondary' pt='20px'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetu. <br />
                  <br /> Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </Typography>
                <Box
                  className={styles.videoContainer}
                  mx='auto'
                  height='400px'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  mt='25px'
                >
                  <IconButton>
                    <PlayCircleRoundedIcon fontSize='large' color='primary' />
                  </IconButton>
                </Box>
                <Typography variant='h5' color='text.primary' mt='20px'>
                  Sed ut perspiciatis unde omnis iste natus
                </Typography>
                <Typography variant='body1' color='text.secondary' pt='20px'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetu.
                </Typography>
                <Box width='100%' mt='30px'>
                  <Image
                    src={assets.blogImg}
                    alt='Blog Thumbnail'
                    style={{
                      width: '100%',
                      height: '360px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                    }}
                  />
                </Box>
                <Typography variant='h5' color='text.primary' mt='20px'>
                  Sed ut perspiciatis unde omnis iste natus
                </Typography>
                <Typography variant='body1' color='text.secondary' pt='20px'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetu.
                </Typography>
              </Box> */}
            </Box>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SinglePostCard;
