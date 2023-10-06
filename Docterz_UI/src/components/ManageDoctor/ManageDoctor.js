import './ManageDoctor.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { _apiurldoctor } from '../../api_urldoctor';
import { Link, useNavigate } from 'react-router-dom';

function ManageUser() {

  const navigate = useNavigate();
  const [doctorDetails, setDoctorDetails] = useState([]);

  useEffect(() => {
    axios.get(_apiurldoctor + "fetch?role=doctor")
      .then((response) => {
        setDoctorDetails(response.data)
      })
      .catch((error) => {
        setDoctorDetails([]);
      })
  })
  const changeStatus = (_id, status) => {
    if (status == "active") {
      let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
      axios.patch(_apiurldoctor + "update", updateDetails).then((response) => {
        navigate("/manageDoctor");
      });
    }
    else if (status == "inactive") {
      let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
      axios.patch(_apiurldoctor + "update", updateDetails).then((response) => {
        navigate("/managedoctor");
      });
    }
    else {
      let deleteDetails = { "data": { "_id": _id } };
      axios.delete(_apiurldoctor + "delete", deleteDetails).then((response) => {
        navigate("/managedoctor");
      });
    }
  };

  return (
    <>
      <h1>Doctor List !</h1>
      <table class="table table-bordered">
        <tr>
          <th>_id</th>
          <th>name</th>
          <th>email</th>
          <th>ResidentialAddress Add</th>
          <th>Personl Mob</th>
          <th>Profile pic.</th>
          <th>status</th>
          <th>action</th>
        </tr>

        {
          doctorDetails.map((row) => (
            <tr>
              <td>{row._id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.residentialaddress}</td>
              <td>{row.personalmobile}</td>
              <td>
                <img src={"/assets/uploads/profilepic/" + (row.profilepic)} height="70" width="100" />
              </td>


              <td>
                {row.status == 1 &&
                  <p style={{ "color": "green" }}>Active</p>}
                {row.status == 0 &&
                  <p style={{ "color": "orange" }}>Inactive</p>}
              </td>
              <td>
                {row.status == 1 &&
                  <Link onClick={() => { changeStatus(row._id, 'inactive') }} ><font color="blue">Change Status</font></Link>
                }
                {row.status == 0 &&
                  <Link onClick={() => { changeStatus(row._id, 'active') }} ><font color="blue">Change Status</font></Link>
                }
                <br />
                <Link onClick={() => { changeStatus(row._id, 'delete') }} ><font color="red">Delete User</font></Link>
                <br />
                <Link to={"/viewdoctorprofile/" + (row._id)} ><font color="green">View Profile</font></Link>
              </td>
            </tr>
          ))
        }
      </table>
    </>
  )
}
export default ManageUser