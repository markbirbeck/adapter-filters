/**
 * Liquid-compatible filters.
 */

var base = require('./base');

/**
 * Many of the function names we don't have any control over, so allow
 * non-camelcase naming:
 */
/*jshint camelcase:false*/

exports.strip = base.trim;

exports.date = function (date, format){
  return base.strftime(format, date);
};
