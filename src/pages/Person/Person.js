import classNames from "classnames/bind";
import styles from "./Person.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Person() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("infor")}>
        <img
          className={cx("avatar")}
          src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kOJelnLSb89SeivbOCt1l94Hz2d.jpg"
          alt="img"
        />
        <FontAwesomeIcon className={cx("twitter")} icon={faTwitter} />
        <h3>Personal Info</h3>
        <div className={cx("infor-past")}>
          <h4 className={cx("question")}>Known For</h4>
          <p className={cx("reply")}>Acting</p>
        </div>
        <div className={cx("infor-past")}>
          <h4 className={cx("question")}>Known Credits</h4>
          <p className={cx("reply")}>78</p>
        </div>
        <div className={cx("infor-past")}>
          <h4 className={cx("question")}>Birthday</h4>
          <p className={cx("reply")}>1975-06-27 (47 years old)</p>
        </div>
        <div className={cx("infor-past")}>
          <h4 className={cx("question")}>Place of Birth</h4>
          <p className={cx("reply")}>Santa Monica, California, USA</p>
        </div>
        <div className={cx("infor-past")}>
          <h4 className={cx("question")}>Also Known As</h4>
          <p className={cx("reply")}>Тоби Магуайр</p>
          <p className={cx("reply")}>토비 맥과이어</p>
          <p className={cx("reply")}>陶比·麥奎爾</p>
          <p className={cx("reply")}>托比·马奎尔</p>
        </div>
        <div className={cx("btn")}>EDIT PAGE</div>
      </div>
      <div className={cx("detail")}></div>
    </div>
  );
}

export default Person;
