import React from "react";
import { postRequest } from "../utils/request";
import ImgUI from "./ImgUi";
import {
  useFileContext,
  uploadFileStart,
  uploadFileSuccess,
  uploadFileFailed,
  setLocalUpdate,
} from "../utils/context";

const Form = ({ name, isMulti, acceptType }) => {
  const [state, dispatch] = useFileContext();

  const saveFile = async () => {
    if (!state.images) {
      return;
    }
    try {
      const body = new FormData();
      state.images.forEach((image) => {
        body.append(name, image);
      });
      uploadFileStart(dispatch);
      await postRequest(`/api/file`, body);
      uploadFileSuccess(dispatch);
    } catch (error) {
      uploadFileFailed(dispatch, error);
      console.log(error);
    }
  };
  const uploadFile = (e) => {
    if (!e.target?.files.length) {
      return;
    }
    setLocalUpdate(dispatch, Array.from(e.target.files));
  };
  return (
    <div>
      <ImgUI images={state.images} />
      <div className="upload-action">
        <div className="upload-local">
          <h4>Select Image</h4>
          <input
            type="file"
            name={name}
            onChange={uploadFile}
            multiple={isMulti}
            accept={acceptType}
          />
        </div>
        <button className="btn btn-primary" type="submit" onClick={saveFile}>
          Send to server
        </button>
      </div>
    </div>
  );
};

export default Form;
