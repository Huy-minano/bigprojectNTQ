import classNames from "classnames/bind";
import styles from "./MenuActor.module.scss";

import ActorCard from "./ActorCard";
import Menu from "../../../components/Menu";

const cx = classNames.bind(styles);

function MenuActor({ title }) {
  return (
    <div className={cx("wrapper")}>
      <Menu title={title}>
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
      </Menu>
      <h3 className={cx("extend")}>Full Cast & Crew</h3>
    </div>
  );
}

export default MenuActor;
