"use strict";
var _sinon = require("sinon"),
    _sinon2 = _interopRequireDefault(_sinon),
    _lodash = require("lodash"),
    _lodash2 = _interopRequireDefault(_lodash),
    _asynchronousDelay = require("../src/part1/1-asynchronous-delay"),
    _asynchronousDelay2 = _interopRequireDefault(_asynchronousDelay),
    _wrapIt = require("../src/part1/2-wrap-it"),
    _wrapIt2 = _interopRequireDefault(_wrapIt),
    _arrayMagic = require("../src/part1/3-array-magic"),
    _arrayMagic2 = _interopRequireDefault(_arrayMagic),
    _waitAMinute = require("../src/part1/4-wait-a-minute"),
    _waitAMinute2 = _interopRequireDefault(_waitAMinute);

function _interopRequireDefault(a) {
    return a && a.__esModule ? a : {
        default: a
    }
}

function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c
    }
    return Array.from(a)
}
describe("Part1", function() {
    context("1. Asynchronous Delay", function() {
        var b;
        beforeEach(function() {
            b = _sinon2.default.useFakeTimers()
        }), afterEach(function() {
            b.restore()
        });
        var a = function(c, a) {
            return function() {
                var d = _sinon2.default.spy();
                (0, _asynchronousDelay2.default)(c, d), d.should.have.not.been.called, b.tick(c - a), d.should.have.not.been.called, b.tick(a + 3), d.should.have.been.calledOnce
            }
        };
        it("should call after delay 3000 ms", a(3e3, 10)), it("should call after delay 1000 ms", a(1e3, 300)), it("should call after delay 500 ms", a(500, 200))
    }), context("2. Wrap It!", function() {
        var a = _sinon2.default.spy();
        it("should return as function", function() {
            (0, _wrapIt2.default)(a).should.be.a("function")
        });
        var b = function(a, b) {
            return function(c) {
                return function() {
                    return a.apply(void 0, _toConsumableArray(c)).should.be.deep.equal(b(c))
                }
            }
        };
        context("simple sum function", function() {
            var a = function(e, a, b, c) {
                    return e + a + b + c
                },
                c = (0, _wrapIt2.default)(a),
                d = b(a, c);
            it("5 6 7 8", d([5, 6, 7, 8])), it("15 14 300 25", d([15, 14, 300, 25])), it("99 77 66 55", d([99, 77, 66, 55]))
        }), context("infinite sum function", function() {
            var a = function() {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    return _lodash2.default.sum(b)
                },
                c = (0, _wrapIt2.default)(a),
                d = b(a, c);
            it("4 2 3", d([4, 2, 3])), it("1 2 3 4 5 6 7 8 9 10", d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])), it("_.range(0, 20, 5)", d(_lodash2.default.range(0, 20, 5)))
        }), context("a Map function", function() {
            var a = function(a, b) {
                    return _lodash2.default.map(a, function(a) {
                        return a + b
                    })
                },
                c = (0, _wrapIt2.default)(a),
                d = b(a, c);
            it("[1,2,4], 2", d([
                [1, 2, 4], 2
            ]))
        }), context("an Object function", function() {
            var a = function(a, b) {
                    return _lodash2.default.merge(a, b)
                },
                c = (0, _wrapIt2.default)(a),
                d = b(a, c);
            it("{a: 'heelo', b: 'eiei'}, {c: 'yoyo', b: 'newBee'}", d({
                a: "heelo",
                b: "eiei"
            }, {
                c: "yoyo",
                b: "newBee"
            }))
        })
    }), context("3. ArrayMagic", function() {
      it("[3, 5, 7, 11, 21]", function() {
          (0, _arrayMagic2.default)([3, 5, 7, 11, 21]).should.equal(19)
      }), it("[299, 124, 84, 55]", function() {
          (0, _arrayMagic2.default)([299, 124, 84, 55]).should.equal(478)
      }), it("[123, 566, 32, 35, 78, 14, 32, 49]", function() {
          (0, _arrayMagic2.default)([123, 566, 32, 35, 78, 14, 32, 49]).should.equal(831)
      }), it("[32, 55, 5618, 56156, 23156156, 323, 7, 108]", function() {
          (0, _arrayMagic2.default)([32, 55, 5618, 56156, 23156156, 323, 7, 108]).should.equal(23218448)
      })
  }), context("4. WaitAMinute", function() {
    it("case 1", function() {
        (0, _waitAMinute2.default)("2018-06-01T08:18:12.907Z", "2018-06-01T09:08:12.907Z").should.equal(1)
    }), it("case 2", function() {
        (0, _waitAMinute2.default)("2018-06-01T08:18:12.907Z", "2018-06-01T09:14:12.907Z").should.equal(2)
    }), it("case 3", function() {
        (0, _waitAMinute2.default)("2018-06-01T08:40:39.024Z", "2018-06-01T11:21:54.099Z").should.equal(5)
    }), it("case 4", function() {
        (0, _waitAMinute2.default)("2018-06-01T08:00:00.024Z", "2018-06-01T13:00:00.024Z").should.equal(9)
    }), it("case 5", function() {
        (0, _waitAMinute2.default)("2018-06-01T08:00:00.024Z", "2018-06-01T14:50:00.024Z").should.equal(12)
    })
})
});
