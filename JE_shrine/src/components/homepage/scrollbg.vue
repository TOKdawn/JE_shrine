<template>
     <div id="scrollbg">
      <div id="color"></div>
      <ul id="bg">
            <img src="./40.png">
            <img src="./80.png">
            <img src="./70.png">
            <img src="./20.png">
            <img src="./10.png">
            <img src="./30.png">
            <img src="./60.png">
            <img src="./130.png">
            <img src="./120.png">
            <img src="./160.png">
            <img src="./20.png">
            <img src="./10.png">
            <img src="./140.png">
            <img src="./50.png">
            <img src="./90.png">
            <img src="./30.png">
      </ul>
      </div>
</template>

<script>
export default{
     
}

</script>

<style lang="stylus">
#scrollbg{
      z-index -1
}
#color {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #2C3F43;
      background: linear-gradient(to bottom, #252525 0%, #386B76 100%);
      background: linear-gradient(to bottom, #42275a 0%, #734b6d 100%);
      background-attachment: fixed;
}

@keyframes square {
      0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
      }

      100% {
            -webkit-transform: translateY(-1500px) rotate(600deg);
            transform: translateY(-1500px) rotate(600deg);
      }
}

@keyframes square {
      0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
      }

      100% {
            -webkit-transform: translateY(-1200px) rotate(600deg);
            transform: translateY(-1200px) rotate(600deg);
      }
}

#bg {
      height 110%
    
}

#bg img {
      position absolute
      list-style: none;
      display: block;
      opacity: 0.15;
      bottom: -160px;
      -webkit-animation: square 45s infinite;
      animation: square 45s infinite;
      -webkit-transition-timing-function: linear;
      transition-timing-function: linear;
}

#bg img:nth-child(1) {
      left: 10%;
}

#bg img:nth-child(2) {
      left: 20%;
      opacity: 0.25;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 20s;
      animation-duration: 20s;
}

#bg img:nth-child(3) {
      left: 25%;
      -webkit-animation-delay: 4s;
      animation-delay: 4s;
}

#bg img:nth-child(4) {
      left: 40%;
      opacity: 0.25;
      -webkit-animation-duration: 35s;
      animation-duration: 35s;
}

#bg img:nth-child(4) {
      left: 40%;
      opacity: 0.25;
      -webkit-animation-duration: 38s;
      animation-duration: 38s;
}

#bg img:nth-child(13) {
      left: 70%;
}

#bg img:nth-child(6) {
      left: 80%;
      opacity: 0.2;
      -webkit-animation-delay: 3s;
      animation-delay: 3s;
      -webkit-animation-duration: 40s;
      animation-duration: 40s;
}

#bg img:nth-child(7) {
      left: 32%;
      -webkit-animation-delay: 7s;
      animation-delay: 7s;
}

#bg img:nth-child(8) {
      left: 55%;
      -webkit-animation-delay: 15s;
      animation-delay: 15s;
      -webkit-animation-duration: 40s;
      animation-duration: 40s;
}

#bg img:nth-child(9) {
      left: 25%;
      opacity: 0.3;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 30s;
      animation-duration: 30s;
}

#bg img:nth-child(10) {
      left: 73%;
      -webkit-animation-delay: 11s;
      animation-delay: 11s;
}

#bg img:nth-child(11) {
      left: 31%;
      -webkit-animation-delay: 14s;
      animation-delay: 14s;
}

#bg img:nth-child(12) {
      left: 50%;
      opacity: 0.2;
      -webkit-animation-delay: 30s;
      animation-delay: 30s;
}

#bg img:nth-child(13) {
      left: 40%;
      opacity: 0.25;
      -webkit-animation-duration: 28s;
      animation-duration: 28s;
}

#bg img:nth-child(14) {
      left: 65%;
}

#bg img:nth-child(15) {
      left: 30%;
      opacity: 0.2;
      -webkit-animation-delay: 13s;
      animation-delay: 13s;
}

#bg img:nth-child(16) {
      left: 12%;
      -webkit-animation-delay: 7s;
}


#inner {
      position relative
      
}
</style>

