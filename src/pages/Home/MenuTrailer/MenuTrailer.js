import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./MenuTrailer.module.scss";

import CardFilm from "./CardFilm/CardFilm.js";
import Menu from "../../../components/Menu";

const cx = classNames.bind(styles);

function MenuTrailer({ title }) {
  const subMenu = ["On TV", "In Theaters"];
  const [content, setContent] = useState("On TV");
  const handleChangeContent = (type) => {
    setContent(type);
  };

  let data = {
    img: "https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    rate: 88,
    name: "The Last of Us",
    release: "Jan 15, 2023",
  };

  switch (content) {
    case "On TV":
      data = {
        img: "https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        rate: 88,
        name: "The Last of Us",
        release: "Jan 15, 2023",
      };
      break;
    case "In Theaters":
      data = {
        img: "https://www.themoviedb.org/t/p/w220_and_h330_face/kQ6EfC1igZRNSSsnQbLG2mrOLwj.jpg",
        rate: 22,
        name: "Való Világ",
        release: "Sep 09, 2002",
      };
      break;
    default:
      break;
  }

  return (
    <div className={cx("wrapper")}>
      <Menu title={title} subMenu={subMenu} onClick={handleChangeContent}>
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
        <CardFilm data={data} />
      </Menu>
    </div>
  );
}

export default MenuTrailer;
