import classNames from "classnames/bind";
import styles from "./Media.module.scss";
import Menu from "../../../components/Menu";
import MostPopular from "./MostPopular";
import Videos from "./Videos";
import Backdrops from "./Backdrops";
import Posters from "./Posters";
import { useState } from "react";

const cx = classNames.bind(styles);

function Media({ title }) {
  const subMenu = ["Most Popular", "Videos", "Backdrops", "Posters"];
  const [content, setContent] = useState("Most Popular");
  const handleChangeContent = (type) => {
    setContent(type);
  };

  let Component = MostPopular;
  let extend = "";
  switch (content) {
    case "Most Popular":
      Component = MostPopular;
      extend = "";
      break;
    case "Videos":
      Component = Videos;
      extend = "View All Videos";
      break;
    case "Backdrops":
      Component = Backdrops;
      extend = "View All Backdrops";
      break;
    case "Posters":
      Component = Posters;
      extend = "View All Posters";
      break;
    default:
      break;
  }

  return (
    <div className={cx("wrapper")}>
      <Menu title={title} subMenu={subMenu} onClick={handleChangeContent}>
        <Component />
        <Component />
        <Component />
        <Component />
        <Component />
      </Menu>
      <h3 className={cx("extend")}>{extend}</h3>
    </div>
  );
}

export default Media;
