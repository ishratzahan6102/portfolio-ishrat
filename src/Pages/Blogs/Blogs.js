import React from 'react';
import networking from '../../assets/Blog (1) Networking.jpg'
import blog1 from '../../assets/Blog (2).jpg'
import blog2 from '../../assets/Communication in group project cover.png'
import blog3 from '../../assets/Unpaid Internship Blog Img.png'
import blog4 from '../../assets/Softrware Challenges.png'
import BlogCard from './BlogCard';

const blogData = [
    {
        id: 1,
        title: "Though Things About Being A Developer",
        details: "Have you ever looked at fonts. Like really looked at them? Have you ever tried to determine how happy or sad a font is...",
        link: "https://www.linkedin.com/pulse/thoughest-thing-being-web-developer-israt-zahan/",
        img: blog1,
    },
    {
        id: 2,
        title: "Software Product Development Challenges",
        details: "This article is for: Startup founders seeking to avoid software product development challenges by learning....",
        link: "https://www.linkedin.com/pulse/software-product-development-challenges-how-stay-focused-israt-zahan/",
        img: blog2,
    },
    {
        id: 3,
        title: "Communication in Group Projects",
        details: "The organisation’s success depends upon the members...",
        link: "https://www.linkedin.com/pulse/value-communication-group-projects-israt-zahan/",
        img: blog3,
    },
    {
        id: 3,
        title: "Does It Make Sense to Do Unpaid Internships?",
        details: "This article is for: Startup founders seeking to avoid software product development challenges and best practices...",
        link: "https://www.linkedin.com/pulse/software-product-development-challenges-how-stay-focused-israt-zahan/",
        img: blog4,
    },
]

const Blogs = () => {
    return (
        <div className='max-w-[1100px] mx-auto p-4 text-center'>
           
            <p className='font-bold text-4xl '>CONSTRUCTIVE THINKING</p>
            <p className='font-semibold my-2'>INSIGHT</p>
            <div className='mb-4'>
                <div className="card text-start  text-black bg-stone-100 rounded-none lg:card-side shadow-xl">
                    <figure className=''><img className='p-6' src={networking} alt="Album" /></figure>
                    <div className="card-body">
                        <p className='font-mono font-bold text-gray-500'>A R T I C L E</p>
                        <h2 className=" text-4xl  font-bold">Networking Can Help Your Career</h2>
                        <p className='text-sm text-gray-600'>Growing up as an introvert, I was petrified the first time I heard of the word "Networking" while stepping into the corporate world.
                            As far I've seen any skill that can help.</p>
                            <button className="btn btn-primary w-full normal-case"><a href='https://www.linkedin.com/pulse/networking-can-help-your-career-israt-zahan/'>Read more</a></button>
                      
                    </div>
                </div>

            </div>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                blogData.map(data => <BlogCard
                data={data}
                key={data.id}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default Blogs;