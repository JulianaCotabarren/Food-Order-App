import meals from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="meals" />
      </div>
    </>
  );
};

export default Header;
