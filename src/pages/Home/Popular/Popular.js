import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Popular.module.scss";
import TitleHomeChild from "../../../components/TitleHomeChild";
import ActorCard from "../../DetailMovie/MenuActor/components/ActorCard";
import { POPULAR_THEATERS } from "../../../api/url";
import { getData } from "../../../api/apiHandle";

const cx = classNames.bind(styles);

const Popular = (props) => {
  const queryOjbPopular = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    page: 1,
    language: "vi",
  };
  const {listMoviePopularTv} = props;
  const [listRender, setListRender] = useState([listMoviePopularTv]);
  useEffect(() => {
    setListRender(listMoviePopularTv);
  }, [listMoviePopularTv]);
  
 const handleOnTv=()=>{
    setListRender(listMoviePopularTv)
 }
 const handleTheaters=()=>{
  getData(POPULAR_THEATERS, queryOjbPopular).then((res)=>{
      setListRender(res.data.results);
  })
 }
  return (
    <div>
      <div className={cx("wrapper")}>
        <TitleHomeChild
          title="What's Popular"
          btn1="On TV"
          btn2="In Theaters"
          handleToday={handleOnTv}
          handleThisWeek={handleTheaters}
        />
        <div className={cx("content")}>
          {listRender?.map((item) => {
            return (
              <ActorCard
                id={item.id}
                profile_path={item.poster_path}
                original_name={item.name}
                character={item.first_air_date}
                vote_average={item.vote_average}
                link="/detailMovie"
                css="bold"
                fontSize="12px"
                display="flex"
              />
            );
          })}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Popular;
