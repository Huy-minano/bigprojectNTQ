import React from "react";
import classNames from "classnames/bind";
import styles from "./LeaderBoard.module.scss";
const cx = classNames.bind(styles);
const ItemBoard = ({ name, id, ed, all,persentAll,persentEd,color }) => {
  return (
    <div className={cx("element")} key={id}>
      <div className={cx("avatar")} style={{background:`${color}`,border:"2px solid black"}}>{name.split('')[0]}</div>
      <div className={cx("parameter")}>
        <h4 className={cx("name")}>{name}</h4>

        <div className={cx("chart-number")}>
          <div className={cx("chart-type-1")} style={{width:`${persentAll}`}}></div>
          <div className={cx("number")}>{all}</div>
        </div>

        <div className={cx("chart-number")}>
          <div className={cx("chart-type-2")} style={{width:`${persentEd}`}}></div>
          <div className={cx("number")}>{ed}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemBoard;
