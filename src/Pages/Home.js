import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getData } from "../Redux/Actions/Action";
import { useEffect } from "react";

const Home = () =>{
    const {dataUser} = useSelector((state) => state)
    // console.log(data);
    const dispatch = useDispatch()

    console.log("datareducer", dataUser);


    useEffect(() => {
        dispatch(getData())
    }, [])

    return(
        <div>
            <h1>Test</h1>
            {dataUser.data.map((item) => (
            <>            
            <img src={item.avatar} alt="" />
            <p>{item.first_name}</p>
            </>
        ))
        }
        </div>
    )
}

export default Home