import React from "react";
import classNames from "classnames/bind";
import styles from "./PersenCircle.module.scss";
const cx = classNames.bind(styles);
const PersenCircle = ({persen,display}) => {
  return (
    <div className={cx("user-rate")} style={{display:`${display}`}}>
      <div
        className={cx("rate1")}
        style={
          Math.floor(persen*10) > 70
            ? {
                background: `linear-gradient(to left, rgb(53, 177, 64) ${Math.floor(persen*10)}%, hwb(125deg 2% 81%) ${
                  100 - Math.floor(persen*10)
                }%) right`,
              }
            : {
                background: `linear-gradient(to left, #d2d531 ${Math.floor(persen*10)}%, hwb(125deg 2% 81%) ${
                  100 - Math.floor(persen*10)
                }%) right`,
              }
        }
      ></div>
      <div className={cx("rate")}>{Math.floor(persen*10)}%</div>
    </div>
  );
};

export default PersenCircle;
