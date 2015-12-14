/**
 * Basic filter functions.
 */

var strftime = require('strftime');

exports.concat = function(a, b) {
  if (!b) {
    b = '';
  } else if (typeof b !== 'string') {
    b = String(b);
  }

  if (!a) {
    a = '';
  } else if (typeof a !== 'string') {
    a = String(a);
  }
  return a.concat(b);
};

exports.condenseSpaces = function(s) {
  if (typeof s !== 'string') {
    s = String(s);
  }
  return s.replace(/\s{2,}/g, ' ');
};

/**
 * We have the format first so that we can use bind() to create
 * new functions:
 */

exports.extract = function(re, s) {
  if (typeof s !== 'string') {
    s = String(s);
  }
  var match = s.match(re);

  return match ? match[1] : s;
};

exports.replace = function(re, rep, s) {
  if (typeof s !== 'string') {
    s = String(s);
  }
  return s.replace(new RegExp(re, 'gm'), rep);
};

exports.strftime = function(format, date) {
  if (typeof date !== 'string' && !(date instanceof Date)) {
    return '';
  }

  var d = new Date(date);

  /**
   * Workarounds for issue #43 in strftime:
   *
   *   https://github.com/samsonjs/strftime/issues/43
   *
   * Note that we're hardcoding the format for %c, %x and %X but they should
   * really be worked out from the locale:
   */

  format = format
    .replace('%c', '%a %b %-d %T %Y')
    .replace('%x', '%D')
    .replace('%X', '%T');

  return strftime(format, d);
};

exports.titlecase = function(s) {
  if (typeof s !== 'string') {
    s = String(s);
  }
  return require('titlecase')(s);
};

exports.trim = function(s) {
  if (typeof s !== 'string') {
    s = String(s);
  }
  return s.trim();
};

exports.xmlEscape = function(s) {
  if (typeof s !== 'string') {
    s = String(s);
  }
  return require('xml-escape')(s);
};
