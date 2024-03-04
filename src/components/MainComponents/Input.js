import React from 'react';
import classes from './Input.module.css'
const Input = ({ type, name, value, onChange,placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value} placeholder={placeholder}
      onChange={(e) => onChange(e.target.value, e.target.name)} className={classes.input}
    />
  );
};

export default Input;