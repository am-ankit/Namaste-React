import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        console.log(this.props.name + " Child Constructor")

        this.state = {
            count: 0,
            count1: 1,
            userInfo: {
                name: "Dummy",
                location: "Dummy"
            }
        }
    }

    async componentDidMount(){
        console.log(this.props.name + " Child componentDidMount.....")

        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log("Child component did update")
    }

    componentWillUnmount(){
        console.log("Child component will unmount")
    }

    render(){
        console.log(this.props.name + "Child Render")
        const {name, location, avatar_url} = this.state.userInfo;
        console.log("name : ",name)
        console.log("location : ",location)
        // const {location} = this.props;
        let {count, count1} = this.state;
        return (
            <div className="user-card">
            <h1>Count : {count}</h1>
            <button
                onClick={() => {
                    this.setState({
                        count: count + 1
                    });
                    console.log(count)
                }}
                >Count Increase:</button>
            <h1>Count : {count1}</h1>
            {/* <h2>{this.props.name}</h2> */}
            <img src={avatar_url}/> 
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Contact : ankit@gmail.com</h4>
        </div>
        )
    }
}

export default UserClass;