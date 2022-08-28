import axios from "axios";

const postRequest = async (url, data) => {
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  const response = await axios.post(url, data, config);
  console.log("response", response.data);
};

const sendLoginRequest = async (url, data) => {
  console.log(data);
  const res = await axios.post(url, data);
  return await res.data;
};

export { postRequest, sendLoginRequest };
