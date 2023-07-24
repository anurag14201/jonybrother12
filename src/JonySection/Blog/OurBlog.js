import React from 'react';
import b1 from '../../imgfile/blog-1-590x380.jpg';
import b2 from '../../imgfile/blog-2-590x380.jpg';
import b3 from '../../imgfile/blog-3-590x380.jpg';
import b4 from '../../imgfile/blog-4-590x380.jpg';

const OurBlog = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold m-4 p-4'>From Our Blog</h1>
            <div className='lg:grid-cols-4 md:grid-cols-2 sm:grid grid-cols-2 m-4 p-4'>
                <div className="card bg-base-100 shadow-xl p-2">
                    <figure><img src={b1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">Aliquam tincidunt mauris eurisus</h2>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-2">
                    <figure><img src={b2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">Cras ornare tristique elit</h2>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-2">
                    <figure><img src={b3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">Vivamus vestibulum ntulla nec ante</h2>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-2">
                    <figure><img src={b4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="">Fusce lacinia arcuet nulla</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;