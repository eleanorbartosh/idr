import React from 'react';
import PropTypes from 'prop-types';

export default class NavTile extends React.Component {
  static PropTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    svgicon: PropTypes.string,
  };

  render() {
    const { href, title, description, svgicon } = this.props;
    return (
      <div className="ibm--col-sm-4 ibm--col-md-3 ibm--col-lg-5 nav--tile">
        <a href={href}>
          <div className="nav--tile-content-wrapper">
            <p className="bx--type-productive-heading-05">{title}</p>
            <p>{description}</p>
            {svgicon}
            <div>Read more</div>
          </div>
        </a>
      </div>
    );
  }
}
