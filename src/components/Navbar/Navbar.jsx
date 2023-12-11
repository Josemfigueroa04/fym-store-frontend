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
                    <NavLink to="/clothes" 
                    onClick={() => context.setSearchByCategory('test')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics"
                    onClick={() => context.setSearchByCategory('escritorio')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furniture" 
                    onClick={() => context.setSearchByCategory('furnitures')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" 
                    onClick={() => context.setSearchByCategory('toys')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" 
                    onClick={() => context.setSearchByCategory('others')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex gap-3 items-center">
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>

                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon> 
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;