// import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../context/Context";
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Register = () => {

  const context = useContext(ShoppingCartContext);

  const [imageURL, setImageURL] = useState(null);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        role: '',
        avatar: '',
      }}
      validate={(valores) => {
        let errors = {};

        let AlphanumOnly = /[A-Za-z0-9]/
        let onlyNum = /[0-9]/

        if (!valores.name) {
          errors.name = 'El nombre es obligatorio'
        } else if (valores.name.length < 3 || valores.name.length > 50) {
          errors.name = 'El nombre debe tener entre 3 y 50 caracteres'
        }
        else if (!AlphanumOnly.test(valores.name)) {
          errors.name = 'No se permiten caracteres especiales'
        }

        if (!valores.email) {
          errors.email = 'El email es obligatorio'
        } else if (!/\S+@\S+\.\S+/.test(valores.email)) {
          errors.email = 'El email es incorrecto'
        }

        if (!valores.password) {
          errors.password = 'La contraseña es obligatoria'
        } else if (valores.password.length < 8 || valores.password.length > 20) {
          errors.password = 'La contraseña debe tener entre 8 y 20 caracteres'
        } else if (!onlyNum.test(valores.password)) {
          errors.password = 'La contraseña debe contener al menos un numero'
        } else if (!AlphanumOnly.test(valores.password)) {
          errors.password = 'La contraseña debe contener al menos una letra'
        }

        if (!valores.avatar) {
          errors.avatar = 'La imagen de perfil es obligatoria'
        }

        console.log(errors);
        return errors;
      }}
      isValid={false}


      onSubmit={(valores, { resetForm}) => {

        // context.({

        //     ...valores, role: false,

        // })
        resetForm();
        toast.success('Usuario registrado con éxito');

  

      }}
      
    >




      {({ errors, isValid  }) => (
        <div className="container items-center px-5 py-12 lg:px-20">
          <Form className="flex flex-wrap items-center max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="w-full mb-4 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-left">Formulario de Usuario</h2>
            </div>
            <div className="w-full lg:w-1/2 pr-4 mb-4 p-4 bg-white rounded-lg shadow-md">
              <label htmlFor="name" className="text-base leading-7 text-blueGray-500">Nombre de Usuario</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                className={`flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${errors.name && 'border-red-500'
                  } dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400`}
              />
              <ErrorMessage name="name" component={() => (<div className="text-red-600">{errors.name}</div>)} />
            </div>

            <div className="w-full lg:w-1/3 pr-4 mb-4 p-4 bg-white rounded-lg shadow-md">
              <label htmlFor="email" className="text-base leading-7 text-blueGray-500">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className={`flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${errors.email && 'border-red-500'
                  } dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400`}
              />
              <ErrorMessage name="email" component={() => (<div className="text-red-600">{errors.email}</div>)} />
            </div>

            <div className="w-full lg:w-1/3 pl-4 mb-4 p-4 bg-white rounded-lg shadow-md">
              <label htmlFor="password" className="text-base leading-7 text-blueGray-500">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className={`flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${errors.password && 'border-red-500'
                  } dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400`}
              />
              <ErrorMessage name="password" component={() => (<div className="text-red-600">{errors.password}</div>)} />
            </div>

            <div className="w-full lg:w-1/2 pl-4 mb-4 p-4 bg-white rounded-lg shadow-md">
              <label htmlFor="avatar" className="text-base leading-7 text-blueGray-500">Avatar de Usuario</label>
              <Field
                type="avatar"
                id="avatar"
                name="avatar"
                placeholder="Url de imagen"
                className={`flex items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${errors.avatar && 'border-red-500'
                  } dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400`}
                onChange={(event) => {
                  const file = event.target.files[0];
                  setImageURL(URL.createObjectURL(file));
                }}
              />
              {imageURL && (
                <img
                  src={imageURL}
                  alt="Uploaded"
                  style={{ maxWidth: '100%', maxHeight: '100px' }}
                />)}

              <ErrorMessage name="avatar" component={() => (<div className="text-red-600">{errors.avatar}</div>)} />
            </div>



            <div className="w-full">
              <button  disabled={!isValid } type="submit" className="disabled:bg-gray-500 p-2 bg-blue-500 text-white rounded-md">
                Registrarse
              </button>
            </div>


          </Form>
        </div>

      )}
    </Formik>
  );

}

export default Register;




