import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";

const url = "http://localhost:5000/productos";

const ShowProducts = () => {
    const context = useContext(ShoppingCartContext);

    useEffect(() => {
        context.getProducts();
    }, []);

    return (

        <div className='row mt-3 border rounded-lg'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2 '>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead className="border">
                            <tr className="border"><th >#</th><th>PRODUCTO</th><th>DESCRIPCION</th><th>PRECIO</th><th></th></tr>
                        </thead>
                        <tbody className='table-group-divider border'>
                            {context.products?.map((product, i) => (
                                <tr key={product.id}>
                                    <td className="border ">{(i + 1)}</td>
                                    <td className="border">{product.title}</td>
                                    <td className="border">{product.description}</td>
                                    <td className="border gap-2 ">${new Intl.NumberFormat('es-mx').format(product.price)}</td>
                                    <td className="border">
                                        <Link to={`/edit/${product.id}`} className='bg-yellow-200 rounded gap-2 '> Editar </Link>
                                        <button type="submit" className="bg-red-500 rounded text-white gap-2 " onClick={() => context.deleteProduct(product.id)}>Eliminar</button>
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
