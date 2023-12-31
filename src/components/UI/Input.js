import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>
        {label}
        <input ref={ref} {...input} />
      </label>
    </div>
  );
});

export default Input;
