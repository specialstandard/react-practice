import React from 'react';
import PropTypes from 'prop-types';
import  './Content.css';
import logo from './monash-logo.svg'

const Content = ({ fontSerif, fontSansSerif, fontMono, handleClick }) => (
  <div className="content">
    <header className="content-header">
      <img src={logo} alt="Monash Logo"/>
      <h1 style={{ fontFamily: `${fontMono}, monospaced` }}>About Us</h1>
    </header>
      <h2 style={{ fontFamily: `${fontSansSerif}, sans-serif` }}>Who we are</h2>
    <section style={{ fontFamily: `${fontSerif}, serif` }}>
      <p>
        At Monash, the desire to make a difference informs everything we do.
        But we go beyond good intentions. We make an impact, both locally and internationally. We are a global university with a presence on four continents. And our plans for the future are ambitious.
      </p>
      <p>
        We have four local campuses throughout Victoria, an international campus in Malaysia, and centres in the People's Republic of China, Italy and India. Each provides an environment that identifies and nurtures talent – and turns that talent into ability.
        We believe the best way to help our people meet the challenges they face is to provide a supportive environment. We champion and support our students so they have a memorable university experience. It's a friendly university – no matter which campus you attend.
      </p>
      <p>
        From collaborative research opportunities, to building community relationships, our focus is always on how we can empower our people to make a positive impact on the world. Things like the World Mosquito Program and the anti-flu drug Relenza.
        Shared ambitions move us forward, faster. The more relevant, useful and powerful connections we can make, the greater our impact will be.
      </p>
      <p>
        Our motto Ancora Imparo ("I am still learning") reminds us that the search for knowledge never ends. We are fired with a restless ambition that pushes us to do things better, to set new benchmarks and to break new ground.
        In order for our students and staff to positively impact their communities and the world, we must equip them and inspire them – so they can be agents of change.
      </p>
      <p>
        We are a product of a proud history. If you'd like to find out more about where we've come from, you can find out more about our history.
      </p>
    </section>
    <button onClick={() => handleClick()}>Generate</button>

  </div>
);

Content.propTypes = {
  fontSerif: PropTypes.string.isRequired,
  fontSansSerif: PropTypes.string.isRequired,
  fontMono: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Content;
