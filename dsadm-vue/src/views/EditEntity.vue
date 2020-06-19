<template>
  <div class="app-container">
    <div :class="['page-title', 'boxshadow']">
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
    <div class="content-display">
      <form class="row">
        <component
          v-for="(fieldef, i) in gpfields('')"
          :is="componentname(fieldef.type)"
          :key="i"
          :fieldef="fieldef"
          v-model="entity[fieldef.name]"
          class="col-12"
        />
      </form>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../mixins/api";
import WBtnBack from "../components/WBtnBack";
import WBtnCircle from "../components/WBtnCircle";
import WStringInput from "../components/input/WStringInput";
import WSingleSelect from "../components/input/WSingleSelect";
import WMultiSelects from "../components/input/WMultiSelects";
import conf from "../conf/user_conf.js";

export default {
  inject: ["$validator"],
  components: {
    WBtnBack,
    WBtnCircle,
    WStringInput,
    WSingleSelect,
    WMultiSelects
  },
  props: {
    pid: {
      type: String,
      required: true,
      validator: function(value) {
        return value && 0 < value.length;
      }
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      entity: null
    };
  },
  created() {
    this.entity = this.mydatalist.find(entity => entity.pid === this.pid);
    // console.log(this.entity);
  },
  computed: {
    titletxt() {
      if (this.title && 0 < this.title.length) {
        console.log(this.title);
        return this.title;
      }
      return this.$lang.edit + ": " + this.entity.name;
    }
  },
  methods: {
    componentname(type) {
      // console.log(type);
      if (type === "text" || type === "textarea") {
        return "WStringInput";
      } else if (type === "select" || type === "radio") {
        return "WSingleSelect";
      } else if (type === "selections") {
        return "WMultiSelects";
      }
      return "WStringInput";
    },
    gpfields(gp) {
      if (!gp || gp.length === 0) {
        return conf.fieldefs;
      }
      return conf.fieldefs.filter(function(item) {
        return item.gp === gp;
      });
    },
    onSubmit() {
      this.$validator
        .validateAll()
        .then(result => {
          if (!result) {
            // validation failed.
            eventBus.$emit("showAppError", this.$lang.error_required);
            return;
          }
          console.log(this.entity);
          let vm = this;
          setTimeout(function() {
            eventBus.$emit("showAppSuccess", vm.$lang.update_success);
          }, 2500);
        })
        .catch(() => {});
    }
  }
};
</script>
