import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Trending.module.scss";
import TitleHomeChild from "../../../components/TitleHomeChild";
import ActorCard from "../../DetailMovie/MenuActor/components/ActorCard";
import { TRENDING_WEEK_URL } from "../../../api/url";
import { getData } from "../../../api/apiHandle";

const cx = classNames.bind(styles);

const Trending = (props) => {
  const queryOjbTrending = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    language: "vi",
  };
  const { listMovieTrendingDay } = props;
  const [listRender, setListRender] = useState([listMovieTrendingDay]);
  useEffect(() => {
    setListRender(listMovieTrendingDay);
  }, [listMovieTrendingDay]);
  const handleToday = () => {
    setListRender(listMovieTrendingDay);
  };
  const handleThisWeek = () => {
    getData(TRENDING_WEEK_URL, queryOjbTrending).then((res) => {
      setListRender(res.data.results);
    });
  };
  return (
    <div className={cx("wrapper")}>
      <TitleHomeChild
        handleToday={handleToday}
        handleThisWeek={handleThisWeek}
        title="Trending"
        btn1="Today"
        btn2="This Week"
      />
      <div className={cx("content")}>
        {listRender?.map((item) => {
          return (
            <>
              <ActorCard
                id={item.id}
                profile_path={item.poster_path}
                original_name={item.title}
                character={item.release_date}
                vote_average={item.vote_average}
                link="/detailMovie"
                css="bold"
                fontSize="12px"
                display="flex"
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
