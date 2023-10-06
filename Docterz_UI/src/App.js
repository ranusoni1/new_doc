import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/HeaderComponent/Header';
import Banner from './components/BannerComponent/Banner';
import Main from './components/MainComponent/Main';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Verifyuser from './components/VerifyuserComponent/Verifyuser'
import Login from './components/LoginComponent/Login';
import AdminHome from './components/adminhomeComponent/adminhomeComponent';
import CpAdmin from './components/CpAdminComponent/CpAdminComponent';
import UserHome from './components/userhomeComponent/userhomeComponent';
import CpUser from './components/CpUserComponent/CpUserComponent';
import ManageUser from './components/ManageUser/ManageUser';
import Logout from './components/LogoutComponent/Logout';
import Testimonial from './components/TestimonialComponent/Testimonial';
import Team from './components/teamComponent/Team';
import Footer from './components/FooterComponent/Footer';
import EPadmin from './components/EpAdminComponent/EpAdminComponent';
import EPuser from './components/EpUserComponent/EpUserComponent';
import AddDoctor from './components/AddDoctorComponent/AddDoctor';
import DoctorHome from './components/doctorhomeComponent/doctorhomeComponent'
import ManageDoctor from './components/ManageDoctor/ManageDoctor';
import VerifyDoctor from './components/VerifydoctorComponent/Verifydoctor'
import DoctorLogin from './components/doctorLoginComponent/doctorLogin';
import EPdoctor from './components/EpDoctorComponent/EpDoctorComponent';
import CPDoctor from './components/CpDoctorComponent/CpDoctorComponent';

function App() {
    return (
        <>

            <Header />
            <Banner />


            <Routes>
                <Route path="/" element={<Main />}></Route>;
                <Route path="/about" element={<About />}></Route>;
                <Route path="/contact" element={<Contact />} ></Route>;
                <Route path="/service" element={<Service />} ></Route>;
                <Route path="/register" element={<Register />} ></Route>;
                <Route path="/verifyuser/:email" element={<Verifyuser />} ></Route>;
                <Route path="/login" element={<Login />} ></Route>;
                <Route path="/manageuser" element={<ManageUser />} ></Route>;
                <Route path="/doctor" element={<DoctorHome />} ></Route>;
                <Route path="/epAdmin" element={<EPadmin/>}></Route>
                <Route path="/cpadmin" element={<CpAdmin />} ></Route>;
                <Route path="/logout" element={<Logout />}></Route>
                <Route path="/admin" element={<AdminHome />}></Route>;
                <Route path="/user" element={<UserHome />}></Route>;
                <Route path="/cpuser" element={<CpUser />}></Route>;
               <Route path="/epuser" element={<EPuser/>}></Route>
               <Route path="/adddoctor" element={<AddDoctor/>}></Route>
               <Route path="/managedoctor" element={<ManageDoctor/>}></Route>
               <Route path="/verifydoctor/:email" element={<VerifyDoctor/>}></Route>
               <Route path="/doctorlogin" element={<DoctorLogin/>}></Route>
               <Route path="/epdoctor" element={<EPdoctor/>}></Route>
               <Route path="/cpdoctor" element={<CPDoctor/>}></Route>
               
            </Routes>
            
            


            <Testimonial />
            <Team />
            <Footer />

        </>
    );
}

export default App;
