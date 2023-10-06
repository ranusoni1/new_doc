import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../api_url';



function Verifyuser()
{
    const params = useParams(); 

    useEffect(()=>{
        //
        alert(params.email)
     axios.get(_apiurluser +"fetch?email="+params.email).then((response)=>{
        if(response.data[0].__v==0)
        {
            var updateDetails={"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}; 
            axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
               console.log("User verified....");    
            });    
        }       
     });
    },[]);

    return(
        <div>
            <Navigate to='/login' />
        </div>
    )
}

export default Verifyuser;