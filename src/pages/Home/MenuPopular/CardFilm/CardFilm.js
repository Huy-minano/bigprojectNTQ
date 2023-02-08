import classNames from "classnames/bind";
import styles from "./CardFilm.module.scss";

const cx = classNames.bind(styles);

function CardFilm({ dataCardFilm }) {
  const image = `https://image.tmdb.org/t/p/w500/${dataCardFilm.poster_path}`
  const rate = Math.round(dataCardFilm.vote_average * 10)
  return (
    <div className={cx("wrapper")}>
      <img className={cx("image")} src={image} alt="img" />
      <div className={cx("rate")}>{rate}%</div>
      <span className={cx("name")}>{dataCardFilm.original_title||dataCardFilm.name}</span>
      <span className={cx("time-release")}>{dataCardFilm.release_date||dataCardFilm.first_air_date}</span>
    </div>
  );
}

export default CardFilm;
