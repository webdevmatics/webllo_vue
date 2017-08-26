<template>
  <v-app>
   <v-toolbar>
     <v-menu offset-y v-if='loggedIn'>
      <v-btn primary flat slot="activator"><v-icon left>developer_board</v-icon> Boards</v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if='!loggedIn'>
      <router-link to="/register" tag="span"><v-btn flat>Register</v-btn></router-link>
    </div>

  </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
   
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: '',
        title: 'Webllo',
        loggedIn:false
      }
    },
    created () {
      Event.$on('login',()=>{
        this.loggedIn=true;
      });

       Event.$on('logout',()=>{
            this.loggedIn=false;
          });

        let token = localStorage.getItem('token');
        if(token) {
          this.loggedIn=true;
        }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

</style>
