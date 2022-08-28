import React from "react";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor={props.id || props.name}>{label}</label>
        <div className="input-field">
          <input
            className="text-input"
            {...field}
            {...props}
            autoComplete="on"
          />
        </div>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default Input;
