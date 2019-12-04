import { useState } from "react";

export const useLocalStorage = () =>
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value)); // Save to local storage
  };

  return [storedValue];
};
// To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined



/*
Quick note, if you pass in arrays or objects to localStorage,
you will need to parse it into JSON.

Then when you retrieve it, like we do below,
you'll need to parse it back into regular JavaScript

*/
