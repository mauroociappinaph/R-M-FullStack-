import style from "./SearchBar.module.css";
import { useState } from "react";



export default function SearchBar({onSearch}) {
   
   const [id , setId ] = useState("")
  
   const handleChange = (event) => {
    setId(event.target.value)     //!Es el input. TARGET -> El que ejecuta.  VALUE -> Lo que esta escrito en el input.
       
   }


   return (
      <div className={style.bar}>
      <input type='search' className={style.searchInput} onChange={handleChange} />
      <button className={style.searchButton} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
