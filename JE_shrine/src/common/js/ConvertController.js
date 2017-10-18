/* eslint-disable */
function ConvertController() {}

ConvertController.BDToSimple = function(chart) {
    var parser = new BDParser();
    parser.parseChart(chart);
    var tokens = parser.getTokenList();
    var result = '';
    var tmpToken;
    var tmpLength = tokens.length;
    for (var i = 0; i < tmpLength; i++) {
        if (tokens[i] instanceof BDToken) {
            tmpToken = tokens[i].toNumberToken();
            result += (tmpToken == null ? '' : String(tmpToken));
        } else if (tokens[i] instanceof OtherToken) {
            result += tokens[i].toString();
        }
    }
    return result;
}
ConvertController.SimpleToBD = function(chart) {
    var parser = new Parser();
    parser.parseChart(chart);
    var tokens = parser.getTokenList();
    var result = '';
    var tmpToken;
    var tmpLength = tokens.length;

    for (var i = 0; i < tmpLength; i++) {
        if (tokens[i] instanceof NumberToken) {
            tmpToken = tokens[i].toBDToken();
            result += (tmpToken == null ? '' : String(tmpToken));
        } else if (tokens[i] instanceof OtherToken) {
            result += tokens[i].toString();
        }
    }
    return result;
}