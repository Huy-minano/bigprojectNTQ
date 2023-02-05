import classNames from "classnames/bind";
import styles from "./CardFilm.module.scss";
import Button from "../../../../../components/Button";

const cx = classNames.bind(styles);

function CardFilm() {
  return (
    <div className={cx("card")}>
      <img
        alt="poster"
        className={cx("poster")}
        src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg"
      />

      <div className={cx("details")}>
        <div className={cx("title")}>
          <h4>
            The Chronicles of Narnia: The Lion, the Witch and the Wardrobe
          </h4>
          <span className={cx("date")}>December 7, 2005</span>
        </div>
        <div className={cx("overview")}>
          <p>
            Siblings Lucy, Edmund, Susan and Peter step through a magical
            wardrobe and find the land of Narnia. There, they discover a
            charming, once peaceful kingdom that has been plunged into eternal
            winter by the evil White Witch, Jadis. Aided by the wise and
            magnificent
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
