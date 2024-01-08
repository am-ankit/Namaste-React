// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    // const [menu, setMenu] = useState([])

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    // useEffect(() => {
    //     console.log("RestaurantMenu useEffect Called");
    //     fetchMenu();
    // })

    // const fetchMenu = async () => {
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`);

    //     const json = await data.json();
    //     console.log(json?.data);
    //     setResInfo(json?.data);
    //     console.log("ResInfo is : ", resInfo);
    //     console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards[0]?.card?.info.name);
    //     console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
    //     setMenu(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
    // } 

    if(resInfo === null){
        console.log("inside resInfo null")
        return (
            <Shimmer />
        )
    } 

    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    console.log("Dishes")
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card)
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <img 
                src={CDN_URL + cloudinaryImageId}
                height = "200px"
                />
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {/* {itemCards.map((food => <li>{food.card.info.name} - Rs. {food.card.info.price / 100}</li>))} */}
            </ul>
        </div>
    );
};

export default RestaurantMenu;