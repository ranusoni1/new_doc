
import { Navigate , useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import  axios from 'axios';
import { _apiurldoctor } from '../../api_urldoctor'; 

function Verifydoctor()
{

    const params = useParams(); 
   
    useEffect(()=>{
        //alert(params.email)
     axios.get(_apiurldoctor+"fetch?email="+params.email).then((response)=>{
        console.log(response.data)
        if(response.data[0].__v==0)
        {
            var updateDetails={"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}; 
            axios.patch(_apiurldoctor+"update",updateDetails).then((response)=>{
               console.log("Doctor verified....");    
            });    
        }       
     });
    },[]);

    return(
        <div>
            <Navigate to='/doctorlogin' />
        </div>
    )
}

export default Verifydoctor;