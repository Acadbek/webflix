import axios from "axios";

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    alert(error);
  }
};
