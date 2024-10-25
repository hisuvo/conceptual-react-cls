import React from 'react';

const Cart = ({ selectProduct, handleDelateProduct }) => {

    return (
        <div className='space-y-4'>
            {
                selectProduct.map((product, index) =>
                    <div key={index} className="flex justify-between items-center border-2 p-2 rounded-lg">
                        <div className="flex items-center gap-4">
                            <figure>
                                <img className='w-16' src={product.image} alt="" />
                            </figure>
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                        </div>
                        <button
                            onClick={() => handleDelateProduct(product.id)}
                            className="btn text-lg bg-purple-500 outline-double outline-purple-400 active:outline-offset-2 active:bg-purple-500 hover:bg-purple-400"
                        >delate</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;