// import "./Section2.scss";
// //import fond from '../Main/fond.jpg';
// import imgAchards from "../Images/img_achards.jpg";
// import imgRougSauc from "../Images/img_roug_sauc.jpg";
// import imgPateCreole from "../Images/img_pate_creole.jpg";
// import imgMacatia from "../Images/img_macatia.jpg";

// const Section2 = (props) => {
//         return (
//                 <section className="section2">
//             <h3>LES PROPOSITIONS DU JOUR</h3>
//             <p className="soustitre">Une sélection de nos plus belles recettes</p>
    
//             <div className="recipe-cards">
//                 <RecipeCard
//                     title="Achards de légumes"
//                     description="Description de la recette 1."
//                     imageSrc={imgAchards}
//                     recipeLink="/achards-de-legumes" // Add the link for the first recipe
//                 />
//                 <RecipeCard
//                     title="Rougail de saucisses"
//                     description="Description de la recette 2."
//                     imageSrc={imgRougSauc}
//                     recipeLink="/rougail-de-saucisses" // Add the link for the second recipe
//                 />
//                 <RecipeCard
//                     title="Pâté Créole"
//                     description="Description de la recette 3."
//                     imageSrc={imgPateCreole}
//                     recipeLink="/pate-creole" // Add the link for the third recipe
//                 />
//                 <RecipeCard
//                     title="Macatia"
//                     description="Description de la recette 4."
//                     imageSrc={imgMacatia}
//                     recipeLink="/macatia" // Add the link for the fourth recipe
//                 />
//             </div>
//         </section>
//     );
// };

// const RecipeCard = ({ title, description, imageSrc, recipeLink }) => {
//     return (
//         <a href={recipeLink} className="recipe-card"> {/* Wrap the RecipeCard with an anchor tag */}
//             <img src={imageSrc} alt={title} />
//             <h4>{title}</h4>
//             <p>{description}</p>
//         </a>
//     );
// };

// export default Section2;
