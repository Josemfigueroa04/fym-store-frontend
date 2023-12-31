import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home/Home.jsx';
import MyAccount from '../pages/MyAccount/MyAccount.jsx';
import MyOrder from '../pages/MyOrder/MyOrder.jsx';
import MyOrders from '../pages/MyOrders/MyOrders.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';
import SignIn from '../pages/SignIn/SignIn';
import Landing from '../pages/Landing/Landing.jsx';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/Context.jsx';
import Admin from '../pages/Admin/Admin.jsx';
import Register from '../pages/Register/Register.jsx';
import Edit from '../pages/Edit/Edit.jsx';
import Compra from '../pages/Compra/Compra.jsx';


function ProtectedRoute({ element }) {
    const context = useContext(ShoppingCartContext);

    if (!context.isAuthenticated) {
        return <Navigate to="/landing" />;

    }

    return element;
}


function AppRoutes() {
    const context = useContext(ShoppingCartContext);

    return (
        <div>
            <Routes>
                <Route path="/landing" element={<Landing />} />


                <Route path="/" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/escritorios" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/electrodomesticos" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/terrazas" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/juguetes" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/muebles" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/compra" element={<ProtectedRoute element={<Compra />} />} />


                <Route path="/my-order" element={<ProtectedRoute element={<MyOrder />} />} />
                <Route path="/my-orders" element={<ProtectedRoute element={<MyOrders />} />} />
                <Route path="/my-orders/last" element={<ProtectedRoute element={<MyOrder />} />} />
                <Route path="/my-orders/:id" element={<ProtectedRoute element={<MyOrder />} />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/register" element={< Register />} />
                <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
                <Route path='/edit/:id' element={<ProtectedRoute element={<Edit />} />} />

            </Routes>
        </div>
    )
}

export default AppRoutes;