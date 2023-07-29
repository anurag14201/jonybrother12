import React from 'react';
import b1 from '../../imgfile/IMG_5207.jpeg';
import b2 from '../../imgfile/member-2.jpg';
import b3 from '../../imgfile/IMG_5207.jpeg';
import b4 from '../../imgfile/member-4.jpg';

const Ledear = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold m-4 p-4'>Meet Our Leaders</h1>
            <div className='lg:grid-cols-4 md:grid-cols-2 sm:grid grid-cols-2 m-4 p-4'>
                <div className="card bg-base-100 shadow-xl p-2">
                    <figure><img src={b1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">Anurag Datta</h2>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-2">
                    <figure><img src={b2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">Anurag Datta</h2>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-2">
                    <figure><img src={b3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">Anurag Datta</h2>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-2">
                    <figure><img src={b4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">Anurag Datta</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ledear;