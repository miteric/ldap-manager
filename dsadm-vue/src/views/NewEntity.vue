<template>
  <div>
    <div :class="['page-title', 'text-primary']">
      <span>{{ titletxt }}</span>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <WBtnBack />
        <WBtnCircle
          :onaction="onSubmit"
          faicon="fa-save"
          :label="$lang.save"
          btnclass="btn-primary"
        />
      </div>
    </div>
  </div>
</template>
<script>
import WBtnBack from "@/components/WBtnBack";
import WBtnCircle from "@/components/WBtnCircle";

export default {
  props: {
    title: {
      type: String
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
      return this.$lang.new;
    }
  },
  methods: {
    onSubmit() {
      console.log("I'm submiting!");
      return this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="scss">
$primary: #5593e4;
$info: #75edf8;
$warning: #fffc99;
$danger: #fe98b9;
$secondary: #6b6c7e;
$success: #62a426;
$gray: lighten(#000, 35%);
$gray-lighter: lighten(#000, 80%);

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
