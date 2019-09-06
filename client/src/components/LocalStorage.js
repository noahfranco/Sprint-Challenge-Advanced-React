import React, { useState } from "react"; 

const localStorage = (key, initialValue) => {
    
   const [storage, setStorage] = useState(() => {
       const value = localStorage.getItem(key)
       return value ? JSON.parse(value) : initialValue
   })

   const setValue = item => {
        setStorage(item)
        window.localStorage.setItem(key, JSON.stringify(item))
   }

   return [storage, setValue]
}

export default localStorage