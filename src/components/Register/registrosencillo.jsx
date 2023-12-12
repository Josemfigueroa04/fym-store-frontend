import { Link } from "react-router-dom";
import { toast, ToastContainer    } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/Context';


const RegistroSencillo = () => {

    const context = useContext(ShoppingCartContext);

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
      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        context.setAuth(true);
        toast.success("Register Successfully");
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

       
          <h1 className="mt-5 text-center">Register</h1>
          <form onSubmit={onSubmitForm}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
            <input
              type="text"
              name="name"
              value={name}
              placeholder="name"
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
             <input
              type="text"
              name="avatar"
              value={avatar}
              placeholder="Url de imagen"
              onChange={e => onChange(e)}
              className="form-control my-3"
            />
         
            <button type="submit" className="btn btn-success btn-block">Submit</button>
          </form>
          <Link to="/login">login</Link>

          </div>

      );
    };


export default RegistroSencillo;