<template>
  <div id="app">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item toggle-class="white" href="#" @click.prevent="login" v-if="!activeUser">Login</b-nav-item>
          <b-nav-item toggle-class="white" href="#" @click.prevent="logout" v-else>Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
  
  export default{
    name: 'app',
    data () {
      return {
        activeUser: null,
      }
    },
    async created () {
      await this.refreshActiveUser()
    },
    watch: {
      '$route': 'refreshActiveUser'
    },
    methods: {
      login () {
        this.$auth.loginRedirect()
      },
      async refreshActiveUser () {
        this.activeUser = await this.$auth.getUser()
      },
      async logout () {
        await this.$auth.logout()
        await this.refreshActiveUser()
        this.$router.push('/')
      }
    }
  }

</script>

<style>
.navbar-light .navbar-nav .nav-link {
    color: rgba(255,255,255, 0.5);
}
.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(230,230,230, 0.5);
}
</style>
