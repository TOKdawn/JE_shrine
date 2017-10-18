/* eslint-disable */
function BDParser(chart) {
    var curLv = 2;
    var isB = false;
    var curKey = '';
    var tokenList = [];
    var currentOtherWord = '';

    var parseLower = function(key) {
        curLv--;
    };

    var parseLarger = function(key) {
        curLv++;
    };

    var parseBD = function(key) {
        if (currentOtherWord != '') {
            tokenList.push(new OtherToken(currentOtherWord));
        }
        currentOtherWord = '';

        if (key == 'b' || key == 'B') {
            isB = true;
        } else {
            isB = false;
        }
        tokenList.push(new BDToken(curLv, curKey, isB));
        isB = false;
        curKey = '';
    };

    var parseNumber = function(key) {
        if (curKey.length < 2) {
            curKey += key;
        }
    };

    var skipState = function(key) {
        if (curKey == '') {
            clearKeyState();
            currentOtherWord += key;
            return;
        }
        tokenList.push(new BDToken(curLv, curKey, isB));
        currentOtherWord += key;
        clearKeyState();
    };

    var parseFinish = function(key) {
        if (curKey == '') {
            clearState();
            return;
        }
        tokenList.push(new BDToken(curLv, curKey, isB));
        clearState();
    };

    var clearKeyState = function() {
        curKey = '';
    }

    var clearState = function() {
        curLv = 2;
        isB = false;
        curKey = '';
        currentOtherWord = '';
    };

    var parseLargerFinish = function(key) {
        if (curLv > 0) {
            curLv--;
        } else {
            parseFinish(key);
        }

        if (curLv == 2) {
            isB = false;
        }
    }

    var parseLowerFinish = function(key) {
        curLv++;
        parseFinish(key);
        if (curLv == 2) {
            isB = false;
        }
    }

    var parseFunctions = {};
    parseFunctions['['] = parseLower;
    parseFunctions['��'] = parseLower;
    parseFunctions['('] = parseLarger;
    parseFunctions['��'] = parseLarger;
    parseFunctions['{'] = parseLarger;
    parseFunctions['1'] = parseNumber;
    parseFunctions['2'] = parseNumber;
    parseFunctions['3'] = parseNumber;
    parseFunctions['4'] = parseNumber;
    parseFunctions['5'] = parseNumber;
    parseFunctions['6'] = parseNumber;
    parseFunctions['7'] = parseNumber;
    parseFunctions['8'] = parseNumber;
    parseFunctions['9'] = parseNumber;
    parseFunctions['0'] = parseNumber;
    parseFunctions['B'] = parseBD;
    parseFunctions['D'] = parseBD;
    parseFunctions['b'] = parseBD;
    parseFunctions['d'] = parseBD;
    parseFunctions[']'] = parseLowerFinish;
    parseFunctions['��'] = parseLowerFinish;
    parseFunctions[')'] = parseLargerFinish;
    parseFunctions['��'] = parseLargerFinish;
    parseFunctions['}'] = parseLargerFinish;

    this.parseChart = function(chart) {
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