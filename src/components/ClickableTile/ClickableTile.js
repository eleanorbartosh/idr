import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ClickableTile } from 'carbon-components-react';
import {
  Launch20,
  Tools20,
  Pdf20,
  Document20,
  Download20,
} from '@carbon/icons-react';

export default class ClickTile extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    readtime: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    excerpt: PropTypes.string,
    dark: PropTypes.string,
  };

  render() {
    const {
      children,
      href,
      readtime,
      author,
      title,
      type,
      description,
      excerpt,
      dark,
    } = this.props;

    const classNames = classnames({
      tile: true,
      'tile--resource': type === 'resource',
      'tile--article': type === 'article',
      'tile--dark': dark,
    });

    if (type === 'resource') {
      return (
        <div className={classNames}>
          <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
            <div className="bx--aspect-ratio--object">
              <ClickableTile
                target="_blank"
                rel="noopener noreferrer"
                href={href}>
                <div className="tile__info">
                  <h5>{title}</h5>

                  <div className="tile__caption">
                    {description ? (
                      <p className="tile__description">{description}</p>
                    ) : null}
                    {author ? <p className="tile__author">{author}</p> : null}
                    {readtime ? <p className="tile__date">{readtime}</p> : null}
                  </div>
                </div>
                <div className="tile__img">
                  <Document20 aria-label="Open resource" />
                </div>
                <div className="tile__link-icon">
                  <Download20 aria-label="Open resource" />
                </div>
              </ClickableTile>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'pdf') {
      return (
        <div className="tile--resource">
          <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
            <div className="bx--aspect-ratio--object">
              <ClickableTile
                target="_blank"
                rel="noopener noreferrer"
                href={href}>
                <div className="tile__info">
                  <h5>{title}</h5>

                  <div className="tile__caption">
                    {description ? (
                      <p className="tile__description">{description}</p>
                    ) : null}
                    {author ? <p className="tile__author">{author}</p> : null}
                    {readtime ? <p className="tile__date">{readtime}</p> : null}
                  </div>
                </div>
                <div className="tile__img">
                  <Pdf20 aria-label="Open resource" />
                </div>
                <div className="tile__link-icon">
                  <Download20 aria-label="Open resource" />
                </div>
              </ClickableTile>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'tools') {
      return (
        <div className="tile--resource" style={{ paddingBottom: `2rem` }}>
          <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
            <div className="bx--aspect-ratio--object">
              <ClickableTile
                target="_blank"
                rel="noopener noreferrer"
                href={href}>
                <div className="tile__info">
                  <h5>{title}</h5>

                  <div className="tile__caption">
                    {description ? (
                      <p className="tile__description">{description}</p>
                    ) : null}
                    {author ? <p className="tile__author">{author}</p> : null}
                    {readtime ? <p className="tile__date">{readtime}</p> : null}
                  </div>
                </div>
                <div className="tile__img">
                  <Tools20 aria-label="Open resource" />
                </div>
                <div className="tile__link-icon">
                  <Launch20 aria-label="Open resource" />
                </div>
              </ClickableTile>
            </div>
          </div>
        </div>
      );
    }

    if (type !== 'resource') {
      return (
        <ClickableTile
          target="_blank"
          rel="noopener noreferrer"
          className={classNames}
          href={href}>
          <div className="tile__img">{children}</div>
          <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
            <div className="bx--aspect-ratio--object">
              <div className="tile__info ">
                <div className="tile__info-title ">
                  <h5>{title}</h5>
                </div>
                <div className="tile__caption">
                  {author ? <p className="tile__author">{author}</p> : null}
                  {readtime ? <p className="tile__date">{readtime}</p> : null}
                  {excerpt ? <p className="tile__excerpt">{excerpt}</p> : null}
                </div>
              </div>
            </div>
          </div>
        </ClickableTile>
      );
    }
  }
}
