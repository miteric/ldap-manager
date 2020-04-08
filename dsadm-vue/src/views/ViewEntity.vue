<template>
  <div>
    <div :class="['page-title', 'text-primary']">
      <span>{{ titletxt }}</span>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <WBtnBack />
        <WBtnCircle
          :linkto="{ name: 'EditEntity', params: { pid: pid, title: '' } }"
          faicon="fa-pencil"
          btnclass="btn-primary"
          v-if="editable"
        />
        <WBtnCircle
          :onaction="onDelete"
          faicon="fa-times"
          btnclass="btn-danger"
          v-if="delable"
        />
      </div>
    </div>
    <h1>This is view page</h1>
  </div>
</template>
<script>
import WBtnBack from "@/components/WBtnBack";
import WBtnCircle from "@/components/WBtnCircle";

export default {
  props: {
    pid: {
      type: String,
      required: true,
      validator: function(value) {
        return value || 0 < value.length;
      }
    },
    title: {
      type: String
    },
    editable: {
      type: Boolean,
      default: true
    },
    delable: {
      type: Boolean,
      default: true
    }
  },
  components: {
    WBtnBack,
    WBtnCircle
  },
  computed: {
    titletxt() {
      if (this.title && 0 < this.title.length) {
        console.log(this.title);
        return this.title;
      }
      return this.$lang.view + ": " + this.pid;
    }
  },
  methods: {
    onDelete() {
      console.log("I'm deleting!");
      return this.$router.go(-1);
      // this.$router.push({ name: "ViewEntity", params: { pid: this.pid } });
    }
  }
};
</script>
<style scoped lang="scss">
.page-title {
  text-align: left;
  min-height: 50px;
  border-radius: 6px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1.5em;
  -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.375);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.375);
}
</style>
