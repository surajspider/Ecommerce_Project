import { createContext, useEffect, useState } from "react";

export const storeData = createContext();


function DataStore({ children }) {
    const [data, setData] = useState([]);
    const fetchfun = async () => {
        const res = await fetch("https://ecommerce-ns6o.onrender.com/api/alldata");
        const user = await res.json();
        setData(user);
    }
    useEffect(() => {
        fetchfun();
    }, [])
    return (
        <div>
            <storeData.Provider value={[data, setData]}>
                {children}
            </storeData.Provider>
        </div>
    )
}

export default DataStore