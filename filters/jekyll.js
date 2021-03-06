/**
 * Jekyll-compatible filters.
 */

var base = require('./base');
var _ = require('lodash');

_.extend(exports, require('./liquid'));

/**
 * Allow non-camelcase naming:
 */
/*jscs:disable requireCamelCaseOrUpperCaseIdentifiers*/

/**
 * http://en.wikipedia.org/wiki/ISO_8601
 */

exports.date_to_xmlschema = base.strftime.bind(null, '%Y-%m-%dT%H:%M:%S%z');

/**
 * http://www.w3.org/Protocols/rfc822/#z28
 */

exports.date_to_rfc822 = base.strftime.bind(null, '%a, %d %b %Y %H:%M:%S %z');

exports.date_to_string = base.strftime.bind(null, '%d %b %Y');
exports.date_to_long_string = base.strftime.bind(null, '%d %B %Y');

exports.xml_escape = base.xmlEscape;
