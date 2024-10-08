import React from "react";
import { Link } from "react-router-dom";

export default function PostCard2({ post }) {
  return (
    <>
      <div className='font-[poppins] text-gray-600 group relative h-[340px] overflow-hidden border border-gray-200 rounded-lg shadow-md'>
        <div className='rounded overflow-hidden shadow-lg'>
          <Link to={`/post/${post.slug}`}>
            <img
              src={post.image}
              alt='post cover'
              className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
            />
          </Link>
          <div className='p-3 flex flex-col gap-2'>
            <p className='text-lg font-semibold line-clamp-1'>{post.title}</p>
            <span className='italic text-sm'>{post.category}</span>
            <Link
              to={`/post/${post.slug}`}
              className='z-10 group-hover:bottom-0 absolute bottom-[-200px] 
              left-0 right-0  
              bg-green-border hover:text-white transition-all duration-300
              text-center py-2 rounded-md  m-2 '>
              Read article
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
