import React from 'react'
import '../css/bootstrap.min.css'
import '../css/bootstrap-icons.css'
import '../css/slick.css'
import '../css/style.css'
import '../js/bootstrap.bundle.min.js'
import { useNavigate} from "react-router-dom";
import {useState} from "react";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imePrezime, setImePrezime] = useState("");
    const [telefon, setTelefon] = useState("");
    const [adresa, setAdresa] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function provjeriPostojeciKorisnik(email) {
        return fetch('http://localhost:3000/korisnici')
            .then(response => response.json())
            .then(data => {
                return data.some(user => user.email === email);
            })
            .catch(error => {
                console.error('Desila se greška prilikom provjere: ', error);
                return false;
            });
    }

    async function slanjePodatakaNaServer(event) {
        event.preventDefault();

        const postoji = await provjeriPostojeciKorisnik(email);
        if (postoji) {
            setErrorMessage("Račun već postoji.");
            return;
        }

        fetch('http://localhost:3000/korisnici', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, admin: false, imePrezime, telefon, adresa}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Login podaci poslani na server: ', data);
                setErrorMessage("");
            })
            .catch(error => {
                console.error('Desila se greška prilikom slanja: ', error);
                setErrorMessage("Desila se greška prilikom slanja podataka.");
            });
        navigate('/SignIn');
    }

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
                                    <button className="nav-link" onClick={() => navigate('/')}>Početna</button>
                                </li>


                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => navigateAndScroll('/#section1', 'section1')}>O nama</button>
                                </li>


                                <li className="nav-item">
                                <button className="nav-link" onClick={() => navigate('/Meni')}>Meni</button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link active" onClick={() => navigate('/Kontakt')}>Kontakt
                                    </button>
                                </li>
                            </ul>

                            <div className="d-none d-lg-block">
                                {/* SIGN IN HTML */}
                                <button className="bi-person custom-icon me-3" onClick={() => navigate('/SignIn')}></button>

                            </div>
                        </div>
                    </div>
                </nav>

                <section className="sign-in-form section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 mx-auto col-12">

                                <h1 className="hero-title text-center mb-5">Registracija</h1>

                                <div className="row">
                                    <div className="col-lg-8 col-11 mx-auto">
                                        <form role="form" method="post" onSubmit={slanjePodatakaNaServer}>

                                            <div className="form-floating">
                                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*"
                                                       className="form-control" placeholder="Email address" required
                                                       onChange={(event) => setEmail(event.target.value)}
                                                />

                                                <label htmlFor="email">Email</label>
                                            </div>

                                            <div className="form-floating my-4">
                                                <input type="password" name="password" id="password"
                                                       className="form-control" placeholder="Password" required
                                                       onChange={(event) => setPassword(event.target.value)}
                                                />

                                                <label htmlFor="password">Lozinka</label>

                                            </div>
                                            <div className="form-floating mb-4 p-0">
                                                <input type="imePrezime" name="imePrezime" id="imePrezime"
                                                       className="form-control" placeholder="Ime i prezime" required
                                                       onChange={(event) => setImePrezime(event.target.value)}
                                                />

                                                <label htmlFor="imePrezime">Ime i prezime</label>
                                            </div>
                                            <div className="form-floating mb-4 p-0">
                                                <input type="telefon" name="telefon" id="telefon"
                                                       className="form-control" placeholder="Telefon" required
                                                       onChange={(event) => setTelefon(event.target.value)}
                                                />

                                                <label htmlFor="telefon">Telefon</label>
                                            </div>
                                            <div className="form-floating mb-4 p-0">
                                                <input type="adresa" name="adresa" id="adresa"
                                                       className="form-control" placeholder="Adresa" required
                                                       onChange={(event) => setAdresa(event.target.value)}
                                                />

                                                <label htmlFor="telefon">Adresa</label>
                                            </div>

                                            <button type="submit" className="btn custom-btn form-control mt-4 mb-3"
                                                    style={{width: "200px" }}>
                                                Registrirajte se
                                            </button>
                                            <br/>
                                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                                            <p className="text-center">Već imate račun?
                                                <button style={{marginLeft: "40%"}} className="nav-link"
                                                        onClick={() => navigate('/SignIn')}>Prijavite se</button>
                                            </p>

                                        </form>
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

export default SignUp;