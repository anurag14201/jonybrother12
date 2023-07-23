import React from 'react';

const Subs = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white p-10 flex justify-evenly '>
                <div>
                    <h1 className='text-lg'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <p className='text-md'>Get all the latest information on Events, Sales and Offers.</p>
                </div>
                <div>
                    <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-xs items-end	" />
                </div>
            </div>
        </div>
    );
};

export default Subs;