import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Shop = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        API();
    }, [])
    const API = () => {
        axios({
            method: 'get',
            // url: 'https://fakestoreapi.com/products?limit=5'
            url: 'https://fakestoreapi.com/products'
        })
            .then(response => {
                setData(response.data)
                console.log('data: ', response.data);
            })
    }
    const callme = (index) => {
        setData(data.filter((e, i) => {
            if (i != index) return e;
        }))
    }
    return (
        <div className="grid grid-cols-4 gap-4 ">
            {data.map((e, i) => {
                return (<>
                    <div key={i} id="myDIV" className="my border-solid border-2 border-sky-500 rounded p-4 m-2">
                        <p className="text-lg">{e.id}</p>
                        <img className="min-h-0 m-10 m-auto" style={{ width: "70%", height: "auto" }} src={e.image} alt=""></img>
                        <p className="text-lg">{e.title}</p>
                        <p className="text-lg ">{e.description}</p>
                        <p className="text-lg ">${e.price}</p>
                        <button onClick={() => callme(i)} className="block m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            Button
                        </button>
                    </div>
                </>)
            })}
        </div>
    );
};

export default Shop;