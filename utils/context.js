import React from "react";
import { altCommentByName } from "./helper";
import { initialcomments, initialImage } from "./constant";
import { sendLoginRequest } from "./request";

const urls = initialImage.map((i) => `/image/${i}`);

const initialValues = {
  images: [],
  status: "start",
  comments: [],
  user: {},
  login: "",
};

const FileContext = React.createContext(initialValues);

const actions = {
  upload_file_start: "UPLOAD_FILE_START",
  upload_file_success: "UPLOAD_FILE_SUCCESS",
  upload_file_fail: "UPLOAD_FILE_FAIL",
  upload_local_file: "UPLOAD_LOCAL_FILE",
  make_comment: "MAKE_COMMENT",
  user_login: "USER_LOGIN",
  user_login_err: "USER_LOGIN_ERR",
  clear_login_info: "CLEAR_LOGIN_INFO",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.upload_file_start:
      return { ...state, status: "start" };
    case actions.upload_file_success:
      return { ...state, status: "success" };
    case actions.upload_file_fail:
      return { ...state, status: "failed" };
    case actions.upload_local_file:
      return { ...state, images: payload };
    case actions.make_comment:
      const altComments = altCommentByName(
        state.comments,
        payload.name,
        payload.comment
      );
      return { ...state, comments: altComments };
    case actions.user_login:
      return { ...state, user: { name: payload.name, email: payload.email } };
    case actions.user_login_err:
      return { ...state, login: payload };
    case actions.clear_login_info:
      return { ...state, login: "" };
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};

const Context = ({ children, ...props }) => {
  const [state, dispatch] = React.useReducer(reducer, initialValues);
  const value = [state, dispatch];
  return (
    <FileContext.Provider value={value} {...props}>
      {children}
    </FileContext.Provider>
  );
};

const uploadFileStart = (dispatch) => {
  dispatch({ type: actions.upload_file_start });
};

const uploadFileSuccess = (dispatch) => {
  dispatch({ type: actions.upload_file_success });
};

const uploadFileFailed = (dispatch) => {
  dispatch({ type: actions.upload_file_fail });
};

const setLocalUpdate = (dispatch, images) => {
  dispatch({ type: actions.upload_local_file, payload: images });
};

const useFileContext = () => {
  const fileContext = React.useContext(FileContext);
  if (!fileContext) {
    throw new Error(`context should use within a Provider`);
  }
  return fileContext;
};

const handleCommentSub = (dispatch, payload) => {
  dispatch({ type: actions.make_comment, payload });
};

const handleLogin = async (dispatch, payload) => {
  try {
    const res = await sendLoginRequest("/api/login", payload);
    dispatch({ type: actions.user_login, payload: res });
  } catch (error) {
    dispatch({
      type: actions.user_login_err,
      payload: error.response.data.msg,
    });
  }
};
const handleModal = (dispatch) => {
  dispatch({ type: actions.clear_login_info });
};
export {
  Context,
  useFileContext,
  uploadFileStart,
  uploadFileSuccess,
  uploadFileFailed,
  setLocalUpdate,
  handleCommentSub,
  handleLogin,
  handleModal,
};
