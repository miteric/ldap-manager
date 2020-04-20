// Input of Text, Textarea, DateString
<template>
  <div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span :class="['input-group-text', lblclass]">{{ labelstr }}</span>
      </div>
      <flat-pickr
        v-model="content"
        @input="handleInput"
        defaultDate="today"
        :config="{ dateFormat: 'm/d/Y' }"
        :name="fieldef.name"
        :class="{
          'form-control': true,
          'is-danger': errors.has(fieldef.name)
        }"
        v-validate="fieldef.validate"
        :data-vv-as="$lang[fieldef.name]"
        :placeholder="myplaceholder"
        v-if="fieldef.type == 'date'"
      ></flat-pickr>
      <textarea
        :value="value"
        @input="handleInput"
        :name="fieldef.name"
        :class="{
          'form-control': true,
          'is-danger': errors.has(fieldef.name)
        }"
        v-validate="fieldef.validate"
        :data-vv-as="$lang[fieldef.name]"
        :placeholder="myplaceholder"
        :rows="fieldef.rows ? fieldef.rows : 6"
        v-else-if="fieldef.type == 'textarea'"
      ></textarea>
      <input
        :type="fieldef.type"
        :value="value"
        @input="handleInput"
        :name="fieldef.name"
        :class="{
          'form-control': true,
          'is-danger': errors.has(fieldef.name)
        }"
        v-validate="fieldef.validate"
        :data-vv-as="$lang[fieldef.name]"
        :placeholder="myplaceholder"
        v-else
      />
    </div>
    <div class="text-danger text-center small">{{ validaterr }}</div>
  </div>
</template>
<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  components: {
    flatPickr
  },
  props: {
    fieldef: {
      type: Object,
      required: true,
      default() {
        return {
          name: "",
          type: "text",
          validate: "",
          placeholder: ""
        };
      }
    },
    value: {
      required: false,
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
  created() {
    // console.log(this.fieldef);
    if (!this.fieldef.validate) {
      this.fieldef.validate = "";
    }
  },
  computed: {
    labelstr() {
      let s = this.$lang[this.fieldef.name];
      if (s) {
        return s;
      }
      return this.fieldef.name;
    },
    myplaceholder() {
      if (!this.fieldef.placeholder) {
        return this.$lang.tip_input + this.labelstr;
      }
      return this.fieldef.placeholder;
    },
    validaterr() {
      if (this.errors.first(this.fieldef.name)) {
        return this.errors.first(this.fieldef.name);
      }
      return String.fromCharCode(160);
    }
  },
  methods: {
    handleInput(e) {
      if (this.fieldef.type == "date") {
        this.content = e;
      } else {
        this.content = e.target.value;
      }

      this.$emit("input", this.content);
    }
  }
};
</script>
<style scoped lang="scss">
.flatpickr-input {
  &.form-control[readonly] {
    background-color: white;
  }
}
</style>
