import classNames from "classnames/bind";
import { useState } from "react";
import ActorCard from "../../DetailMovie/MenuActor/components/ActorCard";
import styles from "./InforDetail.module.scss";
// import MenuFilm from "./MenuFilm";

const cx = classNames.bind(styles);

function InforDetail(props) {
  const creditsMovie=props.creditsMovie
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p style={{fontSize:"13.68px"}}>
        {isReadMore ? text?.slice(0, 500) : text}
        <b onClick={toggleReadMore} style={{color:"aqua"}}>
          {isReadMore ? "...Read more >" : " < Show less"}
        </b>
      </p>
    );
  };
  const {name,biography}=props
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("name")}>{name}</h1>
      <h3 className={cx("title-bio")}>Biography</h3>
      <p className={cx("bio")}>
        <ReadMore>
         {biography}
        </ReadMore>
      </p>
      <h3 className={cx("title-bio")}>Known For</h3>
     <div style={{height:"30%",display:"flex",flexDirection:"row",overflowX:"auto"}}>
     {creditsMovie.map((item) => {
          return (
            <ActorCard
              key={item.id}
              id={item.id}
              original_name={item.title}
              profile_path={item.poster_path}
              link='/detailMovie'
              css="unset"
              fontSize="13px"
              display="none"
            />
          );
        })}
     </div>
    </div>
  );
}

export default InforDetail;