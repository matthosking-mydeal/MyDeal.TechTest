import React from "react";
import { useState } from "react";
import '../App.css';
import {createApiEndPoint} from "../api/api.js";
import {userDetailsEndPoint} from "../api/api.js";
import UserComponent from "./UserComponent";


export default function Home(){

    const [userDetails, setUserDetails] = useState({      
    });

    const [userId, setUserId] = useState(1);
        
    const getUserDetails = () => {
        createApiEndPoint(userDetailsEndPoint)
            .fetchByID(userId)
            .then(res => {
                console.log(res)
                setUserDetails(previousState => {
                    return {
                        ...previousState, id: res.data.id, firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        email: res.data.email
                    }
                });
            })
            .catch(err => {
                console.log(err);
                setUserDetails({});
            });
    }

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);        
    }

    return (
        <div className="App-content">
            <h1>Test App</h1>    
            <h2>User Details</h2>                 
            <label>User Id :</label> <input type="text" id="userIdtxt" onChange={handleUserIdChange}></input>
            <button type="button" onClick={getUserDetails}>Get</button> 
           <UserComponent userDetails ={userDetails}/>           
        </div>
    );
}