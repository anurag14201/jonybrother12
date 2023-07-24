import React from 'react';
import homShoe from '../../imgfile/pexels-mnz-1598505.jpg';
import homMou from '../../imgfile/pexels-spencer-gurley-films-1518035.jpg';
import homHed from '../../imgfile/pexels-ivan-babydov-7788151.jpg';
import coat from '../../imgfile/Coat-Pool-Comfort-Jacket-1-1.jpg';
import homBanner1 from '../../imgfile/banner-1.jpg';
import shirt1 from '../../imgfile/shirt.jpg'
import homBanner2 from '../../imgfile/banner-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HotItems from '../Products/HotItems';
import PopularItems from '../Products/PopularItems';
import clint from '../../imgfile/Screenshot 2023-07-24 100348.png';
const Home = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full m-3">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={homShoe} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={homMou} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={homHed} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className='lg:grid grid-cols-4 md:grid grid-cols-1 m-4 pt-6 pb-6'>
                <div className="card w-64 bg-base-100 shadow-xl m-2 p-3">
                    <div className="card-body">
                        <div>
                            <FontAwesomeIcon icon={['apple']} />
                            <h2 className='text-gray-300'>Free Shipping</h2>
                            <h4 className='text-sm'>For all orders over 99$</h4>

                        </div>
                    </div>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl m-2 p-3">
                    <div className="card-body">
                        <div>
                            <h2 className='text-gray-300'>Secure Payment</h2>
                            <h4 className='text-sm'>We ensure Secure payment</h4>

                        </div>
                    </div>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl m-2 p-3">
                    <div className="card-body">
                        <div>
                            <h2 className='text-gray-300'>Money Back Guarantee</h2>
                            <h4 className='text-sm'>Any back within 30 days</h4>
                        </div>
                    </div>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl m-2 p-3">
                    <div className="card-body">
                        <div>
                            <h2 className='text-gray-300'>Customer Support</h2>
                            <h4 className='text-sm'>Call us or Email us 24/7</h4>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='lg:grid-cols-2 md:grid-cols-1 sm:grid grid-cols-1'>
                    <div className="card m-2 card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={homBanner1} alt="Shoes" /></figure>
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card m-2 card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={homBanner2} alt="Shoes" /></figure>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:grid-cols-2 md:grid-clos-1 sm:grid grid-cols-1  pt-4'>
                <div>
                    <h1 className='text-xl font-bold m-4 '>Hot Deals Today</h1>
                    <div className="card lg:card-side bg-base-100 shadow-xl m-4 p-6">
                        <figure><img src={coat} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Coat Pool Comfort Jacket</h2>
                            <h1>$1699.00-$1800</h1>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='card'>
                    <h1 className='text-xl font-bold m-4'>Top 20 best Products</h1>
                    <div>
                        <div className="card bg-base-100 shadow-xl m-6 p-10">
                            <figure className="px-6 pt-6">
                                <img src={shirt1} alt="Shoes" className="rounded-xl image-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Computer</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HotItems></HotItems>
            <PopularItems></PopularItems>
            <div>
                <h1 className=''>Our Clint</h1>
                <div>
                    <img src={clint} alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default Home;