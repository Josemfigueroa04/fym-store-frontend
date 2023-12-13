import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const url = "http://localhost:5000/productos";

const EditProduct = () => {
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
            const params = {header: {'Content-Type': 'application/json'},params:{id:id}}
            const respuesta = await axios.get(url,params);
            setTitle(respuesta.data.title);
            setDescription(respuesta.data.description);
            setPrice(respuesta.data.price);
            setCategory(respuesta.data.category);
            setImages(respuesta.data.images);
            setQuantity(respuesta.data.quantity);
        };
        getProduct();
    }, []);

    const update = async (e) => {
        e.preventDefault();
        await axios.put(url, {
            title: title,
            description: description,
            price: price,
            category: category,
            images: images,
            quantity: quantity,

        });
        navigate("/home");
    }

    return(
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                    <div className="card">
                        <div className="card-header bg-dark text-white">Editar Producto  </div>
                        <div className="card-body">
                            <form onSubmit={update}>
                                <label >titulo</label>
                                <input type="text" id="title" maxLength='80' className="form-control"
                                required={true} value={title} onChange={(e)=> setTitle(e.target.value)} />
                                <label >descripcion</label>
                                <input type="text" id="description" maxLength='80' className="form-control"
                                required={true} value={description} onChange={(e)=> setDescription(e.target.value)} />
                                <label >precio</label>
                                <input type="number" id="price" className="form-control"
                                required={true} value={price} onChange={(e)=> setPrice(e.target.value)} />
                                <label >categoria</label>
                                <input type="text" id="category" maxLength='80' className="form-control"
                                required={true} value={category} onChange={(e)=> setCategory(e.target.value)} />
                                <label >imagenes</label>
                                <input type="text" id="images" maxLength='80' className="form-control"
                                required={true} value={images} onChange={(e)=> setImages(e.target.value)} />
                                <label >cantidad</label>
                                <input type="number" id="quantity" className="form-control"
                                required={true} value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
                                <button className="btn btn-primary mt-3"></button>
                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )




};

export default EditProduct;

