import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";



class FriendsList extends React.Component {
    state = {
        friendList: [],
    };


    componentDidMount(){
        this.getData();
    }


    getData = () => {

        const token = JSON.parse(localStorage.getItem("token"));
    

        axios
            .get("/api/friends")
            .then((res) => {
                console.log(res)
            })



    }



}

export default FriendsList;