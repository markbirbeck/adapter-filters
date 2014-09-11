var facade = require('..');

describe('Liquid', function(){
  var filters = facade('liquid');

  /**
   * These tests are derived from the samples at:
   *
   *  http://docs.shopify.com/themes/liquid-documentation/filters/additional-filters#date
   */

  describe('#date()', function(){
    var date = 'Tue Apr 8 03:16:09 2014';

    it('Abbreviated weekday', function(){
      filters
        .date(date, '%a')
        .should.equal('Tue');
    });

    it('Full weekday name', function(){
      filters
        .date(date, '%A')
        .should.equal('Tuesday');
    });

    it('Abbreviated month name', function(){
      filters
        .date(date, '%b')
        .should.equal('Apr');
    });

    it('Full month name', function(){
      filters
        .date(date, '%B')
        .should.equal('April');
    });

    it('Preferred local date and time representation', function(){
      filters
        .date(date, '%c')
        .should.equal('Tue Apr 8 03:16:09 2014');
    });

    it('Day of the month, zero-padded (01, 02, 03, etc.)', function(){
      filters
        .date(date, '%d')
        .should.equal('08');
    });

    it('Day of the month, not zero-padded (1,2,3, etc.)', function(){
      filters
        .date(date, '%-d')
        .should.equal('8');
    });

    /**
     * Note that the Liquid documentation has this as dd/mm/yy:
     */

    it('Formats the date (mm/dd/yy)', function(){
      filters
        .date(date, '%D')
        .should.equal('04/08/14');
    });

    it('Day of the month, blank-padded ( 1, 2, 3, etc.)', function(){
      filters
        .date(date, '%e')
        .should.equal(' 8');
    });

    it('Returns the date in ISO 8601 format (yyyy-mm-dd)', function(){
      filters
        .date(date, '%F')
        .should.equal('2014-04-08');
    });

    it('Hour of the day, 24-hour clock (00 - 23)', function(){
      filters
        .date(date, '%H')
        .should.equal('03');
    });

    /**
     * Note that the Liquid documentation has this as not having a
     * leading zero:
     */

    it('Hour of the day, 12-hour clock (01 - 12)', function(){
      filters
        .date(date, '%I')
        .should.equal('03');
    });

    it('Day of the year (001 - 366)', function(){
      filters
        .date(date, '%j')
        .should.equal('098');
    });

    it('Hour of the day, 24-hour clock (1 - 24)', function(){
      filters
        .date(date, '%k')
        .should.equal(' 3');
    });

    it('Month of the year (01 - 12)', function(){
      filters
        .date(date, '%m')
        .should.equal('04');
    });

    it('Minute of the hour (00 - 59)', function(){
      filters
        .date(date, '%M')
        .should.equal('16');
    });

    it('Meridian indicator (AM/PM)', function(){
      filters
        .date(date, '%p')
        .should.equal('AM');
    });

    it('12-hour time (%I:%M:%S %p)', function(){
      filters
        .date(date, '%r')
        .should.equal('03:16:09 AM');
    });

    it('24-hour time (%H:%M)', function(){
      filters
        .date(date, '%R')
        .should.equal('03:16');
    });

    it('The number of the week in the current year, starting with the first Sunday as the first day of the first week', function(){
      filters
        .date(date, '%U')
        .should.equal('14');
    });

    it('The number of the week in the current year, starting with the first Monday as the first day of the first week', function(){
      filters
        .date(date, '%W')
        .should.equal('14');
    });

    it('Day of the week (0 - 6, with Sunday being 0)', function(){
      filters
        .date(date, '%w')
        .should.equal('2');
    });

    it('Preferred representation for the date alone, no time. (mm/dd/yy)', function(){
      filters
        .date(date, '%x')
        .should.equal('04/08/14');
    });

    it('Preferred representation for the time. (hh:mm:ss)', function(){
      filters
        .date(date, '%X')
        .should.equal('03:16:09');
    });

    it('Year without a century (00.99)', function(){
      filters
        .date(date, '%y')
        .should.equal('14');
    });

    it('Year with a century', function(){
      filters
        .date(date, '%Y')
        .should.equal('2014');
    });

    it('Time zone name', function(){
      filters
        .date(date, '%Z')
        .should.equal('UTC');
    });

  });

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
