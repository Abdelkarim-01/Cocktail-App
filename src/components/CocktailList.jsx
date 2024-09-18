import CocktailCard from './CocktailCard';
import styles from './../styles/CocktailList.module.css';
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <div className={styles.cocktailList}>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </div>
  );
};
export default CocktailList;
