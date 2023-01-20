import React from 'react';
import { Link } from 'react-router-dom';
import "./Details.css"

const PortfolioCard = ({ project }) => {
    const { name, img1, img2, img3, img4, details, liveSite, clientSite, serverSite, _id } = project
    return (
     
            <div className="text-gray-600 ">
                <div className="card portfolio-card w-80 lg:w-72 mx-auto bg-base-100 rounded-2xl shadow-xl">
                    <figure className="p-4">
                        <img src={img1} alt="Shoes" className="h-44 w-96 rounded-2xl" />
                    </figure>
                    <div className="card-body items-start text-start">
                        <h2 className="">{name}</h2>
                        <Link to={`/data/${_id}`}>
                                <button className='btn btn-primary btn-sm normal-case rounded '>See more</button>
                            </Link>
                      
                    </div>
                </div>
            </div>
      
    );
};

export default PortfolioCard;