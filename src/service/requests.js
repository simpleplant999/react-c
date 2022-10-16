import axios from "axios";
import api from "./api";

export const catFactRequest = {
  getFact: () => axios.get(api.GET_CAT_FACT),
};

export const userRequest = {
    getAge: (data) => axios.get(`${api.GET_AGE}/?name=${data}`),
  };
  