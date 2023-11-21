import './App.css'
import Home from './pages/Home/Home.jsx';
import MyAccount from './pages/MyAccount/MyAccount.jsx';
import MyOrder from './pages/MyOrder/MyOrder.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import SignIn from './pages/SignIn/SignIn';


function App() {
  
  return (
  
      <div className='bg-red-300'>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SignIn />

      </div>
  
  )
}

export default App;
