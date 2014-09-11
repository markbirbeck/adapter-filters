/**
 * Allow non-camelcase naming:
 */
/*jshint camelcase:false*/

var facade = require('..');

/**
 * These tests are derived from the samples at:
 *
 *  http://jekyllrb.com/docs/templates/#filters
 */

describe('Jekyll', function(){
  var filters = facade('jekyll');
  var date = 'Nov 7 13:07:54 2008';

  describe('#date_to_xmlschema()', function(){
    it('should convert simple date', function(){
      filters
        .date_to_xmlschema(date)
        .should.equal('2008-11-07T13:07:54+0000');
    });
  });

  describe('#date_to_rfc822()', function(){
    it('should convert simple date', function(){
      filters
        .date_to_rfc822(date)
        .should.equal('Fri, 07 Nov 2008 13:07:54 +0000');
    });
  });

  describe('#date_to_string()', function(){
    it('should convert simple date', function(){
      filters
        .date_to_string(date)
        .should.equal('07 Nov 2008');
    });
  });

  describe('#date_to_long_string()', function(){
    it('should convert simple date', function(){
      filters
        .date_to_long_string(date)
        .should.equal('07 November 2008');
    });
  });
});
