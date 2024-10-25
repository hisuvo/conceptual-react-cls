import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Allproducts from './components/Allproducts/Allproducts';
import Cartcontainer from './components/Cardcontainer/Cartcontainer';
import Banner from './components/Header/Banner';
import Navbar from './components/Header/Navbar';

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "isActive"
  })

  const [selectProduct, setSelectProduct] = useState([])
  const [productPrice, setProductPrice] = useState(0)



  const handleIsActiveStatus = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
      })
    } else {
      setIsActive({
        cart: false,
      })
    }
  }

  const handleSelectProduct = (product) => {

    const isExist = selectProduct.find((findProduct) => findProduct.id === product.id)
    if (isExist) {
      toast.warn("already Exist it")
    } else {
      toast.success("Add Success of your favorite product")
      const newSelectProduct = [...selectProduct, product]
      // const newProductPrice = (productPrice.price + product.price)
      const newProductPrice = (productPrice + product.price)

      setSelectProduct(newSelectProduct)
      setProductPrice(newProductPrice)
    }
  }

  const handleDelateProduct = (id) => {
    const updateProduct = selectProduct.filter((product) => product.id !== id)

    setSelectProduct(updateProduct)
  }

  return (
    <div className='relative container mx-auto'>

      {/* header part */}
      <header className='px-2 mb-16'>
        <Navbar selectProductlength={selectProduct.length} productPrice={productPrice} />
        <Banner />
      </header>

      {/* body part */}
      <main className='px-2 flex justify-between items-start gap-4'>
        <Allproducts handleSelectProduct={handleSelectProduct} />
        <Cartcontainer
          handleDelateProduct={handleDelateProduct}
          selectProduct={selectProduct}
          isActive={isActive}
          handleIsActiveStatus={handleIsActiveStatus}
        />
      </main>
    </div>
  );
};

export default App;