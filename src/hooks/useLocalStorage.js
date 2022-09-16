
import { useState, useEffect } from 'react';

const useLocalStorage = (storageKey, fallbackState) => {
  const stored = localStorage.getItem(storageKey);
  let initial = fallbackState;
  if (stored != 'undefined' && stored != undefined) {
    initial = JSON.parse(stored);
  }
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

//local storage keys
export const LocalStorage = (key) => {
  const [localStorageState, setLocalStorageState] = useLocalStorage(
    key,
    []
  );

  return { localStorageState, setLocalStorageState };
};

// export const resetLocalStorage = () => {
//   const localState = LocalStorage(); //local storage keys
//   localState.setLocalStorageState([]);
// };