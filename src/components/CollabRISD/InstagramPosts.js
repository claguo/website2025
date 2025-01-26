import React from "react";

function InstagramPosts(props) {
  const {posts} = props
  return (
    <div className="w-[100%]">
      <h3 className='text-sm lg:text-base font-bold mb-[1rem] font-sans'>Instagram Posts</h3>
      <div className='flex gap-[0.5rem] lg:justify-between w-[100%]'>
        <img src={posts[0]} alt='Event title slide' className='flex-1 min-w-0' />
        <img src={posts[1]} alt='The event in progress' className='flex-1 min-w-0' />
        <img src={posts[2]} alt='The event in progress' className='flex-1 min-w-0' />
        <img src={posts[3]} alt='The event in progress' className='flex-1 min-w-0' />
        <img src={posts[4]} alt='Summary slide' className='flex-1 min-w-0' />
      </div>
    </div>
  )
}

export default InstagramPosts;