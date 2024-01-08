import {useState} from "react"

const User = ({name}) => {

    const [count] = useState(0);
    const [count1] = useState(1);

    return (
        <div className="user-card">
            <h1>Count : {count} - {count1}</h1>
            <h2>{name}</h2>
            <h3>Dhanbad</h3>
            <h4>Contact : ankit@gmail.com</h4>
        </div>
    )
}

export default User;