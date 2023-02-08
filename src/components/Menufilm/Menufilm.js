import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getData } from "../../api/apiHandle";
import { TOP_RATED_MOVIE_URL } from "../../api/url";
import ChildMenufilm from "./ChildMenufilm/ChildMenufilm";
import styles from "./Menufilm.module.scss";
const cx = classNames.bind(styles);
const Menufilm = () => {
  const [listFilm, setListFilm] = useState([]);
  const queryOjb = (numPage) => {
    return {
      api_key: "e9e9d8da18ae29fc430845952232787c",
      language: "en-US",
      page: numPage,
    };
  };
  useEffect(() => {
    getData(TOP_RATED_MOVIE_URL, queryOjb(1)).then((res) => {
      setListFilm(res.data.results);
    });
  }, []);

  const getDataToday = () => {
    getData(TOP_RATED_MOVIE_URL, queryOjb(1)).then((res) => {
      setListFilm(res.data.results);
    });
  };
  const getDataThisWeek = () => {
    getData(TOP_RATED_MOVIE_URL, queryOjb(2)).then((res) => {
      setListFilm(res.data.results);
    });
  };
  return (
    <div className={cx("wrapper")}>
      <div>
        <h2>Trending</h2>
        <button onClick={getDataToday}>Today</button>
        <button onClick={getDataThisWeek}>This Week</button>
      </div>
      <div style={{ display: "flex" }} className={cx("listFilm")}>
        {listFilm.map((item) => {
          return (
            <ChildMenufilm
              key={item.id}
              id={item.id}
              title={item.title}
              posterPath={item.poster_path}
              releaseDate={item.release_date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menufilm;
