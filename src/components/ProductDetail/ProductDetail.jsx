import {XMarkIcon} from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/Context';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail  flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <XMarkIcon className='h-6 w-6 text-black' onClick={() => context.closeProductDetail()}></XMarkIcon>
            </div>
            <figure className='px-5 rounded-lg'>
                <img src={context.productToShow.images} alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>


        </aside>
    )

}

export default ProductDetail;