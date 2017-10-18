/* eslint-disable */
function OtherToken(str) {
    var content = String(str);

    this.getContent = function() {
        return content;
    }

    this.toString = function() {
        return content;
    }

    return this;
}