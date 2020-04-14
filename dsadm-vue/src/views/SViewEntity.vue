// Simple View Page
<template>
  <div class="app-container">
    <div class="page-title boxshadow">
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
    <div class="pl-3 pr-3 pb-5">
      <WStringView
        v-for="(field, i) in fieldsbygroup('')"
        :key="i"
        :labelkey="field.name"
        :value="fieldvalue(field.name)"
        loclass="mb-1"
      />
    </div>
  </div>
</template>
<script>
import WBtnBack from "@/components/WBtnBack";
import WBtnCircle from "@/components/WBtnCircle";
import WStringView from "@/components/WStringView";
import conf from "@/conf/user_conf.js";

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
    }
  },
  components: {
    WBtnBack,
    WBtnCircle,
    WStringView
  },
  data() {
    return {
      entity: null
    };
  },
  created() {
    this.entity = this.mydatalist.find(entity => entity.pid === this.pid);
  },
  computed: {
    titletxt() {
      if (this.title && 0 < this.title.length) {
        console.log(this.title);
        return this.title;
      }
      return this.$lang.view + ": " + this.entity.name;
    }
  },
  methods: {
    fieldvalue(name) {
      if ("undefined" === typeof this.entity[name]) {
        return "";
      }
      return this.entity[name];
    },
    fieldsbygroup(gp) {
      if (!gp) {
        return conf.fields;
      }
      return conf.fields.filter(function(item) {
        return item.gp === gp;
      });
    },
    onDelete() {
      var r = confirm(this.$lang.confirm_delete);
      if (r == true) {
        console.log("I'm deleting!");
        for (let index = 0; index < this.mydatalist.length; index++) {
          const element = this.mydatalist[index];
          if (element.pid == this.pid) {
            this.mydatalist.splice(index, 1);
            break;
          }
        }
        return this.$router.go(-1);
      }
    }
  }
};
</script>
