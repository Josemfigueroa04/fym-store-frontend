import {Route,Routes, Navigate} from 'react-router-dom';

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


                <Route path="/" element={<ProtectedRoute element={<Home />} />}/>
                <Route path="/clothes" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/electronics" element={<ProtectedRoute element={<Home />} />}  />
                <Route path="/furniture" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/toys" element={<ProtectedRoute element={<Home />} />} />
                <Route path="/others" element={<ProtectedRoute element={<Home />} />} />
                
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/my-order" element={<MyOrder />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/my-orders/last" element={<MyOrder />} />
                <Route path="/my-orders/:id" element={<MyOrder />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignIn />} />
                <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
            
            </Routes>
        </div>
    )
}

export default AppRoutes;