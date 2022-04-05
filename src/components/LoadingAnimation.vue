<template>

  <div class="dotBox">
    <div class="dot-flashing"></div>
  </div>

  <div class="dotBox">
    <div class="dot-windmill"></div>
  </div>

  <div class="dotBox">
    <div class="dot-typing"></div>
  </div>

</template>

<style scoped>



  .dotBox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3rem 0;
    margin: 0 -5%;
    overflow: hidden;
    background-color: #000;
    /* border: red solid 1px; */
  }

 
/* dot flashing */

.dot-flashing {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #63b798;
    color: #63b798;
    animation: dotFlashing .5s infinite linear alternate;
    animation-delay: .25s;
  }
  
  .dot-flashing::before, .dot-flashing::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  
  .dot-flashing::before {
    left: -45px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #63b798;
    color: #63b798;
    animation: dotFlashing .5s infinite alternate;
    animation-delay: 0s;
  }
  
  .dot-flashing::after {
    left: 45px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #63b798;
    color: #63b798;
    animation: dotFlashing .5s infinite alternate;
    animation-delay: .5s;
  }
  
  @keyframes dotFlashing {
    0% {
      background-color: #63b798;
    }
    50%,
    100% {
      background-color: #325c4c;
    }
  }

  /* dot windmill */

  .dot-windmill {
    position: relative;
    top: -30px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #63b798;
    color: #63b798;
    transform-origin: 15px 45px;
    animation: dotWindmill 2s infinite linear;
  }
  
  .dot-windmill::before, .dot-windmill::after {
    content: '';
    display: inline-block;
    position: absolute;
  }
  
  .dot-windmill::before {
    left: -25.98px;
    top: 45px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #63b798;
    color: #63b798;
  }
  
  .dot-windmill::after {
    left: 25.98px;
    top: 45px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #63b798;
    color: #63b798;
  }
  
  @keyframes dotWindmill {
    0% {
      transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotateZ(720deg) translate3d(0, 0, 0);
    }
  }

  /* dot typing */

  .dot-typing {
    position: relative;
    left: -9999px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #63b798;
    color: #63b798;
    box-shadow: 9954px 0 0 0 #63b798, 9999px 0 0 0 #63b798, 10044px 0 0 0 #63b798;
    animation: dotTyping 1s infinite linear;
  }
  
  @keyframes dotTyping {
    0% {
      box-shadow: 9954px 0 0 0 #63b798, 9999px 0 0 0 #63b798, 10044px 0 0 0 #63b798;
    }
    16.667% {
      box-shadow: 9954px -24px 0 0 #63b798, 9999px 0 0 0 #63b798, 10044px 0 0 0 #63b798;
    }
    33.333% {
      box-shadow: 9954px 0 0 0 #63b798, 9999px 0 0 0 #63b798, 10044px 0 0 0 #63b798;
    }
    50% {
      box-shadow: 9954px 0 0 0 #63b798, 9999px -24px 0 0 #63b798, 10044px 0 0 0 #63b798;
    }
    66.667% {
      box-shadow: 9954px 0 0 0 #63b798, 9999px 0 0 0 #63b798, 10044px 0 0 0 #63b798;
    }
    83.333% {
      box-shadow: 9954px 0 0 0 #63b798, 9999px 0 0 0 #63b798, 10044px -24px 0 0 #63b798;
    }
    100% {
      box-shadow: 9954px 0 0 0 #63b798, 9999px 0 0 0 #63b798, 10044px 0 0 0 #63b798;
    }
  }
  

</style>