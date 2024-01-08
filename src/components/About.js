import User from "./User"
import UserClass from "./UserClass"
import {Component} from "react"

class About extends Component{
    constructor(props){
        console.log("PArent Constructor")
        super(props)
        console.log("Parent props", props)
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
        // this.setState({

        // })
    }

    componentDidUpdate(){
        console.log("Parent component did update")
    }

    render(){
        console.log("Parent Render")
        return (
            <div>
            <h1>About Us Page</h1>
            {/* <User name={"Ankit (function)"}/> */}
            <UserClass name={"Ankit (class)"}
                    location={"Dhanbad (class)"}
                    />
            {/* <UserClass name={"Elon (class)"}
                    location={"US (class)"}
                    /> */}
            {console.log("Parent still loading")}
        </div>
        )
    }
}


export default About
