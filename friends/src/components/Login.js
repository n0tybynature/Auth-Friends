import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"


class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: "",
        }, 
        error : "",
    };
   
    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
            error: "",
        });
    };

    login = (e) => {
        e.preventDefault();

        axiosWithAuth()
            .post("/api/login", this.state.credentials)
            .then( res => {
                localStorage.setItem("token", JSON.stringify(res.data.payload));
                this.props.history.push("/friends");
            })
            .catch( err => {
                this.setState({
                    error: err.response
                })
            });
    };


    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <p style={{color:"hotpink", fontsize:"12px"}}>{this.state.error}</p>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;