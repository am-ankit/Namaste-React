import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import {Link} from "react-router-dom";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // const dat = useOnlineStatus()

//Local State Variable
const [listOfResturants, setListOfResturants] = useState([]);
const [searchText, setSearchText] = useState("")
// console.log("useState",useState(resList))
// console.log("Render", listOfResturants)

//Normal variable
// let listOfResturants = [];


// Normal JS Variable
let listOfResturantsJS = [
    {
        "info": {
          "id": "464509",
          "name": "Leon's - Burgers & Wings (Leon Grill)",
          "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "American",
            "Snacks",
            "Turkish",
            "Portuguese",
            "Continental"
          ],
          "avgRating": 4.4,
          "avgRatingString": "4.4",         
        }   
      },
      {
        "info": {
          "id": "3241",
          "name": "Meghana Foods",
          "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Chinese",
            "Seafood"
          ],
          "avgRating": 4.6,
          "avgRatingString": "4.6"
      }
    }
]

useEffect(() => {
    console.log("Body useEffect called")
    fetchData();
}, [])

const fetchData = async () => {
    // console.log("Invoking API")
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    // console.log(data);
    const json = await data.json()
    console.log(json)
    // console.log(json.data.cards[5].card.gridElements.infoWithStyle.restaurants)
    //Optional Chaining
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setListOfResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log("print after rerender", listOfResturants)
}

console.log("Body Rendered")

const onlineStatus = useOnlineStatus()
if( onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection..</h1>

    return (listOfResturants.length ===0) ? <Shimmer/> : (
        <div className="Body">
            <div className="filter">
                <input 
                    type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e) => {setSearchText(e.target.value)}}
                    />
                <button className="search"
                        onClick={() => {
                            // filter logic to search resturants
                            console.log("onclick called for search")
                            let searchRes = listOfResturants.filter(res => {
                                // console.log(res.info.name)
                                // console.log(searchText)
                                // res.info.name.includes(searchText);
                                res.info.name === searchText
                            })
                            // console.log("searchRes is ",searchRes)
                            setListOfResturants(searchRes)
                        }}
                        >Search</button>
                <button className="filter-btn" onClick={() => {
                    console.log("CLICKED")
                    const filteredList = listOfResturants.filter(resturant => (
                        resturant.info.avgRating >= 4.5
                        ))
                    console.log("Inside callback function", filteredList)
                    setListOfResturants(filteredList)
                }}>Top Rated Resturants</button>
            </div>
            <div className="res-container">
                {/* <ResturantCard 
                    resName="Meghna Foods"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"
                    // cuisine = "Biryani, North Indian, Asian"
                    /> */}
                {/* <ResturantCard 
                    resName="KFC"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/f01666ac73626461d7455d9c24005cd4"
                    cuisine = "Burger, Fast Food"
                    /> */}

                {listOfResturants.map(resturant => <Link to={"/restaurants/"+resturant.info.id} key = {resturant.info.id}><ResturantCard  resData = {resturant}/></Link>)}           
            </div>
        </div>
    )
}

export default Body;