(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#nr_animate_header', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.nr_animate_header(), this.elems, 'should be chainable');
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.nr_animate_header().text(), 'awesome0awesome1awesome2', 'should be awesome');
  });

  module('jQuery.nr_animate_header');

  test('is awesome', function() {
    expect(2);
    strictEqual($.nr_animate_header(), 'awesome.', 'should be awesome');
    strictEqual($.nr_animate_header({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  });

  module(':nr_animate_header selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':nr_animate_header').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });

}(jQuery));
