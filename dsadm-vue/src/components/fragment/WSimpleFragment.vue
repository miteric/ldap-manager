<template>
  <div class="pl-3 pr-3 pb-5">
    <component
      v-for="(label, i) in labels"
      :key="i"
      :is="componentname(label.type)"
      :label="label.name"
      :value="entity[label.name]"
      :type="label.type"
      loclass="mb-1"
    />
  </div>
</template>
<script>
import WStringView from "@/components/WStringView";

export default {
  props: {
    labels: {
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
      if (type === "txt") {
        return "WStringView";
      }
      return "WStringView";
    }
  }
};
</script>
