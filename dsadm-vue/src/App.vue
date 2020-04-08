<template>
  <div id="app" class="container">
    <MyNavibar />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>
<script>
import MyNavibar from "@/components/MyNavibar";

export default {
  components: {
    MyNavibar
  }
};
</script>

<style lang="scss">
$primary: #5593e4;
$info: #75edf8;
$warning: #fffc99;
$danger: #fe98b9;
$secondary: #6b6c7e;
$success: #62a426;
$gray: lighten(#000, 35%);
$gray-lighter: lighten(#000, 80%);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 600px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.65;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-to {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
