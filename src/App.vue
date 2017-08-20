<template>
  <v-app light>
   <v-toolbar>
    <v-menu offset-y>

      <v-btn flat  slot="activator"><v-icon left>web</v-icon> Dropdown</v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-toolbar-title v-text="title"></v-toolbar-title>


  </v-toolbar>
    <main>
      <v-container fluid>
      </v-container>
    </main>
   
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        title: 'Webllo'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

</style>
