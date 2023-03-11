<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <BotNav/>

        <!-- <RouterLink to= "/about">
        <v-btn
        class="bg-cyant-accent-4 h-10 w-75 ma-2"
        variant="outlined"
        color="primary">
            About
        </v-btn>
        </RouterLink>
      </v-navigation-drawer>

      <v-navigation-drawer v-model="drawer">
        <RouterLink to= "/help">
        <v-btn
        class="bg-cyant-accent-4 h-10 w-75 ma-2"
        variant="outlined"
        color="primary">
            Help
        </v-btn>
        </RouterLink> -->
      </v-navigation-drawer>

      <!-- <v-navigation-drawer v-model="drawer">
        <RouterLink to= "/">
        <v-btn
        class="bg-cyant-accent-4 h-10 w-75 ma-2"
        variant="outlined"
        color="primary">
            Home
        </v-btn>
        </RouterLink>
      </v-navigation-drawer> -->
  
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title> RUTA </v-toolbar-title>

        <v-btn>
            hola
        </v-btn>
      </v-app-bar>
  
      <v-main>
        <slot></slot>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import BotNav from './BotNav.vue';
  import {defineComponent}from 'vue';

    export default defineComponent({
        name: 'NavBar',

      data: () => ({ 
        drawer: false }),

      components:{
        BotNav,
      }
    })
  </script>