import {  useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useContext } from 'react';
import { ShoppingCartContext } from "../../context/Context";

const FormularioProduc = () => {
    const context = useContext(ShoppingCartContext);
    const navigate = useNavigate();

    const [productos, setProductos] = useState({
        title: "",
        price: 0,
        description: "",
        category: "",
        images: "",
        quantity: 0,
    });

    const { title, price, description, category, images, quantity } = productos;

    const onChange = e =>
        setProductos({ ...productos, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
        const reset = () => {
            setProductos({
                title: "",
                price: 0,
                description: "",
                category: "",
                images: "",
                quantity: 0,
            });
        };

        if (!title || !price || !description || !category || !images || !quantity) {
            toast.error("Por favor, completa todos los campos requeridos");
            return;
        }

        try {
            context.addProduct(productos);
            toast.success("Register Successfully");
            
            reset();

        }
        catch (err) {
            console.error(err.message);
            toast.error(err.message);
        }

    };

    return (
        <div>
            <ToastContainer />
            <div className="h-full flex  justify-center border rounded-lg">
                <div className="bg-white max-w-md w-full p-10 rounded-md ">
                    <h1 className="mt-5 text-center">Creacion de Productos</h1>
                    <form onSubmit={onSubmitForm} className="flex flex-col">
                        <div className="flex items-center gap-3">
                            <label htmlFor="title" className="text-base leading-7 text-blueGray-500 ">Titulo:</label>
                            <input
                                type="title"
                                name="title"
                                value={title}
                                placeholder="   titulo"
                                onChange={e => onChange(e)}
                                className="form-control my-3 border rounded-md"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <label htmlFor="price" className="text-base leading-7 text-blueGray-500">Precio:</label>
                            <input
                                type="number"
                                name="price"
                                value={price}
                                placeholder="  precio"
                                onChange={e => onChange(e)}
                                className="form-control my-3 border rounded-md"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <label htmlFor="name" className="text-base leading-7 text-blueGray-500">Descripcion:</label>
                            <input
                                type="text"
                                name="description"
                                value={description}
                                placeholder="  descripcion"
                                onChange={e => onChange(e)}
                                className="form-control my-3 border rounded-md"
                            />
                        </div>

                        <div className="flex items-center gap-3">

                            <label htmlFor="category" className="text-base leading-7 text-blueGray-500">Categoria:</label>
                            <input
                                type="text"
                                name="category"
                                value={category}
                                placeholder="   Categoria"
                                onChange={e => onChange(e)}
                                className="form-control my-3 border rounded-md"
                            />
                        </div>

                        <div className="flex items-center gap-3">

                            <label htmlFor="images" className="text-base leading-7 text-blueGray-500">Images:</label>
                            <input
                                type="text"
                                name="images"
                                value={images}
                                placeholder="   URL images"
                                onChange={e => onChange(e)}
                                className="form-control my-3 border rounded-md"
                            />
                        </div>

                        <div className="flex items-center gap-3">

                            <label htmlFor="quantity" className="text-base leading-7 text-blueGray-500">Cantidad:</label>
                            <input
                                type="number"
                                name="quantity"
                                value={quantity}
                                placeholder="   Cantidad"
                                onChange={e => onChange(e)}
                                className="form-control my-3 border rounded-md"
                            />
                        </div>

                        <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Crear</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default FormularioProduc;