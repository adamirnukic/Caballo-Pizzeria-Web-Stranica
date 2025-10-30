import React from 'react';
import '../css/bootstrap.min.css'
import '../css/bootstrap-icons.css'
import '../css/slick.css'
import '../css/style.css'
import '../js/bootstrap.bundle.min.js'
import { useNavigate} from 'react-router-dom';

function App() {
    const navigate= useNavigate();

    const navigateAndScroll = (path, hash) => {
        navigate(path);
        setTimeout(() => {
            if (hash) {
                const section = document.getElementById(hash);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 0);
    };

    return (
        <>

            <main>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <button className="navbar-brand" onClick={() => navigate('/')}>
                            <img src="../images/Caballologo.png" width="200px" alt=""/>
                        </button>




                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <button className="nav-link active" onClick={() => navigate('/')}>Početna</button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => navigateAndScroll('/#section1', 'section1')}>O nama</button>
                                </li>

                                <li className="nav-item">
                                <button className="nav-link" onClick={() => navigate('/Meni')}>Meni</button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => navigate('/Kontakt')}>Kontakt</button>
                                </li>
                            </ul>

                            <div className="d-none d-lg-block">
                                {/* SIGN IN HTML */}
                                <button className="bi-person custom-icon me-3" onClick={() => navigate('/SignIn')}></button>

                            </div>
                        </div>
                    </div>
                </nav>

                <section>
                <div className="slick-custom">
                        <img src="../images/pozadina1.jpg" height="100%" className="img-fluid" alt=""/>

                        <div className="slick-bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-10">
                                        <button className="btn custom-btn" onClick={() => navigate('/SignIn')}>Rezervacija</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                </section>


                <section className="about section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 text-center">
                                <h2 className="mb-5" id="section1">O NAMA</h2>
                            </div>

                            <div className="col-lg-2 col-12 mt-auto mb-auto">
                                <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center"
                                    id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-home" type="button" role="tab"
                                                aria-controls="pills-home" aria-selected="true">O restoranu
                                        </button>
                                    </li>


                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-skill-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-skill" type="button" role="tab"
                                                aria-controls="pills-skill" aria-selected="false">O kuharima
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-10 col-12">
                                <div className="tab-content mt-2" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                         aria-labelledby="pills-home-tab">

                                        <div className="row">
                                            <div className="col-lg-7 col-12">
                                                <img src="../images/caballorestoran.jpg" className="img-fluid" alt=""/>
                                            </div>

                                            <div className="col-lg-5 col-12">
                                                <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                                    <h4 className="mb-3">Restoran Caballo</h4>
                                                    <p><strong>"Začin sreće u Caballu se peče!"</strong></p>

                                                    <p>Ako ste posjetili neki od naših restorana, vidjeli ste - i
                                                        okusili - šta naše kupce vraća iznova. Savršene namirnice i
                                                        svježe pečena hrana, ukusni Lambda kolači, mafini i gurmanske
                                                        kafe čine nas neodoljivima!
                                                        Posjetite nas danas i uvjerite se sami!
                                                    </p>
                                                    <p>Adresa: Štrosmajerova, Zenica 72000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="tab-pane fade" id="pills-skill" role="tabpanel"
                                         aria-labelledby="pills-skill-tab">
                                        <div className="row">
                                            <div className="col-lg-7 col-12">
                                                <img src="../images/chef.jpg" className="img-fluid" alt=""/>
                                            </div>

                                            <div className="col-lg-5 col-12">
                                                <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                                    <h4 className="mb-3">Nisvet Kadrić</h4>

                                                    <p>Preko 30 godina iskustva u kulinarstvu. Od tradicionalnih jela do
                                                        moderne gastronomije, Nisvet majstorski kombinuje različite
                                                        ukuse i
                                                        tehnike kako bi kreirao nezaboravne obroke. Njegova posvećenost
                                                        kvalitetu
                                                        i svežim sastojcima garantuje
                                                        da svaki tanjir koji napusti našu kuhinju zadovoljava najviše
                                                        standarde.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>



            </main>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-10 me-auto mb-4">
                            <h4 style={{color: "white", paddingTop: "30px", fontWeight:"100"}}>Pronađite nas:</h4>
                            <br/>
                            <p>
                                Adresa: Štrosmajerova, Zenica<br/>
                                Telefon: 032 462-223 <br/>
                                Email: restoran.caballo@gmail.com

                            </p>

                        </div>


                        <div className="col-lg-3 col-4">
                            <h5 className="text-white mb-3" style={{paddingTop: "50px"}}>Pronađite nas i na društvenim mrežama</h5>

                            <ul className="social-icon">

                                <li><a href="https://www.facebook.com/pizzacaballo/?locale=hr_HR" target="_blank"
                                       className="social-icon-link bi-facebook"></a></li>

                                <li><a href="#" className="social-icon-link bi-whatsapp" target="_blank"></a></li>

                                <li><a href="https://www.instagram.com/caballo.pizzeria/"
                                       className="social-icon-link bi-instagram" target="_blank"></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>

            <script src="../js/jquery.min.js"></script>
            <script src="../js/bootstrap.bundle.min.js"></script>
            <script src="../js/Headroom.js"></script>
            <script src="../js/jQuery.headroom.js"></script>
            <script src="../js/slick.min.js"></script>
            <script src="../js/custom.js"></script>

        </>
    )
}
export default App;