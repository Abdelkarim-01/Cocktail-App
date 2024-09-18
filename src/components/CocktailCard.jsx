import { Link, useOutletContext } from 'react-router-dom';
import styles from './../styles/CocktailCard.module.css';


const CocktailCard = ({ image, name, id, info, glass }) => {
//   const data = useOutletContext();
//   console.log(data);
  return (
    <div className={styles.cocktailCard}>
      <div  className={styles.img_container}>
        <img src={image} alt={name} className='img' />
      </div>
      <div className={styles.footer}>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </div>
    </div>
  );
};
export default CocktailCard;
