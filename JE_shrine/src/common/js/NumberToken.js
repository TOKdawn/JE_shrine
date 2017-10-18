/* eslint-disable */
NumberToken.otherSymbol = true;

function NumberToken(lv, num, isHalf) {
    var level = lv;
    var key = num;
    var half = isHalf;

    if (NumberToken.otherSymbol) {
        if (half && key == 3) {
            half = false;
            key = 4;
        } else if (half && key == 7) {
            level = level + 1;
            half = false;
            key = 1;
        }
    } else {
        if (!half && key == 4) {
            half = true
            key = 3;
        } else if (!half && key == 1) {
            level = level - 1;
            half = true;
            key = 7;
        }
    }

    this.getLevel = function() {
        return level;
    };

    this.getKey = function() {
        return key;
    };

    this.getHalf = function() {
        return half;
    };

    this.toString = function() {
        var rs = '';
        if (level == 0) {
            rs += '((';
            rs += half ? '#' : '';
            rs += key;
            rs += '))'
        } else if (level == 1) {
            rs += '(';
            rs += half ? '#' : '';
            rs += key;
            rs += ')'
        } else if (level == 2) {
            rs += half ? '#' : '';
            rs += key;
        } else if (level == 3) {
            rs += '[';
            rs += half ? '#' : '';
            rs += key;
            rs += ']'
        } else if (level == 4) {
            rs += '[[';
            rs += half ? '#' : '';
            rs += key;
            rs += ']]'
        }
        return rs;
    }

    this.toReverseString = function() {
        var rs = '';
        if (level == 0) {
            rs += '[[';
            rs += half ? '#' : '';
            rs += key;
            rs += ']]'
        } else if (level == 1) {
            rs += '[';
            rs += half ? '#' : '';
            rs += key;
            rs += ']'
        } else if (level == 2) {
            rs += half ? '#' : '';
            rs += key;
        } else if (level == 3) {
            rs += '(';
            rs += half ? '#' : '';
            rs += key;
            rs += ')';
        } else if (level == 4) {
            rs += '((';
            rs += half ? '#' : '';
            rs += key;
            rs += '))';
        }
        return rs;
    }

    this.toBDToken = function() {
        var tmpLv = half ? 3 : 2;
        if (Constant.NumberToBDArguments2[key] == undefined || Constant.NumberToBDArguments2[key][level] == undefined ||
            Constant.NumberToBDArguments3[key] == undefined || Constant.NumberToBDArguments3[key][level] == undefined) {
            return null;
        }
        return new BDToken(tmpLv, Constant.NumberToBDArguments2[key][level], Constant.NumberToBDArguments3[key][level]);
    }

    this.toLower = function() {
        if (key == 1) {
            return new NumberToken(level - 1, 7, half);
        } else if (key == 4) {
            return new NumberToken(level, 3, half);
        }

        if (half) {
            return new NumberToken(level, key, false);
        } else {
            return new NumberToken(level, key - 1, true);
        }
        return null;
    }

    this.toUp = function() {
        if (key == 7) {
            return new NumberToken(level + 1, 1, half);
        } else if (key == 3) {
            return new NumberToken(level, 4, half);
        }

        if (half) {
            return new NumberToken(level, key + 1, false);
        } else {
            return new NumberToken(level, key, true);
        }
        return null;
    }

    return this;
}