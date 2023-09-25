import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../api_url';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [output, setOutput] = useState();
  const navigate = useNavigate();


  const handleSubmit = () => {
    const userDetails = { "email": email, "password": password, }

    axios.post(_apiurluser + "login", userDetails).then((result) => {
      const obj = result.data;

      localStorage.setItem("token", obj.token);
      localStorage.setItem("_id", obj.userdetails._id);
      localStorage.setItem("name", obj.userdetails.name);
      localStorage.setItem("email", obj.userdetails.email);
      localStorage.setItem("mobile", obj.userdetails.mobile);
      localStorage.setItem("address", obj.userdetails.address);
      localStorage.setItem("city", obj.userdetails.city);
      localStorage.setItem("gender", obj.userdetails.gender);
      localStorage.setItem("role", obj.userdetails.role);
      localStorage.setItem("info", obj.userdetails.info);

    (obj.userdetails.role == "admin")? navigate("/admin") : navigate("/user")

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
              <h3 class="mb-5 text-uppercase">User Login Form</h3>
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

export default Login;
