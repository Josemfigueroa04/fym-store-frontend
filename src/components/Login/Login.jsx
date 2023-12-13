import {  useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/Context';

import { toast,ToastContainer } from "react-toastify";
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
      <h1 className="mt-5 text-center">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/register">register</Link>
    </div>
    
  );
};

export default Login;