import classNames from "classnames/bind";
import { LIST_LEADERBOARD } from "../../../api/url";
import ItemBoard from "./ItemBoard";
import styles from "./LeaderBoard.module.scss";

const cx = classNames.bind(styles);
const listAll=[] , listEd=[]
LIST_LEADERBOARD.forEach((item)=>{
  listAll.push(item.all)
  listEd.push(item.ed)
})
const maxAll = Math.max(...listAll)
const maxEd = Math.max(...listEd)
LIST_LEADERBOARD.forEach((item)=>{
  item.persentAll=`${(item.all/maxAll)*100}%`
  item.persentEd=`${(item.all/maxEd)*100}%`
})
function LeaderBoard() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h3 className={cx("title")}>Leaderboard</h3>
        <div className={cx("annotate")}>
          <div className={cx("annotate-element")}>
            <div className={cx("dot-type-1")}></div>
            <div className={cx("note")}>All Time Edits</div>
          </div>
          <div className={cx("annotate-element")}>
            <div className={cx("dot-type-2")}></div>
            <div className={cx("note")}>Edits This Week</div>
          </div>
        </div>
      </div>
      <div className={cx("content")}>
        {LIST_LEADERBOARD.map((item) => {
          return (
            <ItemBoard
              name={item.name}
              id={item.id}
              all={item.all}
              ed={item.ed}
              persentAll={item.persentAll}
              persentEd={item.persentEd}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LeaderBoard;
