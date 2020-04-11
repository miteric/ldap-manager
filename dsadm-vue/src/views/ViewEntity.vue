<template>
  <div>
    <div :class="['page-title', 'boxshadow', 'text-primary']">
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
    <h1>This is {{ entity.name }}</h1>
  </div>
</template>
<script>
import WBtnBack from "@/components/WBtnBack";
import WBtnCircle from "@/components/WBtnCircle";

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
    WBtnCircle
  },
  computed: {
    entity() {
      return this.mydatalist.find(entity => entity.pid === this.pid);
    },
    titletxt() {
      if (this.title && 0 < this.title.length) {
        console.log(this.title);
        return this.title;
      }
      return this.$lang.view + ": " + this.entity.name;
    }
  },
  methods: {
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
