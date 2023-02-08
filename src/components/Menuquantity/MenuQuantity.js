import classNames from "classnames/bind";
import Button from "../Button";
import styles from "./MenuQuantity.module.scss";

const cx = classNames.bind(styles);

function MenuQuantity(props) {
  const checkPM=props.checkPM
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h3>Search Results</h3>
      </div>
      <div className={cx("content")}>
        <ul>
          {
            checkPM ? (<li className={cx("row")} onClick={()=>{props.onMovie()}} style={{background:"gray"}}>
            <Button menuResult>Movies</Button>
            <span className={cx("quantity")}>{props.movie}</span>
          </li>) : (<li className={cx("row")} onClick={()=>{props.onMovie()}}>
            <Button menuResult>Movies</Button>
            <span className={cx("quantity")}>{props.movie}</span>
          </li>)
          }
          <li className={cx("row")}>
            <Button menuResult>TV Shows</Button>
            <span className={cx("quantity")}>10,000</span>
          </li>
          {
            !checkPM ? (<li className={cx("row")} onClick={()=>{props.onPeople()}} style={{background:"gray"}}>
            <Button menuResult>People</Button>
            <span className={cx("quantity")}>{props.person}</span>
          </li>) : (<li className={cx("row")} onClick={()=>{props.onPeople()}}>
            <Button menuResult>People</Button>
            <span className={cx("quantity")}>{props.person}</span>
          </li>)
          }
          <li className={cx("row")}>
            <Button menuResult>Collections</Button>
            <span className={cx("quantity")}>10,000</span>
          </li>
          <li className={cx("row")}>
            <Button menuResult>Companies</Button>
            <span className={cx("quantity")}>10,000</span>
          </li>
          <li className={cx("row")}>
            <Button menuResult>Keywords</Button>
            <span className={cx("quantity")}>10,000</span>
          </li>
          <li className={cx("row")}>
            <Button menuResult>Networks</Button>
            <span className={cx("quantity")}>10,000</span>
          </li>
        </ul>
      </div>
      <div style={{display:"flex"}}>    
        <i className="fa-solid fa-exclamation"></i>
        <p style={{fontSize:"14px"}}>
          Tip:You can use the 'y:' filter to narrow your results by year.
          Example:'star wars y:1977'. There are no movies that matched your
          query. The Movie Database (TMDB)
        </p>
      </div>
    </div>
  );
}

export default MenuQuantity;
