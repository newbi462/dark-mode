import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";



export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("myKeyIsLSNeedsATeacherDay");

  useEffect(() => {
    console.log(useLocalStorage[0]);
    const bodyTag = document.querySelector('body')
    if (someValue == true) {
      bodyTag.classList.add('dark-mode');
    }
    if (someValue == false) {
      bodyTag.classList.remove('dark-mode');
    }
  },[someValue])

  return [someValue, setSomeValue]
};


// CONSEPT:
// [someValue, setSomeValue] == [useLocalStorage[0], useLocalStorage[1]] == [storedValue, setValue]
