import classNames from "classnames/bind"
import ChildMenutrailer from "./ChildMenutrailer/ChildMenutrailer"
import styles from './Menutrailer.module.scss'
const cx = classNames.bind(styles)
const Menutrailer = () => {
  return (
    <div className={cx('wrapper')}>
      <ChildMenutrailer/>
    </div>
  )
}

export default Menutrailer