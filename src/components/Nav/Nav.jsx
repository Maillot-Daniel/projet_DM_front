import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import Button from '../Button/Button';
import './Nav.scss';

function Nav() {
    return (
        <nav>
            <div className="box">
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo dansunsation" />
                </Link>
            </div>
            
            <div>
                <ul>
                    <li><Link to="/entrees">Entrées</Link></li>
                    <li><Link to="/plats">Plats</Link></li>
                    <li><Link to="/desserts">Desserts</Link></li>
                    <li><Link to="/divers">Divers</Link></li>
                </ul>

     
            </div>
            <Button text="Vos Ingrédients" />
        </nav>
    );
}

export default Nav;
