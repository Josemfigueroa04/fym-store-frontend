import { Link } from "react-router-dom";

const Compra = () => {
    return (
        <div  className="flex  flex-col justify-center items-center">
        <h1 className="text-5xl m-10">Gracias por tu compra</h1>
        <Link to="/"><button type="submit" className="bg-blue-400 text-white px-4 py-2 gap-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Seguir Comprando</button></Link>
        </div>
    );
    }

export default Compra;