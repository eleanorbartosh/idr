import React from 'react';
import { Link } from 'gatsby';

export class HomepageHeader extends React.Component {
  componentDidMount() {
    document.title = 'IBM Design Research';
  }

  render() {
    // Banner image
    const bannerImg = require('../../content/homepage/images/homepage_img.jpg');

    const homeTitle = (
      <h3 className="homepage--header__title">
        <span>
          An authentic focus on people begins with acknowledging,{' '}
          <span className="homepage--header__title_style">
            we are not our users.
          </span>{' '}
        </span>
      </h3>
    );

    return (
      <div>
        <section className="homepage--header">
          <div className="ibm--grid">
            <div className="ibm--row">
              <div className="ibm--col-lg-4 ibm--offset-lg-4">{homeTitle}</div>
            </div>
          </div>
          {/* <img src={bannerImg} alt="Carbon Design System banner image" /> */}
        </section>
        <section className="homepage--callout">
          <div className="ibm--grid">
            <div className="ibm--row">
              <aside
                aria-label="header callout"
                className="ibm--col-md-8 ibm--col-lg-8 ibm--offset-lg-4">
                <h4 className="bx--type-heading-02">
                  What is Design
                  <br />
                  Research
                </h4>
              </aside>
              <div className="ibm--col-lg-8 ibm--col-md-4 ibm--offset-lg-4">
                <p className="bx--type-expressive-paragraph-01">
                  The practice of design research incorporates a rigorous study
                  of people and the ecosystems in which they exist. Through the
                  practice, teams continuously build understanding and empathy
                  through empirical observation, experience, and making.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export class HomepageTileNav extends React.Component {
  render() {
    return (
      <div className="homepage--callout homepage--callout--pink">
        <div className="ibm--grid">
          <section className="ibm--row">
            <div
              aria-label="guiding principles"
              className="ibm--col-md-4 ibm--col-lg-4 ibm--offset-lg-4 homepage--nav">
              <div className="homepage--nav-tile">
                <p>Guiding Principles</p>
                <p className="bx--type-productive-heading-05">
                  A foundation for great experiences
                </p>

                <img src="../../content/homepage/images/double-circle.svg" />

                <Link to="#" alt="Read more">
                  Read more
                </Link>
              </div>
            </div>
            <div
              aria-label="research in practice"
              className="ibm--col-md-4 ibm--col-lg-4 homepage--nav">
              <div className="homepage--nav-tile">
                <p>Research in practice</p>
                <p className="bx--type-productive-heading-05">
                  Establish a shared vocabulary
                </p>
                <Link to="#" alt="Read more">
                  Read more
                </Link>
              </div>
            </div>
            <div
              aria-label="ethics and responsibilities"
              className="ibm--col-md-4 ibm--col-lg-4 homepage--nav">
              <div className="homepage--nav-tile">
                <p>Ethics & Responsibilities</p>
                <p className="bx--type-productive-heading-05">
                  The design research code of conduct
                </p>
                <Link to="#" alt="Read more">
                  Read more
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export class HomepageWhyDoIt extends React.Component {
  render() {
    return (
      <section className="homepage--callout">
        <div className="ibm--grid">
          <div className="ibm--row">
            <aside
              aria-label="header callout"
              className="ibm--col-md-8 ibm--col-lg-8 ibm--offset-lg-4">
              <h4 className="bx--type-heading-02">Why do it?</h4>
            </aside>
            <div
              className="ibm--col-lg-8 ibm--col-md-8 ibm--offset-lg-4"
              style={{ marginBottom: `2rem` }}>
              <p className="bx--type-expressive-paragraph-01">
                Design research is at the heart of Enterprise Design Thinking.
                If you're not practicing design research, you're not working in
                the Loop. Design research helps teams uncover insights and
                inform the experiences we create for people.
              </p>
            </div>

            <div className="ibm--col-lg-8 ibm--col-md-8 ibm--offset-lg-4">
              <p className="bx--type-expressive-paragraph-01">
                It turns out good design really is good business. Learn more
                about the business impact of Enterprise Design Thinking in this{' '}
                <Link to="#" alt="Forrester report">
                  Forrester report
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
