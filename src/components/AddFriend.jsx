import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddFriend = () => {


    const [data,setdata]=useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName":"",
            "DescribeYourFriend":""
        }
    )
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }


    const readvalue=()=>{
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(

            (response)=>{
                console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Added Successfully");
                    } else {
                        alert(response.data);
                    }
            }
        )
    }

    return (
        <div>

            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Name</label>
                                <input type="text" className="input form-control"name='name' value={data.name} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Friend Name</label>
                                <input type="text" className="input form-control" name='friendName' value={data.friendName} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Friend's Nick-name</label>
                                <input type="text" className="input form-control" name='friendNickName' value={data.friendNickName} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Describe your friend</label>
                                <textarea name="DescribeYourFriend" id="" className="form-control" value={data.DescribeYourFriend} onChange={inputhandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readvalue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddFriend