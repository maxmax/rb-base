import React from 'react';
import { shallow } from 'enzyme';

import TruncatedContent from './../index';

describe('<TruncatedContent />', () => {
  it('should render component with semantic className', () => {
    const renderedComponent = shallow(
      <TruncatedContent
        maxLength={50}
        text="read more +"
        content="Testing truncated content"
        linkTo="/test"
      />
    );
    expect(renderedComponent.find('div.truncated-content')).toHaveLength(1);
  });
});
