import React from 'react';
import catagoryBanner from '../../imgfile/category-banner-1.jpg'
import Computer from '../../imgfile/Computer.jpg'
import shirtpic from '../../imgfile/shirt.jpg'
import Furniture from '../../imgfile/Furniture.jpg'
import shoes from '../../imgfile/Shoes.jpg'
import sports from '../../imgfile/Sports.jpg'
import games from '../../imgfile/Games.jpg'

const Shop = () => {
    return (
        <div>
            <div>
                <img src={catagoryBanner} alt='' className='pl-24 pt-6'></img>
            </div>
            <div className='lg:grid-cols-5 md:grid-cols-3 sm:grid grid-cols-3 m-4 p-4'>
                <div className="card bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={games} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10">
                        <img src={shirtpic} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10">
                        <img src={Furniture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10 image-full">
                        <img src={shirtpic} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10">
                        <img src={shoes} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10">
                        <img src={games} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10">
                        <img src={Computer} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10">
                        <img src={Furniture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10">
                        <img src={shoes} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
                    <figure className="px-10 pt-10">
                        <img src={sports} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

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
    );
};

export default Shop;