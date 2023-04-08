import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Favorites from "./components/Favorites/Favorites";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import Nav from "./components/Nav/Nav";

import style from "./App.module.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!access) navigate("/");
  }, [access]);

  const onSearch = (id) => {
    const URL_BASE = `https://be-a-rym.up.railway.app/api`;
    const KEY = "09d38d0a379a.47ee58661aa6af2a95d7";
    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Personaje no encontrado");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === "Mr.Ciappi@gmail.com" && userData.password === "123") {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credencial no válida");
    }
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
