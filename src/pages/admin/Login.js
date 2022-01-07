import React, {useState} from "react"
import {useHistory, Link} from "react-router-dom"
import PropTypes from "prop-types"

const Login = props => {
    
    return <>
        <div className="login-admin">
            <h1>Enter admin username and password:</h1>
            <form onSubmit={props.handleLogin} className="login-form">
                <label>
                    <p>Username: </p>
                    <input
                        type="text"
                        name="username"
                        placeholder="Admin"
                        onChange={props.handleChange}
                    />
                </label>
                <label>
                    <p>Password: </p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={props.handleChange}
                    />
                </label>
                <button type="submit">Admin Login</button>
            </form>
            {/* {props.noUser()} */}
        </div>
    </>
}

export default Login