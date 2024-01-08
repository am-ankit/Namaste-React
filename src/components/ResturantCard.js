import { CDN_URL } from "../utils/constants"

const styleCard = {
    "backgroundColor": "#f0f0f0"
}

const ResturantCard = (props) => {
    const {resData} = props
    const {name, cuisines, costForTwo, avgRating, sla} = resData?.info
    return (
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + resData.info.cloudinaryImageId}
                height = "200px"
                />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export default ResturantCard;