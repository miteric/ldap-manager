<template>
  <nav id="nav">
    <p class="logo">HELLO APP</p>
    <ul class="nav-links">
      <li v-for="menuitem in menuitems" :key="menuitem.name" class="links">
        <router-link :to="menuitem.url">
          {{ menuitem.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // eslint-disable-next-line no-undef
      menuitems: MEApp.menuitems
    };
  }
};
</script>

<style scoped>
#nav {
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
