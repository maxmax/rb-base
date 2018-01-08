import React from 'react';
import PropTypes from 'prop-types';

import marked from 'marked';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function Article({ loading, error, article }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (article !== false) {
    return (
      <article>
        <h1>{article.title}</h1>
        <div className="major" dangerouslySetInnerHTML={renderMarkdown(article.body)} />
      </article>
    );
  }

  return null;
}

const renderMarkdown = (content) => ({
  __html: marked(content, { sanitize: true }),
});

Article.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  article: PropTypes.any,
};

export default Article;
