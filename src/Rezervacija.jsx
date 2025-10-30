import React, {useState} from 'react'
import '../css/bootstrap.min.css'
import '../css/bootstrap-icons.css'
import '../css/slick.css'
import '../css/style.css'
import '../js/bootstrap.bundle.min.js'
import { useNavigate} from "react-router-dom";

function Rezervacija(){
    const [imePrezimeRezervacija, setImePrezimeRezervacija] = useState("");
    const [telefonRezervacija, setTelefonRezervacija] = useState("");
    const [datumRezervacija, setDatumRezervacija] = useState("");
    const [vrijemeRezervacija, setVrijemeRezervacija] = useState("");
    const [brojGostiju, setBrojGostiju] = useState("");
    const [posebniZahtjevi, setPosebniZahtjevi] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    async function slanjePodatakaNaServer(event) {
        event.preventDefault();

        fetch('http://localhost:3000/Rezervacije', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({imePrezimeRezervacija, telefonRezervacija, datumRezervacija, vrijemeRezervacija, brojGostiju, posebniZahtjevi}),
        })
            .then(response => response.json())
            .then(data => {
                alert('USPJEŠNO STE REZERVISALI! ');
                setErrorMessage("");
            })
            .catch(error => {
                console.error('Desila se greška prilikom slanja: ', error);
                setErrorMessage("Desila se greška prilikom slanja podataka.");
            });
        navigate('/Rezervacija');
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
                                    <button className="nav-link" onClick={() => navigate('/')}>Početna
                                    </button>
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

                <header className="site-header section-padding-img site-header-image">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-10 col-12 header-info">
                                <h1>
                                    Rezervacija
                                </h1>
                            </div>
                        </div>
                    </div>

                    <img src="images/rezervacija.jpg" className="header-image img-fluid" alt=""/>
                </header>

                <section className="contact section-padding">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-12">
                                <h2 className="mb-4">Napravi <span>rezervaciju</span></h2>

                                <form role="form" className="reservation-form" method="post" onSubmit={slanjePodatakaNaServer}>
                                    <div className="form-group">
                                        <label htmlFor="imePrezimeRezervacija">Ime i Prezime:</label>
                                        <input type="text" id="imePrezimeRezervacija" name="imePrezimeRezervacija" required
                                               onChange={(event) => setImePrezimeRezervacija(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefonRezervacija">Broj Telefona:</label>
                                        <input type="tel" id="telefonRezervacija" name="telefonRezervacija" required
                                               onChange={(event) => setTelefonRezervacija(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="datumRezervacija">Datum:</label>
                                        <input type="date" id="datumRezervacija" name="datumRezervacija" required
                                               onChange={(event) => setDatumRezervacija(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="vrijemeRezervacija">Vrijeme:</label>
                                        <input type="time" id="vrijemeRezervacija" name="vrijemeRezervacija" required
                                               onChange={(event) => setVrijemeRezervacija(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="brojGostiju">Broj Gostiju:</label>
                                        <select id="brojGostiju" name="brojGostiju" required
                                                onChange={(event) => setBrojGostiju(event.target.value)}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="posebniZahtjevi">Posebni Zahtjevi:</label>
                                        <textarea id="posebniZahtjevi" name="posebniZahtjevi" rows="4"
                                                  onChange={(event) => setPosebniZahtjevi(event.target.value)}
                                        ></textarea>
                                    </div>
                                    <button type="submit">Rezervišite</button>
                                </form>
                            </div>

                            <div className="col-lg-6 col-12 mt-5 ms-auto">
                                <img src="images/caballointerijer.jpg" height="600px" alt=""/>
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

export default Rezervacija;