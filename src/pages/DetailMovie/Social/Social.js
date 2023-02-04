import classNames from "classnames/bind";
import styles from "./Social.module.scss";
import Menu from "../../../components/Menu";
import Review from "./Review";
import Discussion from "./Discussions";
import { useState } from "react";

const cx = classNames.bind(styles);

function Social({ title }) {
  const subMenu = ["Reviews", "Discussions"];
  const [content, setContent] = useState("Reviews");
  const handleChangeContent = (type) => {
    setContent(type);
  };

  let Component = content === "Reviews" ? Review : Discussion;

  let extend = content === "Reviews" ? "Read All Reviews" : "Go to Discussions";

  return (
    <div className={cx("wrapper")}>
      <Menu title={title} subMenu={subMenu} onClick={handleChangeContent}>
        <Component />
      </Menu>
      <h3 className={cx("extend")}>{extend}</h3>
    </div>
  );
}

export default Social;
