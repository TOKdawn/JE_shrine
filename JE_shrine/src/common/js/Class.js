/* eslint-disable */
function SimpleTone(num, levelCount, tonalChange) {
    this.tone = "";
    this.tonalLevel = levelCount;
    this.tonalIndex;
    this.indexChange = tonalChange;

    this.tonalIndex = Constant.getSimpleIndex[num] + this.indexChange;

    //改变音域
    while (this.tonalIndex > 11) {
        ++this.tonalLevel;
        this.tonalIndex -= 12;
    }
    while (this.tonalIndex < 0) {
        --this.tonalLevel;
        this.tonalIndex += 12;
    }

    //输出简谱
    this.getSimple = function() {

        this.tone = Constant.simpleOutput(this.tonalIndex, this.tonalLevel);
        return this.tone;

    };

    // <!--输出半音阶口琴对应BD谱-->
    this.getBD = function() {
        this.tone += Constant.BDList[this.tonalIndex + (this.tonalLevel + 1) * 12];
        return this.tone;
    };
    return this;
}

function BDtone(numGet, isB, isPush) {
    this.tonalLevel = 0;
    this.numGet = parseInt(numGet);
    this.tone = "";
    this.tonalIndex;



    if (this.numGet >= 1 && this.numGet <= 4) {
        --this.tonalLevel;
        this.numGet += 4;
    }
    if (this.numGet >= 9 && this.numGet <= 12) {
        ++this.tonalLevel;
        this.numGet -= 4;
    }


    this.tone += this.numGet;
    if (isB) {
        this.tone += 'B';
    } else {
        this.tone += 'D';
    }

    this.tonalIndex = Constant.getBDIndex[this.tone];
    if (isPush) {
        ++this.tonalIndex;
    }

    while (this.tonalIndex > 11) {
        ++this.tonalLevel;
        this.tonalIndex -= 12;
    }
    while (this.tonalIndex < 0) {
        --this.tonalLevel;
        this.tonalIndex += 12;
    }

    this.get = function() {
        if (this.tonalLevel == 2 && this.tonalIndex == 0 && !isB) {
            this.tone = "[[2]]";
        } else {
            this.tone = Constant.simpleOutput(this.tonalIndex, this.tonalLevel);
        }
        return this.tone;
    }

    return this;
}