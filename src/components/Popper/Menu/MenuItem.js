import PropTypes from 'prop-types';
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

MenuItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};

export default MenuItem;
