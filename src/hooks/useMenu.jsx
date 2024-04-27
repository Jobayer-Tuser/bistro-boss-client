import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItems, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/menu')
            .then(res => {
                const data = res.data;
                setMenu(data);
                setLoading(false)
            })
    }, [])
    return [menuItems, loading]
}

export default useMenu;