import './EpAdminComponent.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { _apiurluser } from '../../api_url';
import { useNavigate } from 'react-router-dom';



function EPadmin() {

  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [fetchemail, setfetchemail] = useState(localStorage.getItem("email"));
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    axios.get(_apiurluser+"fetch?email="+fetchemail).then((result) => {
      setName(result.data[0].name)
      setMobile(result.data[0].mobile)
      setEmail(result.data[0].email);
      setAddress(result.data[0].address);
      setCity(result.data[0].city);
    }).catch((error) => {
      console.log(error);
    });
  });

  const handleSubmit = (() => {
    const updateAdmin = { "condition_obj": { "email": email }, "content_obj": { "name": name, "mobile": mobile, "city": city, "gender": gender, "address": address } }
    axios.patch(_apiurluser + "update", updateAdmin).then((Response) => {
      setOutput("Profile Details Update Successfully")
      setTimeout(() => {
        navigate("/admin");
      }, 3000); 
    })
  });
  


  return (
    <>
      {/* adminhome start */}
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
                      <h3 class="mb-5 text-uppercase">Edit Profile</h3>
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
      {/* adminhome End */}
    </>
  );
}

export default EPadmin;