/**
 * Octopress-compatible filters.
 */

var path = require('path');

var base = require('./base');

/**
 * Allow non-camelcase naming:
 */
/*jshint camelcase:false*/

exports.condense_spaces = base.condenseSpaces;

exports.shorthand_url = base.extract.bind(null, /https?:\/\/(\S+)/);
exports.strip_slash = base.extract.bind(null, /(.+|^)\/$/);
exports.titlecase = base.titlecase;

exports.category_link = function (category){
  /**
   * [TODO] Get from config.
   */

  var dir = '/categories';
  var url = path.join(dir, encodeURIComponent(category));

  return '<a class=\'category\' href=\'' + url + '\'>' + category + '</a>';
};
