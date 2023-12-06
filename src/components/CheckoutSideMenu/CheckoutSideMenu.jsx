
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/Context';
import OrderCard from '../OrderCard/OrderCard';
import { totalPrice } from '../../utils/index';
import { Link } from 'react-router-dom';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toLocaleString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.closeCheckoutSideMenu();
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <XMarkIcon className='h-6 w-6 text-black' onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {context.cartProducts?.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        imageUrl={product.images[0]}
                        title={product.title}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                )
                )}

            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='my-orders/last'>
                <button className='bg-black py-3 text-white w-full rounded-lg p' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>


        </aside>
    )

}

export default CheckoutSideMenu;