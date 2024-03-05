import FeedCard from '@/components/feed/feed-card'
import TweetCard from '@/components/post-tweet/tweet-card'
import React from 'react'

const HomePage = () => {
  return (
    <div className='mt-12 sm:mt-0'>
        <TweetCard />
        <FeedCard />
    </div>
  )
}

export default HomePage