import React from 'react';
import PropTypes from 'prop-types';
import { ArrowUpRight20 } from '@carbon/icons-react';

export default class LinkOut extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * Specify where link should go
     */
    href: PropTypes.string,
  };

  render() {
    const { children, href } = this.props;

    return (
      <div className="homepage--linkout">
        <div className="ibm--col-sm-4 ibm--col-md-8 ibm--col-lg-16 homepage--link-wrapper">
          <a href={href} alt="Read more">
            {children}
            <ArrowUpRight20 aria-label="read more" />
          </a>
        </div>
      </div>
    );
  }
}
