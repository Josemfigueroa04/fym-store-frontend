import {Route,Routes} from 'react-router-dom';

import Home from '../pages/Home/Home.jsx';
import MyAccount from '../pages/MyAccount/MyAccount.jsx';
import MyOrder from '../pages/MyOrder/MyOrder.jsx';
import MyOrders from '../pages/MyOrders/MyOrders.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import SignIn from '../pages/SignIn/SignIn';



function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/my-order" element={<MyOrder />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/my-orders/last" element={<MyOrder />} />
                <Route path="/my-orders/:id" element={<MyOrder />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/sign-in" element={<SignIn />} />
            
            </Routes>
        </div>
    )
}

export default AppRoutes;