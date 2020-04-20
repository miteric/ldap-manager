<template>
  <div class="pl-3 pr-3 pb-5">
    <component
      v-for="(fieldef, i) in fieldefs"
      :key="i"
      :is="componentname(fieldef.type)"
      :fieldef="fieldef"
      :value="entity[fieldef.name]"
      class="mb-1"
    />
  </div>
</template>
<script>
import WStringView from "@/components/WStringView";

export default {
  props: {
    fieldefs: {
      type: Array,
      default: () => []
    },
    entity: {
      required: true
    }
  },
  components: {
    WStringView
  },
  methods: {
    componentname(type) {
      if (type === "text") {
        return "WStringView";
      }
      return "WStringView";
    }
  }
};
</script>
