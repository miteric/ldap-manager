/* General String Display, setting lblclass & valclass to "" will get bootstrap
standard input-group */
<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span :class="['input-group-text', lblclass]">{{ labelstr }}</span>
    </div>
    <div :class="['form-control', valueclass]">{{ myvalue }}</div>
  </div>
</template>
<script>
export default {
  props: {
    fieldef: {
      type: Object,
      required: true,
      default() {
        return {
          name: "",
          type: "text"
        };
      }
    },
    value: {
      required: true,
      default: ""
    },
    lblclass: {
      type: String,
      default: "text-secondary bg-white border-trans"
    },
    valclass: {
      type: String,
      default: "border-ul compact"
    }
  },
  computed: {
    myvalue() {
      if ("undefined" === typeof this.value) {
        return "";
      }
      return this.value;
    },
    labelstr() {
      let s = this.$lang[this.fieldef.name];
      if (s) {
        return s;
      }
      return this.fieldef.name;
    },
    valueclass() {
      if (this.fieldef.type == "textarea") {
        return "white-space-pre " + this.valclass;
      }
      return this.valclass;
    }
  }
};
</script>
<style scoped lang="scss">
$gray-lighter: lighten(#000, 90%);
.white-space-pre {
  white-space: pre-wrap;
  height: auto;
}
.compact {
  margin-bottom: -1px;
}
.border-ul {
  border-width: 0 0 1px 0 !important;
  border-color: $gray-lighter;
}
.border-trans {
  border-color: transparent;
}
</style>
