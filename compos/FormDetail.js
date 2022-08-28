import React from "react";
import { Form, Formik } from "formik";
import TextArea from "./TextArea";
import * as Yup from "yup";
import { useFileContext, handleCommentSub } from "../utils/context";

const ContactForm = ({ name }) => {
  const [state, dispatch] = useFileContext();
  return (
    <Formik
      initialValues={{
        comment: "",
      }}
      validationSchema={Yup.object({
        comment: Yup.string()
          .min(30, "at least 15 characters")
          .required("Required"),
      })}
      onSubmit={(value) => {
        handleCommentSub(dispatch, { name, comment: value.comment });
      }}
    >
      <Form>
        <div className="form-field">
          <div className="ta-wrapper">
            <TextArea
              placeholder="Left your comments about the project. More information is always better than less."
              rows="6"
              id="comment"
              name="comment"
            />
          </div>
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
