// Multiple choices binding with results of selected array.
<template>
  <div>
    <div class="form-inline" v-if="fieldef.inline">
      <label :for="labelstr" v-if="labelstr" class="mr-3">{{ labelstr }}</label>
      <label
        :for="i"
        v-for="(candidate, i) in fieldef.candidates"
        :key="i"
        class="checkbox-inline mr-3"
      >
        <input
          type="checkbox"
          :id="candidate.value"
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
          class="checkbox mb-1 ml-2"
          ><input
            type="checkbox"
            :id="candidate.value"
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
      default: () => []
    }
  },
  data() {
    return {
      content: []
    };
  },
  created() {
    this.content = this.value;
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
      if (e.target.checked) {
        this.content.push(e.target.value);
      } else {
        for (var i = 0; i < this.content.length; i++) {
          if (this.content[i] === e.target.value) {
            this.content.splice(i, 1);
            break;
          }
        }
      }
      //   console.log(this.content);
      this.$emit("input", this.content);
    }
  }
};
</script>
<style scope lang="scss">
.checkbox {
  position: relative;
  display: block;
}
</style>
