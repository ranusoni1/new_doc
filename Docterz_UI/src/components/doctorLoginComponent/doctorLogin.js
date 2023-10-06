import './doctorLogin.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurldoctor } from '../../api_urldoctor';
import { useNavigate } from 'react-router-dom';


function DoctorLogin() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [output, setOutput] = useState();
  const navigate = useNavigate();


  const handleSubmit = () => {
    const docsdetails    = { "email": email, "password": password, }

    axios.post(_apiurldoctor + "login", docsdetails
    ).then((result) => {
      const obj = result.data;
      console.log(obj)
      if (obj) {
        localStorage.setItem("token", obj.token);
        localStorage.setItem("_id", obj.docsdetails._id);
        localStorage.setItem("name", obj.docsdetails.name);
        localStorage.setItem("email", obj.docsdetails.email);
        localStorage.setItem("password", obj.docsdetails.password);
        localStorage.setItem("experience", obj.docsdetails.experience);
        localStorage.setItem("personalmobile", obj.docsdetails.personalmobile);
        localStorage.setItem("clinicmobile", obj.docsdetails.clinicmobile);
        localStorage.setItem("clinicaddress", obj.docsdetails.clinicaddress);
        localStorage.setItem("residentialaddress", obj.docsdetails.residentialaddress);
        localStorage.setItem("specialization", obj.docsdetails.specialization);
        localStorage.setItem("designation", obj.docsdetails.designation);
        localStorage.setItem("contactdescription", obj.docsdetails.contactdescription);
        localStorage.setItem("profilepic", obj.docsdetails.profilepic);
        localStorage.setItem("role", obj.docsdetails.role);
        localStorage.setItem("info", obj.docsdetails.info);
        
        navigate("/doctor");
      }
      else {
        console.error("API response is not as expected");
      }
    }).catch((error) => {
      console.log(error);
      setOutput("user login failed.... ");
      setEmail("");
      setPassword("");
    })
  }
  return (
    <>
      {/* Login Start */}

      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <h3 class="mb-5 text-uppercase">Doctor Login Form</h3>
                <font color="blue">{output}</font>
                {/* Email input */}
                <div class="form-outline mb-4">
                  <input type="email" id="form1Example13" class="form-control form-control-lg" value={email} onChange={e => setEmail(e.target.value)} />
                  <label class="form-label" for="form1Example13">Email address</label>
                </div>

                {/* Password input */}
                <div class="form-outline mb-4">
                  <input type="password" id="form1Example23" class="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)} />
                  <label class="form-label" for="form1Example23">Password</label>
                </div>



                {/* Submit button */}
                <button type="button" onClick={handleSubmit} class="btn btn-primary btn-lg btn-block">Sign in</button>



              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Login End */}
    </>
  );
}

export default DoctorLogin;
