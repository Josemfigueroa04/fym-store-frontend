import OrdersCard from '../../components/OrdersCard/OrdersCard';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/Context';
import { Link } from 'react-router-dom';

function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <div>
            <div className='flex items-center justify-center relative w-80'>
                <h1>My Orders</h1>
            </div>
            
            {context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                    />
                </Link>
            ))
            }
        </div>
    )
}

export default MyOrders;