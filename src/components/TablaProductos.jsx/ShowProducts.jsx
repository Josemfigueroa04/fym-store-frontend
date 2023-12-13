import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ContextProducto";

const url = "http://localhost:5000/productos";

const ShowProducts = () => {
    const context = useContext(ProductContext);
    
    useEffect(() => {
        context.getProducts();
    }, []);

    const deleteProduct = async (id) => {
        const params = {header: {'Content-Type': 'application/json'},data:{id:id}}
        await axios.delete(url,params);
        context.getProducts();
    }





    return(

        <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr><th>#</th><th>PRODUCTO</th><th>DESCRIPCION</th><th>PRECIO</th><th></th></tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {context.products?.map( (product,i)=>(
                                    <tr key={product.id}>
                                        <td>{(i+1)}</td>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td>${new Intl.NumberFormat('es-mx').format(product.price)}</td>
                                        <td>
                                            <Link to={`/edit/${product.id}`} className='btn btn-primary'> Editar </Link>
                                            <button className="btn btn-danger" onClick={() => context.deleteProduct(product.id)}>Eleminar</button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
}


export default ShowProducts;
