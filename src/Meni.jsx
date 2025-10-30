import React from 'react'
import '../css/bootstrap.min.css'
import '../css/bootstrap-icons.css'
import '../css/slick.css'
import '../css/style.css'
import '../js/bootstrap.bundle.min.js'
import '../css/meni.css'
import { useNavigate} from "react-router-dom";

function Meni() {
    const navigate=useNavigate();

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
                                <button className="nav-link active" onClick={() => navigate('/Meni')}>Meni</button>
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


                <section className="jelovnik-section-padding">

                    <div className="jelovnik-row1">
                        <div className="naslov"><h2>NAŠ MENI</h2></div>
                        <div className="jelovnik-col-12">
                            <h4 className="mb-5">PIZZA</h4>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/quatrof.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Margarita</h5>
                                    <p>paradajz sos┃sir┃bosiljak</p>
                                    <p className="cijena">Mala: 6KM Velika: 8KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/salami.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Salami</h5>
                                    <p>paradajz sos┃sir┃pileća šunka</p>
                                    <p className="cijena">Mala: 7KM Velika: 9KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/fungi.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Funghi</h5>
                                    <p>paradajz sos┃sir┃gljive</p>
                                    <p className="cijena">Mala: 7KM Velika: 9KM</p>
                                </div>
                            </div>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/capriccosa.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Capriccosa</h5>
                                    <p>paradajz sos┃sir┃pileća šunka┃gljive</p>
                                    <p className="cijena">Mala: 8KM Velika: 10KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/quatros.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Quatro Stagione</h5>
                                    <p>pileća šunka┃gljive┃masline</p>
                                    <p className="cijena">Mala: 9KM Velika: 11KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/quatrof.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Quatro Formaggi</h5>
                                    <p>mozzarella┃gorgonzola┃parmezan┃pecorino┃paradajz</p>
                                    <p className="cijena">Mala: 9KM Velika: 11KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/meks.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Mexico</h5>
                                    <p>paradajz sos┃sir┃feferon</p>
                                    <p className="cijena">Mala: 8KM Velika: 10KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/tono.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Al Tonno</h5>
                                    <p>paradajz sos┃sir┃tunjevina┃crveni luk</p>
                                    <p className="cijena">Mala: 9KM Velika: 11KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/dimare.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Frutti di Mare</h5>
                                    <p>paradajz sos┃sir┃morski plodovi</p>
                                    <p className="cijena">Mala: 10KM Velika: 12KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/vegetariana.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Vegetariana</h5>
                                    <p>paradajz sos┃sir┃paprika┃paradajz┃tikvica</p>
                                    <p className="cijena">Mala: 7KM Velika: 9KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/salmone.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Al Salmone</h5>
                                    <p>paradajz sos┃sir┃losos</p>
                                    <p className="cijena">Mala: 10KM Velika: 12KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/diavolo.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Diavolo</h5>
                                    <p>paradajz sos┃sir┃čili pahuljice</p>
                                    <p className="cijena">Mala: 7KM Velika: 9KM</p>
                                </div>
                            </div>
                        </div>


                        <div className="jelovnik-col-12">
                            <h4 className="mb-5">PASTA</h4>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/arabiatta.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Arabiatta</h5>
                                    <p>paradajz┃bijeli luk┃čili paprika</p>
                                    <p className="cijena">8KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/carbonara.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Alla Carbonara</h5>
                                    <p>pileća šunka┃suho meso</p>
                                    <p className="cijena">9KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/pastaqf.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Quatro Formaggi</h5>
                                    <p>mozzarella┃gorgonzola┃parmezan┃pecorino</p>
                                    <p className="cijena">8KM</p>
                                </div>
                            </div>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/dimarepasta.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Al Frutti di Mare</h5>
                                    <p>morski plodovi</p>
                                    <p className="cijena">12KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/pomodoro.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Al Pomodoro</h5>
                                    <p>paradajz┃bijeli luk</p>
                                    <p className="cijena">7KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/tonopasta.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Al Tono</h5>
                                    <p>tunjevina┃luk</p>
                                    <p className="cijena">9KM</p>
                                </div>
                            </div>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/caballo.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Caballo</h5>
                                    <p>piletina curry</p>
                                    <p className="cijena">9KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/sef.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Dello Chef</h5>
                                    <p>sezonsko povrće┃ljuto ulje</p>
                                    <p className="cijena">9KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/bistecca.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Bistecca</h5>
                                    <p>biftek</p>
                                    <p className="cijena">15KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/verdurap.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Con Panna e Verdura</h5>
                                    <p>sezonsko povrće</p>
                                    <p className="cijena">8KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/funghipasta.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Al Funghi</h5>
                                    <p>gljive</p>
                                    <p className="cijena">8KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/salmonepasta.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Al Salmone</h5>
                                    <p>losos</p>
                                    <p className="cijena">12KM</p>
                                </div>
                            </div>
                        </div>


                        <div className="jelovnik-col-12">
                            <h4 className="mb-5">SALATA</h4>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/insalata.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Insalata Mista</h5>
                                    <p>miješana salata</p>
                                    <p className="cijena">6KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/salata.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Salata sa mozzarelom i paradajzom</h5>
                                    <p>mozzarella┃paradajz</p>
                                    <p className="cijena">10KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/pilecasalata.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Pileća salata</h5>
                                    <p>piletina┃paradajz┃krastavica┃paprika</p>
                                    <p className="cijena">10KM</p>
                                </div>
                            </div>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/salatatuna.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Salata s tunjevinom</h5>
                                    <p>tunjevina┃paradajz┃krastavica</p>
                                    <p className="cijena">10KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/salatamore.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Salata sa morskim plodovima</h5>
                                    <p>morski plodovi┃paradajz┃krastavica</p>
                                    <p className="cijena">12KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/pastaramstek.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Salata sa ramstekom</h5>
                                    <p>ramstek┃paradajz┃krastavica</p>
                                    <p className="cijena">13KM</p>
                                </div>
                            </div>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/pastabiftek.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Salata sa biftekom</h5>
                                    <p>biftek┃paradajz┃krastavica</p>
                                    <p className="cijena">15KM</p>
                                </div>
                            </div>

                        </div>


                        <div className="jelovnik-col-12">
                            <h4 className="mb-5">GLAVNO JELO</h4>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/lignje.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Lignje sa žara</h5>
                                    <p>lignje┃povrće</p>
                                    <p className="cijena">22KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/losos.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>File lososa</h5>
                                    <p>losos┃povrće</p>
                                    <p className="cijena">22KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/ramstekputer.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Ramstek u puter sosu</h5>
                                    <p>ramstek┃povrće┃puter sos</p>
                                    <p className="cijena">20KM</p>
                                </div>
                            </div>
                        </div>

                        <div className="red">
                            <div className="jedan">
                                <img src="../images/ramstekpeper.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Ramstek u peper sosu</h5>
                                    <p>ramstek┃povrće┃peper sos</p>
                                    <p className="cijena">22KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/lazanje.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Lazanje</h5>
                                    <p>ragu</p>
                                    <p className="cijena">9KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/piletinagrill.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Pohovana piletina grill</h5>
                                    <p>pileći file┃povrće</p>
                                    <p className="cijena">13KM</p>
                                </div>
                            </div>
                        </div>


                        <div className="red">
                            <div className="jedan">
                                <img src="../images/piletinasusam.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Pohovana piletina sa susamom</h5>
                                    <p>pileći file sa susamom┃povrće</p>
                                    <p className="cijena">14KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/verdura.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Verdura</h5>
                                    <p>prženo povrće</p>
                                    <p className="cijena">9KM</p>
                                </div>
                            </div>
                            <div className="jedan">
                                <img src="../images/steak.jpg" alt=""/>
                                <div className="tekst">
                                    <h5>Steak House</h5>
                                    <p>biftek┃povrće</p>
                                    <p className="cijena">35KM</p>
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

export default Meni;