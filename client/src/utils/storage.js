import { isArray } from "lodash";

const storage = localStorage;

const getItem = (key) => {
  const result = storage.getItem(key);
  return JSON.parse(result);
};

const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

const setItems = (items = []) => {
  if (isArray(items)) {
    items.forEach(({ key, value }) => {
      setItem(key, value);
    });
  }
};

const removeItem = (key) => {
  storage.removeItem(key);
};

const removeItems = (keys) => keys.map((eachKey) => removeItem(eachKey));

const getItems = (keys) => keys.map((eachKey) => getItem(eachKey));

export { getItem, setItem, setItems, getItems, removeItems, removeItem };
