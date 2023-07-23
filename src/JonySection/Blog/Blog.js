import React from 'react';
import blog9 from '../../imgfile/blog-9.jpg'
import blog6 from '../../imgfile/blog-6.jpg'
import blog8 from '../../imgfile/blog-8.jpg'
import blog7 from '../../imgfile/blog-7.jpg'
import blog5 from '../../imgfile/blog-5.jpg'

const Blog = () => {
    return (
        <div>
            <h1 className='bg-gray-500 text-4xl font-bold text-center p-20'>Blogs</h1>
            <div className='p-12'>
                <div className="card lg:card-side bg-base-100 shadow-xl p-4">
                    <figure><img src={blog9} alt="Album" className='hover' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Recognitory the needs is primary condition for design</h2>
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl p-4">
                    <figure><img src={blog8} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New found the men’s shirt for summer season</h2>
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl p-4">
                    <figure><img src={blog6} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Recognitory the needs is primary condition for design</h2>
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl p-4">
                    <figure><img src={blog7} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Recognitory the needs is primary condition for design</h2>
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl p-4">
                    <figure><img src={blog5} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fusce lacinia arcuet nulla</h2>
                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;