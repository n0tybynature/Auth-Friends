import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import {axiosWithAuth} from "./../utils/axiosWithAuth";


const initialFormValues = {
    name:"",
    age:"",
    email:"",
}


export default function FriendForm(){

    const history = useHistory();
    
    const [friend, setFriend] = useState(initialFormValues)



    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name] : e.target.value
        })
    }

    const friendMaker = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/friends', friend)
            .then(res => {
            window.location.reload(false)
            })
            .catch( err => {
                console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={friendMaker}>
                <input type="text" onChange={handleChange} defaultValue={friend.name} placeholder="Name"/>
                <input type="text" onChange={handleChange} defaultValue={friend.age} placeholder="Age" />
                <input type="text" onChange={handleChange} defaultValue={friend.email} placeholder="Email"/>
                <button>Submit Friend</button>
            </form>
        </div>
    );




}