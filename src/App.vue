<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="loggedIn" to="/about">About</router-link> |
      <router-link v-if="!loggedIn" to="/login">Login</router-link> |
      <router-link v-if="loggedIn" to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
