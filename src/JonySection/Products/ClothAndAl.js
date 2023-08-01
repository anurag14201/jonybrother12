import React from 'react';
import bannerForcol from '../../imgfile/banner-4.jpg'
import mensclothing from '../../imgfile/mens-clothing-1-300x338.jpg'
import coat from '../../imgfile/Coat-Pool-Comfort-Jacket-1-1.jpg'
import grayLeather from '../../imgfile/gray-leather-shoes-1-300x338.jpg'
import winterSkating from '../../imgfile/black-winter-skating-2-300x338.jpg'
import womanFashion from '../../imgfile/womens-fashion-handbag-4-300x338.jpg'
import watchmen from '../../imgfile/mens-black-wrist-watch-1-300x338.jpg'


const ClothAndAl = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold m-6 p-6'>Clothing & Apparel</h1>
            <div className='grid grid-cols-2 '>
                <div className='ml-36'>
                    <img className='img-full' src={bannerForcol} alt=''></img>
                </div>
                <div className=''>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-[390px]:grid-cols-2'>
                        <div className="card bg-base-100 shadow-xl m-2">

                            <img src={mensclothing} alt="Shoes" className="rounded-xl" />

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Computer</h2>
                                <div className="rating rating-xs rating-center">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1>$400.99</h1>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl m-2">

                            <img src={coat} alt="Shoes" className="rounded-xl" />

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Computer</h2>

                                <div className="rating rating-xs rating-center">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1>$400.99</h1>
                            </div>
                        </div> <div className="card bg-base-100 shadow-xl m-2">

                            <img src={grayLeather} alt="Shoes" className="rounded-xl" />

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Computer</h2>

                                <div className="rating rating-xs rating-center">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1>$400.99</h1>
                            </div>
                        </div> <div className="card bg-base-100 shadow-xl m-2">

                            <img src={winterSkating} alt="Shoes" className="rounded-xl" />

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Computer</h2>

                                <div className="rating rating-xs rating-center">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1>$400.99</h1>
                            </div>
                        </div> <div className="card bg-base-100 shadow-xl m-2">

                            <img src={womanFashion} alt="Shoes" className="rounded-xl" />

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Computer</h2>

                                <div className="rating rating-xs rating-center">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1>$400.99</h1>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl m-2">

                            <img src={watchmen} alt="Shoes" className="rounded-xl" />

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Computer</h2>

                                <div className="rating rating-xs rating-center">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1>$400.99</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClothAndAl;