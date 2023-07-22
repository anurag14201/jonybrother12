import React from 'react';
import Computer from '../../imgfile/Computer.jpg'
import shirtpic from '../../imgfile/shirt.jpg'
import Furniture from '../../imgfile/Furniture.jpg'
import shoes from '../../imgfile/Shoes.jpg'
import sports from '../../imgfile/Sports.jpg'
import games from '../../imgfile/Games.jpg'
import banner5 from '../../imgfile/banner-5.jpg'
import banner6 from '../../imgfile/banner-6.jpg'


const PopularItems = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold m-6 p-6'>Popular Products</h1>
            </div>
            <div className='lg:grid-cols-5 md:grid-cols-3 sm:grid grid-cols-3 m-4 p-4'>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={games} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={shirtpic} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={Furniture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10 image-full">
                        <img src={shirtpic} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={shoes} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={games} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={shirtpic} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={Furniture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={shoes} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl m-2">
                    <figure className="px-10 pt-10">
                        <img src={sports} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Computer</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>




            </div>
            <div>
                <div className='lg:grid-cols-2 md:grid-cols-1 sm:grid grid-cols-1'>
                    <div className="card m-2 card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={banner5} alt="Shoes" /></figure>
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card m-2 card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={banner6} alt="Shoes" /></figure>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PopularItems;