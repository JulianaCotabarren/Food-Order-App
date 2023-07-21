import classes from './Input.module.css';

const Input = ({ input, label }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>
        {label}
        <input {...input} />
      </label>
    </div>
  );
};

export default Input;
