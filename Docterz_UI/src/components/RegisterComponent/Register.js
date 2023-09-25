import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../api_url';


function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    const userDetails = {
      "name": name, "email": email, "password": password,
      "gender": gender, "mobile": mobile, "address": address, "city": city
    };
    console.log(userDetails);

    axios.post( _apiurluser+"save", userDetails).then((result) => {
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setCity("");
      setGender("");
      setMobile("");
      setOutput("user register successfully.... ")

    }).catch((error) => {
      setOutput("user registertration failed.... ")
    })


  }

  return (
    <>
      {/* Register Start */}
      <section class="h-100 bg-dark">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo" class="img-fluid"
                      style={{ "border-top-left-radius": ".25rem", "border-bottom-left-radius": ".25rem" }} />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                      <h3 class="mb-5 text-uppercase">Registration form</h3>
                      <font color="blue">{output}</font>

                      <div class="row">
                        <div class="form-outline mb-4">
                          <div class="form-outline">
                            <input type="text" id="form3Example1m" class="form-control form-control-lg" value={name} onChange={e => setName(e.target.value)} />
                            <label class="form-label" for="form3Example1m">Name</label>
                          </div>
                        </div>

                      </div>

                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example97" class="form-control form-control-lg" value={email} onChange={e => setEmail(e.target.value)} />
                        <label class="form-label" for="form3Example97">Email ID</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="form3Example97" class="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)} />
                        <label class="form-label" for="form3Example97">Password</label>
                      </div>



                      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 class="mb-0 me-4">Gender: </h6>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="female" onChange={e => setGender(e.target.value)} />
                          <label class="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="male" onChange={e => setGender(e.target.value)} />
                          <label class="form-check-label" for="maleGender">Male</label>
                        </div>


                      </div>



                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example97" class="form-control form-control-lg" value={mobile} onChange={e => setMobile(e.target.value)} />
                        <label class="form-label" for="form3Example97">Phone Number</label>
                      </div>

                      <div class="form-outline mb-4">

                        <textarea class="form-control" rows="3" placeholder="Type address here ..." value={address} onChange={e => setAddress(e.target.value)} ></textarea>
                        <label class="form-label" for="form3Example8">Address</label>
                      </div>



                      <div class="row">
                        <div class="col-md-6 mb-4">

                        <select class="select" value={city} onChange={e => setCity(e.target.value)}>
                            <option value="1">City</option>
                            <option value="Indore">Indore</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Gwalior">Gwalior</option>
                            <option value="Tikamgarh">Tikamgarh</option>
                          </select>

                        

                        </div>
                      </div>



                      





                      <div class="d-flex justify-content-end pt-3">
                        <button type="button" onClick={handleSubmit} class="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Register End */}
    </>
  );
}

export default Register;
