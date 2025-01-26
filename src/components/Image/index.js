import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(function Image(
  { src, alt, className, fallback: customFallback = images.noImage, ...props },
  ref
) {
  const [fallback, SetFallback] = useState('');

  const handleError = () => {
    SetFallback(customFallback);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
