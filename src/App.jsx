import './App.css'
import AppRoutes from '../src/Routes/AppRoutes.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Layout from './components/Layout/Layout.jsx';
import {ShoppingCartProvider} from './context/Context.jsx';
import CheckoutSideMenu from './components/CheckoutSideMenu/CheckoutSideMenu.jsx';


function App() {
  
  return (
  
      <div >
        <ShoppingCartProvider>

        
        <Navbar />
        <Layout >
        <AppRoutes />
        <CheckoutSideMenu/>
        </Layout>
        </ShoppingCartProvider>

        
      </div>
  
  )
}

export default App;
