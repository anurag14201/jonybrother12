import React from 'react';
import homShoe from '../../imgfile/pexels-mnz-1598505.jpg';
import homMou from '../../imgfile/pexels-spencer-gurley-films-1518035.jpg';
import homHed from '../../imgfile/pexels-ivan-babydov-7788151.jpg';
import homBanner1 from '../../imgfile/banner-1.jpg';
import homBanner2 from '../../imgfile/banner-2.jpg';

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
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={homHed} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className="card w-full bg-base-100 shadow-xl m-2 p-3">
                    <div className="card-body">
                        <div>
                            <h2>Free Shipping & Returns</h2>
                        </div>
                        <div>
                            <h2>Free Shipping & Returns</h2>
                        </div>
                        <div>
                            <h2>Free Shipping & Returns</h2>
                        </div>
                        <div>
                            <h2>Free Shipping & Returns</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2'>
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
        </div>
    );
};

export default Home;