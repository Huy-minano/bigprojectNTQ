import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TitleHomeChild.module.scss";

const cx = classNames.bind(styles);

const TitleHomeChild= (props) => {
  const [checkActive, setCheckActive] = useState(false)
  const onToday = () =>{
    setCheckActive(false)
    props.handleToday()
  }
  const onTheWeek =() =>{
    setCheckActive(true)
    props.handleThisWeek()
  }
  return (
    <div style={{display:"flex",alignItems:"center",gap:"50px"}}>
      <h2>{props.title}</h2>
      <div className={cx('btnTrend')}>
        <button className={!checkActive && cx('active')} style={{fontWeight:"bold",fontSize:"15px",height:"30px",width:"110px",borderRadius:"20px"}} onClick={onToday}>{props.btn1}</button>
        <button className={checkActive && cx('active')} style={{fontWeight:"bold",fontSize:"15px",height:"30px",width:"110px",borderRadius:"20px"}} onClick={onTheWeek}>{props.btn2}</button>
      </div>
    </div>
  );
};

export default TitleHomeChild;
