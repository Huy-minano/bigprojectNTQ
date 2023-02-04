import classNames from "classnames/bind";
import styles from "./Review.module.scss";

const cx = classNames.bind(styles);

function Review() {
  return (
    <div className={cx("content")}>
      <div className={cx("reviewer")}>
        <img
          className={cx("img-reviewer")}
          src="https://www.themoviedb.org/t/p/w64_and_h64_face/gW1joveFfv736XrPgXOSpNgj8ju.jpg"
          alt="reviewer"
        />
        <div className={cx("infor-review")}>
          <h3 className={cx("infor-reviewer")}>A review by JeffreyYoung</h3>
          <p className={cx("time")}>
            Written by JeffreyYoung on January 2, 2020
          </p>
        </div>
      </div>
      <div className={cx("review")}>
        <p>
          To me, it felt like what Uncle Ben imparted to Peter in the first film
          - with great power comes great responsibility - was the very essence
          of this film. He had too much power, too much responsibility, and he
          needed to find a way to balance all of that.
        </p>
      </div>
    </div>
  );
}

export default Review;
