import classNames from "classnames/bind";
import styles from "./MenuActor.module.scss";
import Social from "./components/Social";
import Media from "./components/Media";
import ActorCard from "./components/ActorCard";
import { useState } from "react";

const cx = classNames.bind(styles);

function MenuActor(props) {
  const [countPerson, setCountPerson] = useState(9);
  const similar = props.similar;
  const casts = props.casts.slice(0, countPerson);
  const detailMovie = props.detailMovie;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h3>Top Billed Cast</h3>
      </div>
      <div className={cx("content")}>
        {casts.map((item) => {
          return (
            <ActorCard
              key={item.id}
              id={item.id}
              original_name={item.original_name}
              character={item.character}
              profile_path={item.profile_path}
              link="/person"
              css="bold"
              fontSize="15px"
            />
          );
        })}
        {casts.length === countPerson && (
          <div
            className={cx("seeMore")}
            onClick={() => {
              setCountPerson(countPerson + 14);
            }}
          >
            <span>
              <b>View More </b>
            </span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        )}
      </div>
      <Social />
      <Media detailMovie={detailMovie} similar={similar} />
    </div>
  );
}
export default MenuActor;
