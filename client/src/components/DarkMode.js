import { useEffect, useState } from "react"; 

export const DarkMode = () => {
    
    const [darkMode, setDarkMode] = useState()

    useEffect(() => {
        if(darkMode === true) {
           document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [darkMode]) 

    return [darkMode, setDarkMode]
}

