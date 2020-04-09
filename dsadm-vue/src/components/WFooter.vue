<template>
  <div class="panel text-center">
    <div class="panel-heading">
      <small
        >{{ $lang.copyright }}&copy;{{ company }}, Powered by
        <a href="http://www.wellfunc.com" target="_blank">WELLFUNC</a></small
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    company: {
      type: String
    },
    url: {
      type: String
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
