<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover table-borderless">
      <thead :class="thclass">
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
    thclass: {
      type: String,
      default: "th-simple"
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
$warning: #fffc99;
$secondary: #6b6c7e;
.table {
  color: $secondary;
  th {
    padding-bottom: 0.3em;
  }
  td {
    padding-bottom: 0.5em;
  }
}
.table-striped tbody tr {
  background-color: white;
  &:nth-of-type(even) {
    background-color: lighten($primary, 36%);
  }
  &:hover {
    background-color: lighten($primary, 32%);
  }
}

.th-simple {
  border-bottom: 1px solid lighten($secondary, 40%);
}
.thbg-inv {
  color: white;
  background-color: lighten($primary, 20%);
}
a {
  text-decoration: none;
  color: $secondary;
}
</style>
