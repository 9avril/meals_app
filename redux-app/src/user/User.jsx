import React from "react";
import {useSelector} from "react-redux";


export default function User() {

    const {isLoading, error, user} = useSelector(state => state.user)

    return (
        <div>
            {isLoading ? <div>Loading...</div> : error ? <div>{error}</div> : user ?
                <h1>User: {user.name}</h1> : <p>User not found</p>}
        </div>
    )
}