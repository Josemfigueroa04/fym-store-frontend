import {createContext, useState} from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await axios.get("http://localhost:5000/productos");
        setProducts(res.data);
      };

      const getProduct = async (id) => {
        const res = await axios.get(`http://localhost:5000/productos/${id}`);
        return res.data;
      };

        const addProduct = async (product) => {
            const res = await axios.post("http://localhost:5000/productos", product);
            setProducts([...products, res.data]);
        };

        const deleteProduct = async (id) => {
            await axios.delete(`http://localhost:5000/productos/${id}`);
            setProducts(products.filter((product) => product.id !== id));
        };

        const updateProduct = async (product) => {
            const res = await axios.put(`http://localhost:5000/productos/${product.id}`, product);
            setProducts(products.map((product) => (product.id === res.data.id ? res.data : product)));
        };

        
   

    return(
        <ProductContext.Provider value={{
            products, 
            setProducts,
            getProducts,
            getProduct,
            addProduct,
            deleteProduct,
            updateProduct,

            
            }}>
            {children}
        </ProductContext.Provider>
    );
}


