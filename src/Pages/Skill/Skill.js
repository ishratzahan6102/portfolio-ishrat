import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Skill.css'
import logo1 from '../../assets/Html.png'
import logo2 from '../../assets/bootstrape.png'
import logo3 from '../../assets/Css.png'
import logo4 from '../../assets/git.png'
import logo5 from '../../assets/js.png'
import logo6 from '../../assets/react.png'
import logo7 from '../../assets/node.png'
import logo8 from '../../assets/ex.png'
import logo9 from '../../assets/mongodb.png'
import logo10 from '../../assets/vercel.png'
import logo11 from '../../assets/jwt.png'
import logo12 from '../../assets/firebase.png'
import logo13 from '../../assets/tailwind.png'
import logo14 from '../../assets/DAISYUI.png'

const Skill = () => {
    return (
        <div className='text-center pt-20 pb-10 max-w-[1100px] mx-auto'>

            <h1 className='text-4xl text-black font-bold'>Skills</h1>
            <p className='text-gray-500'>My Technical Level</p>
            <div className=' grid grid-cols-1  md:grid-cols-2 gap-4 p-6 mt-6 lg:mt-0 lg:p-20 text-start'>
                <div >
                    <h1 className='text-center text-gray-600 font-bold '>Front-End Developer</h1>
                    <div className='grid grid-cols-1 mt-6 shadow-md '>
                        <div className="stats shadow-sm">

                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo1} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Html</div>
                                    <div className="stat-desc">Advanced</div>
                                </div>
                            </div>
                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo2} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Bootstrap</div>
                                    <div className="stat-desc">Advanced</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats ">

                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo3} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> CSS</div>
                                    <div className="stat-desc">Advanced</div>
                                </div>
                            </div>
                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo4} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Git</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats">

                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo5} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Javascript</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo6} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> React</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats">

                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo13} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Tailwind Css</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo14} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> DaisyUI</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div >
                    <h1 className='text-center text-gray-600 font-bold '>Back-End Developer</h1>
                    <div className='grid grid-cols-1 mt-6  shadow-md'>
                        <div className="stats">

                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo7} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Node Js</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                            </div>
                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo8} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Express Js</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats ">

                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo9} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Mongo DB</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo10} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> Vercel</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                            </div>
                        </div>

                        <div className="stats">

                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo11} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary"> JW Token</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                            </div>
                            <div className="stat flex w-32">
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo12} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-primary">Firebase</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Skill;