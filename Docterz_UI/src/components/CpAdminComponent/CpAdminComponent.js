import './CpAdminComponent.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../api_url';

function CpAdmin() {

  const [output, setOutput] = useState();
  const [OldPassword, setOldPassword] = useState();
  const [NewPassword, setNewPassword] = useState();
  const [ConfPassword, setConfPassword] = useState();
  const [email, setEmail] =useState(localStorage.getItem("email"));

  const handleSubmit = () => {
    axios.get(_apiurluser + "fetch?email=" + email + "&password=" + OldPassword).then((Response) => {
      if (NewPassword == ConfPassword) {
        let updateDetails = { "condition_obj": { "email": email }, "content_obj": { "password": ConfPassword } };
        axios.patch(_apiurluser + "update", updateDetails).then((Response) => {
          setOutput("password change successfully, please login again...");
          setOldPassword('');
          setNewPassword('');
          setConfPassword('');
        });
      }
      else {
        setOutput("password mismatch")
        setOldPassword('');
      }
    }).catch((error)=>{
      setOutput("Invalid old password");
      setOldPassword("");    
     });

 
  }


  
  return (
    <>
    {/* adminhome start */}
    <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <font color="blue">{output}</font>
                

                {/* Password input */}
                <div class="form-outline mb-4">
                  <input type="password" id="form1Example21" class="form-control form-control-lg" value={OldPassword} onChange={e => setOldPassword(e.target.value)} />
                  <label class="form-label" for="form1Example23">Old Password</label>
                </div>

                 {/* Password input */}
                 <div class="form-outline mb-4">
                  <input type="password" id="form1Example22" class="form-control form-control-lg" value={NewPassword} onChange={e => setNewPassword(e.target.value)} />
                  <label class="form-label" for="form1Example23">New Password</label>
                </div>

                 {/* Password input */}
                 <div class="form-outline mb-4">
                  <input type="password" id="form1Example23" class="form-control form-control-lg" value={ConfPassword} onChange={e => setConfPassword(e.target.value)} />
                  <label class="form-label" for="form1Example23">Confirm Password</label>
                </div>





                {/* Submit button */}
                <button type="button" onClick={handleSubmit} class="btn btn-primary btn-lg btn-block">Submit</button>



              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CpAdmin;