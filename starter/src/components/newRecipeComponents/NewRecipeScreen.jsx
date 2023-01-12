import { useState } from 'react';
import classes from './NewRecipeScreen.module.css';
import { Formik } from 'formik';
import axios from 'axios';

const NewRecipeScreen = () => {
 const [ingredients, setIngredients] = useState([]);
 const [name, setName] = useState('');
 const [quantity, setQuantity] = useState('');

 const addIngredient = () => {
 setIngredients([...ingredients, { name, quantity }]);
 setName('');
 setQuantity('');
 };

 const initialValues = {
 recipeName: '',
 imageURL: '',
 prepTime: '',
 cookTime: '',
 serves: '',
 ingredient: [],
 quantity: '',
 };

 const onSubmit = (values) => {
 values.ingredients = ingredients;
 axios
 .post(`https://recipes.devmountain.com/recipes`, values)
 .then((res) => {
 console.log(res.data);
 // useNavigate(`/recipe/${res.data[0][0].recipe_id}`)
 })
 .catch((err) => console.log(err));
 };

 const ingredientsDisplay = ingredients.map((ing) => {
 return (
 <li>
 {ing.quantity} {ing.name}
 </li>
 );
 });

 return (
 <section className={classes['new-recipe-container']}>
 <h1>Tell us about your Recipe!</h1>
 <Formik initialValues={initialValues} onSubmit={onSubmit}>
 {({ values, handleChange, handleSubmit }) => (
 <form onSubmit={handleSubmit} className={classes.form}>
 <div className={classes['name-img-container']}>
 <input
 type="text"
 value={values.recipeName}
 onChange={handleChange}
 name="recipeName"
 placeholder="Name"
 />
 <input
 type="text"
 value={values.imageURL}
 onChange={handleChange}
 name="imageURL"
 placeholder="Image URL"
 />
 </div>
 <div className={classes['radio-container']}>
 <span>
 <input
 id="cook"
 type="radio"
 value="Cook"
 onChange={handleChange}
 name="type"
 />
 <p>Cook</p>
 </span>
 <span>
 <input
 id="bake"
 type="radio"
 value="Bake"
 onChange={handleChange}
 name="type"
 />
 <p>Bake</p>
 </span>
 <span>
 <input
 id="drink"
 type="radio"
 value="Drink"
 onChange={handleChange}
 name="type"
 />
 <p>Drink</p>
 </span>
 </div>
 <div className={classes['time-cook-container']}>
 <input
 type="text"
 placeholder="Prep Time"
 value={values.prepTime}
 onChange={handleChange}
 name="prepTime"
 />
 <input
 type="text"
 placeholder="Cook Time"
 value={values.cookTime}
 onChange={handleChange}
 name="cookTime"
 />
 <input
 type="text"
 placeholder="Serves"
 value={values.serves}
 onChange={handleChange}
 name="serves"
 />
 </div>
 <div className={classes['ingredients-container']}>
 <div className={classes.ingredients}>
 <input
 type="text"
 placeholder="Ingredient"
 value={name}
 onChange={(e) => setName(e.target.value)}
 />
 <input
 type="text"
 placeholder="Quantity"
 value={quantity}
 onChange={(e) => setQuantity(e.target.value)}
 />
 </div>
 <div className={classes['ingredients-list']}>
 <ul>{ingredientsDisplay}</ul>
 </div>
 </div>
 <div className={classes['add-btn']}>
 <button
 type="button"
 className={classes['orange-btn']}
 onClick={addIngredient}
 >
 Add Another
 </button>
 </div>
 <div className={classes.textarea}>
 <textarea
 rows={5}
 placeholder="What are the instructions?"
 value={values.instructions}
 onChange={handleChange}
 name="instructions"
 />
 </div>
 <div className={classes['save-btn']}>
 <button type="submit" className={classes['blue-btn']}>
 Save
 </button>
 </div>
 </form>
 )}
 </Formik>
 </section>
 );
};

export default NewRecipeScreen;