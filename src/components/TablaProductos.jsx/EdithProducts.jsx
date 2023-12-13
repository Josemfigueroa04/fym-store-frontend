import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";


const url = "http://localhost:5000/productos/";

const EditProduct = () => {
    const context = useContext(ShoppingCartContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [images, setImages] = useState("");
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const getProduct = async () => {
            const options = { headers: { 'Content-Type': 'application/json' } }
            try {
                const respuesta = await axios.get(`${url}/${id}`, options);
                setTitle(respuesta.data.title);
                setDescription(respuesta.data.description);
                setPrice(respuesta.data.price);
                setCategory(respuesta.data.category);
                setImages(respuesta.data.images);
                setQuantity(respuesta.data.quantity);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
                // Manejar el error, por ejemplo, redirigir a una página de error
            }
        };
        getProduct();
    }, [id]);

    const update = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`${url}/${id}`, {
                title: title,
                description: description,
                price: price,
                category: category,
                images: images,
                quantity: quantity,
            });
            console.log(res);
            navigate("/admin");

            toast.success("Producto actualizado");
            context.setItems
        } catch (error) {
            console.error("Error al actualizar el producto:", error.message);
            // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
            toast.error("Error al actualizar el producto");
        }
    };

    return (

        <div>
            <ToastContainer />
            <div className="h-full flex  justify-center border">
                <div className="bg-white max-w-md w-full p-10 rounded-md ">
                    <h1 className="mt-5 text-center">Editar Productos</h1>
                    <form onSubmit={update} className="flex flex-col">
                        <div className="flex items-center gap-3">
                            <label htmlFor="title" className="text-base leading-7 text-blueGray-500 ">Titulo:</label>
                            <input
                                type="title"
                                name="title"
                                value={title}
                                placeholder="   titulo"
                                onChange={(e) => setTitle(e.target.value)}
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
                                onChange={(e) => setPrice(e.target.value)}
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
                                onChange={(e) => setDescription(e.target.value)}
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
                                onChange={(e) => setCategory(e.target.value)}
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
                                onChange={(e) => setImages(e.target.value)}
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
                                onChange={(e) => setQuantity(e.target.value)}
                                className="form-control my-3 border rounded-md"
                            />
                        </div>

                        <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>


    )
};

export default EditProduct;

