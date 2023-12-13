import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/Context';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        context.setAuth(true);
        toast.success("Logged in Successfully");
        navigate('/');
        context.getProfile();
        context.checkAuthenticated();
      } else {
        context.setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);

    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="h-full flex justify-center border">
        <div className="bg-white max-w-md w-full p-10 rounded-md ">
        <h1 className="mt-5 text-center">Login</h1>
        <form onSubmit={onSubmitForm} className="flex flex-col">
          <div className="flex items-center gap-3">
            <label htmlFor="email" className="text-base leading-7 text-blueGray-500 ">Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              className="form-control my-3 border rounded-md"
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="email" className="text-base leading-7 text-blueGray-500 ">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              className="form-control my-3 border rounded-md"
            />
          </div>

          <button type="submit" className="bg-blue-400 text-white px-4 py-2 gap-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Iniciar Sesion</button>
        </form>
        <Link className="text-color-blue" to="/register">Registrarse</Link>
      </div>
    </div>
    </div>


  );
};

export default Login;