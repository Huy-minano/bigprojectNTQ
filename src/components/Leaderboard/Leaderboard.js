import classNames from "classnames/bind"
import styles from './Leaderboard.module.scss'
const cx = classNames.bind(styles)
const Leaderboard = () => {
  return (
    <div className={cx('wrapper')}>Leaderboard</div>
  )
}

export default Leaderboard