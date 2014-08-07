/**
 * ADAPTER
 * =======
 */

module.exports = function (library){
  return require('../filters/' + library);
};
