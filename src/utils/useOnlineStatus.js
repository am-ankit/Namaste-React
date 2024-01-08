import {useEffect, useState} from "react"

const useOnlineStatus = () => {
    console.log("useOnlineStatus called")
    const [onlineStatus, setOnlineStatus] = useState(true)
    // console.log(event)
    // console.log(this.ononline())
    // addEventListener("online", (event) => {
    //     console.log("online")
    // });
    // if(event.type === "online") console.log("online")
    // window.addEventListener("online", ()=> {
    //     console.log("online")
    // })
    // return onlineStatus;

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    },[])

    return onlineStatus;
};

export default useOnlineStatus;