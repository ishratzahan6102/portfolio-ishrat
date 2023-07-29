import React, { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => { 
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch(`https://portfolio-web-ishart-server.vercel.app/data`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProjects(data)})
    }, [])




    return (
        <div className='text-center pb-20 pt-10 max-w-[1100px] mx-auto'>
            
            <h1 className='text-4xl text-white font-bold uppercase'>Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4 p-2 mt-10 text-start'>
                {
                    projects.map(project => <PortfolioCard
                    project={project}
                    key={project._id}
                    ></PortfolioCard>)
                }
            </div>
        </div>
    );
};

export default Portfolio;