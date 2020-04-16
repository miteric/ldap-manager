/* eslint-disable no-undef */
<template>
  <div class="app-container">
    <div class="page-title boxshadow">
      <span v-if="mytitle">{{ mytitle }}</span>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <WBtnCircle
          :linkto="{ name: 'route.new' }"
          faicon="fa-plus"
          btnclass="btn-primary"
          v-if="newable"
        />
      </div>
    </div>
    <WTable
      :datalist="mydatalist"
      :thfields="tablefields()"
      :dodelete="onDelete"
      class="pl-3 pr-3"
    />
  </div>
</template>
<script>
import WBtnCircle from "@/components/WBtnCircle";
import WTable from "@/components/WTable";
import conf from "@/conf/user_conf.js";

export default {
  components: {
    WBtnCircle,
    WTable
  },
  methods: {
    tablefields() {
      return conf.fields.filter(function(item) {
        return item.tbsort > 0;
      });
    },
    onDelete(idx) {
      var r = confirm(this.$lang.confirm_delete);
      if (r == true) {
        console.log("I'm deleting " + idx);
        this.mydatalist.splice(idx, 1);
      }
    }
  }
};
</script>
