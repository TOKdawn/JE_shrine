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
            <a class="roll-button" @click="clear(1)">清除</a>
            <div>
                <input class="rightText" v-model="input1" placeholder="请在此处输入谱子"></input>
                <input class="rightText" v-model="output1" placeholder="这里是输出"></input>
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
            <a class="roll-button" @click="clear(2)">清除</a>
            <br />
            <input class="rightText" v-model="input" placeholder="请在此处输入谱子"></input>
            <input class="rightText" v-model="output" placeholder="这里是输出"></input>
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
            <input class="rightText" id="BDInput" v-model="BDInput" placeholder="BD谱请在此处输入"></input>
            <input class="rightText" id="simpleInput" v-model="simpleInput" placeholder="简谱请在此输入"></input>
            <br />
        </div>
    </div>
</template>
<script>
import 'js/BDParser.js'
import 'js/BDToken.js'
import 'js/Class.js'
import 'js/Constant.js'
import 'js/ConvertController.js'
import 'js/NumberToken.js'
import 'js/OtherToken.js'
import 'js/Parser.js'
import Change from 'js/Change.js'
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
            simpleInput: ''
        }
    },
    methods: {
        changeType: function(type) {
            switch (type) {
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
            console.log(this.input)
            console.log(this.output)
            this.output = Change(this.input, this.selected - this.selected2, false)
             console.log(this.output)
        },
        toHigher: function(){
            if (this.input1 === '') {
                this.output1 = Change(this.input1, 1, false)
            } else {
                this.output1 = Change(this.output1, 1, false)
            }
        },
          toLower: function() {
            if (this.input1 === '') {
               this.output1 = Change(this.input1, -1, false)
            } else {
               this.output1 = Change(this.output1, -1, false)
            }
        }

    }
}
</script>
<style lang="stylus" >
.rightText {
    background-color: #000;
    font-color: #f2f;
}

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
    height: 380px;
    border: 1px solid #A59C9F;
}

.leftText {
    float: left;
    overflow: auto;
    width: 45%;
    height: 380px;
    border: 1px solid #A59C9F;
    margin-left: 5px;
    margin-right: 10px;
}
</style>
