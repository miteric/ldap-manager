<template>
  <div>
    <h1>This is an view detail pid: {{ pid }}</h1>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    pid: {
      type: String,
      required: true
    }
  },
  computed: {
    datalist() {
      return [];
      // return store.destinations.find(
      //   destination => destination.slug === this.slug
      // );
    }
  }
};
</script>
