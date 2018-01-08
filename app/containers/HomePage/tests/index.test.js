/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ReposList from 'components/ReposList';
import { HomePage, mapDispatchToProps } from '../index';
import { changerqname } from '../actions';
import { loadRepos } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the repos list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} repos={[]} />
    );
    expect(renderedComponent.contains(<ReposList loading error={false} repos={[]} />)).toEqual(true);
  });

  it('should render fetch the repos on mount if a rqname exists', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          rqname="Not Empty"
          onChangerqname={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if rqname is an empty string', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          onChangerqname={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if rqname is null', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          rqname=""
          onChangerqname={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangerqname', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangerqname).toBeDefined();
      });

      it('should dispatch changerqname when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const rqname = 'mxstbr';
        result.onChangerqname({ target: { value: rqname } });
        expect(dispatch).toHaveBeenCalledWith(changerqname(rqname));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
