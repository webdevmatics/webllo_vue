<template>
  <v-app>
   <v-toolbar>
     <v-menu offset-y v-if='loggedIn'>
      <v-btn primary flat slot="activator"><v-icon left>developer_board</v-icon> Boards</v-btn>
      <v-list>
        <div v-for="board in boards" :key="board.id">
            
            <router-link :to ="{name:'SingleBoard',params:{id:board.id}}" tag='v-list-tile' >
               {{board.name}} 
            </router-link>

        </div>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-toolbar-title> <router-link to="/" tag="span"><v-btn flat>{{title}}</v-btn></router-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if='!loggedIn'>
      <router-link to="/register" tag="span"><v-btn flat>Register</v-btn></router-link>
      <router-link to="/login" tag="span"><v-btn flat>Login</v-btn></router-link>
    </div>

    <v-menu offset-y v-if='loggedIn'>
      <v-btn primary flat slot="activator"><v-icon left>developer_board</v-icon> {{user.username}}</v-btn>
      <v-list>
          <router-link to="/logout" tag='v-list-tile'>Logout</router-link>
      </v-list>
      </v-menu>

  </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
   
  </v-app>
</template>

<script>
import boardDataMixin from './mixins/boardDataMixin'
  export default {
    data () {
      return {
        boards: '',
        user:'',
        title: 'Webllo',
        loggedIn:false
      }
    },
    created () {

     this.redirectGuestToLogin();

      Event.$on('login',($user)=>{
        this.loggedIn=true;
        this.user=$user;
        this.fetchBoardsData();
      });

       Event.$on('logout',()=>{
            this.loggedIn=false;
          });

        if(token){
          this.user= JSON.parse(localStorage.getItem('user'));
          this.loggedIn=true;
          this.fetchBoardsData();
        }
    },
    mixins:[boardDataMixin],

    methods:{

      redirectGuestToLogin(){
         if (!token) {
          return this.$router.push('/login');
        }
      }

    }

   }
</script>

<style lang="stylus">
  @import './stylus/main'

</style>
