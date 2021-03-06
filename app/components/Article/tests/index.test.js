import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import Article from '../index';

describe('<Article />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <Article loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <Article
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <Article
        news={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
