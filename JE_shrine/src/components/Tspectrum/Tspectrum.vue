<template>
  <div class="entry-content">
    <h1>转谱器</h1>
    <ul id="butyonBar" class="actions fit ">
      <li>
        <a class="button  fit" @click="changeType(1)">逐步转调</a></li>
      <li>
        <a class="button  fit" @click="changeType(2)">直接转调</a></li>
      <li>
        <a class="button  fit" @click="changeType(3)">双谱转换</a></li>
    </ul>
    <!--逐步转调-->
    <div id="changeByHalf" :class="[change,halfDisplay]">
      <p>此功能用于对简谱进行跨度为半音的转调,转换按钮按一次转[1],再按转#7</p>
      <hr class="hrborder" />
      <ul class="actions fit ">
        <li>
          <a class="roll-button" @click="toLower()">降半音</a></li>
        <li>
          <a class="roll-button" @click="toHigher()">升半音</a></li>
        <li>
          <a class="roll-button" @click="preferSharpB()" :class="[flag1 ? 'can' : 'nucan']">#7和[1]</a></li>
        <li>
          <a class="roll-button" @click="preferSharpE()" :class="[flag2 ? 'can' : 'nucan']">#3和4</a></li>
        <li>
          <a class="roll-button" @click="clear(1)">清除</a></li>
      </ul>
      <div>


        <ul class="actions fit ">
          <li><textarea class="rightText" v-model="input1" placeholder="请在此处输入谱子"></textarea></li>
          <li> <textarea class="rightText" v-model="output1" placeholder="这里是输出"></textarea></li>
        </ul>
      </div>

    </div>
    <!--快速转调-->
    <div id="quickChange" :class="[change,changeDisplay]">
        <p>此功能适用于转换已知调性的乐谱,粉色按钮按一次转[1],再按转#7</p>
      <hr class="hrborder" />
      <ul class="actions fit ">
        <li>
         <span class="shuoming">转换前1=</span><select v-model="selected" class="selectcss">
            <option v-for="option in options" :key="option.value" :value="option.value">{{option.text}}</option></select>
        </li>
        <li>
          <span class="shuoming">转换后1=</span><select v-model="selected2" class="selectcss">
            <option v-for="option in options2" :key="option.value" :value="option.value"> {{option.text}}</option>
          </select>
        </li>
        <li>
          <a class="roll-button" type="button" @click="changeForOnce">确认转换</a></li>
        <li>
          <a class="roll-button" @click="preferSharpB1()" :class="[flag3 ? 'can' : 'nucan']">#7和[1]</a></li>
        <li>
          <a class="roll-button" @click="preferSharpE1()" :class="[flag4 ? 'can' : 'nucan']">#3和4</a></li>
        <li>
          <a class="roll-button" @click="clear(2)">清除</a></li>
      </ul>
      <ul class="actions fit ">
        <li> <textarea class="rightText" v-model="input" placeholder="请在此处输入谱子"></textarea></li>
        <li> <textarea class="rightText" v-model="output" placeholder="这里是输出"></textarea></li>
      </ul>
      <br clear="both" /></div>
    <!--BD简谱互换-->
    <div id="changeBDAndSimple" :class="[change,bdDisplay]">
      <p>此功能用于简谱和半音阶口琴专用BD谱之间的转换

      <hr class="hrborder" />

      <ul class="actions fit ">
        <li>
          <a class="but roll-button" onclick="onToSimpleClick(event)" type="button">BD转简谱</a>
        <li>
        <a class="but roll-button" onclick="onToBDClick(event)" type="button">简谱转BD</a>
        <li>
        <a class="roll-button" @click="clear(3)">清除</a></li>
      </ul>
      <ul class="actions fit ">
     <li> <textarea class="rightText" id="BDInput" v-model="BDInput" placeholder="BD谱请在此处输入"></textarea></li>
      <li><textarea class="rightText" id="simpleInput" v-model="simpleInput" placeholder="简谱请在此输入"></textarea></li>
      </ul>
    </div>
  </div>
</template>
<script>// import 'js/BDParser.js'
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
      selected:
        '3',
      options: [{
        text: 'A',
        value: '0'
      },
        {
          text: '#A',
          value: '1'
        },
        {
          text: 'B',
          value: '2'
        },
        {
          text: 'C',
          value: '3'
        },
        {
          text: '#C',
          value: '4'
        },
        {
          text: 'D',
          value: '5'
        },
        {
          text: '#D',
          value: '6'
        },
        {
          text: 'E',
          value: '7'
        },
        {
          text: 'F',
          value: '8'
        },
        {
          text: '#F',
          value: '9'
        },
        {
          text: 'G',
          value: '10'
        },
        {
          text: '#G',
          value: '11'
        }],
      selected2: '3',
      options2: [{
        text: 'A',
        value: '0'
      },
        {
          text: '#A',
          value: '1'
        },
        {
          text: 'B',
          value: '2'
        },
        {
          text: 'C',
          value: '3'
        },
        {
          text: '#C',
          value: '4'
        },
        {
          text: 'D',
          value: '5'
        },
        {
          text: '#D',
          value: '6'
        },
        {
          text: 'E',
          value: '7'
        },
        {
          text: 'F',
          value: '8'
        },
        {
          text: '#F',
          value: '9'
        },
        {
          text: 'G',
          value: '10'
        },
        {
          text: '#G',
          value: '11'
        }],
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
      flag1: true,
      flag2: true,
      flag3: true,
      flag4: true,
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
      this.output = Transcore.tune(this.input, {
        offset: (this.selected - this.selected2)
      })
    },
    toHigher: function() {
      if (this.output1 !== '') {
        this.output1 = Transcore.tune(this.output1, {
          offset: 1
        })
      } else {
        this.output1 = Transcore.tune(this.input1, {
          offset: 1
        })
        this.text = Transcore.tune(this.output1, {
          offset: 1
        })
      }
    },
    toLower: function() {
      if (this.output1 !== '') {
        this.output1 = Transcore.tune(this.output1, {
          offset: -1
        })
      } else {
        this.output1 = Transcore.tune(this.input1, {
          offset: -1
        })
      }
    },
    preferSharpB: function() {
      if (this.flag1) {
        if (this.output1 !== '') {
          this.output1 = Transcore.tune(this.output1, {offset: 0,
            perferSharpB: true
          })
        } else {
          this.output1 = Transcore.tune(this.input1, {offset: 0,
            perferSharpB: true
          })
        }
        this.flag1 = false
      } else {
        if (this.output1 !== '') {
          this.output1 = Transcore.tune(this.output1, { offset: 0,
            perferSharpB: false
          })
        } else {
          this.output1 = Transcore.tune(this.input1, { offset: 0,
            perferSharpB: false
          })
        }
        this.flag1 = true
      }
    },
    preferSharpE: function() {
      if (this.flag2) {
        if (this.output1 !== '') {
          this.output1 = Transcore.tune(this.output1, {
            perferSharpE: true
          })
        } else {
          this.output1 = Transcore.tune(this.input1, {
            perferSharpE: true
          })
        }
        this.flag2 = false
      } else {
        if (this.output1 !== '') {
          this.output1 = Transcore.tune(this.output1, {
            perferSharpE: false
          })
        } else {
          this.output1 = Transcore.tune(this.input1, {
            perferSharpE: false
          })
        }
        this.flag2 = true
      }
    },
    preferSharpB1: function() {
        if (this.flag3) {
          this.output = Transcore.tune(this.output, {
            perferSharpB: true
          })
          this.flag3 = false
        } else {
          this.output = Transcore.tune(this.output, {
            perferSharpB: false
          })
          this.flag3 = true
        }
    },
    preferSharpE1: function() {
      if (this.flag4) {
        this.output = Transcore.tune(this.output, {
          perferSharpE: true
        })
        this.flag4 = false
      } else {
        this.output = Transcore.tune(this.output, {
          perferSharpE: false
        })
        this.flag4 = true
      }
    }
  }
}
</script>

<style lang="stylus">.roll-button {
  display:block;
  font-size:12px;
  text-decoration:none!important;
  font-family:Helvetica,Arial,sans serif;
  padding:8px 12px;
  border-radius:3px;
  -moz-border-radius:3px;
  box-shadow:inset 0px 0px 2px #fff;
  -o-box-shadow:inset 0px 0px 2px #fff;
  -webkit-box-shadow:inset 0px 0px 2px #fff;
  -moz-box-shadow:inset 0px 0px 2px #fff;
}
.roll-button:active {
  box-shadow:inset 0px 0px 3px #999;
  -o-box-shadow:inset 0px 0px 3px #999;
  -webkit-box-shadow:inset 0px 0px 3px #999;
  -moz-box-shadow:inset 0px 0px 3px #999;
}
#butyonBar {
  padding:0px 30px 0px 30px;
}
.rightText {


}
.shuoming{
  font-color: #fff;
  font-size: .9em;
  line-height: 100%;
}
.nucan {
  color: #7e5d7c;
  border: 1px solid #cd93c6;
  background-image: -moz-linear-gradient(#e9c4e3, #d798d1);
  background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#d798d1), to(#e9c4e3));
  background-image: -webkit-linear-gradient(#e9c4e3, #d798d1);
  background-image: -o-linear-gradient(#e9c4e3, #d798d1);
  text-shadow: 1px 1px 1px #f1ceef;
  background-color: #d798d1;
}
.nucan:hover {
  border: 1px solid #886382;
  background-image: -moz-linear-gradient(#d798d1, #e9c4e3);
  background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e9c4e3), to(#d798d1));
  background-image: -webkit-linear-gradient(#d798d1, #e9c4e3);
  background-image: -o-linear-gradient(#d798d1, #e9c4e3);
  background-color: #e9c4e3;
}
.nucan:active {
  border:1px solid #666;
}
.can {
  color:#923c47;
  border:1px solid #d96d7c;
  background-image:-moz-linear-gradient(#f997b0,#f6677b);
  background-image:-webkit-gradient(linear,0% 0%,0% 100%,from(#f6677b),to(#f997b0));
  background-image:-webkit-linear-gradient(#f997b0,#f6677b);
  background-image:-o-linear-gradient(#f997b0,#f6677b);
  text-shadow:1px 1px 1px #fdbcc7;
  background-color:#f6677b;
}
.can:hover {
  border:1px solid #c75964;
  background-image:-moz-linear-gradient(#f6677b,#f997b0);
  background-image:-webkit-gradient(linear,0% 0%,0% 100%,from(#f997b0),to(#f6677b));
  background-image:-webkit-linear-gradient(#f6677b,#f997b0);
  background-image:-o-linear-gradient(#f6677b,#f997b0);
  background-color:#f997b0;
}
.show {
  display:block;
}
.noshow {
  display:none;
}
.hrborder {
  border:0px;
  border-top:1px solid #A59C9F;
  margin:5px;
}
.entry-content div {
  font-color:#fff;

}
  .entry-content {
    padding-top: 30px;
  }
.roll-button {
  margin:3px 3px 5px 10px;
}
.Change {
  margin:20px 60px 0px 60px;
  overflow:auto;
  padding 0
}
  .Change p{
    font-size 20px;
  }
.but {
  position:relative;
  left:2px;
}
  .selectcss{
    width 59px;
    display inline-block
    height auto
  }
.rightText {
  float:left;
  overflow:auto;
  width:100%;
  line-height:100%;
  height:480px;
  border:1px solid #A59C9F;
}
.leftText {
  float:left;
  overflow:auto;
  width:100%;
  height:480px;
  line-height:100%;
  border:1px solid #A59C9F;
  margin-left:5px;
  margin-right:10px;
}
</style>
