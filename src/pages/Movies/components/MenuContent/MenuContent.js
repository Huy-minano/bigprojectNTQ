import classNames from "classnames/bind";
import styles from "./MenuContent.module.scss";
import CardFilm from "./CardFilm/CardFilm";
const cx = classNames.bind(styles);

function MenuContent() {
  return (
    <div className={cx("wrapper")}>
      <CardFilm />
      <CardFilm />
      <CardFilm />
      <CardFilm />
      <CardFilm />
      <CardFilm />
    </div>
  );
}

export default MenuContent;
