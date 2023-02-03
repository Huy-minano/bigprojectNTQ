import classNames from "classnames/bind";
import styles from "./MenuActor.module.scss";
import ActorCard from "./ActorCard";

const cx = classNames.bind(styles);

function MenuActor() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h3>Top Billed Cast</h3>
      </div>
      <div className={cx("content")}>
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
      </div>
    </div>
  );
}

export default MenuActor;
