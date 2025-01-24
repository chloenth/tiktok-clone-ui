/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

import Button from '~/components/Button';

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });

  return (
    <div>
      <Button
        className={classes}
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
