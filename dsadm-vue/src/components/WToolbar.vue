<template>
  <div :class="['page-title', titleclass]">
    <span>{{ title }}</span>
    <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
      <WBtnBack />
      <WBtnCircle
        linkto="/new"
        faicon="fa-plus"
        btnclass="btn-primary"
        v-if="newable"
      />
      <WBtnCircle
        linkto="/edit/123"
        faicon="fa-pencil"
        btnclass="btn-primary"
        v-if="editable"
      />

      <router-link
        to="/view/123"
        class="btn btn-primary btn-circle mr-1"
        v-if="editable"
      >
        <i class="fa fa-eye" aria-hidden="true"></i>
      </router-link>
      
      <button type="button" class="btn btn-secondary btn-circle mr-1">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>
<script>
import WBtnBack from "@/components/WBtnBack";
import WBtnCircle from "@/components/WBtnCircle";

export default {
  props: {
    myctx: {
      type: String,
      required: false,
      default: ""
    },
    title: {
      type: String,
      required: false,
      default: "Title"
    },
    titleclass: {
      required: false,
      default: "text-primary"
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
    WBtnBack,
    WBtnCircle
  },
  computed: {
    mainclass() {
      return "page-title" + this.bgclass;
    }
  },
  methods: {}
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

.rcorner {
  float: right !important;
  margin-top: 2px;
  margin-right: 8px;
}
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
