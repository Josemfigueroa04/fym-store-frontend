import './App.css'
import AppRoutes from '../src/Routes/AppRoutes.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Layout from './components/Layout/Layout.jsx';
import {ShoppingCartProvider} from './context/Context.jsx';


function App() {
  
  return (
  
      <div >
        <ShoppingCartProvider>

        
        <Navbar />
        <Layout >
        <AppRoutes />
        </Layout>
        </ShoppingCartProvider>
        
      </div>
  
  )
}

export default App;
