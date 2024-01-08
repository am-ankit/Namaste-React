import {useEffect, useState} from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId) => {
    console.log("useRestaurantMenu called")
    console.log(resId)

    const [resInfo, setResInfo] = useState(null);
    //fetch data

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        // console.log(MENU_API + resId)
        const data = await fetch(MENU_API + resId)
        console.log(data)
        const json = await data.json()
        // const resInfo = json?.data;
        setResInfo(json?.data)
    }

    return resInfo;
}

export default useRestaurantMenu;