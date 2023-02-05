import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./MenuTrending.module.scss";

import CardFilm from "./CardFilm/CardFilm.js";
import Menu from "../../../components/Menu";

const cx = classNames.bind(styles);

function MenuTrending({ title }) {
  const subMenu = ["Today", "This Week"];
  const [content, setContent] = useState("Today");
  const handleChangeContent = (type) => {
    setContent(type);
  };

  let data = {
    img: "https://www.themoviedb.org/t/p/w220_and_h330_face/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    rate: 75,
    name: "Black Panther: Wakanda Forever",
    release: "Nov 09, 2022",
  };

  switch (content) {
    case "Today":
      data = {
        img: "https://www.themoviedb.org/t/p/w220_and_h330_face/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        rate: 75,
        name: "Black Panther: Wakanda Forever",
        release: "Nov 09, 2022",
      };
      break;
    case "This Week":
      data = {
        img: "https://www.themoviedb.org/t/p/w220_and_h330_face/2g9ZBjUfF1X53EinykJqiBieUaO.jpg",
        rate: 80,
        name: "Plane",
        release: "Jan 13, 2023",
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

export default MenuTrending;
