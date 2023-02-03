import classNames from "classnames/bind"
import MenuContent from "./components/MenuContent/MenuContent"
import MenuQuantity from "./components/MenuQuantity"
import styles from './Movies.module.scss'

const cx = classNames.bind(styles)

function Movies() {
  return (
      <div className = {cx('wrapper')}>
        <MenuQuantity/>
        <MenuContent/>
      </div>
  )
}

export default Movies
