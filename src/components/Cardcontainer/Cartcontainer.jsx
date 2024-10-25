import About from "../About/About";
import Cart from "../Cart/Cart";

const Cartcontainer = ({ handleIsActiveStatus, isActive, selectProduct, handleDelateProduct }) => {

    return (
        <div className="w-1/3">
            <h1 className="text-2xl font-semibold mb-8">Cart container</h1>
            <div className="flex justify-end gap-4 mb-4">
                <button
                    onClick={() => handleIsActiveStatus("cart")}
                    className={
                        `${isActive.cart ?
                            "btn text-lg bg-purple-500 outline-double outline-purple-400 active:outline-offset-2 active:bg-purple-500 hover:bg-purple-400" :
                            "btn"}`
                    }>Cart</button>
                <button
                    onClick={() => handleIsActiveStatus("about")}
                    className={
                        `${isActive.cart ?
                            "btn" :
                            "btn text-lg bg-purple-500 outline-double outline-purple-400 active:outline-offset-2 active:bg-purple-500 hover:bg-purple-400 "}`
                    }>About</button>
            </div>
            {/* display add cart */}
            {
                isActive.cart ?
                    <Cart
                        selectProduct={selectProduct}
                        handleDelateProduct={handleDelateProduct}
                    /> :
                    <About />
            }


        </div>
    );
};

export default Cartcontainer;