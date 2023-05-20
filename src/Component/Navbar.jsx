import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Main from "../Movies/Main";
// import Movie from "../Movies/Movie";

const Navbar = () => {
    const [cat, setCat] = useState([]);
    useEffect(() => {
        API();
    }, [])
    const API = () => {
        axios({
            method: 'get',
            url: "https://fakestoreapi.com/products/categories"
        })
            .then(response => {
                setCat(response.data)
                // console.log('response.data: ', response.data);
            })
    }
    return (
        <>

            <div>
                <ul className="container m-auto p-4 flex">
                    {cat.map((e) => (<>
                        {/* (`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b58badd1df8a9cd18e57c0af6711fe92`) */}
                        <li className="m-4"><Link to="`https://fakestoreapi.com/products/categories/${e}`">{e}</Link></li>
                        {/* <p>{e}</p> */}
                    </>))}
                </ul>
            </div>
            <ul className="container m-auto p-4 flex">
                <li className="m-4"><Link to="/"  >Ecommerce Store</Link></li>
                <li className="m-4"><Link to="/cart"  >Passing Data Through Props</Link></li>
                <li className="m-4"><Link to="/main"  >Movies</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </>






    );
};

export default Navbar;