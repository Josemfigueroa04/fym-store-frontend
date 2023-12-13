import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [productToShow, setProductToShow] = useState({});

    const [cartProducts, setCartProducts] = useState([]);

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    const [order, setOrder] = useState([]);

    const [items, setItems] = useState(null);
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/productos');
                const json = response.data;
                setItems(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const [filteredItems, setFilteredItems] = useState(null);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }, [items, searchByTitle]);

    const [searchByCategory, setSearchByCategory] = useState(null);


    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    }

    const checkAuthenticated = async () => {
        try {
          const res = await fetch("http://localhost:5000/auth/is-verify", {
            method: "GET",
            headers: {token: localStorage.token }
          });
    
          const parseRes = await res.json();
    
          parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (err) {
          console.error(err.message);
        }
      };
    
    //   useEffect(() => {
    //     checkAuthenticated();
    //   }, []);

      const [user, setUser] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "Get",
        headers: { token: localStorage.token }
      });

      const parseData = await res.json();
      setUser(parseData);
      console.log(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

//   useEffect(() => {
//     getProfile();
//   }, []);

    
    return (
        <ShoppingCartContext.Provider value={
            {
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory,
                isAuthenticated,
                setIsAuthenticated,
                setAuth,
                checkAuthenticated,
                getProfile,
                logout,
                user,
                

            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}

