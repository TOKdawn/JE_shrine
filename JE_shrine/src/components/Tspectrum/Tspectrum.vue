<template>
    <div class="entry-content">
        <a class="roll-button turn-button" @click="changeType(1)">逐步转调</a>
        <a class="roll-button turn-button" @click="changeType(2)">直接转调</a>
        <a class="roll-button turn-button" @click="changeType(3)">双谱转换</a>
        <!--逐步转调-->
        <div id="changeByHalf" :class="[change,halfDisplay]">
            <p>此功能用于对简谱进行跨度为半音的转调</p>
            <br />PS:重新转调前请按清除按钮
            <br />
            <hr class="hrborder" />
            <a class="roll-button" @click="toLower()">降半音</a>
            <a class="roll-button" @click="toHigher()">升半音</a>
            <a class="roll-button" @click="preferSharpB()" :class="[flag1 ? 'can' : 'nucan']">#7和[1]</a>
            <a class="roll-button" @click="preferSharpE()" :class="[flag2 ? 'can' : 'nucan']">#3和4</a>
            <a class="roll-button" @click="clear(1)" >清除</a>
            <div>
                <textarea  class="rightText" v-model="input1" placeholder="请在此处输入谱子"></textarea>
                <textarea class="rightText" v-model="output1" placeholder="这里是输出"></textarea>
            </div>
        </div>
        <!--快速转调-->
        <div id="quickChange" :class="[change,changeDisplay]">
            <p>一次转调
                <br />此功能适用于转换已知调性的乐谱</p>
            <br />
            <hr class="hrborder" />转换前1=
            <select v-model="selected">
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <div>{{selected}}</div>
            <select v-model="selected2">
                <option v-for="option in options2" :key="option.value" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <div>{{selected2}}</div>
            <button class="roll-button" type="button" @click="changeForOnce">确认转换</button>
            <a class="roll-button" @click="preferSharpB1()" :class="[flag3 ? 'can' : 'nucan']">#7和[1]</a>
            <a class="roll-button" @click="preferSharpE1()" :class="[flag4 ? 'can' : 'nucan']">#3和4</a>
            <a class="roll-button" @click="clear(2)">清除</a>
            <br />
            <textarea class="rightText" v-model="input" placeholder="请在此处输入谱子"></textarea>
            <textarea class="rightText" v-model="output" placeholder="这里是输出"></textarea>
            <br clear="both" />
        </div>
        <!--BD简谱互换-->
        <div id="changeBDAndSimple" :class="[change,bdDisplay]">
            <p>此功能用于简谱和半音阶口琴专用BD谱之间的转换
                <br />PS：请注意BD谱和简谱所放的的位置</p>
            <br />
            <hr class="hrborder" />
            <button class="but roll-button" onclick="onToSimpleClick(event)" type="button">BD转简谱</button>
            <button class="but roll-button" onclick="onToBDClick(event)" type="button">简谱转BD</button>

          <a class="roll-button" @click="clear(3)">清除</a>
            <br />
            <textarea class="rightText" id="BDInput" v-model="BDInput" placeholder="BD谱请在此处输入"></textarea>
            <textarea class="rightText" id="simpleInput" v-model="simpleInput" placeholder="简谱请在此输入"></textarea>
            <br />
        </div>

    </div>
</template>
<script>
// import 'js/BDParser.js'
// import 'js/BDToken.js'
// import 'js/Class.js'
// import 'js/Constant.js'
// import 'js/ConvertController.js'
// import 'js/NumberToken.js'
// import 'js/OtherToken.js'
// import 'js/Parser.js'
// import Change from 'js/Change.js'
import Transcore from 'je-transcore'
export default {
    data() {
        return {
            selected: '3',
            options: [
                { text: 'A', value: '0' },
              { text: '#A', value: '1' },
              { text: 'B', value: '2' },
              { text: 'C', value: '3' },
              { text: '#C', value: '4' },
              { text: 'D', value: '5' },
              { text: '#D', value: '6' },
              { text: 'E', value: '7' },
              { text: 'F', value: '8' },
              { text: '#F', value: '9' },
                { text: 'G', value: '10' },
                { text: '#G', value: '11' }
            ],
            selected2: '3',
            options2: [
                { text: 'A', value: '0' },
                { text: '#A', value: '1' },
                { text: 'B', value: '2' },
                { text: 'C', value: '3' },
                { text: '#C', value: '4' },
                { text: 'D', value: '5' },
                { text: '#D', value: '6' },
                { text: 'E', value: '7' },
                { text: 'F', value: '8' },
                { text: '#F', value: '9' },
                { text: 'G', value: '10' },
                { text: '#G', value: '11' }
            ],
            change: 'Change',
            halfDisplay: 'show',
            changeDisplay: 'noshow',
            bdDisplay: 'noshow',
            input1: '',
            output1: '',
            input: '',
            output: '',
            BDInput: '',
            simpleInput: '',
            flag1: 1,
            flag2: 1,
            flag3: 1,
            flag4: 1,
            can: 'can',
            nucan: 'nucan'
        }
    },
    methods: {
        changeType: function(type) {
            switch (type) { // 切换模块
                case 1:
                    this.halfDisplay = 'show'
                    this.changeDisplay = 'noshow'
                    this.bdDisplay = 'noshow'
                    break
                case 2:
                    this.halfDisplay = 'noshow'
                    this.changeDisplay = 'show'
                    this.bdDisplay = 'noshow'
                    break
                case 3:
                    this.halfDisplay = 'noshow'
                    this.changeDisplay = 'noshow'
                    this.bdDisplay = 'show'
                    break
            }
        },
        clear: function(num) {
            switch (num) {
                case 1:
                    this.input1 = ''
                    this.output1 = ''
                    break
                case 2:
                    this.input = ''
                    this.output = ''
                    break
                case 3:
                    this.BDInput = ''
                    this.simpleInput = ''
                    break
            }
        },
        changeForOnce: function() {
            this.output = Transcore.tune(this.input, {offset: (this.selected - this.selected2)})
        },
        toHigher: function(){
            if (this.output1 !== '') {
                this.output1 = Transcore.tune(this.output1, {offset: 1})
            } else {
                this.output1 = Transcore.tune(this.input1, {offset: 1})
           this.text = Transcore.tune(this.output1, {offset: 1})
            }
        },
        toLower: function() {
            if (this.output1 !== '') {
               this.output1 = Transcore.tune(this.output1, {offset: -1})
            } else {
               this.output1 = Transcore.tune(this.input1, {offset: -1})
            }
        },
      preferSharpB: function () {
            if(this.flag){

        }
        if (this.output1 !== '') {
          this.output1 = Transcore.tune(this.output1, {perferSharpB: true})
        } else {
          this.output1 = Transcore.tune(this.input1, {perferSharpB: true})
        }
      },
      preferSharpE: function () {
        if (this.output1 !== '') {
          this.output1 = Transcore.tune(this.output1, {perferSharpE: true})
        } else {
          this.output1 = Transcore.tune(this.input1, {perferSharpE: true})
        }
      },
      preferSharpB1: function () {
          this.output = Transcore.tune(this.output, {perferSharpB: true})
      },
      preferSharpE1: function () {
          this.output = Transcore.tune(this.input, {perferSharpE: true})
      }

    }
}
</script>
<style lang="stylus" >
  .roll-button {
    display: block;
    font-size: 12px;
    text-decoration: none!important;
    font-family: Helvetica, Arial, sans serif;
    padding: 8px 12px;
    border-radius: 3px;
    -moz-border-radius: 3px;
    box-shadow: inset 0px 0px 2px #fff;
    -o-box-shadow: inset 0px 0px 2px #fff;
    -webkit-box-shadow: inset 0px 0px 2px #fff;
    -moz-box-shadow: inset 0px 0px 2px #fff;
  }
  .roll-button:active {
    box-shadow: inset 0px 0px 3px #999;
    -o-box-shadow: inset 0px 0px 3px #999;
    -webkit-box-shadow: inset 0px 0px 3px #999;
    -moz-box-shadow: inset 0px 0px 3px #999;
  }

  .rightText {
    background-color: #000;
    font-color: #f2f;
}
  .uncan {
    color: #444;
    border: 1px solid #d0d0d0;
    background-image: -moz-linear-gradient(#ededed, #e1e1e1);
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e1e1e1), to(#ededed));
    background-image: -webkit-linear-gradient(#ededed, #e1e1e1);
    background-image: -o-linear-gradient(#ededed, #e1e1e1);
    text-shadow: 1px 1px 1px #fff;
    background-color: #e1e1e1;
  }
  .nucan:hover {
    border: 1px solid #b0b0b0;
    background-image: -moz-linear-gradient(#e1e1e1, #ededed);
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ededed), to(#e1e1e1));
    background-image: -webkit-linear-gradient(#e1e1e1, #ededed);
    background-image: -o-linear-gradient(#e1e1e1, #ededed);
    background-color: #ededed;
  }
  .nucan:active {border: 1px solid #666;}
  .can {
    color: #923c47;
    border: 1px solid #d96d7c;
    background-image: -moz-linear-gradient(#f997b0, #f6677b);
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#f6677b), to(#f997b0));
    background-image: -webkit-linear-gradient(#f997b0, #f6677b);
    background-image: -o-linear-gradient(#f997b0, #f6677b);
    text-shadow: 1px 1px 1px #fdbcc7;
    background-color: #f6677b;
  }
  .can:hover {
    border: 1px solid #c75964;
    background-image: -moz-linear-gradient(#f6677b, #f997b0);
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#f997b0), to(#f6677b));
    background-image: -webkit-linear-gradient(#f6677b, #f997b0);
    background-image: -o-linear-gradient(#f6677b, #f997b0);
    background-color: #f997b0;
  }
  .can:active {border: 1px solid #ab3e4b;}

.show {
    display: block;
}

.noshow {
    display: none;
}

.hrborder {
    border: 0px;
    border-top: 1px solid #A59C9F;
    margin: 5px;
}

.turn-button {
    padding: 3px;
    margin-left: 80px;
}

.roll-button {
    margin: 3px 3px 5px 10px;
}

.Change {
    margin-left: 10px;
    margin-top: 30px;
    width: 750px;
    overflow: auto;
}

.but {
    position: relative;
    left: 2px;
}

.rightText {
    float: left;
    overflow: auto;
    width: 45%;
    line-height : 100%;
    height: 380px;
    border: 1px solid #A59C9F;
}

.leftText {
    float: left;
    overflow: auto;
    width: 45%;
    height: 380px;
    line-height :100%;
    border: 1px solid #A59C9F;
    margin-left: 5px;
    margin-right: 10px;
}
</style>
