import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { toCanvas } from 'qrcode';

const qrcodeClass = css`
  display: block;
  margin: 0 auto;
`;

export default function QRCode({ text, width, height, className = '' }) {
  return <canvas className={`${qrcodeClass} ${className}`} ref={canvas => {
    if (!canvas) return;
    const opts = {};
    if (width > 0) {
      opts.width = width;
    }
    if (height > 0) {
      opts.height = height;
    }
    toCanvas(canvas, text, opts);
  }}></canvas>;
}

QRCode.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};
QRCode.defaultProps = {
  className: ''
};
