/**
 * Allow non-camelcase naming:
 */
/*jshint camelcase:false*/

var facade = require('..');

describe('Octopress', function(){
  var filters = facade('octopress');

  describe('#condense_spaces()', function(){
    it('should remove duplicate spaces', function(){
      filters
        .condense_spaces('   too   many  spaces      ')
        .should.equal(' too many spaces ');
    });

    it('should remove control characters', function(){
      filters
        .condense_spaces('   too   many \tspaces   \r\n   ')
        .should.equal(' too many spaces ');
    });

    it('should not fail on null', function(){
      filters
        .condense_spaces(null)
        .should.equal('null');
    });

    it('should cope with numbers', function(){
      filters
        .condense_spaces(123)
        .should.equal('123');
    });

    it('should cope with booleans', function(){
      filters
        .condense_spaces(true)
        .should.equal('true');
    });
  });
});
