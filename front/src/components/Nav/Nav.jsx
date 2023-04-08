import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={style.conteinerNav}>
          <Link to="/home">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
          <Link to="/favorites">
            <h2>Favorites</h2>
          </Link>
          <SearchBar onSearch={this.props.onSearch} />
        </div>
      </>
    );
  }
}

export default Nav;
