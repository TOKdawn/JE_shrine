<template>
  <div id="zzz">
    <sidebar></sidebar>
    <wrapper></wrapper>
  </div>
</template>

<script>
  import wrapper from 'components/home/wrapper/wrapper.vue'// 主内容框架
  import sidebar from 'components/home/sidebar/sidebar.vue'// 侧边栏
  export default {
    components: {
      sidebar,
      wrapper
    }
  }
</script>

<style >
  /* @import '../../static/basic.css'; */
  /* Basic */
  #zzz {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  body {
    -ms-overflow-style: scrollbar;
    margin: 0
}

@media screen and (max-width: 480px) {
    html,
    body {
        min-width: 320px;
    }
}

body {
    background: #ffffff;
}

*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body.is-loading *,
body.is-loading *:before,
body.is-loading *:after {
    -moz-animation: none !important;
    -webkit-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
    -moz-transition: none !important;
    -webkit-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
}


/* Type */

body,
input,
select,
textarea {
    color: rgba(255, 255, 255, 0.55);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16.5pt;
    font-weight: normal;
    line-height: 1.75;
}

@media screen and (max-width: 1680px) {
    body,
    input,
    select,
    textarea {
        font-size: 13pt;
    }
}

@media screen and (max-width: 1280px) {
    body,
    input,
    select,
    textarea {
        font-size: 12pt;
    }
}

@media screen and (max-width: 360px) {
    body,
    input,
    select,
    textarea {
        font-size: 11pt;
    }
}


/* Reset */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}
</style>
