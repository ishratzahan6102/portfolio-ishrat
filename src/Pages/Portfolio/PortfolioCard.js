import React from 'react';
import { Link } from 'react-router-dom';
import "./Details.css"

const PortfolioCard = ({ project }) => {
    const { name, img1, img2, img3, img4, details, liveSite, clientSite, serverSite, _id } = project
    return (

        <div class="p-2 bg-white text-black shadow-lg rounded-lg transform hover:scale-105 transition duration-500">  
        <div class="max-w-sm rounded  ">
          <img class="w-full h-44" src={img1} alt="Mountain"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 uppercase">{name}</div>
            <Link to={`/data/${_id}`}>
                                <button className='btn btn-primary btn-sm uppercase rounded '>See more</button>
            </Link>
          </div>
         
        </div>
      </div>
    

    );
};

export default PortfolioCard;