/* eslint-disable */
function Change(strGet, tonalChange, toBD)

{
    var strNew = "";
    var indexChange = tonalChange;
    var levelCount = 0;
    var isHalf = new Boolean;
    isHalf = false;
    var halfCount = 0;
    var halfCountTemp = 1;
    var braCount = 0;
    var temp = new Array(false, false, false, false, false);

    for (var i in strGet) {
        var str = strGet[i];

        if (strGet[i] == "#") {
            if (isHalf) ++halfCountTemp;
            isHalf = true;
            ++halfCount;
            continue;
        }
        if (strGet[i] == "(" || strGet[i] == "（") {
            --levelCount;
            if (isHalf) {
                temp[braCount] = false;
                ++braCount;
                isHalf = false;
            }
            continue;
        }
        if (strGet[i] == ")" || strGet[i] == "）") {
            ++levelCount;
            if (halfCount != 0 && braCount != 0) {
                --braCount;
                if (temp[braCount]) {
                    temp[braCount] = false;
                    --halfCount;
                }
            }
            if (braCount == 0) {
                halfCount = 0;
                isHalf = false;
            }
            continue;
        }
        if (strGet[i] == "[" || strGet[i] == "［") {
            ++levelCount;
            if (isHalf) {
                temp[braCount] = true;
                ++braCount;
                isHalf = false;
            }
            continue;
        }
        if (strGet[i] == "]" || strGet[i] == "］") {
            --levelCount;
            if (halfCount != 0 && braCount != 0) {
                --braCount;
                if (temp[braCount]) {
                    temp[braCount] = false;
                    --halfCount;
                }
            }
            if (braCount == 0) {
                halfCount = 0;
                isHalf = false;
            }
            continue;
        }

        //鉴于isNaN有不完善的地方
        if (Constant.getSimpleIndex[strGet[i]] == undefined) {

        } else {
            var t = new SimpleTone(strGet[i], levelCount, tonalChange + halfCount);
            if (toBD) {
                str = t.getBD();
                if (isHalf) {
                    halfCount -= halfCountTemp;
                    halfCountTemp = 1;
                    isHalf = false;
                }
            } else {
                str = t.getSimple();
                if (isHalf) {
                    halfCount -= halfCountTemp;
                    halfCountTemp = 1;
                    isHalf = false;
                }
            }
            if (braCount == 0) {
                halfCount = 0;
            }
        }
        strNew += str;
    }
    return strNew;
}