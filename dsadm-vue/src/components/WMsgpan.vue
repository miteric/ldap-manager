/* eslint-disable no-undef */
<template>
  <div>
    <WModalpop :show="uping" dlgtype="progress" />
    <div class="msg-panel errmsg active" v-if="errmsg">
      <div><i class="fa fa-warning fa-lg"></i>{{ errmsg }}</div>
    </div>
    <div class="msg-panel active" v-else-if="scsmsg">
      <div><i class="fa fa-check fa-lg"></i>{{ scsmsg }}</div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/mixins/api";
import WModalpop from "@/components/WModalpop";

export default {
  props: {},
  components: {
    WModalpop
  },
  data() {
    return {
      errmsg: "",
      scsmsg: "",
      uping: false
    };
  },
  created: function() {
    eventBus.$on("showAppUpdating", () => {
      this.uping = true;
      this.errmsg = null;
      this.scsmsg = null;
    });
    eventBus.$on("showAppSuccess", msg => {
      this.uping = false;
      this.errmsg = null;
      this.scsmsg = msg;
      var vm = this;
      setTimeout(function() {
        // autohide
        vm.errmsg = null;
        vm.scsmsg = null;
      }, 2500);
    });
    eventBus.$on("showAppError", msg => {
      this.uping = false;
      this.errmsg = msg;
      this.scsmsg = null;
    });
    eventBus.$on("clearAppMsgpan", msg => {
      this.uping = false;
      console.log(msg);
      this.errmsg = null;
      this.scsmsg = null;
    });
  },
  methods: {}
};
</script>
<style scoped lang="scss">
$success: #62a426;
$danger: #fe98b9;
$gray: lighten(#000, 35%);
$gray-lighter: lighten(#000, 80%);

.msg-panel {
  position: fixed;
  right: 20%;
  left: 20%;
  top: 0px;
  width: 400px;
  min-height: 2.5em;
  margin-left: auto;
  margin-right: auto;
  margin-top: -200px;
  padding-top: 5px;
  z-index: 10000;
  font-size: 1.1em;
  text-align: center;
  color: white;
  background-color: lighten($success, 8%);
  border-color: $gray;
  border-radius: 0em 0em 1.5em 1.5em;
  box-shadow: 0 3px 2px darken($gray-lighter, 16%);
  transition: all 0.5s;
  &.errmsg {
    background-color: lighten($danger, 10%);
  }
  &.active {
    margin-top: 0px !important;
  }
}
</style>
