/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

import Button from '~/components/Button';

function MenuItem({ data, onClick }) {
  return (
    <div>
      <Button
        className={cx('menu-item')}
        leftIcon={data.icon}
        to={data.to}
        onClick={onClick}
      >
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
