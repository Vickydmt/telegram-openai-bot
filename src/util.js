import { i18n } from "./i18n.js";
import EnvNotFoundException from "./exception/EnvNotFoundException.js";
import dotenv from "dotenv";
dotenv.config();

export const getEnvirement = (name) => {
  let env = process.env[name];
  if (!env) {
    throw new EnvNotFoundException(name);
  }
  return env;
};

const stringToNumberArray = (str) => {
  let idsStringArray = str.split(",");
  if (idsStringArray.length < 0) {
    return [];
  }
  let arr = [];
  for (var i = 0; i < idsStringArray.length; i++) {
    arr[i] = Number(idsStringArray[i]);
  }
  return arr;
};





export const getTranslate = (lang = "tr") => {
  return i18n[lang].noAnswer;
};
