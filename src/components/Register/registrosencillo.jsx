import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/Context';



const RegistroSencillo = () => {

  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    role: "false",
    avatar: "",
  });

  const { email, password, name, role, avatar } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();

    if (!email || !password || !name || !avatar) {
      toast.error("Por favor, completa todos los campos requeridos");
      return;
    }


    try {
      const body = { email, password, name, role, avatar };
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      console.log(response);
      const parseRes = await response.json();
      console.log(parseRes);

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        context.setAuth(true);
        toast.success("Register Successfully");
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
      <div className="h-full flex  justify-center border">
        <div className="bg-white max-w-md w-full p-10 rounded-md ">

          <h1 className="mt-5 text-center">Registro de Usuario</h1>
          <form onSubmit={onSubmitForm} className="flex flex-col">
            <div className="flex items-center gap-3">
              <label htmlFor="email" className="text-base leading-7 text-blueGray-500 ">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="   email"
                onChange={e => onChange(e)}
                className="form-control my-3 border rounded-md"
              />
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="password" className="text-base leading-7 text-blueGray-500">Contraseña:</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="  password"
                onChange={e => onChange(e)}
                className="form-control my-3 border rounded-md"
              />
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="name" className="text-base leading-7 text-blueGray-500">Nombre:</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="  name"
                onChange={e => onChange(e)}
                className="form-control my-3 border rounded-md"
              />
            </div>

            <div className="flex items-center gap-3">

              <label htmlFor="avatar" className="text-base leading-7 text-blueGray-500">Avatar:</label>
              <input
                type="text"
                name="avatar"
                value={avatar}
                placeholder="   Url de imagen"
                onChange={e => onChange(e)}
                className="form-control my-3 border rounded-md"
              />
            </div>

            <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
          </form> 


        </div>

      </div>
    </div>

  );
};


export default RegistroSencillo;