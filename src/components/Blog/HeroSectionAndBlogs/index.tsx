// Library Imports
import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid } from '@mui/material';
// Imports
import BlogsListSection from '../Blogs';
import HeroSectionBlogs from '../HeroSection';
import GetStartedBlogs from '../GetStartedBlogs';
import ApiController from '@/network/api';

export default function HeroSectionAndBlogsSection() {
  // STATES
  const [blogsLoading, setBlogsLoading] = useState<boolean>(false);
  const [tagsLoading, setTagsLoading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [tagfilter, setTagfilter] = useState<string[]>([]);

  // TAGs ADD TAG FILTER
  const handleAddTagFilter = (tag: string) => {
    setTagfilter([...tagfilter, tag]);
  };

  // TAGs REMOVE TAG FILTER
  const handleRemoveTagFilter = (tag: string) => {
    setTagfilter(tagfilter.filter((t) => t !== tag));
  };

  // METHODS FETCH BLOGS & FETCH TAGS LIST
  const fetchBlogsListCall = async (payload: any) => {
    setBlogsLoading(true);
    ApiController.fechBlogsListPageCall(payload, (response) => {
      if (response.success) {
        if (response?.data?.length > 0) {
          setBlogs(response?.data);
        } else {
          setBlogs([]);
        }
        setBlogsLoading(false);
      } else {
        setBlogs([]);
        setBlogsLoading(false);
      }
    });
  };
  const fetchTagsListCall = async () => {
    setTagsLoading(true);
    ApiController.fechTagsListCall({}, (response) => {
      if (response.success) {
        if (response?.data?.tags?.length > 0) {
          setTags(response?.data?.tags);
        } else {
          setTags([]);
        }
        setTagsLoading(false);
      } else {
        setTags([]);
        setTagsLoading(false);
      }
    });
  };

  // useEffect For Fetch Tags
  useEffect(() => {
    const tags = tagfilter?.join(',');
    fetchBlogsListCall(tags);
    fetchTagsListCall();
  }, [tagfilter]);

  if (blogsLoading || tagsLoading) {
    return (
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
    );
  }
  return (
    <React.Fragment>
      <HeroSectionBlogs />
      <BlogsListSection
        blogs={blogs}
        tags={tags}
        tagfilter={tagfilter}
        handleAddTagFilter={handleAddTagFilter}
        handleRemoveTagFilter={handleRemoveTagFilter}
      />
    </React.Fragment>
  );
}
