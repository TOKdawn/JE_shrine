/* eslint-disable */
function Constant() {

}
Constant.BDToNumbersArguments1 = {
    '1B': 1,
    '1D': 1,
    '2B': 1,
    '2D': 1,
    '3B': 1,
    '3D': 1,
    '4B': 2,
    '4D': 1,
    '5B': 2,
    '5D': 2,
    '6B': 2,
    '6D': 2,
    '7B': 2,
    '7D': 2,
    '8B': 3,
    '8D': 2,
    '9B': 3,
    '9D': 3,
    '10B': 3,
    '10D': 3,
    '11B': 3,
    '11D': 3,
    '12B': 4,
    '12D': 3
};
Constant.BDToNumbersArguments2 = {
    '1B': 1,
    '1D': 2,
    '2B': 3,
    '2D': 4,
    '3B': 5,
    '3D': 6,
    '4B': 1,
    '4D': 7,
    '5B': 1,
    '5D': 2,
    '6B': 3,
    '6D': 4,
    '7B': 5,
    '7D': 6,
    '8B': 1,
    '8D': 7,
    '9B': 1,
    '9D': 2,
    '10B': 3,
    '10D': 4,
    '11B': 5,
    '11D': 6,
    '12B': 1,
    '12D': 7
};

Constant.NumberToBDArguments2 = {
    '1': { '1': 1, '2': 5, '3': 9, '4': 12 },
    '2': { '1': 1, '2': 5, '3': 9 },
    '3': { '1': 2, '2': 6, '3': 10 },
    '4': { '1': 2, '2': 6, '3': 10 },
    '5': { '1': 3, '2': 7, '3': 11 },
    '6': { '1': 3, '2': 7, '3': 11 },
    '7': { '1': 4, '2': 8, '3': 12 }
};

Constant.NumberToBDArguments3 = {
    '1': { '1': true, '2': true, '3': true, '4': true },
    '2': { '1': false, '2': false, '3': false },
    '3': { '1': true, '2': true, '3': true },
    '4': { '1': false, '2': false, '3': false },
    '5': { '1': true, '2': true, '3': true },
    '6': { '1': false, '2': false, '3': false },
    '7': { '1': false, '2': false, '3': false }
};

Constant.LargerNumBers = {};
Constant.LowerNumBers = {};
Constant.simpleList = ["1", "#1", "2", "#2", "3", "4", "#4", "5", "#5", "6", "#6", "7"];

Constant.getSimpleIndex = { "1": 0, "2": 2, "3": 4, "4": 5, "5": 7, "6": 9, "7": 11 }

Constant.BDList = [
    "1B", "(1B)", "1D", "(1D)", "2B", "2D", "(2D)", "3B", "(3B)", "3D", "(3D)", "4D",
    "5B", "(5B)", "5D", "(5D)", "6B", "6D", "(6D)", "7B", "(7B)", "7D", "(7D)", "8D",
    "9B", "(9B)", "9D", "(9D)", "10B", "10D", "(10D)", "11B", "(11B)", "11D", "(11D)", "12D", "12B", "(12B)", "(12D)"
];

Constant.getBDIndex = {
    "5B": 0,
    "5D": 2,
    "6B": 4,
    "6D": 5,
    "7B": 7,
    "7D": 9,
    "8D": 11,
    "8B": 12,
}

Constant.simpleOutput = function(tonalIndex, tonalLevel) {
    var tone = "";
    //格式化简谱输出
    if (tonalLevel > 0) {
        for (var i = 0; i < tonalLevel; ++i) {
            tone += "[";
        }
    } else if (tonalLevel < 0) {
        for (var i = 0; i < -tonalLevel; ++i) {
            tone += "(";
        }
    }
    tone += Constant.simpleList[tonalIndex];
    if (tonalLevel > 0) {
        for (var i = 0; i < tonalLevel; ++i) {
            tone += "]";
        }
    } else if (tonalLevel < 0) {
        for (var i = 0; i < -tonalLevel; ++i) {
            tone += ")";
        }
    }
    return tone;
}