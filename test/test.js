var facade = require('..');

/**
 * Tests for the Liquid filter functions.
 */

describe('Liquid', function(){
  var filters = facade('liquid');

  describe('#strip()', function(){
    it('should strip leading and trailing spaces', function(){
      filters
        .strip('   too many spaces      ')
        .should.equal('too many spaces');
    });

    it('should not fail on null', function(){
      filters
        .strip(null)
        .should.equal('null');
    });

    it('should cope with numbers', function(){
      filters
        .strip(123)
        .should.equal('123');
    });

    it('should cope with booleans', function(){
      filters
        .strip(true)
        .should.equal('true');
    });
  });
});
