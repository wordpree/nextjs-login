import React from "react";
import { Form, Formik } from "formik";
import TextArea from "./TextArea";
import Input from "./Input";

import * as Yup from "yup";
import { useFileContext, handleLogin } from "../utils/context";

const ContactForm = ({ name }) => {
  const [state, dispatch] = useFileContext();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(value) => {
        handleLogin(dispatch, value);
      }}
    >
      <Form>
        <div className="form-field">
          <div className="input-entry">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              label="Name"
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              label="E-Mail"
            />
          </div>
          <p>Forget password?</p>
        </div>
        <hr />
        <div className="login-box--wrapper">
          <div className="cb-wrapper">
            <input type="checkbox" id="cb" />
            <label htmlFor="cb">Remeber Me</label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
