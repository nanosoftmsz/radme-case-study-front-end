import { AES, enc } from 'crypto-js';

export const setItem = (type, key, value) => {
  type.setItem(key, AES.encrypt(value, process.env.REACT_APP_SECRET));
};

export const getItem = (type, key) => {
  return type.getItem(key) && AES.decrypt(type.getItem(key), process.env.REACT_APP_SECRET).toString(enc.Utf8);
};

export const removeItem = (type, key) => {
  type.removeItem(key);
};

export const removeAll = (type) => {
  type.clear();
};

export const getFirstLetter = (name) => {
  if (!name) return false;

  return name.charAt(0).toUpperCase();
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
