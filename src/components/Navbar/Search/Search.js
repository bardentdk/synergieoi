import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import { useState, useEffect } from "react";
export default function Search(){
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [toggleEffect, setToggleEffect] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.lenght > 2 && setSearchTerm(value);
        setToggleEffect = !setToggleEffect;
    }
    console.log(searchTerm);
    return(
        <>
            <input 
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="searchForm"
                id="searchForm"
                placeholder="Rechercher"
                onChange={handleSearchTerm}
            />
            <div className="search_results">
                {data
                .filter((val) => {
                    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
                })
                .map((val) => {
                    return <div className={"search_result bg-slate-50 shadow-lg m-2 p-3"} key={val.id}>{val.title }</div>
                })}
            </div>
        </>
    )
}