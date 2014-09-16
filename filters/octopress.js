/**
 * Octopress-compatible filters.
 */

var base = require('./base');

/**
 * Allow non-camelcase naming:
 */
/*jshint camelcase:false*/

exports.condense_spaces = base.condenseSpaces;

exports.strip_slash = base.extract.bind(null, /(.+|^)\/$/);
