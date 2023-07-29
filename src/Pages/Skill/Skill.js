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

            <h1 className='text-4xl text-white uppercase font-bold'>Skills</h1>
            <p className=''>Technical Level</p>
            <div className=' grid grid-cols-1 text-white md:grid-cols-2 gap-4 p-6 mt-6 lg:mt-0 lg:p-20 text-start'>
                <div >
                    <h1 className='text-center font-bold '>Front-End Stacks</h1>
                    <div className='grid grid-cols-1 mt-6 shadow-lg '>
                        <div className="stats stat-box  rounded-sm   shadow-sm">

                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo1} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Html</div>
                                    <div className="stat-desc">Advanced</div>
                                </div>
                             </div>
                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo2} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Bootstrap</div>
                                    <div className="stat-desc">Advanced</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats stat-box rounded-sm  ">

                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo3} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> CSS</div>
                                    <div className="stat-desc">Advanced</div>
                                </div>
                             </div>
                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo4} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Git</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats stat-box rounded-sm  ">

                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo5} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Javascript</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                             </div>
                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo6} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> React</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats stat-box rounded-sm  ">

                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo13} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Tailwind Css</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                             </div>
                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo14} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> DaisyUI</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div >
                    <h1 className='text-center  font-bold '>Back-End Stacks</h1>
                    <div className='grid grid-cols-1 mt-6  shadow-md'>
                        <div className="stats stat-box rounded-sm  ">

                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo7} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Node Js</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                             </div>
                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo8} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Express Js</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats stat-box rounded-sm   ">

                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo9} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Mongo DB</div>
                                    <div className="stat-desc">Intermediate</div>
                                </div>
                             </div>
                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo10} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> Vercel</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                            </div>
                        </div>

                        <div className="stats stat-box rounded-sm  ">

                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo11} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold"> JW Token</div>
                                    <div className="stat-desc">Basic</div>
                                </div>
                             </div>
                            <div className="p-8  flex w-32">
                                <div className="avatar">
                                    <div className="w-12 mr-2 bg-white ">
                                        <img src={logo12} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="stat-title text-white font-bold">Firebase</div>
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