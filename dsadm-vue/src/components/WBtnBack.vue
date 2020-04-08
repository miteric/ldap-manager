<template>
  <WBtnCircle
    :onaction="goBack"
    faicon="fa-chevron-left"
    btnclass="btn-secondary mr-3"
    :label="label"
  />
</template>
<script>
import WBtnCircle from "@/components/WBtnCircle";
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: ""
    }
  },
  components: {
    WBtnCircle
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>
