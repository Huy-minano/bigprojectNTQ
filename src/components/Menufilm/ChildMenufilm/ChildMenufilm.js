import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { POSTER_URL } from "../../../api/url";
import styles from "./ChildMenufilm.module.scss";
const cx = classNames.bind(styles);
const ChildMenufilm = (props) => {
  const { title, posterPath, releaseDate, id } = props;
  return (
    <Link to={`/detailMovie/${id}`}>
      <div className={cx("wrapper")}>
        <img src={`${POSTER_URL}${posterPath}`} alt={title} />
        <p>{title}</p>
        <p>{releaseDate}</p>
      </div>
    </Link>
  );
};

export default ChildMenufilm;
