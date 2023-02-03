import Banner from "../../components/Banner/Banner";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import Menufilm from "../../components/Menufilm/Menufilm";
import Menutrailer from "../../components/Menutrailer/Menutrailer";
import Moreinfor from "../../components/Moreinfor/Moreinfor";
import styles from './Home.module.scss';
import classNames from "classnames/bind"
const cx = classNames.bind(styles)
function Home() {
  return (
    <div className={cx('wrapper')}>
      <Banner />
      <div className="main">
        <Menufilm />
      </div>
      
    </div>
  );
}

export default Home;
