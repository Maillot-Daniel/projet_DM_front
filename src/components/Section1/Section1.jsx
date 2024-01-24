import { useState } from "react";
import "./Section1.scss";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/SignInForm";
import { useSelector } from "react-redux";
import { APP_ROUTES } from "../../Constants/route.const";

const Section1 = (props) => {
    const { currentRoute } = useSelector((store) => store.routeState);
    const [searchTerm, setSearchTerm] = useState("");

    const handleRoutes = () => {
        switch (currentRoute) {
            case APP_ROUTES.SIGN_IN:
                return <SignInForm />;
            case APP_ROUTES.SIGN_UP:
                return <SignUpForm />;
            default:
                break;
        }
    };
    

    // Fonction pour gérer les changements dans la barre de recherche
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Fonction pour gérer la soumission de la recherche
    const handleSearchSubmit = () => {
        // Vous pouvez ajouter ici le code pour gérer la soumission de la recherche
        // Par exemple, en utilisant la valeur de searchTerm pour effectuer une recherche
        console.log("Recherche soumise avec le terme:", searchTerm);
    };

    return (
        <section className="fond">
      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchSubmit}>Rechercher</button>
      </div>

      {/* Sections */}
      <div className="app">
        <div className="container">
          <div className="app__card card">
            <h2>Creation de compte</h2>
            {handleRoutes()}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Section1;
