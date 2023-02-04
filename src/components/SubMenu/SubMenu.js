import classNames from "classnames/bind";
import styles from "./SubMenu.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);

function SubMenu({ data, onClick }) {
  const [select, setSelect] = useState(0);

  const handleClick = (id) => {
    setSelect(id);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        {data.map((item, index) => {
          const isActive = select === index ? true : false;
          return (
            <div
              key={index}
              className={cx("item", { isActive })}
              onClick={() => {
                onClick(item);
                handleClick(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SubMenu;
