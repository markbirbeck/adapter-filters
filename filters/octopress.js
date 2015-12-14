/**
 * Octopress-compatible filters.
 */

var path = require('path');

var base = require('./base');
var _ = require('lodash');

_.extend(exports, require('./jekyll'));

/**
 * Allow non-camelcase naming:
 */
/*jscs:disable requireCamelCaseOrUpperCaseIdentifiers*/

exports.condense_spaces = base.condenseSpaces;

exports.shorthand_url = base.extract.bind(null, /https?:\/\/(\S+)/);
exports.strip_slash = base.extract.bind(null, /(.+|^)\/$/);
exports.titlecase = base.titlecase;

exports.category_links = function(categories) {
  var output = '';

  if (categories) {
    if (!Array.isArray(categories)) {
      categories = [categories];
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

exports.category_link = function(category) {
  var dir = exports.options.categoryDir || '';
  var url = path.join(dir, encodeURIComponent(category));

  return '<a class=\'category\' href=\'' + url + '\'>' + category + '</a>';
};

exports.expand_urls = function(s, url) {
  return base.replace(
    '(\\s+(href|src)\\s*=\\s*["|\']{1})(/[^/>]{1}[^"\'>]*)',
    '$1' + ((!url || url === '') ? '/' : url) + '$3',
    s
  );
};

exports.ordinalize = base.strftime.bind(null, '%b %o, %Y');

exports.raw_content = base.extract.bind(null,
    /<div class="entry-content">([\s\S]*)?<\/div>\s*<(footer|\/article)>/);

exports.format_date = function(date, format) {
  if (!format || format === 'ordinal' || format === '') {
    return exports.ordinalize(date);
  }
  return exports.date(date, format);
}
