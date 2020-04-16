<template>
  <div class="table-responsive">
    <table class="table table-striped table-hover table-borderless">
      <thead :class="thclass">
        <tr>
          <th v-for="(hfield, i) in thfields" :key="i" scope="col">
            {{ $lang[hfield.name] }}
          </th>
          <th scope="col" v-if="showaction">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(current, k) in datalist" :key="k">
          <td v-for="(tfield, j) in thfields" :key="j">
            <router-link
              :to="{ name: 'route.view', params: { pid: current.pid } }"
              v-if="j == 0"
            >
              <span>{{ current[tfield.name] }}</span>
            </router-link>
            <span v-else>{{ current[tfield.name] }}</span>
          </td>
          <th scope="row" class="pt-0" v-if="showaction">
            <div class="pull-right">
              <button
                type="button"
                class="btn text-primary dropdown-toggle dropdown-toggle-split"
                id="dropdownMenuReference"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-reference="parent"
              >
                <span class="sr-only">Toggle Dropdown</span>
                {{ $lang.action }}
              </button>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuReference"
              >
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'route.view', params: { pid: current.pid } }"
                >
                  <span>{{ $lang.view }}</span>
                </router-link>
                <router-link
                  v-if="editable"
                  class="dropdown-item"
                  :to="{ name: 'route.edit', params: { pid: current.pid } }"
                >
                  <span>{{ $lang.edit }}</span>
                </router-link>
                <div class="dropdown-divider"></div>

                <a class="dropdown-item" @click="dodelete(k)" v-if="delable">{{
                  $lang.delete
                }}</a>
              </div>
            </div>
          </th>
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
    },
    showaction: {
      default: true
    },
    dodelete: {
      type: Function
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
