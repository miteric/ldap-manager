<template>
  <div class="app-container">
    <div class="page-title boxshadow">
      <span>{{ titletxt }}</span>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <WBtnBack />
        <WBtnCircle
          :linkto="{ name: 'route.edit', params: { pid: pid, title: '' } }"
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
    <div class="content-display">
      <div class="row">
        <div class="col-sm-12 col-md-3" v-if="sections.length > 1">
          <div class="row menu d-none d-md-block">
            <div
              class="col-12 menu-item pr-0"
              v-for="section in sections"
              :key="section.name"
            >
              <router-link
                :to="{
                  name: section.routename,
                  params: { sec: section.name, type: section.type }
                }"
              >
                {{ $lang[section.name] }}
              </router-link>
            </div>
          </div>
          <div class="row menu no-gutters d-md-none">
            <div
              class="col menu-item text-center"
              v-for="section in sections"
              :key="section.name"
            >
              <router-link
                :to="{
                  name: section.routename,
                  params: { sec: section.name, type: section.type }
                }"
              >
                {{ $lang[section.name] }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <router-view :key="$route.path" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WBtnBack from "@/components/WBtnBack";
import WBtnCircle from "@/components/WBtnCircle";
import conf from "@/conf/user_conf.js";

export default {
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
  components: {
    WBtnBack,
    WBtnCircle
  },
  data() {
    return {
      entity: null
    };
  },
  created() {
    this.curentity = this.mydatalist.find(entity => entity.pid === this.pid);
    this.entity = this.curentity;
  },
  computed: {
    titletxt() {
      if (this.title && 0 < this.title.length) {
        return this.title;
      }
      return this.entity.name;
    },
    sections() {
      // console.log(conf.sections);
      return conf.sections;
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
