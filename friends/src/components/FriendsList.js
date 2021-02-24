import React from "react";

import FriendForm from "./FriendsForm"
import { axiosWithAuth } from "../utils/axiosWithAuth";



class FriendsList extends React.Component {
    state = {
        friends: [],
    };


    componentDidMount(){
        this.getFriends();
    }


    getFriends = () => {
        
        axiosWithAuth()
            .get('/api/friends')
            .then( res => {
                console.log(res)

                this.setState({
                    friends:res.data
                    })
                })
            .catch( err => {
                console.log(err);
            });
    }
           

    render(){
        return (
            <div>
                <FriendForm/>
                <div className="friends-container">
                    <h2>Friends List</h2>
                    {this.state.friends.map( friend => {
                    return <ul className="friends-list">
                            <li><span>Name:</span> {friend.name}</li>
                            <li><span>Age:</span> {friend.age}</li>
                            <li><span>Email:</span> {friend.email}</li>
                        </ul>
                    })}
                    
                </div>
            </div>
        )
    }






}

export default FriendsList;