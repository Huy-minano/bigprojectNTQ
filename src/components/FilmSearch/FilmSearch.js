import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {IMG_URL } from "../../api/url";
import Button from "../Button";
import styles from "./FilmSearch.module.scss";
const cx = classNames.bind(styles);
function FilmSearch(props) {
  return (
    <div className={cx("card")} key={props.id}>
      <div className={cx('divPoster')}>
        <Link to={`/detailMovie/${props.id}`}>
          <img
            alt="poster"
            className={cx("poster")}
            src={props.poster_path===null ? 'https://www.snapon.co.za/images/thumbs/default-image_550.png' : `${IMG_URL}${props.poster_path}`}
          />
        </Link>   
      </div>
      <div className={cx("details")}>
        <div className={cx("title")}>
        <Link to={`/detailMovie/${props.id}`}>
          <Button titleCard>{props.name}</Button>
        </Link>
          <span className={cx("date")} style={{fontSize:"14px"}}>{props.date}</span>
        </div>
        <div className={cx("overview")}>
          <p style={{fontSize:"15px"}}>
            {props.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilmSearch;
