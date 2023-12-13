import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import {ShoppingBagIcon} from '@heroicons/react/24/solid';


function Navbar() {
    const activeStyle = 'underline underline-offset-4';
    const context = useContext(ShoppingCartContext);

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-light w-full" >
            <ul className="flex gap-3 items-center">
                <li>
                    <NavLink to="/"
                    onClick={() => context.setSearchByCategory()}>
                        <img src="/img/logo-fym.png" alt="logo" 
                        className="w-20 h-20"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" 
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/escritorios" 
                    onClick={() => context.setSearchByCategory('escritorio')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Escritorios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electrodomesticos"
                    onClick={() => context.setSearchByCategory('electrodomesticos')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electrodomesticos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/terrazas" 
                    onClick={() => context.setSearchByCategory('terraza')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Terrazas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/juguetes" 
                    onClick={() => context.setSearchByCategory('juguete')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Juguetes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/muebles" 
                    onClick={() => context.setSearchByCategory('mueble')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Muebles
                    </NavLink>
                </li>
            </ul>

            <ul className="flex gap-3 items-center">
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Mis Ordenes
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Iniciar Sesion
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/register" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Registrarse
                    </NavLink>

                </li>
                {context.user?.role && <li>
                    <NavLink to="/admin" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Admin
                    </NavLink>
                </li>}
                <li className="flex items-center">
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon> 
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;