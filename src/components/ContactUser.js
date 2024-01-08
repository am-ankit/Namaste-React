import {useEffect} from "react";

const ContactUser = (props) => {

    useEffect(() => {
        console.log(props.name + " Child useEffect")
    },[])
    console.log(props.name + " Child Render")

    return (
        <div>{props.name}</div>
    )
}

export default ContactUser;