import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";



export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("myKeyIsLSNeedsATeacherDay");

  useEffect(() => {
    console.log(useLocalStorage[0]);
    const bodyTag = document.querySelector('body')
    if (useLocalStorage[0] == true) {
      bodyTag.classList.add('dark-mode');
    }
    if (useLocalStorage[0] == false) {
      bodyTag.classList.remove('dark-mode');
    }
  },[useLocalStorage[0]])

  return [useLocalStorage[0], useLocalStorage[1]]
};
