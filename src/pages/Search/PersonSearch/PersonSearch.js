import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { IMG_BIG_URL, IMG_URL } from "../../../api/url";
import Button from "../../../components/Button";
import styles from "./PersonSearch.module.scss";
const cx = classNames.bind(styles);
function PersonSearch(props) {  
  return (
    <div className={cx("card")} key={props.id}>
      <div className={cx('divPoster')}>
        <Link to={`/person/${props.id}`}>
          <img
            alt="poster"
            className={cx("poster")}
            src={props.profile_path===null ? 'https://www.snapon.co.za/images/thumbs/default-image_550.png' : `${IMG_URL}${props.profile_path}`}
          />
        </Link>   
      </div>
      <div className={cx("details")}>
        <div className={cx("title")}>
        <Link to={`/detailMovie/${props.id}`}>
          <Button titleCard>{props.name}</Button>
        </Link>
        </div>
        <div className={cx("overview")}>
          <p style={{fontSize:"15px"}}>
            {props.known_for_department}
          </p>
          <ul>
            <li>{props.known_for?.map((item)=>{return <span key={item.id}>{item.title ? `${item.title}, ` : ""}</span>})}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PersonSearch;
