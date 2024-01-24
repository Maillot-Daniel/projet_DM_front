import { Link } from 'react-router-dom';
import "./Footer.scss";
import logo from '../Images/logo.png';

const Footer = (props) => {
    return (
        <footer className="container">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contact</h3>
                    <p>Email: <a href="mailto:contact@dansunsation.com">contact@dansunsation.com</a></p>
                    <p>Téléphone: <a href="tel:+33123456789">+33 123 456 789</a></p>
                    <p>Adresse: 123 Rue de la Danse, 75001 Paris, France</p>
                </div>

               <Link to="/" className="">
        <img src={logo} alt="Logo dansunsation" />
      </Link>

                <div className="social-media">
                    <h3>Réseaux sociaux</h3>
                    {/* Ajoutez vos liens vers les réseaux sociaux ici */}
                    <a href="https://www.facebook.com/votrepage" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/votrepage" target="_blank" rel="noopener noreferrer">Linked In</a>
                    {/* Ajoutez d'autres liens selon vos besoins */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
