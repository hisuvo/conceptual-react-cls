import React from 'react';

const Navbar = ({ selectProductlength, productPrice }) => {


    return (
        <div className="fixed z-50 top-0 right-0 navbar flex flex-col md:flex-row bg-base-100 border-b-2 py-4">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl font-bold">SDATTA</a>
            </div>
            <div className="flex-none gap-2">
                <button className='btn md:px-8'>
                    Add Cart: {selectProductlength}
                </button>

                <button className='btn md:px-8'>
                    Add Amount: {productPrice} $
                </button>
            </div>
        </div>
    );
};

export default Navbar;