import React from 'react';

const Product = ({ product, handleSelectProduct }) => {
    const { image, name, description, price } = product

    return (
        <div className="card bg-base-100 border-2 p-4">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="mt-4 space-y-3">
                <h2 className="card-title">{name}</h2>
                <p className="text-purple-900">{description}</p>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button
                        onClick={() => handleSelectProduct(product)}
                        className="btn text-lg text-white bg-purple-500 outline-double outline-purple-400 active:outline-offset-2 active:bg-purple-500 hover:bg-purple-400 "
                    >Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;