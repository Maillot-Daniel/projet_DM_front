import { useState } from "react";
import "./Section1.scss";
//import fond from '../Images/fond.jpg';

const Section1 = (props) => {
    // État pour stocker la valeur de la barre de recherche
    const [searchTerm, setSearchTerm] = useState("");

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
     
        
        </section>
    );
};

export default Section1;
