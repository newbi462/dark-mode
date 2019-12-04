
import { useLocalStorage } from "/useLocalStorage";

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("myKeyIsLSNeedsATeacherDay");
  
};
