import { useEffect, useState } from "react";
import Product from "../Singleproduct/Product";

const Allproducts = ({ handleSelectProduct }) => {

    // products load here;
    const [products, setProducts] = useState([])
    // product data fetch
    useEffect(() => {
        fetch("./product.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="w-2/3">
            <h1 className="text-2xl font-semibold mb-8">All products </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                {products.map((product, index) => <Product
                    handleSelectProduct={handleSelectProduct}
                    key={index} product={product} />)}
            </div>

        </div>
    );
};

export default Allproducts;