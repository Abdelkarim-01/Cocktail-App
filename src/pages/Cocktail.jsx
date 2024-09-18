import axios from 'axios';
import React from 'react'
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import styles from './../styles/Cocktail.module.css';

const singleCocktailUrl ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const loader= async ({params,context,request})=>{
  const { id } = params ;
  const {data} = await axios.get(`${singleCocktailUrl}${id}`)
  return {id,data}
}
const Cocktail = () => {
  const {id,data} =useLoaderData()
  if(!data) return <Navigate to='/'/>
  const singleDrink = data.drinks[0];
  const ingredients=Object
                    .keys(singleDrink)
                    .filter((key)=>key.startsWith('strIngredient') && singleDrink[key]!=null)
                    .map( key=>singleDrink[key]);
  
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  
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