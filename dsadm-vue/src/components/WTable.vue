<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover table-borderless">
      <thead :class="thbgclass">
        <tr>
          <th v-for="(hfield, i) in thfields" :key="i" scope="col">
            {{ $lang[hfield.name] }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(current, k) in datalist" :key="k">
          <td v-for="(tfield, j) in thfields" :key="j">
            <router-link
              :to="{ name: 'ViewEntity', params: { pid: current.pid } }"
              v-if="j == 0"
            >
              <span>{{ current[tfield.name] }}</span>
            </router-link>
            <span v-else>{{ current[tfield.name] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    datalist: {
      required: true,
      default: () => []
    },
    thbgclass: {
      type: String,
      default: "thbg"
    },
    thfields: {
      required: true,
      default: () => []
    }
  }
};
</script>
<style scoped lang="scss">
$primary: #5593e4;
.thbg {
  color: white;
  background-color: lighten($primary, 20%);
}

a {
  text-decoration: none;
}
</style>
