<template>
  <div class="modal" v-show="show">
    <div class="modal-wrapper">
      <div class="modal-progress" v-if="dlgtype === 'progress'">
        <i class="fa fa-cog fa-spin fa-4x"></i>
      </div>
      <div class="modal-container" v-else>
        <content select=".modal-header">
          <div class="modal-header">
            <h3>
              {{ title }}
            </h3>
          </div>
        </content>
        <div class="modal-body">
          {{ msgbody }}
        </div>
        <div class="modal-footer clearfix">
          <button @click="close" class="btn btn-secondary pull-right">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/mixins/api";

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    dlgtype: {
      type: String,
      default: "progress",
      validator: function(value) {
        return ["dialog", "progress"].indexOf(value) !== -1;
      }
    },
    title: {
      type: String
    },
    msgbody: {
      type: String
    }
  },
  methods: {
    close() {
      eventBus.$emit("clearAppMsgpan");
    }
  }
};
</script>
<style scoped lang="scss">
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
  &-progress {
    color: #fff;
    background: transparent;
    width: auto;
    transition: all 0.3s ease;
    margin: 0 auto;
  }
  &-container {
    background: #fff;
    max-width: 90%;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    margin: 0 auto;
    padding: 20px 30px;
  }

  &-footer {
    margin-top: 10px;
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
