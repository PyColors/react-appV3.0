import Footer from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <h4>Yes We Dance</h4>
      <p>Paris</p>
      <p>Copyright © 2016</p>
    )).toEqual(true);
  });
});
