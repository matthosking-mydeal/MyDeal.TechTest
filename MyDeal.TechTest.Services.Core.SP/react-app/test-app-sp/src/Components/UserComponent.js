import React from "react";
import '../App.css'

export default function UserComponent(props) {
    const userDetails = props.userDetails;

    return (
        <div >

            {userDetails &&
                <ul className="userdetails-list" >
                    {userDetails.id && <>
                        <li >
                            <h4>
                                FirstName : {userDetails.firstName}
                            </h4>
                        </li>
                        <li >
                            <h4>
                                LastName : {userDetails.lastName}
                            </h4>
                        </li>
                        <li >
                            <h4>
                                Email : {userDetails.email}
                            </h4>
                        </li>
                    </>
                    }

                </ul>
            }
        </div>
    );
}