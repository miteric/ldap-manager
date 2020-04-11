<template>
  <button
    type="button"
    :class="['btn btn-circle mr-1', btnclass]"
    @click="onaction"
    v-if="onaction"
  >
    <span class="pr-1 pl-1" v-if="label">
      <i :class="['fa', faicon]" aria-hidden="true" v-if="faicon">
        &nbsp;{{ label }}
      </i></span
    >
    <i :class="['fa', faicon]" aria-hidden="true" v-else> </i>
  </button>
  <router-link :to="linkto" :class="['btn btn-circle mr-1', btnclass]" v-else>
    <i :class="['fa', faicon]" aria-hidden="true" v-if="faicon">
      <span v-if="label">{{ label }}</span>
    </i>
  </router-link>
</template>
<script>
export default {
  props: {
    // either onaction or linkto should set with value for button destination
    onaction: {
      required: false
    },
    linkto: {
      required: false
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    btnclass: {
      type: String,
      required: false,
      default: "btn-secondary"
    },
    faicon: {
      type: String,
      required: false
    }
  }
};
</script>
<style scoped lang="scss">
$primary: #5593e4;
$info: #75edf8;
$warning: #f8b575;
$danger: #fe98b9;
$secondary: #6b6c7e;
$success: #62a426;
$gray: lighten(#000, 35%);
$gray-lighter: lighten(#000, 80%);

.btn-circle {
  min-width: 30px;
  background-color: transparent;
  transition: all 0.5s;
  height: 30px;
  padding: 6px 4px;
  border-radius: 15px;
  border-color: $gray-lighter;
  font-size: 12px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  span {
    font-weight: 800;
  }

  &.btn-primary {
    color: $primary;
    border-color: lighten($primary, 20%);
    &:hover {
      color: white;
      background-color: $primary;
    }
  }

  &.btn-secondary {
    color: $secondary;
    &:hover {
      color: white;
      background-color: lighten($secondary, 10%);
    }
  }

  &.btn-info {
    color: $info;
    border-color: lighten($info, 10%);
    &:hover {
      color: white;
      background-color: $info;
    }
  }

  &.btn-success {
    color: $success;
    border-color: lighten($success, 20%);
    &:hover {
      color: white;
      background-color: $success;
    }
  }

  &.btn-warning {
    color: $warning;
    border-color: lighten($warning, 10%);
    &:hover {
      color: white;
      background-color: $warning;
    }
  }

  &.btn-danger {
    color: $danger;
    border-color: lighten($danger, 10%);
    &:hover {
      color: white;
      background-color: $danger;
    }
  }

  &.btn-lg {
    width: 50px;
    height: 50px;
    padding: 10px 16px;
    font-size: 18px;
    border-radius: 25px;
  }

  &.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    font-size: 24px;
    border-radius: 35px;
  }
}
</style>
