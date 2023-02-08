import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import HeaderHome from "./HeaderHome";
import MenuTrending from "./MenuTrending/MenuTrending.js";
import MenuTrailer from "./MenuTrailer/MenuTrailer.js";
import MenuPopular from "./MenuPopular";
import LeaderBoard from "./LeaderBoard";

import {getData} from '../../api/apiHandle.js'
import { TRENDING_DAY_URL, TRENDING_WEEK_URL, POPULAR_THEATERS, POPULAR_TV } from '../../api/url.js'
import { useState,useEffect } from "react";

const cx = classNames.bind(styles);

function Home() {
  const [listMovieTrendingDay, setListMovieTrendingDay] = useState([])
  const [listMovieTrendingWeek, setListMovieTrendingWeek] = useState([])
  const [listMoviePopularTv, setlistMoviePopularTv] = useState([])
  const [listMoviePopularTheaters, setlistMoviePopularTheaters] = useState([])
  const queryOjbTrending = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
  }
  const queryOjbPopular = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    page: 1
  }

  useEffect(() => {
    getData(TRENDING_DAY_URL, queryOjbTrending).then((res) => {
      setListMovieTrendingDay(res.data.results);
    })
    getData(TRENDING_WEEK_URL, queryOjbTrending).then((res) => {
      setListMovieTrendingWeek(res.data.results);
    })
    getData(POPULAR_THEATERS, queryOjbPopular).then((res) => {
      setlistMoviePopularTheaters(res.data.results);
    })
    getData(POPULAR_TV, queryOjbPopular).then((res) => {
      setlistMoviePopularTv(res.data.results);
    })
  }, []);


  const listFilmTrending = [listMovieTrendingDay, listMovieTrendingWeek]
  const listFilmPopular = [listMoviePopularTv, listMoviePopularTheaters]
  return (
    <div className={cx("wrapper")}>
      <HeaderHome />
      <MenuTrending title="Trending" dataRender={listFilmTrending}/>
      <MenuTrailer title="Latest Trailers" />
      <MenuPopular title="What's Popular" dataRender={listFilmPopular}/>
      <LeaderBoard title="Leaderboard" />
    </div>
  );
}

export default Home;
