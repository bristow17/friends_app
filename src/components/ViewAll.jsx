import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {

    const [frnd,chngfrnd]=useState([])

    const fetchdata=()=>{

        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                    console.log(response.data)
                    chngfrnd(response.data)
            }
        ).catch(
            (error)=>{
                alert("error");
            }
        )
    }

    useEffect(()=>{fetchdata()},[])

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Friends's Name</th>
                                    <th scope="col">Friend's Nick-name</th>
                                    <th scope="col">Describe your friend</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    frnd.map(
                                        (value,i)=>{
                                            return <tr>
                                            <td>{value.name}</td>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ViewAll