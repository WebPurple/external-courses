function Calculator () {

    var stored = 0;
    function _isvalid(val) {
        return isFinite(val);
    }

    this.add = function (a) {
        if (_isvalid(a)) {
            stored += a;
        }
        return this;
    };

    this.subtract = function (a) {
        if (_isvalid(a)) {
            stored -= a;
        }
        return this;
    };

    this.divide = function (a) {
        if (_isvalid(a)) {
            if (a !== 0) {
                stored /= a;
            } else {
                stored = NaN;
            }
        }
        return this;
    };

    this.multiply = function (a) {
        if (_isvalid(a)) {
            stored *= a;
        }
        return this;
    };

    this.getResult = function () {
        return stored;
    };

    this.reset = function () {
        stored = 0;
        return this;
    }
    this.setState = function (value) {
        if (_isvalid(value)) {
            stored = value;
        }
        return this;
    }
    this.fetchData = function (callback) {
        setTimeout(() => callback(500));
    }
}

module.exports = new Calculator();