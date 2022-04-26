const setItem = (key: string, value: any): void => {
  window.localStorage[key] = value;
};

const getItem = (key: string): any => {
  return window.localStorage[key];
};

const removeItem = (key: string): void => {
  window.localStorage.removeItem(key);
};

export default {
  setItem,
  getItem,
  removeItem,
};
