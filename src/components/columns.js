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
  const klass = css`
    display: flex;
    flex-direction: ${typeMap[type]};
    align-items: ${align};
    margin: -2vmin;
  `;
  const childKlass = css`
    flex: 1 0 auto;
    margin: 2vmin;
  `;
  return <div className={klass}>
    {children.map((child, index) => <div className={childKlass} key={index}>{child}</div>)}
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
