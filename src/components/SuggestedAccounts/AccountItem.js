import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <Image
        className={cx('avatar')}
        src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e18a0fb2e6dd7c2f62a9840652154e41~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=17464&refresh_token=b2971667dca12b2a3a8c94be365528ac&x-expires=1737774000&x-signature=%2FdDzmsv0bXnwfph8ehkG2kFzCh0%3D&shp=a5d48078&shcp=81f88b70'
        alt='Nguyen Van A'
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Quoc Nguyen Phu</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {
  title: PropTypes.string,
};

export default AccountItem;
