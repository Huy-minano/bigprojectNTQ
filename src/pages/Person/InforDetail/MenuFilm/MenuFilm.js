import classNames from "classnames/bind";
import styles from "./MenuFilm.module.scss";

import CardFilm from "./CardFilm/CardFilm.js";
import Menu from "../../../../components/Menu";

const cx = classNames.bind(styles);

function MenuFilm({ title }) {

  let data = {
    img: "https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    rate: 88,
    name: "The Last of Us",
    release: "Jan 15, 2023",
  };


  return (
    <div className={cx("wrapper")}>
      <Menu title={title}>
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

export default MenuFilm;
