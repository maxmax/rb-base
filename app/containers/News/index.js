/**
 *
 * News
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import NewsList from 'components/NewsList';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectNews, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadNews } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Section from './Section';

export class News extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { loading, error, news } = this.props;
    const newsListProps = {
      loading,
      error,
      news,
    };

    return (
      <div>
        <Helmet>
          <title>News</title>
          <meta name="description" content="Description of News" />
        </Helmet>
        <h2><FormattedMessage {...messages.header} /></h2>
        <Section>
          <NewsList {...newsListProps} />
        </Section>
      </div>
    );
  }
}

News.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  news: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  news: makeSelectNews(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return (
    dispatch(loadNews())
  );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'news', reducer });
const withSaga = injectSaga({ key: 'news', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(News);
