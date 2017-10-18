/* eslint-disable */
function Parser(chart) {
    var curLv = 2;
    var half = false;
    var curKey = -1;
    var tokenList = [];
    var inContinue = false;
    var currentOtherWord = '';

    var parseLower = function(key) {
        inContinue = true;
        curLv--;
    };

    var parseLarger = function(key) {
        inContinue = true;
        curLv++;
    };

    var parseHalf = function(key) {
        half = true;
    };

    var parseNumber = function(key) {
        if (currentOtherWord != '') {
            tokenList.push(new OtherToken(currentOtherWord));
        }
        currentOtherWord = '';
        curKey = parseInt(key);
        tokenList.push(new NumberToken(curLv, curKey, half));
        if (!inContinue) {
            half = false;
        }
        curKey = -1;
    };

    var skipState = function(key) {
        if (curKey == -1) {
            clearKeyState();
            currentOtherWord += key;
            return;
        }
        tokenList.push(new NumberToken(curLv, curKey, half));
        currentOtherWord += key;
        clearKeyState();
    };

    var parseFinish = function(key) {
        if (curKey == -1) {
            clearState();
            return;
        }
        tokenList.push(new NumberToken(curLv, curKey, half));
        clearState();
    };

    var clearKeyState = function() {
        if (!inContinue) {
            half = false;
        }
        curKey = -1;
    }

    var clearState = function() {
        curLv = 2;
        half = false;
        curKey = -1;
        inContinue = false;
        currentOtherWord = '';
    };

    var parseLargerFinish = function(key) {
        if (curLv > 0) {
            curLv--;
        } else {
            parseFinish(key);
        }

        if (curLv == 2) {
            inContinue = false;
            half = false;
        }
    }

    var parseLowerFinish = function(key) {
        curLv++;
        parseFinish(key);
        if (curLv == 2) {
            inContinue = false;
            half = false;
        }
    }

    var parseFunctions = {};
    parseFunctions['['] = parseLarger;
    parseFunctions['��'] = parseLarger;
    parseFunctions['('] = parseLower;
    parseFunctions['��'] = parseLower;
    parseFunctions['{'] = parseLower;
    parseFunctions['#'] = parseHalf;
    parseFunctions['1'] = parseNumber;
    parseFunctions['2'] = parseNumber;
    parseFunctions['3'] = parseNumber;
    parseFunctions['4'] = parseNumber;
    parseFunctions['5'] = parseNumber;
    parseFunctions['6'] = parseNumber;
    parseFunctions['7'] = parseNumber;
    parseFunctions[']'] = parseLargerFinish;
    parseFunctions['��'] = parseLargerFinish;
    parseFunctions[')'] = parseLowerFinish;
    parseFunctions['��'] = parseLargerFinish;
    parseFunctions['}'] = parseLowerFinish;

    this.parseChart = function(chart, type) {
        var length = chart.toString().length;
        var tmpChar;
        var tmpToken;

        for (var i = 0; i < length; i++) {
            tmpChar = chart.charAt(i);
            if (parseFunctions[tmpChar] == undefined) {
                skipState(tmpChar);
            } else {
                parseFunctions[tmpChar](tmpChar);
            }
        }
        clearState();
    };

    this.getTokenList = function() {
        return tokenList;
    }

    return this;
}