<template>
  <div :class="['panel', 'text-center']" id="footer">
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
    },
    bgclass: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped lang="scss">
$primary: #5593e4;
#footer {
  position: fixed;
  padding: 10px;
  left: 0%;
  bottom: 0%;
  width: 100%;
  background-color: lighten($primary, 20%);
}
a {
  text-decoration: none;
}
</style>
