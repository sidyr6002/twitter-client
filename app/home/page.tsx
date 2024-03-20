import { getCurrentUser } from '@/actions/getUser';
import Feed from '@/components/feed/feed';
import FeedCard from '@/components/feed/feed-card/feed-card'
import TweetCard from '@/components/post-tweet/tweet-card'
import { dehydrate, DehydratedState, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react'

const HomePage = async () => {
  return (
      <div className='mt-12 sm:mt-0'>
          <TweetCard />
          <Feed>
              <FeedCard userImage='' userName='Monkey'/>
          </Feed>
      </div>
  )
}



export default HomePage