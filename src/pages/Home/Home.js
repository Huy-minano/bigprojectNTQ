import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import HeaderHome from "./HeaderHome";
import LeaderBoard from "./LeaderBoard";
import { getData } from "../../api/apiHandle.js";
import { useState, useEffect } from "react";
import {
  TRENDING_DAY_URL,
  POPULAR_TV,
} from "../../api/url.js";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";
const cx = classNames.bind(styles);
function Home() {
  const [listMovieTrendingDay, setListMovieTrendingDay] = useState([]);
  const [listMoviePopularTv, setlistMoviePopularTv] = useState([]);
  const queryOjbTrending = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    language:"vi"
  };
  const queryOjbPopular = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    page: 1,
    language:"vi"
  };
  useEffect(() => {
    Promise.all([
      getData(TRENDING_DAY_URL, queryOjbTrending),
      getData(POPULAR_TV, queryOjbPopular),
    ]).then((res) => {
      setListMovieTrendingDay(res[0].data.results);
      setlistMoviePopularTv(res[1].data.results);
    });
  }, []);
  
  return (
    <div className={cx("wrapper")}>
      <HeaderHome />
      <Trending listMovieTrendingDay={listMovieTrendingDay}/>
      <Popular listMoviePopularTv={listMoviePopularTv}/>
      <LeaderBoard />
    </div>
  );
}

export default Home;
