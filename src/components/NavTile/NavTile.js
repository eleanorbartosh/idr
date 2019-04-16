import React from 'react';
import PropTypes from 'prop-types';

export default class NavTile extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const { href, description, title } = this.props;

    return (
      <div>
        <p>{description}</p>
      </div>
    );
  }
}
