import React, {useState} from 'react'
import '../css/bootstrap.min.css'
import '../css/bootstrap-icons.css'
import '../css/slick.css'
import '../css/style.css'
import '../js/bootstrap.bundle.min.js'
import { useNavigate} from "react-router-dom";

function Kontakt() {
    const [imeKontakt, setImeKontakt] = useState("");
    const [emailKontakt, setEmailKontakt] = useState("");
    const [subjekatKontakt, setSubjekatKontakt] = useState("");
    const [porukaKontakt, setPorukaKontakt] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

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
    async function slanjePodatakaNaServer(event) {
        event.preventDefault();

        fetch('http://localhost:3000/porukeKontakt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imeKontakt, emailKontakt, subjekatKontakt, porukaKontakt}),
        })
            .then(response => response.json())
            .then(data => {
                alert('USPJEŠNO STE NAS KONTAKTIRALI!');
                setErrorMessage("");
            })
            .catch(error => {
                console.error('Desila se greška prilikom slanja: ', error);
                setErrorMessage("Desila se greška prilikom slanja podataka.");
            });
        navigate('/Kontakt');
    }

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
                                    <button className="nav-link" onClick={() => navigate('/')}>Početna</button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => navigateAndScroll('/#section1', 'section1')}>O nama</button>
                                </li>


                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => navigate('/Meni')}>Meni</button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link active" onClick={() => navigate('/Kontakt')}>Kontakt</button>
                                </li>
                            </ul>

                            <div className="d-none d-lg-block">
                                {/* SIGN IN HTML */}
                                <button className="bi-person custom-icon me-3" onClick={() => navigate('/SignIn')}></button>

                            </div>
                        </div>
                    </div>
                </nav>

                <header className="site-header section-padding-img site-header-image">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-10 col-12 header-info">
                                <h1>
                                    <span className="d-block text-primary">Posjetite nas</span>
                                    <span className="d-block text-dark">Ostanimo u <br/>kontaktu</span>
                                </h1>
                            </div>
                            <div className="col-lg-10 col-12 header-info">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11442.017462325743!2d17.9061536!3d44.1966776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee26a8bdb698f%3A0x8b1ac176a1563b1d!2sCaballo!5e0!3m2!1sen!2sba!4v1716322488213!5m2!1sen!2sba"
                                    width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="header-image img-fluid"></iframe>
                            </div>
                        </div>
                    </div>

                </header>

                <section className="contact section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-12">
                                <h2 className="mb-4">Javite <span>nam se</span></h2>

                                <form role="form"method="post" onSubmit={slanjePodatakaNaServer}>

                                    <div className="form-floating">
                                        <input type="imeKontakt" name="imeKontakt" id="imeKontakt" className="form-control"
                                               placeholder="Ime" required
                                               onChange={(event) => setImeKontakt(event.target.value)}
                                        />
                                        <label htmlFor="imeKontakt">Ime</label>
                                    </div>

                                    <div className="form-floating my-4">
                                        <input type="emailKontakt" name="emailKontakt" id="emailKontakt" pattern="[^ @]*@[^ @]*"
                                               className="form-control" placeholder="Email" required
                                               onChange={(event) => setEmailKontakt(event.target.value)}
                                        />
                                        <label htmlFor="emailKontakt">Email</label>
                                    </div>

                                    <div className="form-floating my-4">
                                        <input type="subjekatKontakt" name="subjekatKontakt" id="subjekatKontakt" className="form-control"
                                               placeholder="Subjekat" required
                                               onChange={(event) => setSubjekatKontakt(event.target.value)}
                                        />
                                        <label htmlFor="subjekatKontakt">Subjekat</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <textarea id="porukaKontakt" name="porukaKontakt" className="form-control"
                                                  placeholder="Poruka..." required style={{height: "160px"}}
                                                  onChange={(event) => setPorukaKontakt(event.target.value)}
                                        ></textarea>

                                        <label htmlFor="porukaKontakt">Poruka...</label>
                                    </div>

                                    <div className="col-lg-5 col-6">
                                        <button type="submit" className="form-control">Pošalji</button>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-6 col-12 mt-5 ms-auto">
                                <div className="row">
                                    <div className="col-6 border-end contact-info">
                                        <h6 className="mb-3">Naša email adresa:</h6>

                                        <a href="mailto:restoran.caballo@gmail.com" className="custom-link">
                                            restoran.caballo@gmail.com
                                            <i className="bi-arrow-right ms-2"></i>
                                        </a>
                                    </div>

                                    <div className="col-6 contact-info">
                                        <h6 className="mb-3">Naš broj telefona:</h6>
                                        <p className="text-muted">032 462-223</p>

                                    </div>

                                    <div className="col-6 border-top border-end contact-info">
                                        <h6 className="mb-3">Adresa:</h6>

                                        <p className="text-muted">Štrosmajerova, Zenica</p>
                                    </div>

                                    <div className="col-6 border-top contact-info">
                                        <h6 className="mb-3">Socijalne mreže:</h6>

                                        <ul className="social-icon">

                                            <li><a href="https://www.facebook.com/pizzacaballo/?locale=hr_HR"
                                                   target="_blank" className="social-icon-link bi-facebook"></a></li>

                                            <li><a href="#" className="social-icon-link bi-whatsapp"
                                                   target="_blank"></a></li>

                                            <li><a href="https://www.instagram.com/caballo.pizzeria/"
                                                   className="social-icon-link bi-instagram" target="_blank"></a></li>
                                        </ul>
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
                            <h4 style={{color: "white"}}>Pronađite nas:</h4>
                            <br/>
                            <p>
                                Adresa: Štrosmajerova, Zenica<br/>
                                Telefon: 032 462-223 <br/>
                                Email: restoran.caballo@gmail.com

                            </p>

                        </div>


                        <div className="col-lg-3 col-4">
                            <h5 className="text-white mb-3">Pronađite nas i na društvenim mrežama</h5>

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
export default Kontakt;

