import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import NewsList from '../index';

describe('<NewsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <NewsList loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NewsList
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <NewsList
        news={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
