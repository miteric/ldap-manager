<template>
  <div>
    <div :class="['page-title', 'boxshadow', 'text-primary']">
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

    <h1>This is an edit page {{ entity.name }}</h1>
  </div>
</template>
<script>
import { eventBus } from "@/mixins/api";
import WBtnBack from "@/components/WBtnBack";
import WBtnCircle from "@/components/WBtnCircle";

export default {
  components: {
    WBtnBack,
    WBtnCircle
  },
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
      return this.$lang.edit + ": " + this.entity.name;
    }
  },
  methods: {
    onSubmit() {
      console.log("I'm submiting!");
      eventBus.$emit("showAppUpdating");
      // return this.$router.go(-1);
      // this.$router.push({ name: "ViewEntity", params: { pid: this.pid } });
      let vm = this;
      setTimeout(function() {
        eventBus.$emit("showAppSuccess", vm.$lang.update_success);
      }, 2500);
    }
  }
};
</script>
