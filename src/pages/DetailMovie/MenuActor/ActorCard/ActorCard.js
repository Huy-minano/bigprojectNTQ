import classNames from "classnames/bind";
import styles from "./ActorCard.module.scss";

const cx = classNames.bind(styles);

function ActorCard() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("image")}
        src="https://www.themoviedb.org/t/p/w138_and_h175_face/nJo91Czesn6z0d0pkfbDoVZY3sg.jpg"
        alt="img"
      />
      <span className={cx("name")}>Alfred Molina</span>
      <span className={cx("role")}>Doc Ock / Otto Octavius</span>
    </div>
  );
}

export default ActorCard;
