import { useEffect } from "react";

import { useLocalStorage } from "/useLocalStorage";

useEffect(() => {
  //
},[])

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("myKeyIsLSNeedsATeacherDay");

};
