/**
 *
 * PostsShow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectArticle, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import Article from 'components/Article';
import Section from './Section';
import { loadArticle } from '../App/actions';
import { changeShowId } from './actions';
import { makeSelectPostsShow } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class PostsShow extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.onChangeContent(this.props.match.params.id);
    // if (this.props.match.params.id && this.props.match.params.id.trim().length > 0) {
    //  this.props.onChangeContent(this.props.match.params.id);
    // }
  }

  render() {
    const { loading, error, article, pageid } = this.props;
    const articleShowProps = {
      loading,
      error,
      article,
    };

    return (
      <div>
        <Helmet>
          <title>PostsShow</title>
          <meta name="description" content="Description of PostsShow" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <Section>
          <div>
            <small>
              {pageid}
            </small>
          </div>
          <Article {...articleShowProps} />
        </Section>
      </div>
    );
  }
}

PostsShow.propTypes = {
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  article: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  pageid: PropTypes.string,
  onChangeContent: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  article: makeSelectArticle(),
  pageid: makeSelectPostsShow(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeContent: (evt) => {
      dispatch(changeShowId(evt));
      dispatch(loadArticle());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'postsShow', reducer });
const withSaga = injectSaga({ key: 'postsShow', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostsShow);
