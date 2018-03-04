import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const typeMap = {
  h: 'row',
  hr: 'row-reverse',
  v: 'column',
  vr: 'column-reverse'
};

export default function Columns({ type, align, children }) {
  const style = css`
    display: flex;
    flex-direction: ${typeMap[type]};
    align-items: ${align};
    margin: -20px;
  `;
  const childStyle = css`
    flex: 1 0 auto;
    margin: 20px;
  `;
  return <div className={style}>
    {children.map((child, index) => <div className={childStyle} key={index}>{child}</div>)}
  </div>;
}

Columns.propTypes = {
  type: PropTypes.oneOf([ 'h', 'v', 'hr', 'vr' ]),
  align: PropTypes.oneOf([ 'center', 'flex-start', 'flex-end', 'space-between', 'space-around' ])
};
Columns.defaultProps = {
  type: 'h',
  align: 'flex-start'
};
