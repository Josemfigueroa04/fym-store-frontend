import FormularioProduc from "../../components/FormulariaoProduc/FormularioProduc";
import {useContext} from 'react';
import { ProductContext } from "../../context/ContextProducto";
import ShowProducts from "../../components/TablaProductos.jsx/ShowProducts"; 


const Admin = () => {
    const context = useContext(ProductContext);
    
    
    return( 

        <div>

            <FormularioProduc/>
            <ShowProducts/>
        </div>
    );
}

export default Admin;