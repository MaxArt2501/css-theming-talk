import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Link,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow
} from 'spectacle';
import { css } from 'emotion';

const browsers = [ 'chrome', 'firefox', 'safari', 'edge', 'samsung' ];

export default function BrowserSupport({ support, canIUse }) {
  const wrapperClass = css`
    border: 20px solid transparent;
    box-shadow: 0 0 30px rgba(0,0,0,.6);
    border-radius: 10px;
  `;
  const headerClass = css`
    padding: 15px 0;
  `;
  const itemClass = css`
    border-top: 4px solid;
    padding: 20px 0;
    font-size: 50px;
  `;
  return <div className={wrapperClass}>
    <Table>
      <TableHeader>
        <TableRow>
          {browsers.map(name => <TableHeaderItem key={name} className={headerClass}>
            <Image src={`img/${name}.png`}></Image>
          </TableHeaderItem>)}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {browsers.map(name => <TableItem key={name} textColor='text' className={itemClass}>
            { support[name] || '' }
          </TableItem>)}
        </TableRow>
      </TableBody>
    </Table>
    {canIUse && <Link href={`https://caniuse.com/#feat=${canIUse}`}>
    {`caniuse.com/#feat=${canIUse}`}
    </Link>}
  </div>;
}

BrowserSupport.propTypes = {
  support: PropTypes.objectOf(PropTypes.string).isRequired,
  canIUse: PropTypes.string
};
