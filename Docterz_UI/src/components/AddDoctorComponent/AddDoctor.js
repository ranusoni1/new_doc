import './AddDoctor.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurldoctor } from '../../api_urldoctor';


function AddDoctor() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [experience, setExperience] = useState();
  const [specialization, setSpecialization] = useState();
  const [designation, setDesignation] = useState();
  const [personalmobile, setPersonalMobile] = useState();
  const [clinicmobile, setClinicMobile] = useState();
  const [clinicaddress, setClinicAddress] = useState();
  const [residentialaddress, setResidentialAddress] = useState();
  const [contactdescription, setContctDescription] = useState();
  const [file, setFile] = useState();
  const [output, setOutput] = useState();


  const handleChange = (event) => {
    setFile(event.target.files[0])
  }


  const handleSubmit = () => {
    var formdata = new FormData
    formdata.append("name", name)
    formdata.append("email", email)
    formdata.append("experience", experience)
    formdata.append("specialization", specialization)
    formdata.append("designation", designation)
    formdata.append("personalmobile", personalmobile)
    formdata.append("clinicmobile", clinicmobile)
    formdata.append("clinicaddress", clinicaddress)
    formdata.append("residentialaddress", residentialaddress)
    formdata.append("contactdescription", contactdescription)
    formdata.append("profilepic", file)

    const config = { 'content-type': 'multipart/form-data' };

    axios.post(_apiurldoctor + "save", formdata, config).then((result) => {
      setName("");
      setEmail("");
      setExperience("")
      setSpecialization("")
      setDesignation("")
      setClinicAddress("");
      setResidentialAddress("");
      setPersonalMobile("")
      setClinicMobile("");
      setContctDescription("")
      setFile("")
      setOutput("user register successfully.... ")

    }).catch((error) => {
      setOutput("Doctor registration failed....");
    });


    /*const userDetails = {
      "name": name, "email": email,"experience":experience, "specialization": specialization, "designation": designation, "personalmobile": personalmobile, "clinicmobile": clinicmobile, "clinicaddress": clinicaddress, "residentialaddress": residentialaddress, "contactdescription": contactdescription
    };
    console.log(userDetails);

    axios.post(_apiurldoctor + "save", userDetails).then((result) => {
      setName("");
      setEmail("");
      setExperience("")
      setSpecialization("")
      setDesignation("")
      setClinicAddress("");
      setResidentialAddress("");
      setPersonalMobile("")
      setClinicMobile("");
      setContctDescription("")
      setOutput("user register successfully.... ")

    }).catch((error) => {
      setOutput("user registertration failed.... ")
    })

    */

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
                      <h3 class="mb-5 text-uppercase">Doctors Registertration Form</h3>
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
                        <input type="text" id="form3Example97" class="form-control form-control-lg" value={experience} onChange={e => setExperience(e.target.value)} />
                        <label class="form-label" for="form3Example97">Experience</label>
                      </div>


                      <div class="row">
                        <div class="col-md-6 mb-4">

                          <select class="select" value={specialization} onChange={e => setSpecialization(e.target.value)}>
                            <option value="1">Specialization</option>
                            <option value="General physician">General physician</option>
                            <option value="General surgery">General surgery</option>
                            <option value="Otorhinolaryngology">Otorhinolaryngology</option>
                            <option value="Pathology">Pathology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Urology">Urology</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Internal medicine">Internal medicine</option>
                            <option value="Gastroenterology">Gastroenterology</option>
                            <option value="Cardiology">Cardiology</option>
                          </select>



                        </div>
                      </div>



                      <div class="row">
                        <div class="col-md-6 mb-4">

                          <select class="select" value={designation} onChange={e => setDesignation(e.target.value)}>
                            <option value="1">Designation</option>
                            <option value="MBBS">MBBS</option>
                            <option value="MS">MS</option>
                            <option value="MD">MD</option>
                            <option value="BAMS">BAMS</option>
                            <option value=" BHMS">BHMS</option>
                            <option value=" BPT">BPT</option>
                            <option value="BUMS">BUMS</option>

                          </select>



                        </div>
                      </div>




                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example97" class="form-control form-control-lg" value={personalmobile} onChange={e => setPersonalMobile(e.target.value)} />
                        <label class="form-label" for="form3Example97">Personal Mobile</label>
                      </div>




                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example97" class="form-control form-control-lg" value={clinicmobile} onChange={e => setClinicMobile(e.target.value)} />
                        <label class="form-label" for="form3Example97">Clinic Mobile</label>
                      </div>


                      {/* <div>
                        <label for="file">Profile Pic. :</label>
                        <input type="file" class="form-control" onChange={handleChange} />
                      </div> */}



                      <div class="form-outline mb-4">
                        <input type="file" id="form3Example97" class="form-control form-control-lg"  onChange={handleChange} />
                        <label class="form-label" for="file">profile pic</label>
                      </div>


                      <div class="form-outline mb-4">

                        <textarea class="form-control" rows="3" placeholder="Type address here ..." value={clinicaddress} onChange={e => setClinicAddress(e.target.value)} ></textarea>
                        <label class="form-label" for="form3Example8">Clinic Address</label>
                      </div>


                      <div class="form-outline mb-4">

                        <textarea class="form-control" rows="3" placeholder="Type address here ..." value={residentialaddress} onChange={e => setResidentialAddress(e.target.value)} ></textarea>
                        <label class="form-label" for="form3Example8">Residential Address</label>
                      </div>


                      <div class="form-outline mb-4">

                        <textarea class="form-control" rows="3" placeholder="Type address here ..." value={contactdescription} onChange={e => setContctDescription(e.target.value)} ></textarea>
                        <label class="form-label" for="form3Example8">Contact Description</label>
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
      </section >
      {/* Register End */}
    </>
  );
}

export default AddDoctor;
