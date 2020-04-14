<template>
  <div class="modal" v-show="show">
    <div class="modal-wrapper">
      <WBtnCircle
        :onaction="close"
        faicon="fa-times"
        btnclass="pull-right bgmask btn-info mr-3"
      />
      <div class="modal-container">
        <img style="width: 100%;" :src="imgurl" />
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/mixins/api";
import WBtnCircle from "@/components/WBtnCircle";

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    WBtnCircle
  },
  data() {
    return {
      imgurl: ""
    };
  },
  created: function() {
    eventBus.$on("showImageViewer", url => {
      this.imgurl = url;
      this.show = true;
    });
  },
  methods: {
    close() {
      this.imgurl = null;
      this.show = false;
    }
  }
};
</script>
<style scoped lang="scss">
.bgmask {
  background-color: darken($color: #fff, $amount: 60%);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &-container {
    background: #fff;
    max-width: 90%;
    max-height: 90%;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    margin: 0 auto;
    padding: 20px 30px;
  }

  &-enter,
  &-leave {
    opacity: 0;
  }

  &-enter &-container,
  &-leave &-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
