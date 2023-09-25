import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from '../AuthComponent/Auth'

function Header() {

    const [HeaderContent, setHeaderContent] = useState();

    useEffect(() => {
        if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin")
            setHeaderContent(<>

                {/* Header Start */}
                <div class="container-fluid bg-dark px-0">
                    <div class="row gx-0">
                        <div class="col-lg-3 bg-da d-none d-lg-block">
                            <a href="" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <h1 class="m-0 text-primary text-uppercase">Docterz</h1>
                            </a>
                        </div>
                        <div class="col-lg-9">
                            <div class="row gx-0 bg-white d-none d-lg-flex">
                                <div class="col-lg-7 px-5 text-start">
                                    <div class="h-100 d-inline-flex align-items-center py-2 me-4">

                                        <p class="mb-0">Welcome Admin</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center py-2">

                                        <p class="mb-0">{localStorage.getItem("email")}</p>
                                    </div>
                                </div>

                            </div>
                            <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="index.html" class="navbar-brand d-block d-lg-none">
                                    <h1 class="m-0 text-primary text-uppercase">Hotelier</h1>
                                </a>
                                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div class="navbar-nav mr-auto py-0">
                                        <a class="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>
                                        <a class="nav-item nav-link">< Link to="/manageuser">ManageUser</Link></a>

                                        <div class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">< Link to="#">Doctors</Link></a>
                                                <div class="dropdown-menu rounded-0 m-0">
                                                    <a
                                                        class="dropdown-item"><Link to="/adddoctor">Add Doctor</Link></a>
                                                    <a class="dropdown-item"><Link to="/managedoctor">manage Doctor</Link></a>
                                                    <a class="dropdown-item"><Link to="/doctors">#######</Link></a>
                                                </div>
                                            </div>

                                        <div class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">< Link to="#">Setting</Link></a>
                                                <div class="dropdown-menu rounded-0 m-0">
                                                    <a
                                                        class="dropdown-item"><Link to="/epadmin">Edit Profile</Link></a>
                                                    <a class="dropdown-item"><Link to="/cpadmin">Change Password</Link></a>
                                                    <a class="dropdown-item"><Link to="/doctors">Your Appointments</Link></a>
                                                </div>
                                            </div>

                                            
                                        <a class="nav-item nav-link">< Link to="/logout">Logout</Link></a>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </>);

        else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user")

            setHeaderContent

                (<>

                    {/* Header Start */}
                    <div class="container-fluid bg-dark px-0">
                        <div class="row gx-0">
                            <div class="col-lg-3 bg-da d-none d-lg-block">
                                <a href="" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                    <h1 class="m-0 text-primary text-uppercase">Docterz</h1>
                                </a>
                            </div>
                            <div class="col-lg-9">
                                <div class="row gx-0 bg-white d-none d-lg-flex">
                                    <div class="col-lg-7 px-5 text-start">
                                        <div class="h-100 d-inline-flex align-items-center py-2 me-4">

                                            <p class="mb-0">Welcome User</p>
                                        </div>
                                        <div class="h-100 d-inline-flex align-items-center py-2">

                                            <p class="mb-0">{localStorage.getItem("email")}</p>
                                        </div>
                                    </div>

                                </div>
                                <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                    <a href="index.html" class="navbar-brand d-block d-lg-none">
                                        <h1 class="m-0 text-primary text-uppercase">Doctorz</h1>
                                    </a>
                                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                        <div class="navbar-nav mr-auto py-0">
                                            <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>

                                            <div class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">< Link to="#">Setting</Link></a>
                                                <div class="dropdown-menu rounded-0 m-0">
                                                    <a
                                                        class="dropdown-item"><Link to="/epuser">Edit Profile</Link></a>
                                                    <a class="dropdown-item"><Link to="/cpuser">Change Password</Link></a>
                                                    
                                                </div>
                                            </div>

                                            
                                            <a class="nav-item nav-link">< Link to="/logout">Logout</Link></a>

                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Header End */}
                </>);

else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "doctor")

            setHeaderContent

                (<>

                    {/* Header Start */}
                    <div class="container-fluid bg-dark px-0">
                        <div class="row gx-0">
                            <div class="col-lg-3 bg-da d-none d-lg-block">
                                <a href="" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                    <h1 class="m-0 text-primary text-uppercase">Docterz</h1>
                                </a>
                            </div>
                            <div class="col-lg-9">
                                <div class="row gx-0 bg-white d-none d-lg-flex">
                                    <div class="col-lg-7 px-5 text-start">
                                        <div class="h-100 d-inline-flex align-items-center py-2 me-4">

                                            <p class="mb-0">Welcome Doctor</p>
                                        </div>
                                        <div class="h-100 d-inline-flex align-items-center py-2">

                                            <p class="mb-0">{localStorage.getItem("email")}</p>
                                        </div>
                                    </div>

                                </div>
                                <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                    <a href="index.html" class="navbar-brand d-block d-lg-none">
                                        <h1 class="m-0 text-primary text-uppercase">Doctorz</h1>
                                    </a>
                                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                        <div class="navbar-nav mr-auto py-0">
                                            <a class="nav-item nav-link active"><Link to="/user">Doctor Home</Link></a>

                                            <div class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">< Link to="#">Setting</Link></a>
                                                <div class="dropdown-menu rounded-0 m-0">
                                                    <a
                                                        class="dropdown-item"><Link to="/epdoctor">Edit Profile</Link></a>
                                                    <a class="dropdown-item"><Link to="/cpdoctor">Change Password</Link></a>
                                                    
                                                </div>
                                            </div>

                                            
                                            <a class="nav-item nav-link">< Link to="/logout">Logout</Link></a>

                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Header End */}
                </>);



        else
            setHeaderContent(
                <>

                    {/* Header Start */}
                    <div class="container-fluid bg-dark px-0">
                        <div class="row gx-0">
                            <div class="col-lg-3 bg-da d-none d-lg-block">
                                <a href="" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                    <h1 class="m-0 text-primary text-uppercase">Docterz</h1>
                                </a>
                            </div>
                            <div class="col-lg-9">
                                <div class="row gx-0 bg-white d-none d-lg-flex">
                                    <div class="col-lg-7 px-5 text-start">
                                        <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                            <i class="fa fa-envelope text-primary me-2"></i>
                                            <p class="mb-0">info@example.com</p>
                                        </div>
                                        <div class="h-100 d-inline-flex align-items-center py-2">
                                            <i class="fa fa-phone-alt text-primary me-2"></i>
                                            <p class="mb-0">xxx xxx xxx</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 px-5 text-end">
                                        <div class="d-inline-flex align-items-center py-2">
                                            <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                            <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                            <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                            <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                            <a class="" href=""><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                    <a href="index.html" class="navbar-brand d-block d-lg-none">
                                        <h1 class="m-0 text-primary text-uppercase">Docterz</h1>
                                    </a>
                                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                        <div class="navbar-nav mr-auto py-0">
                                            <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                                            <a class="nav-item nav-link">< Link to="/about">About</Link></a>
                                            <a class="nav-item nav-link"><Link to="/service">Services</Link></a>


                                            <div class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">< Link to="#">Pages</Link></a>
                                                <div class="dropdown-menu rounded-0 m-0">
                                                    <a
                                                        class="dropdown-item"><Link to="/blogs">Blogs</Link></a>
                                                    <a class="dropdown-item"><Link to="/portfolio">Portfolio</Link></a>
                                                    <a class="dropdown-item"><Link to="/doctors">Doctors</Link></a>
                                                </div>
                                            </div>


                                            <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                                            <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                                            <a class="nav-item nav-link"><Link to="/login">Login</Link></a>
                                            <a class="nav-item nav-link"><Link to="/doctorlogin">Doctor Login</Link></a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Header End */}
                </>
            );

    })


    return (
        <>  
            <Auth />
            {HeaderContent}
        </>
    );


}

export default Header;
