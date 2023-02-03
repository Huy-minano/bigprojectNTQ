import classNames from "classnames/bind"
import styles from './MenuQuantity.module.scss'
import Button from '../../../../components/Button'


const cx = classNames.bind(styles)

function MenuQuantity() {
  return (
    <div className = {cx('wrapper')}>
      <div className={cx('title')}>
        <h3>Search Results</h3>
      </div>
      <div className={cx('content')}>
        <ul>
          <li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>10,000</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>10,000</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>10,000</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>10,000</span>
          </li><li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>10,000</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>10,000</span>
          </li>
          <li className={cx('row')}>
            <Button menuResult>Movies</Button>
            <span className={cx('quantity')}>10,000</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuQuantity
