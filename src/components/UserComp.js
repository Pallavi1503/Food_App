import React from "react";

class UserComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            place:"Pune",
            count:0,
            userInfo:{
                name:"dummy",
                location:"default",
                avatar_url:""
            }
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/akshaymarch7")
        const json=await data.json();
        this.setState({
            userInfo:json
        })

    }

    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        const handleCount=()=>{
            this.setState({
                count:this.state.count+1
            });
        }

        return(
            <>
                <h1>User Description</h1>
                <img src={avatar_url}/>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <button onClick={handleCount}>Count:{this.state.count}</button>
            </>
        )
    }
}

export default UserComp;