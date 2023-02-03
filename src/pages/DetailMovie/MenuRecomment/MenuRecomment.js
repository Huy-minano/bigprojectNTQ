import classNames from "classnames/bind";
import styles from "./MenuRecomment.module.scss";
import RecommentCard from "./RecommentCard";

const cx = classNames.bind(styles);

function MenuRecomment() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h3>Recommendations</h3>
      </div>
      <div className={cx("content")}>
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
        <RecommentCard />
      </div>
    </div>
  );
}

export default MenuRecomment;
