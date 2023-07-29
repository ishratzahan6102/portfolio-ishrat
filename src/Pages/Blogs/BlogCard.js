import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({data}) => {
    const {id, title, img, details, link} = data
    return (
       
        <div class="max-w-sm text-start text-black text-justify bg-white px-6 pt-6 pb-2 shadow-lg transform hover:scale-105 transition duration-500 mx-auto">
       
        <div class="">
          <img class="w-full h-52 rounded-sm" src={img} alt="Colors" />
        
        </div>
        <h1 class="mt-4 text-xl  font-bold cursor-pointer">{title}</h1>
        <div class="my-4 text-justify text-sm text-gray-600">
          <p>{details}</p>
       
        
          <a href={link}>
          <button class="mt-4 normal-case w-full btn btn-primary py-2  uppercase shadow-lg">Read more</button>
          </a>
        </div>
      </div>
     
    );
};

export default BlogCard;