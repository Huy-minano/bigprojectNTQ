import classNames from "classnames/bind";
import styles from "./DetailMovie.module.scss";

import TitleMovie from "./TitleMovie";
import MenuActor from "./MenuActor";
import MenuRecomment from "./MenuRecomment";

const cx = classNames.bind(styles);

function DetailMovie() {
  return (
    <div className={cx("wrapper")}>
      <TitleMovie />
      <div className={cx("inforMovie")}>
        <div className={cx("content")}>
          <MenuActor />
          {/* <Social> */}
          {/* <MenuMedia> */}
          {/* <MenuRecomment> */}
          <MenuRecomment/>
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
