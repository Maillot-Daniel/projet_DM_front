import "./Header.scss";
import logo from '../Images/logo.png';
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

const Header = () => {


    return (
        <header className="header container">
            <img src={logo} alt="Logo dansunsation" className="logo" />
             <Nav />
             <Button />
        </header>
    );
};

export default Header;
