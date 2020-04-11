/* eslint-disable no-undef */
<template>
  <div>
    <div :class="['page-title', 'text-primary']">
      <span v-if="mytitle">{{ mytitle }}</span>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <WBtnCircle
          :linkto="{ name: 'NewEntity' }"
          faicon="fa-plus"
          btnclass="btn-primary"
          v-if="newable"
        />
      </div>
    </div>
    <WTable :datalist="mydatalist" :thfields="config.fields" />
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
  data() {
    return {
      // don't try to move it to computed, not working
      config: conf
    };
  }
};
</script>
