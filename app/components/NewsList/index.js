import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TruncatedContent from 'components/TruncatedContent';

import NewsLink from './NewsLink';

function NewsList({ loading, error, news }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (news !== false) {
    const newsItems = news.map((item) =>
      (<div key={item.sys.id}>
        <h3>
          <NewsLink to={`news/${item.sys.id}`}>
            {item.fields.title}
          </NewsLink>
        </h3>
        <TruncatedContent
          maxLength={325}
          text="read more +"
          content={item.fields.body}
          linkTo={`news/${item.sys.id}`}
        />
      </div>)
    );
    return <div>{newsItems}</div>;
  }

  return null;
}

NewsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  news: PropTypes.any,
};

export default NewsList;
