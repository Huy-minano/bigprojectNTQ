import classNames from "classnames/bind";
import styles from "./TitleMovie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faList,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function TitleMovie() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("poster")}>
          <img
            className={cx("img-poster")}
            src="https://www.themoviedb.org/t/p/w220_and_h330_face/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg"
            title="poster"
          />
          <div className={cx("offer")}></div>
        </div>
        <div className={cx("inforMovie")}>
          <div className={cx("title")}>
            <h2 className={cx("name")}>Spider-Man 2 (2004)</h2>
            <div className={cx("type")}>
              <span className={cx("type-age")}>PG-13</span>
              <span>06/30/2004 (US)</span>
              <span>Action, Adventure, Fantasy</span>
              <span>2h 7m</span>
            </div>
          </div>
          <div className={cx("actions")}>
            <div className={cx("user-rate")}>
              <div className={cx("rate")}>77%</div>
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
            <div className={cx("play-trailer")}>
              <FontAwesomeIcon icon={faPlay} />
              <span className={cx("play")}>Play Trailer</span>
            </div>
          </div>
          <div className={cx("overview")}>
            <p className={cx("overview-tagline")}>
              There's a hero in all of us.
            </p>
            <h3 className={cx("overview-title")}>Overview</h3>
            <p className={cx("overview-content")}>
              Peter Parker is going through a major identity crisis. Burned out
              from being Spider-Man, he decides to shelve his superhero alter
              ego, which leaves the city suffering in the wake of carnage left
              by the evil Doc Ock. In the meantime, Parker still can't act on
              his feelings for Mary Jane Watson, a girl he's loved since
              childhood. A certain anger begins to brew in his best friend Harry
              Osborn as well...
            </p>
            <p className={cx("overview-product")}>Sam Raimi</p>
            <p className={cx("overview-position")}>Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleMovie;
