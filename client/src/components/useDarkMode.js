import { useEffect } from "react"; 
import  useLocalStorage  from "./useLocalStorage.js"; 

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("");

    useEffect(() => {
        if(value === true) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [value])

    return [value, setValue] 
}