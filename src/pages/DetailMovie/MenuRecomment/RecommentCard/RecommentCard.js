import classNames from "classnames/bind";
import styles from "./RecommentCard.module.scss";

const cx = classNames.bind(styles);

function ActorCard() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("image")}
        src="https://www.themoviedb.org/t/p/w250_and_h141_face/6MQmtWk4cFwSDyNvIgoJRBIHUT3.jpg"
        alt="img"
      />
      <div className={cx("infor")}>
        <span className={cx("name")}>Spider-Man 3</span>
        <span className={cx("rate")}>64%</span>
      </div>
    </div>
  );
}

export default ActorCard;
