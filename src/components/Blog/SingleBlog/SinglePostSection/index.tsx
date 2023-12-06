// Library Imports
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// Local Imports
import SinglePostCard from '@/components/shared/SinglePostCard';
import RelatedPostSection from '../RelatedPosts';
import ApiController from '@/network/api';

const SinglePostSection = () => {
  // Router
  const router = useRouter();
  const uid = router.asPath.split('/')[2];
  // STATES & METHODS
  const [loading, setLoading] = useState<boolean>(true);
  const [relatedPostLoading, setRelatedPostLoading] = useState<boolean>(true);
  const [relatedPostData, setRelatedPostData] = useState<any[]>([]);
  const [singleBlogData, setSingleBlogData] = useState<any>({});
  const [password, setPassword] = useState('');
  const [error, setError] = useState<any>({});

  // Create Payload
  const payload = {
    uid: uid,
    password: password,
  };

  // Change Local URLs with Original One
  function fnToSetURLs(html: any, orignalURls: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const images = doc.querySelectorAll('img');
    const videos = doc.querySelectorAll('video');
    const updatedURLs = orignalURls?.filter(
      (item: any) => item.featured !== 'featured'
    );
    images?.forEach((img, index) => {
      let url;
      url = updatedURLs[index]?.url?.replaceAll('download', 'view');
      img.src = url;
    });
    videos.forEach((video, index) => {
      if (updatedURLs[index]?.is_video) {
        let url;
        url = updatedURLs[index]?.url?.replaceAll('download', 'view');
        video.src = url;
        video.id = updatedURLs[index]?.id;
        video.autoplay = updatedURLs[index]?.autoplay;
        video.loop = updatedURLs[index]?.loop;
        video.muted = updatedURLs[index]?.muted;
        video.playsInline = updatedURLs[index]?.play_inline;
        video.controls = updatedURLs[index]?.playback_controls;
      }
    });
    return doc.body.innerHTML;
  }

  //  FETCH SINGLE BLOG PAGE
  const fetchSingleBlogData = async () => {
    setLoading(true);
    ApiController.fechSingleBlogPageCall(payload, async (response) => {
      if (response.success) {
        const data = response?.data;
        let imageURL = data?.blog_images
          ?.find((img: any) => img?.featured === 'featured')
          ?.url?.replaceAll('download', 'view');
        const featuredImage = {
          default: {
            src: `${imageURL}`,
            height: 800,
            width: 1200,
            blurDataURL: `${imageURL}`,
            blurWidth: 8,
            blurHeight: 4,
          },
        };
        const description = await fnToSetURLs(
          data?.description,
          data?.blog_images
        );
        setSingleBlogData({
          title: data?.title,
          featuredImage: featuredImage,
          tags: data?.tags,
          date: data?.created_at,
          description: description,
        });
        setError({});
        setLoading(false);
      } else {
        setError(response?.data);
        setLoading(false);
      }
    });
  };
  // FETCH RELATEST POSTS
  const fetchBlogsListCall = async (payload: any) => {
    setRelatedPostLoading(true);
    ApiController.fechBlogsListPageCall(payload, (response) => {
      if (response.success) {
        if (response?.data?.length > 0) {
          setRelatedPostData(response?.data);
        } else {
          setRelatedPostData([]);
        }
        setRelatedPostLoading(false);
      } else {
        setRelatedPostData([]);
        setRelatedPostLoading(false);
      }
    });
  };

  // USEFFECT
  useEffect(() => {
    if (uid !== '[slug]') {
      fetchSingleBlogData();
    }
  }, [uid !== '[slug]', uid]);

  useEffect(() => {
    if (singleBlogData?.tags?.length > 0) {
      const tags = singleBlogData?.tags?.join(',');
      fetchBlogsListCall(tags);
    }
  }, [singleBlogData?.tags?.length > 0, uid]);

  return (
    <React.Fragment>
      <SinglePostCard
        error={error}
        password={password}
        setPassword={setPassword}
        onClickToCheckPassword={fetchSingleBlogData}
        loading={loading}
        data={singleBlogData}
      />
      {error?.message?.length > 0 ? null : (
        <RelatedPostSection
          name='Related Posts'
          loading={relatedPostLoading}
          data={relatedPostData}
        />
      )}
    </React.Fragment>
  );
};

export default SinglePostSection;
