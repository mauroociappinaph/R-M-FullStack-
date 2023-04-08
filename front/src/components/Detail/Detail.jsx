import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css"

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = `https://be-a-rym.up.railway.app/api`;
    const KEY = "09d38d0a379a.47ee58661aa6af2a95d7";
    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
      setCharacter(response.data)
    );
  }, []);

  return (
    <div>
    <div className={style.container}>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.species}</p>
          <p>{character.status}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img className={style.image} src={character.image} alt="imagen del Personaje" />
        </>
      ) : <h3>Loading ...</h3>}
    </div>
    </div>
  );
};

export default Detail;
