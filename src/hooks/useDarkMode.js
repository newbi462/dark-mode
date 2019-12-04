import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

useEffect(() => {
  const bodyTag = document.querySelector('body')
  if (useLocalStorage[0] === ture) {
    bodyTag.classList.add('dark-mode');
  }
  if (useLocalStorage[0] === false) {
    bodyTag.classList.remove('dark-mode');
  }
},[useLocalStorage[0]])

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("myKeyIsLSNeedsATeacherDay");

  return [useLocalStorage[0], useLocalStorage[1]]
};
