import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import { PlusIcon } from "@heroicons/react/24/solid";

function Card({ data }) {
    const context = useContext(ShoppingCartContext);

    const showProduct = (data) => {
        context.openProductDetail();
        context.setProductToShow(data);
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count +1);
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    }




    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounder-lg" onClick={() => showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.title} />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={(event)=> addProductsToCart(event, data)}>
                    <PlusIcon className='h-4 w-4 text-black'></PlusIcon>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'> {data.title}</span>
                <span className='text-lg font-medium'>$ {data.price}</span>
            </p>
        </div>
    )
}

export default Card;