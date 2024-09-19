import axios from 'axios';
import React from 'react'
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import styles from './../styles/Cocktail.module.css';
import { useQuery } from '@tanstack/react-query';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const navigate = useNavigate();
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to='/' />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <div className={styles.cocktail}>
      <header>
        <Link to='/' className='btn'> Go Home</Link>
        <h3>{name}</h3>
      </header>
      <div className={styles.drink}>
        <img src={image} alt={name} className={`${styles.img} img`} />
        <div className={styles.drink_info}>
          <p>
            <span className={styles.drink_data}>name :</span>
            {name}
          </p>
          <p>
            <span className={styles.drink_data}>category :</span>
            {category}
          </p>
          <p>
            <span className={styles.drink_data}>info :</span>
            {info}
          </p>
          <p>
            <span className={styles.drink_data}>glass :</span>
            {glass}
          </p>
          <p>
            <span className={styles.drink_data}>ingredients :</span>
            {ingredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item}
                  {index < ingredients.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className={styles.drink_data}>instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cocktail