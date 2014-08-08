/**
 * Basic filter functions.
 */

exports.condenseSpaces = function (s){
  if (typeof s !== 'string'){
    s = String(s);
  }
  return s.replace(/\s{2,}/g, ' ');
};

exports.trim = function (s){
  if (typeof s !== 'string'){
    s = String(s);
  }
  return s.trim();
};
