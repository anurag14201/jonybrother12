import React from 'react';
import aboutBanner from '../../imgfile/banner-1 (1).jpg'
import aboutBanner2 from '../../imgfile/banner-2 (1).jpg'
import profile from '../../imgfile/IMG_5207.jpeg'
import aboutBanner3 from '../../imgfile/banner-3 (1).jpg'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div>
            <h1 className='bg-gray-500 text-4xl font-bold text-center p-20'>About US</h1>
            <div>
                <h1 className='text-4xl font-bold text-center p-20'>We’re Devoted Marketing
                    Consultants Helping Your Business Grow</h1>
            </div>
            <div className='grid place-items-center'>
                <img src={aboutBanner} alt=''></img>
            </div>
            <div className='p-24'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">We Provide Continuous & Kind Service for Customers </h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                Customer Service
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                    sed do eius mod tempor incididunt ut labore
                                    et dolore magna aliqua. Venenatis tell
                                    us in metus vulputate eu scelerisque felis. Vel pretium vulp.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-100">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Online Consultation
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                    sed do eius mod tempor incididunt ut labore
                                    et dolore magna aliqua. Venenatis tell
                                    us in metus vulputate eu scelerisque felis. Vel pretium vulp.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Sales Management
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                    sed do eius mod tempor incididunt ut labore
                                    et dolore magna aliqua. Venenatis tell
                                    us in metus vulputate eu scelerisque felis. Vel pretium vulp.</p>
                            </div>
                        </div>
                    </div>
                    <figure><img src={aboutBanner2} alt="Album" /></figure>
                </div>
            </div>
            <div className='grid place-item-center p-8'>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={profile} alt='profile' />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>
            <div className='p-24'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={aboutBanner3} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in.
                            metus vulputate eu scelerisque felis. Vel pretium lectus qua.
                            Arpis massa. Nunc id cursus metus ididunt ut labore metus vulputate episcing</p>
                        <div className="card-actions justify-end">
                            <Link className='btn btn-primary' to='/Shop'>Visit Our Store</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;