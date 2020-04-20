// Single choice in select or radio control
<template>
  <div v-if="fieldef.type === 'select'">
    <div class="input-group">
      <div class="input-group-prepend">
        <span :class="['input-group-text', lblclass]">{{ labelstr }}</span>
      </div>
      <select
        :name="fieldef.name"
        :id="fieldef.name"
        :class="{
          'form-control': true,
          'is-danger': errors.has(fieldef.name)
        }"
        @input="handleInput"
        v-model="content"
      >
        <option
          v-for="(candidate, i) in fieldef.candidates"
          :key="i"
          :value="candidate.value"
          >{{ langstr(candidate.name) }}</option
        >
      </select>
    </div>
    <div class="text-danger text-center small">{{ validaterr }}</div>
  </div>
  <div v-else>
    <div class="form-inline" v-if="fieldef.name">
      <label :for="labelstr" v-if="labelstr" class="mr-3">{{ labelstr }}</label>
      <label
        :for="i"
        v-for="(candidate, i) in fieldef.candidates"
        :key="i"
        class="radio-inline mr-3"
      >
        <input
          type="radio"
          name="optradio"
          :value="candidate.value"
          @input="handleInput"
          v-model="content"
          class="mr-2"
        />{{ langstr(candidate.name) }}
      </label>
    </div>
    <div v-else>
      <label :for="labelstr" v-if="labelstr">{{ labelstr }}</label>
      <div>
        <label
          :for="i"
          v-for="(candidate, i) in fieldef.candidates"
          :key="i"
          class="radio mb-1 ml-2"
          ><input
            type="radio"
            name="optradio"
            :value="candidate.value"
            @input="handleInput"
            v-model="content"
            class="mr-2"
          />{{ langstr(candidate.name) }}</label
        >
      </div>
    </div>
    <div class="text-danger text-center small">{{ validaterr }}</div>
  </div>
</template>
<script>
export default {
  props: {
    fieldef: {
      type: Object,
      required: true,
      default() {
        return {
          name: "",
          candidates: [],
          inline: true
        };
      }
    },
    value: {
      required: true,
      default: ""
    },
    lblclass: {
      type: String,
      default: "text-secondary bg-white"
    }
  },
  data() {
    return {
      content: this.value
    };
  },
  computed: {
    labelstr() {
      let s = this.$lang[this.fieldef.name];
      if (s) {
        return s;
      }
      return this.fieldef.name;
    },
    validaterr() {
      //   if (this.errors.first(this.fieldef.name)) {
      //     return this.errors.first(this.fieldef.name);
      //   }
      return String.fromCharCode(160);
    }
  },
  methods: {
    langstr: function(lblname) {
      if (this.$lang[lblname]) {
        return this.$lang[lblname];
      }
      return lblname;
    },
    handleInput(e) {
      this.content = e.target.value;
      // console.log(this.content);
      this.$emit("input", this.content);
    }
  }
};
</script>
<style scope lang="scss">
.radio {
  position: relative;
  display: block;
}
</style>
