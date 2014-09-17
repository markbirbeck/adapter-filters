/**
 * Octopress-compatible filters.
 */

var path = require('path');

var base = require('./base');
var _ = require('lodash');

/**
 * Allow non-camelcase naming:
 */
/*jshint camelcase:false*/

exports.condense_spaces = base.condenseSpaces;

exports.shorthand_url = base.extract.bind(null, /https?:\/\/(\S+)/);
exports.strip_slash = base.extract.bind(null, /(.+|^)\/$/);
exports.titlecase = base.titlecase;

exports.category_links = function (categories){
  var output = '';

  if (categories){
    if (!Array.isArray(categories)){
      categories = [ categories ];
    }

    /**
     * Sort the list of categories, create a link for each one, and then
     * create a comma-separated list of all the links:
     */

    output = _.sortBy(categories)
      .map(exports.category_link)
      .join(', ');
  }
  return output;
};

exports.category_link = function (category){
  /**
   * [TODO] Get from config.
   */

  var dir = '/categories';
  var url = path.join(dir, encodeURIComponent(category));

  return '<a class=\'category\' href=\'' + url + '\'>' + category + '</a>';
};
