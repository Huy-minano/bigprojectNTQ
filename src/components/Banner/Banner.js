import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const cx = classNames.bind(styles);
const Banner = () => {
  const [textSearch, setTextSearch] = useState("");
  return (
    <div className={cx("wrapper")}>
      <form>
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <input
          onChange={(e) => {
            setTextSearch(e.target.value);
          }}
          placeholder="Search for a movie,tv show,person......."
          className={cx("searchInput")}
        />
        <Link to={`/search/${textSearch}`}>
          <button className={cx("searchButton")}>Search</button>
        </Link>
      </form>
    </div>
  );
};

export default Banner;
