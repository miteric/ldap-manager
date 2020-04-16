<template>
  <div id="app" class="container">
    <MyNavibar />
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view :key="$route.path" />
    <!-- </transition> -->
    <WFooter company="" />
    <WMsgpan />
  </div>
</template>
<script>
import MyNavibar from "@/components/MyNavibar";
import WFooter from "@/components/WFooter";
import WMsgpan from "@/components/WMsgpan";

export default {
  created: function() {
    // eslint-disable-next-line no-undef
    this.$validator.setLocale(MEApp.locale);
    // eslint-disable-next-line no-undef
    this.$setLang(MEApp.locale);
  },
  components: {
    WMsgpan,
    MyNavibar,
    WFooter
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
$gray-lighter: lighten(#000, 95%);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $gray;
  // min-height: 600px;
}
.app-container {
  margin-top: 0.5em;
  width: 100%;
  border-radius: 6px;
  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.375);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.375);
}
.page-title {
  text-align: left;
  min-height: 50px;
  border-radius: 6px 6px 0px 0px;
  padding: 5px 10px;
  font-size: 1.4em;
  margin-bottom: 0.5em;
}
.boxshadow {
  background: linear-gradient(
    to bottom,
    lighten($primary, 37%) 0%,
    #ffffff 20%,
    #ffffff 82%,
    lighten($primary, 36%) 100%
  );
  -webkit-box-shadow: 0px 1px 1px lighten($secondary, 45%);
  box-shadow: 0px 1px 1px lighten($secondary, 45%);
  padding: 8px 10px;
}
.content-display {
  margin-right: 15px;
  margin-left: 15px;
  min-height: 300px;
}
.menu-item {
  font-size: 1.1em;
  font-weight: 400;
  // style for router active link
  .router-link-active {
    border: 1px solid lighten($primary, 33%);
    border-radius: 6px;
    font-weight: 500;
    color: $primary;
    background: linear-gradient(
      to bottom,
      lighten($primary, 34%) 0%,
      lighten($primary, 37%) 10%,
      #ffffff 82%,
      lighten($primary, 37%) 90%,
      lighten($primary, 34%) 100%
    );
    @media (max-width: 767px) {
      border-bottom: 0;
    }
  }
  a {
    display: block;
    padding: 0.5em;
    text-decoration: none;
    color: $secondary;
    &:hover {
      background-color: lighten($primary, 35%);
      border-radius: 6px;
    }
    @media (max-width: 767px) {
      padding: 0.3em 0;
    }
  }

}
.menu {
  border-right: 1px solid lighten($primary, 32%);
  padding-right: 15px;
  @media (max-width: 767px) {
    border-bottom: 1px solid lighten($primary, 32%);
    border-right: 0px;
    margin-bottom: 15px;
  }
}
// transition effects
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.05;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(80%);
}
.moveUp-enter-active {
  animation: moveUp 0.5s ease-in;
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
  animation: moveDn 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes moveDn {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
