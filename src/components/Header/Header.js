import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <nav className={cx("navigation")}>
          <Link to="/">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
          </Link>
          <Button to="/">Movies</Button> 
          <Button to="/">TV Shows</Button>
          <Button to="/">People</Button>
          <Button to="/">More</Button>
        </nav>
        <div className={cx("actions")}>
          <Button to="/movies">
          <i className="fa-solid fa-plus"></i>
          </Button>
          <Button to="/movies" outline>
            EN
          </Button>
          <Button to="/">Login</Button>
          <Button to="/">Join TMDB</Button>
          <Button to="/">
          <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
