import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import HeaderHome from "./HeaderHome";
import MenuTrending from "./MenuTrending/MenuTrending.js";
import MenuTrailer from "./MenuTrailer/MenuTrailer.js";
import MenuPopular from "./MenuPopular";
import LeaderBoard from "./LeaderBoard";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <HeaderHome />
      <MenuTrending title="Trending" />
      <MenuTrailer title="Latest Trailers" />
      <MenuPopular title="What's Popular" />
      <LeaderBoard title="Leaderboard" />
    </div>
  );
}

export default Home;
