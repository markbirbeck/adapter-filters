/**
 * Basic filter functions.
 */

exports.trim = function (s){
  if (typeof s !== 'string'){
    s = String(s);
  }
  return s.trim();
};
