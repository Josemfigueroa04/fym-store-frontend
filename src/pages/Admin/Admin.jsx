import FormularioProduc from "../../components/FormulariaoProduc/FormularioProduc";
import {useContext} from 'react';
import { ProductContext } from "../../context/ContextProducto";


const Admin = () => {
    const context = useContext(ProductContext);
    
    
    return( 

        <div>
            <FormularioProduc/>
        </div>
    );
}

export default Admin;