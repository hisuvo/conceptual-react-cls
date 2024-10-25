import React from 'react';

const Banner = () => {
    return (
        <div className='mt-8 bg-purple-100 text-center rounded-lg py-10 md:py-16'>
            <div className='max-w-[40rem] mx-auto space-y-4'>
                <h2 className='text-2xl md:text-4xl font-bold '>Lorem ipsum dolor consectetur adipisicing elit.</h2>
                <p className='text-base md:text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio mollitia sunt ratione dolorem soluta fuga quo! Delectus, exercitationem earum non quas alias error illum voluptatem maiores architecto maxime quibusdam ea praesentium.</p>
            </div>
            <button className="btn text-lg outline-double outline-purple-400 active:outline-offset-2 active:bg-purple-500 bg-purple-400 hover:bg-purple-300 text-white mt-8">Add Amount !</button>
        </div>
    );
};

export default Banner;