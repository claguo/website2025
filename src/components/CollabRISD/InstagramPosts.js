import React from "react";

function InstagramPosts(props) {
  const {posts} = props
  return (
    <div>
      <h3 className='text-sm lg:text-base font-bold mb-[0.25rem] font-sans'>instagram posts</h3>
      <div className='flex flex-wrap gap-1 lg:justify-between'>
        <img src={posts[0]} alt='Event title slide' className='w-[32.3%] lg:w-[19%]' />
        <img src={posts[1]} alt='The event in progress' className='w-[32.3%] lg:w-[19%]' />
        <img src={posts[2]} alt='The event in progress' className='w-[32.3%] lg:w-[19%]' />
        <img src={posts[3]} alt='The event in progress' className='w-[32.3%] lg:w-[19%]' />
        <img src={posts[4]} alt='Summary slide' className='w-[32.3%] lg:w-[19%]' />
      </div>
    </div>
  )
}

export default InstagramPosts;