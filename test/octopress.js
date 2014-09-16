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

  describe('#shorthand_url()', function(){
    it('should get path from HTTP URL', function(){
      filters
        .shorthand_url('http://a/b/c/')
        .should.equal('a/b/c/');
    });

    it('should get path from HTTPS URL', function(){
      filters
        .shorthand_url('https://a/b/c/')
        .should.equal('a/b/c/');
    });

    it('should not get path from FTP URL', function(){
      filters
        .shorthand_url('ftp://a/b/c')
        .should.equal('ftp://a/b/c');
    });

    it('should leave other strings intact', function(){
      filters
        .shorthand_url('this is a string')
        .should.equal('this is a string');
    });

    it('should not fail on null', function(){
      filters
        .shorthand_url(null)
        .should.equal('null');
    });

    it('should cope with numbers', function(){
      filters
        .shorthand_url(123)
        .should.equal('123');
    });

    it('should cope with booleans', function(){
      filters
        .shorthand_url(true)
        .should.equal('true');
    });
  });

  describe('#strip_slash()', function(){
    it('should remove trailing slash from path', function(){
      filters
        .strip_slash('a/b/c/')
        .should.equal('a/b/c');
    });

    it('should remove trailing slash from root', function(){
      filters
        .strip_slash('/')
        .should.equal('');
    });

    it('should leave other paths intact', function(){
      filters
        .strip_slash('d/e/f')
        .should.equal('d/e/f');
    });

    it('should not fail on null', function(){
      filters
        .strip_slash(null)
        .should.equal('null');
    });

    it('should cope with numbers', function(){
      filters
        .strip_slash(123)
        .should.equal('123');
    });

    it('should cope with booleans', function(){
      filters
        .strip_slash(true)
        .should.equal('true');
    });
  });
});
