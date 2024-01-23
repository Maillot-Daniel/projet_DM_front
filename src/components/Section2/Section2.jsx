import "./Section2.scss";
//import fond from '../Main/fond.jpg';
import imgAchards from "../Images/img_achards.jpg";
import imgRougSauc from "../Images/img_roug_sauc.jpg";
import imgPateCreole from "../Images/img_pate_creole.jpg";
import imgMacatia from "../Images/img_macatia.jpg";

const Section2 = (props) => {
    return (
        <section className="section2">
            <h2>LES PROPOSITIONS DU JOUR</h2>
            <p className="soustitre">Une sélection de nos plus belles recettes</p>
    
            <div className="recipe-cards">
                <RecipeCard
                    title="Achards de légumes"
                    description="Description de la recette 1."
                    imageSrc={imgAchards}
                />
                <RecipeCard
                    title="Rougail de saucisses"
                    description="Description de la recette 2."
                    imageSrc={imgRougSauc}
                />
                <RecipeCard
                    title="Pâté Créole"
                    description="Description de la recette 3."
                    imageSrc={imgPateCreole}
                />
                <RecipeCard
                    title="Macatia"
                    description="Description de la recette 4."
                     imageSrc={imgMacatia}
                />
            </div>
        </section>
    );
};

const RecipeCard = ({ title, description, imageSrc }) => {
    return (
        <div className="recipe-card">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Section2;
