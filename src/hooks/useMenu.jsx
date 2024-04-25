import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItems, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('menu.json')
            .then(res => {
                const data = res.data;
                setMenu(data);
                setLoading(false)
            })
    }, [])
    return [menuItems, loading]
}

export default useMenu;