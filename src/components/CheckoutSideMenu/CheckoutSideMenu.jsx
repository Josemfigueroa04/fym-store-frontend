
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/Context';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <XMarkIcon className='h-6 w-6 text-black' onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
            </div>

        </aside>
    )

}

export default CheckoutSideMenu;