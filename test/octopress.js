/**
 * Allow non-camelcase naming:
 */
/*jscs:disable requireCamelCaseOrUpperCaseIdentifiers*/

var facade = require('..');

describe('Octopress', function() {
  var categoryDir = '/categories';
  var filters = facade('octopress', {categoryDir: categoryDir});

  describe('#category_link()', function() {
    it('should create link from a category', function() {
      filters
        .category_link('rdfa')
        .should.equal(
          '<a class=\'category\' href=\'' + categoryDir + '/rdfa\'>rdfa</a>'
        );
    });

    it('should create link and URL encode the category', function() {
      filters
        .category_link('semantic web')
        .should.equal('<a class=\'category\' href=\'' + categoryDir +
            '/semantic%20web\'>semantic web</a>');
    });
  });

  describe('#category_links()', function() {
    it('should create links from one category', function() {
      filters
        .category_links(['rdfa'])
        .should.equal(
          '<a class=\'category\' href=\'' + categoryDir + '/rdfa\'>rdfa</a>'
        );
    });

    it('should create links from a list of categories', function() {
      filters
        .category_links(['rdfa', 'semantic web'])
        .should.equal(
          '<a class=\'category\' href=\'' + categoryDir + '/rdfa\'>rdfa</a>, ' +
          '<a class=\'category\' href=\'' + categoryDir +
            '/semantic%20web\'>semantic web</a>'
        );
    });

    it('should sort the list of categories before creating links', function() {
      filters
        .category_links(['xforms', 'c++'])
        .should.equal(
          '<a class=\'category\' href=\'' + categoryDir + '/c%2B%2B\'>c++</a>, ' +
          '<a class=\'category\' href=\'' + categoryDir + '/xforms\'>xforms</a>'
        );
    });

    it('should cope with non-arrays', function() {
      filters
        .category_links('rdfa')
        .should.equal(
          '<a class=\'category\' href=\'' + categoryDir + '/rdfa\'>rdfa</a>'
        );

      filters
        .category_links(123)
        .should.equal(
          '<a class=\'category\' href=\'' + categoryDir + '/123\'>123</a>'
        );

      filters
        .category_links(true)
        .should.equal(
          '<a class=\'category\' href=\'' + categoryDir + '/true\'>true</a>'
        );
    });

    it('missing array should be empty string', function() {
      filters
        .category_links(null)
        .should.equal('');
    });
  });

  describe('#condense_spaces()', function() {
    it('should remove duplicate spaces', function() {
      filters
        .condense_spaces('   too   many  spaces      ')
        .should.equal(' too many spaces ');
    });

    it('should remove control characters', function() {
      filters
        .condense_spaces('   too   many \tspaces   \r\n   ')
        .should.equal(' too many spaces ');
    });

    it('should not fail on null', function() {
      filters
        .condense_spaces(null)
        .should.equal('null');
    });

    it('should cope with numbers', function() {
      filters
        .condense_spaces(123)
        .should.equal('123');
    });

    it('should cope with booleans', function() {
      filters
        .condense_spaces(true)
        .should.equal('true');
    });
  });

  describe('#expand_urls()', function() {
    it('should map relative URL to an absolute one with no site', function() {
      filters
        .expand_urls('<a href="/a/b/c">Article C</a>')
        .should.equal('<a href="//a/b/c">Article C</a>');
    });

    it('should not map URL with no root', function() {
      filters
        .expand_urls('<a href="a/b/c">Article C</a>')
        .should.equal('<a href="a/b/c">Article C</a>');
    });

    it('should map relative URL to an absolute one with site', function() {
      filters
        .expand_urls(
          '<a href="/a/b/c">Article C</a>' , 'http://markbirbeck.com'
        )
        .should.equal(
          '<a href="http://markbirbeck.com/a/b/c">Article C</a>'
        );
    });

    it('should not get fooled by URLs outside markup', function() {
      filters
        .expand_urls(
          '<a href="/a/b/c">a link to "/a/b/c"</a>', 'http://markbirbeck.com'
        )
        .should.equal(
          '<a href="http://markbirbeck.com/a/b/c">a link to "/a/b/c"</a>'
        );
    });

    it('should map multiple URLs', function() {
      filters
        .expand_urls(
          '<a href="/a/b/c">Article C</a><a href="/a/b/D">Article D</a>' , 'http://markbirbeck.com'
        )
        .should.equal(
          '<a href=\"http://markbirbeck.com/a/b/c\">Article C</a>' +
            '<a href=\"http://markbirbeck.com/a/b/D\">Article D</a>'
        );
    });

    it('should return everything if no link is present', function() {
      filters
        .expand_urls(
          '<div>This is content from a different place.</div>'
        )
        .should.equal(
          '<div>This is content from a different place.</div>'
        );
    });

    it('should cope with non-strings', function() {
      filters
        .expand_urls(123)
        .should.equal('123');

      filters
        .expand_urls(true)
        .should.equal('true');

      filters
        .expand_urls(null)
        .should.equal('null');
    });
  });

  describe('#raw_content()', function() {
    it('should extract raw content from a template with footer', function() {
      filters
        .raw_content(
          '<div class="entry-content">this is an article with a footer</div><footer>'
        )
        .should.equal(
          'this is an article with a footer'
        );
    });

    it('should extract raw content from a template with no footer', function() {
      filters
        .raw_content(
          '<div class="entry-content">this is an article without a footer</div></article>'
        )
        .should.equal(
          'this is an article without a footer'
        );
    });

    it('should return everything if the template is not present', function() {
      filters
        .raw_content(
          '<div>This is content from a different place.</div>'
        )
        .should.equal(
          '<div>This is content from a different place.</div>'
        );
    });

    it('should cope with non-strings', function() {
      filters
        .raw_content(123)
        .should.equal('123');

      filters
        .raw_content(true)
        .should.equal('true');

      filters
        .raw_content(null)
        .should.equal('null');
    });
  });

  describe('#shorthand_url()', function() {
    it('should get path from HTTP URL', function() {
      filters
        .shorthand_url('http://a/b/c/')
        .should.equal('a/b/c/');
    });

    it('should get path from HTTPS URL', function() {
      filters
        .shorthand_url('https://a/b/c/')
        .should.equal('a/b/c/');
    });

    it('should not get path from FTP URL', function() {
      filters
        .shorthand_url('ftp://a/b/c')
        .should.equal('ftp://a/b/c');
    });

    it('should leave other strings intact', function() {
      filters
        .shorthand_url('this is a string')
        .should.equal('this is a string');
    });

    it('should not fail on null', function() {
      filters
        .shorthand_url(null)
        .should.equal('null');
    });

    it('should cope with numbers', function() {
      filters
        .shorthand_url(123)
        .should.equal('123');
    });

    it('should cope with booleans', function() {
      filters
        .shorthand_url(true)
        .should.equal('true');
    });
  });

  describe('#strip_slash()', function() {
    it('should remove trailing slash from path', function() {
      filters
        .strip_slash('a/b/c/')
        .should.equal('a/b/c');
    });

    it('should remove trailing slash from root', function() {
      filters
        .strip_slash('/')
        .should.equal('');
    });

    it('should leave other paths intact', function() {
      filters
        .strip_slash('d/e/f')
        .should.equal('d/e/f');
    });

    it('should not fail on null', function() {
      filters
        .strip_slash(null)
        .should.equal('null');
    });

    it('should cope with numbers', function() {
      filters
        .strip_slash(123)
        .should.equal('123');
    });

    it('should cope with booleans', function() {
      filters
        .strip_slash(true)
        .should.equal('true');
    });
  });

  describe('#titlecase()', function() {
    it('should turn all words to titlecase', function() {
      filters
        .titlecase('a film title')
        .should.equal('A Film Title');
    });

    it('should ignore small words', function() {
      filters
        .titlecase('This is a film title')
        .should.equal('This Is a Film Title');
    });

    it('should not fail on null', function() {
      filters
        .titlecase(null)
        .should.equal('Null');
    });

    it('should cope with numbers', function() {
      filters
        .titlecase(123)
        .should.equal('123');
    });

    it('should cope with booleans', function() {
      filters
        .titlecase(true)
        .should.equal('True');
    });
  });
});
