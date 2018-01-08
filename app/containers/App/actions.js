/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_NEWS,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_ERROR,
  LOAD_ARTICLE,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} rqname The current rqname
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, rqname) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    rqname,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}


/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadNews() {
  return {
    type: LOAD_NEWS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} news The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function newsLoaded(news) {
  return {
    type: LOAD_NEWS_SUCCESS,
    news,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function newsLoadingError(error) {
  return {
    type: LOAD_NEWS_ERROR,
    error,
  };
}


/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadArticle() {
  return {
    type: LOAD_ARTICLE,
  };
}


/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} news The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function articleLoaded(article, showid) {
  return {
    type: LOAD_ARTICLE_SUCCESS,
    article,
    showid,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function articleLoadingError(error) {
  return {
    type: LOAD_ARTICLE_ERROR,
    error,
  };
}
