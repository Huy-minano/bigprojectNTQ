import classNames from "classnames/bind";
import styles from "./TitleMovie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";
import {
  fa0,
  faBookmark,
  faHeart,
  faList,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { IMG_URL, IMG_BIG_URL } from "../../../api/url";
import ModalVideo from "react-modal-video";
const cx = classNames.bind(styles);

function TitleMovie(props) {
  const [isOpen, setOpen] = useState(false);
  const backdrop_path = props.backdrop_path;
  const keyTrailer = props.keyTrailer;
  const siteTrailer = props.siteTrailer;
  const detailMovie = props.detailMovie;
  const hourFilm = Math.floor(detailMovie.runtime / 60);
  const minusFilm = detailMovie.runtime - hourFilm * 60;
  const countryFilm =
    detailMovie.production_countries?.length >= 1
      ? `(${detailMovie.production_countries[0].iso_3166_1})`
      : "";
  const yearReleaseDate = detailMovie.release_date?.split("-")[0];
  const persen = Math.floor(detailMovie.vote_average * 10);
  return (
    <>
      <div
        className={cx("wrapper")}
        style={{ backgroundImage: `url(${IMG_BIG_URL}${backdrop_path})` }}
      >
        <div style={{background:"black",opacity:"0.777",height:"100%",width:"100%",position:"absolute"}}></div>
          <div className={cx("content")}>
            <div className={cx("poster")} style={{marginTop:"40px"}}>
              <img
                className={cx("img-poster")}
                src={
                  detailMovie.poster_path
                    ? `${IMG_URL}${detailMovie.poster_path}`
                    : "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png"
                }
                title="poster"
                alt=""
              />
            </div>
            <div className={cx("poster1")}></div>
            <div className={cx("inforMovie")}>
              <div className={cx("title")}>
                <h2
                  className={cx("name")}
                >{`${detailMovie.title} (${yearReleaseDate})`}</h2>
                <div className={cx("type")}>
                  <span style={{ fontSize: "14px" }} className={cx("type-age")}>
                    PG-13
                  </span>
                  <span style={{ fontSize: "14px" }}>
                    {detailMovie.release_date} {countryFilm}
                  </span>
                  <ul style={{ display: "flex", gap: "20px" }}>
                    {detailMovie.genres?.map((item) => {
                      return (
                        <li
                          key={item.id}
                          style={{ fontSize: "14px" }}
                        >{`${item.name}`}</li>
                      );
                    })}
                    <li
                      style={{ fontSize: "14px" }}
                    >{`${hourFilm}h ${minusFilm}p`}</li>
                  </ul>
                </div>
              </div>
              <div className={cx("actions")}>
                <div className={cx("user-rate")}>
                  <div
                    className={cx("rate1")}
                    style={persen>70 ? {
                       background: `linear-gradient(to left, rgb(53, 177, 64) ${persen}%, hwb(125deg 2% 81%) ${
                        100 - persen
                      }%) right`,
                    } : {background: `linear-gradient(to left, #d2d531 ${persen}%, hwb(125deg 2% 81%) ${
                      100 - persen
                    }%) right`}}
                  ></div>
                  <div className={cx("rate")}>{persen}%</div>
                  <div className={cx("title-rate")}>User Score</div>
                </div>
                <div className={cx("action-item")}>
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div className={cx("action-item")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className={cx("action-item")}>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div className={cx("action-item")}>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div
                  className={cx("play-trailer")}
                  onClick={() => setOpen(true)}
                >
                  <FontAwesomeIcon icon={faPlay} />
                  <span className={cx("play")}>Play Trailer</span>
                </div>
              </div>
              <div className={cx("overview")}>
                <p className={cx("overview-tagline")}>
                  {detailMovie.original_title}
                </p>
                <h3 className={cx("overview-title")}>Overview</h3>
                <p className={cx("overview-content")}>{detailMovie.overview}</p>
                <p className={cx("overview-product")}>Sam Raimi</p>
                <p className={cx("overview-position")}>Director</p>
              </div>
            </div>
          </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel={"youtube"}
          autoplay
          isOpen={isOpen}
          videoId={keyTrailer}
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default TitleMovie;
