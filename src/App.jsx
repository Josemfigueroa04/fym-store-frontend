import './App.css'
import AppRoutes from '../src/Routes/AppRoutes.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Layout from './components/Layout/Layout.jsx';


function App() {
  
  return (
  
      <div >
        
        <Navbar />
        <Layout >
        <AppRoutes />
        </Layout>
        
      </div>
  
  )
}

export default App;
