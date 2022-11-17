<script>
export default {
  name: 'AppSmoke'
}
</script>

<template>

    <div class="smoke-wrap">
      <img class="smoke" src="../assets/img/smoke.png" alt="smoke">
    </div>
    <div class="smoke-wrap">
      <img class="smoke2" src="../assets/img/smoke.png" alt="smoke">
    </div>
    <div class="smoke-wrap">
      <img class="smoke3" src="../assets/img/smoke.png" alt="smoke">
    </div>
  
</template>

<style lang="scss" scoped>

.smoke-wrap {
  position: absolute;
  left: -68%;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;

}

.smoke,
.smoke2,
.smoke3 {
  filter: blur(5px);
  transform-origin: 50% 50%;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
}

.smoke {
  animation: smoke1 3s linear infinite;
  animation-delay: 0.5s;
}

.smoke2 {
  animation: smoke2 3s linear infinite;
  animation-delay: 1.5s;
}

.smoke3 {
  width: 500px;
  animation: smoke3 4s linear infinite;
  animation-delay: 2.5s;
}

@keyframes smoke1 {
  0% {
    filter: blur(0px);
    transform: translateY(0px) scale(-1, 1);
    opacity: 0;
  }

  25% {
    filter: blur(3px);
    transform: translateY(-10px) scale(-1, 1.05);
    opacity: 0.5;
  }

  50% {
    filter: blur(5px);
    transform: translateY(-20px) scale(-1, 1.1);
    opacity: 1;
  }

  75% {
    filter: blur(5px);
    transform: translateY(-30px) scale(-1, 1.15);
    opacity: 0.5;
  }

  100% {
    filter: blur(7px);
    transform: translateY(-40px) scale(-1, 1.2);
    opacity: 0;
  }
}

@keyframes smoke2 {
  0% {
    filter: blur(0px);
    transform: translateY(0px) scale(1);
    opacity: 0;
  }

  25% {
    filter: blur(3px);
    transform: translateY(-10px) scale(1.05);
    opacity: 0.5;
  }

  50% {
    filter: blur(5px);
    transform: translateY(-20px) scale(1.1);
    opacity: 1;
  }

  75% {
    filter: blur(5px);
    transform: translateY(-30px) scale(1.15);
    opacity: 0.5;
  }

  100% {
    filter: blur(7px);
    transform: translateY(-40px) scale(1.2);
    opacity: 0;
  }
}

@keyframes smoke3 {
  0% {
    filter: blur(0px);
    transform: translateY(0px) scale(1);
    opacity: 0;
  }

  25% {
    filter: blur(3px);
    transform: translateY(-20px) scale(1.05);
    opacity: 0.5;
  }

  50% {
    filter: blur(5px);
    transform: translateY(-40px) scale(1.1);
    opacity: 1;
  }

  75% {
    filter: blur(5px);
    transform: translateY(-60px) scale(1.15);
    opacity: 0.5;
  }

  100% {
    filter: blur(7px);
    transform: translateY(-80px) scale(1.2);
    opacity: 0;
  }
}




</style>