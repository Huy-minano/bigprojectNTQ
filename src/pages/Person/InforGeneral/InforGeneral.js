import classNames from "classnames/bind";
import styles from "./InforGeneral.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../../../api/url";

const cx = classNames.bind(styles);

function InforGeneral(props) {
  const {
    profile_path,
    place_of_birth,
    gender,
    birthday,
    also_known_as,
    known_for_department,
    popularity,
    deathday,
  } = props;
  const changGender = (age) => {
    if (age === 2) return "Male";
    return "Women";
  };
  const ageLife = (birthday!==undefined && deathday!==undefined && birthday!==null && deathday===null) ? `(${2023 - Number(birthday.split('-')[0])} tuổi)` : ""
  const ageDeath =(birthday!==undefined && deathday!==undefined && birthday!==null && deathday!==null)  ? `(${Number(deathday.split('-')[0]) - Number(birthday.split('-')[0])} tuổi)` : ""
  return (
    <div className={cx("infor")}>
      <img
        className={cx("avatar")}
        src={`${IMG_URL}${profile_path}`}
        alt="img"
      />
      <FontAwesomeIcon className={cx("twitter")} icon={faTwitter} />
      <h3 className={cx("title")}>Personal Info</h3>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Known For</h4>
        <p className={cx("reply")}>{known_for_department}</p>
      </div>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Known Credits</h4>
        <p className={cx("reply")}>{Math.floor(popularity)}</p>
      </div>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Gender</h4>
        <p className={cx("reply")}>{changGender(gender)}</p>
      </div>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Birthday</h4>
        <p className={cx("reply")}>{`${birthday} ${ageLife}`}</p>
      </div>
      {deathday !== null && (
        <div className={cx("infor-past")}>
          <h4 className={cx("question")}>Day of Death</h4>
          <p className={cx("reply")}>{`${deathday} ${ageDeath}`}</p>
        </div>
      )}
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Place of Birth</h4>
        <p className={cx("reply")}>{place_of_birth}</p>
      </div>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Also Known As</h4>
        {also_known_as?.map((item, index) => {
          return (
            <p className={cx("reply")} key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div className={cx("btn")}>EDIT PAGE</div>
      <div className={cx("extend")}>
        <FontAwesomeIcon className={cx("extend-icon")} icon={faKeyboard} />
        <p className={cx("extend-text")}>Keyboard Shortcuts</p>
      </div>
      <div className={cx("extend")}>
        <FontAwesomeIcon
          className={cx("extend-icon")}
          icon={faExclamationCircle}
        />
        <p className={cx("extend-text")}>Report an Issue</p>
      </div>
    </div>
  );
}

export default InforGeneral;
