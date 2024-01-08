import {useEffect} from "react"

import ContactUser from "./ContactUser";

const Contact = () => {
    useEffect(() => {
        console.log("Parent useEffect")
    },[])
    console.log("Parent Render")
    return (
        <div>
            <h1>This is Contact Us Page</h1>
            <ContactUser name={"Ankit"}/>
            <ContactUser name={"Elon"}/>
        </div>
    )
};

export default Contact;