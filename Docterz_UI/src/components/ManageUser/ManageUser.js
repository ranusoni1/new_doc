import './ManageUser.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../api_url';
import { Link , useNavigate } from 'react-router-dom';

function ManageUser() {

    const navigate = useNavigate();       
    const [ userDetails , setUserDetails ] = useState([]);

useEffect(()=>{
    axios.get(_apiurluser+"fetch?role=user")
    .then((response)=>{
        setUserDetails(response.data)    
    }) 
    .catch((error)=>{
        setUserDetails([]);
    })
})
const changeStatus=(_id,status)=>{
    if(status=="active")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}};
      axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
        navigate("/manageuser");
      });
    }
    else if(status=="inactive")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}};
      axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
        navigate("/manageuser");
      });
    }
    else
    {
      let deleteDetails={"data":{"_id":_id}};
      axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
        navigate("/manageuser");
      });
    }
   };

  return (
    <>
    <h1>User List!</h1>
    <table class="table table-bordered">
        <tr>
            <th>_id</th>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            <th>mobile</th>
            <th>gender</th>
            <th>city</th>
            <th>info</th>
            <th>status</th>
            <th>action</th>
        </tr>
        
        {
            userDetails.map((row)=>(
            <tr>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.address}</td>
                <td>{row.mobile}</td>
                <td>{row.gender}</td>
                <td>{row.city}</td>
                <td>{row.info}</td>
                
                <td>
                   { row.status==1 && 
                    <p style={{"color":"green"}}>Active</p>}
                   { row.status==0 && 
                    <p style={{"color":"orange"}}>Inactive</p>}
                    </td>
                    <td>
    { row.status==1 && 
        <Link onClick={()=>{ changeStatus(row._id,'inactive') }} ><font color="blue">Change Status</font></Link>
    }
    { row.status==0 && 
        <Link onClick={()=>{ changeStatus(row._id,'active') }} ><font color="blue">Change Status</font></Link>
    }
    <br/> 
     <Link onClick={()=>{ changeStatus(row._id,'delete') }} ><font color="red">Delete User</font></Link>
    </td>
            </tr>
            ))
        }
    </table>
    </> 
    )
}
export default ManageUser