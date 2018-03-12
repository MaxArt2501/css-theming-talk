import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'spectacle';

export default function Octopus({ className = '' }) {
  return <div className={className}>
    <Image src="img/head.png" className="head"></Image>
    <Image src="img/tentacles.png" className="tentacles"></Image>
  </div>;
}

Octopus.propTypes = {
  className: PropTypes.string
};
Octopus.defaultProps = {
  className: ''
};
