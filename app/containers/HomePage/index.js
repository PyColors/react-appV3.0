/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import H2 from 'components/H2';
import H3 from 'components/H3';

import styles from './styles.css';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
      <h1>This is the Homepage!</h1>

      <section className={styles.second}>
        <h3>Simple ! Sans stress. Sans pub.</h3>
        <h3>Nous gérons des playlists personnalisées basées sur votre personnalité</h3>
      </section>

      <section className={styles.three}>
      <div className={styles.mask}>
        <h2>Offres</h2>
      </div>
      </section>

      </div>
    );
  }
}
