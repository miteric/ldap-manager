/* General String Display, setting lblclass & valclass to "" will get bootstrap
standard input-group */
<template>
  <div :class="['input-group', loclass]">
    <div class="input-group-prepend">
      <span :class="['input-group-text', lblclass]">{{ labelstr }}</span>
    </div>
    <div :class="['form-control', valueclass]">{{ value }}</div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "txt"
    },
    loclass: {
      type: String,
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
    labelstr() {
      let s = this.$lang[this.label];
      if (s) {
        return s;
      }
      return this.label;
    },
    valueclass() {
      if (this.type == "txtarea") {
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

@media (max-width: 767px) {
  .input-group-prepend .input-group-text {
    min-width: 80px !important;
  }
}
@media (max-width: 1199px) {
  .input-group-prepend .input-group-text {
    min-width: 120px !important;
  }
}
@media (min-width: 1200px) {
  .input-group-prepend .input-group-text {
    min-width: 200px !important;
  }
}
</style>
