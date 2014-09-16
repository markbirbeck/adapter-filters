/**
 * Octopress-compatible filters.
 */

var base = require('./base');

/**
 * Allow non-camelcase naming:
 */
/*jshint camelcase:false*/

exports.condense_spaces = base.condenseSpaces;

exports.shorthand_url = base.extract.bind(null, /https?:\/\/(\S+)/);
exports.strip_slash = base.extract.bind(null, /(.+|^)\/$/);
exports.titlecase = base.titlecase;
