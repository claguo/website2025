import React from "react";
import H2 from "../H2";

function InstagramPosts(props) {
  const {posts} = props
  return (
    <div>
      <H2>instagram posts</H2>
      <div className='flex flex-wrap gap-1 lg:justify-between'>
        <img src={posts[0]} alt='Instagram post 1' className='w-[32.3%] lg:w-[19%]' />
        <img src={posts[1]} alt='Instagram post 2' className='w-[32.3%] lg:w-[19%]' />
        <img src={posts[2]} alt='Instagram post 3' className='w-[32.3%] lg:w-[19%]' />
        <img src={posts[3]} alt='Instagram post 4' className='w-[32.3%] lg:w-[19%]' />
        <img src={posts[4]} alt='Instagram post 5' className='w-[32.3%] lg:w-[19%]' />
      </div>
    </div>
  )
}

export default InstagramPosts;