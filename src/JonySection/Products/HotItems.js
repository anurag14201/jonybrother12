import React from 'react';
import shirtpic from '../../imgfile/shirt.jpg'
import Furniture from '../../imgfile/Furniture.jpg'
import shoes from '../../imgfile/Shoes.jpg'
import sports from '../../imgfile/Sports.jpg'
import games from '../../imgfile/Games.jpg'
import computer from '../../imgfile/Computer.jpg'

const HotItems = () => {
    return (
        <div className='lg:grid grid-cols-6 md:grid grid-clos-3 m-4 p-4'>
            <div className="card w-44 bg-base-100 shadow-xl image-full">
                <figure><img src={shirtpic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center	">Shirt</h2>

                </div>
            </div>
            <div className="card w-44 bg-base-100 shadow-xl image-full">
                <figure><img src={Furniture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center	">Furniture</h2>

                </div>
            </div>
            <div className="card w-44 bg-base-100 shadow-xl image-full">
                <figure><img src={shoes} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center	">Shoes</h2>

                </div>
            </div>
            <div className="card w-44 bg-base-100 shadow-xl image-full">
                <figure><img src={games} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center	">Games</h2>

                </div>
            </div>
            <div className="card w-44 bg-base-100 shadow-xl image-full">
                <figure><img src={sports} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center	">Sports</h2>

                </div>
            </div>
            <div className="card w-44 bg-base-100 shadow-xl image-full">
                <figure><img src={computer} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center	">Computer</h2>

                </div>
            </div>
        </div>
    );
};

export default HotItems;