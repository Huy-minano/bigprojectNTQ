import classNames from "classnames/bind";
import styles from "./InforDetail.module.scss";
import MenuFilm from "./MenuFilm";

const cx = classNames.bind(styles);

function InforDetail() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("name")}>Tobey Maguire</h1>
      <h3 className={cx("title-bio")}>Biography</h3>
      <p className={cx("bio")}>
        Tobias Vincent Maguire (born June 27, 1975) is an American actor and
        film producer. He is best known for playing the title character from Sam
        Raimi's Spider-Man trilogy (2002–2007), a role he later reprised in
        Spider-Man: No Way Home (2021).
        <br />
        <br />
        He started his career in supporting roles in the films This Boys Life
        (1993), The Ice Storm, Deconstructing Harry (both 1997), and Fear and
        Loathing in Las Vegas (1998). His leading roles include Pleasantville
        (1998), Ride with the Devil (1999), The Cider House Rules (1999), Wonder
        Boys (2000), Seabiscuit (2003), The Good German (2006), Brothers (2009),
        The Great Gatsby (2013), and Pawn Sacrifice (2014).
        <br />
        <br />
        He has received two Screen Actors Guild Award nominations for
        Outstanding Cast in a Motion Picture for Cider House Rules (1999) and
        Seabiscut (2003) as well as a Golden Globe Award nomination for Best
        Actor in a Motion Picture Drama for Brothers (2009). Maguire established
        his own production company in 2012 called Material Pictures, and
        co-produced Good People (2012), and Pawn Sacrifice (2014).
      </p>
      <MenuFilm title="Known For" />
    </div>
  );
}

export default InforDetail;
