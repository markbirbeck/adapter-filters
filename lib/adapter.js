/**
 * ADAPTER
 * =======
 */

module.exports = function(library, options) {
  var lib = require('../filters/' + library);

  lib.options = options || {};
  return lib;
};
