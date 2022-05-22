import '../components/Header.css';
import logo from '../images/Eduvise-Logo.png'
import img2 from '../images/apresentacao2.png'
function Header() {
    return (
        <>
            <header>
                <div className='header__menu'>
                    <img src={logo} alt="Logotipo" />
                    <nav className='menu__principal'>
                        <li className='link__principal'> <a href="#">Home</a> </li>
                        <li className='link__secundario'><a href="#">Serviço</a> </li>
                        <li className='link__secundario'><a href="#">Eventos</a> </li>
                        <li className='link__secundario'><a href="#">Terminal</a></li>
                        <li className='link__secundario'><a href="#">Ajuda</a></li>
                        <a className='menu__agendar'>Agendamento</a>
                    </nav>
                </div>

                <div className='header__banner'>
                    <div className='descricao__banner'>
                        <h2 className='title__banner' >One of the largest study abroad platform.</h2>
                        <p className='paragraf-banner'>
                            If you need help with your overseas admissions at the universities, we can provide you best support for your academic profile and choice.
                        </p>
                        <a  className='menu__agendar'>Request A Call Back</a>
                    </div>

                    <div>
                        <img src={img2} alt=" Imagem Ilustrativa" />
                    </div>
                </div>
            </header>
        </>
    );

}

export default Header;