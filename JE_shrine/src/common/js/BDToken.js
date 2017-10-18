/* eslint-disable */
function BDToken(lv, num, BChart) {
    var level = lv;
    var key = parseInt(num);
    var isB = BChart;

    this.getLevel = function() {
        return level;
    };

    this.getKey = function() {
        return key;
    };

    this.getB = function() {
        return isB;
    };

    this.toString = function() {
        var rs = '';
        if (level == 0) {
            rs += '[[';
            rs += key;
            rs += isB ? 'B' : 'D';
            rs += ']]'
        } else if (level == 1) {
            rs += '[';
            rs += key;
            rs += isB ? 'B' : 'D';
            rs += ']'
        } else if (level == 2) {
            rs += key;
            rs += isB ? 'B' : 'D';
        } else if (level == 3) {
            rs += '(';
            rs += key;
            rs += isB ? 'B' : 'D';
            rs += ')'
        } else if (level == 4) {
            rs += '((';
            rs += key;
            rs += isB ? 'B' : 'D';
            rs += '))'
        }
        return rs;
    }


    this.toNumberToken = function() {
        var tmpStr = key + (isB ? 'B' : 'D');
        var tmpHalf = (level == 3);
        if (Constant.BDToNumbersArguments1[tmpStr] == undefined || Constant.BDToNumbersArguments2[tmpStr] == undefined) {
            return null;
        }
        return new NumberToken(Constant.BDToNumbersArguments1[tmpStr], Constant.BDToNumbersArguments2[tmpStr], tmpHalf);
    }

    return this;
}