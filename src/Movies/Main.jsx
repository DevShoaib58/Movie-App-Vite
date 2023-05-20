import { useEffect, useState } from "react";
import Movie from "./Movie";


const API = "https://www.omdbapi.com/?apikey=c032e2d7";

const Main = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] =useState([])
    const searchMovie = async (search) => {
        try {
            const response = await fetch(`${API}&s=${search.trim().toLowerCase()}`);
            const json = await response.json();
            setMovies(json.Search);
            console.log(json.Search);
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        searchMovie('search')
            }, [])
    return (
        <div className="Conatiner text-center m-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Movies Site </h1>

            <form className="my-2">
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" onClick={()=>searchMovie(search)} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            {
                movies?.length > 0 ? (<div className="card-conatine-movies">
                    {movies.map((e, index) => {
                        return (
                            <div className="m-2 inline-flex">
                                <Movie key={index} e={e} />
                                {console.table(e)}
                            </div>
                        );
                    })}
                </div>) : (<h1 className="text-2xl ">Movies not Found</h1>)
            }

        </div>
    );
};

export default Main;