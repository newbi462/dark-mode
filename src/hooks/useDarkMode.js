import { useEffect } from "react";

import { useLocalStorage } from "/useLocalStorage";

useEffect(() => {
  const bodyTag = document.querySelector('body')
  if (useLocalStorage[0] === ture) {
    bodyTag.classList.add('dark-mode');
  }
},[])

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("myKeyIsLSNeedsATeacherDay");

};
