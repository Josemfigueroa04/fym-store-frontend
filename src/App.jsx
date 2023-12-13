import './App.css'
import AppRoutes from '../src/Routes/AppRoutes.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Layout from './components/Layout/Layout.jsx';
import {ShoppingCartProvider} from './context/Context.jsx';
import { useContext } from 'react';
import CheckoutSideMenu from './components/CheckoutSideMenu/CheckoutSideMenu.jsx';
import {ProductProvider} from './context/ContextProducto.jsx';


function App() {

  const context = useContext(ShoppingCartProvider);
  
  return (
  
      <div >
        <ShoppingCartProvider>
          <ProductProvider>

          
        <Navbar />
        <Layout >
        <AppRoutes />
        <CheckoutSideMenu/>
        </Layout>
        </ProductProvider>
        </ShoppingCartProvider>
        
      </div>
  
  )
}

export default App;
