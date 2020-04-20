<template>
  <div>
    <component
      :is="type"
      :fieldefs="gpfields(sec)"
      :entity="entity"
    ></component>
  </div>
</template>
<script>
import WSimpleFragment from "@/components/fragment/WSimpleFragment";
import conf from "@/conf/user_conf.js";

export default {
  components: {
    WSimpleFragment
  },
  props: {
    pid: {
      type: String,
      required: true,
      validator: function(value) {
        return value && 0 < value.length;
      }
    },
    sec: {
      type: String,
      required: false,
      default: "profile",
      validator: function(value) {
        return value && 0 < value.length;
      }
    },
    type: {
      type: String,
      required: false,
      default: "WSimpleFragment",
      validator: function(value) {
        // console.log(value);
        return value && 0 < value.length;
      }
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
  computed: {},
  methods: {
    gpfields(gp) {
      if (!gp) {
        return conf.fieldefs;
      }
      var list = conf.fieldefs.filter(function(item) {
        return item.gp === gp;
      });
      return list;
    }
  }
};
</script>
