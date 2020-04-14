/* General String Display */
<template>
  <div :class="['input-group', loclass]">
    <div class="input-group-prepend">
      <span :class="['input-group-text', lblclass]" v-if="labelkey">{{
        $lang[labelkey]
      }}</span>
      <span :class="['input-group-text', lblclass]" v-else-if="label">{{
        label
      }}</span>
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
    labelkey: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true
    },
    multiline: {
      type: Boolean,
      default: false
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
    valueclass() {
      if (this.multiline) {
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
