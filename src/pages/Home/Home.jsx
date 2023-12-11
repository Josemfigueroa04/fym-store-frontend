import Card from "../../components/Card/Card.jsx";
import { useState, useEffect } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail.jsx";
import { ShoppingCartContext } from "../../context/Context";
import { useContext } from "react";


function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything :(</div>
      )
    }
  }



  return (

    <div>
     
      <ProductDetail />
      <div className=" flex flex-col items-center">
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>Nombre del Producto</h1>
        </div>
        <input
          type="text"
          placeholder='Search a product'
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)} />
      </div>


      <div className="grid grid-cols-4 gap-5 w-full max-w-screen-lg">
        {renderView()}
        

      </div>
    </div>

  )
}

export default Home;