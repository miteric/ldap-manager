<template>
  <div>
    <div :class="['page-title', 'text-primary']">
      <span>{{ title }}</span>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <WBtnCircle
          linkto="/new"
          faicon="fa-plus"
          btnclass="btn-primary"
          v-if="newable"
        />
        <WBtnCircle
          linkto="/view/S123"
          faicon="fa-eye"
          btnclass="btn-primary"
          v-if="editable"
        />
      </div>
    </div>
    <h1>This is list page of</h1>
  </div>
</template>
<script>
import WBtnCircle from "@/components/WBtnCircle";

export default {
  props: {
    title: {
      type: String,
      default: "List"
    },
    newable: {
      type: Boolean,
      default: true
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
    WBtnCircle
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
