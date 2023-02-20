import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderHome.module.scss";

const cx = classNames.bind(styles);

function HeaderHome() {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div className={cx("wrapper")}>
      <div className={cx("welcome")}>
        <div className={cx("intro")}>
          <h2 className={cx("Welcome-text")}>Welcome.</h2>
          <h3 className={cx("infor-text")}>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className={cx("search")}>
          <form className={cx("search-content")}>
            <input
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              className={cx("input")}
              placeholder="Search for a movie, tv show, person....."
            />
            <Link to={`/search/${searchKey}`} style={{height:"100%",width:"3%"}}>
              <button className={cx("btn")}>Search</button>
            </Link>
          </form>
        </div>
      </div>
      <div className={cx("news")}>
        <h2 className={cx("news-title")}>
          THAT'S A <br /> WRAP 2022
        </h2>
        <p className={cx("news-infor")}>The best (and worst) from 2022.</p>
        <button className={cx("btn-check")}>Check it out</button>
      </div>
    </div>
  );
}

export default HeaderHome;
